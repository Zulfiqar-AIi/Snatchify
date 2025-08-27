const cat = {
  tvAndAudio: "tvAndAudio",
  tvBox: "tvBox",
  powerTools: "powerTools",
  headphones: "headphones",
  cellPhones: "cellPhones",
  smartWatches: "smartWatches",
  gameAndVideo: "gameAndVideo",
  robotClean: "robotClean",
  sportWatches: "sportWatches",
  tablets: "tablets",
  computersAndLaptop: "computersAndLaptop",
  camerasAndPhotos: "camerasAndPhotos",
};
export const categories = [
  {
    _id: 1001,
    name: "TV & Audio",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvAndAudio",
  },
  {
    _id: 1002,
    name: "TV Box",
    image: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvBox",
  },
  {
    _id: 1003,
    name: "Power Tools",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "powerTools",
  },
  {
    _id: 1004,
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "headphones",
  },
  {
    _id: 1005,
    name: "Cell Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "cellPhones",
  },
  {
    _id: 1006,
    name: "Smart Watches",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "smartWatches",
  },
  {
    _id: 1007,
    name: "Game & Video",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "gameAndVideo",
  },
  {
    _id: 1008,
    name: "Robot Clean",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "robotClean",
  },
  {
    _id: 1009,
    name: "Sport Watches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "sportWatches",
  },
  {
    _id: 1010,
    name: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tablets",
  },
  {
    _id: 1011,
    name: "Computers & Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "computersAndLaptop",
  },
  {
    _id: 1012,
    name: "Cameras & Photos",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&bg=ffffff",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "camerasAndPhotos",
  },
];

export const highlightsProducts = [
  {
    _id: 3001,
    name: "New Deals at Best Prices",
    title: "From $40.00",
    buttonTitle: "Browse Deals",
    image: "https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&blur=70",
    _base: "/product",
    color: "#ffffff",
  },
  {
    _id: 3002,
    name: "Colorful Redmi Note 6 Pro",
    title: "From $40.00",
    buttonTitle: "Shop Cellphone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80&blur=70",
    _base: "/category/cellPhones",
    color: "#ffffff",
  },
  {
    _id: 3003,
    name: "1000 mAh Power Bank",
    title: "From $40.00",
    buttonTitle: "Shop Now",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80&blur=40",
    _base: "/product",
    color: "#ffffff",
  },
];

