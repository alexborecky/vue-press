module.exports = {
    themeConfig: {
        searchPlaceholder: 'Search...',
        smoothScroll: true,
        logo: 'https://ik.imagekit.io/alexborecky/shoptetak/logo_mxKFZoNmk67u.svg',
        nav: [
            { 
                text: 'Dashboard', 
                link: '/' 
            },
            { 
                text: 'Šablony', 
                items: [
                    { text: 'Opal', link: '/opal/'},
                    { text: 'Celestin', link: '/celestin/'},
                ]
            },
            { 
                text: 'Doplňky', 
                items: [
                    { text: 'Premium Carousel', link: '/premium-carousel/'},
                ]
            },
            { text: 'Shopteťák.cz', link: 'https://shoptetak.cz/' },
        ],
        sidebar: {
            '/test-page/': [
                {
                    title: 'Testing Side Bar',
                    collapsable: false,
                    children: [
                        '',
                        'testing-page'
                    ]
                }
            ],
            '/opal/': [
                {
                  title: 'Opal',
                  collapsable: false,
                  children: [
                    '',
                    'velikost-obrazku',
                    'nastaveni-banneru',
                    'nastaveni-carouselu',
                    'socialni-site',
                    'platebni-metody',
                    'mnozstvi-zbozi',
                  ]
                }
              ],
        },
    }
}