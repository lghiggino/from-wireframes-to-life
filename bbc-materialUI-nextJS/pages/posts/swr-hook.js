import useSWR from 'swr'
import Image from "next/image"

const fetcher = () => 
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito").then(res => res.json())

function SwrHookPage() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  {console.log(data.drinks)}
  return (
      <>
        {data.drinks.map(drink => 
            <div key={drink.drinkId}>
                <h2>{drink.strDrink}</h2>
                <Image 
                  src={drink.strDrinkThumb} 
                  width="144"
                  height="144"
                  />
            </div>
        )}
        
      </>
    
  )
  
}

export default SwrHookPage