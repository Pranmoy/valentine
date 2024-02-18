
document.getElementById("noButton").addEventListener('click' , function (){ 
    increaseSize ("yesButton")
    increaseSizeText("yesButton")
    moveToBottom("noButton")
})
let yesButtonSize = 100;// Initial size of the yes button
let noButtonSize = 0;//initial size of the no button
let clickCount = 0;//track the number of clikcs on the no button

function increaseSize() {
    var yesButton = document.getElementById('yesButton');
    var currentWidth = yesButton.offsetWidth;
    var currentHeight = yesButton.offsetHeight;

    if ( currentWidth < 650 && currentHeight < 650) {
       
        var newWidth = currentWidth + 100;
        var newHeight = currentWidth + 100;

        yesButton.style.width = newWidth + "px";
        yesButton.style.height = newHeight + "px";
    }
    // var currentSize  = parseInt(window.getComputedStyle(button, null).getPropertyValue('height','width'));
    if( currentWidth >= 630 && currentHeight >= 630) {
        yesButton.textContent = "can't go on please say yes";
        return;
    }

}


function increaseSizeText () {
    var Button = document.getElementById('yesButton');
    var currentSize = parseInt(window.getComputedStyle(Button, null).getPropertyValue('font-size'));
    var newSize = currentSize + 10;
    Button.style.fontSize = newSize + 'px';

}

function moveToBottom() {
    var noButton = document.getElementById('noButton');
    var buttonContainer = noButton.parentNode;
    buttonContainer.appendChild(noButton); // Move the No button to the bottom
}

function changeTextAndShift() {
    const noButton = document.getElementById("noButton");
    clickCount++;
    // Change button text based on the click count
        switch (clickCount) {
            case 1:
                noButton.textContent = "are you sure bruv?";
                resizeButton(noButton);
                break;
            case 2:
                noButton.textContent = "think again";
                resizeButton(noButton);
                break;
            case 3:
                noButton.textContent = "ayy thats rude!!";
    
                resizeButton(noButton);
                break;
            case 4:
                noButton.textContent = "come on bro :/";
    
                resizeButton(noButton);
                break;
             case 5:
                noButton.textContent = "plessss :[";
                resizeButton(noButton);
                break;
             case 6:
                noButton.textContent = "you have nowhere to go ;)";
                resizeButton(noButton);
                noButton.disabled = true;
                break;
        }

        function resizeButton(noButton) {
            var textLength = noButton.textContent.length;
            var padding = 10;

            var newWidth = (textLength * 10) + padding;
            noButton.style.width = newWidth + 'px';
        }
    


    // Shift the "No" button to the right on each click
    noButtonPosition += 10; // Adjust the shift amount as needed
    // noButton.style.transform = `translateX(${noButtonPosition}px)`;
}

document.getElementById("yesButton").addEventListener('click' , function (){ 
    window.location.href =" https://www.instagram.com/p/C2C_6f3Ihi0/";
})