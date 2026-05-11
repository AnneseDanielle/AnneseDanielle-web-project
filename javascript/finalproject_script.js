function submit_email() {
    const emailInput = document.getElementById("email");
    let answer = document.getElementById("response");
    if((answer.textContent.includes('@')) ==  true) {
        answer.innerHTML = "Please enter a valid email address.";
        return;
    }else{
        answer.innerHTML = `${emailInput.value.trim()} has been added to our email list!`;
    }
}