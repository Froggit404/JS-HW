fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const userHolder = document.getElementById('userHolder');
        for (const user of users) {
            const userCard = document.createElement("div");
            userCard.classList.add('userCard')
            // userCard.id = ('userCard')
            userCard.innerHTML =
                `
                <p><b>User id: ${user.id}</b></p>
                <p>Name: ${user.name}</p>
                `

            const userInfoBtn = document.createElement("button");
            userInfoBtn.classList.add('userInfoBtn')
            // userInfoBtn.id = 'userInfoBtn'
            userInfoBtn.innerText = 'User info'
            userInfoBtn.onclick = function () {
                location.href = `user-details.html?id=${user.id}`
            }

            userCard.appendChild(userInfoBtn)
            userHolder.appendChild(userCard)
        }
    })
    .catch(error => {
        console.error('Error uploading users:', error);
        alert('Error uploading users');
    });