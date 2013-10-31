$(function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	//普通的简单绘图
	drawLine(ctx,[{x:50,y:50}]);
	//通过变换来绘图，好处是更方便的坐标计算
	//在canvas中使用变换之前需要保存当前的canvas对象，在完成绘图以后要恢复原有的状态
	ctx.save();
	ctx.translate(60,60);
	drawLine(ctx,[{x:60,y:60},{x:90,y:45},{x:110,y:99}]);
	ctx.restore();

})