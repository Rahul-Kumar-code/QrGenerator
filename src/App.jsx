import Navbar from './components/Navbar';
import './App.css'
import Input from './components/Input';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  let [link,setLink] = useState("");
const handleInput = (e) =>{
  if(e.key==="Enter"){
    let newlink = e.target.value;
    e.target.value="";
    setLink(newlink);
  }
}
  const handlebutton = (addlink) =>{
    let newlink = addlink;
    setLink(newlink);
}
  return (
    <>
    <Navbar/>
    <Input code = {link} handleClick={handlebutton} handleInput={(e)=>handleInput(e)}/>
    <Footer/>
    </>
  )
}
export default App;
