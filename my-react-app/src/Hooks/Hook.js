import React from 'react'
import UseStateHook from './useStateHook'
import UseeffectHook from'./useEffectHook'
import UseContextHook from './useContextHook'
import UseRefHook from './useRefHook'

function Hook(){
return(
<>
<h3>UseState Hook</h3>
<UseStateHook/>
<br/>
<p>------------------------------------------------------------------------------------</p>
<h3>Use Effect Hook</h3>
<UseeffectHook/>
<p>------------------------------------------------------------------------------------</p>
<h3>Use Context Hook</h3>
<UseContextHook/>
<p>------------------------------------------------------------------------------------</p>
<h3>Use Ref Hook</h3>
<UseRefHook/>
</>

)   

}
export default Hook
