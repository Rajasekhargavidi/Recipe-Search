import React from 'react'

const Form = props => {
    return (
        <form onSubmit = {props.getRecipe} style = {{ marginBottom : "2rem" }}>
        <input type = "text" name = "recipeName" className = "form__input"/>
        <button>Search</button>
        </form>
    )
}

export default Form