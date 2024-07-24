async function checkGender() {
    const nama = document.getElementById('nameInput').value;
    const resultElement = document.getElementById('result');

    if (nama) {
        try {
            const response = await fetch(`https://api.genderize.io/?name=${nama}`);
            const data = await response.json();
            if (data.gender) {
                resultElement.innerHTML = `<strong>${nama}</strong> is <strong>${data.gender}</strong> with <strong>${data.probability * 100}%</strong> certainty.`;
            } else {
                resultElement.textContent = `Uh oh. <strong>${nama}</strong> is unknown to us`;
            }
        } catch (error) {
            resultElement.textContent = 'An error occurred while fetching the data.';
        }
    } else {
        resultElement.textContent = 'Please enter a name.';
    }
}