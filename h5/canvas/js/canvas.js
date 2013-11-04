/*画路径
*  param {array}  origin 线的起始点
*  param {arrayList} options 路径经过点的集合
*  param {boolean} closed 是否闭合
*/
function drawLine(ctx,origin,throughPoints,closed){
	ctx.beginPath();
	ctx.moveTo(origin[0],origin[1]);
	for(var spot=0;spot<throughPoints.length;spot++){
		ctx.lineTo(throughPoints[spot][0],throughPoints[spot][1]);
	}
	if(closed){
		ctx.closePath();
	}
}
//画树
function drawTree(ctx){
	ctx.save();
	ctx.translate(130,250);
	//树冠路径
	drawLine(ctx,[-25,-50],[[-10,-80],[-20,-80],[-5,-110],[-15,-110],[0,-140],[15,-110],[5,-110],[20,-80],[10,-80],[25,-50]],true);
	ctx.lineWidth = 4;
	ctx.lineJoin = "round";
	ctx.strokeStyle = "#663300";
	ctx.stroke();
	ctx.fillStyle = "#339900";
	ctx.fill();
	ctx.fillStyle = "#663300";
	ctx.fillRect(-5,-50,10,50);
	ctx.restore()
}
/* 画曲线
* */
function drawQuadraticCurve(ctx){
	ctx.save();
	ctx.translate(-10,420);
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.quadraticCurveTo(170,-50,300,-210);
	ctx.quadraticCurveTo(460,-400,530,-400);

	ctx.strokeStyle = "#663300";
	ctx.lineWidth = 20;
	ctx.stroke();
	ctx.restore();
}



