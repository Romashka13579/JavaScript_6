var range_input = document.getElementById("rangeinput")
function Value(val){
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
    // if (val >= 0 && val < 20){
    //     range_input.style.background = "red"
    // }
    // else if (val >= 20 && val < 40){
    //     range_input.style.background = "blue"
    // }
    // else if (val >= 40 && val < 60){
    //     range_input.style.background = "white"
    // }
    // else if (val >= 60 && val < 80){
    //     range_input.style.background = "yellow"
    // }
    // else if (val >= 80 && val < 100){
    //     range_input.style.background = "green"
    // }
}