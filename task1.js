var N=10
var arr=new Array(N)
for (var i=1;i<N;i++){
	arr[i]=Math.round(50+120*Math.random())
}
var count=0;
var sum=0;

	for (var i=1;i<N;i++){
		if(arr[i]%3==0){
			count++;
			sum=sum+arr[i];
		}
    }
    var average=sum/count
    console.log(average)


