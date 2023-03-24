function courseForward() {
    let custContainer = document.getElementById('courseContainer');
    sideScroll(custContainer,'right',25,100,10);
}

function courseBack(){
    let custContainer = document.getElementById('courseContainer');
    sideScroll(custContainer,'left',25,100,10);
}

function assessmentForward() {
    let assessmentContainer = document.getElementById('assessContainer');
    sideScroll(assessmentContainer,'right',25,100,10);
}
function assessmentBack(){
    let assessmentContainer = document.getElementById('assessContainer');
    sideScroll(assessmentContainer,'left',25,100,10);
}

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}