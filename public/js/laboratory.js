let money = 100;
let buttonsOnCooldown = false;
document.getElementById('money').textContent = "Money: " + money;

const researchButton = document.getElementById('research');
const breedingButton = document.getElementById('breeding');
function researchAllowed() {
    researchButton.disabled = false;
    researchButton.style.cursor = 'pointer';
    researchButton.style.opacity = '1';
}
function breedingAllowed() {
    breedingButton.disabled = false;
    breedingButton.style.cursor = 'pointer';
    breedingButton.style.opacity = '1';
}
function researchNotAllowed() {
    researchButton.disabled = true;
    researchButton.style.cursor = 'not-allowed';
    researchButton.style.opacity = '0.5';
}
function breedingNotAllowed() {
    breedingButton.disabled = true;
    breedingButton.style.cursor = 'not-allowed';
    breedingButton.style.opacity = '0.5';
}
researchNotAllowed();
breedingNotAllowed();
document.getElementById('research').addEventListener('click', () => {
    if (!buttonsOnCooldown && (toggle1 || toggle2)) {
        buttonsOnCooldown = true;
        researchNotAllowed();
        breedingNotAllowed();
        money -= 10;
        document.getElementById('money').textContent = "Money: " + money;
        setTimeout(() => {
            buttonsOnCooldown = false;
            updatePetButtons();
        }, 90 * 60 * 1000);
    }
});
document.getElementById('breeding').addEventListener('click', () => {
    if (!buttonsOnCooldown && toggle1 && toggle2) {
        buttonsOnCooldown = true;
        researchNotAllowed();
        breedingNotAllowed();
        money -= 10;
        document.getElementById('money').textContent = "Money: " + money;
        setTimeout(() => {
            buttonsOnCooldown = false;
            updatePetButtons();
        }, 90 * 60 * 1000);
    }
});
let toggle1 = false;
let toggle2 = false;
function updatePetButtons() {
    if (buttonsOnCooldown) {
        researchNotAllowed();
        breedingNotAllowed();
        return;
    }
    if (toggle1 || toggle2) {
        researchAllowed();
    } else {
        researchNotAllowed();
    }
    if (toggle1 && toggle2) {
        breedingAllowed();
    } else {
        breedingNotAllowed();
    }
}

document.getElementById('pet1').addEventListener('click', () => {
    toggle1 = !toggle1;
    const pet1Img = document.getElementById('pet1-img');
    if (toggle1) {
        pet1Img.src = ['/img/Red-Cat.png', '/img/Blue-Cat.png', '/img/Green-Cat.png'][Math.floor(Math.random() * 3)];
    } else {
        pet1Img.src = '/img/Empty-Cat.png';
    }
    updatePetButtons();
});
document.getElementById('pet2').addEventListener('click', () => {
    toggle2 = !toggle2;
    const pet2Img = document.getElementById('pet2-img');
    if (toggle2) {
        pet2Img.src = ['/img/Red-Cat.png', '/img/Blue-Cat.png', '/img/Green-Cat.png'][Math.floor(Math.random() * 3)];
    } else {
        pet2Img.src = '/img/Empty-Cat.png';
    }
    updatePetButtons();
});