export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  veg: boolean;
  spicy?: boolean;
  chefSpecial?: boolean;
  tags?: string[];
};

export type Category = {
  id: string;
  name: string;
  tagline: string;
  emoji: string;
};

export const categories: Category[] = [
  { id: "pizza", name: "Pizza", tagline: "Wood-fired & stone-baked", emoji: "🍕" },
  { id: "burgers", name: "Burgers", tagline: "Char-grilled perfection", emoji: "🍔" },
  { id: "sandwiches", name: "Sandwiches", tagline: "Toasted & stacked", emoji: "🥪" },
  { id: "pasta", name: "Pasta", tagline: "Hand-rolled & slow-simmered", emoji: "🍝" },
  { id: "wraps", name: "Wraps", tagline: "Grilled & rolled", emoji: "🌯" },
  { id: "mexican", name: "Mexican", tagline: "Bold & smoky", emoji: "🌮" },
  { id: "indian", name: "Indian Fast Food", tagline: "Street-style classics", emoji: "🍛" },
  { id: "fries", name: "Fries", tagline: "Golden & crispy", emoji: "🍟" },
  { id: "garlic-bread", name: "Garlic Bread", tagline: "Buttery & aromatic", emoji: "🧄" },
  { id: "garlic-cheese-bread", name: "Garlic Cheese Bread", tagline: "Melted & decadent", emoji: "🧀" },
  { id: "salads", name: "Salads", tagline: "Fresh & vibrant", emoji: "🥗" },
  { id: "desserts", name: "Desserts", tagline: "Sweet finales", emoji: "🍰" },
  { id: "milkshakes", name: "Milkshakes", tagline: "Thick & creamy", emoji: "🥤" },
  { id: "coffee", name: "Coffee", tagline: "Roasted & brewed", emoji: "☕" },
  { id: "cold-drinks", name: "Cold Drinks", tagline: "Chilled refreshers", emoji: "🧊" },
  { id: "mocktails", name: "Mocktails", tagline: "Zero-proof craft", emoji: "🍹" },
  { id: "combos", name: "Combo Meals", tagline: "Curated value sets", emoji: "🍱" },
  { id: "seasonal", name: "Seasonal Specials", tagline: "Chef's limited drops", emoji: "✨" },
];

