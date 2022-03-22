import react, {useContext,createContext} from 'react'
import {ThemeContext} from '../Hooks/useContextHook'

function Contact(){
    
    const contextval = useContext(ThemeContext);
    return (
        <>
<h1>This is Contact page</h1>
<h2>{`Hello ${contextval} again!`}</h2>
</>

    )


}
export default Contact