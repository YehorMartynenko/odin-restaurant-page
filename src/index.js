import "./styles.css";
import "./menu.css"
import { MainPageController } from "./main-page.js";
import { MenuController } from "./menu.js";

(function ScreenController(){
    MainPageController();
    const homeButton = document.querySelector(".home");
    homeButton.addEventListener("click", ()=> {
        MainPageController();
    })

    const menuButton = document.querySelector(".menu");
    menuButton.addEventListener("click", () => {
        MenuController();
    })
})();
