$(function(){
    $("#choicerow").load("choicepage.html")
    $("#dynamic").load("recommendpage.html")
})
$(function hide(){
    $("#musiclist").click(function() {
        $("#choicerow").hide();
        $("#dynamic").load("mymusicpage.html")
    })
    $("#index").click(function() {
        $("#choicerow").show();
        $("#dynamic").load("recommendpage.html")
    })
})