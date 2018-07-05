function fib(num){
	var arr = [];
	arr[0] = 0;
	arr[1] =1;
	
	for(var i =2; i <=num;i++){
	var sum = arr[i-1] + arr[i-2];
	arr.push(sum);
	
	}
	console.log(arr[num]);
}
fib(7);

function fib(num){
	var arr = [];
	arr[0] = 0;
	arr[1] =1;
	
	for(var i =2; i <=num;i++){
	arr[i] = arr[i-1] + arr[i-2];
	
	}
	console.log(arr[num]);
}
fib(7);