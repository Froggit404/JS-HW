{
    fetch('https://dummyjson.com/carts')
        .then(value => value.json())
        .then(cardsObject => {
            const {carts} = cardsObject;

            for (const cart of carts) {
                const cartContainer = document.createElement("div");
                const divInfo = document.createElement("div");
                divInfo.innerText = `
                        "discountedTotal": ${cart.discountedTotal}
                        "id": ${cart.id}
                        "total": ${cart.total}
                        "totalProducts": ${cart.totalProducts}
                        "totalQuantity": ${cart.totalQuantity}
                        "userId": ${cart.userId}
            `
                cartContainer.append(divInfo)
                document.body.append(cartContainer)

                const listOfProducts = document.createElement("ol");
                for (const listOfProduct of cart.products) {
                    const li = document.createElement("li");
                    const p = document.createElement("p");
                    p.innerText = `
                    "discountPercentage": ${listOfProduct.discountPercentage}
                    "discountedTotal": ${listOfProduct.discountedTotal}
                    "id": ${listOfProduct.id}
                    "price": ${listOfProduct.price}
                    "quantity": ${listOfProduct.quantity}
                    "title": ${listOfProduct.title}
                    "total": ${listOfProduct.total}
                    `
                    const img = document.createElement("img");
                    img.src = `${listOfProduct.thumbnail}`
                    li.append(img,p)
                    listOfProducts.append(li)
                }
                cartContainer.append(listOfProducts)
            }


        });
}

// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

{
    const target = document.createElement("div");
    document.body.appendChild(target)

    fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(recipesObject => {
            const {recipes} = recipesObject
            for (const recipe of recipes) {
                // console.log(recipe)
                const containerForRecipe = document.createElement("div");
                for (const recipeKey in recipe) {
                    if (Array.isArray(recipe[recipeKey])) {
                        const titleAndList = document.createElement("div");
                        titleAndList.style.margin = "20px"

                        const title = document.createElement("h3");
                        title.innerText = `${recipeKey}:`

                        const list = document.createElement("ol");
                        const array = recipe[recipeKey];

                        for (const listItem of array) {
                            const li = document.createElement("li");
                            li.innerText = listItem
                            list.appendChild(li)
                        }
                        titleAndList.append(title, list)
                        containerForRecipe.appendChild(titleAndList)

                    } else {
                        if (recipeKey !== 'image') {
                            const div = document.createElement("div");
                            div.innerText = `${recipeKey}: ${recipe[recipeKey]}`
                            div.style.margin = "10px"
                            containerForRecipe.appendChild(div)
                        }

                    }
                }
                const img = document.createElement("img");
                img.src = recipe.image
                img.style.width = "300px"
                containerForRecipe.appendChild(img)
                target.appendChild(containerForRecipe)


            }
        });

}


// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.