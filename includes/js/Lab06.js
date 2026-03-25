class Hotel {
    constructor(name, city, rooms, booked, gym) {
        this.name = name;
        this.city = city;
        this.rooms = rooms;
        this.booked = booked;
        this.gym = gym;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get city() {
        return this.city;
    }

    set city(city) {
        this.city = city;
    }

    get rooms() {
        return this.rooms;
    }

    set rooms(rooms) {
        this.rooms = rooms;
    }
    
    get booked() {
        return this.booked;
    }

    set booked(booked) {
        this.booked = booked;
    }

    get gym() {
        return this.gym;
    }

    set gym(gym) {
        this.gym = gym;
    }
}

const hotel = new Hotel("Mariott", "Vancouver", 40, 25, true);
hotel.roomTypes = ["twin", "single", "double"];
hotel.swimmingPool = true;
hotel.airportShuttle = false;
hotel.restaurants = new Map([ ["Harolds", "American"],  ["Kyoto", "Japanese"], ["Relax", "Fusion"] ]);

$(document).ready(function() {
    $("#bookbtn").click(function() {

    });

    $("#cancelbtn").click(function() {

    });
});