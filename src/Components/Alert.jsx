/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import UserContext from "../context/Usercontext";

export default function Alert(props) {
  let { showAlert, setShowAlert } = useContext(UserContext);
  const { type, message } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  let alertClasses = "";
  let iconSrc = "";

  switch (type) {
    case "success":
      alertClasses = "bg-green-100 border-t-4 border-green-500";
      iconSrc = "/success-2.svg";
      break;
    case "warning":
      alertClasses = "bg-yellow-100 border-t-4 border-yellow-500";
      iconSrc = "/warning.png";
      break;
    case "failed":
      alertClasses = "bg-red-100 border-t-4 border-red-500";
      iconSrc = "/failed.png";
      break;
    default:
      alertClasses = "bg-blue-100 border-t-4 border-blue-500";
      iconSrc = "/info.png";
  }

  return (
    showAlert && (
      <div
        className={`rounded-b text-gray-900 px-4 py-3 shadow-md relative ${alertClasses}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="py-1 w-8 h-8">
              <img src={iconSrc} alt={type} />
            </div>
            <div className="ml-2 p-2">
              <p className="text-sm">{message}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => setShowAlert(false)}
              className="text-blue-500 hover:text-blue-700 focus:outline-none focus:text-blue-700"
            >
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 8.586l4.293-4.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  );
}
