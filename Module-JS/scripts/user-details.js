const url = new URLSearchParams(window.location.search);
const userId = url.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {

        const infoHolder = document.createElement("div");
        infoHolder.id = 'infoHolder'
        infoHolder.innerHTML = `
           <p>id: ${user.id}</p>
           <p>name: ${user.name}</p>
           <p>username: ${user.username}</p>
           <p>email: ${user.email}</p>
           <p>address:</p>
           <p>street: ${user.address.street}</p>
           <p>suite: ${user.address.suite}</p>
           <p>city: ${user.address.city}</p>
           <p>zipcode: ${user.address.zipcode}</p>
           <p>geo:</p>
           <p>lat: ${user.address.geo.lat}</p>
           <p>lng: ${user.address.geo.lng}</p>
           <p>phone: ${user.phone}</p>
           <p>website: ${user.website}</p>
           <p>company:</p>
           <p>name: ${user.company.name}</p>
           <p>catchPhrase: ${user.company.catchPhrase}</p>
           <p>bs: ${user.company.bs}</p>
           `


        const postButton = document.createElement("button");
        postButton.id = 'postButton'
        postButton.innerText = 'Post of current user'


        postButton.onclick = function () {
            const postsHolder = document.createElement("div");
            postsHolder.id = 'postsHolder'
            document.body.appendChild(postsHolder)

            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(value => value.json())
                .then(posts => {
                    for (const post of posts) {
                        const postHolder = document.createElement("div");
                        postHolder.id = 'postHolder'
                        postHolder.innerHTML =
                            `
                            <p>title: ${post.title}</p>
                            `
                        const postInfo = document.createElement("button");
                        postInfo.id = 'postInfo'
                        postInfo.innerText = 'Post details'
                        postInfo.onclick = function () {
                            window.location.href = `post-details.html?postId=${post.id}`
                        }

                        postHolder.appendChild(postInfo)
                        postsHolder.appendChild(postHolder)
                    }


                })

        }

        document.body.append(infoHolder, postButton)
    })




