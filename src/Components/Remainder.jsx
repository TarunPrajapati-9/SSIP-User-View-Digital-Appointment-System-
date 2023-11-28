import data from "../constants/appointmemt";
export default function Remainder() {
  const filteredData = data.filter(
    (item) => item.appointment_status === "Scheduled"
  );
  return (
    <div className="p-8  bg-[#f9f9f9]">
      <div className="px-4 sm:px-0 flex justify-center items-center">
        <h1 className="text-lg font-semibold leading-7 text-gray-900">
          Your Active Appointments
        </h1>
      </div>
      <div className="px-4 sm:px-0 flex justify-center items-center">
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Appointment Details and Schedule.
        </p>
      </div>
      {filteredData.map((item, index) => (
        <div
          className="h-auto w-auto bg-white rounded-md shadow-md mt-4 p-6 hover:bg-gray-100"
          key={index}
        >
          <div>
            <b>Your Aadharcard Number : </b> {item.aadharcard_no}
          </div>
          <div>
            <b>Appointment Start : </b> {item.appointment_start}
          </div>
          <div>
            <b>Appointment End : </b> {item.appointment_end}
          </div>
          <div>
            <b>Appointment Status : </b>{" "}
            <b className="text-green-500">{item.appointment_status}</b>
          </div>
          <div>
            <b>Appointment Purpose : </b> {item.appointment_purpose}
          </div>
        </div>
      ))}
    </div>
  );
}
