//求1+2+3+...+n
function Sum (n) {
    if (n > 0) 
    return n + Sum(n - 1);

    else return 0;
}


//丑数: 只包含质因子2、3和5的数