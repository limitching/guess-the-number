let answer = Math.floor(100 * Math.random());
let floor = 1;
let ceil = 100;
window.alert("從1~100中猜一個數字吧!\n猜到就算你贏了!");
let guess;
do {
  console.log(answer);
  guess = Number(
    window.prompt("請猜一個介於" + floor + "~" + ceil + "的數字:")
  );
  if (guess < floor || guess > ceil) {
    window.alert("無效猜測，請猜介於範圍內的數字");
    continue;
  }
  if (guess < answer) {
    floor = guess;
  } else if (guess > answer) {
    ceil = guess;
  } else {
    window.alert("恭喜猜對了，終極密碼是" + answer + "!");
    break;
  }
} while (true);
