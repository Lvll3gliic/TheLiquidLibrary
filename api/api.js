import axios from 'axios'



export const getCategoryList = () =>{
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(response => response.json())
        .then(data=>data.drinks)
        .catch(error => console.log(error))
    
}

export const getFullInfoById = (id) =>{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data=>data.drinks[0])
    .catch(error => console.log(error))


}