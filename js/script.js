//Bar Bouncer Script ("Bolaji - The Geek")

//The standard age for entering a bar is 18
//The standard age for buying an alcohol in a bar is 21

/* Script checks if a customer is eligible to enter a bar and get an alcohol
If the customer is less than 18, not allowed!!
If the customer is greater than 18 but less than 21, allowed to enter but cannot buy alcohol
If the customer is greater than 21, allowed to enter and buy alcohol */

//CODE BEGINS. . .
var customerAge = prompt("How old are you?");

if (customerAge === ""){
    document.write("Error! please enter your age");
}
else if (customerAge > 1 && customerAge < 18){
    document.write("Heyy, you are can't enter!!");
}
else if (customerAge < 21){
    document.write("Heyy, you can enter but can't buy an alcohol");
}
else {
    document.write("Come in buddy, drink and have some fun!!!");
}

//CODE ENDS. . .

/* Check my projects on github; https://github.com/bolajiayodeji */