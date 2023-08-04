const products = [
    {
      id: "1",
      name: "Women Casual Tshirt",
      price: "25.99",
      quantity: "138",
      category: "women",
      subcategory: "clothes",
      images: [
        "images/products/1_1.jpg",
        "images/products/1_2.jpg",
        "images/products/1_3.jpg",
      ],
      description: "<div><p>Sky blue woman's Tshirt</p><p><strong>Product Details:</strong></p><ul><li>Material Type: Cotton</li><li>Size & Fit: Xs, S, M, L, XL, XXL</li><li>Material Care: Machine Wash</li><li>Pattern Type: Solid</li>",
      rating: "4"
    },
    {
      id: "2",
      name: "Women Crew Neckline Tee",
      price: "29.99",
      quantity: "130",
      category: "women",
      subcategory: "clothes",
      images: [
        "images/products/2_1.jpg",
        "images/products/2_2.jpg",
        "images/products/2_3.jpg",
        "images/products/2_4.jpg",
        "images/products/2_5.jpg",
        
      ],
      description: "<div><p>Welcome a stylish option to your tee collection with the comfy and casual Penmans women’s crew neckline tee. Made from interlock knit in a cotton-rich blend, it’s a comfy pick for everyday wear. It’s styled with a classic crew neckline, short sleeves, and a straight hem. Easy to style, it pairs well with jeans and pants when you’re grabbing lunch with friends or running errands.</p><p><strong>Product Details:</strong></p><ul><li>Made in Canada</li><li>Size & Fit: Xs, S, M, L, XL, XXL</li><li>Material Type: 60% Cotton, 40% Recycled Polyester </li><li>Machine wash Cold</li><li>Pttern Type: Crew neckline</li></ul></div>",
      rating: "3"
    },
    {
      id: "3",
      name: "Women's Core Long Sleeve Tee",
      price: "87.99",
      quantity: "42",
      category: "women",
      subcategory: "clothes",
      images: [
        "images/products/3_1.jpg",
        "images/products/3_2.jpg",
        "images/products/3_3.jpg",
        "images/products/3_4.jpg",
        "images/products/3_5.jpg"
      ],
      description: "<div><p>Add a staple to your casual wardrobe with women's core long sleeve tee. Composed of soft jersey knit, it's designed with a crew neckline, a curved hem and an all-over pattern.</p><p><strong>Product Details:</strong></p><ul><li>Material Type: Cotton</li><li>Size & Fit: Xs, S, M, L, XL, XXL</li><li>Material Care: Machine Wash</li><li>Pattern Type: Solid</li>",
      rating: "1"
    },
    {
      id: "4",
      name: "Women Formal White Button-Down Shirt",
      price: "39.99",
      quantity: "51",
      category: "women",
      subcategory: "clothes",
      images: [
        "images/products/4_1.jpg",
        "images/products/4_2.jpg",
        "images/products/4_3.jpg",
        "images/products/4_4.jpg",
        "images/products/4_5.jpg",
        "images/products/4_6.jpg"
      ],
      description: "<div><p>An update to a classic staple, this Love Ellen DeGeneres Women's White Button-Down Shirt is the perfect addition to any wardrobe. With ribbed side panels in a tonal white for added comfort, this shirt easily transitions from day to night, all year long. P.S., this is one of Ellen's favorite pieces this season.</li><p><strong>Product Details:</strong></p><ul><li>Material Type: Cotton</li><li>Size & Fit: Xs, S, M, L, XL, XXL</li><li>Material Care: Machine Wash</li><li>Pattern Type: Long-Sleeve Shirt</li>",
      rating: "3"
    },
    {
      id: "5",
      name: "women colthes - women jeans",
      price: "49.99",
      quantity: "67",
      category: "women",
      subcategory: "clothes",
      images: [
        "images/products/5_1.jpg",
        "images/products/5_2.jpg",
        "images/products/5_3.jpg",
        "images/products/5_4.jpg",
        "images/products/5_5.jpg"
      ],
      description: "<div><p>Upgrade your jean collection with casual-cool style to spare with STYLE women’ straight leg jean. Composed of denim with a hint of stretch, it’s designed with belt loops, a button and zipper fly closure, and a classic 5-pocket design. A great alternative to all the pairs of skinny jeans in your closet, it features an on-trend straight leg and frayed hems.</p><p><strong>Product Details:</strong></p><ul><li>Material Type:98% Cotton, 2% Elastane</li><li>Size & Fit: 0, 1, 2, 3, 4, 5</li><li>Material Care: Machine Wash</li><li>Pattern Type: Casual Pants</li>",
      rating: "4"
    },
    {
      id: "6",
      name: "Women clothes- formal pant",
      price: "59.99",
      quantity: "92",
      category: "women",
      subcategory: "clothes",
      images: [
        "images/products/6_1.jpg",
        "images/products/6_2.jpg",
        "images/products/6_3.jpg",
        "images/products/6_4.jpg",
        "images/products/6_5.jpg"
      ],
      description: "<div><p>Upgrade your jean collection with cool style to spare with STYLE women’ straight leg jean. Composed of denim with a hint of stretch, it’s designed with belt loops, a button and zipper fly closure, and a classic 5-pocket design. A great alternative to all the pairs of skinny jeans in your closet, it features an on-trend straight leg and frayed hems.</p><p><strong>Product Details:</strong></p><ul><li>Material Type:98% Cotton, 2% Elastane</li><li>Size & Fit: 0, 1, 2, 3, 4, 5</li><li>Material Care: Machine Wash</li><li>Pattern Type: Formal Pants</li>",
      rating: "5"
    },
    {
      id: "7",
      name: "Women Casual clothes- Skirt",
      price: "65.88",
      quantity: "36",
      category: "women",
      subcategory: "clothes",
      images: [
        "images/products/7_1.jpeg",
        "images/products/7_2.jpg",
        "images/products/7_3.jpeg",
        "images/products/7_4.jpeg",
        "images/products/7_5.jpg",
        "images/products/7_6.jpg"
      ],
       description: "<div><p>Breathable and comfortable - The soft cotton lining and the breathable insole ensure that the little feet stay dry and feel good even after a long game day. With these rain boots, your kids will love to splash around in puddles while their feet stay warm and dry. cozy. The rain boots are designed so that your children can enjoy every moment of play!</p><p><strong>Product Details:</strong></p><ul><li>Material Type: PVC</li><li>Size & Fit: 18cm </li><li>Sole: Non-slip and durable </li>",
      rating: "5"
    },
    {
      id: "8",
      name: "women accessories- Lip Makeup Neo-Neutrals Slim Lipstick, More Coffee, 1.7 g",
      price: "19.79",
      quantity: "187",
      category: "women",
      subcategory: "accessories",
      images: [
        "images/products/8_1.jpg",
        "images/products/8_2.jpg",
        "images/products/8_3.jpg"
      ],
       description: "<div><p>Explore our non-drying matte lipstick. The ultimatte slim lipstick features a lightweight formula and comes in 10 high-impact color pigments./p><p><strong>Product Details:</strong></p><ul><li>Material Type: Lipstick </li><li>Finish: Matte </li>",
      rating: "2"
    },
    {
      id: "9",
      name: "Women accessories- Womens Handbag Tote Shoulder Purse Leather Crossbody Bag",
      price: "32.99",
      quantity: "181",
      category: "women",
      subcategory: "accessories",
      images: [
        "images/products/9_3.jpg",
        "images/products/9_1.jpg",
        "images/products/9_2.jpeg"
      ],
       description: "<div><p>One back zipper pocket can hold your keys or cards and it's easy to be found. Internal: Two main compartments, a middle zipper pocket, two small side compartments and one zipper side pocket. The bag can hold an iPad Mini, phone, wallet and some small stuff.</p><p><strong>Product Details:</strong></p><ul><li>Material Type: Handbags</li><li>Fabric Type: Leather & Faux Leather </li><li>Color: Dark Gray</li>",
      rating: "3"
    },
    {
      id: "10",
      name: "Women Accessories- Essie Nail Colour, 13.5 mL",
      price: "24.99",
      quantity: "100",
      category: "women",
      subcategory: "accessories",
      images: [
        "images/products/10_1.jpg",
        "images/products/10_2.jpg",
        "images/products/10_3.jpg"
      ],
       description: "<div><p>Over a thousand nuanced colors, essie original nail polish takes from the latest fashion and cultural trends to make your manicure possibilities endless, with a wink and story always on hand.</p><p><strong>Product Details:</strong></p><ul><li>Quick Dry: No</li><li>Color: Eternal optimist </li><li>Model: #35742</li>",
      rating: "5"
    },
    {
      id: "11",
      name: "men clothes- Fashion Short Sleeve Casual Button Down Shirts, Men Casual Shirt",
      price: "24.99",
      quantity: "47",
      category: "men",
      subcategory: "clothes",
      images: [
        "images/products/11_1.jpg",
        "images/products/11_2.jpg",
        "images/products/11_3.jpg",
        "images/products/11_4.jpg"
      ],
      description: "<div><p>The mens casual shirts is suitable for all occasions especially casual outings, beach and vacation activities. Perfect for spring, summer and autumn , fashion street style, dating, hawaiian, everyday casual wear, beach wear and etc.</p> <p><strong>Product Details:</strong></p> <ul> <li>Material Type: 95%Polyester, 5%Spandex</li> <li>Material Care: Machine Wash</li> <li>Color: Multi Color</li> <li>Size: S, M, L, XL, XXL</li></ul></div>",
      rating: "3"
    },
    {
      id: "12",
      name: "Men Coltes- Clique Mens Stretch Formal Shirt",
      price: "17.99",
      quantity: "169",
      category: "men",
      subcategory: "clothes",
      images: [
        "images/products/12_2.jpg",
        "images/products/12_1.jpg",
        "images/products/12_3.jpg",
        "images/products/12_4.jpg"
      ],
      description: "<div><p>The mens casual shirts is suitable for all occasions especially casual outings, beach and vacation activities. Perfect for spring, summer and autumn , fashion street style, dating, hawaiian, everyday casual wear, beach wear and etc.</p> <p><strong>Product Details:</strong></p> <ul> <li>Material Type: 95%Polyester, 5%Spandex</li> <li>Material Care: Machine Wash</li> <li>Color: Multi Color</li> <li>Size: S, M, L, XL, XXL</li></ul></div>",
      rating: "1"
    },
    {
      id: "13",
      name: "men clothes- Rock & Republic Men's Slim Straight Jean ",
      price: "49.99",
      quantity: "89",
      category: "men",
      subcategory: "clothes",
      images: [
        "images/products/13_1.jpg",
        "images/products/13_2.jpg",
        "images/products/13_3.jpg",
        "images/products/13_4.jpg",
        "images/products/13_5.jpg",
    
      ],
      description: "<div><p></p> <p><strong>Product Details:</strong></p> <ul> <li>Material Type: jeans</li> <li>Material Care: Machine Wash</li> <li>Size & Fit: 0, 1, 2, 3, 4, 5</li> <li>Gender: male</li> <li>Pattern: Straight Pant</li> </ul></div>",
      rating: "0"
    },
    {
      id: "14",
      name: "Men Clothes- Men’s Run Division Running T-Shirt",
      price: "34.99",
      quantity: "139",
      category: "men",
      subcategory: "clothes",
      images: [
        "images/products/14_1.jpg",
        "images/products/14_2.jpg",
        "images/products/14_3.jpg",
        "images/products/14_4.jpg",
        "images/products/14_5.jpg"
      ],
      description: "<div><p>Lightweight and sweat-wicking—3 ingredients to a great running tee. Our Run Division T-Shirt brings smooth comfort for each mile, while its classic fit sits slightly off the body to help each stride feel easy and free.</p><p><strong>Product Details:</strong></p><ul><li>Made in Canada</li><li>Material Type: 59% cotton/41% polyester</li><li>Matrial Care: Machine Wash</li><li>Size & Fit: S, M, L, XL, XLL </li><li></li>Pattern: Running T-Shirt</ul></div>",
      rating: "1"
    },
    {
      id: "15",
      name: "formal pant",
      price: "24.99",
      quantity: "198",
      category: "men",
      subcategory: "clothes",
      images: [
        "images/products/15_1.jpg",
        "images/products/15_2.jpg",
        "images/products/15_3.jpg",
        "images/products/15_4.jpg",
        "images/products/15_5.jpg"
      ],
      description: "<div><p></p> <p><strong>Product Details:</strong></p> <ul> <li>Material Type: cotton</li> <li>Material Care: Machine Wash</li> <li>Size & Fit: 0, 1, 2, 3, 4, 5</li> <li>Gender: male</li> <li>Pattern: Straight Pant</li> </ul></div>",
      rating: "4"
    },
    {
      id: "16",
      name: "Men Accessories- Men Genuine Leather Belt With Single Prong Buckle",
      price: "11.99",
      quantity: "78",
      category: "men",
      subcategory: "accessories",
      images: [
        "images/products/16_1.jpg",
        "images/products/16_2.jpg",
        "images/products/16_3.jpg",
        "images/products/16_4.jpg",
      ],
      description: "<div><p></p></div>",
      rating: "3"
    },
    {
      id: "17",
      name: "Men Accessories-  Woven silk tie Honeycomb ",
      price: "24.99",
      quantity: "161",
      category: "men",
      subcategory: "accessories",
      images: [
        "images/products/17_1.jpg"
      ],
      description: "<div><p>Looking for the accessories to complete your wedding suit or outfit? This luxurious tie from Tresanti is made from 100% silk. A matching pocket square and tie are the items that provide the finishing touch on a stylish evening. Combine the tie with one of our pocket squares.</p><p><strong>Product Details: </strong></p><ul><li> Color: 	Lilac, Purple </li><li>Design: Graphic</li><li>Material: Silk </li><li>",
      rating: "1"
    },
    {
      id: "18",
      name: "Men Accessories- ROYALE SUNGLASSES - SILVER/BLUE EDITION",
      price: "24.99",
      quantity: "158",
      category: "men",
      subcategory: "accessories",
      images: [
        "images/products/18_1.jpg",
        "images/products/18_2.jpg"
      ],
      description: "<div><p>Inspired by the style of Casino Royale. The James Bond Royale Sunglasses - Silver/Blue Edition by Barton Perreira is a high-stakes navigator, handmade in titanium.</p><p><strong>Product Details: </strong></p><ul><li>The design is made from thick gauge titanium, bi-color plating with a secret spade motif that is revealed when you breath on the lens</li><li>Presented in a case with a cleaning cloth. </li><li>Durable material for long-lasting</li></ul></div>",
      rating: "0"
    },
    {
      id: "19",
      name: "Men Accessories-Baume & Mercier Classima Automatic, Men's Watch 40mm",
      price: "499.99",
      quantity: "102",
      category: "men",
      subcategory: "accessories",
      images: [
        "images/products/19_1.jpg",
        "images/products/19_2.jpg",
        "images/products/19_3.jpg"
      ],
      description: "<div><p>Inspired by the style of Casino Royale. The James Bond Royale Sunglasses - Silver/Blue Edition by Barton Perreira is a high-stakes navigator, handmade in titanium.</p><p><strong>Product Details: </strong></p><ul><li>The design is made from thick gauge titanium, bi-color plating with a secret spade motif that is revealed when you breath on the lens</li><li>Presented in a case with a cleaning cloth. </li><li>Durable material for long-lasting</li></ul></div>",
      rating: "1"
    },
    {
      id: "20",
      name: "men accessories- Pocket Square",
      price: "54.99",
      quantity: "26",
      category: "men",
      subcategory: "accessories",
      images: [
        "images/products/20_1.jpg",
        "images/products/20_2.jpg"
      ],
      description: "<div><p>Inspired by the style of Casino Royale. The James Bond Royale Sunglasses - Silver/Blue Edition by Barton Perreira is a high-stakes navigator, handmade in titanium.</p><p><strong>Product Details: </strong></p><ul><li>The design is made from thick gauge titanium, bi-color plating with a secret spade motif that is revealed when you breath on the lens</li><li>Presented in a case with a cleaning cloth. </li><li>Durable material for long-lasting</li></ul></div>",
      rating: "2"
    },
    {
      id: "21",
      name: "kids clothes-  regular wear for kid ",
      price: "15.99",
      quantity: "130",
      category: "kid",
      subcategory: "clothes",
      images: [
        "images/products/21_1.jpg",
        "images/products/21_2.jpg",
        "images/products/21_3.jpg"
      ],
      description: "<div>Essentials Betta Pellets are nutrient-rich and packed with colour enhancer for the most vibrant betta fish possible. Designed to resemble small floating insects and formulated for consistent growth and palatability. If used properly, will not cloud water.</div>",
      rating: "4"
    },
    {
      id: "22",
      name: "kid clothes- Child of Mine made by Carter's Infant Boys' Sleep N Play Outfit",
      price: "39.99",
      quantity: "116",
      category: "kid",
      subcategory: "clothes",
      images: [
        "images/products/22_1.jpg",
        "images/products/22_2.jpg",
        "images/products/22_3.jpg"
      ],
      description: "<div>Essentials Betta Pellets are nutrient-rich and packed with colour enhancer for the most vibrant betta fish possible. Designed to resemble small floating insects and formulated for consistent growth and palatability. If used properly, will not cloud water.</div>",
      rating: "2"
    },
    {
      id: "23",
      name: "Casual top wear for kids- kid clothes ",
      price: "13.99",
      quantity: "128",
      category: "kid",
      subcategory: "clothes",
      images: [
        "images/products/23_1.jpg",
        "images/products/23_2.jpg",
        "images/products/23_3.jpg",
      ],
      description: "<div>Essentials Betta Pellets are nutrient-rich and packed with colour enhancer for the most vibrant betta fish possible. Designed to resemble small floating insects and formulated for consistent growth and palatability. If used properly, will not cloud water.</div>",
    rating: "3"
    },
    {
      id: "24",
      name: "ClothesBoys 3 Piece Blazer Set with Tie for Kid",
      price: "24.99",
      quantity: "133",
      category: "kid",
      subcategory: "clothes",
      images: [
        "images/products/24_1.jpg",
        "images/products/24_2.jpg",
        "images/products/24_3.jpg",
        "images/products/24_4.jpg"
      ],
      description: "<div><p>Designed to keep your tank looking beautiful, Tetra Goldfish Vitamin C Enriched Flakes are made with their Clean and Clear Water Formula. The flakes are easy to digest and don't leach colour into the tank water, keeping your tank water crystal clear. Tetra Goldfish Flakes are produced with patented, health-enhancing ProCare. The precise blend of immunostimulants, vitamins, biotin and Omega-3 fatty acids is designed to strengthen fish's resistance to disease and stress while ensuring they get important nutrients at every feed.</p><p><strong>Product Details:</strong></p><ul><li>Complete diet</li><li>Top/mid feeder</li><li>Vitamin C enriched</li></ul></div>",
      rating: "4"
    },
    {
      id: "25",
      name: " Girl Sleeveless Embroidery Princess Pageant Dresses Kid Prom Ball Gown",
      price: "49.99",
      quantity: "83",
      category: "kid",
      subcategory: "clothes",
      images: [
        "images/products/25_1.jpg",
        "images/products/25_2.jpg",
        "images/products/25_3.jpg"
      ],
      description: "<div><p>Marina Betta Buffet Blocks are the ideal vawomenion clothes. No need to worry about your Betta if you go away. The buffet block will slowly release all essential multi-vitamins and nutrients over a period of 7 days, without clouding the water.</p><p><strong>Product Details:</strong></p><ul><li>One buffet block feeds a betta for 7 days</li><li>Contains essential multi-vitamins and nutrients bettas need</li><li>Formula doesn't cloud water</li></ul></div>",
      rating: "2"
    },
    {
      id: "26",
      name: "Kids Dough Kit, Alphabet",
      price: "39.99",
      quantity: "146",
      category: "kid",
      subcategory: "accessories",
      images: [
        "images/products/26_1.jpg",
        "images/products/26_1.jpg",
        "images/products/26_1.jpg"
      ],
      description: "<div><ul><li>Over 1 million happy customers have confirmed that the Standard is truly squirrel proof.</li><li>Patented weight adjustable closing mechanism shuts out squirrels.</li><li>Seed tube ventilation keeps seed fresh.</li><li>Chew proof components stop annoying squirrel damage.</li><li>Easily detaches for easy cleaning, filling and servicing.</li><li>Stainless steel perches and hanger.</li></ul><p>Dimensions: 5 x 5 x 13</p></div>",
      rating: "3"
    },
    {
      id: "27",
      name: "kid accessories- fine cable beanie cap",
      price: "9.99",
      quantity: "100",
      category: "kid",
      subcategory: "accessories",
      images: [
        "images/products/27_1.jpg"
      ],
      description: "<div><ul><li>1 suet cake capacity</li><li>Cage grid designed with clinging kids in mind - feed Woodpeckers, Nuthatches, Chickadees and more</li><li>Easy-open, double-locking closure system secures tightly</li><li>Not just for suet - great for small seed cakes, nesting materials in spring &amp; oranges in summer</li><li>Solid steel construction with durable weather-resistant, powder-coated black finish</li><li>Dimensions: 5.5 L x 5.21 W x 1.6 H</li></ul></div>",
      rating: "3"
    },
    {
      id: "28",
      name: "kid- backpack",
      price: "59.99",
      quantity: "131",
      category: "kid",
      subcategory: "accessories",
      images: [
        "images/products/28_1.jpg",
        "images/products/28_2.jpg",
  
      ],
      description: "<div>Prevue Pet Products Parakeet Manor kid cage features a pull-out tray for easy cleaning and house-style roof line.  These cages include two plastic cups, two plastic perches and are designed for parakeets, canaries and other small kids. Dimensions: 12 L x 9 W x 16H</div>",
      rating: "0"
    },
    {
      id: "29",
      name: "kid accessories-toy",
      price: "18.99",
      quantity: "200",
      category: "kid",
      subcategory: "accessories",
      images: [
        "images/products/29_1.jpg",
        "images/products/29_2.jpg",
        "images/products/29_3.jpg"
      ],
      description: "<div><p>Perky-Pet Holly Berry Gilded Chalet Wild kid Feeder features a circular perch that invites kids to feed from all angles. This attractive plastic feeder has a lid with an embossed holly berry pattern and is footweared with a UV inhibitor to protect it from the sun and prevent fading. This gorgeous feeder can hold up to 2 lb of seed and with its patented Sure-Lock cap system it will reduce your amount of fill times.</p> <p><strong>Product Details: </strong></p> <ul> <li>Made of durable plastic with an elegant antique gold finish</li> <li>Sure-Lock cap locks lid in place to keep squirrels out</li> <li>Circular feeding tray allows multiple kids to feed from all angles</li> <li>Holds up to 2 lb of seed</li> </ul> <p><strong>Cleaning Instructions:</strong> With its unique twist off base it makes cleaning your feeder extremely easy. Remember to clean the feeders every two weeks with a mild soap and water solution.</p></div>",
      rating: "0"
    },
    {
      id: "30",
      name: "kid accessories - toy",
      price: "15.99",
      quantity: "70",
      category: "kid",
      subcategory: "accessories",
      images: [
        "images/products/30_1.jpg"
      ],
      description: "<div>Living World kid Bath for caged kids provides a fast and effective way to kill lice and mites. Safe and easy to use, simply point and spray on your kid.</div>",
      rating: "2"
    },
    {
      id: "31",
      name: "men casual footwear-filp flop",
      price: "14.99",
      quantity: "178",
      category: "men",
      subcategory: "footwear",
      images: [
        "images/products/31_1.jpg"
      ],
      description: "<div><p><strong>Performatrin Ultra</strong> Hide-Free Duck Flavour Stickz are an all-natural, easily digestible alternative to Rawhide. They fulfill your mens natural chewing instincts which supports healthy teeth and gums.</p><p><strong>Product Details:</strong></p><ul><li>Recommended for moderate chewers</li><li>All-natural rawhide alternative</li><li>Easily digestible; made with real duck</li><li>Chewing supports healthy teeth and gums</li><li>Contains no artificial preservatives, colors or flavours</li></ul></div>",
      rating: "2"
    },
    {
      id: "32",
      name: "men formal footwear- formal shoes ",
      price: "10.69",
      quantity: "49",
      category: "men",
      subcategory: "footwear",
      images: [
        "images/products/32_1.jpg",
       
      ],
      description: "<div><p>Breathable and comfortable - The soft cotton lining and the breathable insole ensure that the little feet stay dry and feel good even after a long game day. With these rain boots, your kids will love to splash around in puddles while their feet stay warm and dry. cozy. The rain boots are designed so that your children can enjoy every moment of play!</p><p><strong>Product Details:</strong></p><ul><li>Material Type: PVC</li><li>Size & Fit: 18cm </li><li>Sole: Non-slip and durable </li>", 
      rating: "3"
    },
    {
      id: "33",
      name: "men casual footwear- casual shoes",
      price: "69.99",
      quantity: "88",
      category: "men",
      subcategory: "footwear",
      images: [
        "images/products/33_1.jpg",
        "images/products/33_2.jpg"
      ],
      description: "<div><p>Breathable and comfortable - The soft cotton lining and the breathable insole ensure that the little feet stay dry and feel good even after a long game day. With these rain boots, your kids will love to splash around in puddles while their feet stay warm and dry. cozy. The rain boots are designed so that your children can enjoy every moment of play!</p><p><strong>Product Details:</strong></p><ul><li>Material Type: PVC</li><li>Size & Fit: 18cm </li><li>Sole: Non-slip and durable </li>",
      rating: "0"
    },
    {
      id: "34", 
      name: "women casual footwear- high heels",
      price: "15.99",
      quantity: "100",
      category: "women",
      subcategory: "footwear",
      images: [
        "images/products/34_1.jpeg",
        "images/products/34_2.jpeg",
        "images/products/34_3.jpeg"
      ],
      description: "<div><p>Breathable and comfortable - The soft cotton lining and the breathable insole ensure that the little feet stay dry and feel good even after a long game day. With these rain boots, your kids will love to splash around in puddles while their feet stay warm and dry. cozy. The rain boots are designed so that your children can enjoy every moment of play!</p><p><strong>Product Details:</strong></p><ul><li>Material Type: PVC</li><li>Size & Fit: 18cm </li><li>Sole: Non-slip and durable </li>",
      rating: "3"
    },
    {
      id: "35",
      name: "Earth Spirit Women's Pleated Side Zip Richmond Casual Step-in Heel Black",
      price: "60.49",
      quantity: "30",
      category: "women",
      subcategory: "footwear",
      images: [
        "images/products/35_1.jpg",
        "images/products/35_2.jpg",
        "images/products/35_3.jpg",
        "images/products/35_4.jpg"
      ],
      description: "<div><p>Breathable and comfortable - The soft cotton lining and the breathable insole ensure that the little feet stay dry and feel good even after a long game day. With these rain boots, your kids will love to splash around in puddles while their feet stay warm and dry. cozy. The rain boots are designed so that your children can enjoy every moment of play!</p><p><strong>Product Details:</strong></p><ul><li>Material Type: PVC</li><li>Size & Fit: 18cm </li><li>Sole: Non-slip and durable </li>",
      rating: "5"
    },
    {
      id: "36",
      name: "women casual footwear- sneakers",
      price: "59.99",
      quantity: "187",
      category: "women",
      subcategory: "footwear",
      images: [
        "images/products/36_1.jpg",
        "images/products/36_3.jpg",
       
      ],
      description: "<div><p>Breathable and comfortable - The soft cotton lining and the breathable insole ensure that the little feet stay dry and feel good even after a long game day. With these rain boots, your kids will love to splash around in puddles while their feet stay warm and dry. cozy. The rain boots are designed so that your children can enjoy every moment of play!</p><p><strong>Product Details:</strong></p><ul><li>Material Type: PVC</li><li>Size & Fit: 18cm </li><li>Sole: Non-slip and durable </li>",
      rating: "3"
    },
    {
      id: "37",
      name: "kids footwear- formal shoes ",
      price: "28.99",
      quantity: "87",
      category: "kid",
      subcategory: "footwear",
      images: [
        "images/products/37_1.jpg"
      ],
      description: "<div><p>Breathable and comfortable - The soft cotton lining and the breathable insole ensure that the little feet stay dry and feel good even after a long game day. With these rain boots, your kids will love to splash around in puddles while their feet stay warm and dry. cozy. The rain boots are designed so that your children can enjoy every moment of play!</p><p><strong>Product Details:</strong></p><ul><li>Material Type: PVC</li><li>Size & Fit: 18cm </li><li>Sole: Non-slip and durable </li>",
      rating: "1"
    },
    {
      id: "38",
      name: "kid footwear-shoes ",
      price: "7.99",
      quantity: "101",
      category: "kid",
      subcategory: "footwear",
      images: [
        "images/products/38_3.jpg",
        "images/products/38_2.jpg",
        "images/products/38_1.jpg"
      ],
      description: "<div><p>Breathable and comfortable - The soft cotton lining and the breathable insole ensure that the little feet stay dry and feel good even after a long game day. With these rain boots, your kids will love to splash around in puddles while their feet stay warm and dry. cozy. The rain boots are designed so that your children can enjoy every moment of play!</p><p><strong>Product Details:</strong></p><ul><li>Material Type: PVC</li><li>Size & Fit: 18cm </li><li>Sole: Non-slip and durable </li>",
      
      rating: "2"
    },
    {
      id: "39",
      name: "",
      price: "6.99",
      quantity: "184",
      category: "kid",
      subcategory: "footwear",
      images: [
        "images/products/39_1.jpg"
      ],
      description: "<div><p>Breathable and comfortable - The soft cotton lining and the breathable insole ensure that the little feet stay dry and feel good even after a long game day. With these rain boots, your kids will love to splash around in puddles while their feet stay warm and dry. cozy. The rain boots are designed so that your children can enjoy every moment of play!</p><p><strong>Product Details:</strong></p><ul><li>Material Type: PVC</li><li>Size & Fit: 18cm </li><li>Sole: Non-slip and durable </li>",
      rating: "2"
    }
  ]
  
  async function loadDetail(){
      // return await $.getJSON( "/data/products.json").then(function(data){
      //     return data 
      //   });
      return products;
      
      }
  // Get all products
  async function getAllProducts() {
      return await loadDetail();
  }
  
  // Get product by ID
  async function getProductById(id) {
      var products = await loadDetail();
      return products.find(product => product.id === id);
  }