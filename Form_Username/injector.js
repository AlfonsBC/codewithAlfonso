var script_url = "https://script.google.com/macros/s/AKfycbyPVL4BrX6_TO0Q20PkZEsntG-2xH0gm98aFoNaaV_0QH_rHMdRHwMvBflz48OQfLPplQ/exec";
function inserting_vals(){
    var name2 = $("#apivalue").val();
    var url = script_url + "?callback=ctrlq&name="+ name + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url:url,
        method:"GET",
        dataType:"jsonp",
    });
}
function ctrlq(e){
    alert('Congrats!')
}
