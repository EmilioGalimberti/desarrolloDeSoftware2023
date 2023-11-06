export function ajax(props){
    let {url, callback} = props; // desempaquetar objeto props

    fetch(url)
    .then(res => res.ok? res.json():Promise.reject(res))
    .then(json => callback(json))
    .catch(err => {
        let message = err.statusText || 'Ocurrió un error al acceder a la API';
        const $app = document.getElementById('app');
        $app.innerHTML = null;
        $app.innerHtml = `
            <div class="error">
                <p> Error ${err.status}: ${message} </p>
            </div>    
        `;
    })      
}