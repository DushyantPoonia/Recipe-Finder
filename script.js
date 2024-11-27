const recipes = [
    {
        title: "Butter Chicken",
        image: "https://th.bing.com/th/id/OIP.tzG0D-E7C0rdoaIXJPdA2QHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
        description: "A rich and creamy chicken dish with Indian spices.",
        link: "recipe_butter_chicken.html",
        category: "Indian"
    },
    {
        title: "Paneer Tikka",
        image: "https://th.bing.com/th/id/OIP.L16gKeFwWD9hszNsLnH5qQHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7",
        description: "Grilled paneer marinated in spices, served with chutney.",
        link: "recipe_paneer_tikka.html",
        category: "Indian"
    },
    {
        title: "Biryani",
        image: "https://th.bing.com/th/id/OIP.wBu0Xsb774mtzvjhq1C3DgHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7",
        description: "A fragrant rice dish cooked with spices and meat/vegetables.",
        link: "recipe_biryani.html",
        category: "Indian"
    },
    {
        title: "Pasta",
        image: "https://th.bing.com/th/id/OIP.J4NWDAC0uaDdAgZyCXh8FwHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "A classic Italian dish made with pasta and sauce.",
        link: "recipe_pasta.html",
        category: "Italian"
    },
    {
        title: "Sushi",
        image: "https://th.bing.com/th/id/OIP.tchCXzylcozn0fws4IIRAwHaE8?w=284&h=189&c=7&r=0&o=5&pid=1.7",
        description: "Japanese dish of vinegared rice accompanied by various ingredients.",
        link: "recipe_sushi.html",
        category: "Japanese"
    },
    {
        title: "Tacos",
        image: "https://th.bing.com/th/id/OIP.yo6BiiKWugVdATEU4Lb2uwHaEt?w=274&h=180&c=7&r=0&o=5&pid=1.7",
        description: "Mexican dish consisting of a folded tortilla filled with various ingredients.",
        link: "recipe_tacos.html",
        category: "Mexican"
    },
    {
        title: "Chocolate Cake",
        image: "https://th.bing.com/th/id/OIP.RF-npsXIp5x4jIvpPilMsgHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "A rich and moist chocolate cake, perfect for celebrations.",
        link: "recipe_chocolate_cake.html",
        category: "Dessert"
    },
    {
        title: "Caesar Salad",
        image: "https://th.bing.com/th/id/OIP.NCuPWmNFY_pTSkNR5I_OHwAAAA?w=184&h=230&c=7&r=0&o=5&pid=1.7",
        description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
        link: "recipe_caesar_salad.html",
        category: "Salad"
    },
    {
        title: "Beef Stroganoff",
        image: "https://th.bing.com/th/id/OIP.fkzfMR_CmeuY-VI9_WHh9QHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "Tender beef cooked in a creamy mushroom sauce, served over noodles.",
        link: "recipe_beef_stroganoff.html",
        category: "Beef"
    },
    {
        title: "Greek Salad",
        image: "https://th.bing.com/th/id/OIP.nsY9UwUUiw2orgwkurEGogHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "A refreshing salad with tomatoes, cucumber, olives, and feta cheese.",
        link: "recipe_greek_salad.html",
        category: "Salad"
    },
    {
        title: "Chili Con Carne",
        image: "https://th.bing.com/th/id/OIP.OiudIg8HedUqIGDCc-IE0AHaE8?w=198&h=180&c=7&r=0&o=5&pid=1.7",
        description: "A spicy stew with beef, beans, and chili peppers.",
        link: "recipe_chili_con_carne.html",
        category: "Beef"
    },
    {
        title: "Apple Pie",
        image: "https://th.bing.com/th/id/OIP.xXtGJh85hhLVjc7xTQ4RnQAAAA?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "A classic dessert made with spiced apples and a flaky crust.",
        link: "recipe_apple_pie.html",
        category: "Dessert"
    },
    {
        title: "Tom Yum Soup",
        image: "https://th.bing.com/th/id/OIP.lBP-vRylTe_fHnYM_nWvdgHaE8?w=237&h=180&c=7&r=0&o=5&pid=1.7",
        description: "A spicy and sour Thai soup made with shrimp and mushrooms.",
        link: "recipe_tom_yum_soup.html",
        category: "Thai"
    },
    {
        title: "Lasagna",
        image: "https://th.bing.com/th/id/OIP.lZOL6XH7VFF3BLW0czMwxgHaE8?w=243&h=180&c=7&r=0&o=5&pid=1.7",
        description: "Layered pasta dish with meat, cheese, and tomato sauce.",
        link: "recipe_lasagna.html",
        category: "Italian"
    },
    {
        title: "Falafel Wrap",
        image: "https://th.bing.com/th/id/OIP.eDv_WmUOcUsO8_DlqDe-0QHaLH?w=128&h=192&c=7&r=0&o=5&pid=1.7",
        description: "Crispy falafel balls wrapped in pita with fresh vegetables.",
        link: "recipe_falafel_wrap.html",
        category: "Middle Eastern"
    },
    {
        title: "Ratatouille",
        image: "https://th.bing.com/th/id/OIP.FEKD8iLdrmKT_4fgRzDKFwHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "A vegetable medley stew from Provence, France.",
        link: "recipe_ratatouille.html",
        category: "French"
    },
    {
        title: "Pancakes",
        image: "https://th.bing.com/th/id/OIP.HpxxvHAQ752HUnEXbHxivQHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "Fluffy pancakes served with syrup and fresh fruits.",
        link: "recipe_pancakes.html",
        category: "Breakfast"
    },
    {
        title: "Moussaka",
        image: "https://th.bing.com/th/id/OIP.TpStmFVkLTo39Qjz-LZqMwHaE8?w=291&h=194&c=7&r=0&o=5&pid=1.7",
        description: "A Greek baked dish with layers of eggplant and meat sauce.",
        link: "recipe_moussaka.html",
        category: "Greek"
    },
    {
        title: "Shrimp Scampi",
        image: "https://th.bing.com/th/id/OIP.hmwvwt3vkCA_e0ml_M5FngHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
        description: "Shrimp cooked in garlic, lemon, and butter sauce.",
        link: "recipe_shrimp_scampi.html",
        category: "Seafood"
    },
    {
        title: "Vegetable Stir Fry",
        image: "https://th.bing.com/th/id/OIP.4tpRcZn1MVHnEUVvOnPVRQHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "A colorful mix of vegetables stir-fried with soy sauce.",
        link: "recipe_vegetable_stir_fry.html",
        category: "Vegetarian"
    },
    {
        title: "Banoffee Pie",
        image: "https://th.bing.com/th/id/OIP.iGYRhMjrVdGh7Udqy9PLowHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7",
        description: "A delicious dessert made with bananas, cream, and toffee.",
        link: "recipe_banoffee_pie.html",
        category: "Dessert"
    },
    {
        title: "Chow Mein",
        image: "https://th.bing.com/th/id/OIP.wm0hMCAqxXh-sx3uA1rVIQHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "Stir-fried noodles with vegetables and meat or tofu.",
        link: "recipe_chow_mein.html",
        category: "Chinese"
    },
    {
        title: "Curry Goat",
        image: "https://th.bing.com/th/id/OIP.mPShrOvpU5cCNoCt92TOZgHaE7?w=241&h=181&c=7&r=0&o=5&pid=1.7",
        description: "A flavorful and spicy goat meat dish cooked in curry.",
        link: "recipe_curry_goat.html",
        category: "Caribbean"
    },
    {
        title: "Beef Tacos",
        image: "https://th.bing.com/th/id/OIP.fuYGyXL3nNq4jw1sp_7nMAHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "Soft or crispy tortillas filled with seasoned beef.",
        link: "recipe_beef_tacos.html",
        category: "Mexican"
    },
    {
        title: "Quiche Lorraine",
        image: "https://th.bing.com/th/id/OIP.C1nxPYVAQROBrCVCLHAQRQHaE8?w=268&h=180&c=7&r=0&o=5&pid=1.7",
        description: "A savory pie filled with eggs, cream, cheese, and bacon.",
        link: "recipe_quiche_lorraine.html",
        category: "French"
    },
    {
        title: "Pesto Pasta",
        image: "https://th.bing.com/th/id/OIP.ChsrFMC4JKVpnHX9zz5PMwHaJQ?w=184&h=230&c=7&r=0&o=5&pid=1.7",
        description: "Pasta tossed in a fresh basil pesto sauce.",
        link: "recipe_pesto_pasta.html",
        category: "Italian"
    },
    {
        title: "Chicken Parmesan",
        image: "https://th.bing.com/th/id/OIP.njrix-JLbtNOeAffHAWGKQHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "Breaded chicken cutlets baked with marinara and cheese.",
        link: "recipe_chicken_parmesan.html",
        category: "Italian"
    },
    {
        title: "Baked Ziti",
        image: "https://th.bing.com/th/id/OIP.UeZxQWwnZk_-1VDBCJ_4_AAAAA?w=184&h=270&c=7&r=0&o=5&pid=1.7",
        description: "Pasta baked with cheese and marinara sauce.",
        link: "recipe_baked_ziti.html",
        category: "Italian"
    },
    {
        title: "Shrimp Tacos",
        image: "https://th.bing.com/th/id/OIP.H7dGARLgn7Qcq1lh_x-6CgHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "Tacos filled with seasoned shrimp and fresh toppings.",
        link: "recipe_shrimp_tacos.html",
        category: "Mexican"
    },
    {
        title: "Chocolate Mousse",
        image: "https://th.bing.com/th/id/OIP.zRPsmq_XAiCBVyQK0KeTXAHaKX?w=184&h=257&c=7&r=0&o=5&pid=1.7",
        description: "A rich and creamy dessert made with chocolate and whipped cream.",
        link: "recipe_chocolate_mousse.html",
        category: "Dessert"
    },
    {
        title: "Vegetable Samosas",
        image: "https://th.bing.com/th/id/OIP.sDLUFcrZ49nMR-tbEYM1SwHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7",
        description: "Fried pastries filled with spiced potatoes and peas.",
        link: "recipe_vegetable_samosas.html",
        category: "Vegetarian"
    },
    {
        title: "Stuffed Bell Peppers",
        image: "https://th.bing.com/th/id/OIP.tfg-3eVS471BL0k4w6l85gHaJQ?w=184&h=291&c=7&r=0&o=5&pid=1.7",
        description: "Bell peppers stuffed with rice, ground meat, and spices.",
        link: "recipe_stuffed_bell_peppers.html",
        category: "Vegetarian"
    },
    {
        title: "Mango Sticky Rice",
        image: "https://th.bing.com/th/id/OIP.gBzLOJ2IGgMmqq78g6UxoAAAAA?w=184&h=184&c=7&r=0&o=5&pid=1.7",
        description: "A Thai dessert made with glutinous rice and fresh mango.",
        link: "recipe_mango_sticky_rice.html",
        category: "Dessert"
    },
    {
        title: "Pumpkin Soup",
        image: "https://th.bing.com/th/id/OIP.9maiR0vti7_CbDf1or879wHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "A creamy soup made with pumpkin and spices.",
        link: "recipe_pumpkin_soup.html",
        category: "Soup"
    },
    {
        title: "Carrot Cake",
        image: "https://th.bing.com/th/id/OIP.ua9L_GQl1A5wlWH8ecgy9QHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
        description: "A moist cake made with grated carrots and cream cheese frosting.",
        link: "recipe_carrot_cake.html",
        category: "Dessert"
    },
    {
        title: "Eggplant Parmesan",
        image: "https://th.bing.com/th/id/OIP.fGNmHKKyu2T2PA6RrHWC4QHaLG?w=184&h=276&c=7&r=0&o=5&pid=1.7",
        description: "Breaded eggplant slices baked with marinara sauce and cheese.",
        link: "recipe_eggplant_parmesan.html",
        category: "Vegetarian"
    },
    {
        title: "Yorkshire puddings",
        image: "https://www.artisandelimarket.co.uk/cdn/shop/articles/harrymgordon_food_photography_of_the_best_yorkshire_puddings_4f9f5316-2e06-4e4b-9aac-773b7c4e74bd_1.png?v=1695400380",
        description: "Yorkshire pudding is a savory, baked British dish made from eggs, flour, milk, and sometimes water",
        link: "Yorkshire_puddings.html",
        category: "Dessert"
    },
    {
        title: "Victoria sandwich",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001468_10-81b47f5.jpg?quality=90&resize=440,400",
        description: "The Victoria sponge, also known as the Victoria sandwich cake, was named after Queen Victoria, who was known to enjoy the small cakes with her afternoon tea.",
        link: "Victoria_sandwich.html",
        category: "Dessert"
    },
    {
        title: "Lemon drizzle cake",
        image: "https://saltedmint.com/wp-content/uploads/2024/06/Lemon-Drizzle-Cake-4.jpg",
        description: "The lemon favoured liquid sugar sinks into the cake, and when you bite into it you get the lemon flavor coming out.",
        link: "recipe_Lemon_drizzle_cake.html",
        category: "Dessert"
    },
    
];
const favorites = [];

