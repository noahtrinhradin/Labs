let fname = "";
let lname = "";
let email = "";
let age = "";
let zip = "";
let phone = "";

const nameReg = /^[a-zA-Z-]+$/;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ageReg = /^(1[0-2][0-5]|[1-9][0-9]?)$/;
const zipReg = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]\s?\d[ABCEGHJ-NPRSTV-Z]\d$/;
const phoneReg = /^\d{3}-\d{3}-\d{4}$/;

const ename = "Invalid name: No spaces.";
const eemail = "Invalid email: Please use correct email format.";
const eage = "Invalid age: Must be between 1 and 125.";
const ezip = "Invalid zip code: Please use correct Canadian postal code format.";
const ephone = "Invalid phone number: Please use XXX-XXX-XXXX format.";
const empty = "This field cannot be empty.";

const fnamep = document.getElementById("invalid-fname");
const lnamep = document.getElementById("invalid-lname");
const emailp = document.getElementById("invalid-email");
const agep = document.getElementById("invalid-age");
const zipp = document.getElementById("invalid-zip");
const phonep = document.getElementById("invalid-phone");

const infname = document.getElementById("fname");
const inlname = document.getElementById("lname");
const inemail = document.getElementById("email");
const inage = document.getElementById("age");
const inzip = document.getElementById("zip");
const inphone = document.getElementById("phone");

const regex = [nameReg, nameReg, emailReg, ageReg, zipReg, phoneReg];
const errors = [ename, ename, eemail, eage, ezip, ephone];
const output = [fnamep, lnamep, emailp, agep, zipp, phonep];
const inputFields = [infname, inlname, inemail, inage, inzip, inphone];

const modalLogout = document.getElementById("ModalLogout");
const modalMain = document.getElementById("exampleModal");
const modalExit = document.getElementById("modalExit");

const logoutInstance = new bootstrap.Modal(modalLogout);
const mainInstance = new bootstrap.Modal(modalMain);
const exitInstance = new bootstrap.Modal(modalExit);

let greeting = document.getElementById("greeting");
let cardCount = 0;

document.getElementById("modal-logout-btn").addEventListener("click", () => {
    document.getElementById("logoutbtn").style.display = "none";
    document.getElementById("loginbtn").style.display = "block";
    logoutInstance.hide();
    greeting.innerHTML = "";
    document.getElementById("carouselExampleIndicators").style.display = "none";
});

document.getElementById("zip").addEventListener("input", (e) => {
    let input = e.target.value;
    input = input.toUpperCase();
    input = input.replace(/[^ABCEGHJ-NPRSTVXY0-9]$/, "");

    if (input.length > 3) {
        input = input.replace(/\s/, "");
        input = input.slice(0,3) + " " + input.slice(3);
    }

    e.target.value = input;
});

document.getElementById("phone").addEventListener("input", (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");

    if (input.length > 6) {
        input = input.slice(0,3) + "-" + input.slice(3,6) + "-" + input.slice(6);
    } else if (input.length > 3) {
        input = input.slice(0,3) + "-" + input.slice(3);
    }

    e.target.value = input;
});


const validate = () => {
    const input = [fname, lname, email, age, zip, phone];
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        output[i].innerHTML = "";

        if (regex[i].test(input[i])) {
            inputFields[i].classList.remove("is-invalid");
            inputFields[i].classList.add("is-valid");
            count++;
        } else {
            inputFields[i].classList.remove("is-valid");
            inputFields[i].classList.add("is-invalid");
            output[i].innerHTML = errors[i];
            if(input[i] === "") {
                output[i].innerHTML = empty;
            }
        }
    }

    if (count === input.length) {
        valid();
    }
}

document.getElementById("modal-close").addEventListener("click", () => {
    exitInstance.show();
    mainInstance.hide();
});

document.getElementById("confirm-exit").addEventListener("click", () => {
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = "";
        inputFields[i].classList.remove("is-valid");
        inputFields[i].classList.remove("is-invalid");
        output[i].innerHTML = "";
    }
});

document.getElementById("cancel-exit").addEventListener("click", () => {
    mainInstance.show();
    exitInstance.hide();
});

document.getElementById("login").addEventListener("submit", (e) => {
    e.preventDefault();

    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    age = document.getElementById("age").value;
    zip = document.getElementById("zip").value;
    phone = document.getElementById("phone").value;

    document.getElementById("logout-greeting").innerHTML = `You are logged in as ${fname} ${lname}. Would you like to log out?`;

    validate();
});

const valid = () => {
    alert("Logged in successfully!");
    document.getElementById("logoutbtn").style.display = "block";
    document.getElementById("loginbtn").style.display = "none";
    mainInstance.hide();
    greeting.innerHTML = `Hello, ${fname} ${lname}`;
    greeting.style.color = "white";

    cardCount++;
    if(cardCount !== 1) {
        createCarousel(cardCount);
    }

    document.getElementById("carouselExampleIndicators").style.display = "block";

    document.getElementById(`cardName${cardCount}`).innerHTML = `${fname} ${lname}`;
    document.getElementById(`cardEmail${cardCount}`).innerHTML = email;
    document.getElementById(`cardAge${cardCount}`).innerHTML = `Age: <span style="color: red">${age}</span>`;
    document.getElementById(`cardZip${cardCount}`).innerHTML = `Zip Code: <span style="color: blue">${zip}</span`;
    document.getElementById(`cardPhone${cardCount}`).innerHTML = `Phone: <span style="color: green">${phone}</span>`;
}

const createCarousel = (x) => {
    document.getElementById("carousel").innerHTML +=
        `<div class="carousel-item h-100 d-flex align-items-center justify-content-center">
            <div class="card d-flex align-items-center justify-content-center flex-column h-100 text-center">
                <img src="/includes/media/profile.PNG" class="card-img-top h-50" style="object-fit: contain" alt="...">
                    <div class="card-body">
                        <h5 id="cardName${x}" class="card-title"></h5>
                        <p id="cardEmail${x}" class="card-text"></p>
                        <ul class="list-group list-group-flush">
                            <li id="cardAge${x}" class="list-group-item"></li>
                            <li id="cardZip${x}" class="list-group-item"></li>
                            <li id="cardPhone${x}" class="list-group-item"></li>
                        </ul>
                    </div>
                </div>
        </div>`;
    
        document.getElementById("carouselIndicators").innerHTML +=
        `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${x-1}" aria-current="true" aria-label="Slide ${x}"></button>`;

}

