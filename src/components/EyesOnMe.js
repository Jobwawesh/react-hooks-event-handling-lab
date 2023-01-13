// Code EyesOnMe Component Here

function EyesOnMe(){
    return(
        <div>
            <button onFocus={()=>("Good!")} onBlur={()=>("Hey! Eyes on me!")} >Eyes on me</button>
        </div>
    )
}

export default EyesOnMe
