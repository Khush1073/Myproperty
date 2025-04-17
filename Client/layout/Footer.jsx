
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// import ContactUS from "../pages/ContactUs";
const Footer = ()=>{
        const navigate = useNavigate(); // Hook to navigate between routes
      
        const handleClick = () => {
          navigate("/Contact"); // Navigate to the Contact Us page
        };
    return<>
     <div className="footer">
            <div className="contactinfo">
                <div className="contactbox">
                    <MdEmail /> :- myproperty@gmail.com
                </div>
                <div className="contactbox">
                    <FaPhone/> :- +917285000308
                </div>
                <div className="contactbox">
                    <RiCustomerService2Fill /> :-servicemyproperty@gmail.com
                </div>
            </div>
            <div className="contactbtnbox">
            <button className="contactbtn" onClick={handleClick}>Contact Us</button>  
            </div>
            <div className="socialmedia">
                <div className="socialbox">
                   <img src="./facebook-color-svgrepo-com.svg" className="socialicon "></img>
                   <img src="./instagram-1-svgrepo-com.svg"  className="socialicon "alt="" />
                   <img src="./whatsapp-svgrepo-com.svg"  className="socialicon "alt="" />
                </div>
            </div>
            <div className="footerlastlines">
            <span>This website own by mypropertyasset</span> 
            <span>@ll right reserved since 2020</span>
            </div>
       </div>
    </>

}

export default Footer;