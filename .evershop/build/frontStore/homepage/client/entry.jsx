
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateFrontStore';
      
Area.defaultProps.components = {
  'icon-wrapper': {
    '9cfbb841abe9ad4e5d5987512bf00687': {
      id: '9cfbb841abe9ad4e5d5987512bf00687',
      sortOrder: 5,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\frontStore\\all\\SearchBox.jsx')
    },
    db7a1f3642fb1113f1cdaa4b6e0dfcf8: {
      id: 'db7a1f3642fb1113f1cdaa4b6e0dfcf8',
      sortOrder: 10,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\checkout\\pages\\frontStore\\all\\MiniCart.jsx')
    },
    '1f94e1f115efa75abb68f5d5ebdc127c': {
      id: '1f94e1f115efa75abb68f5d5ebdc127c',
      sortOrder: 30,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\customer\\pages\\frontStore\\all\\UserIcon.jsx')
    },
    c65b62edf46cb9e47153284ea0f3193b: {
      id: 'c65b62edf46cb9e47153284ea0f3193b',
      sortOrder: 50,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\all\\MobileMenu.jsx')
    }
  },
  content: {
    '93eef20b77060bf9d94e428dd6abb0db': {
      id: '93eef20b77060bf9d94e428dd6abb0db',
      sortOrder: 0,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Breadcrumb.jsx')
    },
    e0304876cec1be90a97454223569685f: {
      id: 'e0304876cec1be90a97454223569685f',
      sortOrder: 50,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\all\\Newsletter.jsx')
    },
    '83affa198d3c76953793e31f49eaeddd': {
      id: '83affa198d3c76953793e31f49eaeddd',
      sortOrder: 5,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\homepage\\FeaturedCategories.jsx')
    },
    e7451dda9906a280a6b0417ccedff99c: {
      id: 'e7451dda9906a280a6b0417ccedff99c',
      sortOrder: 15,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\homepage\\FeaturedProducts.jsx')
    },
    '2cfe86c16848828ec32699d053ea2cd3': {
      id: '2cfe86c16848828ec32699d053ea2cd3',
      sortOrder: 2,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\homepage\\FreeShippingBar.jsx')
    },
    '02b6fd62fdb02df58ff74cb7e23fd917': {
      id: '02b6fd62fdb02df58ff74cb7e23fd917',
      sortOrder: 1,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\homepage\\MainBanner.jsx')
    }
  },
  footer: {
    '4b1b2cf570338276048ddaa382ffbe31': {
      id: '4b1b2cf570338276048ddaa382ffbe31',
      sortOrder: 10,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Footer.jsx')
    }
  },
  head: {
    ef7ab5dff275c1b3eb6184669b7cba30: {
      id: 'ef7ab5dff275c1b3eb6184669b7cba30',
      sortOrder: 5,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\HeadTags.jsx')
    }
  },
  body: {
    '8d52702e890250d626199043e665bcb3': {
      id: '8d52702e890250d626199043e665bcb3',
      sortOrder: 1,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\all\\Layout.jsx')
    },
    '907bec39c642dd741230eea7d6a57dcd': {
      id: '907bec39c642dd741230eea7d6a57dcd',
      sortOrder: 10,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Notification.jsx')
    }
  },
  header: {
    f99b5bd849d6010f1473d44117a85d50: {
      id: 'f99b5bd849d6010f1473d44117a85d50',
      sortOrder: 5,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\all\\Logo.jsx')
    },
    fb2e4ba2761a969954dd38fbbd48b1b3: {
      id: 'fb2e4ba2761a969954dd38fbbd48b1b3',
      sortOrder: 1,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\all\\Menu.jsx')
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/CollectionProducts.jsx')
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/TextBlock.jsx')
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/BasicMenu.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );