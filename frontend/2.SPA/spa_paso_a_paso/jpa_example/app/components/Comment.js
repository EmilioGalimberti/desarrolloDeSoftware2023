export function Comment(comment){
    const $comment = document.createElement('article');
    $comment.classList.add('post');
    
    $comment.innerHTML = `
        <h2><span class="id">#${comment.id}</span> |${comment.name}</h2>
        <p>${comment.body}</p>
        <div class="flex-between">
            <p><span class="email">☒ ${comment.email}</span></p>
        </div>
    `;

    return $comment;
}