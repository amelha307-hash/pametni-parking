let slobodnaMjesta = 10; // početni broj slobodnih mjesta

const form = document.getElementById("uploadForm");
const qrDiv = document.getElementById("qrKod");
const slobodnaSpan = document.getElementById("slobodna");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(slobodnaMjesta <= 0){
        alert("Nema slobodnih mjesta!");
        return;
    }

    const fileInput = document.getElementById("nalaz");
    if(fileInput.files.length === 0){
        alert("Molimo uploaduj nalaz!");
        return;
    }

    // Simulacija AI obrade - generiramo QR kod
    const qr = new QRious({
        element: document.createElement('canvas'),
        value: `ParkingID-${Math.floor(Math.random()*10000)}`,
        size: 200
    });

    qrDiv.innerHTML = "<p>Vaš QR kod:</p>";
    qrDiv.appendChild(qr.element);

    // Smanjujemo broj slobodnih mjesta
    slobodnaMjesta--;
    slobodnaSpan.textContent = slobodnaMjesta;

    alert("Rezervacija uspješna! Prikaži QR kod na parkingu.");
});