export const menuItems: MenuItem[] = [
  // PIZZA
  { id: "p1", name: "Truffle Margherita", description: "San Marzano, fior di latte, fresh basil, white truffle oil", price: 18.5, category: "pizza", veg: true, chefSpecial: true },
  { id: "p2", name: "Smoked Pepperoni", description: "Wood-fired crust, smoked pepperoni, mozzarella, chili honey", price: 19.0, category: "pizza", veg: false, spicy: true },
  { id: "p3", name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, parmesan, smoked scamorza", price: 20.0, category: "pizza", veg: true },

  // BURGERS
  { id: "b1", name: "Ember Wagyu Burger", description: "Wagyu patty, aged cheddar, smoked aioli, brioche bun", price: 16.0, category: "burgers", veg: false, chefSpecial: true },
  { id: "b2", name: "Crispy Chicken Stack", description: "Buttermilk chicken, slaw, jalapeño mayo, pickles", price: 14.5, category: "burgers", veg: false, spicy: true },
  { id: "b3", name: "Harissa Falafel Burger", description: "House falafel, tahini, roasted peppers, vegan bun", price: 13.5, category: "burgers", veg: true },

  // SANDWICHES
  { id: "s1", name: "Caprese Panini", description: "Tomato, mozzarella, pesto, balsamic glaze", price: 11.0, category: "sandwiches", veg: true },
  { id: "s2", name: "Smoked Brisket Melt", description: "12-hr brisket, gruyère, caramelised onion", price: 14.0, category: "sandwiches", veg: false },

  // PASTA
  { id: "pa1", name: "Truffle Tagliatelle", description: "Hand-cut tagliatelle, truffle cream, parmesan", price: 17.5, category: "pasta", veg: true, chefSpecial: true },
  { id: "pa2", name: "Arrabbiata Penne", description: "Chilli, garlic, tomato, fresh herbs", price: 13.0, category: "pasta", veg: true, spicy: true },
  { id: "pa3", name: "Beef Short Rib Pappardelle", description: "Braised short rib ragu, pappardelle", price: 19.5, category: "pasta", veg: false },

  // WRAPS
  { id: "w1", name: "Peri-Peri Chicken Wrap", description: "Grilled chicken, peri-peri, slaw, garlic dip", price: 12.0, category: "wraps", veg: false, spicy: true },
  { id: "w2", name: "Paneer Tikka Wrap", description: "Charred paneer, mint chutney, onion", price: 11.5, category: "wraps", veg: true, spicy: true },

  // MEXICAN
  { id: "m1", name: "Street Tacos (3)", description: "Soft corn tortillas, chipotle slaw, lime", price: 13.0, category: "mexican", veg: false, spicy: true },
  { id: "m2", name: "Loaded Nachos", description: "Queso, black beans, jalapeño, crema", price: 12.5, category: "mexican", veg: true, spicy: true },
  { id: "m3", name: "Burrito Bowl", description: "Cilantro rice, beans, grilled veg, avocado", price: 13.5, category: "mexican", veg: true },

  // INDIAN
  { id: "i1", name: "Paneer Kathi Roll", description: "Spiced paneer, paratha, pickled onion", price: 10.5, category: "indian", veg: true, spicy: true },
  { id: "i2", name: "Chicken Tikka Burger", description: "Tandoori chicken, mint mayo, masala fries", price: 13.0, category: "indian", veg: false, spicy: true },
  { id: "i3", name: "Masala Pav", description: "Buttered buns, spiced veg mash", price: 8.5, category: "indian", veg: true, spicy: true },

  // FRIES
  { id: "f1", name: "Truffle Parmesan Fries", description: "Hand-cut fries, truffle oil, parmesan", price: 7.5, category: "fries", veg: true },
  { id: "f2", name: "Masala Fries", description: "Curry spice, coriander, mint chutney", price: 7.0, category: "fries", veg: true, spicy: true },

  // GARLIC BREAD
  { id: "g1", name: "Classic Garlic Bread", description: "Sourdough, roasted garlic butter, herbs", price: 6.0, category: "garlic-bread", veg: true },
  { id: "g2", name: "Garlic Breadsticks", description: "Warm sticks, garlic dip", price: 6.5, category: "garlic-bread", veg: true },

  // GARLIC CHEESE BREAD
  { id: "gc1", name: "Cheesy Garlic Pull-Apart", description: "Mozzarella-stuffed, garlic butter, herbs", price: 9.0, category: "garlic-cheese-bread", veg: true, chefSpecial: true },
  { id: "gc2", name: "Three-Cheese Garlic Toast", description: "Mozzarella, cheddar, parmesan", price: 8.5, category: "garlic-cheese-bread", veg: true },

  // SALADS
  { id: "sa1", name: "Asia Sesame Salad", description: "Crisp greens, edamame, sesame dressing", price: 10.0, category: "salads", veg: true },
  { id: "sa2", name: "Grilled Halloumi Salad", description: "Halloumi, rocket, pomegranate, honey", price: 11.5, category: "salads", veg: true },

  // DESSERTS
  { id: "d1", name: "Molten Chocolate Fondant", description: "Dark chocolate, salted caramel core", price: 8.5, category: "desserts", veg: true, chefSpecial: true },
  { id: "d2", name: "Saffron Pistachio Kulfi", description: "Traditional Indian ice, pistachio", price: 7.0, category: "desserts", veg: true },
  { id: "d3", name: "Tiramisu Jar", description: "Mascarpone, espresso, cocoa", price: 7.5, category: "desserts", veg: true },

  // MILKSHAKES
  { id: "ms1", name: "Salted Caramel Shake", description: "Thick shake, caramel swirl, cream", price: 6.5, category: "milkshakes", veg: true },
  { id: "ms2", name: "Belgian Chocolate Shake", description: "Dark chocolate, whipped cream", price: 6.5, category: "milkshakes", veg: true },
  { id: "ms3", name: "Mango Mastani", description: "Alphonso mango, ice cream, nuts", price: 7.0, category: "milkshakes", veg: true },

  // COFFEE
  { id: "c1", name: "Single-Origin Espresso", description: "Roasted in-house, balanced", price: 3.5, category: "coffee", veg: true },
  { id: "c2", name: "Saffron Latte", description: "Espresso, steamed milk, saffron", price: 4.5, category: "coffee", veg: true, chefSpecial: true },

  // COLD DRINKS
  { id: "cd1", name: "Craft Lemonade", description: "Fresh lemon, mint, cane sugar", price: 4.0, category: "cold-drinks", veg: true },
  { id: "cd2", name: "Cola & Sodas", description: "Chilled selection", price: 3.0, category: "cold-drinks", veg: true },

  // MOCKTAILS
  { id: "mk1", name: "Virgin Mojito", description: "Lime, mint, soda", price: 5.0, category: "mocktails", veg: true },
  { id: "mk2", name: "Berry Sparkler", description: "Mixed berries, elderflower, tonic", price: 5.5, category: "mocktails", veg: true, chefSpecial: true },

  // COMBOS
  { id: "co1", name: "Date Night Combo", description: "1 Pizza + 2 Mocktails + Dessert", price: 38.0, category: "combos", veg: true, chefSpecial: true },
  { id: "co2", name: "Fiesta Combo", description: "Tacos + Nachos + Cold Drink", price: 24.0, category: "combos", veg: false, spicy: true },
  { id: "co3", name: "Lunch Box Combo", description: "Wrap + Fries + Cold Drink", price: 16.0, category: "combos", veg: true },

  // SEASONAL
  { id: "se1", name: "Winter Truffle Burger", description: "Limited: truffle mayo, wild mushroom", price: 18.0, category: "seasonal", veg: false, chefSpecial: true },
  { id: "se2", name: "Summer Mango Pizza", description: "Limited: mango, chilli, fresh herbs", price: 19.0, category: "seasonal", veg: true, spicy: true },
];
