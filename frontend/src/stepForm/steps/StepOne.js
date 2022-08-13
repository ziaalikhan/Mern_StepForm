import React from "react";
import "../../App.css";

const StepOne = ({ formData, setFormData }) => {
  return (
    <div className="form_Input_Container">
      <input
        type="text"
        value={formData.userName}
        onChange={(event) =>
          setFormData({ ...formData, userName: event.target.value })
        }
        placeholder="Enter Your User Name."
        className="form-Input"
      />
      <input
        type="email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        placeholder="Enter Your Email."
        className="form-Input"
      />
      <input
        type="password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        placeholder="Enter Your Password."
        className="form-Input"
      />
    </div>
  );
};

export default StepOne;
