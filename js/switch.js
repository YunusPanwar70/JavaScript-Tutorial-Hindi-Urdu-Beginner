let day = 6;

switch (day) {
    case 0:
        console.log("Today is Monday");
        break;
    case 1:
        console.log("Today is Tuesday");
        break;

    case 2:
        console.log("Today is Wednesday");
        break;

    case 3:
        console.log("Today is Thursday");
        break;

    case 4:
        console.log("Today is Friday");
        break;

    case 5:
        console.log("Today is saturday");
        break;

    case 6:
        console.log("Today is Sunday");
        break;

    default:
        console.log("Enter A Valid Week Day");
        break;
}

// Age Method for switch 


let age = 24;
switch ("ture") {
    case (age >= 15 && age <= 20):
        console.log("You are Eligible");
        break;

    case (age >= 21 && age <= 30):
        console.log("You are not Eligible");
        break;
        
    default:
        console.log("Enter The Valid Age.");
        break;
}