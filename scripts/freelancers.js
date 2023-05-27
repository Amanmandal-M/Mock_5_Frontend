const baseUrl = `https://freelance-portal.onrender.com`;
const freelanceUrl = `${baseUrl}/freelancers`;

const divContainer = document.querySelector('#mainContainer');

window.addEventListener("load",()=>{
    fetchData();
})

const fetchData = async () => {
    try {
        const apiResponse = await fetch(freelanceUrl);
        const dataOfResponse = await apiResponse.json();
        displayData(dataOfResponse);
    } catch (error) {
        alert(error.message)
    }
}



const displayData = (data) => {

    console.log(data);

    divContainer.innerHTML="";

    data.forEach((el,index) => {
        let smallContainer = document.createElement('div');

        let personName = document.createElement('h2');
        personName.textContent = el.name;

        let email = document.createElement('p');
        email.textContent=`Email: ${el.email}`;

        let profession = document.createElement('p');
        profession.textContent=`Profession: ${el.profession}`;

        let skills = documentextContentt.createElement('p');
        skills.textContent=`Skills: ${el.skills}`;

        let hourly_rate = document.createElement('p');
        hourly_rate.textContent=`Hourly Rate: ${el.hourly_rate}`;

        let profile_picture = document.createElement('img');
        profile_picture.src=el.profile_picture;
        profile_picture.alt="Error";

        let isBooked = document.createElement('p');
        isBooked.textContent=`Booking Status: ${el.isBooked}`;

        let edit = document.createElement('button');
        edit.textContent = 'EDIT';
        edit.addEventListener("click",(e)=>{

        })

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.addEventListener("click",(e)=>{

        })

        let hire = document.createElement('button');
        hire.textContent = 'HIRE';
        hire.addEventListener("click",(e)=>{

        })

        smallContainer.append(profile_picture,personName,email,profession,skills,hourly_rate,isBooked,edit,deleteButton,hire);

        divContainer.appendChild(smallContainer);
    });
}
