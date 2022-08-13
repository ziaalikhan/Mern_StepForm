import React, { useState } from "react";
import "../App.css";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import Loader from "../components/Loader";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    country: "",
    city: "",
    number: "",
    profession: "",
    skills: [],
  });

  const pagesFunction = () => {
    if (page === 0) {
      return <StepOne formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <StepTwo formData={formData} setFormData={setFormData} />;
    } else {
      return <StepThree formData={formData} setFormData={setFormData} />;
    }
  };

  let width = page === 0 ? 10 : page === 1 ? 50 : page === 2 ? 100 : "";
  let bgColor =
    page === 0
      ? "#FF0000"
      : page === 1
      ? "#ff9a3c"
      : page === 2
      ? "#7dd87d"
      : "";

  const nextHandleBtn = () => {
    setLoading(true);

    setTimeout(() => {
      if (page === 0) {
        if (!formData.userName) {
          toast.error("Please Fill userName!");
        } else if (!formData.email) {
          toast.error("Please Fill email!");
        } else if (!formData.password) {
          toast.error("Please Fill Password!");
        } else {
          setPage(page + 1);
        }
      }
      if (page === 1) {
        if (!formData.country) {
          toast.error("Please Fill country!");
        } else if (!formData.city) {
          toast.error("Please Fill city!");
        } else {
          setPage(page + 1);
        }
      }

      setLoading(false);
    }, 2000);
  };

  const submitData = () => {
    setLoading(true);

    setTimeout(() => {
      try {
        if (!formData.profession) {
          toast.error("Please Fill profession!");
        } else if (!formData.skills) {
          toast.error("Please Fill skills!");
        } else {
          axios.post("/user", formData);
          toast.success("SuccessFully Posted!");
          navigate("/users");
        }
      } catch (error) {
        toast.error(error.message);
      }
      console.log(formData);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className="form-Container">
        <h1 className="heading">Multi-Step Form</h1>
        <div className="progressBar_Container">
          <div
            style={{
              backgroundColor: bgColor,
              width: `${width}%`,
              height: 17,
              borderRadius: 3,
            }}
          >
            <p className="progress_width">{width}%</p>
          </div>
        </div>
        {pagesFunction()}
        <div className="btn_container">
          <button disabled={page === 0} onClick={() => setPage(page - 1)}>
            Previos
          </button>
          {page < 2 ? (
            <>
              {!loading ? (
                <button disabled={page === 2} onClick={nextHandleBtn}>
                  Next
                </button>
              ) : (
                <button className="loader_btn">
                  <Loader />
                </button>
              )}
            </>
          ) : (
            <>
              {!loading ? (
                <button onClick={submitData}>Submit</button>
              ) : (
                <button className="loader_btn">
                  <Loader />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
