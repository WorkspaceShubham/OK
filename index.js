<script src="https://smtpjs.com/v3/smtp.js"></script>

function sendEmail() {
    Email.send({
    Host: "smtp.gmail.com",
    Username : "",
    Password : "Your Gmail Password",
    To : 'recipient’s email address',
    From : "sender’s email address",
    Subject : "email subject",
    Body : "email body",
    Attachments : [
        {
            name : "smtpjs.png",
            path:"https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
        }]
    }).then(
        message => alert("mail sent successfully")
    );
  }