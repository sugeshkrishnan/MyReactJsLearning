import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import ContactComp from '../Router/Contact';

const UserContext = createContext(); // not exporting as it is in same component/file
export const ThemeContext = createContext();//export is to export context to other component

function UseContextHook() {
  const [user, setUser] = useState(" sugesh");
  const [conVal, setConval] = useState(" This is from use context hook");
 
 

  return (
    <>
    <h1>Component 1</h1>
    <UserContext.Provider value={user}>// this context is used in same file
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
      
    </UserContext.Provider>
    
    <ThemeContext.Provider value={conVal}> //This is used in another component contact component
    <ContactComp conval={conVal} />
      </ThemeContext.Provider>
    </>
  );
}

function Component2() {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h3>Component 4</h3>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default UseContextHook