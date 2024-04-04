// Both boxes must have radio buttons selected to move on

document.getElementById("ch3form").addEventListener("submit", function (event) {
    var radio1 = document.getElementsByName("standing");
    var radio2 = document.getElementsByName("gradDate");

    // if any radio1 buttons is checked
    flag1 = false;
    for (var i = 0; i < radio1.length; i++) {
        if (radio1[i].checked) {
            flag1 = true;
        }
    }

    // if any radio2 buttons is checked
    flag2 = false;
    for (var i = 0; i < radio2.length; i++) {
        if (radio2[i].checked) {
            flag2 = true;
        }
    }

    if (flag1 && flag2) {
        return true;
    }
    else {
        alert("Please select a radio button for each box.");
        event.preventDefault();
    }

});