const { response } = require("express");

function emailSubmition(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const data =  {
        name: name,
        email : email,
        subject: subject,
        message: message
    };

    fetch("/send-email",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result.message);
    })
    .catch(error => {
        console.error("Error: ", error);
    });
}