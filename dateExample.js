/* JavaScript program to find 1st January is being a Sunday between 2014 and 2050 */
var checkDate = new Date(2014, 0, 1);
for(i=0; i< 50 ; i++) {if(checkDate.getFullYear()== 2050) {break;}
 if(checkDate.getDay() == 0){
  console.log(checkDate.getFullYear()+" has sunday as a start day"); 
 }
 else {
 }
 checkDate.setFullYear(checkDate.getFullYear() + 1);
}
