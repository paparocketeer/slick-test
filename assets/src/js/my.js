  $(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        variableWidth: true,
        arrows: true,
        dots: true,
        appendArrows: $('.navigation'),
        appendDots: $('.navigation'),
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                rows: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                slidesToShow: 1,
                rows: 1,
                slidesToScroll: 1,
                arrows: false,
                // variableWidth: true,
                // centerPadding: '20px'
                
              }
            }
          ]
      });
  });