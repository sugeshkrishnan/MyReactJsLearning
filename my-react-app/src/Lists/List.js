import react from 'react'
import Car from './Car'

function List(){
    const cars= ["BMW", "Audi","Mercedes"]
    return(
        <>
        <h1>This is car list</h1>
      <ul>

         
        {cars.map((car) => <Car brand={car} />)}
      </ul>


        
        </>
    )


}
export default List