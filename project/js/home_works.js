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
    const childBlock = document.querySelector('.child_block');
    const parentBlock = document.querySelector('.parent_block');

    let positionX = 0;
    let positionY = 0;

    const offsetWidth = parentBlock.clientWidth - childBlock.offsetWidth;
    const offsetHeight = parentBlock.clientHeight - childBlock.offsetHeight;

    const moveBlock = () => {
        if(positionX < offsetWidth) positionX ++
        else if (positionX >= offsetWidth && positionX < offsetHeight) positionY ++
        else if (positionY >= offsetHeight && positionY < offsetWidth) positionX --
        if(positionY >= offsetHeight && positionY < offsetHeight) positionY --


        childBlock.style.left = `${positionX}px`
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock);
    }
    moveBlock();
