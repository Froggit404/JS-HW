const url = new URLSearchParams(window.location.search);
const userId = url.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {

        const infoHolder = document.createElement("div");
        infoHolder.id = 'infoHolder'
        infoHolder.innerText = `
           id: ${user.id}
           name: ${user.name}
           username: ${user.username}
           email: ${user.email}
           address:
           street: ${user.address.street}
           suite: ${user.address.suite}
           city: ${user.address.city}
           zipcode: ${user.address.zipcode}
           geo:
           lat: ${user.address.geo.lat}
           lng: ${user.address.geo.lng}
           phone: ${user.phone}
           website: ${user.website}
           company:
           name: ${user.company.name}
           catchPhrase: ${user.company.catchPhrase}
           bs: ${user.company.bs}
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
                        postHolder.innerText =
                            `
                            title: ${post.title}
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




