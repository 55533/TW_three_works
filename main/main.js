// Write your cade below:
function caclRemaindar(a,b) {
    return a%b
};

function caclSum(arr) {
    var sum = 0;
    for(var j = 0;j < arr.length;j++)
    {
            sum += arr[j];
    }
    return sum;
};

function caclSumInConditon(arr) {
  //  var arr = new Array(2,3,4,1);
    var i = 5;
    var sum = 0;
    for(var j = 0;j < arr.length;j++)
    {
        if(arr[j] < i)
            sum += arr[j];
    }
    return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
};
