export const responsive = {
  dots: false,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  infinite: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 725,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
      },
    },
  ],
};
