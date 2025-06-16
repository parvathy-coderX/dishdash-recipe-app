document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("browseRecipeContainer");
  const searchInput = document.getElementById("searchInput");

  const recipes = [
    {
      title: "Cheesy Garlic Pasta",
      image: "images/pasta.jpg",
      ingredients: ["200g Pasta", "2 Garlic Cloves", "1 cup Cream", "1/2 cup Cheese", "Salt and Pepper"],
      instructions: "Boil pasta until al dente. In a pan, sauté garlic in butter, add cream and cheese. Mix pasta into the sauce, season with salt and pepper, and serve hot."
    },
    {
      title: "Hyderabadi Biryani",
      image: "images/biryani.jpg",
      ingredients: ["2 cups Basmati Rice", "500g Chicken", "1 cup Yogurt", "Fried Onions", "Mint", "Biryani Masala"],
      instructions: "Marinate chicken with yogurt and spices. Layer with rice, fried onions and herbs. Cook on dum and serve with raita."
    },
    {
      title: "Fudgy Chocolate Brownie",
      image: "images/brownie.jpg",
      ingredients: ["1/2 cup Butter", "1 cup Sugar", "2 Eggs", "1/3 cup Cocoa", "1/2 cup Flour", "1 tsp Vanilla"],
      instructions: "Mix butter, sugar, eggs. Add cocoa, vanilla, flour. Pour in pan and bake at 175°C for 25 minutes. Let cool before serving."
    }
  ];

  function renderRecipes(list) {
    container.innerHTML = "";
    list.forEach(recipe => {
      const div = document.createElement("div");
      div.className = "full-recipe";

      div.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <h4>Ingredients:</h4>
        <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
        <h4>Instructions:</h4>
        <p>${recipe.instructions}</p>
      `;

      container.appendChild(div);
    });

    if (list.length === 0) {
      container.innerHTML = `<p>No recipes match your search.</p>`;
    }
  }

  // Initial load
  renderRecipes(recipes);

  // Search functionality
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    const filtered = recipes.filter(r =>
      r.title.toLowerCase().includes(keyword) ||
      r.ingredients.some(ing => ing.toLowerCase().includes(keyword))
    );

    renderRecipes(filtered);
  });
});
