// Your code goes here
// Event 1 'mouseover' - Bus Picture
const busImg = document.querySelector('.intro img');

busImg.addEventListener('mouseover', function (event) {
    busImg.style.cssText = 'border: 2px solid red';
});
busImg.addEventListener('mouseout', function (event) {
    busImg.style.removeProperty('border');
});

//Event 2 'keydown' - Press the 'b' key
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 66) {
        document.querySelector('.intro h2').style.cssText = 'border: 2px solid blue';
    }
});
window.addEventListener('keyup', function (event) {
    if (event.keyCode == 66) {
        document.querySelector('.intro h2').style.removeProperty('border');
    }
});

//Event 3 'wheel' - Let's Go text section
window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        document.querySelectorAll('.text-content h2').forEach(function (element) {
            element.style.cssText = 'border: 2px solid green';
        });
    } else {
        document.querySelectorAll('.text-content h2').forEach(function (element) {
            element.style.removeProperty('border');
        });
    }
});

//Event 4 load - alerts user when page has finished loading
window.onload = (event) => {
    alert('page has loaded completely');
};

//Event Propagation - The sign me up buttons will not trigger their parent div's eventListener
const destinationBox = document.querySelectorAll('.destination');
const destinationButton = document.querySelectorAll('.destination .btn');

destinationBox.forEach(function(element) {
    element.addEventListener('click', function(event) {
        element.style.cssText = 'border: 2px solid purple';
    });
})

destinationButton.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.stopPropagation();
        alert("Sign Me Up has been pressed");
    })
})

//Prevent Default - Stop nav items from refreshing page
document.querySelectorAll('.nav-link').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
    });
})