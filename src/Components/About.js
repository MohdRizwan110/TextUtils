import React , {useState} from 'react'

export default function About() {

    const [myStyle , setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })
    const [btntext, setBtnText] = useState("Enable Light mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid white'
                
            })
            setBtnText("Enable Dark mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid black'

            })
            setBtnText("Enable Light mode")
        }
    
    }

    // let myStyle=
  return (
    <>
    <div className='container' style={myStyle}>
        <h1 className="my-3" >About us</h1>
                <div className="accordion" id="accordionExample" style={myStyle} >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                Analyze the Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils is a comprehensive tool designed to facilitate the analysis of written content. It empowers users—be they students, educators, writers, or researchers—to delve deeper into texts by examining various elements and extracting meaningful insights. The tool is equipped to analyze different types of text, from literary works to academic articles, and offers features such as:
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                Free to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils is a user-friendly and accessible tool designed to help individuals analyze and understand written content with ease. Whether you’re a student, educator, writer, or simply a literature enthusiast, TextUtils provides valuable insights into various texts—completely free of charge.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils is a versatile and powerful text analysis tool designed to enhance your understanding of written content, all while being fully compatible with modern web browsers. Whether you’re using Chrome, Firefox, Safari, or any other popular browser, TextUtils provides a seamless and user-friendly experience without the need for downloads or installations.
                <br />
                Key Features: <br />
                1. Accessible Anytime, Anywhere: With browser compatibility, you can access TextUtils from any device—desktop, laptop, tablet, or smartphone—allowing for flexible use wherever you are.  <br />
                2. Intuitive Interface: The tool offers an easy-to-navigate interface that works smoothly across different browsers, ensuring a consistent experience.
                </div>
                </div>
            </div>
            </div>
            <div className="container">
            <button onClick={toggleStyle} type="button"   className="btn btn-primary  my-1" >{btntext}</button>
            </div>
    </div>
    </>
  )
}
