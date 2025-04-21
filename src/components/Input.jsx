import { useState } from "react";

import styles from "./Input.module.css"
import Img from "./Qrimage";

const Input = ({handleInput,code,handleClick}) =>{
  let [createlink,setcreatelink] = useState("");

  const handlelinkchange = (e) =>{
    setcreatelink(e.target.value);
  }
  const handlebutton=()=>{
    handleClick(createlink);
    setcreatelink("");
  }

    return (
    <div className={styles.container}>
    <div className={styles.inputbox}>
    <h1>QR CODE GENERATOR</h1>
    <input className={styles.input} placeholder="Enter here" value={createlink} onChange={handlelinkchange}
    onKeyDown={handleInput}/>
    {code!=="" && <Img code={code} />}
     <div className="d-grid gap-2 col-6 mx-auto">
        <button  className="btn btn-primary" style={{backgroundColor: "#0077B6",color: "#FFFFFF"}} type="button"
        onClick={handlebutton}
        >Generate  QR Code</button>
        <button className="btn btn-primary"  style={{backgroundColor: "#0077B6",color: "#FFFFFF"}} type="button">Scan  QR Code</button>
      </div>
  </div>
  </div>
    )
}
export default Input;