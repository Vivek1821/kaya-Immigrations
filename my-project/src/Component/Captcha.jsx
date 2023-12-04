import React, { useState, useEffect } from "react";

function Captcha() {
  const [user, setUser] = useState({
    username: "",
  });
  const characters = "abc123";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const captcha = generateString(6);

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    var element = document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
    element.style.cursor = "wait";
    element.innerHTML = "Checking...";
    inputData.disabled = true;
    element.disabled = true;
    var myFunctions = function () {
      if (captcha === user.username) {
        element.style.backgroundColor = "green";
        element.innerHTML = "Captcha Verified";
        element.disabled = true;
        element.style.cursor = "not-allowed";
        inputData.style.display = "none";
      } else {
        element.style.backgroundColor = "red";
        element.style.cursor = "not-allowed";
        element.innerHTML = "Not Matched";
        element.disabled = true;

        var myFunction = function () {
          element.style.backgroundColor = "#007bff";
          element.style.cursor = "pointer";
          element.innerHTML = "Verify Captcha";
          element.disabled = false;
          inputData.disabled = false;
          inputData.value = "";
        };

        setTimeout(myFunction, 5000);
      }
    };

    setTimeout(myFunctions, 5000);
  };

  return (
    <div className="container">
      <h4 className="text-center mt-4 text-info">
        <b> Validate Captcha using REACT JS</b>
      </h4>
      <div className="row mt-4">
        <div className="col-md-4"></div>

        <div className="col-md-8">
          <div
            id="captcha"
            style={{
              marginTop: "162px",
              marginLeft: "25px",
              position: "absolute",
            }}
          >
            {captcha}
          </div>

          <div className="form-group row">
            <input
              type="text"
              id="inputType"
              className="form-control"
              placeholder="Enter Captcha"
              name="username"
              onChange={handleChange}
              autoComplete="off"
              style={{ width: "100%", margin: "2px" }}
            />
            <button
              type="button"
              id="succesBTN"
              onClick={onSubmit}
              className="btn btn-primary ml-1"
            >
              Verify Captcha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Captcha;
