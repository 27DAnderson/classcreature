let money = 100;
document.getElementById('money').textContent = "Money: " + money;

document.getElementById('research').addEventListener('click', () => {
    const researchButton = document.getElementById('research');
    researchButton.disabled = true;
    researchButton.style.cursor = 'not-allowed';
    researchButton.style.opacity = '0.5';
    const breedingButton = document.getElementById('breeding');
    breedingButton.disabled = true;
    breedingButton.style.cursor = 'not-allowed';
    breedingButton.style.opacity = '0.5';
    money -= 10;
    document.getElementById('money').textContent = "Money: " + money;
    setTimeout(() => {
        researchButton.disabled = false;
        researchButton.style.cursor = 'pointer';
        researchButton.style.opacity = '1';
        breedingButton.disabled = false;
        breedingButton.style.cursor = 'pointer';
        breedingButton.style.opacity = '1';
    }, 90 * 60 * 1000);
});
document.getElementById('breeding').addEventListener('click', () => {
    const breedingButton = document.getElementById('breeding');
    breedingButton.disabled = true;
    breedingButton.style.cursor = 'not-allowed';
    breedingButton.style.opacity = '0.5';
    const researchButton = document.getElementById('research');
    researchButton.disabled = true;
    researchButton.style.cursor = 'not-allowed';
    researchButton.style.opacity = '0.5';
    money -= 10;
    document.getElementById('money').textContent = "Money: " + money;
    setTimeout(() => {
        breedingButton.disabled = false;
        breedingButton.style.cursor = 'pointer';
        breedingButton.style.opacity = '1';
        researchButton.disabled = false;
        researchButton.style.cursor = 'pointer';
        researchButton.style.opacity = '1';
    }, 90 * 60 * 1000);
});