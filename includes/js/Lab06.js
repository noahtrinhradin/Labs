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
}

class Resort extends Hotel {
    constructor(name, city, rooms, booked, gym, resortType, beachFront, kidsClub){
        super();
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
}


const hotel = new Hotel("Mariott", "Vancouver", 40, 25, true);
hotel.roomTypes = ["Twin", "Single", "Double"];
hotel.swimmingPool = true;
hotel.airportShuttle = false;
hotel.restaurants = new Map([ ["Harolds", "American"],  ["Kyoto", "Japanese"], ["Relax", "Fusion"] ]);

const resort = new Resort("Isla Palma Eco Resort", "Isla Palma", 9, 6,true, "Family", true, true);

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

let clicked = 0;
const hmodal = new bootstrap.Modal(document.getElementById("hmodal"));

const btns = () => {
    if (hotel.booked === hotel.rooms) {
        document.getElementById("bookbtn").disabled = true;
    } else {
        document.getElementById("bookbtn").disabled = false;
    }

    if (clicked === 0) {
        document.getElementById("cancelbtn").disabled = true;
    } else {
        document.getElementById("cancelbtn").disabled = false;
    }
}


$(document).ready(function() {

    const bookRoom = () => {
        if(hotel.booked < hotel.rooms) {
            clicked++;
            hotel.booked++;
            btns();
            $("#sbooked").text(`${hotel.booked}`);
            $("#hmtitle").html(`Booked!`);
            $("#hmbody").html(`There are ${hotel.rooms - hotel.booked} rooms remaining.`);
            hmodal.show();
        }
    }

    const cancelRoom = () => {
        if(clicked > 0) {
            clicked--;
            hotel.booked--;
            btns();
            $("#sbooked").text(`${hotel.booked}`);
            $("#hmtitle").html(`Canceled!`);
            $("#hmbody").html(`There are ${hotel.rooms - hotel.booked} rooms remaining.`);
            hmodal.show();
        }
    }

    $("#hbookbtn").click(bookRoom);
    $("#hcancelbtn").click(cancelRoom);

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


});