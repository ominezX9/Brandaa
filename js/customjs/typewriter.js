const taglines = [
    "Digital",
    "Innovative",
    "Modern",
    "Contactless",
    "Fast",
    "Networking",
    "Seamless",
    "Efficient",
    "Smart",
    "Trusted",
    "Nigerian",
    "Global",
    "Business",
    "Connection",
    "Professional",
    "Advanced",
    "Convenient",
    "Leading",
    "Versatile",
    "The Future"
];

const typingSpeed = 100; 
const pauseTime = 1000; 
const backspaceSpeed = 50;

let index = 0;
let charIndex = 0;
const $typewriterContainer = $('#typewriter-container');

function type() {
    if (charIndex < taglines[index].length) {
        $typewriterContainer.text($typewriterContainer.text() + taglines[index].charAt(charIndex));
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(backspace, pauseTime);
    }
}

function backspace() {
    if (charIndex > 0) {
        $typewriterContainer.text(taglines[index].substring(0, charIndex - 1));
        charIndex--;
        setTimeout(backspace, backspaceSpeed);
    } else {
        index = (index + 1) % taglines.length;
        setTimeout(type, typingSpeed);
    }
}

$(document).ready(function () {
    type();
});