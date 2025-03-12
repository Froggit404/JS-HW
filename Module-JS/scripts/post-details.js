const url = new URLSearchParams(window.location.search);
const postId = url.get("postId");
if (!postId) {
    alert("Can't find a post")
}

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {
            const postDetailsHolder = document.createElement("div");
            postDetailsHolder.id = 'postDetailsHolder'
            postDetailsHolder.innerHTML =
                `
                  <p>User id: ${post.userId}</p>
                  <p>Post id: ${post.id}</p>
                  <p>Title: ${post.title}</p>
                  <p>Body: ${post.body}</p>
                `


        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(comments => {
                const commentsHolder = document.createElement("div");
                commentsHolder.id = 'commentsHolder'

                for (const comment of comments) {
                    const commentHolder = document.createElement("div");
                    commentHolder.id = 'commentHolder'
                    commentHolder.innerHTML =
                        `
                <p>Id: ${post.id}</p>
                <p>Name: ${post.name}</p>
                <p>Email: ${post.email}</p>
                <p>Body: ${post.body}</p>
                `
                    commentsHolder.appendChild(commentHolder)

                }
                document.body.append(postDetailsHolder, commentsHolder)
            })

            .catch(error => {
                console.error('Error uploading comments:', error);
                alert('Error uploading comments');
            });
    })


