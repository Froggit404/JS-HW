const url = new URLSearchParams(location.search);
const userId = url.get("id")
if (!userId) {
    alert("Can't find a user")
    throw new Error("Can't find user id")
}


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {

        const infoHolder = document.createElement("div")
        infoHolder.id = 'infoHolder'
        infoHolder.innerHTML =
        `
           <div>
           <p><b>User id: ${user.id}</b></p>
           <p>Name: ${user.name}</p>
           <p>User name: ${user.username}</p>
           <p>Email: ${user.email}</p>
           <p>Phone: ${user.phone}</p>
           <p>Website: ${user.website}</p>
           </div>
           <div>
           <p><b>Address:</b></p>
           <p>Street: ${user.address.street}</p>
           <p>Suite: ${user.address.suite}</p>
           <p>City: ${user.address.city}</p>
           <p>Zip code: ${user.address.zipcode}</p>
           </div>
           <div>
           <p><b>Geo:</b></p>
           <p>Lat: ${user.address.geo.lat}</p>
           <p>Lng: ${user.address.geo.lng}</p>
           </div>
           <div>
           <p><b>Company:</b></p>
           <p>Name: ${user.company.name}</p>
           <p>Catch Phrase: ${user.company.catchPhrase}</p>
           <p>Bs: ${user.company.bs}</p>
           </div>
        `

        const postButton = document.createElement("button");
        postButton.id = 'postButton'
        postButton.innerText = 'Post of current user'


        postButton.onclick = function () {
            let postsHolder = document.getElementById('postsHolder');
            if (!postsHolder) {
                postsHolder = document.createElement("div");
                postsHolder.id = 'postsHolder';
                document.body.appendChild(postsHolder);
            }
            postsHolder.innerText = '';

            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(value => value.json())
                .then(posts => {
                    for (const post of posts) {
                        const postHolder = document.createElement("div");
                        postHolder.classList.add('postHolder')
                        // postHolder.id = 'postHolder'
                        postHolder.innerHTML =
                            `
                            <p><b>Post title:</b> ${post.title}</p>
                            `
                        const postInfo = document.createElement("button");
                        postInfo.classList.add('postInfo')
                        // postInfo.id = 'postInfo'
                        postInfo.innerText = 'Post details'
                        postInfo.onclick = function () {
                            location.href = `post-details.html?postId=${post.id}`
                        }

                        postHolder.appendChild(postInfo)
                        postsHolder.appendChild(postHolder)
                    }


                })

        }

        document.body.append(infoHolder, postButton)
    })

    .catch(error => {
        console.error('Error uploading:', error);
        alert('Error uploading');
    });

