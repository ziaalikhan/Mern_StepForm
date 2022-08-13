import React, { useState } from "react";
import "../../App.css";
import Select from 'react-select';

const styles = {
  container: (styles) => {
    return {
      ...styles,
      backgroundColor: '',
      width: "70%",
      border:"2px solid blue",
      borderRadius: "10px"
    };
  },
  input: (styles) => {
    return {
      ...styles,
      // backgroundColor: 'papayawhip',
      width: "70%",
      height: "35px",
      
    };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: 'papayawhip',
      border: 'none',
    };
  },

  menuList: (styles) => {
    return {
      ...styles,
      display: 'flex',
      gap: '15px',
      padding: '10px',
      backgroundColor: 'blue',
      flexWrap: "wrap"
    };
  },

  multiValueLabel: (styles) => {
    return {
      ...styles,
      // display: 'flex',
      backgroundColor: 'white',
    };
  },

  option: (styles) => {
    return {
      ...styles,
      // display: 'flex',
      width: '70px',
      color: 'black',
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '20px',
      fontSize: '12px',
    };
  },

  valueContainer: (styles) => {
    return {
      ...styles,
      // display: 'flex',
      backgroundColor: 'white',
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      // display: 'flex',
      backgroundColor: 'white',
    };
  },
  dropdownIndicator: (styles) => {
    return {
      ...styles,
      // display: 'flex',
      backgroundColor: 'white',
    };
  },
  menuPortal: (styles) => {
    return {
      ...styles,
      // display: 'flex',
      backgroundColor: 'red',
    };
  },
};

const StepThree = ({ formData, setFormData }) => {
  const [selectedOptions, setSelectedOptions] = useState();

  const optionList = [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'blue', label: 'Blue' },
    { value: 'white', label: 'White' },
  ];

  function handleSelect(data) {
    // setSelectedOptions(data);
    setFormData({...formData, skills: data});
    setSelectedOptions(data);
    console.log("data=>", data)
    console.log("selectedOptions==>", selectedOptions);
  }

  // console.log(selectedOptions);
  return (
    <div className="form_Input_Container">
      <input
        type="text"
        value={formData.profession}
        onChange={(event) =>
          setFormData({ ...formData, profession: event.target.value })
        }
        placeholder="Enter Your Profession."
        className="form-Input"
      />
      {/* <input
        type="text"
        value={formData.skills}
        onChange={(event) => setFormData({...formData, skills: event.target.value})}
        placeholder="Enter Your skills."
        className="form-Input"
      /> */}
      <div className="multi_Select">
      <Select
        styles={styles}
        options={optionList}
        placeholder="Select Skills"
        value={selectedOptions}
        onChange={handleSelect}
        isSearchable={true}
        multiValueRemove={false}
        isMulti
      />
      </div>
    </div>
  );
};

export default StepThree;
