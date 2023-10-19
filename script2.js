/* 

.padStart(2, '0');
Intinya padStart untuk menambahkan angka
2 = maksimal digit
'0' = angka tambahan

*/

const city = 1222;
const date = new Date;
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0');
const yyyy = String (date.getFullYear());
const now = yyyy + '-' + mm + '-' + dd;

const jadwalAPI = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`;

fetch(jadwalAPI)
.then(function(response) {
    if(!response.ok){
        throw new Error("Ada yang salah")
    } return response.json();
})

.then((data) => {
    const jadwal = data.data;
    const list = jadwal.jadwal;
    const listJadwal = document.getElementById("list-jadwal");
    const kota = document.getElementById("city");
    const prov = document.getElementById("prov");
    
    
    kota.innerHTML = jadwal.lokasi;
    prov.innerHTML = jadwal.daerah;

    list.forEach((el) => {
        const tr = document.createElement("tr");

        if(el.date === now) {
            tr.classList.add("table-primary")
        }
        
        // Tanggal
        const dd = document.createElement("td");
        dd.innerHTML = el.tanggal;

        // Imsak
        const imsak = document.createElement("td");
        imsak.innerHTML = el.imsak;

        // Subuh
        const subuh = document.createElement("td");
        subuh.innerHTML = el.subuh;

        // Terbit
        const terbit = document.createElement("td");
        terbit.innerHTML = el.terbit;

        // Dhuha
        const dhuha = document.createElement("td");
        dhuha.innerHTML = el.dhuha;

        // Dzuhur
        const dzuhur = document.createElement("td");
        dzuhur.innerHTML = el.dzuhur;

        // Terbit
        const ashar = document.createElement("td");
        ashar.innerHTML = el.ashar;

        // Terbit
        const maghrib = document.createElement("td");
        maghrib.innerHTML = el.maghrib;

        // Terbit
        const isya = document.createElement("td");
        isya.innerHTML = el.isya;

        listJadwal.appendChild(tr);
        tr.appendChild(dd);
        tr.appendChild(imsak);
        tr.appendChild(subuh);
        tr.appendChild(terbit);
        tr.appendChild(dhuha);
        tr.appendChild(dzuhur);
        tr.appendChild(ashar);
        tr.appendChild(maghrib);
        tr.appendChild(isya);
    })
})

const tanggal = document.getElementById("tanggal").innerHTML = dd + " • " + mm + " • " + yyyy;

window.setTimeout("waktu()", 1000);
 
function waktu() {
	var waktu = new Date();
	setTimeout("waktu()", 1000);

	document.getElementById("jam").innerHTML = waktu.getHours() + " : ";
	document.getElementById("menit").innerHTML = waktu.getMinutes() + " : ";
	document.getElementById("detik").innerHTML = waktu.getSeconds();
}

let menuIcon = document.querySelector('#menuIcon')
let navbar = document.querySelector('.navbar')
    
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

function alert() {
    Swal.fire({
        title: '<strong>Credits</strong>',
        icon: 'info',
        html:
          '<a href="https://www.flaticon.com/free-icons/cloud" title="cloud icons" target: "_blank">Cloud icons by Freepik</a> ' + '<br>' +
          '<a href="https://www.flaticon.com/free-icons/mosque" title="mosque icons">Mosque icons by Freepik</a> ' + '<br>' + '<br>' + '- Flaticon -' + '<br>',
        showCloseButton: true,
        showConfirmButton: false,
        // confirmButtonAriaLabel: 'OK',
      })
}