//创建列表类
function ArrayList() {
    //属性
    this.array = [];

    //方法
    //将数据插入数组中的方法
    ArrayList.prototype.insert = function (item) {
        this.array.push(item);
    }

    //toString 方法
    ArrayList.prototype.toString = function () {
        return this.array.join('-');
    }

    //交换两个数据位置的方法
    ArrayList.prototype.swap = function (m, n) {
        var temp = this.array[m];
        this.array[m] = this.array[n];
        this.array[n] = temp;
    }

    //实现排序算法
    //1.冒泡排序
    ArrayList.prototype.bubbleSorts = function () {
        var length = this.array.length;

        for (var j = length - 1; j >= 0; j--) { //从最后一个数开始排序
            for (var i = 0; i < j; i++) {
                if (this.array[i] > this.array[i + 1]) {
                    this.swap(i, i + 1);
                }
            }
        }
    }

    //2.选择排序
    ArrayList.prototype.selectionSort = function () {
        var length = this.array.length;

        //外层循环, 从 0 开始, 让数组中的每个位置都变成最小值
        for (var j = 0; j < length - 1; j++) {
            var min = j; //记录最小值的下标
            //内层循环: 比较出最小值
            for (var i = min + 1; i < length; i++) {
                if (this.array[min] > this.array[i]) {
                    min = i;
                }
            }

            this.swap(min, j);
        }
    }

    //3.插入排序
    ArrayList.prototype.insertionSort = function () {
        var length = this.array.length;

        //外层循环: 从第二位开始获取数据, 向前面进行局部有序插入
        for (var i = 1; i < length; i++) {
            //内层循环: 获取 i 位置的元素, 前面的数据进行依次比较
            var temp = this.array[i];
            var j = i;
            while (this.array[j - 1] > temp && j > 0) {
                this.array[j] = this.array[j - 1];
                j--; //如果循环继续下去, j 会不断变小
            }
            //将减小后的 j 位置的数据放置 temp
            this.array[j] = temp;
        }
    }

    //4.希尔排序
    ArrayList.prototype.shellSort = function () {
        var length = this.array.length;

        //初始化增量
        var gap = Math.floor(length / 2);

        //循环使 gap 不断减小
        while (gap >= 1) {
            //以 gap 作为分隔进行分组, 再对每一个分组进行插入排序
            for (var i = gap; i < length; i++) {
                var temp = this.array[i];
                var j = i;
                while (this.array[j - gap] > temp && j > gap - 1) {
                    this.array[j] = this.array[j - gap];
                    j -= gap;
                }

                //将 j 位置的元素赋值给 temp
                this.array[j] = temp;
            }

            //增量变化
            gap = Math.floor(gap / 2);
        }
    }

    //5.快速排序
    //1.选择枢纽
    ArrayList.prototype.median = function (left, right) {
        //1.取出中间位置
        var center = Math.floor((left + right) / 2);

        //2.判断大小并且进行交换
        if (this.array[left] > this.array[center]) {
            this.swap(left, center);
        }
        if (this.array[center] > this.array[right]) {
            this.swap(center, right);
        }
        if (this.array[left] > this.array[center]) {
            this.swap(left, center);
        }

        //3.将 center 换到 right - 1 的位置
        this.swap(center, right - 1);

        return this.array[right - 1];
    }

    //2.实现快排: 外部函数
    ArrayList.prototype.quickSort = function () {
        this.quick(0, this.array.length - 1);
    }

    //内部递归函数
    ArrayList.prototype.quick = function (left, right) {
        //1.结束条件
        if (left >= right - 1) {
            return;
        }

        //2.获取枢纽
        var pivot = this.median(left, right);

        //3.定义指针
        var i = left;
        var j = right - 1;

        //4.依次寻找并交换
        while (true) {
            while (this.array[++i] < pivot) {}
            while (this.array[--j] > pivot) {}
            if (i < j) {
                this.swap(i, j);
            } else {
                break;
            }
        }

        //5.将枢纽放到 i 的位置
        this.swap(i, right - 1);
        // console.log(this.array);

        //6.递归调用
        this.quick(left, i - 1); //递归调用左边
        this.quick(i + 1, right); //递归调用右边
    }
}

var list = new ArrayList();

//快速排序
var arr = [3, 4, 2, 6, 5, 8, 9, 10, 16, 13]; // length = 10
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    //     基准值
    var pivot = arr[Math.floor(arr.length / 2)];
    arr.splice(arr.indexOf(pivot), 1);
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }

    }
    return quickSort(left).concat([pivot], quickSort(right));

}

console.log(quickSort(arr));


//不使用递归的快排
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    //基准值
    var pivot = arr[Math.floor(arr.length / 2)];
    arr.splice(arr.indexOf(pivot), 1);
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }

    }
    return quickSort(left).concat([pivot], quickSort(right));

}
