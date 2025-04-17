import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../component/SearchContext"; // Ensure correct import path

// eslint-disable-next-line react/prop-types
const Searchbox = ({ stysearchboxfooter }) => {
    const { setGlobalFormData } = useContext(SearchContext); // Access global state setter
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        city: "",
        propfor: "",
        proptype: "",
        propHP: "",
        propLP: "",
        proproom: "",
    });

    const [errors, setErrors] = useState({}); // Object to hold validation errors

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Remove errors as the user corrects them
        if (value.trim() !== "") {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.city.trim()) newErrors.city = "City is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop form submission if validation fails
        }

        // Proceed if validation passes
        setGlobalFormData(formData); // Update global state with the form data
        navigate("/buy"); // Redirect to the `Buy` page
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className={stysearchboxfooter}>
                <div className="Searchead">
                    <p className="Searchicon">
                        <FaSearch />
                    </p>
                    Find Your Property
                </div>
                <div className="searchbox">
                    <div className="searchsection1">
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="searchbar"
                            placeholder="Enter city"
                        />
                        {errors.city && <p className="error-message">{errors.city}</p>}
                    </div>
                    <div className="searchsection2">
                        <div>
                            <p>SEARCH</p>
                            <select
                                onChange={handleInputChange}
                                value={formData.propfor}
                                name="propfor"
                            >
                                <option value="">Select</option>
                                <option value="Rent">Rent</option>
                                <option value="Buy">Buy</option>
                            </select>
                            
                        </div>
                        <div>
                            <p>TYPE</p>
                            <select
                                onChange={handleInputChange}
                                value={formData.proptype}
                                name="proptype"
                            >
                                <option value="">Select</option>
                                <option value="House">House</option>
                                <option value="TownHouse">TownHouse</option>
                                <option value="Villa">Villa</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Farm">Farm</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Commercial">Commercial</option>
                                <option value="VacantLand">VacantLand</option>
                            </select>
                           
                        </div>
                        <div>
                            <p>ROOMS</p>
                            <select
                                onChange={handleInputChange}
                                value={formData.proproom}
                                name="proproom"
                            >
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="6+">6+</option>
                            </select>
                        
                        </div>
                        <div>
                            <p>PRICE RANGE</p>
                            <div className="pricerange">
                                <div>
                                    <p>Lower price</p>
                                    <input
                                        type="number"
                                        name="propLP"
                                        onChange={handleInputChange}
                                        value={formData.propLP}
                                        placeholder="Min price"
                                    />
                                </div>
                                <div>
                                    <p>Higher price</p>
                                    <input
                                        type="number"
                                        name="propHP"
                                        onChange={handleInputChange}
                                        value={formData.propHP}
                                        placeholder="Max price"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="searchbtn">Search</button>
                </div>
            </div>
        </form>
    );
};

export default Searchbox;
