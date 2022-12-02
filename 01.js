input = document.body.innerText;

f = input.split('\n')

max = 0;

nums = f.reduce((memo, num) => {
    if (num === '') {
        memo.push(0);
        return memo;
    } 

    memo[memo.length - 1] += parseInt(num);
    if (max < memo[memo.length - 1]) {
        max = memo[memo.length - 1];
    }
    return memo;    
}, [0]).sort((a, b) => b - a).slice(0, 3).reduce(((memo, i) => memo + i), 0);
