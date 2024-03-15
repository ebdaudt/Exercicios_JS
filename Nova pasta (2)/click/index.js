document.getElementById("lampada").addEventListener("click", function() {
    let img = document.getElementById("lampada");

    if (img.src.match("download.png")) {
        img.src = "png-transparent-incandescent-light-bulb-lamp-light-orange-color-lamp.png";
    }
})