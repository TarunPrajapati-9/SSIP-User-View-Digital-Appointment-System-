import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import UserContext from "../context/Usercontext";
export default function User_Home() {
  let { showAlert } = useContext(UserContext);

  const cards = [
    {
      title: "How to Register an Appointment",
      desc: "Steps that you need to follow to register an appointment",
      url: "/register.png",
    },
    {
      title: "Book Appointment",
      desc: "Click here to register your appointment with your respective officer",
      url: "/book_app.png",
    },
    {
      title: "Appointment Reminder",
      desc: "Here you can see your incomplete appointments and their details",
      url: "/remainder.png",
    },
  ];

  const navigate = useNavigate();

  const step = () => {
    navigate("/step");
  };

  const book = () => {
    navigate("/set-appointment");
  };

  const remainder = () => {
    navigate("/remainder");
  };

  return (
    <>
      {showAlert && (
        <Alert
          type="success"
          message="Your Appointment Was Successfully Registered!!"
        />
      )}
      <div className="overflow-x-hidden overflow-y-hidden cursor-pointer bg-gray-50">
        <div className="flex flex-wrap -m-2">
          {cards.map((items, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-8"
              key={index}
              onClick={
                index === 0
                  ? step
                  : index === 1
                  ? book
                  : index === 2
                  ? remainder
                  : null
              }
            >
              <div className="bg-white rounded-lg shadow-lg">
                <div className="flex justify-center items-center">
                  <img
                    src={items.url}
                    alt="Card Image"
                    className="w- h-48 object-cover pointer-events-none rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{items.title}</h2>
                  <p className="text-gray-600">{items.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
