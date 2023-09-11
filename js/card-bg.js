function random_bg_color() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + a + "," + b + "," + c + ")";
    document.body.style.background = bgColor;
    }
document.getElementById('card-clr-chng').addEventListener("click", function(){
    random_bg_color();
})