While working on one of my inspirational open-source projects, I found out that there's currently no way to observe element style changes. At least I couldn't find any mentions of library-like solutions for that. I assume that the reason for that might be the fact it's hard to understand whether or not the styles have changed.

So, I decided to build a tool and called it `SauronStyle`. Please take a look and [give it a try](https://github.com/oleggromov/sauron-style) if you need anything like that for your project.

## How to Observe

Assuming you know the answer to why you need to track style changes, let's fast forward to how you do so. There're a few ways to update element styling I can think of right away.

- Update its `class` or `style` directly.
- Update its parents' attributes, respectively.
- Insert or remove `style` or `link` elements anywhere in the document.

To watch any of those, we need `MutationObserver` support - a DOM change observing interface supported in modern browsers (IE11+). I suppose that's the same that allows you to watch subtree or attribute modification in Elements pane of your favorite DevTools.

So what does it provide us with? Simply the ability to subscribe to attribute changes (`class` and `style` fall in this category) as well as subtree modifications (external stylesheet insertion on removal lives here).

## How to Check for a Difference

When we know something has changed, we should check if there were any actual changes since the changes we noticed might have not affected element rendering. To do so, we will use `getComputedStyle` - a useful method on `window` supported by any modern browser starting from IE9. It returns a flat object of all CSS properties with values in a similar to CSS "computed style" tab in Chrome.

Importantly, it returns a live [`CSSStyleDeclaration` instance](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration), which changes over time forcing us to keep a copy of it.

## Implementation sneak-peek

Even though you can find the [source code](https://github.com/oleggromov/sauron-style) in the Github repo, it might be interesting for you to see some details.

First of all, I want to subscribe to attributes changes of the element we're interested in. This can be easily achieved.

```javascript
this.mutationObserver = new window.MutationObserver(this.checkDiff)
this.mutationObserver.observe(this.node, {
  attributes: true,
  attributeFilter: ['style', 'class']
})
```

This code creates a new instance of a `MutationObserver` and sends it a callback as the only argument. Then it says: watch `this.node` for the changes in `style` and `class` attributes only and invoke the callback once any of them changes.

Later, in `checkDiff` we want to see if computed styles have changed. It may very well happen a class or new inline styles are appended to the element but the element rendering doesn't change.

```javascript
checkDiff () {
  const newStyle = this.getStyle()
  const diff = getDiff(this.style, newStyle)

  if (Object.keys(diff).length) {
    if (this.subscriber) {
      this.subscriber(diff)
    }
    this.style = newStyle
  }
}
```

The code above gets the current style and compares it with the stored copy. Then, if there is any difference, we store the new one for the future and invoke subscriber function if it has been set already.

The `getStyle` method returns a shallow copy of `this.computedStyle`, which is a reference to the mentioned above `CSSStyleDeclaration` instance.

```javascript
constructor () {
  // ...

  this.computedStyle = window.getComputedStyle(this.node)

  // ...
}

getStyle () {
  return getCopy(this.computedStyle)
}
```

### Observing Other Elements

This would be it more or less, if we didn't care about other elements. Take the case when element's parent node attributes change or `style` or `link[rel=stylesheet]` is inserted or removed from the document. To prepare for this, there is another object that I called `DocumentObserver`. It watches document sub-tree modifications including attribute changes.

```javascript
class DocumentObserver {
  constructor() {
    // ...

    this.observer = new window.MutationObserver(mutations => mutations.forEach(this.observe.bind(this)))
    this.observer.observe(window.document, {
      attributes: true,
      attributeFilter: ['class'],
      childList: true,
      subtree: true
    })  

    // ...
  }

  // ...
}
```

It's quite similar to the other `MutationObserver` use case but here we treat every `mutation` separately and watch changes on `window.document`. Roughly speaking, we want to observe `class` attribute modifications and children insertion/removal for `window.document` and its children. Then we call `observe` for any relevant mutation.

Observation code is very simple.

```javascript
observe (mutation) {
  if (mutation.type === 'childList') {
    this.checkElements(mutation)
  } else if (mutation.type === 'attributes') {
    this.invokeAll()
  }
}
```

Essentially, it checks the type of the mutation and proceeds to a corresponding branch. It's either calling `invokeAll` directly, which just invokes all subscribers, or performing a few checks for element types in order to call `invokeAll` for links or stylesheets.

This part, the `DocumentObserver`, is instantiated in SauronStyle class.

```javascript
this.documentObserver = getDocumentObserver()
this.listenerId = this.documentObserver.addListener(this.checkDiff)
```

First, we use it as a singleton because we only have one document. Second, we subscribe the same `checkDiff` to relevant changes to the document.

## Issues

Well, the code I described seems to work decently but are there any problems?

First of all, the performance is low. We often call `getComputedStyle` and a call takes a few milliseconds, from 1 to 5-6 on my MacBook '2013. It's slow. Imagine a few thousand elements on a page which you want to observe. Will it take a few seconds to react to a DOM change? Yes, it will.

Second, the library is more of proof-of-concept quality rather than a production-ready solution. We call `checkDiff` method extensively for any change in DOM, which sometimes won't be related at all to the element we observe. I guess this additional computational complexity can be eliminated by computing and storing element styles outside DOM. But this could lead to more mistakes in detecting differences and a much bigger comprehension complexity.

I'm also not quite sure that I haven't forgotten any other ways to update element's styles.

## How to Help

- Tell me if you have ever needed anything like that.
- Think and share your thoughts about any other possible ways of detecting style changes.
- Give [the library](https://github.com/oleggromov/sauron-style) a star on the GitHub or use it for one of your projects! 👻

Thanks for your attention!
