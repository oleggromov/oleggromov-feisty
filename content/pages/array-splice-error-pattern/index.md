Imagine you’re writing an algorithm that performs looping over an array with any type of pointer (`for` or `while` loop, `forEach`, `map`, etc). Each iteration the pointer moves in any direction, but you never force it to come back in most cases. Why should you, after all?

This mode of manipulating data is so usual that you probably have never thought about how liable it is to causing hard-to-find bugs, which lead you towards tiresome debugging!

The erroneous pattern is very simple and obvious. Say you need to map some action to every array element and output it.

```javascript
const arr = [1, 2, 3]
arr.forEach(act)

function act(item) {
	console.log(item)
}
```

This will simply iterate over an array of numbers and call `act` with each item as an argument. Very obvious, isn’t it?

The thing works fine until you decide to mutate array when iterating over it. You might, for example, modify the callback in the following way.

```javascript
function act(item, index) {
	if (item) {
		console.log(item)
	} else {
		arr.splice(index, 1)
	}
}
```

The new version of `act` outputs an element if it exists but also takes care of absent or empty elements by removing them from the array.

The `splice` method is a good choice to do such manipulation. Even if you stare at this code for a minute you maybe won’t exhibit its deceptive nature. Internally and intuitively, at least to me, moving through array just one item after another seems the like the safest way of doing things.

But wait! What if an array can be changed during the manipulation?

My guess is you’ve already understood what happens in that case. The `forEach` method internally moves the iterator over array elements, counting from the first to the last one.

Until we have an array of "truthy" values nothing can happen with the callback. But an element will be skipped for each "falsy" one in an array!

The mutating version of `act` method called on the `[1, undefined, 3, 4, undefined, 5]` array will only log `1` and `4` because it internally moves the pointer one step forward every time you delete another item, and hence changes the array length, which leads to omitting an item per deletion.

## The Only Correct Fix

**Warning!** All the stuff described above and below may very well originate only from the misunderstanding of `forEach`. The correct and, I claim, the **only fix that is worth knowing of** is to avoid array modifications from within declarative loops when you don't directly control the pointer.

There is the `filter` method to help you cleaning the array before iterating over it. And the code above should be rewritten as follows.

```javascript
const arr = [1, 2, undefined, 3]
arr = arr.filter(item => Boolean(item))

console.log(arr)
> [1, 2, 3]
```

As the `filter` method decides whether to keep or delete each item based on the callback return value, we simply return `false` for "falsy" array items. Note that I usually explicitly convert anything to boolean to make it easier to understand.

## Quick Fix

I would consider a few options to deal with such cases.

This first one is to modify the loop method so it checks if the array length has changed and then move the pointer accordingly. I don’t like this way because it’s awkward and over-complicated.

The second approach is to lock the array similar to concurrent computing until the loop is over. It is rather complicated for a simple algorithm, although definitely more appealing.

The third one I prefer is not to modify array’s length at all, but replace an item with undefined value instead of it. It is very simple and seems to be more efficient if we make no assumptions about possible array length.

### Fix in a Functional Programming Manner

A small discussion on Twitter with [@lukaszwojciak](//twitter.com/lukaszwojciak) and [@DanShappir](//twitter.com/DanShappir) had nudged me to think of an array cloning as a real option.

It's said to be fast enough because cloning makes only shallow copies leaving massive objects untouched. This approach is also **very simple**, which is the most important reason to use it after all.

So the best solution looks the simplest.

```javascript
const original = [1, 2, undefined, 3]
original
	.concat()
	.filter(item => Boolean(item))
	.forEach(act)

function act(item) {
	console.log(item)
}
```

Here we just use `concat` which shall combine arrays for its side effect of returning a shallow copy. This is a bit of JavaScript insanity and we won't obsess over it.
