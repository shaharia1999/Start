let x = 10;

// 1 -10 namota *************************
for (let i = 1; i <= x; i++) {
  for (let y = 1; y <= x; y++) {
    console.log(i * y);
  }}

//  squire
let n = 5; 
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i===n-1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
  // piramid *******************************
  for(i=1;i<=5;i++){
    let a=''
    for(x=5;x>i;x--){
      a +=" "
    }
    for(k=1;k<=((2*i)-1);k++){
      a +="*"
    }
    console.log(a)
  }
  // !piramid *******************************
  let n=5
  let string=''
  for(i=1;i<=n;i++){
    let string=''
  for(x=1;x<i;x++){
    string +=' '
  }
    for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
    console.log(string)
  }
  // arif vai
   
 let n=10
 for(i=1;i<=n;i++){
    let a=''
   for(x=i;x<=n;x++){
      a +=" "
    }
    for(k=1;k<=((2*i)-1);k++){
      a +="*"
    }
    console.log(a)
  }
