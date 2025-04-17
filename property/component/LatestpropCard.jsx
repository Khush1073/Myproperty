import { useNavigate } from "react-router-dom";
import data from "../src/assets/Data.json"; // Adjust path as needed

// eslint-disable-next-line react/prop-types
const PropertyList = ({latestpropdetaile}) => {
  const navigate = useNavigate();

  // Function to handle the click and navigate with the current property object
  const handleclick = (property) => {
    navigate("/property-details", { state: { property } }); // Use the route path
  };
  

    // Sort by `listedDate` in descending order
    const sortedProperties = [...data].sort(
      (a, b) => new Date(b.listedDate) - new Date(a.listedDate)
    );
  
    // Get the first four properties
    const topFourProperties = sortedProperties.slice(0, 10);
  
    return (
      
        <div className={latestpropdetaile}>
          {topFourProperties.map((property, index) => (
            <div key={index} className="property-card">
              <img src={property.img} alt="Property" className="propimg"/>
              <h3 className="propspec">{property.spec}</h3>
              <p className="proploac">Location: {property.location}</p>
              <p className="propprice">Price: ₹{property.price}</p>
              <p className="propbtnbox" onClick={() => handleclick(property)} ><button className="propbutton">Visit</button></p>
            </div>
          ))}
      </div>
    );
  };
  
  export default PropertyList;
  