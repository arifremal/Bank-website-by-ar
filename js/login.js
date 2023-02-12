// /step one seclected button
const submitButton = document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('hi');
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    // console.log(email);

    const pasGet = document.getElementById('passs')
    const pass = pasGet.value
    // console.log(email,pass);

    if(email === 'aracccount@myaccount.com' && pass === 'arifremalemal323@!!'){
        window.location.href='bank.html'
    } else{
        alert('Please input valid info')
    }
});

// step two gwt the email address inside the email filed


