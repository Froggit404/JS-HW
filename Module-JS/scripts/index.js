fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const userHolder = document.getElementById('userHolder');
        for (const user of users) {
            const userCard = document.createElement("div");
            userCard.id = ('userCard')
            userCard.innerHTML = `
            <p>User id: ${user.id}</p>
            <p>User name: ${user.name}</p>`;


            const userInfo = document.createElement("button");
            userInfo.id = 'userInfo'
            userInfo.innerText = 'User info'
            userInfo.onclick = function () {
                window.location.href = `user-details.html?id=${user.id}`
            }

            userCard.appendChild(userInfo)
            userHolder.appendChild(userCard)
        }
    })