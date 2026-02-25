1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : The major difference between these selectors is getElementById is used to select an element by it's id, getElementByClassname is used to get an element by a classname, querrySelector is used to select first matching elements and querrySelectorAll is used to select all matching elements.

2. How do you create and insert a new element into the DOM?
Ans : First we get the element by any selector and the assign it to a variable the we create another variable that we want to add then we use appenChild to add the new variable to the previous variable.

3. What is Event Bubbling? And how does it work?
Ans : Event bubbling means when we click on an element, the event moves upward to its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Event Delegation is adding one listener to the parent element instead adding event listeners to every child. It is useful because saves memory, works dinamically.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : The main difference is stopPropagation() stops the event from moving to parent elements and stops event bubbling and the preventDefault() stops browser's default behaviour and stops event bubbling up.