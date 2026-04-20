import dishImage1 from "./dish.jpg";
import dishImage2 from "./dish2.jpg";
import dishImage3 from "./dish3.jpg";
import dishImage4 from "./dish4.jpg";

export function MenuController() {
    const items = [
        {
            name: "Carrot Salad",
            img: dishImage1,
            details: `  Inspired by the French carrot salad often found in bistros, 
                        this zesty carrot salad features a sweet-and-savory 
                        vinaigrette that adds punch to every bite. `,
            portion: "300g",
            price: "4.99$",
        },
        {
            name: "Cream of Celery",
            img: dishImage2,
            details: `  This rich cream of celery soup recipe will warm up any family gathering 
                        or quiet evening at home. With just the right amount of onion flavor, 
                        it's creamy and crowd-pleasing.  `,
            portion: "250g",
            price: "5.99$",
        },
        {
            name: "Hungarian Chicken Paprikash",
            img: dishImage3,
            details: `  Timple combination of chicken, onions, garlic, paprika and sour cream.  `,
            portion: "300g",
            price: "5.49$",
        },
        {
            name: "Shrimp Quesadilla",
            img: dishImage4,
            details: `  These shrimp quesadillas boast a refreshing flavor. 
                        Serve with salsa on the side and a frosty smoothie`,
            portion: "300g",
            price: "5.99$",
        }
    ];

    const content = document.getElementById("content");
    content.textContent = "";
    
    const container = document.createElement("div");
    container.setAttribute("class", "menu-container");
    content.appendChild(container);

    items.forEach(element => {
        const menuItemDiv = document.createElement("div");
        menuItemDiv.setAttribute("class", "menu-item");
        container.appendChild(menuItemDiv);

        const itemName = document.createElement("p");
        itemName.setAttribute("class", "item-name");
        itemName.textContent = element.name;
        menuItemDiv.appendChild(itemName);

        const itemImage = document.createElement("img");
        itemImage.src = element.img;
        menuItemDiv.appendChild(itemImage);

        const itemDetailsDiv = document.createElement("div");
        itemDetailsDiv.setAttribute("class", "item-details");
        menuItemDiv.appendChild(itemDetailsDiv);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = element.details;
        itemDetailsDiv.appendChild(itemDescription);

        const itemPortion = document.createElement("p");
        itemPortion.textContent = element.portion;
        itemDetailsDiv.appendChild(itemPortion);

        const itemPrice = document.createElement("p");
        itemPrice.textContent = element.price;
        itemDetailsDiv.appendChild(itemPrice);
    });
}