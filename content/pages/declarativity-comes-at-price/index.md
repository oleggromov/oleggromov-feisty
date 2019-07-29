There is a widely held opinion, which I usually support, that declarative code is "better" than imperative. It is less error-prone, usually much more eloquent and neat, and hence more maintainable. It is a good principle to follow on a day-to-day basis when you use existing declarative tools or libraries, like JS standard `Array` methods, or `lodash`, or React.

However, when it comes to deciding to either write some declarative, and therefore more generalized code, or just leave an imperative solution, I suggest thinking at least twice.

Every algorithm has a specific complexity. We usually refer to computational and space complexity, but there's also complexity of writing and understanding the code that implements an algorithm.

The latter primarily falls on the programmers who work with such code, and in the (real) world of budgets and deadlines, this maintenance cost is also a valid concern.

## Implementation and Maintenance Costs Are Higher

When you decide to write something declaratively and have already implemented required primitives at your disposal, like `map` or `filter` for JavaScript arrays, you will be fine.

Someone has already spent a decent time writing and debugging it, and the only thing that is left to do is understand how these primitives work to compose your algorithm out of these small pieces. What is even better, once you understand how these building blocks work, you acquire a rare skill of writing concise code with ease, which is appreciated by any good programmer in the world.

On the other hand, when a problem you’re solving or a solution you’re picking is not so common and you cannot find needed “blocks”, you might face a tough decision of implementing them on your own. And quite often more generalization and abstraction require incomparably more effort to implement.

Don't disregard maintenance cost too. When dealing with a well-known and long-living concept such as making database queries, the primitives, best practices, and all the tools are mostly discovered, implemented, debugged and ready for immediate use. Then imagine yourself trying to deliver an important feature on time or eliminate a critical bug in production while maintaining the purity of a hand-made declarative solution that hasn't been that well thought through.

Repeat this a few times and you'll end up having a mess even worse than it would have been without any declarativity at all.

## Comprehension and Debugging Price Might Are Higher Too

Declarative code looks clearer at first glance but this impression is likely to change when it comes to deep comprehension and debugging. Simple things like `map` or `filter` are relatively well known and understood, the more complex things like SQL subqueries are just harder to internalize.

The worst is the homemade and likely not documented and tested well libraries. You might end up unraveling abstractions somebody came up with a long time ago or even rewriting them to make things works as you expect.

Generalized solutions of abstract problems, which declarative code usually aims to solve, are hard. When you generalize an idea and explain it to your friend you might simplify it just for the sake of understanding. On the contrary, when you generalize an algorithm you're likely to cover for many edge cases to just make the code work.

It leads to more sophistication compared to an original smaller issue, more tests to be written, and more time spent on comprehension.

Furthermore, we love eloquence and neatness in our code. A generalized solution might not look great in the beginning unless you've spent hours to find the right shape, whereas the original solution could have taken significantly less time to implement.

## Conclusion

Don’t get me wrong: the enemy I fight against is dogmatic thinking, not coding practices.

In fact, I neither love or hate declarative code. I just raise the point of everything having associated costs. When you’re lucky to have the necessary tools, go ahead and use them. When you encounter a stinky imperative code in your shiny declarative React app, you most likely have a reason to worry and possibly refactor it.

Just try to think twice and decide deliberately rather than subconsciously based on the dogma of "declarative is better".

Considering implementation, maintenance, comprehension and debugging costs, on the other hand, might help to come up with the right decision, whether it is leaving the code as is or paying the price for making it declarative.
