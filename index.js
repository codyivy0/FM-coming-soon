const submitBtn = document.getElementById("submit");
const emailInput = document.getElementById("user-email");
const errorMsg = document.getElementById("error");

submitBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!regex.test(email)) {
        emailInput.classList.add('user-email-invalid');
        errorMsg.innerHTML = "Please provide a valid email";
      console.log('Invalid email');
    } else {
        emailInput.classList.remove('user-email-invalid');
        errorMsg.innerHTML = "&nbsp";
      console.log('Email is valid');
    }
  });