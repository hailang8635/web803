$(function(){
	$("[id^='rolingButtons']").on("mouseenter",function(){
		var id = $(this).attr("id").substr(13,1);
		var order = $(this).attr("id").substr(15,1);
		$(this).addClass("lis"+order+"_a").removeClass("lis"+order);
		$(this).siblings().addClass("lis"+order).removeClass("lis"+order+"_a");
		//console.info($(this).attr("id"));
		$("[id=rolingBox"+id+"_"+order+"]").show();
		$("[id=rolingBox"+id+"_"+order+"]").siblings().hide();
	});
});

var num = new Array();
function SAutoPlay(order){ //
	if(num[order]==null){ num[order] = 1}
    $("[id^=rolingButtons"+num[order]+"_"+order+"]").mouseenter();
	if($("[id^=rolingButtons"+num[order]+"_"+order+"]").length<1){
		num[order]=1;
	}else{
	    num[order] = num[order]+1;
	}
}
// 暂不滚动
//setInterval('SAutoPlay();',3000);
