import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import Recipes from './components/Recipes';

const API_KEY = "9998057032670cbd20ac8f682f5c5f1d";

class App extends Component {
    state = {
      recipes : []
    }
  getRecipe = async(e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=15`);
    console.log(recipeName);

    const data = await api_call.json();
    this.setState({ recipes : data.recipes });
    console.log(this.state.recipes);
  }
  // componentDidMount = () => {
  //   const json = localStorage.getItem("recipe");
  //   const recipes = JSON.parse(json);
  //   this.setState({recipes});
  // }
  // componentDidUpdate = () => {
  //   const recipes = JSON.stringify(this.state.recipes);
  //   localStorage.setItem("recipes", recipes)
  // }
  render(){
  return (
    <div className = "App">
      <header className = "App-header">
      <h1 className = "App-title">Recipe Search</h1>
      </header>
      <Form getRecipe = {this.getRecipe}/>
      <Recipes recipes = {this.state.recipes}/>
    </div>
    )
  }
}

export default App