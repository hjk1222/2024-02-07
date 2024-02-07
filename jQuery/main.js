$(function(){

    //메뉴
    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })//

    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp()
    })


    //슬라이드
    var n =0; //0 1 2 (0 -100% -200%)

    
    setInterval(function(){
        if(n == 2){
            n=0;
        }else{
            n++;
        }//

        pos = n * (-100) + "%";
        $(".left_move").animate({left : pos}, 500);

    },3000)


    //모달팝업
    $(".modal , .pop").hide();
    


    $(".p_click").click(function(){
        $(".modal , .pop").show()
    })//

    $(".close").click(function(){
        $(".modal , .pop").hide()
    })//
})// Jquery