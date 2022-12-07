
  
  /**
   * ============判断WOW存在否=====================
   */
  $(function () {
    if (typeof (WOW) != 'function') {
      return false;
    }
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
    });
    window.onload = function () {
      wow.init();
    }
  })
  
  /**
   * ============判断swiper存在否=====================
   */
  $(function () {
    if (typeof (Swiper) != 'function') {
      return false;
    }
    var home2 = new Swiper('.home2 .swiper-container', {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      autoplay:true,
      breakpoints: {
        320: {
          spaceBetween: 20,
          slidesPerView: 1,
          slidesPerColumn: 2,
        },
        480: {
          spaceBetween: 20,
          slidesPerView: 2,
          slidesPerColumn: 2,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 2,
          slidesPerColumn: 2,
        },
        1250: {
          spaceBetween: 20,
          slidesPerView: 3,
          slidesPerColumn: 2,
        },
        1366: {
          spaceBetween: 20,
          slidesPerView: 3,
          slidesPerColumn: 2,
        }
      }
    })
    var home3 = new Swiper('.home3 .swiper-container', {
      spaceBetween: 58,
      slidesPerView: '3',
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 28,
          slidesPerView: '1',
        },
        480: {
          spaceBetween: 28,
          slidesPerView: '2',
        },
        768: {
          spaceBetween: 28,
          slidesPerView: '2',
        },
        1250: {
          spaceBetween: 48,
          slidesPerView: '3',
        },
        1366: {
          spaceBetween: 58,
          slidesPerView: '3',
        }
      }
    })
    var home4 = new Swiper('.home4 .swiper-container', {
      spaceBetween: 26,
      slidesPerView: '4',
      autoplay:true,
      navigation: {
        nextEl: '.home4 .next',
        prevEl: '.home4 .prev',
      },
      breakpoints: {
        320: {
          slidesPerView: '1',
        },
        480: {
          slidesPerView: '2',
        },
        768: {
          slidesPerView: '2',
        },
        1250: {
          slidesPerView: '3',
        },
        1366: {
          slidesPerView: '4',
        }
      }
    })
    var home5 = new Swiper('.home5 .swiper-container', {
      spaceBetween: 24,
      slidesPerView: 6,
      slidesPerColumn: 3,
      slidesPerColumnFill: 'row',
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 14,
          slidesPerView: 3,
          slidesPerColumn: 3,
        },
        480: {
          spaceBetween: 14,
          slidesPerView: 4,
          slidesPerColumn: 3,
        },
        768: {
          spaceBetween: 24,
          slidesPerView: 5,
          slidesPerColumn: 3,
        },
        1250: {
          spaceBetween: 24,
          slidesPerView: 5,
          slidesPerColumn: 3,
        },
        1366: {
          spaceBetween: 24,
          slidesPerView: 6,
          slidesPerColumn: 3,
        }
      }
    })
  })