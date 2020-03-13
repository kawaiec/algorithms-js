//将字符串中的空格替换成特定字符
//法1
function replaceSpace(str, content) {
    return str.split(' ').join(content);
}

//法2
function replaceSpace2(str, content) {
    return str.replace(/\s/g, content);
}

//替换多个空白
function replaceSpace3(str, content) {
    return str.replace(/\s+/g, content);
}


//输入一个字符串,按字典序打印出该字符串中字符的所有排列。
//例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
function Permutation(str) {
    const result = [];
    if (str) {
        queue = str.split('')
        PermutationCore(queue, result);
    }
    result.sort();
    return [...new Set(result)];
}

function PermutationCore(queue, result, temp = "", current = "") {
    current += temp;
    if (queue.length === 0) {
        result.push(current);
        return;
    }
    for (let i = 0; i < queue.length; i++) {
        temp = queue.shift();
        PermutationCore(queue, result, temp, current);
        queue.push(temp);
    }
}

//翻转单词顺序, 但单词内的字符顺序不变
function reverseStr(str) {
    if (!str) return '';
    return str.split(' ').reverse().join(' ');
}

//左旋转字符: 把字符串前面的若干个字符转移到字符串的尾部
function LeftRotateString(str, n) {
    if (str && n != null) {
        let count = 0;
        let strArr = str.split('');
        while (count < n) {
            strArr.push(strArr.shift());
            count++;
        }

        return strArr.join('');
    } else return '';
}

//找出字符流中第一个只出现一次的字符
let map = {};

function Init() {
    map = {};
}

function Insert(ch) {
    if (map[ch]) {
        map[ch] += 1;
    } else {
        map[ch] = 1;
    }
}

function FirstAppearingOnce() {
    for (const i in map) {
        if (map[i] === 1) {
            return i;
        }
    }
    return '#';
}
map.add('google');
console.log(FirstAppearingOnce());

