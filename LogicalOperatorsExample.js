let userLoggedIn = true;
let userPurchasedItem = false;

// test if both values are true
userLoggedIn && userPurchasedItem; // => false

// test if either value is true
userLoggedIn || userPurchasedItem; // => true

// invert the value of a variable
!userLoggedIn; // => false
!userPurchasedItem; // => true
