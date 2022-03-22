

function Child(props){
    return (
        <>
<div style={{backgroundColor: "yellow", width:"400px", height:"200px" }}>
<h1>
    Child
</h1>
<button onClick={()=> props.changetextProp("Child")}> click to change parent text</button>

</div>
</>

    )


}
export default Child