$(function(){
    $(".modal , .pop").hide()

    // 메뉴

    $(".main>li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })//hover
    
    // 슬라이드
    var n= 0 // 0(0)  1(-100%) 2(-200%) .left_move   position: absolute;left: 0;

    setInterval( l_move ,  3000);

    function l_move(){

        if( n == 2){
            n=0;
        }else{
            n++;
        } //
        pos = n * (-100)  + "%";
        $(".left_move ").animate({left :pos } , 500)
    };//



    // 모달팝업

    $(".pop_click").click(function(){
        $(".modal , .pop").show();
    });//

    $(".close").click(function(){
        $(".modal , .pop").hide();
    });//



})//jquery