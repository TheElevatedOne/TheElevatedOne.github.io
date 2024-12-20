function closeWindow(x) {
    var c = x.id;
    var split = x.id.split("-")[1];
    document.getElementById("widget").style.display = "inline";
    var win = `win-${split}`;
    document.getElementById(win).style.display = "none";
}

function openWindow(x) {
    var c = x.id;
    var split = x.id.split("-")[1];
    document.getElementById("widget").style.display = "none";
    var win = `win-${split}`;
    document.getElementById(win).style.display = "flex";
}

function uncheck(x) {
    if (x.checked != false) {
        const input = document.querySelectorAll("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].id != x.id) {
                input[i].checked = false;
                closeWindow(input[i]);
            }
        }
        openWindow(x)
    } else {
        closeWindow(x);
    }
}

function test(x) {
    console.log(x.checked);
}
