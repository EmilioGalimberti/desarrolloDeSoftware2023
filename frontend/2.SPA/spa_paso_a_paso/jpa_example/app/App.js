import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { PostSection } from "./components/PostSection.js";
import { Router } from "./components/Router.js";

export function App(){
    const d = document;
    const $app = d.getElementById("app");
    $app.classList.add("app");
    $app .innerHTML = null;
    $app.appendChild(Header());
    $app.appendChild(PostSection());
    $app.appendChild(Footer());

    /*Router permite enrutar las peticiones según 
    la opción de menú seleccionada*/
    Router();
}