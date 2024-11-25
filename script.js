const btn = document.getElementById('calculate');
btn.addEventListener('click', function () {
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if (height === '' || weight === '') {
        alert('Please fill the input fields!');
        return;
    }

    height = height / 100; // Convert height from cm to meters
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    document.querySelector('#result').innerHTML = bmi;

    // Update BMI category comment
    let comment = '';
    if (bmi < 18.5) {
        comment = 'Underweight"';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        comment = 'Normal weight"';
    } else if (bmi >= 25 && bmi < 29.9) {
        comment = 'Overweight"';
    } else {
        comment = 'Obese"';
    }

    document.querySelector('#comment').innerHTML = comment;
});