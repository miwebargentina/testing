var tituloWeb = "Emprendimiento";
var celular = 5491161850594;
window.onload = function() {

    /**
     * 01. Datos globales en la Web
     *
     * -------------------------------------------------------------------
     */
    var facebook = "https://www.facebook.com/";
    var twitter = "https://www.twitter.com/";
    var instagram = "https://www.instagram.com/";
    var tiktok = "https://www.tiktok.com/";

    /**
     * 02. BOX
     *
     * -------------------------------------------------------------------
     */
    var box1 = `<i class="fa-solid fa-truck" style="font-size: 2.5rem; margin-left: -8px;"></i> ENVIAMOS TU COMPRA`;

    var box2 = `<i class="fa-solid fa-credit-card"
    style="font-size: 2.5rem; color: #3c3b3b; margin-right: 8px;"></i>PAGÁ COMO QUIERAS`;

    var box3 = `<i class="fa-brands fa-whatsapp"
    style="font-size: 2.5rem; color: #3c3b3b; margin-right: 8px;"></i>CONSULTAS POR WHATSAPP`;



    // Inyectar texto en el box
    if (document.querySelector(".box1") != null) {

        document.querySelector(".box1").innerHTML = box1;

        document.querySelector(".box2").innerHTML = box2;

        document.querySelector(".box3").innerHTML = box3;
    }



    // Botón de WhatsApp global
    if (document.querySelector(".btn-wsp") != null) {
        document.querySelector('.btn-wsp').href = `https://wa.me/${celular}`;
    }
    



    /**
     * 05. Inyectar redes sociales
     *
     * -------------------------------------------------------------------
     */

    // Poner Urls de redes sociales
    if (document.querySelector('.getUrlF') != null) {
        document.querySelector('.getUrlF').href = facebook;
        document.querySelector('.getUrlT').href = twitter;
        document.querySelector('.getUrlTik').href = tiktok;
        document.querySelector('.getUrlI').href = instagram;
    }


    /**
     * 06. Inyectar el nombre en el title de etiqueta head
     *
     * -------------------------------------------------------------------
     */
    // Cambiar nombre de la web
    if (document.querySelector(".nombreWeb") != null) {
        document.querySelectorAll('.nombreWeb').forEach(element => element.textContent = tituloWeb);
    }
    

/**
     * 0x. Imporante
     *
     * -------------------------------------------------------------------
     */
    if (document.querySelector("#importantez") != null) {

        var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        effect: 'fade',
        loop: true,
        speed: 300,
        mousewheel: {
          invert: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    }



    

};