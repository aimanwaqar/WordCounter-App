import { useState } from 'react';
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
       setAlert ({
         msg: message,
         type : type 
       })
       setTimeout(() => {
           setAlert(null);
       }, 1500);
  }

  const removeBodyClasses=() => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'dark'){
      document.title="TextUtils - LightMode"
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled",  "success");
      // setInterval(() => {
      //   document.title = "Textutils -Light Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils Now";
      // }, 1500);
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#162e50';
      showAlert("Dark Mode has been enabled",  "success");
      // setInterval(() => {
      //   document.title = "Textutils -Dark Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils Now";
      // }, 1500);
    }
  }
  
  
    
       


  return (
   <>
   <Router>
    <Navbar title="Navbar" aboutText="About Us" mode={mode} modeChange={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert = {showAlert} heading = "Enter the text to Analyze Below " mode={mode}/>
            </Route>
      </Switch>
    </div>
   </Router>
   </>
  );
}

export default App;
