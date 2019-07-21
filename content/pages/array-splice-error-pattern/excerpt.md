Imagine you’re writing an algorithm which performs looping over an array with any type of pointer (`for` or `while` loop, `forEach`, `map` etc). Each iteration the pointer moves in any direction, but you never force it to come back in the most of cases. Why should you? This mode of manipulating data is so much usual that your probably have never ever thought of its liability to hard-to-find annoying errors which will lead you toward wearing debugging!

The erroneous pattern is very simple and obvious. Say you need to map some action to all array elements and write.
