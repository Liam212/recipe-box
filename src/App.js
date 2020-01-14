import React, { useEffect, useState } from 'react';
import Recipe from './recipe'
import style from './app.module.css';
import { Container, Row, Button, FormControl, InputGroup} from 'react-bootstrap' 
require('dotenv').config()

const App = () => {
  
  const APP_ID = process.env.REACT_APP_APP_ID
  const APP_KEY = process.env.REACT_APP_APP_KEY

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  useEffect(() => {
    fetchRecipes()
  }, [query])

  const fetchRecipes = async () => {
    const response = await fetch (URL)
    const data = await response.json();
    console.log(data.hits)
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  } 

  return (
    <div>
    <Container>
      <div>
        <form onSubmit={getSearch}>
          <InputGroup className="col-6" style={{marginTop: 15+'px'}}>
            <FormControl
              placeholder="Enter an ingredient on your mind..."
              aria-describedby="basic-addon2"
              type="text" value={search} onChange={updateSearch}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
      </div>
      <Row className="justify-content-center">
        {recipes.map(recipe => (
          <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={recipe.recipe.label}/>
        ))}
        </Row>
      </Container>
    </div>
  )

}

export default App;
