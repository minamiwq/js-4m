///part 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-z0-9._]+@gmail\.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else {
        gmailResult.innerHTML = "NOT OK"
        gmailResult.style.color = "red"
    }
}
///part 2
function moveBlock() {
    const childBlock = document.querySelector('.child_block');
    const parentBlock = document.querySelector('.parent_block');
    let position = 0;
    const maxPosition = parentBlock.offsetWidth - childBlock.offsetWidth;
    let number = 0;
    const maxCount = 500;
    function move() {
        if (position < maxPosition && number < maxCount) {
            position += 1;
            childBlock.style.left = `${position}px`;
            number++;
            console.log(number);
            requestAnimationFrame(move);
        }
    }
    move();
}
document.addEventListener('DOMContentLoaded', moveBlock);
