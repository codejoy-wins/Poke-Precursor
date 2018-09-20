// 00  01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17  18  19  20  21  22  23
// 12a 1a  2a  3a  4a  5a  6a  7a  8a  9a  10a 11a 12p 1p  2p  3p  4p  5p  6p  7p  8p  9p  10p 11p
// 1-11 a == military
// if 12a  military is 0
// if 12p  military is 12
// if PM, military is + 12
// '09:03AM'  = 09:03
// '01:17PM'  = 13:17
function militarize(time){
    if(time.length == 6){
        time = 0+time;        // if 7 instead of 07, make 7 07.
    }
    console.log('***')
    console.log(time);
    var pm = false;
    if(time[time.length-2] == 'A'){
        console.log('am');
    }else{
        console.log('pm');
        var pm = true;
    }
    if(pm == false && time[0]+time[1]== 12){
        var rest = time.slice(2,5);
        var curr = "00";
        console.log(curr+rest);
        return;
    }
    if(pm == true && time[0]+time[1]!=12){
        console.log("ALERT");
        time = time.slice(0,5);
        console.log(time);
        var truth = time[0]+time[1];
        var milli = Number(truth) + 12;
        var rest = time.slice(2,5);
        var final = milli + rest;
        console.log(final);
        return;
    }else{
        console.log(time.slice(0,5));
    }
}
var test = '09:03AM';
var test2 = '09:03PM';
var test3 = '12:03PM';
var test4 = '12:05AM';
var common = '6:09PM';

militarize(test);
militarize(test2);
militarize(test3);
militarize(test4);
militarize(common);