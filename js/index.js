const previews = document.getElementById('previews');

fetch('http://localhost:3000/posts')
    .then((response) => response.json())
    .then((posts) => {
        previews.innerHTML = posts.map(Post).join("");


    });










const Post = (post) => {
    return `<div class="preview">
    <div>
        <h2 class="preview-title">${post.title}</h2>
        <p class="preview-summary">
            ${post.description}
        </p>
        <a href="./posts/javascript.html">Read More...</a>
    </div>
    <img class="preview-image" src="${post.image}">

</div>`;
}




