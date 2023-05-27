const baseUrl = `https://freelance-portal.onrender.com`;
const freelanceUrl = `${baseUrl}/freelancers`;
const loginUrl = `https://reqres.in/api/login`

// Buttons
const loginPage = document.querySelector('.login')
const freelancersPage = document.querySelector('.freelancers')
const reportsPage = document.querySelector('.reports')

// Input Data 
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitButton = document.querySelector('.submitButton');

let token = "";


loginPage.addEventListener('click', (e) =>{
    window.location.reload()
})

freelancersPage.addEventListener('click', (e) =>{
    if(token){
        window.location.href = "../html/freelancers.html";
    }else{
        alert("You ar not authorized to access this page")
    }
})

reportsPage.addEventListener('click', (e) =>{
    if(token){
        window.location.href = "../html/reports.html";
    }else{
        alert("You ar not authorized to access this page")
    }
})


submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    let data = {
        "email": email.value,
        "password": password.value
    }
    checkData(data);
})

const checkData = async (data) => {
    try {
        const apiResponse = await fetch(loginUrl,{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }) 
        const dataOfresponse = await apiResponse.json();
        token += dataOfresponse.token;
        alert("Login successful")
    } catch (error) {
        alert(error.message);
    }
}



