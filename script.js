function changeColor(clickedBox){
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var box4 = document.getElementById('box4');
    var box5 = document.getElementById('box5');
    var box6 = document.getElementById('box6');
    var box7 = document.getElementById('box7');
    var box8 = document.getElementById('box8');
    var box9 = document.getElementById('box9');

    var blue = "rgb(0, 0, 255)";
    var orange = "rgb(255, 165, 0)";

    if(clickedBox == "box1"){
        changeState(box1);
        changeState(box2);
        changeState(box4);
    }
    if(clickedBox == "box2"){
        changeState(box2);
        changeState(box1);
        changeState(box3);
        changeState(box5);
    }
    if(clickedBox == "box3"){
        changeState(box3);
        changeState(box2);
        changeState(box6);
    }
    if(clickedBox == "box4"){
        changeState(box4);
        changeState(box1);
        changeState(box5);
        changeState(box7);
    }
    if(clickedBox == "box5"){
        changeState(box5);
        changeState(box2);
        changeState(box4);
        changeState(box6);
        changeState(box8);
    }
    if(clickedBox == "box6"){
        changeState(box6);
        changeState(box3);
        changeState(box5);
        changeState(box9);
    }
    if(clickedBox == "box7"){
        changeState(box4);
        changeState(box7);
        changeState(box8);
    }
    if(clickedBox == "box8"){
        changeState(box5);
        changeState(box7);
        changeState(box8);
        changeState(box9);
    }
    if(clickedBox == "box9"){
        changeState(box6);
        changeState(box8);
        changeState(box9);
    }

}

function changeState(box){
    var blue = "rgb(0, 0, 255)";
    var orange = "rgb(255, 165, 0)";

    var color = window.getComputedStyle(box, null).getPropertyValue("background-color");
    if(color == blue){
        box.style.backgroundColor = "orange";
    }else if(color == orange){
        box.style.backgroundColor = "blue";
    }
}