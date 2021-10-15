const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
//     },
//     body: JSON.stringify({
//         name:"Chanchito Feliz",
//         website: "google.com"
//     })
// })
//     .then((response) => response.json())
//     .then(data => console.log(data))

// Esto es considerado como código imperativo, por lo cual podemos utilizar async y await, pero, en el caso de un código funcional esto no se podrá usar, es por eso que recurriremos a las promesas.
const fn = async  () => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
        },
        body: JSON.stringify({
            name:"Chanchito Feliz",
            website: "google.com"
        })
    })
    const data = await response.json()
    console.log(data);
}

fn();