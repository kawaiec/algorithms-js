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

console.log(total(0));
console.log(total(1));
console.log(total(2));
console.log(total(3));
console.log(total(4));