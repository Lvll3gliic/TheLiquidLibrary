


export const getCategoryList = async () =>{
        try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        const data = await response.json()
        return data.drinks
    } catch (error) {
        return console.log(error)
    }
    
}

export const getFullInfoById = async (id) =>{
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.json()
        return data.drinks[0]
    } catch (error) {
        return console.log(error)
    }
}

export const getRandomDrink = async () =>{
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const data = await response.json()
        return data.drinks[0]
    } catch (error) {
        return console.log(error)
    }
}
export const getCocktailsByName = async (name) =>{
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        const data = await response.json()
        return data.drinks
    } catch (error) {
        return console.log(error)
    }
}

export const getCocktailsByCategory = async (category) =>{

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        const data = await response.json()
        return data.drinks
    } catch (error) {
        return console.log(error)
    }
}