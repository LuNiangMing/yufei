$(".gray_mask").addClass("hidden")



$(".navbar-nav .container li").click(function() {
    var active = $(this).index()
    $(this).addClass("actived").removeClass("li_hover").removeClass("transition")
    localStorage.setItem("key", active)
})
$(".navbar-nav .container  li:not(.actived)").mouseover(function(params) {
    let index = $(this).index()

    if (index === actived) {
        $(this).unbind("mouseover")
    }

    $(".navbar-nav li").eq(index).addClass("li_hover").addClass("transition")

})
let actived = localStorage.getItem("key")

$(".navbar-nav .container  li:not(.actived)").mouseout(function(params) {
    let index = $(this).index()
    if (index === actived) {
        $(this).unbind("mouseout")
    }
    $(".navbar-nav li").eq(index).removeClass("li_hover").addClass("transition")
})




$(".item ").mouseover(function() {

    let index = $(this).index()

    if (index == 0) {


        $(".gray_mask").eq(index).addClass("block").addClass("transition") && $(".item1").addClass("transition") && $(".item1").addClass("hover")

    } else {
        $(".contont_main .img-responsive").eq(index).addClass("hover").addClass("transition")
    }


})
$(".item ").mouseout(function() {

    let index = $(this).index()

    if (index == 0) {


        $(".gray_mask").eq(index).addClass("hidden").addClass("transition").removeClass("block") && $(".item1").addClass("transition") && $(".item1").removeClass("hover")


    } else {
        $(".contont_main .img-responsive").eq(index).removeClass("hover").addClass("transition")
    }


})
$(".box2 .orange ").mouseover(function(params) {

    $(this).find(".mark-orange").addClass("mark-orange_show").addClass("transition").removeClass("mark-orange_hidden")

})
$(".box2 .orange ").mouseout(function(params) {


    $(this).find(".mark-orange").addClass("mark-orange_hidden").addClass("transition").removeClass("mark-orange_show")
})
$(".box2 .deepblue ").mouseover(function(params) {


    $(this).find(".mark-orange").addClass("mark-deepblue").addClass("transition")
})
$(".box2 .deepblue ").mouseout(function(params) {


    $(this).find(".mark-orange").removeClass("mark-deepblue").addClass("transition")
})
$(".little-black").mouseover(function(params) {


    $(this).find(".mark-orange").addClass("mark-littleblack").addClass("transition")
})
$(".little-black").mouseout(function(params) {


    $(this).find(".mark-orange").removeClass("mark-littleblack").addClass("transition")
})