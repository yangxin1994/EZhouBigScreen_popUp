$(function () {
	loadImg();
	popContorl();
	contentToggle();
	
	var playCon1 = new PlayCon("video1");
	playCon1.selfVideoControl();
	// var playCon2 = new PlayCon("video2");
	// playCon2.selfVideoControl();
	// var playCon3 = new PlayCon("video3");
	// playCon3.selfVideoControl();

	//纱帽弹窗上的线图   绘制
			//柱状图
	var echartsBar=echarts.init(document.getElementById('ShaCanvasBar'));
	echartsBar.setOption(optionBar);
            //线图
	var initPopupObjByData0=new InitPopupObjByData('.PopUpBox_sha',dataSha);
	popupObj0=initPopupObjByData0.init('ShaCanvasLine');
	initPopCanvas = new InitPopCanvas(popupObj0);
	initPopCanvas.initCanvas();
	shaPraghToggle();

})
/**************弹窗显示/隐藏控制****** */
/*********popup1   线框图的相关数据 / 纱帽 的数据对象数组***** */
var dataSha={                                              //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData:['10-01','10-02','10-03','10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12'],
	promtArr:['氨氮','高锰酸钾指数','化学需氧量','溶解氧','总磷'],
	dataArr:[
		{
			//name:"",
			'andanArr' : [9.0, 6.0, 8.0,7.0, 6.0, 8.0, 9.0, 6.0, 8.0,  9.0, 6.0, 8.0],
			'MnArr': [4.0, 6.0, 5.5,5.5, 5.5, 4.0, 6.0, 5.5,  4.0,  5.5, 4.0, 6.0], 
			'CheOxyArr':[5.5,  4.0,  5.5, 4.0,4.0, 6.0, 5.5,5.5, 5.5, 4.0, 6.0,  6.0],
			'DisOxyArr' : [8.0,  9.0, 6.0, 9.0, 6.0, 8.0,7.0, 6.0, 8.0, 9.0, 6.0, 8.0],//溶解氧
			'PArr' : [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 4.0, 5.6]
		},
		
	],
	waterAssArr:[]
}
function shaPraghToggle(){
	$("body").on('click','.PopUpBox_sha .lineGraph',function(){
		$(this).toggleClass('active');
		$('.PopUpBox_sha .barGraph').removeClass('active');
	
		$('.PopUpBox_sha .barCanvas').removeClass('active');
		$('.PopUpBox_sha .lineCanvas').addClass('active');
		initPopCanvas.initCanvas();
	})
	$("body").on('click','.PopUpBox_sha .barGraph',function(){
		$(this).addClass('active');
		$('.PopUpBox_sha .lineGraph').removeClass('active');
	
		$('.PopUpBox_sha .lineCanvas').removeClass('active');
		$('.PopUpBox_sha .barCanvas').addClass('active');
	})
}
var optionBar = {
	//color:colorP,//调色板
    xAxis: {
        type: 'category',
        data: ['10-01','10-02','10-03','10-04','10-05','10-06','10-07','10-08','10-09','10-10','10-11','10-12']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1,2,3, 4, 5,6, 4,3,3, 1, 6],
        type: 'bar'
    }]
};
