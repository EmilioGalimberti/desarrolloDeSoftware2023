export function AcercaDe(){
    const $div =  document.createElement('div');
    $div.classList.add('acercaDe');

    $div.innerHTML = `
        <p>
            Esta aplicación permite consultar post con sus comentarios
            desde la api: 
            <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder</a>
        </p>
    `;

    return $div;

}