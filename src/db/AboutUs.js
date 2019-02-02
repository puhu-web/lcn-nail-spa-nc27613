import React from 'react';

const AboutUs = {
  salonName: 'LCN NAIL SPA',
  logo: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/logo/logo.png',
  coverPhoto: 'https://s3.amazonaws.com/puha-web-images/PhotoCover/cover1.jpg',
  slogan: 'Let Us Bring You Comfort & Relaxation',
  aboutUs: <span>
            LCN Nails is proud of providing our customers with excellent services at affordable prices. 
            Our well-trained, experienced & talented technicians with a positive attitude will bring customers 
            comfort and relaxation with trending and new beauty techniques with decent prices every time crossing by. 
            Especially, customers’ cleanliness and safety is also of our utmost importance at our salon. 
            All our instruments are autoclave-sterilized, and Files, Buffers, Pumice Stones are disscarded after each client. 
            It would be our pleasure to serve you at LCN Nail Spa.
          </span>
            ,
  weOffer: [
    { name: 'Nails Enhancements',
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/mani4.png'
    },
    { name: 'Luxury Pedicures',
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/pedi9.png'
    },
    { name: "Waxing",
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/waxing1.png'
    },
    { name: "Kids' Services",
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/nailArt1.png'
    },
  ],
  busHrs: [
    { dates: 'Tuesday - Saturday', time: "9:30 am - 7:00 pm" },
    { dates: 'Sunday', time: "11:00 am - 5:00 pm" },
    { dates: 'Monday', time: "Closed" },
  ],
  address: {
    street: '12341 Strickland Rd, Ste 106',
    city: 'Raleigh',
    state: 'NC',
    zipCode: '27613'
  },
  addressLink: 'https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632',
  phone: '(984) 202-5188',
  email: '',
  salonPhoto: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/gallery/salonPhoto/gallery-160625.jpg'
}

export default AboutUs;