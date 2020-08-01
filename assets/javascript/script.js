// hamburger menu navbar
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('siled');
});


// nav
const link = document.querySelector(".list-nav");
const removes = document.querySelectorAll(".link");

link.addEventListener('click', function (l) {
    removes.forEach(function (remove) {
        remove.className = 'link';
    })
    l.target.classList.add("active-link");
});



// Slide Show
var i = 0;
var gambar = [];
var time = 2000;


// gambar
gambar[0] = "url('assets/img/img galerry/Desert.jpg')";
gambar[1] = "url('assets/img/img galerry/Hydrangeas.jpg')";
gambar[2] = "url('assets/img/img galerry/Jellyfish.jpg')";
gambar[3] = "url('assets/img/img galerry/Koala.jpg')";
gambar[4] = "url('assets/img/jumbotron.jpg')";

// Change Image
function ubahGambar() {
    document.getElementById("jumbotron").style.backgroundImage = gambar[i];

    if (i < gambar.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("ubahGambar()", time);
}

window.onload = ubahGambar;


// menyimpan dari form kontak
if (typeof (Storage) !== "undefined") {
    // Browser mendukung sessionStorage/localStorage.
    const kirim = document.querySelector("#kirim");

    kirim.addEventListener('click', function () {
        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const nomor = document.getElementById("nomor").value;
        const pesan = document.getElementById("pesan").value;
        if (nama == !null && email == !null && nomor == !null && pesan == !null) {
            alert("data berhasil di simpan");


            localStorage.setItem("nama", nama);
            localStorage.setItem("email", email);
            localStorage.setItem("nomor", nomor);
            localStorage.setItem("pesan", pesan);

            localStorage.getItem("nama");
            localStorage.getItem("email");
            localStorage.getItem("nomor");
            localStorage.getItem("pesan");
        } else {
            alert("tolong isi semua kolum");
        }
    });
} else {
    // Browser tidak mendukung sessionStorage/LocalStorage
    alert("maaf borwser anda tidak mendukung sisitem kami");
}

