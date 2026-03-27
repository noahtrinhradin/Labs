class Hotel {
    constructor(name, city, rooms, booked, gym) {
        this.name = name;
        this.city = city;
        this.rooms = rooms;
        this.booked = booked;
        this.gym = gym;
    }

    get names() {
        return this.name;
    }

    set names(name) {
        this.name = name;
    }

    get citys() {
        return this.city;
    }

    set citys(city) {
        this.city = city;
    }

    get room() {
        return this.rooms;
    }

    set room(rooms) {
        this.rooms = rooms;
    }
    
    get book() {
        return this.booked;
    }

    set book(booked) {
        this.booked = booked;
    }

    get gyms() {
        return this.gym;
    }

    set gyms(gym) {
        this.gym = gym;
    }

    bookRoom = () => {
        if(this.booked < this.rooms) {
            hclicked++;
            this.booked++;
            btns();
            document.getElementById("sbooked").innerHTML = `${this.booked}`;
            document.getElementById("hmtitle").innerHTML = `Booked!`;
            document.getElementById("hmbody").innerHTML =  `${dealmsg}<br>There are ${this.rooms - this.booked} rooms remaining.`;
            hmodal.show();
        }
    }

    cancelRoom = () => {
        if(hclicked > 0) {
            hclicked--;
            this.booked--;
            btns();
            document.getElementById("sbooked").innerHTML = `${this.booked}`;
            document.getElementById("hmtitle").innerHTML = `Canceled!`;
            document.getElementById("hmbody").innerHTML = `There are ${this.rooms - this.booked} rooms remaining.`;
            hmodal.show();
        }
    }
}

class Resort extends Hotel {
    constructor(name, city, rooms, booked, gym, resortType, beachFront, kidsClub){
        super(name, city, rooms, booked, gym);
        this.resortType = resortType;
        this.beachFront = beachFront;
        this.kidsClub = kidsClub;
    }

    get rt() {
        return this.resortType;
    }

    set rt(resortType) {
        this.resortType = resortType;
    }

    get bf() {
        return this.resortType;
    }

    set bf(resortType) {
        this.resortType = resortType;
    }

    get kc() {
        return this.resortType;
    }

    set kc(resortType) {
        this.resortType = resortType;
    }

     bookRoom = () => {
        if(this.booked < this.rooms) {
            rclicked++;
            this.booked++;
            btns();
            document.getElementById("rsbooked").innerHTML = `${this.booked}`;
            document.getElementById("hmtitle").innerHTML = `Booked!`;
            document.getElementById("hmbody").innerHTML = `${dealmsg}<br>There are ${this.rooms - this.booked} rooms remaining.`;
            hmodal.show();
        }
    }

    cancelRoom = () => {
        if(rclicked > 0) {
            rclicked--;
            this.booked--;
            btns();
            document.getElementById("rsbooked").innerHTML = `${this.booked}`;
            document.getElementById("hmtitle").innerHTML = `Canceled!`;
            document.getElementById("hmbody").innerHTML = `There are ${this.rooms - this.booked} rooms remaining.`;
            hmodal.show();
        }
    }
}


const hotel = new Hotel("Mariott", "Vancouver", 40, 25, true);
hotel.roomTypes = ["Twin", "Single", "Double"];
hotel.swimmingPool = true;
hotel.airportShuttle = false;
hotel.restaurants = new Map([ ["Harolds", "American"],  ["Kyoto", "Japanese"], ["Relax", "Fusion"] ]);

const resort = new Resort("El Paraiso Complejo", "Isla Palma", 9, 6, true, "Family", true, true);

const features = (bool) => {
    if(bool){
        return "Does";
    } else {
        return "Does not";
    }
}

const dRest = (index, val) => {
    let i = 0;
    for(let [key, value] of hotel.restaurants) {
        if(i === index){
            if(val){
                return value;
            } else {
                return key;
            }
        }
        i++;
    }
}

let hclicked = 0;
let rclicked = 0;
const hmodal = new bootstrap.Modal(document.getElementById("hmodal"));

