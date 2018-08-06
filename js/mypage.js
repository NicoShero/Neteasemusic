$(function (){
    $("#myown").click(function() {
        $("#myownlist").toggle();
    })
    $("#mycollect").click(function() {
        $("#mycollectlist").toggle();
    })
})
$(function(){
    var	oImg = document.getElementById("myownright");
    var onOff = true;
    oImg.onclick = function(){
        if(onOff){
            oImg.src = 'img/right.png';
            onOff = false;
        }else{
            oImg.src = 'img/down.png';
            onOff = true;
        }
    };
});
$(function(){
    var	Img = document.getElementById("mycollectright");
    var onO = true;
    Img.onclick = function(){
        if(onO){
            Img.src = 'img/right.png';
            onO = false;
        }else{
            Img.src = 'img/down.png';
            onO = true;
        }
    };
});