document.getElementById('search-btn').addEventListener('click', searchRecipes);
document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchRecipes();
    }
});
document.getElementById('favorites-link').addEventListener('click', function(event) {
    event.preventDefault();
    displayFavorites();
});
document.getElementById('categories-link').addEventListener('click', function(event) {
    event.preventDefault();
    const subMenu = document.getElementById('category-list');
    subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
});


populateCategories();

function populateCategories() {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = ''; 
    const categories = [...new Set(recipes.map(recipe => recipe.category))]; 
    categories.forEach(category => {
        const categoryItem = document.createElement('li');
        categoryItem.innerHTML = `<a href="#" onclick="filterByCategory('${category}')">${category}</a>`;
        categoryList.appendChild(categoryItem);
    });
}


function filterByCategory(category) {
    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
    displayRecipes(filteredRecipes);
}

function searchRecipes() {
    const query = document.getElementById('search').value.toLowerCase().trim();
    const filteredRecipes = query ? recipes.filter(recipe => recipe.title.toLowerCase().includes(query)) : recipes;
    displayRecipes(filteredRecipes);
}


function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    if (recipes.length === 0) {
        recipeList.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        recipeItem.innerHTML = `
            <a href="${recipe.link}">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-title">${recipe.title}</div>
                <div class="recipe-description">${recipe.description}</div>
            </a>
            <button class="favorite-btn" data-title="${recipe.title}">Add to Favorites</button>
        `;
        recipeList.appendChild(recipeItem);
    });

    
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const title = this.getAttribute('data-title');
            addToFavorites(title);
        });
    });
}

