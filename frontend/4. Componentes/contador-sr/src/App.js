import Contador from "./componentes/Contador.js";

export default function App(){
    const $app = document.getElementById('app')
    $app.innerHTML = null;
    $app.appendChild(Contador())
}