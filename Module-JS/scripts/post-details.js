const url = new URLSearchParams(location.search);
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
                  <div id="idBlock">
                  <p><b>User id:</b> ${post.userId}</p>
                  <p><b>Post id:</b> ${post.id}</p>
                  </div>
                  <div id="textBlock">
                  <p><b>Title:</b> ${post.title}</p>
                  <p><b>Body:</b> ${post.body}</p>
                  </div>
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
                <p><b>Id:</b> ${comment.id}</p>
                <p><b>Name:</b> ${comment.name}</p>
                <p><b>Email:</b> ${comment.email}</p>
                <p><b>Body:</b> ${comment.body}</p>
                `
                    commentsHolder.appendChild(commentHolder)

                }
                document.body.append(postDetailsHolder, commentsHolder)
            })


    })
    .catch(error => {
        console.error('Error uploading comments:', error);
        alert('Error uploading comments');
    });