function addToFavorites(title) {
    const recipe = recipes.find(recipe => recipe.title === title);
    if (recipe && !favorites.includes(recipe)) {
        favorites.push(recipe);
        const favoriteButton = document.querySelector(`.favorite-btn[data-title="${title}"]`);
        if (favoriteButton) {
            favoriteButton.textContent = 'Added to Favorites';
        }
    }
}

function displayFavorites() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    if (favorites.length === 0) {
        recipeList.innerHTML = '<p>No favorites found.</p>';
        return;
    }

    favorites.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        recipeItem.innerHTML = `
            <a href="${recipe.link}">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-title">${recipe.title}</div>
                <div class="recipe-description">${recipe.description}</div>
            </a>
            <button class="remove-favorite-btn" data-title="${recipe.title}">Remove from Favorites</button>
        `;
        recipeList.appendChild(recipeItem);
    });

    const removeFavoriteButtons = document.querySelectorAll('.remove-favorite-btn');
    removeFavoriteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const title = this.getAttribute('data-title');
            removeFromFavorites(title);
        });
    });
}

function removeFromFavorites(title) {
    const index = favorites.findIndex(recipe => recipe.title === title);
    if (index !== -1) {
        favorites.splice(index, 1);
        displayFavorites(); 
    }
}

document.addEventListener('click', function(event) {
    const categoriesLink = document.getElementById('categories-link');
    const subMenu = document.getElementById('category-list');
    if (!categoriesLink.contains(event.target) && !subMenu.contains(event.target)) {
        subMenu.style.display = 'none'; 
    }
});
