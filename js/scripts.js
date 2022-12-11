/* Instrução de JQuery que inicialize esse script apenas quando o documento estiver pronto */

$(document).ready(function() {  /* Se utiliza quando existe JQuery no projeto, espera o documento html carregar todo */

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9',
        strokeWidth: 8,  /* largura do circulo, borda */
        duration: 1400,  /* milisegundos */
        from: { color: '#AAA'},  /* começa */
        to: { color: '#65DAF9'},  /* termina */

        step: function(state, circle) {  /* biblioteca bootstrap que faz a animação do circulo animado com js */
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }
    });


    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,  /* largura do circulo, borda */
        duration: 1600,  /* milisegundos */
        from: { color: '#AAA'},  /* começa */
        to: { color: '#65DAF9'},  /* termina */

        step: function(state, circle) {  /* biblioteca bootstrap que faz a animação do circulo animado com js */
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });

    
    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9',
        strokeWidth: 8,  /* largura do circulo, borda */
        duration: 2000,  /* milisegundos */
        from: { color: '#AAA'},  /* começa */
        to: { color: '#65DAF9'},  /* termina */

        step: function(state, circle) {  /* biblioteca bootstrap que faz a animação do circulo animado com js */
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });


    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        strokeWidth: 8,  /* largura do circulo, borda */
        duration: 2200,  /* milisegundos */
        from: { color: '#AAA'},  /* começa */
        to: { color: '#65DAF9'},  /* termina */

        step: function(state, circle) {  /* biblioteca bootstrap que faz a animação do circulo animado com js */
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5200);

            circle.setText(value);
        }
    });

    // Iniciando loader quando o usuário chega ao elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;  /* Para a animação apos ser executada 1 vez */

    $(window).scroll(function(e) {
        
        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0 ) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
        
    });

    // Parallax
    setTimeout(function(){

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});  // Dados da empresa
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});  // Trabalhe conosco

    }, 250);  /* 250 milésimos para nao bugar a tela e carregar tds as imgs da pagina html primeiro e assim nao ter bugs no paralax */
    

    // Filtro do portfólio - Conheça nossos trabalhos

    $('.filter-btn').on('click', function() {  // Evento de click no filter.btn, quando for clicado, acontece uma função anônima

        let type = $(this).attr('id');
        let boxes = $('.project-box');
    
        $('.main-btn').removeClass('active');
        $(this).addClass('active');  // botão clicado será exibido
    
        if(type == 'dsg-btn') {
            eachBoxes('dsg', boxes);
        } else if(type == 'dev-btn') {
            eachBoxes('dev', boxes);
        } else if(type == 'seo-btn') {
            eachBoxes('seo', boxes);
        } else {
            eachBoxes('all', boxes);
        }
    
    });
    
    function eachBoxes(type, boxes) {

        if(type == 'all') {
            $(boxes).fadeIn();  // se for all, mostra tudo
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {  // se tiver a classe do tipo enviado, mostra os itens referentes
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }


  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let teamSection = $('#team-area');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if(btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if(btnId == 'portfolio-menu') {
      scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  
    });

});

