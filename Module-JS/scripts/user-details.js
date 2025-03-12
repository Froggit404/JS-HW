const url = new URLSearchParams(window.location.search);
const userId = url.get("id")
if (!userId) {
    alert("Can't find a user")
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
                        postHolder.id = 'postHolder'
                        postHolder.innerHTML =
                            `
                            <p><b>Post title:</b> ${post.title}</p>
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

    .catch(error => {
        console.error('Error uploading:', error);
        alert('Error uploading');
    });



// `
//            <p>User id: ${user.id}</p>
//            <p>Name: ${user.name}</p>
//            <p>Username: ${user.username}</p>
//            <p>Email: ${user.email}</p>
//            <p>Address:</p>
//            <p>Street: ${user.address.street}</p>
//            <p>Suite: ${user.address.suite}</p>
//            <p>City: ${user.address.city}</p>
//            <p>Zipcode: ${user.address.zipcode}</p>
//            <p>Geo:</p>
//            <p>Lat: ${user.address.geo.lat}</p>
//            <p>Lng: ${user.address.geo.lng}</p>
//            <p>Phone: ${user.phone}</p>
//            <p>Website: ${user.website}</p>
//            <p>Company:</p>
//            <p>Name: ${user.company.name}</p>
//            <p>CatchPhrase: ${user.company.catchPhrase}</p>
//            <p>Bs: ${user.company.bs}</p>
//            `


// <ul>
//     <p>User id: ${user.id}</p>
//     <li>Name: ${user.name}</li>
//     <li>Username: ${user.username}</li>
//     <li>Email: ${user.email}</li>
//     <ul><p>Address:</p>
//         <li>Street: ${user.address.street}</li>
//         <li>Suite: ${user.address.suite}</li>
//         <li>City: ${user.address.city}</li>
//         <li>Zipcode: ${user.address.zipcode}</li>
//     </ul>
//     <ul><p>Geo:</p>
//         <li>Lat: ${user.address.geo.lat}</li>
//         <li>Lng: ${user.address.geo.lng}</li>
//     </ul>
//     <li>Phone: ${user.phone}</li>
//     <li>Website: ${user.website}</li>
//     <ul><p>Company:</p>
//         <li>Name: ${user.company.name}</li>
//         <li>CatchPhrase: ${user.company.catchPhrase}</li>
//         <li>Bs: ${user.company.bs}</li>
//     </ul>
// </ul>`