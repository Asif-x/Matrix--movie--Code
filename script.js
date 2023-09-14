document.addEventListener("DOMContentLoaded", function(){
    // initializing the canvas
    var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d")
    // selecting height and width of canvas
    canvas.width =window.innerWidth;
    canvas.height=window.innerHeight;
    // setting up letters
    var letters ="10";
    letters = letters.split("");
    // setting the columns
    var fontSize =10,
    columns = canvas.width / fontSize;
    // setting up the drops
    var drops = [];
    for (var i = 0; i<columns;i++ ){
        drops[i] = 1;
    }
    // setting draw function
    function draw() {
        ctx.fillStyle = "rgba(0,0,0,.1)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        for (var i=0; i<drops.length;i++){
            var text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillStyle = "#0f0";
            ctx.fillText(text,i*fontSize,drops[i] * fontSize);
            drops[i]++;
                       if (drops[i]*fontSize > canvas.height && Math.random()> 0.95){
                        drops[i]=0;
                    }
        }


    }

// loop the animation
setInterval(draw,99);
    

})