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
}

var list = new ArrayList();
list.insert(123);
list.insert(45);
console.log(list.toString());