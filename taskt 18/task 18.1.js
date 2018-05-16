var context = document.getElementById('paintField').getContext("2d");
var canvas = document.getElementById('paintField');

var clickX = [];
var clickY = [];
var clickDrag = [];
var paint;

context = canvas.getContext("2d");
context.strokeStyle = "#ACF";
context.lineWidth = 3;
context.lineJoin = "round";


function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}


function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    for (var i = 0; i < clickX.length; i += 1) {
        if (!clickDrag[i] && i == 0) {
            context.beginPath();
            context.moveTo(clickX[i], clickY[i]);
            context.stroke();
        } else if (!clickDrag[i] && i > 0) {
            context.closePath();
            context.beginPath();
            context.moveTo(clickX[i], clickY[i]);
            context.stroke();
        } else {
            context.lineTo(clickX[i], clickY[i]);
            context.stroke();
        }
    }
}

function draw() {
    var i = clickX.length - 1
    if (!clickDrag[i]) {
        if (clickX.length == 0) {
            context.beginPath();
            context.moveTo(clickX[i], clickY[i]);
            context.stroke();
        } else {
            context.closePath();
            context.beginPath();
            context.moveTo(clickX[i], clickY[i]);
            context.stroke();
        }
    } else {
        context.lineTo(clickX[i], clickY[i]);
        context.stroke();
    }
}

function mouseDownEvent(e) {
    paint = true;
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    if (paint) {
        addClick(x, y, false);
        draw();
    }
}

function touchstartEvent(e) {
    paint = true;
    if (paint) {
        addClick(e.touches[0].pageX - canvas.offsetLeft, e.touches[0].pageY - canvas.offsetTop, false);
        draw();
    }
}

function mouseUpEvent(e) {
    context.closePath();
    paint = false;
}

function mouseMoveEvent(e) {
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    if (paint) {
        addClick(x, y, true);
        draw();
    }
}

function touchMoveEvent(e) {
    if (paint) {
        addClick(e.touches[0].pageX - canvas.offsetLeft, e.touches[0].pageY - canvas.offsetTop, true);
        draw();
    }
}

function mousePoint(e) {
    setUpHandler(true, e);
}

function touchPoint(e) {
    setUpHandler(false, e);
}

function removeRaceHandlers() {
    canvas.removeEventListener('mousedown', mousePoint);
    canvas.removeEventListener('touchstart', touchPoint);
}

function setUpHandler(isMouseandNotTouch, detectEvent) {
    removeRaceHandlers();
    if (isMouseandNotTouch) {
        canvas.addEventListener('mouseup', mouseUpEvent);
        canvas.addEventListener('mousemove', mouseMoveEvent);
        canvas.addEventListener('mousedown', mouseDownEvent);
        mouseDownEvent(detectEvent);
    } else {
        canvas.addEventListener('touchstart', touchstartEvent);
        canvas.addEventListener('touchmove', touchMoveEvent);
        canvas.addEventListener('touchend', mouseUpEvent);
        touchstartEvent(detectEvent);
    }
}
canvas.addEventListener('mousedown', mousePoint);
canvas.addEventListener('touchstart', touchPoint);