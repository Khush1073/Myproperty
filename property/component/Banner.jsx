import { PiCityDuotone } from "react-icons/pi";
import { GrCompliance } from "react-icons/gr";
import { MdVerified } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa6";
import { BsFillHouseFill } from "react-icons/bs";
import PropertyList from "./LatestpropCard";
import Searchbox from "../component/Searchbox";

// import { RiHome2Line } from "react-icons/ri";
export const Banner = () => {
  return (
    <>
      <div className="bannerbg">
        <img src="./124918.jpg"></img>
      </div>
      <div className="bannerbox">
        <div className="bannertext">
          <span>
            <span className="bannertexthead">
              Your Trusted Real Estate Partner At MyProperty.com,
            </span>
            <br /> we simplify realestate for you. Whether you`re searching for
            your dream home,
            <br />
            selling your property, or looking for a rental, we provide a
            seamless experience to match your needs.
          </span>
          <br/>
          <span>
          <span className="bannertexthead">Why Choose MyProperty site? </span>
          <br /> Vast Listings: Discover a wide range of verified properties in
          prime locations.
          <br /> Hassle-Free Selling: List your property and connect with
          potential buyers effortlessly.
          <br /> Expert Support: Our dedicated team ensures every step of your
          journey is smooth and transparent.
          <br />
          Secure Transactions: We prioritize safety and reliability in every
          deal.
          </span>
        </div>
        {/* <div className="homeimg">
                <img src="../public/home1.jpg" className="homeimgs"></img>
            </div> */}
      </div>

      <Searchbox searchboxfooter="searchboxarea"/>

      

      <div className="infohead">Our Achivments</div>
      <div className="Compnayinfobox">
        <div className="infoicontext">
          <div className="insideinfobox">
            <PiCityDuotone className="infoicon" />
            <span>100+</span>
            <span>City</span>
          </div>
          <div className="insideinfobox">
            <GrCompliance className="infoicon" />
            <span>200+</span>
            <span>Completed Deals</span>
          </div>
          <div className="insideinfobox">
            <MdVerified className="infoicon" />
            <span>500+</span>
            <span>Listed Property</span>
          </div>
          <div className="insideinfobox">
            <FaHouseUser className="infoicon" />
            <span>150+</span>
            <span>Happy Owners</span>
          </div>
        </div>

        <div className="latestpropbox">
        <div className="proptext">
          <BsFillHouseFill size={30} />
          <h2>Recent Listed Property</h2>
        </div>
      </div>

        <div className="propcard">
          <PropertyList latestpropdetaile="property-list"/>
        </div>

      </div>
    </>
  );
};
