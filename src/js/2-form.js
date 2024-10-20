document.addEventListener('DOMContentLoaded', () => {
    const formData = {
        email: "",
        message: ""
    };

    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const saveToLocalStorage = () => {
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    };

    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        emailInput.value = email;
        messageInput.value = message;
        formData.email = email;
        formData.message = message;
    }

    form.addEventListener('input', event => {
        const { name, value } = event.target;
        formData[name] = value;
        saveToLocalStorage();
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        const { email, message } = formData;

        if (!email || !message) {
            alert('Fill please all fields');
            return;
        }

        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData.email = "";
        formData.message = "";
        form.reset();
    });
});
