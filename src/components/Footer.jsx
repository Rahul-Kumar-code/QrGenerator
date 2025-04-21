import { FaRegCopyright } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { FaCircleInfo } from "react-icons/fa6";
const Footer = () =>{
    return (
        <div style={{backgroundColor: "#264653",color:"#CED4DA", height: "7.8vh", display: "flex", justifyContent: "space-around",alignItems: "center", fontWeight: "500",cursor: "pointer" }}>
        <div>Copyrights <FaRegCopyright /></div>
        <div><VscFeedback />  Feedback</div>
        <div>More Info <FaCircleInfo /></div>
        </div>
    )
}
export default Footer;