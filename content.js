

function getPassword(e) {
    console.log(e.target.value);

}

let password = document.getElementsByTagName("input");
password = Object.values(password);


password.map((e) => {
    e.addEventListener("keyup", getPassword);
});

