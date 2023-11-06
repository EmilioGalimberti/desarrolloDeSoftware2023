export default function Contador(){
    const $div = document.createElement('div')
    $div.innerHTML = `
    <h2>Contador</h2>
    <p>Valor actual: <b>${valor}</p>
    <button class = 'btn btn-primary' onclick='setValor()'>Incrementar</button>
    `  
    return $div
}