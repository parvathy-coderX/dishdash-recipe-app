// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Live search functionality for recipe cards
  const searchInput = document.querySelector('.hero input[type="text"]');
  const recipeCards = document.querySelectorAll('.recipe-cards .card');

  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const query = searchInput.value.toLowerCase();

      recipeCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Future idea: add recipe form validation or success popup here
});
// Simple client-side validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recipeForm");

  form?.addEventListener("submit", (e) => {
    const title = form.title.value.trim();
    const ingredients = form.ingredients.value.trim();
    const instructions = form.instructions.value.trim();

    if (!title || !ingredients || !instructions) {
      e.preventDefault();
      alert("Please fill in all required fields.");
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;

    // Basic email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    // Password must not be empty or less than 6 characters
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); // Stop form submission
    }
  });
});



// Register form validation
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match!");
      }

      // You can add more checks here (like password length, email format, etc.)
    });
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const recipeData = {
    pasta: {
      title: "Cheesy Garlic Pasta",
      image: "images/pasta.jpg",
      ingredients: [
        "200g Pasta",
        "2 Garlic Cloves, minced",
        "1 cup Fresh Cream",
        "1/2 cup Grated Cheese",
        "Salt and Pepper to taste",
        "1 tbsp Butter"
      ],
      instructions: `
        1. Boil pasta in salted water until al dente. Drain and set aside.<br/>
        2. In a pan, heat butter and sauté minced garlic for 1-2 minutes until fragrant.<br/>
        3. Pour in the cream and let it simmer on low heat for 3-4 minutes.<br/>
        4. Add grated cheese and stir until melted and smooth.<br/>
        5. Add cooked pasta to the sauce and toss well to coat evenly.<br/>
        6. Season with salt and pepper. Serve hot with extra cheese or herbs if desired.
      `
    },
    biryani: {
      title: "Hyderabadi Biryani",
      image: "images/biryani.jpg",
      ingredients: [
        "2 cups Basmati Rice",
        "500g Chicken (marinated)",
        "1 cup Yogurt",
        "2 Onions, sliced and fried",
        "Whole spices (bay leaf, cloves, cardamom)",
        "1 tsp Biryani Masala",
        "Saffron soaked in milk",
        "Fresh coriander and mint leaves",
        "Salt and oil"
      ],
      instructions: `
        1. Rinse and soak basmati rice for 30 minutes. Cook it 70% done and drain.<br/>
        2. Marinate chicken with yogurt, spices, fried onions, and herbs for at least 1 hour.<br/>
        3. In a deep pot, layer the marinated chicken at the bottom.<br/>
        4. Add a layer of semi-cooked rice on top. Sprinkle saffron milk and herbs.<br/>
        5. Cover tightly and cook on low flame (dum) for 25-30 minutes.<br/>
        6. Let it rest for 10 minutes before mixing gently and serving hot.
      `
    },
    brownie: {
      title: "Fudgy Chocolate Brownie",
      image: "images/brownie.jpg",
      ingredients: [
        "1/2 cup Butter",
        "1 cup Sugar",
        "2 Eggs",
        "1/3 cup Cocoa Powder",
        "1/2 cup All-purpose Flour",
        "1/4 tsp Salt",
        "1 tsp Vanilla Extract",
        "1/2 cup Chocolate Chips (optional)"
      ],
      instructions: `
        1. Preheat the oven to 175°C (350°F). Grease and line a square baking pan.<br/>
        2. In a saucepan, melt the butter. Remove from heat and mix in sugar, eggs, and vanilla.<br/>
        3. Stir in cocoa powder, flour, and salt until well combined. Fold in chocolate chips.<br/>
        4. Pour the batter into the prepared pan and spread evenly.<br/>
        5. Bake for 20–25 minutes or until a toothpick comes out with a few moist crumbs.<br/>
        6. Let it cool completely before slicing into squares. Enjoy!
      `
    }
  };

  const container = document.getElementById("recipeContainer");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id && recipeData[id]) {
    const { title, image, ingredients, instructions } = recipeData[id];
    container.innerHTML = `
      <img src="${image}" alt="${title}" />
      <h2>${title}</h2>
      <h4>Ingredients:</h4>
      <ul>${ingredients.map(item => `<li>${item}</li>`).join('')}</ul>
      <h4>Instructions:</h4>
      <p>${instructions}</p>
    `;
  } else {
    container.innerHTML = `<p>Recipe not found. Please <a href="index.html">go back</a> and try again.</p>`;
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const browseContainer = document.getElementById("browseRecipeContainer");
  if (!browseContainer) return;

  const recipes = [
    {
      title: "Cheesy Garlic Pasta",
      image: "images/pasta.jpg",
      ingredients: [
        "200g Pasta",
        "2 Garlic Cloves",
        "1 cup Cream",
        "1/2 cup Cheese",
        "Salt and Pepper to taste"
      ],
      instructions: "Boil pasta until al dente. In a pan, sauté garlic in butter, add cream and cheese. Mix pasta into the sauce, season with salt and pepper, and serve hot."
    },
    {
      title: "Hyderabadi Biryani",
      image: "images/biryani.jpg",
      ingredients: [
        "2 cups Basmati Rice",
        "500g Chicken/Mutton",
        "1 cup Yogurt",
        "Fried Onions, Mint, Coriander",
        "Biryani spices"
      ],
      instructions: "Marinate meat with yogurt and spices. Cook partially. Layer with rice, fried onions, herbs. Cook on dum for 30 minutes. Serve hot with raita."
    },
    {
      title: "Fudgy Chocolate Brownie",
      image: "images/brownie.jpg",
      ingredients: [
        "1/2 cup Butter",
        "1 cup Sugar",
        "2 Eggs",
        "1/3 cup Cocoa Powder",
        "1/2 cup Flour",
        "1 tsp Vanilla",
        "Pinch of Salt"
      ],
      instructions: "Melt butter, mix with sugar and eggs. Add cocoa, vanilla, flour and salt. Pour into greased pan. Bake at 175°C for 25 mins. Let cool before cutting."
    }
  ];

  // Render each recipe
  recipes.forEach(recipe => {
    const div = document.createElement("div");
    div.classList.add("full-recipe");

    div.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <h4>Ingredients:</h4>
      <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
      <h4>Instructions:</h4>
      <p>${recipe.instructions}</p>
    `;

    browseContainer.appendChild(div);
  });
});
