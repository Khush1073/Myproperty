import { useLocation } from "react-router-dom";

const PropSearchDetailed = () => {
  const location = useLocation();
  const property = location.state?.property; // Access the property object
  console.log(property);

  if (!property) {
    return <p>No property details available.</p>;
  }

  return (
    <>
      <div className="visitdetailedbox">
        <div className="vib"> {/* Visit image box */}
          <div className="vib1">
            <img src={property.img} alt="Main Property"  height={300} width={400}/>
          </div>
          <div className="viball">
            <img src={property.img1} alt="Thumbnail 1" className="vibsmall" />
            <img src={property.img2} alt="Thumbnail 2" className="vibsmall" />
            <img src={property.img} alt="Thumbnail 3" className="vibsmall" />
            <img src={property.img1} alt="Thumbnail 4" className="vibsmall" />
          </div>
        </div>
        <div className="vpd" >{/* Visit property detailed */}
          <h2 className="searchcardtext">{property.spec}</h2>
          <p className="searchcardtext">Location: {property.location}</p>
          <p className="searchcardtext">Price: ₹{property.price}</p>
          <p className="searchcardtext">Details: {property.propDetailed}</p>
          <p className="searchcardtext">Room: {property.proproom}</p>
          <p className="searchcardtext">Owner: {property.ownername}</p>
          <p className="searchcardtext">Contact: {String(property.contact)}</p>
          <p className="searchcardtext">Email: {property.email}</p>

        </div>
      </div>
    </>
  );
};

export default PropSearchDetailed;
