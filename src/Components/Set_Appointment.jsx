import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Set_Appointment() {
  const navigate = useNavigate();

  const showMessage = async (event) => {
    event.preventDefault();

    try {
      let token = localStorage.getItem("authtoken");
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/citizen/setappointment`,
        {
          ap_purpose: document.getElementById("app_type").value,
        },
        {
          headers: {
            authToken: token,
          },
        }
      );
      navigate("/");
      console.log("OTP sent successfully:", data);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <>
      <div className="h-full w-full bg-white flex justify-center items-center p-5 rounded-lg">
        <div className="h-auto w-full  rounded-md shadow-md">
          <div className="bg-gray-50 p-4  rounded-t-md text-center">
            <div className="w-[160px] h-[160px] mx-auto">
              <img src="/request.png" alt="Logo" />
            </div>
            <p className="mt-2 text-xl">Request Appointment</p>
          </div>
          <div className="p-1 bg-gray-200 rounded-b-lg">
            <form>
              <div className="flex flex-col p-8">
                {/*<div>
                  <label
                    htmlFor="ano"
                    className="block mb-2 text-sm font-medium text-black/60"
                  >
                    Aadharcard Number
                  </label>
                  <input
                    type="text"
                    id="aadharno"
                    name="aadharno"
                    value="899098877656"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md
                  focus:outline-[#FCBF49]  block w-full p-2"
                    placeholder="Enter Your Aadharcard Number"
                    disabled
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="Mobile Number"
                    className="block mb-2 text-sm font-medium text-black/60"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    id="mn"
                    name="mn"
                    value="9767723422"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md
                  focus:outline-[#FCBF49]  block w-full p-2"
                    placeholder="Enter Your Aadharcard Number"
                    disabled
                  />
                </div>{" "}
                */}
                <div className="flex mt-4">
                  <div className="w-full max-[390px]:w-1/2">
                    <label
                      htmlFor="app_type"
                      className="block mb-2 text-sm font-medium text-black/60"
                    >
                      Appointment Type*
                    </label>
                    <select
                      id="app_type"
                      name="app_type"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md
                  focus:outline-[#FCBF49] block p-2 w-full"
                    >
                      <option disabled>Select Appointment Type</option>
                      <option value="Inquiry">Inquiry</option>
                      <option value="Complain">Complain</option>
                      <option value="Verification">Verification</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                {/* <div className="pl-4 w-1/2 max-[390px]:w-1/2">
                    <label
                      htmlFor="Off_Type"
                      className="block mb-2 text-sm font-medium text-black/60"
                    >
                      Officer Type*
                    </label>
                    <select
                      id="officer_type"
                      name="officer_type"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md
                  focus:outline-[#FCBF49] block p-2 w-full"
                    >
                      <option disabled>Select Officer Type</option>
                      <option value="District Magistrate(Collector)">
                        District Magistrate(Collector)
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="Reason"
                    className="block mb-2 text-sm font-medium text-black/60"
                  >
                    Reason for Appointment*
                  </label>
                  <textarea
                    id="appointment_desc"
                    name="appointment_desc"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md
                  focus:outline-[#FCBF49]  block w-full p-2 resize-none"
                    placeholder="Enter Reason"
                  />
                </div> */}
                <div className="flex mt-10 justify-center">
                  <button
                    type="submit"
                    className="focus:outline-none text-black bg-[#FCBF49] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-72 hover:bg-[#ddad4e] max-[390px]:w-36"
                    onClick={showMessage}
                  >
                    Request Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
