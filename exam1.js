function findMaxScore(arr) {
    let max=arr[0];
    for(let i =1;i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
let array=[10,5,2,8,-1,6,8];
alert(findMaxScore(array));