import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ( ) => {
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to Uppercase", "success");

  }
  const handleLowClick = ( ) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
 }
  const handleOnChange = ( event) => {
    setText(event.target.value);
 }
 const Clear = () => {
    setText("");
 }
 const handleCopyText = ( ) => {
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to clipboard", "success");

}

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("removed extraspaces", "success");

}




  const [text, setText] = useState('Enter Text Here');  
//   setText("new text"); //correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{background : props.mode === 'dark'?'#13466e': 'white',color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
        <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-1"  onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-1"  onClick={handleCopyText}>Copy</button>
        <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-1"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-1"  onClick={Clear}>Clear Text</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}} >
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length } Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Previes"}</p>
    </div>
    </>
  )
}
 

//  