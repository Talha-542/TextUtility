import { useState } from "react";



export default function TextForm(props) {
  const handleUPclick = ()=>{
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showalert('Converted to uppercase','success')
  }
  const handleLowclick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showalert('Converted to lowercase','success')
  }

  const cleartext = ()=>{
    console.log("Clearwas clicked" );
    let newtext = ("");
    setText(newtext)
    props.showalert('Text Cleared','success')
  }

  const clipboard = ()=>{
      console.log("Copy to clipboard was clicked");
      navigator.clipboard.writeText(text)
      props.showalert('Copied to Clipboard','success')
       
      }

      const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showalert('Text Modified','success')
   }


   const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert('Extra Spaces are removed','success')
}
  const handleONchange = (event)=>{
    console.log("On change was clicked");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  
  return (
    <>
    <div className="container">
    <h1 >{props.heading} </h1>
  <div className="mb-3">
  <textarea  className="form-control"
  value={text}
  onChange={handleONchange}
  // style={{ backgroundColor: props.Mode === 'dark' ? 'grey' : 'white' }}
  id="My Box"  rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-1 my-2 ' onClick={handleUPclick}>Convert to Uppercase</button>
  <button className='btn btn-primary mx-2 my-2 ' onClick={handleLowclick}>Convert to Lowercase</button>
  
  <button className='btn btn-primary mx-2 my-2 ' onClick={clipboard}>Copy to Clipboard</button>
  <button className='btn btn-primary mx-2 my-2 ' onClick={handleCapitalize}>Capitalize</button>
  <button className='btn btn-primary mx-2 my-2 ' onClick={handleExtraSpace}>Remove Extra Spaces</button>
  <button className='btn btn-primary mx-2 my-2 ' onClick={cleartext}>Clear Text</button>
  </div>
  <div className="Container my-2">
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length-1 } words and {text.length} characters</p>
  <p>{0.008*text.split (" ").length}Minutes to Read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:'Enter your text'}</p>

  </div></>

  );
}
