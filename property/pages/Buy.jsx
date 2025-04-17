import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../src/assets/Data.json";
import Searchbox from "../component/Searchbox";
import { SearchContext } from "../component/SearchContext";
import PropertyList from "../component/LatestpropCard";
import PropSearchDetailed from "../component/PropSearchDetailed"; // Import the detailed component

const Buy = () => {
  const { GlobalformData: contextFormData } = useContext(SearchContext); // Access formData from context
  const location = useLocation();
  const [selectedProperty, setSelectedProperty] = useState(null); // To track the clicked property

  // Determine which formData to use: from location or context
  const formData = location.state?.GlobalformData || contextFormData || {};

  // Handle button click
  const navigate = useNavigate();
  const handleclick = (property) => {
    navigate("/property-details", { state: { property } }); // Passing property as state
    console.log("Selected property:", property); // Debug log
    setSelectedProperty(property); // Set the clicked property
  };

  // Function to check if formData is empty
  const isFormDataEmpty = (data) => {
    return Object.keys(data).length === 0 || Object.values(data).every((value) => !value);
  };

  // Filter data based on formData
  const filteredData = data.filter((item) => {
    const lowerPrice = parseInt(formData.propLP || 0);
    const higherPrice = parseInt(formData.propHP || Infinity);

    return (
      item.location?.toLowerCase() === formData.city?.toLowerCase() ||
      item.propfor === formData.propfor &&
      item.proptype === formData.proptype &&
      item.proproom === formData.proproom &&
      parseInt(item.price) >= lowerPrice &&
      parseInt(item.price) <= higherPrice
    );
  });

  // Render either the property list or the detailed view
  return (
    <>
      {selectedProperty ? (
        // Show the detailed property component
        <PropSearchDetailed property={selectedProperty} />
      ) : (
        <>
          <Searchbox stysearchboxfooter="searchbox-buy"/>

          <div className="proplisthead">Your Search Property</div>

          <div className="search-pro-list-box">
            {isFormDataEmpty(formData) ? (
              <p className="propnf">We are waiting for your search</p>
            ) : (
              <>
                {filteredData.length > 0 ? (
                  filteredData.map((property, index) => (
                    <div className="promaincon" key={index}> {/* property main container */}
                      <div className="property-container">
                        {/* Search Property Images */}
                        <div className="spi">
                          {property.img1 && (
                            <img
                              src={property.img1}
                              alt={`Property Image ${index + 1}-1`}
                              className="pi1"
                            />
                          )}
                        </div>

                        {/* Search Property Details */}
                        <div className="spd">
                          <span className="spp">Price: {property.price}</span>
                          <span className="spl">Location: {property.location}</span>
                          <span className="sps">Specification: {property.spec}</span>
                          <span className="details">Detailed: {property.propDetailed}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleclick(property)} // Pass the current property to the handler
                        className="plbtn"
                      >
                        Visit
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="propnf">No matching properties found</p>
                )}
              </>
            )}
          </div>

          <div className="propcard">
            <PropertyList latestpropdetaile="property-list" />
          </div>
        </>
      )}
    </>
  );
};

export default Buy;
