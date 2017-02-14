# Recursion

Recursion crops up repeatedly both in web development and in computer
science in general. It's used to traverse more complex data structures
such as trees. The DOM, for example, is a classic tree structure.

Often times, a recursive solution to a problem is more elegant than
an imperative solution, and you may very well be asked to solve a 
problem in a tech interview that requires a recursive approach. 

## Objectives

1. Get used to recursion! And it takes a bit of getting used to but once  you understand the basic patterns and you start to develop a mindset for looking for the recursive solution, it becomes more and more natural.
2. Use the built-in debugging tools that are available to you in VS Code (breakpoints, debugger statement) to step through your code and see where it goes wrong.
3. Continue to use TDD to make sure we are writing quality code

## Tasks 
#### (always use recursion even if the problem lends itself to a good imperative solution)

1. Implement the factorial function
2. Implement the fibonacci function
3. Implement a function that counts the number of white spaces in a string
4. Implement a function that sums the integers 1 through n;
5. Implement a function that works out whether a string is a palindrome
6. Implement a function that sums the digits of a number
7. Implement a function that reverses a string
8. Count the number of zeros in an array of integers
9. Find the maximum element in an array of integers
10. Implement a [stringifyJSON function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
11. Re-implement the browser function [getElementsByClassName](https://developer.mozilla.org/en/docs/Web/API/Document/getElementsByClassName) (rename it so it doesn't clash)
12. Write a function *analyzeArray* that takes a string and an arbitrarily 
complex nested array and console.logs the value of each array element on 
a separate line. The value of each line should be preceded by the string 
and numbers indicating the depth and index of the element in the array. You 
can assume that the array contains only strings and other nested array.

e.g. 

```javascript
var arr = ['carrot', ['car','boat','plane'], 'turtle', ['house']]; 
analyzeArray('jimbo', arr);
```

should console.log:

```javascript
jimbo.0:  carrot
jimbo.1.0: car
jimbo.1.1 : boat
jimbo.1.2: plane
jimbo.2: turtle
jimbo.3.0: house
```


## Tips

##### Exercise 11 

Just do it step by step, using TDD. Look into what constitutes acceptable [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
and start off testing the simplest JSON object you can think of and build from there.

##### Exercise 12 

Look into [Document.body](https://developer.mozilla.org/en-US/docs/Web/API/Document/body),
[Node.childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) (which
returns a list of type [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList))
& [Element.classList](https://developer.mozilla.org/en/docs/Web/API/Element/classList). You will need to find a library that will allow you to load HTML into Node in order to work with it.


