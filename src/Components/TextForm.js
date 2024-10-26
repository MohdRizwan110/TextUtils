import React, {useState  } from 'react'


function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase", "success");
    }
    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
 //// Lowercase
    
 const handleLoClick =()=>{
    // console.log("lowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lowerCase", "success")
}

const handleClearClick =()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared Text", "success")
}

const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy Text", "success")
}

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}

/////// Download Text

const handleDownload = () => {
  // Create a text file
  const text = 'Hello, this is a sample text file.';
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sample.txt'; // Set the filename

  // Append to the document and trigger download
  document.body.appendChild(link);
  link.click();
  props.showAlert("Download to the Text", "success")

  // Clean up and remove the link
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  
};





// const CapitalizedText = (props) => {
//     let newText = text.props.children.slice(0,1).toUpperCase() + props.children.slice(1, props.children.length);
//     setText(newText);
// }

    const [text, setText] = useState("Enter text here");


  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea class="form-control" value={text} onChange={handleOnChange }  style={{backgroundColor:props.mode ==='dark'? 'gray':'white', color:props.mode ==='dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text </button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
      <button className="btn btn-primary mx-1" onClick={handleDownload}>Download Text </button>
      {/* <button className="btn btn-primary mx-1" onClick={capitalize}>Capitalize Text </button> */}

    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'? 'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes Read</p>
        
        <h2 >Preview </h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it."}</p>
    </div>
    
    </>
  )
}

export default TextForm
