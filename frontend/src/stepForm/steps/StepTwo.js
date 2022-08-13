import React from "react";
import "../../App.css";

const StepTwo = ({ formData, setFormData }) => {
  return (
    <div className="form_Input_Container">
      <input
        type="text"
        value={formData.country}
        onChange={(event) =>
          setFormData({ ...formData, country: event.target.value })
        }
        placeholder="Enter Your Country."
        className="form-Input"
      />
      <input
        type="text"
        value={formData.city}
        onChange={(event) =>
          setFormData({ ...formData, city: event.target.value })
        }
        placeholder="Enter Your City."
        className="form-Input"
      />
      <input
        type="number"
        value={formData.number}
        onChange={(event) =>
          setFormData({ ...formData, number: event.target.value })
        }
        placeholder="Enter Your Mobile Number."
        className="form-Input"
      />
    </div>
  );
};

export default StepTwo;
