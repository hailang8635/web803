var timeout_;
$(function(){
    $("div[id^='rolingBox']").hide();
    $("li[id^='rolingButtons']").off("mouseenter");

    $("li[id^='rolingButtons']").on("mouseenter",function(){
		clearTimeout(timeout_);
        $(this).css('border-right','#a6c198 0px solid');
        $(this).siblings().css('border-right','#a6c198 1px solid');
        
        $("li[id^='rolingButtons']").first().css('border-top','#a6c198 0px solid');
		$("li[id^='rolingButtons']").last().css('border-bottom','#a6c198 0px solid');

        var id = $(this).attr("id");
        var idnum = id.replace("rolingButtons","");
        var box = $("[id='rolingBox"+idnum+"']");
		//使用roling.js 样式对不齐，故没有使用
		$(this).addClass('lis1_a');
        $(this).siblings().removeClass('lis1_a');
		box.show();

        var top = $(this).offset().top;
        var height = $(this).height();
        if(top<=52){// 第一个格42
         top = 51;
        }
		//console.info(top);
		if(top>=668){
			//box.show();
			var subHeight = box.find(".sub").height();
			//console.info("高度大于：668,实际是:"+(top)+"  "+height+"   "+subHeight);
			top = top+height-subHeight;
			box.find(".sub").css("top",top-46.5);
		}else{      
			box.find(".sub").css("top",top-51);
			//box.show();
		}
        $("div[id^='rolingBox'][id!='rolingBox"+idnum+"']").hide();
    });

    $("li[id^='rolingButtons']").off("mouseleave");
    $("li[id^='rolingButtons']").on("mouseleave",function(){
		timeout_ = setTimeout("f_mouseout()",300);
    });

    $("li[id^='rolingButtons']").css('border-right','#a6c198 1px solid');

	$("div[id^='rolingBox']").on("mouseenter",function(){
		clearTimeout(timeout_);
    });
	
	//调试注释
	$("div[id^='rolingBox']").on("mouseleave",f_mouseout);

	//setInterval('SAutoPlay(1);',3000);
});

function f_mouseout(){
	//console.info("out...");
    $("div[id^='rolingBox']").hide();
	$("li[id^='rolingButtons']").css('border-right','#a6c198 1px solid');
	$("li[id^='rolingButtons']").removeClass('lis1_a');
}

//var sti=11;
//function SAutoPlay(){ // 用于实现循环的部分j
//    if(sti==22){sti=11;}
//    $("#Buttons"+sti).mouseover();
//    sti+=1;
//}
// 暂不滚动
// setInterval('SAutoPlay();',3000);