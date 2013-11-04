/*画直线
* origin {array}  线的起始点
*  options {arrayList} 点数组的集合
*  closed {boolean} 是否闭合
*/
function drawLine(ctx,origin,options,closed){
	ctx.beginPath();
	ctx.moveTo(origin[0],origin[1]);
	for(var spot in options){
		ctx.lineTo(options[spot][0],options[spot][1]);
	}
	if(closed){
		ctx.closePath();
	}
}
//画树
function drawTree(ctx){
	ctx.save();
	ctx.translate(130,250);
	drawLine(ctx,[-25,-50],[[-10,-80],[-20,-80],[-5,-110],[-15,-110],[0,-140],[15,-110],[5,-110],[20,-80],[10,-80],[25,-50]],true);
	ctx.lineWidth = 4;
	ctx.lineJoin = "round";
	ctx.strokeStyle = "#663300";
	ctx.fillStyle = "#339900";
	ctx.fill();
	ctx.fillStyle = "#663300";
	ctx.fillRect(-5,-50,10,50);
	ctx.restore();
	ctx.stroke();
}
/* 画曲线
* */
function draw(ctx){

}



