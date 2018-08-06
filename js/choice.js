$(function(){
    $("#recommend").click(function() {
        $("#dynamic").load($(this).data("page"))
    })
    $("#friendshare").click(function() {
        $("#dynamic").load($(this).data("page"))
    })
    $("#onlineradio").click(function() {
        $("#dynamic").load($(this).data("page"))
    })
})
function clean(id){
    var a=sessionStorage["last"];
    if(a!=undefined){
        document.getElementById(a).style.color="#dddddd";
        document.getElementById(a).style.fontWeight="100";
    }
}
function set(id) {
    sessionStorage["last"]=event.target.id;
    document.getElementById(id).style.color="white";
    document.getElementById(id).style.fontWeight="800";
}