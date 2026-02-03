//Calls isItInRange on submit

document.getElementById("handling").addEventListener("submit", function(e){
    e.preventDefault();
    let value = document.getElementById("validity").value;
    if (!isNaN(value)) {
        isItInRange(value);
    } else {
        alert("Enter a number!!");
    }
})

//Carousel sliding function
//Takes the x position of mouse on button click and on button release
//Then compares, and depending if its positive or a negative difference it changes the bootstrap slide

let xStart = 0;
let xEnd = 0;
const carouselElement = document.getElementById("carouselExampleIndicators");
const carousel = new bootstrap.Carousel(carouselElement);

const slide = (start, end) => {
    if (start > end) {
        carousel.next();
    } else if (start < end) {
        carousel.prev();
    }
}

document.getElementById("target").addEventListener("mousedown", function(event){
    xStart = event.clientX;
})

document.getElementById("target").addEventListener("mouseup", function(event){
    xEnd = event.clientX;

    slide(xStart,xEnd);
})

