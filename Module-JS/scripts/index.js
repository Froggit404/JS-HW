fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const userHolder = document.getElementById('user-holder');
        for (const user of users) {
            const userCard = document.createElement("div");
            userCard.id = ('userCard')
            userCard.innerText = `
            id: ${user.id}
            Name: ${user.name}`

            const userInfo = document.createElement("button");
            userInfo.id = 'userInfo'
            userInfo.innerText = 'User info'
            userInfo.addEventListener ('click',() => {
                window.location.href = `user-detalis.html?id=${user.id}`
            })

            userCard.appendChild(userInfo)
            userHolder.appendChild(userCard)
        }
    })