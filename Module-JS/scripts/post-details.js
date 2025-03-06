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
            postHolder.innerText =
                `
                id: ${post.id}
                name: ${post.name}
                email: ${post.email}
                body: ${post.body}
                `
            postsHolder.appendChild(postHolder)
            console.log(posts)

        }
        document.body.appendChild(postsHolder)
    })



