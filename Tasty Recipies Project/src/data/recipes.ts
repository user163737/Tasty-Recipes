import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Butter Chicken',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'Indian',
    category: 'Main Course',
    description: 'Tender chicken simmered in a rich, creamy tomato sauce with aromatic Indian spices. A classic dish featuring marinated chicken in a luxurious butter sauce.',
    tags: ['Chicken', 'Creamy', 'Spicy'],
    rating: 4.8,
    ingredients: [
      '800g boneless chicken, cut into pieces',
      '2 cups tomato puree',
      '1 cup heavy cream',
      '2 tbsp butter',
      '2 tbsp garam masala',
      '1 tbsp ginger paste',
      '1 tbsp garlic paste',
      '1 tsp red chili powder',
      'Salt to taste',
      'Fresh coriander for garnish'
    ],
    instructions: [
      'Marinate chicken with yogurt, ginger-garlic paste, and spices for 2 hours.',
      'In a large pan, heat butter and sauté ginger-garlic paste until fragrant.',
      'Add tomato puree and cook until oil separates.',
      'Add marinated chicken and cook until tender.',
      'Pour in cream and simmer until sauce thickens.',
      'Garnish with fresh coriander and serve hot with naan bread.'
    ],
    reviews: [
      {
        id: '101',
        userName: 'Sarah K.',
        rating: 5,
        comment: 'Perfect balance of spices! My family loved it.',
        date: 'March 15, 2025'
      },
      {
        id: '102',
        userName: 'Mike R.',
        rating: 4.5,
        comment: 'Great recipe, though I added a bit more cream for extra richness.',
        date: 'March 10, 2025'
      }
    ]
  },
  {
    id: '2',
    title: 'Margherita Pizza',
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'Italian',
    category: 'Main Course',
    description: 'Classic Neapolitan pizza with tomato sauce, fresh mozzarella, basil, and olive oil. This simple yet elegant pizza showcases the perfect balance of flavors that made Italian cuisine famous worldwide.',
    tags: ['Vegetarian', 'Cheese', 'Quick'],
    rating: 4.7,
    ingredients: [
      '1 pizza dough ball',
      '4 oz fresh mozzarella',
      '1/2 cup tomato sauce',
      'Fresh basil leaves',
      'Extra virgin olive oil',
      'Salt to taste'
    ],
    instructions: [
      'Preheat oven to 450°F (230°C) with a pizza stone if available.',
      'Roll out the pizza dough into a 12-inch circle.',
      'Spread tomato sauce evenly over the dough.',
      'Tear mozzarella into pieces and distribute over the sauce.',
      'Bake for 12-15 minutes until crust is golden.',
      'Top with fresh basil leaves and a drizzle of olive oil.'
    ],
    reviews: [
      {
        id: '201',
        userName: 'Lisa M.',
        rating: 5,
        comment: 'Simple and delicious! Just like in Italy.',
        date: 'March 18, 2025'
      }
    ]
  },
  {
    id: '3',
    title: 'Beef Tacos',
    image: 'https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'Mexican',
    category: 'Main Course',
    description: 'Authentic Mexican tacos with seasoned ground beef, fresh toppings, and warm corn tortillas. These street-style tacos are packed with flavor and can be customized with your favorite toppings.',
    tags: ['Beef', 'Spicy', 'Quick'],
    rating: 4.6,
    ingredients: [
      '1 lb ground beef',
      '12 corn tortillas',
      '1 onion, diced',
      'Fresh cilantro',
      'Lime wedges',
      'Taco seasoning',
      'Salt to taste'
    ],
    instructions: [
      'Brown ground beef in a large skillet over medium heat.',
      'Add taco seasoning and cook until well combined.',
      'Warm tortillas in a separate pan.',
      'Assemble tacos with meat, onions, and cilantro.',
      'Serve with lime wedges on the side.'
    ],
    reviews: [
      {
        id: '301',
        userName: 'John D.',
        rating: 4.5,
        comment: 'Great weeknight dinner! Kids loved it.',
        date: 'March 12, 2025'
      }
    ]
  },
  {
    id: '4',
    title: 'Chocolate Brownies',
    image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'American',
    category: 'Dessert',
    description: 'Rich, fudgy chocolate brownies with a crackly top and gooey center. These decadent brownies are made with premium dark chocolate and have the perfect balance of sweetness.',
    tags: ['Dessert', 'Chocolate', 'Baking'],
    rating: 4.9,
    ingredients: [
      '200g dark chocolate',
      '175g butter',
      '3 eggs',
      '200g sugar',
      '100g flour',
      '30g cocoa powder',
      '1 tsp vanilla extract'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C) and line a baking pan.',
      'Melt chocolate and butter together.',
      'Whisk eggs and sugar until light and fluffy.',
      'Fold in chocolate mixture and dry ingredients.',
      'Bake for 25-30 minutes until set but still fudgy.',
      'Cool completely before cutting into squares.'
    ],
    reviews: [
      {
        id: '401',
        userName: 'Emma S.',
        rating: 5,
        comment: 'Best brownie recipe ever! So fudgy and rich.',
        date: 'March 20, 2025'
      }
    ]
  },
  {
    id: '5',
    title: 'Vegetable Stir Fry',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'Asian',
    category: 'Main Course',
    description: 'A colorful and healthy stir-fry loaded with fresh vegetables in a savory sauce. This versatile dish can be customized with your favorite vegetables and protein options.',
    tags: ['Vegetarian', 'Healthy', 'Quick'],
    rating: 4.5,
    ingredients: [
      'Mixed vegetables (broccoli, carrots, snap peas)',
      '2 tbsp vegetable oil',
      '2 cloves garlic, minced',
      '1 tbsp ginger, minced',
      'Stir-fry sauce',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Prepare all vegetables by cutting into similar sizes.',
      'Heat oil in a wok over high heat.',
      'Add garlic and ginger, stir-fry until fragrant.',
      'Add vegetables in order of cooking time.',
      'Pour in sauce and toss until vegetables are coated.',
      'Serve hot over rice or noodles.'
    ],
    reviews: [
      {
        id: '501',
        userName: 'Tom H.',
        rating: 4.5,
        comment: 'Quick, healthy, and delicious!',
        date: 'March 16, 2025'
      }
    ]
  },
  {
    id: '6',
    title: 'Greek Salad',
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'Greek',
    category: 'Salad',
    description: 'A refreshing combination of crisp cucumbers, juicy tomatoes, olives, and feta cheese with a simple olive oil dressing. This classic Mediterranean salad is perfect for hot summer days.',
    tags: ['Vegetarian', 'Healthy', 'No-Cook'],
    rating: 4.7,
    ingredients: [
      'Cucumber, chopped',
      'Tomatoes, wedged',
      'Red onion, sliced',
      'Kalamata olives',
      'Feta cheese',
      'Extra virgin olive oil',
      'Dried oregano'
    ],
    instructions: [
      'Chop all vegetables into bite-sized pieces.',
      'Combine vegetables in a large bowl.',
      'Add olives and crumbled feta cheese.',
      'Drizzle with olive oil and sprinkle oregano.',
      'Toss gently and serve immediately.'
    ],
    reviews: [
      {
        id: '601',
        userName: 'Anna P.',
        rating: 5,
        comment: 'So fresh and authentic!',
        date: 'March 19, 2025'
      }
    ]
  },
  {
    id: '7',
    title: 'Sushi Rolls',
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'Japanese',
    category: 'Appetizer',
    description: 'Fresh and elegant sushi rolls filled with premium seafood and crisp vegetables. These California-style rolls are perfect for sushi beginners and experienced enthusiasts alike.',
    tags: ['Seafood', 'Raw', 'Gourmet'],
    rating: 4.8,
    ingredients: [
      'Sushi rice',
      'Nori sheets',
      'Cucumber',
      'Avocado',
      'Crab meat or imitation crab',
      'Wasabi',
      'Soy sauce'
    ],
    instructions: [
      'Cook and season sushi rice according to package.',
      'Place nori sheet on bamboo mat.',
      'Spread rice evenly over nori.',
      'Add fillings in a line across the center.',
      'Roll tightly using the bamboo mat.',
      'Cut into 6-8 pieces with a sharp knife.'
    ],
    reviews: [
      {
        id: '701',
        userName: 'David L.',
        rating: 5,
        comment: 'Restaurant quality sushi at home!',
        date: 'March 17, 2025'
      }
    ]
  },
  {
    id: '8',
    title: 'Chicken Alfredo',
    image: 'https://images.pexels.com/photos/5949900/pexels-photo-5949900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'Italian',
    category: 'Main Course',
    description: 'Creamy fettuccine pasta with tender chicken and a rich parmesan sauce. This classic Italian-American dish is the ultimate comfort food.',
    tags: ['Chicken', 'Pasta', 'Creamy'],
    rating: 4.6,
    ingredients: [
      'Fettuccine pasta',
      'Chicken breast',
      'Heavy cream',
      'Parmesan cheese',
      'Garlic',
      'Butter',
      'Salt and pepper'
    ],
    instructions: [
      'Cook pasta according to package directions.',
      'Season and cook chicken until golden.',
      'Make sauce with butter, garlic, and cream.',
      'Add parmesan and stir until melted.',
      'Combine pasta, chicken, and sauce.',
      'Garnish with extra parmesan and parsley.'
    ],
    reviews: [
      {
        id: '801',
        userName: 'Rachel W.',
        rating: 4.5,
        comment: 'Creamy and delicious! Better than restaurant version.',
        date: 'March 14, 2025'
      }
    ]
  },
  {
    id: '9',
    title: 'Apple Pie',
    image: 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'American',
    category: 'Dessert',
    description: 'Classic American apple pie with a flaky, buttery crust and spiced apple filling. The perfect dessert for any occasion, especially during fall.',
    tags: ['Dessert', 'Baking', 'Fruit'],
    rating: 4.7,
    ingredients: [
      'Pie crust dough',
      'Apples, sliced',
      'Sugar',
      'Cinnamon',
      'Nutmeg',
      'Butter',
      'Lemon juice'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Roll out pie crust and line pie dish.',
      'Mix sliced apples with sugar and spices.',
      'Fill pie crust with apple mixture.',
      'Add top crust and crimp edges.',
      'Bake for 45-50 minutes until golden brown.'
    ],
    reviews: [
      {
        id: '901',
        userName: 'Peter M.',
        rating: 5,
        comment: 'Just like grandma used to make!',
        date: 'March 13, 2025'
      }
    ]
  },
  {
    id: '10',
    title: 'Beef Burger',
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'American',
    category: 'Main Course',
    description: 'Juicy beef patty topped with melted cheese, fresh vegetables, and special sauce on a toasted bun. A classic American favorite that never disappoints.',
    tags: ['Beef', 'Sandwich', 'Comfort Food'],
    rating: 4.8,
    ingredients: [
      'Ground beef',
      'Burger buns',
      'Cheese slices',
      'Lettuce',
      'Tomato',
      'Onion',
      'Special sauce'
    ],
    instructions: [
      'Form beef into patties and season well.',
      'Grill or pan-fry until desired doneness.',
      'Add cheese and let melt.',
      'Toast the buns until golden.',
      'Assemble burger with toppings and sauce.',
      'Serve immediately while hot.'
    ],
    reviews: [
      {
        id: '1001',
        userName: 'Chris B.',
        rating: 5,
        comment: 'Perfect burger! The sauce makes it special.',
        date: 'March 11, 2025'
      }
    ]
  },
  {
    id: '11',
    title: 'Pad Thai',
    image: 'https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'Thai',
    category: 'Main Course',
    description: 'Classic Thai stir-fried rice noodles with eggs, tofu, bean sprouts, and peanuts. This popular street food dish offers the perfect balance of sweet, sour, and savory flavors.',
    tags: ['Noodles', 'Spicy', 'Street Food'],
    rating: 4.6,
    ingredients: [
      'Rice noodles',
      'Tofu',
      'Eggs',
      'Bean sprouts',
      'Peanuts',
      'Lime',
      'Pad Thai sauce'
    ],
    instructions: [
      'Soak rice noodles in warm water.',
      'Stir-fry tofu until golden.',
      'Add eggs and scramble.',
      'Add noodles and Pad Thai sauce.',
      'Toss with bean sprouts and peanuts.',
      'Serve with lime wedges.'
    ],
    reviews: [
      {
        id: '1101',
        userName: 'Sophie L.',
        rating: 4.5,
        comment: 'Authentic taste! Love the sauce recipe.',
        date: 'March 9, 2025'
      }
    ]
  },
  {
    id: '12',
    title: 'Tiramisu',
    image: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cuisine: 'Italian',
    category: 'Dessert',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone filling. This elegant no-bake dessert is perfect for special occasions.',
    tags: ['Dessert', 'Coffee', 'No-Bake'],
    rating: 4.9,
    ingredients: [
      'Ladyfinger cookies',
      'Mascarpone cheese',
      'Strong coffee',
      'Eggs',
      'Sugar',
      'Cocoa powder',
      'Marsala wine (optional)'
    ],
    instructions: [
      'Prepare strong coffee and let cool.',
      'Beat egg yolks and sugar until pale.',
      'Fold in mascarpone cheese.',
      'Dip ladyfingers in coffee briefly.',
      'Layer cookies and mascarpone mixture.',
      'Dust with cocoa powder and chill.'
    ],
    reviews: [
      {
        id: '1201',
        userName: 'Maria C.',
        rating: 5,
        comment: 'Absolutely perfect! Just like in Italy.',
        date: 'March 8, 2025'
      }
    ]
  }
];