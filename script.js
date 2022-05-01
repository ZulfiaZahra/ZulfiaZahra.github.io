const Iya = document.querySelector(".next");
const Text = document.getElementById("text");
const Image = document.querySelector("#image-gif");

Iya.addEventListener("click", function () {
    Iya.value = parseInt(Iya.value) + 1;
    Text.classList.remove('text-animate');

    if (Iya.value == 1) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = " Hallo ini Zara <3 ";
        Text.classList.add('text-animate');
    }else if (Iya.value == 2) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = " Zara minta maaf karena .. ";
        Image.setAttribute("src", "https://c.tenor.com/uygoMR-ATWgAAAAj/happy-ied-mubarak-ied-mubarak.gif");
        Text.classList.add('text-animate');
    }else if (Iya.value == 3) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = " Maaf karena Zara terlalu cantik ";
        Text.classList.add('text-animate');
    }else if (Iya.value == 4) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = " Maaf karena Zara terlalu baik ";
        Text.classList.add('text-animate');
    }else if (Iya.value == 5) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = " Maaf karena Zara terlalu menarik ";
        Text.classList.add('text-animate');
    }else if (Iya.value == 6) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = " Zara juga minta THR ya kalau bisa :) ";
        Text.classList.add('text-animate');
    }else if (Iya.value == 7) {
        Image.setAttribute("src", "https://c.tenor.com/T_16HTs34x4AAAAj/taqabbal-allahu-minna-wa-minkum-accept-god-with-us-and-you.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ <br> Taqabbalallahu Minna Wa Minkum <br> Wa Taqabal Yaa Karim";
        Text.classList.add('text-animate');
    }else if (Iya.value == 8) {
        Image.setAttribute("src", "https://c.tenor.com/57JSPYRo0k8AAAAj/lebaran-selamat-lebaran.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Selamat Hari Raya Idul Fitri 1443H semuanyaa!!";
        Text.classList.add('text-animate');
        Iya.remove();
    }
});