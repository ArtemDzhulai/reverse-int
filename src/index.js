module.exports = function reverse (n) {
n = n + "";
let result = n.split('').reverse().join('');
if (result[result.length - 1] === '-'){
    return result.slice(0, result.length -1);
}else{
return result;
}
}