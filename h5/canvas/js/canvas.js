//画直线 原点始终在(0,0),使用变换来移动
function drawLine(ctx,options){
	ctx.beginPath();
	ctx.moveTo(0,0);
	for(var spot in options){
		ctx.lineTo(options[spot].x,options[spot].y);
	}
	ctx.stroke();
}
//画树冠
function drawTree(ctx){

}



