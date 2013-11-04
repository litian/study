$(function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	//通过变换来绘图，好处是更方便的坐标计算
	//在canvas中使用变换之前需要保存当前的canvas对象，在完成绘图以后要恢复原有的状态
	/*ctx.save();
	ctx.translate(60,60);
	drawLine(ctx,[0,0],[[60,60],[90,45],[110,99]]);
	ctx.restore();*/

	//树
	drawTree(ctx);
	//曲线
	drawQuadraticCurve(ctx);
})