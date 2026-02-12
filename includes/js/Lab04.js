const rooms = [
    {type: "Standard:",
    description: "Single room with a bed",
    price: "$159",
        img: "includes/media/single.jpg",
    }, {
        type: "Double:",
        description: "Double room with a bed",
        price: "$229",
        img: "includes/media/double.jpg",
    }, {
        type: "Penthouse:",
        description: "King size bed -- Bar -- Jacuzzi",
        price: "$359",
        img: "includes/media/penthouse.jpg",
    }];

for(let i = 0; i < rooms.length; i++) {
    document.getElementById("box").innerHTML += ` <div class="card mb-3 room0" style="max-width: 75%;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${rooms[i].img}" class="img-fluid rounded-start h-100 w-100" alt="...">
            </div>
            <div class="col-md-8 ps-5 pt-3">
            <div class="card-body w-75">
                <h5 class="card-title border-bottom border-dark pb-2">${rooms[i].type}</h5>
                <p class="card-text">${rooms[i].description}</p>
                <h5 class="price">${rooms[i].price}</h5>
                <div class="d-flex">
                    <button class="btn btn-primary mt-3 ms-auto" id="b${i}" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                </div>
            </div>
            </div>
        </div>
    </div>
`;
}
for(let i = 0; i < rooms.length; i++) {
    document.getElementById(`b${i}`).addEventListener("click", function() {
        document.querySelector(".modal-title").innerHTML = `${rooms[i].type}`;
        document.querySelector(".modal-body h5").innerHTML = `Price: ${rooms[i].price}`;
    });
}




let table = document.getElementById("sampleTable");
let rowCount = 1;
let snapshot;

document.getElementById("insert").addEventListener("click", function() {
    //snapshot = document.getElementById("part0201").innerHTML;
    rowCount++;
    table.innerHTML += 
        `<tr>
            <td>Row${rowCount} cell1</td>
            <td>Row${rowCount} cell2</td>
        </tr>`;
        document.getElementById("insert").scrollIntoView({ behavior: "smooth" });
});
/*  
document.getElementById("remove").addEventListener("click", function() {
    if(rowCount > 0) {
        rowCount--;
    }
    document.getElementById("part0201").innerHTML = snapshot;
});
*/