const btns = () => {

    const hbook = document.getElementById("hbookbtn");
    const hcancel = document.getElementById("hcancelbtn");
    const rbook = document.getElementById("rbookbtn");
    const rcancel = document.getElementById("rcancelbtn");

    if (hotel.booked === hotel.rooms) {
        hbook.disabled = true;
    } else {
        hbook.disabled = false;
    }

    if (hclicked === 0) {
        hcancel.disabled = true;
    } else {
        hcancel.disabled = false;
    }

    if (resort.booked === resort.rooms) {
        rbook.disabled = true;
    } else {
        rbook.disabled = false;
    }

    if (rclicked === 0) {
        rcancel.disabled = true;
    } else {
        rcancel.disabled = false;
    }

}

let deal = false;
let dealmsg = "";


$(document).ready(function() {

    $("#hbookbtn").click(hotel.bookRoom);
    $("#hcancelbtn").click(hotel.cancelRoom);

    $("#rbookbtn").click(resort.bookRoom);
    $("#rcancelbtn").click(resort.cancelRoom);

    $("#hbody").html(`
        <h1 class="card-title">${hotel.name}</h1>
        <h5 class="card-subtitle text-decoration-underline">Hotel Info</h5><br>
        <p class="card-text">The <b>${hotel.name} Hotel</b> is located in <b>${hotel.city}.</b></p>
        <p class="card-text">The available rooms types are: <b>${hotel.roomTypes.slice(0, -1).join(", ")}</b> and <b>${hotel.roomTypes.at(-1)}.</b></p>
        <div class="d-flex me-3 ms-3">
        <ul class="list-group list-group-flush m-3">
        <h6 class="card-title">The Hotel:</h6>
            <li class="list-group-item"><b>${features(hotel.airportShuttle)}</b> feature an airport shuttle.</li>
            <li class="list-group-item"><b>${features(hotel.swimmingPool)}</b> feature a simming pool.<br></li>
            <li class="list-group-item"><b>${features(hotel.gym)}</b> feature a gym.</li>
        </ul>
        <ul class="list-group list-group-flush m-3">
        <h6 class="card-title">Enjoy local restaurants!</h6>
            <li class="list-group-item"><b>${dRest(0, false)}</b> / Type / <b>${dRest(0, true)}</b></li>
            <li class="list-group-item"><b>${dRest(1, false)}</b> / Type / <b>${dRest(1, true)}</b></li>
            <li class="list-group-item"><b>${dRest(2, false)}</b> / Type / <b>${dRest(2, true)}</b></li>
        </ul>
        </div>
    `);

    $("#hrooms").html(`There are <span id="sbooked">${hotel.booked}</span> / ${hotel.rooms} rooms booked.`);

    
    $("#rbody").html(`
        <h1 class="card-title">Isla Palma Eco Resort</h1><br>
        <h5 class="card-subtitle text-decoration-underline">Resort Info</h5><br>
        <p class="card-text"><b>${resort.name}</b>, is a <b>${resort.resortType}</b> resort, located in <b>${resort.city}.</b></p>
        <p class="card-text">The resort <b>${features(resort.beachFront).toLowerCase()}</b> have a beachfront, and <b>${features(resort.kidsClub).toLowerCase()}</b> feaure a kids club.</p>
        <br>
    `);

    $("#rrooms").html(`There are <span id="rsbooked">${resort.booked}</span> / ${resort.rooms} rooms booked.`);

    $("#hotelbtn").click(function() {
        $("#hcard").show();
        $("#rcard").hide();
    });

    $("#resortbtn").click(function() {
        $("#hcard").hide();
        $("#rcard").show();
    });

    let clicked = false;
    //if state in book button that checks if deal is active and clears interval, p to "deal redeemed" and disables btn
    $("#dealbtn").click(function() {
        if(!clicked){
            let time = 11;
            deal = true;
            dealmsg = "Free breakfast deal added!";
            clicked = true;
            const dealTimer = setInterval(() => {
                time--;
                $("#dealp").html(`Offer expires in <b>${time}</b> seconds!`)

                if(time === 0){
                    deal = false;
                    dealmsg = "";
                    clearInterval(dealTimer);
                    $("#dealp").html(`Offer expired!`);
                    deal = false;
                    dealmsg = "";
                    $("#dealbtn").prop("disabled", true);
                }
            }, 1000 );
        }
    });
});