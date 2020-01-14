import React, { useEffect, useState } from 'react';
import Recipe from './recipe'
//import style from './app.module.css';
import { Container, Row, Button, FormControl, InputGroup, Col, Form} from 'react-bootstrap'
//import InputRange from 'react-input-range'; 
//import 'react-input-range/lib/css/index.css'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './darkmode';
import { GlobalStyles } from './global';
import NavBar from './Navbar'
const shortid = require('shortid');

require('dotenv').config()

const App = () => {
  
  const APP_ID = process.env.REACT_APP_APP_ID
  const APP_KEY = process.env.REACT_APP_APP_KEY

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&calories=0-5000`

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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <>
    <NavBar toggleTheme={toggleTheme}/>

    <Container>
      <Row className="justify-content-center">
        <Form className="col-8 flex-column" onSubmit={getSearch}>
          <InputGroup style={{marginTop: 15+'px'}}>
            <FormControl
              placeholder="Enter an ingredient on your mind..."
              aria-describedby="basic-addon2"
              type="text" value={search} onChange={updateSearch}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Row>
      <Row className="justify-content-center">
        {recipes.length === 0 ? (
          <div>
            <h3 style={{marginTop: 15+'px', fontWeight: 200}}>No recipes found please try again</h3>
          </div>
          ) : (
        recipes.map(recipe => (
          <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
            source={recipe.recipe.source} 
            url={recipe.recipe.url}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={shortid.generate()}/>
          ))
        )}
          </Row>
      </Container>
 
      </>
      </ThemeProvider>
  )

}

export default App;
