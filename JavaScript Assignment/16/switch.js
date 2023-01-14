/*
16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
*/

// Answer :

let month = prompt("Enter the month: ");

switch(month){
    case 'September':
    case 'October':
    case 'November':
    case 'september':
    case 'october':
    case 'november':
        document.write("<h1> This is Autumn Season </h1>");
        break;
    case 'December':
    case 'January':
    case 'February':
    case 'december':
    case 'january':
    case 'february':
        document.write("<h1> This is Winter Season </h1>");
        break;
    case 'March':
    case 'April':
    case 'May':
    case 'march':
    case 'april':
    case 'may':
        document.write("<h1> This is Spring Season </h1>");
        break;
    case 'June':
    case 'July':
    case 'August':
    case 'june':
    case 'july':
    case 'august':
        document.write("<h1> This is Summer Season </h1>")
        break;
    default:
        document.write("Please Enter valid month name");
    
    

    
    
}