

function sliderOptions() {

    $(document).ready(function () {
        $('.multiple-items').slick({
           variableWidth: true,
           arrows: true,
           dots: true,
           slidesToShow: 15,
           slidesToScroll:4,
           mobileFirst: false,
           waitForAnimate: false,
           infinite: false,
           responsive: [{
                 breakpoint: 1024,
                 settings: {
                    arrows: false,
                    centerPadding: '20px',
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                 }
              },
              {
                 breakpoint: 768,
                 settings: {
                    arrows: false,
                    slidesToShow: 14,
                    slidesToScroll: 2,
                    infinite: false,
                 }
              },
              {
                 breakpoint: 425,
                 settings: {
                    arrows: false,
                    centerPadding: '0px',
                    slidesToShow: 16,
                    slidesToScroll: 1,
                    infinite: false,
                 }
              }
     
           ]
     
        });
     });
    
}

export default sliderOptions;