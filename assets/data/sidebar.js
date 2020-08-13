export default [
  {
    link: '/admin/home',
    icon: 'el-icon-house',
    text: 'sidebar.home',
  },
  {
    link: '/admin/products',
    icon: 'el-icon-discount rotate-45',
    text: 'sidebar.products.product',
    subMenu: [
      {
        link: '/admin/products',
        text: 'sidebar.products.product',
      },
      {
        link: '/admin/categories',
        text: 'sidebar.products.categories',
      },
      {
        link: '/admin/brands',
        text: 'sidebar.products.brands',
      },
      {
        link: '/admin/variants',
        text: 'sidebar.products.variants',
      },
    ],
  },
  {
    link: '/admin/orders',
    icon: 'el-icon-shopping-cart-1',
    text: 'sidebar.orders.order',
  },
]
