console.log("This is the star.jsx file");
let n=5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    if(i === 1 || i === n || j === n-i+1){
    row += "*";
    }else {
        row = row + "";
    }
  }
  console.log(row);
}
