require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

const dns = require("dns");

dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

const mongoose = require("mongoose");
const Product = require("../models/Product");

const products = [

  // ==================== MOBILES ====================

  [
    "Apple iPhone 15",
    "Powerful smartphone with a bright Super Retina display and excellent camera.",
    "Mobiles",
    52999,
    69900,
    "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=700&q=80",
    ["A16 Bionic chip", "48MP camera", "USB-C"]
  ],

  [
    "Samsung Galaxy S24",
    "Premium Android smartphone with a vivid display and versatile camera system.",
    "Mobiles",
    57999,
    74999,
    "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
    ["AMOLED display", "50MP camera", "Fast charging"]
  ],

  [
    "Google Pixel 8",
    "Advanced smartphone with excellent computational photography and clean Android experience.",
    "Mobiles",
    44999,
    69999,
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    ["Google Tensor chip", "50MP camera", "OLED display"]
  ],

  [
    "OnePlus 12",
    "Flagship smartphone with a high refresh rate display and powerful performance.",
    "Mobiles",
    59999,
    69999,
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    ["Snapdragon processor", "120Hz display", "Fast charging"]
  ],

  [
    "Nothing Phone 2",
    "Distinctive smartphone with a clean interface and unique transparent-inspired design.",
    "Mobiles",
    34999,
    44999,
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80",
    ["Glyph interface", "OLED display", "Dual camera"]
  ],

  [
    "Xiaomi 14",
    "Compact flagship smartphone with premium performance and a sharp camera system.",
    "Mobiles",
    49999,
    59999,
    "https://images.unsplash.com/photo-1598327106026-d9521da673d1?auto=format&fit=crop&w=700&q=80",
    ["Leica camera", "120Hz AMOLED", "Fast charging"]
  ],

  [
    "Realme GT 6",
    "Performance-focused smartphone with a smooth display and large battery.",
    "Mobiles",
    32999,
    39999,
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=700&q=80",
    ["Gaming performance", "120Hz display", "5500mAh battery"]
  ],

  [
    "Motorola Edge 50",
    "Stylish smartphone combining a smooth display, capable camera and clean software.",
    "Mobiles",
    27999,
    34999,
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=700&q=80",
    ["Curved display", "50MP camera", "Fast charging"]
  ],

  [
    "Vivo V30",
    "Slim smartphone with an AMOLED display and portrait-focused camera experience.",
    "Mobiles",
    29999,
    36999,
    "https://images.unsplash.com/photo-1533228100845-08145b01de14?auto=format&fit=crop&w=700&q=80",
    ["AMOLED display", "Portrait camera", "Fast charging"]
  ],

  [
    "Oppo Reno 11",
    "Elegant smartphone with a vivid display and versatile portrait camera.",
    "Mobiles",
    29999,
    38999,
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=80",
    ["Portrait camera", "AMOLED display", "67W charging"]
  ],


  // ==================== ELECTRONICS ====================

  [
    "Sony WH-1000XM5",
    "Premium wireless noise-cancelling headphones for music and travel.",
    "Electronics",
    24990,
    34990,
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=80",
    ["Noise cancelling", "30-hour battery", "Multipoint Bluetooth"]
  ],

  [
    "MacBook Air M3",
    "Thin and powerful laptop designed for work, study and creative projects.",
    "Electronics",
    99990,
    114900,
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
    ["Apple M3 chip", "18-hour battery", "Liquid Retina display"]
  ],

  [
    "Dell Inspiron 15",
    "Everyday laptop suitable for work, study, browsing and entertainment.",
    "Electronics",
    54990,
    64990,
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
    ["Full HD display", "16GB RAM", "512GB SSD"]
  ],

  [
    "HP Pavilion Laptop",
    "Reliable everyday laptop with modern performance and a comfortable keyboard.",
    "Electronics",
    62990,
    74990,
    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=700&q=80",
    ["Intel processor", "16GB RAM", "512GB SSD"]
  ],

  [
    "JBL Bluetooth Speaker",
    "Portable wireless speaker with powerful sound for home and outdoor use.",
    "Electronics",
    4999,
    6999,
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    ["Portable", "Deep bass", "12-hour battery"]
  ],

  [
    "Apple AirPods Pro",
    "Premium wireless earbuds with active noise cancellation and immersive audio.",
    "Electronics",
    19999,
    24900,
    "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=700&q=80",
    ["Active noise cancellation", "Spatial audio", "Wireless charging"]
  ],

  [
    "Logitech Wireless Keyboard",
    "Slim wireless keyboard designed for comfortable everyday typing.",
    "Electronics",
    2499,
    3499,
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    ["Wireless", "Slim design", "Long battery life"]
  ],

  [
    "Gaming Mouse RGB",
    "Responsive gaming mouse with customizable lighting and precision tracking.",
    "Electronics",
    1599,
    2499,
    "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=80",
    ["RGB lighting", "High DPI", "Ergonomic design"]
  ],

  [
    "Smartwatch Series X",
    "Modern smartwatch for fitness tracking, notifications and everyday activity.",
    "Electronics",
    3999,
    6999,
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    ["Heart-rate tracking", "Fitness modes", "AMOLED display"]
  ],

  [
    "Portable SSD 1TB",
    "Fast compact external SSD for backups, files and creative workflows.",
    "Electronics",
    7499,
    9999,
    "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=700&q=80",
    ["1TB storage", "USB-C", "High-speed transfer"]
  ],


  // ==================== FASHION ====================

  [
    "Nike Air Max",
    "Comfortable everyday sneakers with modern cushioning and a classic silhouette.",
    "Fashion",
    7995,
    10995,
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    ["Air cushioning", "Lightweight", "Everyday comfort"]
  ],

  [
    "Classic Denim Jacket",
    "Versatile blue denim jacket with a comfortable regular fit.",
    "Fashion",
    1799,
    2999,
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
    ["Cotton denim", "Regular fit", "Machine washable"]
  ],

  [
    "Classic White T-Shirt",
    "Soft cotton everyday t-shirt with a clean minimal design.",
    "Fashion",
    599,
    999,
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    ["100% cotton", "Regular fit", "Machine washable"]
  ],

  [
    "Men's Casual Shirt",
    "Smart casual shirt suitable for everyday wear and weekend outings.",
    "Fashion",
    1199,
    1999,
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    ["Cotton blend", "Regular fit", "Easy care"]
  ],

  [
    "Women's Summer Dress",
    "Lightweight summer dress with a comfortable fit and modern style.",
    "Fashion",
    1499,
    2499,
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80",
    ["Lightweight fabric", "Comfort fit", "Summer style"]
  ],

  [
    "Leather Wallet",
    "Compact everyday wallet with multiple card and cash compartments.",
    "Fashion",
    799,
    1499,
    "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    ["Multiple slots", "Compact", "Premium finish"]
  ],

  [
    "Classic Sunglasses",
    "Stylish sunglasses with a timeless frame for everyday wear.",
    "Fashion",
    999,
    1999,
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    ["UV protection", "Lightweight", "Classic frame"]
  ],

  [
    "Running Shoes",
    "Lightweight running shoes designed for daily walking and workouts.",
    "Fashion",
    2299,
    3999,
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    ["Cushioned sole", "Breathable", "Lightweight"]
  ],

  [
    "Women's Handbag",
    "Elegant everyday handbag with practical storage and a modern silhouette.",
    "Fashion",
    1899,
    2999,
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    ["Spacious interior", "Shoulder strap", "Premium finish"]
  ],

  [
    "Hooded Sweatshirt",
    "Comfortable everyday hoodie for casual outfits and cool weather.",
    "Fashion",
    1299,
    2199,
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    ["Soft fabric", "Kangaroo pocket", "Regular fit"]
  ],


  // ==================== HOME ====================

  [
    "Smart LED TV 55-inch",
    "4K smart television with streaming apps and a cinematic viewing experience.",
    "Home",
    42999,
    59999,
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80",
    ["4K UHD", "Smart apps", "Dolby Audio"]
  ],

  [
    "Coffee Maker",
    "Compact drip coffee maker for fresh coffee at home or the office.",
    "Home",
    2299,
    3499,
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=700&q=80",
    ["Fast brewing", "Reusable filter", "Compact design"]
  ],

  [
    "Modern Table Lamp",
    "Minimal table lamp that adds warm lighting to bedrooms and workspaces.",
    "Home",
    1299,
    1999,
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
    ["Warm light", "Modern design", "Energy efficient"]
  ],

  [
    "Decorative Wall Clock",
    "Modern wall clock designed to complement contemporary interiors.",
    "Home",
    899,
    1499,
    "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    ["Silent movement", "Modern design", "Easy installation"]
  ],

  [
    "Cotton Bedsheet Set",
    "Soft cotton bedsheet set with comfortable fabric for everyday use.",
    "Home",
    999,
    1799,
    "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    ["Cotton fabric", "Double bed", "Machine washable"]
  ],

  [
    "Memory Foam Pillow",
    "Supportive memory foam pillow designed for comfortable sleep.",
    "Home",
    699,
    1299,
    "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    ["Memory foam", "Neck support", "Washable cover"]
  ],

  [
    "Indoor Plant Pot",
    "Decorative planter for adding a natural touch to your living space.",
    "Home",
    499,
    899,
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    ["Ceramic finish", "Drainage hole", "Indoor decor"]
  ],

  [
    "Storage Organizer",
    "Multipurpose storage organizer for keeping household items neat.",
    "Home",
    599,
    999,
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=700&q=80",
    ["Foldable", "Lightweight", "Space saving"]
  ],

  [
    "Premium Cushion Set",
    "Decorative cushion covers and inserts for a comfortable living room.",
    "Home",
    799,
    1299,
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80",
    ["Soft fabric", "Set of 2", "Decorative"]
  ],

  [
    "Kitchen Storage Jars",
    "Reusable storage jars for organizing spices, grains and pantry essentials.",
    "Home",
    899,
    1499,
    "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=80",
    ["Airtight", "Reusable", "Transparent design"]
  ],


  // ==================== APPLIANCES ====================

  [
    "Air Fryer 5L",
    "Make crispy meals with less oil using this easy-to-use digital air fryer.",
    "Appliances",
    3999,
    6999,
    "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=700&q=80",
    ["5L capacity", "Digital controls", "Easy clean"]
  ],

  [
    "Mixer Grinder",
    "Powerful kitchen mixer grinder for everyday cooking preparation.",
    "Appliances",
    2499,
    3999,
    "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=700&q=80",
    ["750W motor", "Multiple jars", "Overload protection"]
  ],

  [
    "Electric Kettle",
    "Fast-boiling electric kettle for tea, coffee and hot water.",
    "Appliances",
    899,
    1499,
    "https://images.unsplash.com/photo-1594213114663-d94db9b171e2?auto=format&fit=crop&w=700&q=80",
    ["1.5L capacity", "Auto shut-off", "Fast boiling"]
  ],

  [
    "Robot Vacuum Cleaner",
    "Smart robotic vacuum cleaner for convenient everyday floor cleaning.",
    "Appliances",
    14999,
    21999,
    "https://images.unsplash.com/photo-1581579185169-7e8c4c6a3f2b?auto=format&fit=crop&w=700&q=80",
    ["Smart navigation", "App control", "Auto charging"]
  ],

  [
    "Front Load Washing Machine",
    "Efficient washing machine with multiple wash programs and modern controls.",
    "Appliances",
    29999,
    39999,
    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=700&q=80",
    ["7kg capacity", "Multiple programs", "Energy efficient"]
  ],

  [
    "Microwave Oven",
    "Compact microwave oven for quick cooking and reheating.",
    "Appliances",
    6999,
    9999,
    "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=700&q=80",
    ["20L capacity", "Multiple modes", "Easy controls"]
  ],

  [
    "Electric Rice Cooker",
    "Convenient rice cooker for perfectly cooked rice with minimal effort.",
    "Appliances",
    1599,
    2499,
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80",
    ["1.8L capacity", "Keep warm", "Non-stick pot"]
  ],

  [
    "Water Purifier",
    "Multi-stage water purifier designed for clean and fresh drinking water.",
    "Appliances",
    8999,
    12999,
    "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=80",
    ["Multi-stage filtration", "Large capacity", "Easy maintenance"]
  ],

  [
    "Tower Fan",
    "Space-saving tower fan with multiple speed settings for comfortable airflow.",
    "Appliances",
    2499,
    3999,
    "https://images.unsplash.com/photo-1522489040701-3c3c5f5a8f6e?auto=format&fit=crop&w=700&q=80",
    ["Multiple speeds", "Oscillation", "Remote control"]
  ],

  [
    "Induction Cooktop",
    "Fast and efficient induction cooktop with convenient digital controls.",
    "Appliances",
    1899,
    2999,
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80",
    ["Multiple power levels", "Timer", "Easy cleaning"]
  ],


  // ==================== BEAUTY ====================

  [
    "Skincare Essentials Kit",
    "Everyday skincare set with cleanser, moisturizer and serum.",
    "Beauty",
    1299,
    1999,
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&q=80",
    ["Daily routine", "Gentle formula", "Travel friendly"]
  ],

  [
    "Vitamin C Face Serum",
    "Lightweight facial serum designed for a fresh and radiant-looking complexion.",
    "Beauty",
    699,
    999,
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
    ["Vitamin C", "Lightweight", "Daily use"]
  ],

  [
    "Moisturizing Face Cream",
    "Daily moisturizer for soft and hydrated-looking skin.",
    "Beauty",
    499,
    799,
    "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=80",
    ["Hydrating", "Light texture", "Daily use"]
  ],

  [
    "Hair Care Shampoo",
    "Gentle everyday shampoo designed to leave hair feeling clean and fresh.",
    "Beauty",
    399,
    599,
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
    ["Gentle formula", "Everyday use", "Fresh fragrance"]
  ],

  [
    "Hair Conditioner",
    "Moisturizing conditioner for smooth and manageable hair.",
    "Beauty",
    449,
    699,
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=700&q=80",
    ["Moisturizing", "Smooth finish", "Everyday use"]
  ],

  [
    "Lip Care Set",
    "Simple lip care set for everyday hydration and comfort.",
    "Beauty",
    299,
    499,
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
    ["Hydrating", "Compact", "Everyday care"]
  ],

  [
    "Perfume Gift Set",
    "Elegant fragrance collection suitable for gifting and everyday wear.",
    "Beauty",
    1599,
    2499,
    "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
    ["Multiple fragrances", "Gift-ready", "Long-lasting"]
  ],

  [
    "Makeup Brush Set",
    "Complete set of soft makeup brushes for everyday beauty routines.",
    "Beauty",
    599,
    999,
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
    ["Soft bristles", "Multiple brushes", "Travel pouch"]
  ],

  [
    "Body Lotion",
    "Daily body lotion designed to keep skin feeling soft and moisturized.",
    "Beauty",
    349,
    499,
    "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=700&q=80",
    ["Hydrating", "Lightweight", "Fast absorbing"]
  ],

  [
    "Face Wash",
    "Gentle daily cleanser for a clean and refreshed skin feel.",
    "Beauty",
    299,
    449,
    "https://images.unsplash.com/photo-1556228852-80a7c1b7b5e0?auto=format&fit=crop&w=700&q=80",
    ["Gentle cleanser", "Daily use", "Fresh finish"]
  ],


  // ==================== TOYS ====================

  [
    "Wireless Game Controller",
    "Comfortable wireless controller for casual and competitive gaming.",
    "Toys",
    1899,
    2999,
    "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=700&q=80",
    ["Wireless", "Dual vibration", "Ergonomic grip"]
  ],

  [
    "Building Blocks Set",
    "Creative building blocks for imaginative play and hands-on learning.",
    "Toys",
    799,
    1299,
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    ["Creative play", "Colorful blocks", "Reusable"]
  ],

  [
    "Remote Control Car",
    "Fast and fun remote control car designed for indoor and outdoor play.",
    "Toys",
    1299,
    1999,
    "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    ["Remote controlled", "Rechargeable", "Durable design"]
  ],

  [
    "Puzzle Game",
    "Fun puzzle game that encourages logical thinking and problem solving.",
    "Toys",
    499,
    799,
    "https://images.unsplash.com/photo-1606503153255-59d8b8b231b1?auto=format&fit=crop&w=700&q=80",
    ["Brain game", "Reusable", "Family fun"]
  ],

  [
    "Kids Art Set",
    "Creative art kit with colors and drawing supplies for young artists.",
    "Toys",
    699,
    999,
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
    ["Drawing tools", "Creative play", "Gift-ready"]
  ],

  [
    "Stuffed Teddy Bear",
    "Soft and cuddly teddy bear that makes a lovely gift for children.",
    "Toys",
    599,
    999,
    "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    ["Soft plush", "Cuddly", "Gift idea"]
  ],

  [
    "Wooden Train Set",
    "Classic wooden train toy encouraging imaginative and creative play.",
    "Toys",
    1199,
    1799,
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    ["Wooden build", "Creative play", "Durable"]
  ],

  [
    "Kids Football",
    "Lightweight football suitable for casual games and outdoor activities.",
    "Toys",
    449,
    699,
    "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=700&q=80",
    ["Lightweight", "Outdoor play", "Durable"]
  ],

  [
    "Board Game Classic",
    "Family-friendly board game for fun evenings and group play.",
    "Toys",
    799,
    1199,
    "https://images.unsplash.com/photo-1606503153255-59d8b8b231b1?auto=format&fit=crop&w=700&q=80",
    ["Family game", "Strategy", "Group play"]
  ],

  [
    "Kids Learning Tablet",
    "Interactive learning tablet designed for educational games and activities.",
    "Toys",
    2999,
    4999,
    "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=700&q=80",
    ["Learning apps", "Touch display", "Kid-friendly"]
  ],


  // ==================== GROCERY ====================

  [
    "Organic Grocery Box",
    "Curated everyday grocery essentials for a convenient weekly shop.",
    "Grocery",
    899,
    1199,
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80",
    ["Fresh selection", "Weekly essentials", "Value pack"]
  ],

  [
    "Premium Basmati Rice",
    "Long-grain basmati rice suitable for everyday meals and special occasions.",
    "Grocery",
    699,
    899,
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
    ["Long grain", "Premium quality", "5kg pack"]
  ],

  [
    "Whole Wheat Flour",
    "Everyday whole wheat flour for soft rotis and homemade breads.",
    "Grocery",
    399,
    499,
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
    ["Whole wheat", "Fresh pack", "Everyday staple"]
  ],

  [
    "Organic Honey",
    "Naturally sweet honey suitable for breakfast, beverages and cooking.",
    "Grocery",
    499,
    699,
    "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=80",
    ["Natural honey", "Rich taste", "Premium jar"]
  ],

  [
    "Green Tea Pack",
    "Refreshing green tea leaves for a light and aromatic daily beverage.",
    "Grocery",
    249,
    399,
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
    ["Refreshing", "Aromatic", "Daily beverage"]
  ],

  [
    "Mixed Nuts",
    "Crunchy mixed nuts packed for convenient snacking throughout the day.",
    "Grocery",
    599,
    799,
    "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=700&q=80",
    ["Mixed nuts", "Protein-rich snack", "Resealable pack"]
  ],

  [
    "Breakfast Cereal",
    "Crunchy breakfast cereal for a quick and convenient morning meal.",
    "Grocery",
    299,
    399,
    "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?auto=format&fit=crop&w=700&q=80",
    ["Crunchy", "Quick breakfast", "Family pack"]
  ],

  [
    "Instant Coffee",
    "Rich instant coffee for quick and convenient cups at home or work.",
    "Grocery",
    349,
    499,
    "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=700&q=80",
    ["Rich aroma", "Instant", "Easy preparation"]
  ],

  [
    "Dark Chocolate",
    "Smooth dark chocolate bar with a rich cocoa flavour.",
    "Grocery",
    199,
    299,
    "https://images.unsplash.com/photo-1548907040-4d42d1f1d7c1?auto=format&fit=crop&w=700&q=80",
    ["Rich cocoa", "Smooth texture", "Snack"]
  ],

  [
    "Cooking Oil",
    "Everyday cooking oil suitable for a wide variety of home-cooked meals.",
    "Grocery",
    699,
    799,
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80",
    ["Everyday cooking", "Value pack", "Kitchen essential"]
  ]

];

async function seedProducts() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is undefined. Check backend/.env");
    }

    console.log("Connecting to MongoDB Atlas...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
    console.log("Database:", mongoose.connection.name);

    await Product.deleteMany({});

    const formattedProducts = products.map(
      (
        [title, description, category, price, mrp, image, features],
        i
      ) => ({
        title,
        description,
        category,
        price,
        mrp,
        image,
        features,
        rating: [4.4, 4.5, 4.2, 4.7, 4.3][i % 5],
        reviewsCount: 80 + i * 37
      })
    );

    await Product.insertMany(formattedProducts);

    console.log("Seeded products successfully");
  } catch (error) {
    console.error("Seed error:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seedProducts();