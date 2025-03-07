const url = new URLSearchParams(window.location.search);
const postId = url.get("postId");

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(value => value.json())
    .then(posts => {
        const postsHolder = document.createElement("div");
        postsHolder.id = 'postsHolder'

        for (const post of posts) {
            const postHolder = document.createElement("div");
            postHolder.id = 'postHolder'
            postHolder.innerHTML =
                `
                <p>id: ${post.id}</p>
                <p>name: ${post.name}</p>
                <p>email: ${post.email}</p>
                <p>body: ${post.body}</p>
                `
            postsHolder.appendChild(postHolder)
            console.log(posts)

        }
        document.body.appendChild(postsHolder)
    })



