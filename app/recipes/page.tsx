'use client'
import React, { useEffect, useState } from 'react'

const RecipesPage = () => {
    const api_id = '51cf9354'
    const app_key = 'e0bba012ebf51517db53def44f58f818'
    
    const [recipes, setRecipes] = useState([])
    const [input, setInput] = useState("")
    const [query, setQuery] = useState("banana")
    
    const recipes_req = `https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${app_key}`

    useEffect(()=>{
        getRecipes()
    },[query])
    
    const getRecipes = async () => {
        const response = await fetch(recipes_req)
        const data = await response.json()
        console.log(data.hits);
        setRecipes(data.hits)      
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(input)
        setInput("")
        getRecipes()
    }

  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your query....' value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button>Search</button>
        </form>
        <h2>List of recipes</h2>
        <hr />
        <ul className='recipes-grid'>
            {recipes.map((recipe, index) =>(
                <li key={index} className='recipe-item'>
                    <h4>{recipe.recipe.label}</h4>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                    <p>Total preparation time : {recipe.recipe.totalTime}</p>
                </li>
            ))}
        </ul>
    </>
  )
}

export default RecipesPage