import { useState } from 'react';
import useSWR from 'swr'
import Layout2, { siteTile2 } from '../../src/DraweAndAppBarLayout'
import { Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@material-ui/core';



function SwrHookPage() {
  const [drink, setDrink] = useState(null)
  const { data, error } = useSWR(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`, fetcher)
  const [allFetchedDrinks, setAllFetchedDrinks] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    fetcher(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  }

  function fetcher(...args) {
    console.log(...args)
    fetch(...args)
      .then(res => res.json())
      .then(fetchData => {
        console.log(fetchData)
        setAllFetchedDrinks(fetchData)
        console.log(allFetchedDrinks)
      })
  }


  if (error) return <div>failed to load</div>
  if (!data) return (
    <Layout2>
      <h3>SWR HOOK TEST PAGE</h3>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={((event) => { setDrink(event.target.value) })}
          id="note-title"
          label="Type a drink name"
          variant="outlined"
          color="secondary"
          fullWidth
          required />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
        // endIcon={}
        >
          Search
        </Button>
      </form>
    </Layout2>
  )

  return (
    <Layout2>
      <h3>SWR HOOK TEST PAGE</h3>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={((e) => { setDrink(e.target.value) })}
          id="note-title"
          label="Type a drink name"
          variant="outlined"
          color="secondary"
          fullWidth
          required />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
        // endIcon={}
        >
          Search
        </Button>
      </form>

      {allFetchedDrinks &&
        allFetchedDrinks.map(drink =>
        (console.log(drink))
      )
      }

      {data.drinks.map(drink =>
        <div key={drink.drinkId}>
          <h4>{drink.strDrink}</h4>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          {/* <Image 
                  src={drink.strDrinkThumb} 
                  width="144"
                  height="144"
                  /> */}
        </div>
      )}

    </Layout2>

  )

}

export default SwrHookPage