// timestamp() function is no longer a basic function, as simplifying the time display
function timestamp(NT,displaytype)
{
 var aaa;
 var realhour = NT.getHours();
 var realminute = NT.getMinutes();
 var realsecond = NT.getSeconds();

 var hour_12=parseInt(realhour); // for 12-hour clock (12AM-11:59AM or 12PM-11:59PM)
 var hour_24=parseInt(realhour); // for 24-hour clock (00:00-23:59)

 // 12-hour clock code
 var TimeOfDay=(hour_12>=12) ? "PM" : "AM";
 if ( hour_12>=12 ) hour_12-=12;
 if ( hour_12==0 ) hour_12+=12;

 // 24-hour clock code
 if ( hour_24 < 10 )
     hour_24 = ("0") + hour_24;
 
 // Other code

 // leading zero for 12-hour clock.
 var A_realhour = hour_12;
 if ( A_realhour < 10 ) A_realhour=("0")+A_realhour;

 if ( realsecond<10 )
     realsecond = ("0") + realsecond;
 if ( realminute<10 )
     realminute = ("0") + realminute;

 switch (displaytype)
 {
     case "h:mm am/pm":
         aaa=(hour_12) + ":" + realminute.toString() + " " + TimeOfDay;
         break;
     case "h:mm:ss am/pm":
         aaa=(hour_12) + ":" + realminute.toString() + ":" + realsecond.toString() + " " + TimeOfDay;
         break;
     case "hh:mm am/pm": // same as above
         aaa=A_realhour.toString() + ":" + realminute.toString() + " " + TimeOfDay;
         break;
     case "hh:mm:ss am/pm":
         aaa=A_realhour.toString() + ":" + realminute.toString() + ":" + realsecond.toString() + " " + TimeOfDay;
         break;
     case "HH:mm":
         aaa=hour_24.toString() + ":" + realminute.toString();
         break;
     case "HH:mm:ss":
         aaa=hour_24.toString() + ":" + realminute.toString() + ":" + realsecond.toString();
         break;
     default:
         aaa="Invalid Format";
         break;
 }
 var res=aaa;
 return res;
}


// GetWeekday() and datestamp() were merged into one function
function datestamp(NT,displaytype)
{
 var realyear=NT.getFullYear();
 var realmonth=NT.getMonth();
 var realday=NT.getDate();
 var realweekday=NT.getDay();

 var nummonth=Math.floor(parseInt(realmonth+1));
 var numday=Math.floor(parseInt(realday));
 var numyear=NT.getYear();

 if ( numyear>99 )
     numyear-=100;
 if ( numyear<=0 )
     numyear+=100;

 if ( nummonth<10 ) nummonth=("0")+nummonth;
 if ( numday<10 ) numday=("0")+numday;
 if ( numyear<10 ) numyear=("0")+numyear;

 var monthname=["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
 
 var weekdayname=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 var aaa;
 switch (displaytype)
 {
     case "mmmm d, yyyy":
         aaa=monthname[realmonth] + " " + realday.toString() + ", " + realyear.toString();
         break;
     case "mm/dd/yy":
         aaa=nummonth.toString()+"/"+numday.toString()+"/"+numyear.toString();
         break;
     case "dd/mm/yy":
         aaa=numday.toString()+"/"+nummonth.toString()+"/"+numyear.toString();
         break;
     case "w, mmmm d, yyyy":
         aaa=weekdayname[realweekday]+", "+monthname[realmonth]+" "+realday.toString()+", "+realyear.toString();
         break;
     case "Weekday Only":
         aaa=weekdayname[realweekday];
         break;
     default:
         aaa="Invalid Date Format";
         break;
 }
 var res=aaa;
 return res;
}

function ConvertUppercase(target_string)
{
 var aaa=target_string;
 var converted=aaa.toUpperCase();
 return converted;
}

function ConvertLowercase(target_string)
{
 var aaa=target_string;
 var converted=aaa.toLowerCase();
 return converted;
}

function CompareValues(target1,target2)
{
 var often;

 if ( target1>target2 )
     often=true;
 else
     often=false;

 return often;
}

function StringEqualTo(target1,target2)
{
 var often;

 if ( target1==target2 )
     often=true;
 else
     often=false;

 return often;
}

function TristanNumber(target_number)
{
 var aaa=parseInt(target_number);

 var converted=Math.floor(parseInt(aaa * 575));
 return converted;
}