export const blogsData = [
  {
    _id: 4001,
    image: "https://i.ibb.co/XbQf5HS/blogOne.webp?w=800&h=600",
    title: "iPhone 15 rear camera design will be available",
    _base: "Technology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
  {
    _id: 4002,
    image: "https://i.ibb.co/wzNpcwp/blogTwo.webp?w=800&h=600",
    title: "Setup your surround sound speaker",
    _base: "Samrt thing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
  {
    _id: 4003,
    image: "https://i.ibb.co/prdZ3s8/blog-Three.webp?w=800&h=600",
    title: "Hook up a receiver for your home theater",
    _base: "Life style",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
];

export const products = [
  {
    _id: 2001,
    name: "Divoom Tivoo Portable Bluetooth Speaker Smart Clock Alarm Pixel Art DIY By App LED Light Sign In Decoration Unique Gift",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1563330232-57114bb0823c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 580,
    quantity: 1,
    rating: 4.5,
    reviews: 50,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Samsung",
    isStock: true,
    overView: "Blutooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2002,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?w=800&h=600",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600",
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?w=800&h=600",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=600",
      "https://images.pexels.com/photos/6393315/pexels-photo-6393315.jpeg?w=800&h=600"
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 180,
    quantity: 1,
    rating: 4.8,
    reviews: 80,
    category: "Smart Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Samsung",
    isStock: true,
    overView: "Smart health watch",
    isNew: false,
    _base: cat?.smartWatches,
  },
  {
    _id: 2003,
    name: "Fitness M3 Color Screen Smart Sport Bracelet Activity Running Tracker Heart Rate For Children Men Women Watch For IOS Android",
    images: [
        "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&h=600",
        "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600",
        "https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?w=800&h=600"
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 650,
    discountedPrice: 570,
    quantity: 1,
    rating: 4.2,
    reviews: 30,
    category: "Sport Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "MI Exclusive",
    isStock: true,
    overView: "Smart health watch",
    isNew: true,
    _base: cat?.sportWatches,
},
{
    _id: 2004,
    name: "SJ8 Air 1290P 4K 60fps Action Camera WIFI Remote Control Waterproof Sports DV FPV Camera",
    images: [
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=600",
        "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600",
        "https://images.pexels.com/photos/7974/pexels-photo.jpg?w=800&h=600"
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 400,
    discountedPrice: 350,
    quantity: 1,
    rating: 4.2,
    reviews: 120,
    category: "Camera & Photos",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: false,
    overView: "Cameras & Photos",
    isNew: false,
    _base: cat?.camerasAndPhotos,
},
{
    _id: 2005,
    name: "Redmi Xiaoai Speaker Play 2.4GHz 1.75 Inch Voice Remote Control Music Player Bluetooth 4.2 Mi Speaker For Android Iphone",
    images: [
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=800&h=600",
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=800&h=600",
        "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?w=800&h=600",
        "https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?w=800&h=600"
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 90,
    discountedPrice: 80,
    quantity: 1,
    rating: 4.2,
    reviews: 20,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Blutooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
},
{
    _id: 2006,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600",
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=600",
        "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&h=600"
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 300,
    discountedPrice: 280,
    quantity: 1,
    rating: 4.8,
    reviews: 110,
    category: "Smart Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Smart health watch",
    isNew: false,
    _base: cat.smartWatches,
},
{
    _id: 2007,
    name: "Kinganda BT513 Foldable Bluetooth Headphones With Mic",
    images: [
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600",
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=600",
        "https://images.pexels.com/photos/1706644/pexels-photo-1706644.jpeg?w=800&h=600"
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 550,
    quantity: 1,
    rating: 4,
    reviews: 60,
    category: "Headphones & Speakers",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Microphones",
    isNew: true,
    _base: cat.headphones,
},
{
    _id: 2008,
    name: "New Product Form Lapbook Light Handlift Business Office Game Ben EDP 13.5 In – Black China",
    images: [
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?w=800&h=600",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600",
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600",
        "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?w=800&h=600"
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 1100,
    discountedPrice: 1080,
    quantity: 1,
    rating: 4.7,
    reviews: 190,
    category: "Computers & Laptops",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Computer Components",
    isNew: false,
    _base: cat?.computersAndLaptop,
},
{
    _id: 2009,
    name: "VIOMI V2 Pro LDS Sensor 2 In 1 Sweeping Mopping Robot Wet And Dry Vacuum Cleaner 2100Pa Strong Suction Self-Charging",
    images: [
        "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600",
        "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1586032527413-f4c0b86ae5a7?w=800&h=600",
        "https://images.pexels.com/photos/5824497/pexels-photo-5824497.jpeg?w=800&h=600"
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 450,
    discountedPrice: 380,
    quantity: 1,
    rating: 4.2,
    reviews: 70,
    category: "Robot Clean",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Robot Clean",
    isNew: true,
    _base: cat?.robotClean,
},
{
    _id: 2010,
    name: "Global Version Redmi Note 9 Pro 6GB RAM 64GB ROM Smartphone Mobile Phone",
    images: [
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600",
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600",
        "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?w=800&h=600"
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 305,
    discountedPrice: 285,
    quantity: 1,
    rating: 4.1,
    reviews: 160,
    category: "Cell Phones",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Cual Sim Phones",
    isNew: true,
    _base: cat?.cellPhones,
},
  {
    _id: 2011,
    name: "DIDSeth Pan Tilt Security Light Camera Full HD 1080P Wireless Wi-Fi IP Camera Home Dome Surveillance Cameras",
    images: [
  "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?w=800&h=600", // Security camera main
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600", // Pan tilt camera
  "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?w=800&h=600", // 1080P wireless camera
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600", // WiFi IP camera
  "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=800&h=600" // Dome surveillance camera
],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 280,
    quantity: 1,
    rating: 3.8,
    reviews: 250,
    category: "Cameras & Photos",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Security & Protection",
    isNew: true,
    _base: cat?.camerasAndPhotos,
  },
  {
    _id: 2012,
    name: "Electric Hot Melt Glue Gun Cordless Repair DIY Tool Heating Mini Glue Gun With Glue Sticks",
    images: [
  "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?w=800&h=600", // Glue gun main
  "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600", // DIY tool heating
  "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800&h=600", // Cordless repair tool
  "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&h=600", // Mini glue gun
  "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?w=800&h=600" // Tool with glue sticks
],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 150,
    discountedPrice: 80,
    quantity: 1,
    rating: 4.7,
    reviews: 90,
    category: "Power Tools",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Power Tools",
    isNew: true,
    _base: cat?.powerTools,
  },
  {
    _id: 2013,
    name: "MECOOL KH3 Android 10.0 Smart 4K 60fps TV Box – Black 2GB RAM + 16GB ROM",
    images: [
  "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?w=800&h=600", // Android TV box main
  "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600", // 4K smart TV box
  "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?w=800&h=600", // Streaming device
  "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600", // Media player box
  "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?w=800&h=600" // Set-top box
],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 210,
    discountedPrice: 200,
    quantity: 1,
    rating: 3.9,
    reviews: 100,
    category: "TV Box",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "TV Box",
    isNew: true,
    _base: cat?.tvBox,
  },
  {
    _id: 2014,
    name: "Sony PS4 Controller Bluetooth Vibration Gamepad For Playstation 4 Detroit Wireless Joystick For PS4 Games Consol",
    images: [
  "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600", // PS4 controller main
  "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?w=800&h=600", // Gaming controller
  "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?w=800&h=600", // Bluetooth gamepad
  "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600", // Wireless joystick
  "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?w=800&h=600" // PlayStation controller
],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 80,
    discountedPrice: 75,
    quantity: 1,
    rating: 4.2,
    reviews: 110,
    category: "Game and Video",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Game & Video",
    isNew: true,
    _base: cat?.gameAndVideo,
  },
  {
    _id: 2015,
    name: "GSR 120-Li Hand Drill 12V Lithium Drill Household Power Tool Screwdriver With One Battery – GSR120-LI 1Battery",
    images: [
  "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800&h=600", // Hand drill main
  "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&h=600", // 12V lithium drill
  "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800&h=600", // Power tool screwdriver
  "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600", // Cordless drill
  "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?w=800&h=600" // Drill with battery
],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 560,
    discountedPrice: 400,
    quantity: 1,
    rating: 4,
    reviews: 300,
    category: "Power Tools",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Power Tools",
    isNew: true,
    _base: cat?.powerTools,
  },
  {
    _id: 2016,
    name: "Xiaomi Mi Outdoor Speaker Bluetooth 5.0 IP55 Waterproof Dustproof Portable Wireless Speaker",
    images: [
  "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=800&h=600", // Outdoor speaker main
  "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600", // Bluetooth speaker
  "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800&h=600", // Waterproof speaker
  "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600", // Portable wireless speaker
  "https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?w=800&h=600" // IP55 speaker
],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 240,
    quantity: 1,
    rating: 4.2,
    reviews: 110,
    category: "TV and Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Blutooth Speakers",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2017,
    name: "Global Version Mi TV Stick Android TV 9.0 Smart 2K HDR 1GB RAM 8GB ROM Bluetooth 4.2 Mini TV Dongle",
    images: [
  "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800&h=600", // TV stick main
  "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600", // Android TV dongle
  "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?w=800&h=600", // Smart streaming stick
  "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600", // 2K HDR stick
  "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?w=800&h=600" // Mini TV dongle
],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 60,
    discountedPrice: 55,
    quantity: 1,
    rating: 4,
    reviews: 100,
    category: "TV Box",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "TV Box",
    isNew: true,
    _base: cat?.tvBox,
  },
  {
    _id: 2018,
    name: "Xiaomi Mijia LCD Writing Tablet With Pen 10 13.5inch Digital Drawing Message Graphics Electronic Handwriting Pad With Pen",
    images: [
  "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?w=800&h=600", // LCD writing tablet
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600", // Digital drawing tablet
  "https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?w=800&h=600", // Electronic handwriting pad
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600", // Graphics tablet with pen
  "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?w=800&h=600" // Message tablet
],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 330,
    quantity: 1,
    rating: 4.2,
    reviews: 70,
    category: "Tablets",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Tablets",
    isNew: true,
    _base: cat?.tablets,
  },
  {
    "_id": 2019,
    "name": "New Creative Cloth Art Home Outdoors Bluetooth Sound Box",
    "images": [
        "https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600",
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600",
        "https://images.pexels.com/photos/1706644/pexels-photo-1706644.jpeg?w=800&h=600"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    "regularPrice": 120,
    "discountedPrice": 100,
    "quantity": 1,
    "rating": 4.1,
    "reviews": 20,
    "category": "Bluetooth Speakers",
    "colors": ["red", "blue", "green", "yellow", "black", "white"],
    "brand": "Lorem ipsum dolor sit",
    "isStock": true,
    "overView": "Bluetooth Speakers",
    "isNew": true,
    "_base": "cat?.tvAndAudio"
},
{
    "_id": 2020,
    "name": "Global Version Redmi Note 9 Pro 6GB RAM 64GB ROM Smartphone Mobile Phone",
    "images": [
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600",
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600",
        "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?w=800&h=600"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    "regularPrice": 450,
    "discountedPrice": 410,
    "quantity": 1,
    "rating": 3.7,
    "reviews": 190,
    "category": "Cell Phones",
    "colors": ["red", "blue", "green", "yellow", "black", "white"],
    "brand": "Lorem ipsum dolor sit",
    "isStock": true,
    "overView": "Dual Sim Phones",
    "isNew": true,
    "_base": "cat?.cellPhones"
},
{
    "_id": 2021,
    "name": "L21 Bluetooth Earphone Wireless Earbuds 5.0 TWS Headsets Dual Earbuds Bass Sound For Huawei Xiaomi IPhone Samsung Mobile Phones",
    "images": [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600",
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600",
        "https://images.pexels.com/photos/1706644/pexels-photo-1706644.jpeg?w=800&h=600"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    "regularPrice": 350,
    "discountedPrice": 320,
    "quantity": 1,
    "rating": 3.9,
    "reviews": 10,
    "category": "Headphones",
    "colors": ["red", "blue", "green", "yellow", "black", "white"],
    "brand": "Lorem ipsum dolor sit",
    "isStock": true,
    "overView": "Fitness Headphones",
    "isNew": true,
    "_base": "cat?.headphones"
},
{
    "_id": 2022,
    "name": "Roborock S7 Robot Vacuum Cleaner For Home Sonic Mopping Ultrasonic Carpet Clean Alexa Mop Lifting Upgrade For S5 Max",
    "images": [
        "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600",
        "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1586032527413-f4c0b86ae5a7?w=800&h=600",
        "https://images.pexels.com/photos/5824497/pexels-photo-5824497.jpeg?w=800&h=600"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    "regularPrice": 250,
    "discountedPrice": 240,
    "quantity": 1,
    "rating": 4.2,
    "reviews": 100,
    "category": "Robot Clean",
    "colors": ["red", "blue", "green", "yellow", "black", "white"],
    "brand": "Lorem ipsum dolor sit",
    "isStock": true,
    "overView": "Robot Clean",
    "isNew": true,
    "_base": "cat?.robotClean"
},
{
    "_id": 2023,
    "name": "Klipsch R-120SW Powerful Detailed Home Speaker – Unit",
    "images": [
        "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600",
        "https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600",
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=800&h=600"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    "regularPrice": 600,
    "discountedPrice": 580,
    "quantity": 1,
    "rating": 4.7,
    "reviews": 200,
    "category": "TV & Audio",
    "colors": ["red", "blue", "green", "yellow", "black", "white"],
    "brand": "Lorem ipsum dolor sit",
    "isStock": true,
    "overView": "Bluetooth Speaker",
    "isNew": true,
    "_base": "cat?.tvAndAudio"
},
{
    "_id": 2024,
    "name": "ZY418 Ultra-Thin Sport MP3 MP4 Music Player",
    "images": [
        "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600",
        "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600",
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?w=800&h=600"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    "regularPrice": 80,
    "discountedPrice": 70,
    "quantity": 1,
    "rating": 4.2,
    "reviews": 60,
    "category": "TV & Audio",
    "colors": ["red", "blue", "green", "yellow", "black", "white"],
    "brand": "Lorem ipsum dolor sit",
    "isStock": true,
    "overView": "MP3 Player",
    "isNew": true,
    "_base": "cat?.tvAndAudio"
},
{
    "_id": 2025,
    "name": "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    "images": [
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600",
        "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?w=800&h=600",
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=600",
        "https://images.pexels.com/photos/6393315/pexels-photo-6393315.jpeg?w=800&h=600"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    "regularPrice": 220,
    "discountedPrice": 210,
    "quantity": 1,
    "rating": 4.5,
    "reviews": 90,
    "category": "Smart Watches",
    "colors": ["red", "blue", "green", "yellow", "black", "white"],
    "brand": "Lorem ipsum dolor sit",
    "isStock": true,
    "overView": "Smart Health Watch",
    "isNew": true,
    "_base": "cat?.smartWatches"
}
];