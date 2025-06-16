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

let direction = 'right';

const moveBlock = () => {
    if (direction === 'right' && positionX < offsetWidth) positionX++;
    else if (direction === 'right' && positionX >= offsetWidth) direction = 'down';
    else if (direction === 'down' && positionY < offsetHeight) positionY++;
    else if (direction === 'down' && positionY >= offsetHeight) direction = 'left';
    else if (direction === 'left' && positionX > 0) positionX--;
    else if (direction === 'left' && positionX <= 0) direction = 'up';
    else if (direction === 'up' && positionY > 0) positionY--;
    else if (direction === 'up' && positionY <= 0) direction = 'right';

    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    requestAnimationFrame(moveBlock);
}
moveBlock();

/// timeout
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const seconds = document.querySelector('#seconds');

let count = 0;
let interval = null;

const updateDisplay = () => {
    seconds.textContent = count;
};

const start = () => {
    if (!interval) {
        interval = setInterval(() => {
            count++;
            updateDisplay();
        }, 1000);
    }
};
const stop = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
};
const reset = () => {
    count = 0;
    stop();
    updateDisplay();
};

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

updateDisplay();

/// 1
document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelector('.characters-list');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/persons.json');
    xhr.setRequestHeader('Accept', 'application/json');

    const userPhoto = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png';

    xhr.onload = function () {
        const character = JSON.parse(xhr.responseText);
        character.forEach(character => {
            const div = document.createElement('div');
            div.classList.add('character-card');
            div.innerHTML = `
                <div class="character-photo">
                    <img src="${character.person_photo || userPhoto}" alt="${character.name}" onerror="this.src='${userPhoto}'">
                </div>
                <h3>${character.name}</h3>
                <span><i>Возраст:</i> ${character.age}</span>
                <span><i>Роль:</i> ${character.role}</span>
                <span><i>Вид:</i> ${character.species}</span>
            `;
            characters.appendChild(div);
        });
    };
    xhr.send();
});


/// 2
const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/characters.json');
xhr.setRequestHeader('Accept', 'application/json');
xhr.onload = function () {
    const characters = JSON.parse(xhr.responseText);
    characters.forEach(character => {
        console.log(`Name:${character.name}`);
        console.log(`Age: ${character.age}`);
        console.log(`Country: ${character.country}`);
        console.log(`Status: ${character.status}`);
        console.log(`Photo: ${character.photo}`);
    });
};
xhr.send();