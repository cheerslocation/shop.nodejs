
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
    '79ecd3804fb366cf2d7389fcc8b7e7fa': {
      id: '79ecd3804fb366cf2d7389fcc8b7e7fa',
      sortOrder: 10,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\customer\\pages\\frontStore\\account\\Layout.jsx')
    },
    e0304876cec1be90a97454223569685f: {
      id: 'e0304876cec1be90a97454223569685f',
      sortOrder: 50,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\themes\\eve\\pages\\all\\Newsletter.jsx')
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
  accountPageRight: {
    da9cc77d2562f91c1bb654469cfd7041: {
      id: 'da9cc77d2562f91c1bb654469cfd7041',
      sortOrder: 10,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\customer\\pages\\frontStore\\account\\AccountDetails.jsx')
    }
  },
  accountPageLeft: {
    '79d539ed52af384401fc4bdcd46fae53': {
      id: '79d539ed52af384401fc4bdcd46fae53',
      sortOrder: 10,
      component: require('H:\\development\\vsc workspace\\cheerslocation.shop.nodejs\\shop.nodejs\\node_modules\\@evershop\\evershop\\src\\modules\\customer\\pages\\frontStore\\account\\OrderHistory.jsx')
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