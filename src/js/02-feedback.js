const submitBtn = document.querySelector('button[type="submit"]');
const emailInput = document.querySelector('input[type="email"]');
const feedbackInput = document.querySelector('textarea');

const pageLoad = document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        emailInput.value = parsedData.email;
        feedbackInput.value = parsedData.feedback;
    }
});



// Öncelikle email ve feedback alanlarını dinleyen bir event listener ekleyin. Form submit edildiğinde, console'da "Form submitted!" yazısını görmelisiniz.
function onInput(event) {
    if (emailInput.value.trim() && feedbackInput.value.trim()) {
        const email = emailInput.value.trim();
        const feedback = feedbackInput.value.trim();
        let dataToBeStored = { email: email, feedback: feedback };
        let jsonData = JSON.stringify(dataToBeStored);
        localStorage.setItem('feedback-form-state', jsonData);
    }
}


function onFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!emailInput.value.trim() || !feedbackInput.value.trim()) {
        window.alert("Email and feedback are required!");
        return;
    }
    const email = emailInput.value.trim();
    const feedback = feedbackInput.value.trim();
    console.log("Form submitted!");
    console.log("Email: ", email);
    console.log("Feedback: ", feedback);
    emailInput.value = '';
    feedbackInput.value = '';
    localStorage.removeItem('feedback-form-state');
}



submitBtn.addEventListener('click', onFormSubmit);
emailInput.addEventListener('input', onInput);
feedbackInput.addEventListener('input', onInput);