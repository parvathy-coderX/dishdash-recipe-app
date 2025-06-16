# dishdash-A Recipe Sharing Platform

DishDash is a modern and user-friendly recipe-sharing platform designed to bring food enthusiasts together. It allows users to easily register, log in, and contribute their own recipes, complete with ingredients, instructions, and images. Visitors can explore a wide variety of dishes contributed by others, search for recipes by name or ingredients, and view detailed instructions for preparation.The platform features a clean and responsive user interface built using HTML, CSS, and JavaScript, paired with a PHP + SQLite backend to handle user authentication and recipe management. The codebase follows modular and readable practices to ensure scalability and maintainability.

Key features include:

 User authentication – Registration and login system
 Recipe submission – Add ingredients, steps, and upload images
 Browse & view recipes – View featured and user-submitted dishes
 Responsive design – Optimized for mobile, tablet, and desktop
 Clean UX/UI – Intuitive layout with clear navigation

## 🎯 Project Objectives

- Enable users to add and view recipes with key details such as title, ingredients, steps, and images.
- Provide a clean and responsive user interface suitable for mobile and desktop devices.
- Maintain separation of concerns by organizing frontend and backend code in a structured format.
- Demonstrate backend capability using PHP and SQLite, even in a dummy form .
- Align with the theme: _A Recipe Sharing Website_.

## 🚀 Live Demo 

This project has been deployed using GitHub Pages.  
👉 Live Link: https://parvathy-coderx.github.io/dishdash-recipe-app/  
 Backend PHP files are included in the project folder but are not hosted live due to platform limitations.

 ## 🧱 Technologies Used

### 👩‍🎨 Frontend
- HTML5 – Semantic structure and form handling
- CSS3 – Responsive design, modern styles
- JavaScript – Dynamic UI interactions

### ⚙️ Backend 
- PHP – Server-side scripting for form handling, user registration, login, and database operations
- SQLite – Lightweight embedded database
  
## 📁 Project Structure
DishDash/
├── index.html               # Home page
├── add-recipe.html          # Add new recipe form
├── browse-recipe.html       # Browse all recipes
├── view-recipe.html         # View a single recipe in detail
├── login.html / register.html
│
├── css/
│   └── style.css            # Central stylesheet
│
├── js/
│   └── main.js              # JavaScript logic (e.g., form validation)
│
├── images/
│   └── (Images like pasta.jpg, biryani.jpg, etc.)
│
├── backend/
│   ├── db.php               # SQLite DB setup
│   ├── register.php         # Handles user registration
│   ├── login.php            # Handles user login
│   ├── addRecipe.php        # Receives form data & stores recipes
│   └── getRecipes.php       # Returns recipes (for AJAX/fetch)
└── README.md                # Project documentation


## 👩‍💻 Created by

Parvathy Santhosh C
AIML , MACE 
