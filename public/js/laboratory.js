let money = 100;
document.getElementById('money').textContent = "Money: " + money;

document.getElementById('research').addEventListener('click', () => {
	const researchButton = document.getElementById('research');
    money -= 10;
    document.getElementById('money').textContent = "Money: " + money;
	researchButton.disabled = true;
    researchButton.style.cursor = 'not-allowed';
    researchButton.style.opacity = '0.5';
	setTimeout(() => {
		researchButton.disabled = false;
        researchButton.style.cursor = 'pointer';
        researchButton.style.opacity = '1';
	}, 90 * 60 * 1000);
});
document.getElementById('breeding').addEventListener('click', () => {
	const breedingButton = document.getElementById('breeding');
    money -= 10;
    document.getElementById('money').textContent = "Money: " + money;
	breedingButton.disabled = true;
    breedingButton.style.cursor = 'not-allowed';
    breedingButton.style.opacity = '0.5';

	setTimeout(() => {
		breedingButton.disabled = false;
        breedingButton.style.cursor = 'pointer';
        breedingButton.style.opacity = '1';
	}, 90 * 60 * 1000);
});