// /step one seclected button
const submitButton = document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('hi');
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    // console.log(email);

    const pasGet = document.getElementById('passs')
    const pass = pasGet.value
    // console.log(email,pass);

    if(email === 'aracccount@myaccount.com' && pass === 'Remal323@!!'){
        console.log('vald');
    } else{
        console.log('en');
    }
});

// step two gwt the email address inside the email filed


