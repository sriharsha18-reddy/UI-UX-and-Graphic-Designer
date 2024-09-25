const sections = document.querySelectorAll('.section');
const nextButtons = document.querySelectorAll('.next');
const backButtons = document.querySelectorAll('.back');
const form = document.getElementById('registration-form');
let currentSection = 0;

function showSection(index) {
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
    });
}

nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (validateSection(currentSection)) {
            currentSection++;
            showSection(currentSection);
        }
    });
});

backButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSection--;
        showSection(currentSection);
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateSection(currentSection)) {
        alert("Registration completed successfully!");
        form.reset();
        currentSection = 0;
        showSection(currentSection);
    }
});

function validateSection(index) {
    const inputs = sections[index].querySelectorAll('input, select');
    let valid = true;

    inputs.forEach(input => {
        const errorElement = document.getElementById(`${input.id}-error`);
        if (!input.value) {
            errorElement.style.display = 'block';
            valid = false;
        } else {
            errorElement.style.display = 'none';
        }
    });

    return valid;
}

// Show the first section on load
showSection(currentSection);
