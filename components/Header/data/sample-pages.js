import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';

const sample = [
  {
    id: 'company',
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.crypto.about
      },
      {
        name: 'team',
        link: link.crypto.team
      },
      {
        name: 'blog',
        link: link.crypto.blog
      },
      {
        name: 'blog detail',
        link: link.crypto.blogDetail
      }
    ],
  },
  {
    id: 'form',
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.crypto.login
      },
      {
        name: 'register',
        link: link.crypto.register
      },
      {
        name: 'contact',
        link: link.crypto.contact
      },
      {
        name: 'contact map',
        link: link.crypto.contactMap
      }
    ],
  },
  {
    id: 'items',
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.crypto.card
      },
      {
        name: 'product',
        link: link.crypto.product
      },
      {
        name: 'product detail',
        link: link.crypto.productDetail
      }
    ],
  },
  {
    id: 'utilities',
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.crypto.pricing
      },
      {
        name: 'faq',
        link: link.crypto.faq
      },
      {
        name: 'maintenance',
        link: link.crypto.maintenance
      },
      {
        name: 'coming soon',
        link: link.crypto.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
