Imagine you’re writing an algorithm that performs looping over an array with any type of pointer (`for` or `while` loop, `forEach`, `map`, etc). Each iteration the pointer moves in any direction, but you never force it to come back in most cases. Why should you, after all?

This mode of manipulating data is so usual that you probably have never thought about how liable it is to causing hard-to-find bugs, which lead you towards tiresome debugging!
