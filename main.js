
/* fetch("https://pokeapi.co/api/v2/pokemon/pikach")
    .then(response => {

        if(!response.ok){
            throw new Error('not found')
        }

        return response.json()

    })
    .then(data => console.log(data.weight))
    .catch(error => console.error(error)); */


async function fetchData() {
    try{

        const pokeName = document.getElementById('pokeNAme').value.toLocaleLowerCase();


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

        if(!response.ok){
            throw new Error("DAta not found")
        }

        const data = await response.json()

        const pokeSprite = data.sprites.front_default;
        const imgEl = document.getElementById('pokeSprite')

        imgEl.src = pokeSprite
        imgEl.style.display = 'block'
    }
    catch(error){
        console.error(error)
    }
} 



