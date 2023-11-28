import axios from "axios";
import { useContext, useState } from "react";
import Alert from "./Alert";
import UserContext from "../context/Usercontext";
import { useNavigate } from "react-router-dom";

export default function User_Login() {
  let navigate = useNavigate();
  let { showAlert, setShowAlert } = useContext(UserContext);
  let [aadharno, setAadharno] = useState("");
  let [otp, setOtp] = useState("");
  let [alerttype, setAlertype] = useState("");
  let [alertmessage, setAlertmessage] = useState("");
  let [data, setData] = useState("");

  const handleSetOTP = async (event) => {
    event.preventDefault();

    const aadharnoValue = aadharno;
    if (aadharnoValue.length !== 12 || aadharnoValue.length > 12) {
      setShowAlert(true);
      setAlertype("failed");
      setAlertmessage("Please Enter Valid Aadharcard Number Value");
    } else {
      setShowAlert(false);
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/citizen/login`,
        {
          adharcard: aadharnoValue, // Use the value from state
        }
      );
      setData(data);
      console.log("OTP sent successfully:", data);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    // Get the form data
    const otpValue = otp; // Get the value from state
    try {
      if (otpValue.toString() === data.otp.toString()) {
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_BACKEND_URI}/citizen/gettoken`,
            {
              adharcard: aadharno, // Use the value from state
            }
          );
          console.log(data);
          localStorage.setItem("authtoken", data.token);
          navigate("/");
        } catch (e) {
          setShowAlert(true);
          setAlertype("failed");
          setAlertmessage("Something went wrong");
        }
      } else {
        setShowAlert(false);
      }
    } catch (error) {
      setShowAlert(true);
      setAlertype("failed");
      setAlertmessage("Something went wrong");
    }
  };
  return (
    <div className="h-full w-full bg-[#ffffff] flex justify-center items-center p-5">
      <div className="h-auto w-[450px]  rounded-md shadow-md mt-5 max-[390px]:mt-24">
        <div className="bg-[#fffffe] flex justify-center items-center p-4 rounded-t-lg">
          <div className="w-[120px] h-[60px]">
            <img src="/logo.png" alt="Logo" />
          </div>
        </div>
        {showAlert && <Alert type={alerttype} message={alertmessage} />}
        <div className="p-1 bg-[#e8e8e8]">
          <div className="flex flex-col p-8">
            <div>
              <label
                id="ano"
                htmlFor="ano"
                className="block mb-2 text-sm font-medium text-black/60"
              >
                Aadharcard Number*
              </label>
              <input
                type="number"
                id="aadharno"
                value={aadharno}
                onChange={(event) => setAadharno(event.target.value)}
                maxLength="12"
                minLength="12"
                pattern="\d*"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md
                  focus:outline-[#FCBF49]  block w-full p-2"
                placeholder="Enter Your Aadharcard Number"
                required
              />
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="focus:outline-none text-black bg-[#e6c88d] p-2  font-medium rounded-lg text-sm w-40 hover:bg-[#ddad4e]"
                onClick={handleSetOTP}
              >
                Send OTP
              </button>
            </div>
            <hr className="border-t border-black mt-5 w-full" />
            <div className="mt-5">
              <label
                htmlFor="otp"
                className="block mb-2 text-sm font-medium text-black/60"
              >
                OTP*
              </label>
              <input
                type="number"
                id="otp"
                name="otp"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                maxLength="6"
                pattern="\d*"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md
                  focus:outline-[#FCBF49]  block w-full p-2"
                placeholder="Enter OTP"
                required
              />
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="focus:outline-none text-black bg-[#e6c88d] p-2  font-medium rounded-lg text-sm w-40 hover:bg-[#ddad4e]"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="mt-5">
                <label
                  id="title"
                  htmlFor="case_title"
                  className="block mb-2 text-sm font-medium text-black/60"
                >
                  Captcha*
                </label>

                <input
                  type="text"
                  id="case_title"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md
                  focus:outline-[#FCBF49]  block w-full p-2"
                  placeholder="Enter Captcha"
                  required
                />
              </div> */
}
