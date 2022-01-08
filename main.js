function clearcanvas(){
    background('white');
    
}
function setup(){
    canvas=creatCanvas(200,200);
    canvas.center();
    background('white')
}

function draw(){
    check_sketch();
    if(drawn_sketch==sketch){
        score++;
        answer_holder="set"
        document.getElementById("score").innerHTML='score'+score;
    
    }
}


function check_sketch(){
    timer_counter++;
    document.getElementById("time").innerHTML="time"+time;
    if(timer_counter > 400)
    {
      timer_counter = 0;
      timer_check = "completed"
    }
    if(timer_check =="completed" || answer_holder == "set")
    {
      timer_check = "";
      answer_holder = "";
      updateCanvas();
    }
}