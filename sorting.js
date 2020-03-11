//创建列表类
function ArrayList () {
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

        for (var j = length - 1; j >=0; j--) {    //从最后一个数开始排序
            for (var i = 0; i < j; i++) {
                if (this.array[i] > this.array[i+1]) {
                    this.swap(i, i+1);
                }
            }
        }
    }

    //2.选择排序
    ArrayList.prototype.selectionSort  = function () {
        var length = this.array.length;

        //外层循环, 从 0 开始, 让数组中的每个位置都变成最小值
        for (var j = 0; j < length - 1; j++) {
            var min = j;  //记录最小值的下标
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
                j--;    //如果循环继续下去, j 会不断变小
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
                while (this.array[j - gap] >temp && j > gap - 1) {
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
}

var list = new ArrayList();
list.insert(123);
list.insert(45);
list.insert(999);
list.insert(1);
list.insert(5);
list.insert(23);
console.log(list);
console.log(list.toString());

list.shellSort();
console.log(list);
// list.selectionSort();
// console.log(list);

// list.bubbleSorts();
// console.log(list);
