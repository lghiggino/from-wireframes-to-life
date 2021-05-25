import { useState } from 'react';
import useSWR from 'swr'
import Image from "next/image"
import Layout from '../../components/layout';
import { Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@material-ui/core';





function SwrHookPage() {
  const { data, error } = useSWR('/api/user', fetcher)
  const [title, setTitle] = useState(null)

  function handleSubmit(e){
    e.preventDefault()
    console.log(title)
  }

  function fetcher () { 
   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${title}`).then(res => res.json())
  }

  if (error) return <div>failed to load</div>
  if (!data) return (
    <Layout>
        <h3>SWR HOOK TEST PAGE</h3>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange ={((e) => {setTitle(e.target.value)})}
          id="note-title" 
          label="Type a drink name" 
          variant="outlined" 
          color="secondary" 
          fullWidth 
          required/>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          // endIcon={}
          >
            Search
          </Button>
      </form>
    </Layout>
  )

  
  {console.log(data.drinks)}
  return (
      <Layout>
        <h3>SWR HOOK TEST PAGE</h3>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange ={((e) => {setTitle(e.target.value)})}
          id="note-title" 
          label="Type a drink name" 
          variant="outlined" 
          color="secondary" 
          fullWidth 
          required/>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          // endIcon={}
          >
            Search
          </Button>
      </form>

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
        
      </Layout>
    
  )
  
}

export default SwrHookPage