const header = document.getElementById('header');

header.innerHTML = `
<header class="header">
<div><a href="./index.html">MyBlog</a></div>
<div>
    <a href="./about.html">About</a>
    <input type="text" id="search" name="search">
    <button type="submit">Submit</button>
</div>
</header>
`