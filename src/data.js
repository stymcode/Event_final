// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png'; 

import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'features',
    href: 'features',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

export const hero = {
  title: '',
};

export const stats = [
  {
    value: '7',
    text: 'Year Experience',
  },
  {
    value: '2',
    text: 'Opened in the country',
  },
  {
    value: '10k+',
    text: 'Furniture sold',
  },
  {
    value: '260+',
    text: 'Variant Furniture',
  },
];

export const features = {
  image: <Features1Img />,
  title: ' EVENTS INVITATION',
  subtitle:
    'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ullam Labore Fugiat Ut Esse Perferendis Perspiciatis Provident Dolores Fuga In Facilis Culpa',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Annual Meet -2019',
      subtitle:
        'The BCE-NITP Alumni Association cordially invites you to participate along with your family in the Annual Meet -2019 on 3rd February 2019.',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Programme of Annual meet on 3rd February 2019',
      subtitle:
        'The 2019 Meet happens to be Diamond Jubilee meet for 1959 Batch, Golden Jubilee Meet for 1969 Batch and Silver Jubilee for 1994 batch(1989 admission batch).',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'A Very Special Celebration To Our Alumni',
    subtitle:
      'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ullam Labore Fugiat Ut Esse Perferendis Perspiciatis Provident Dolores Fuga In Facilis Culpa Possimus, Quia Praesentium Itaque, Sapiente Quasi Harum Rem Asperiores.',
  },
};

export const newInStore = {
  title: 'UPCOMING EVENTS',
  subtitle: 'The 2019 Meet happens to be Diamond Jubilee meet for 1959 Batch, Golden Jubilee Meet for 1969 Batch and Silver Jubilee for 1994 batch(1989 admission batch)',
  
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: '',
      image: <ChairImg />,
    },
    {
      name: '',
      image: <BedImg />,
    },
    {
      name: '',
      image: <CupboardImg />,
    },
    {
      name: '',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'OUR GALLERY',
  subtitle:
    'Get the latest Photos of the event celebation.',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
       
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
        
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
        
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: '',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: '',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: '',
          price: 105,
          oldPrice: 120,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'ALUMNIS EXPERIENCE',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Nitish Kumar',
      occupation: 'Alumni of the year: 1972',
      message:
        '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.”',
    },
    {
      avatar: <Avatar1Img />,
      name: 'Nitish Kumar',
      occupation: 'Alumni of the year: 1972',
      message:
        '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.”',
    },
    {
      avatar: <Avatar1Img />,
      name: 'Nitish Kumar',
      occupation: 'Alumni of the year: 1972',
      message:
        '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti.”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'FurniShop 2022 - All Rights Reserved.',
};
