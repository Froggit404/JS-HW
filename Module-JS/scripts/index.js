fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const userHolder = document.getElementById('userHolder');
        for (const user of users) {
            const userCard = document.createElement("div");
            userCard.id = ('userCard')
            userCard.innerHTML =
                `
                <p><b>User id: ${user.id}</b></p>
                <p>Name: ${user.name}</p>
                `

            const userInfo = document.createElement("button");
            userInfo.id = 'userInfo'
            userInfo.innerText = 'User info'
            userInfo.onclick = function () {
                location.href = `user-details.html?id=${user.id}`
            }

            userCard.appendChild(userInfo)
            userHolder.appendChild(userCard)
        }
    })
    .catch(error => {
        console.error('Error uploading users:', error);
        alert('Error uploading users');
    });