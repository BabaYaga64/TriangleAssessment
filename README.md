Triangle Assessment

April 10th, 2015

Description

This program, written in JavaScript, takes user input of 3 sides of a triangle. Once these inputs are entered, the code returns whether the triangle is one of 3 types:

equilateral triangle: all sides are the same length
isosceles: 2 sides are equal length
scalene: none of the sides are equal length

The code also takes into account the following rules for triangles:
The sum of the lengths of any two sides must always be larger than the length of the third side.

Ex. side_1 < (side_2 + side_3)

    side_2 < (side_1 + side_3)

    side_3 < (side_1 + side_2)

    NOT a triangle:
    side_1 > (side_2 + side_3)


Setup instructions

1. Clone git repository from GitHub or create a new git repository if you are starting project from scratch.
2. Make sure you have the Mocha.js, Mocha.css, Chai.js in your spec folder, and jQuery-1.11.2.js files saved in your js folder of your main project folder.
3. Make sure you have a spec-runner.html file that points to all of your other files, and save it in your main project folder.
4. Create a specs.js file where you will write your tests and save it in the spec folder.
5. When you are finished with your first test, you can create your scripts.js file that will have your program. You can save this in the js folder also.
6. Open up spec-runner.html in your browser to see if your tests are passing. Use Chrome debugger to figure out what values you are getting back based on your inputs.
7. Create a form for user input, and create jQuery code to render that input in the browser.

The MIT License (MIT)

Copyright (c) 2015 Bojana Skarich

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
