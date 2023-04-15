// let images = [{
//     url: "https://www.mercedes-benz.cz/passengercars/mercedes-benz-cars/models/g-class/suv-w463/amg/exterior-design/_jcr_content/par/doubleimagecombinati/par/doubleimageelement/asset.MQ6.12.20200123181444.jpeg",
//     title: "Gelik серый"
//   }, {
//     url: "https://img.favcars.com/mini/hatch/mini_hatch_2010_wallpapers_14_1280x960.jpg",
//     title: "Mini Cooper черный"
//   }, {
//     url: "https://www.autoweb.cz/wp-content/uploads/2020/10/mercedes-benz-s-1100x618.jpg",
//     title: "Мерседес 223"
//   }, {
//     url: "https://a.d-cd.net/af41e8cs-https://www.autoscout24.cz/cms-content-assets/3xWCfLNxw0nJPJxGvOa0mR-88d1c9483ec6464be7f0461c8e90dc12-mercedes-benz-a-klasse-l-01-1100.jpg.jpg",
//     title:  " Мерседес А-класс бордовый"
//   }, {
//     url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/GLA/7269/1621948227508/front-left-side-47.jpg",
//     title: "Мереседес Gle63"
// }];

// function initSlider(options) {
//   if (!images || !images.length) return;
  
//   options = options || {
//     titles: false,
//     dots: true,
//     autoplay: false
//   };
  
//   let sliderImages = document.querySelector(".slider__images");
//   let sliderArrows = document.querySelector(".slider__arrows");
//   let sliderDots = document.querySelector(".slider__dots");
  
//   initImages();
//   initArrows();
  
//   if (options.dots) {
//     initDots();
//   }
  
//   if (options.titles) {
//     initTitles();
//   }
  
//   if (options.autoplay) {
//     initAutoplay();
//   }
  
//   function initImages() {
//     images.forEach((image, index) => {
//       let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
//       sliderImages.innerHTML += imageDiv;
//     });
//   }
  
//   function initArrows() {
//     sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
//       arrow.addEventListener("click", function() {
//         let curNumber = +sliderImages.querySelector(".active").dataset.index;
//         let nextNumber;
//         if (arrow.classList.contains("left")) {
//           nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
//         } else {
//           nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
//         }
//         moveSlider(nextNumber);
//       });
//     });
//   }
  
//   function initDots() {
//     images.forEach((image, index) => {
//       let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
//       sliderDots.innerHTML += dot;
//     });
//     sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
//       dot.addEventListener("click", function() {
//         moveSlider(this.dataset.index);
//       })
//     })
//   }
  
//   function moveSlider(num) {
//     sliderImages.querySelector(".active").classList.remove("active");
//     sliderImages.querySelector(".n" + num).classList.add("active");
//     if (options.dots) {
//       sliderDots.querySelector(".active").classList.remove("active");
//       sliderDots.querySelector(".n" + num).classList.add("active");
//     }
//     if (options.titles) changeTitle(num);
//   }
  
//   function initTitles() {
//     let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
//     sliderImages.innerHTML += cropTitle(titleDiv, 50);
//   }
  
//   function changeTitle(num) {
//     if (!images[num].title) return;
//     let sliderTitle = sliderImages.querySelector(".slider__images-title");
//     sliderTitle.innerText = cropTitle(images[num].title, 50);
//   }
  
//   function cropTitle(title, size) {
//     if (title.length <= size) {
//       return title;
//     } else {
//       return title.substr(0, size) + "...";
//     }
//   }
  
//   function initAutoplay() {
//     setInterval(() => {
//       let curNumber = +sliderImages.querySelector(".active").dataset.index;
//       let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
//       moveSlider(nextNumber);
//     }, options.autoplayInterval);
//   }
// }

// let sliderOptions = {
//   dots: true,
//   titles: true,
//   autoplay: true,
//   autoplayInterval: 5000
// };

// document.addEventListener("DOMContentLoaded", function() {
//   initSlider(sliderOptions);
// });

// let offset1 = 0;
// const slider_line = document.querySelector('.slider-line')
// document.querryselector('.slider-next')addEventListener('click',function(){
//     offset1=offset1+256;
//     if(offset1>768){
//         offset1 = 0;
//     }
//     slider_line.style.left = -offset + 'px';
// })
// let offset = 0;
// const slider_line = document.querySelector('.slider-prev')

// document.querryselector('.slider-next')addEventListener('click',function(){
//     offset = offset - 256;
//     if( offset < 0){
//         offset = 768;
//     }
//     slider_line.style.left = -offset + 'px';
// })
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});
prompt('вам необходимо подтвердить ваш возраст ')