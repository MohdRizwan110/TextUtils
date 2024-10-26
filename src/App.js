// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React ,{useState} from 'react';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not.
  const [alert , setAlert] = useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","Success");
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","Success");
  
  }
};
  return (
    <>
    <Router>
    

<Alert alert={alert} />
<Navbar title = "TextUtils" about="About"  mode={mode} toggleMode={toggleMode} />
{/* <Navbar title = "TextUtils" aboutText="About"  /> */}
< div className="container my-3">
<Routes>
  <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />}/>
  <Route path="/about" element={<About/>} />
</Routes>



   </div>
   </Router>
    </>
  );
}
export default App;
