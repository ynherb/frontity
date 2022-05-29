const settings = {
  "name": "7fridays",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development",
    },
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://ynherb29922.000webhostapp.com",
          "postTypes": [
            {
              type: "result",
              endpoint: "result",
              archive: '/archives/result',
            },
            {
              type: "product",
              endpoint: "product",
              archive: '/product',
            }
          ],
          "taxonomies": [
            {
              taxonomy: "category", // taxonomy slug
              endpoint: "categories", // REST API endpoint
              postTypeEndpoint: "result", // endpoint from which posts from this taxonomy are fetched
            }
          ]
        },
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
