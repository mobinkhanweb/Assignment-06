// Use Strict mode
"use strict";

// navbar functionality for mobile
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const showNav = () => {
    mobileNav.classList.remove("right-[-200px]");
    mobileNav.classList.add("right-0");
    overlay.classList.remove("hidden");
};
const closeNav = () => {
    mobileNav.classList.add("right-[-200px]");
    mobileNav.classList.remove("right-0");
    overlay.classList.add("hidden");
};

// Main Features
const categoriesContainer = document.querySelector("#categoriesContainer");
const treesCardContainer = document.querySelector("#treesCardContainer");
const cartContainer = document.querySelector("#cartContainer");

// Function to load the category
const loadCategory = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/categories"
    );
    const data = await res.json();
    const categories = data.categories;
    showCategory(categories);
};

// Function to display categories
const showCategory = (categories) => {
    //   console.log(categories);
    categoriesContainer.innerHTML = `<li id="allTrees" class="category-btn text-[#1F2937] hover:bg-green-700 hover:text-white rounded-md p-2 cursor-pointer ">All tress</li>`;
    //   console.log(categories);
    categories.forEach((category) => {
        const categoryName = category.category_name;
        const id = category.id;
        categoriesContainer.innerHTML += `
            <li id='${id}' class="category-btn text-[#1F2937] hover:bg-green-700 hover:text-white rounded-md p-2 cursor-pointer">${categoryName}</li>
    `;
    });

    // load Trees category
    categoriesContainer.addEventListener("click", (e) => {
        if (e.target.localName === "li") {
            const id = e.target.id;
            id !== "allTrees" ? loadTreesByCategory(id) : loadAllTreesCategory(id);

            // active class feature
            const categoryBtn = document.querySelectorAll(".category-btn");
            categoryBtn.forEach((btn) => {
                btn.classList.remove("bg-green-700", "text-white");
            });
            e.target.classList.add("bg-green-700", "text-white");
        }
    });
    document
        .getElementById("allTrees")
        .classList.add("bg-green-700", "text-white");
};

// Function to load tress by categories
const loadTreesByCategory = async (id) => {
    try {
        const res = await fetch(
            `https://openapi.programming-hero.com/api/category/${id}`
        );
        const data = await res.json();
        // console.log(data)
        showTressByCategory(data.plants);
    } catch (e) {
        console.log(e);
    }
};

// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer.Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }

// Function to show Tress By Category
const showTressByCategory = (trees) => {
    treesCardContainer.innerHTML = "";
    try {
        trees.forEach((tree) => {
            //   console.log(tree);
            treesCardContainer.innerHTML += `
            <div class="card p-4 bg-white h-fit shadow-sm">
                <figure class="h-40">
                    <img
                    src="${tree.image}"
                    alt="${tree.name}" />
                </figure>
                <div class=" overflow-clip">
                    <h2 class="card-title mt-3">${tree.name}</h2>
                    <p class="truncate text-[#1F2937] text-sm font-medium my-3">${tree.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="badge bg-green-200 text-[#15803D] font-medium">${tree.category}</div>
                        <p class="font-medium text-[#1F2937]">$<span class="price">${tree.price}</span></p>
                    </div>
                    <div class="card-actions justify-end mt-3">
                        <button class="add2CartBtn btn bg-[#15803D] hover:bg-[#127737] text-white w-full rounded-full">Add to Cart</button>
                    </div>
                </div>  
            </div>  
      `;
        });
        // Function for cart
        const addToCartBtn = document.querySelectorAll(".add2CartBtn");
        addToCartBtn.forEach((cartBtn) => {
            cartBtn.addEventListener("click", (e) => {
                const parent = e.target.parentNode.parentNode;
                const title = parent.querySelector(".card-title").textContent;
                const price = parent.querySelector(".price").textContent;
                console.log(title, price);
                showCart(title, price);
            });
        });
    } catch (e) {
        console.log(e);
    }
};

// Function for add treen into cart
const showCart = (title, price) => {
    cartContainer.innerHTML += `
          <div class="p-2 mb-3  shadow rounded-2xl">
            <div
              class="bg-green-100 rounded-2xl flex justify-between items-center px-4 py-3 "
            >
              <div class="space-y-1">
                <h5 class="font-medium">${title}</h5>
                <span class="text-gray-400 "
                  ><i
                    class="fa-solid fa-bangladeshi-taka-sign text-gray-400 text-sm"
                  ></i
                  ><span>${price}</span>
                  <i class="fa-solid fa-xmark text-gray-400 text-[9px]"></i>
                  1
                </span>
              </div>
              <span
                ><i
                  class="removeCart fa-solid fa-xmark text-gray-400 text-sm cursor-pointer"
                ></i
              ></span>
            </div>
          </div>
  `;
};

// Function to load All Trees Category by Default
const loadAllTreesCategory = async () => {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/plants");
        const data = await res.json();
        showTressByCategory(data.plants);
    } catch (e) {
        console.log(e);
    }
};



// Call Load Category Function to load category
loadCategory();

loadAllTreesCategory();