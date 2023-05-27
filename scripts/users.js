const baseUrl = `https://freelance-portal.onrender.com`;
const freelanceUrl = `${baseUrl}/freelancers`;

const personName = document.querySelector(".personName");
const imageurl = document.querySelector(".profileUrl");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const profession = document.querySelector(".profession");
const hourlyRate = document.querySelector(".hourlyRate");
const skills = document.querySelector(".skills");
const formButton = document.querySelector("form");

formButton.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {
    name: personName.value,
    email: email.value,
    password: password.value,
    profession: profession.value,
    skills: [skills.value],
    hourly_rate: +hourlyRate.value,
    profile_picture: imageurl.value,
    isBooked: true,
  };

  postForm(data);
});

// POST DATA
const postForm = async (data) => {
  try {
    const apiResponse = await fetch (freelanceUrl , {
        method: 'POST',
        headers : {
            "content-type": "application/json"
        },
        body : JSON.stringify(data)
    });
    const dataOfResponse = await apiResponse.json();
    if (dataOfResponse) {
        alert("Successfully registered.")
    }else{
        alert("Failed to register")
    }
  } catch (error) {
    alert(error.message);
  }
};
