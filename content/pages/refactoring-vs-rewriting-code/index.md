Recently, while reading [Martin Fowler’s](https://martinfowler.com) wonderful articles on software architecture, I came across his classical book “Refactoring” which apparently has been updated and published in a second edition. I got to know about this update when watching his [energizing talk at Etsy Engineering](https://www.youtube.com/watch?v=6wDoopbtEqk) in February this year.


## Refactoring is not Rewriting 

First and foremost thing I noticed was that I (and many software developers I communicate with, too) sometimes confuse _refactoring_ a program, that is changing its structure by applying a series of small and safe transformations without affecting behavior, with _rewriting_ it. (Not sure if the term “rewriting” is full enough but I think you get what I mean. For instance, changing data structures or algorithms used to speed up the execution is not an example of refactoring.)

It seems that clearly distinguishing _refactoring_ from _rewriting_ pieces of software entails massive consequences to the way we should submit code for review, give a review, or communicate this to our peer engineers or product people.


## Value of Refactoring for the Business

Refactoring is a method of improving code legibility so that understanding its semantics and structure is easier than before. There’s no real need to refactor any code per se because, by definition, it doesn’t change the behavior of a program and therefore doesn’t add any business value. 

It is only justified to refactor code when there’s a (foreseen) need to implement a new feature or make a change to an existing one. And in such case, it can massively improve engineer’s productivity and confidence leading to better quality and decreased development time. 


## Notes for Engineers (and my future self)

If you change the observed behavior of a program, it’s better to split refactoring into a separate commit or a series of commits that’s easily proven to be correct (by the means of comprehension and proper unit tests coverage). Consequently, when you change the behavior of a program, you cover new functionality with additional tests. 

On the contrary, when applying refactoring techniques to the existing functionality you won’t need to change existing unit tests. Or, when they are absent, you would first cover the feature with tests and then apply a refactoring. Again, better do this in separate steps so there’s a clear line between increasing test coverage and reorganizing code.


## Refactoring Examples in JavaScript 

Lastly, this second edition of the book lays out examples in JavaScript as a language [most software developers understand](https://insights.stackoverflow.com/survey/2019#most-popular-technologies). It makes it easier for front-end developers to quickly pick up and put to use powerful methods of improving software quality. 

Even though I haven’t read the book yet and only added it to my internal wishlist, thanks, Mr. Fowler, for appreciating the vastly changed since 1999 landscape of the modern software engineering. 