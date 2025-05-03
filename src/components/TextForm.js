import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        //console.log("UpperCase was Clicked");
        let newText = text.toUpperCase(); //convert to upper case
        setText(newText); //set the text to upper case
        props.showAlert("Converted to Uppercase", "success"); //show alert
    }

    const handleLowerCaseClick = () => {
        //console.log("UpperCase was Clicked");
        let newText = text.toLowerCase(); //convert to lower case
        setText(newText); //set the text to lower case
        props.showAlert("Converted to Lowercase", "success"); //show alert
    }

    const handleClearText = () => {
        //console.log("UpperCase was Clicked");
        let newText = '' 
        setText(newText); //set the text to lower case
        props.showAlert("Text Cleared", "success"); //show alert
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox"); //get the text area
        text.select(); //select the text in the text area
        navigator.clipboard.writeText(text.value); //copy the text to clipboard
        props.showAlert("Text Copied", "success"); //show alert
    }

    const handleOnChange = (event) => {
       // console.log("On change was Clicked");
        setText(event.target.value); //we can write in the text area
    }

    

    const [text, setText] = useState(""); //State
  return (
    <>
    <div style={{color : props.mode==='dark' ? 'white' : 'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3 my-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark' ? '#042743' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-3" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
        <button className="btn btn-danger" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-secondary mx-3" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
        <h3>Your Text Summary</h3>
        <p>Your Text have {text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text: "Enter Your Text to Preview"}</p>
    </div>
    </>
    
  )
}
