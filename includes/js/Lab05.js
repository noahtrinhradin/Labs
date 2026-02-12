let fname;
let lname;
let email;
let age;
let zip;
let phone;


const validate = (fname, lname, email, age, zip, phone) => {
    if(fname){

    }
}


document.getElementById("login").addEventListener("submit", (e) => {
    e.preventDefault();

    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    age = document.getElementById("age").value;
    zip = document.getElementById("zip").value;
    phone = document.getElementById("phone").value;

    validate(fname, lname, email, age, zip, phone);
});

