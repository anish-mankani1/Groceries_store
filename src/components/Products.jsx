// This is your product database (hardcoded for now)
// Later you can replace this with an API call (fetch/axios)

export const Products = [
  // VEGETABLES
 { 
  id: 1, 
  name: "Tomato", 
  price: 30, 
  category: "Vegetables", 
  unit: "500g",
  image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=200&fit=crop&q=60"
},
  { id: 2,  name: "Onion",         price: 25,  category: "Vegetables", image:"https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D", unit: "500g" },
  { id: 3,  name: "Potato",        price: 20,  category: "Vegetables", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww", unit: "1kg"  },
  { id: 4,  name: "Spinach",       price: 15,  category: "Vegetables", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D", unit: "250g" },

  // FRUITS
  { id: 5,  name: "Banana",        price: 40,  category: "Fruits",     image: "https://plus.unsplash.com/premium_photo-1724250081102-cab0e5cb314c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hfGVufDB8fDB8fHww", unit: "dozen"},
  { id: 6,  name: "Apple",         price: 80,  category: "Fruits",     image: "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D", unit: "500g" },
  { id: 7,  name: "Mango",         price: 60,  category: "Fruits",     image: "https://images.unsplash.com/photo-1732472581875-89ff83f18439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8fDA%3D", unit: "500g" },
  { id: 8,  name: "Watermelon",    price: 50,  category: "Fruits",     image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D", unit: "1 pc" },

  // GROCERIES
  { id: 9,  name: "Rice",          price: 80,  category: "Groceries",  image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZXxlbnwwfHwwfHx8MA%3D%3D", unit: "1kg"  },
  { id: 10, name: "Dal",           price: 90,  category: "Groceries",  image: "https://images.unsplash.com/photo-1702041357314-db5826c96f04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFsfGVufDB8fDB8fHww", unit: "500g" },
  { id: 11, name: "Sunflower Oil", price: 150, category: "Groceries",  image: "https://plus.unsplash.com/premium_photo-1668616815449-b61c3f4d4f44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1bmZsb3dlciUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D", unit: "1L"   },
  { id: 12, name: "Atta",          price: 60,  category: "Groceries",  image: "https://media.istockphoto.com/id/1660906222/photo/silver-tray-with-chapati-dal-and-sabji-puree-free-food-for-pilgrims-in-langar-at-gurudwara.webp?a=1&b=1&s=612x612&w=0&k=20&c=llv6dVlls5ZzHhLEZVuykJsKFB47NhWDxuxV5_iDXWU=", unit: "1kg"  },

  // JUICE
  { id: 13, name: "Orange Juice",  price: 60,  category: "Juice",      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D", unit: "1L"   },
  { id: 14, name: "Mango Juice",   price: 55,  category: "Juice",      image: "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ28lMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D", unit: "1L"   },
  { id: 15, name: "Apple Juice",   price: 70,  category: "Juice",      image: "https://plus.unsplash.com/premium_photo-1675667756988-e73d68e5abf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D", unit: "1L"   },
  { id: 16, name: "Mixed Fruit",   price: 65,  category: "Juice",      image: "https://plus.unsplash.com/premium_photo-1663126827264-409d695e0be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWl4ZWQlMjBmcnVpdCUyMGp1aWNlfGVufDB8fDB8fHww", unit: "1L"   },
];

export const categories = ["All", "Vegetables", "Fruits", "Groceries", "Juice"];