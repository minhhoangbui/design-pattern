# Constructor Design Pattern

This patterns instruct us to create objects using Class and Function.

## Class:
It helps to generate objects like in other programming languages. This 
class will need a constructor function (like *__init__.py* in Python)

## Function:
In JavaScript, functions can also replace the role of Class with the help of *this* keyword. 

Furthermore, to the best of my knowledge, function also have the *prototype* to save 
storage space when several objects share a same property function.  
This relates to the *new* keyword which:
- Transform a regular function to constructor function which returns a object.
- Link object to object prototype.
- Bind this to the new object scope
- Implicitly return this if there is no return command in the code