function printStr() {
  let str = "I LOVE JS";
  for (let index = 0; index < 3; index++) console.log(str); //3 I LOVE JS
}
printStr();
//----------------------
function printStr1() {
  let str = "I LOVE JS";
  let sum = "";
  for (let index = 0; index < 3; index++) {
    sum += str + "\n";
  }
  console.log(sum); // I LOVE JS
}
printStr1();
//==================================
function print1To5() {
  let num = 1;
  for (let index = 0; index < 5; index++) {
    console.log(num++);
  }
}
print1To5();
//==============================
function printnum() {
  let n = 1;
  let sum = "";
  for (let index = 0; index < 5; index++) {
    sum += n + " ";
    n++;
  }
  console.log(sum);
}
printnum();
//===================================
function sumOfEven() {
  let sum = 0;
  for (let index = 1; index <= 10; index++) {
    if (index % 2 == 0) {
      sum += index;
    }
  }
  console.log(sum);
}
sumOfEven();
//=========================================
function return_break_continue() {

  for (let index = 1; index <= 10; index++) {
    console.log("Start");
    if (index % 2 == 0) {
      //return;
      //break;
      continue;
    }
    console.log(index);
    console.log("End")
  }
  console.log("out of the loop");
}
return_break_continue();
