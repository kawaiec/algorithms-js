//阶乘
function factorial(n) {
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(4));

//细胞分裂: 一个细胞, 一小时分裂一次, 生命周期为 3 小时, 求 n 个小时后, 剩余多少细胞
//刚生出来的细胞: white
//一个小时后的细胞: green
//两个小时后的细胞: yellow
//死亡的细胞: black
function total(n) {

  var yellow = function (n) {
    if (n === 0 || n === 1) { //第 0 个小时和第 1 个小时没有黄色细胞
      return 0;
    }

    return green(n - 1);
  }

  var green = function (n) {

    if (n === 0) { //第 0 个小时没有绿色细胞
      return 0;
    }

    return white(n - 1);
  }

  var white = function (n) {
    if (n === 0) {
      return 1; //第 0 个小时只有一个白细胞
    }
    return white(n - 1) + green(n - 1) + yellow(n - 1);
  }

  return yellow(n) + green(n) + white(n);
}


//斐波那契数列 
function Fibonacci(n) {
  if (n < 2) { //递归的出口
    return n;
  }

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}


//跳台阶: 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
//求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）

function jumpFloor(n) {
  if (n <= 2) {
    return n;
  }
  let i = 2;
  let pre = 1;
  let current = 2;
  let result = 0;
  while (i++ < n) {
    result = pre + current;
    pre = current;
    current = result;
  }
  return result;
}