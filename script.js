document.getElementById("bookingForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const vehicle = document.getElementById("vehicle").value;
    const details = document.getElementById("details").value;

    const message =
`🚖 *New Booking Request*

👤 Name: ${name}

📞 Phone: ${phone}

📍 Pickup: ${pickup}

📍 Drop: ${drop}

📅 Date: ${date}

⏰ Time: ${time}

🚗 Vehicle: ${vehicle}

📝 Extra Details: ${details}`;

    const whatsappURL =
`https://wa.me/919354905998?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});