import dishImage1 from "./dish.jpg";
import dishImage2 from "./dish2.jpg";
import dishImage3 from "./dish3.jpg";
import dishImage4 from "./dish4.jpg";

export function MainPageController() {
    const contentDiv = document.getElementById("content");
    const updateScreen = () => {
        contentDiv.textContent = "";

        const container = document.createElement("div");
        container.setAttribute("class", "main-container");
        contentDiv.appendChild(container);

        const h1 = document.createElement("h1");
        h1.textContent = "Welcome to SUPER-DUPER-RESTAURANT's website";
        container.appendChild(h1);

        const dishesContainer = document.createElement("div");
        dishesContainer.setAttribute("class", "dishes");
        container.appendChild(dishesContainer);

        const images = Array(dishImage1, dishImage2, dishImage3, dishImage4);
        images.forEach(element => {
            const img = document.createElement("img");
            img.src = element;
            dishesContainer.appendChild(img);
        });

        const underDishes = document.createElement("div");
        underDishes.setAttribute("class", "under-dishes");
        container.appendChild(underDishes);

        const para = document.createElement("p");
        para.textContent = "Feel free to explore our menu with delicious dishes.";
        underDishes.appendChild(para);

        const para2 = document.createElement("p");
        para2.textContent = "See 'About' page to get more information about the restaurant";
        underDishes.appendChild(para2);
    }

    updateScreen();
}

