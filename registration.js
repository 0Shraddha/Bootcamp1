console.log("This is registration page");

const userInfoa = localStorage.getItem("userInfo");
if (userInfoa){
    goTo("home.html");
}

const registrationForm = document.getElementById("registration form");

console.log(registrationForm);

function getSelected(select) {
    let selectedValues = []
    for (optionalIndex in select.options) {
        if (select.options[optionalIndex].selected) {
            selectedValues.push(select.options[optionalIndex].value);
        }
    } return selectedValues;
}
registrationForm.onsubmit = function (event) {
    event.preventDefault();
    console.log("I am triggered when submit is pressed");
    let name = document.getElementById("name").value;
    let interests = getSelected(document.getElementById("interests"));
    let dob = document.getElementById("dob").value;
    let darkMode = document.getElementById("dark-mode").checked;
    const data = {
        name,
        interests,
        dob,
        darkMode,
    };
    console.log(data);
    localStorage.setItem("userInfo",JSON.stringify(data));
    goTo("home.html");
};
