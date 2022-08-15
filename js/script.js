var range_input = document.getElementById("rangeinput")
var icon = document.getElementById("icon")
var rangeoutput_value = parseInt(range_input.value)
var range_output = document.getElementById("rangeoutput")
var triangle = document.getElementById("triangle")
function Value(val){
    range_output.style.marginLeft = ""+((val*314/204)+8)+"px"
    triangle.style.marginLeft = ""+((val*314/204)+25)+"px"
    if (val >= 0 && val <= 51){
        range_input.style.background = "rgb(255, "+(val*5)+", 0)"
    }
    else if (val > 51 && val <= 102){
        range_input.style.background = "rgb("+(255 - ((val-51)*5))+", 255, 0)"
    }
    else if (val > 102 && val <= 153){
        range_input.style.background = "rgb(0, 255, "+((val-102)*5)+")"
    }
    else if (val > 153 && val <= 204){
        range_input.style.background = "rgb(0, "+(255 - ((val-153)*5))+", 255)"
    }
    if (val >= 0 && val < 40.8){
        icon.style.background = "url(img/red.svg)"
    }
    else if (val >= 40.8 && val < 81.6){
        icon.style.background = "url(img/yellow.svg)"
    }
    else if (val >= 81.6 && val < 122.4){
        icon.style.background = "url(img/green.svg)"
    }
    else if (val >= 122.4 && val < 163.2){
        icon.style.background = "url(img/light_blue.svg)"
    }
    else if (val >= 163.2 && val <= 204){
        icon.style.background = "url(img/blue.svg)"
    }
}
