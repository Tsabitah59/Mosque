const city = 3271;
const date = new Date;
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth()).padStart(2, '0');
const yyyy = date.getFullYear();
const now = yyyy + ' - ' + mm + ' - ' + dd;

const number = 1;

const jadwalApi = URL("https://api.myquran.com/v1/sholat/jadwal/1204/2023/09/06");
const alquran = URL('https://api.banghasan.com/quran/format/json/surat')

window.onload = function() {
    getData();
}

function getData() {
    var shalat = new XMLHttpRequest();
    shalat.open(
        "GET",
        jadwalApi,
        true
    );
    shalat.onreadystatechange = function () {
        if (shalat.readyState === 4 && shalat.status === 200) {
            var response = JSON.parse(shalat.responseText);
            displayData(response);
        }
    }
    shalat.send();
}

function displayData(data) {
    var jadwalDiv = document.getElementById("jadwal");
    jadwalDiv.innerHTML = ' '

    data.jadwal.forEach(function(shalattt) {
        var shalatDiv = document.createElement("div");
        shalatDiv.classList.add("jadwalShalat");

        var tanggalHariIni = document.createElement("h3");
        tanggalHariIni.textContent = shalattt.tanggal
    })
}