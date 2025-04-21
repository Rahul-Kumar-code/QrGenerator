import styles from "./navbar.module.css"
import { MdHome } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Navbar = () =>{
    return   <div className={styles.nav}>
        <div><MdHome/> Home</div>
        <div>About us <BsFillInfoCircleFill /></div>
        <div>Contact us <IoMdContact /></div>
        </div>

}
export default Navbar;