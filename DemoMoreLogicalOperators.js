/* 

Operator precedence:
  1. Parentheses (())
  2. Exponents (**)
  3. Multiplication (*)
  4. Division (/)
  5. Addition (+)
  6. Subtraction (-)

  Question: Where do Equality Check (===), Not (!), And (&&), and Comparison (>) fit in this list? Try to add all four to the list.
  Use the code below to experiment and find out.
  
  Hint: Try adding parentheses, changing the operators, and logging different values!
*/

if (!5 - 4 > 2 === 2 * 10 / 5 === 4) {
    console.log("the expression was truthy")
  } else {
    console.log("it was falsy");
  }
  
  console.log(!5);
  console.log(!5 - 4);
  console.log(4 > 2);
  console.log(5 - 4 > 2);
  console.log(4 > 2 === 2);
  console.log(2 * 10 / 5);
  console.log(2 * 10 / 5 === 4);
