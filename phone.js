// you have used 11 of your 30 included mins or msgs
/*
after 30, flat rate of .10 per min applies.
balance $14.80
*/
// how long can I talk on the phone??

console.log(30 - 11);
console.log(14.8/.1);

function phone(balance, minutes_used, minutes_allowed, rate){
    var minutes = 0;
    while (balance>0){
        while(minutes_allowed - minutes_used != 0){
            minutes++;
            minutes_used++;
        }
        minutes++;
        balance-=.10;
    }
    console.log(minutes);
    var true_hours = Math.floor(minutes/60);
    var true_minutes = (minutes %60);
    console.log(true_hours + " hours and " + true_minutes + " minutes");
}
// phone(14.80, 11, 30, .10);
// phone(13.60,30,30,.10);
phone(4.00,30,30,.10);
