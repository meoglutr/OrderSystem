import React, { useEffect, useState } from "react";
import Orders from "./Components/Orders";
import Preview from "./Components/Preview";

function App() {
  const [request, setRequest] = useState({});
  const [product, setProduct] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  const handleButtonClick = () => {
    const form = document.getElementById("myForm");
    const formData = new FormData(form);
    const newRequest = {};
    formData.forEach((element, key) => {
      newRequest[key] = element;
    });
    setRequest(newRequest);
    setButtonClick(true);
  };

  const ordersData = (newProduct) => {
    setProduct(newProduct);
  };

  const [currentTime, setCurrentTime] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Gerçek zamanı al
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const availableTimes = [
    "09.00",
    "09.30",
    "10.00",
    "10.30",
    "11.00",
    "11.30",
    "12.00",
    "12.30",
    "13.00",
    "13.30",
    "14.00",
    "14.30",
    "15.00",
    "15.30",
    "16.00",
    "16.30",
    "17.00",
  ].filter((time) => time > currentTime);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-6 border rounded-xl bg-white shadow-lg">
    {!buttonClick ? (
      <form id="myForm" className="grid grid-cols-1 gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 text-sm">
            Adınız
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="surname" className="text-gray-700 text-sm">
            Soyadınız
          </label>
          <input
            type="text"
            name="surname"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 text-sm">
            Telefon No
          </label>
          <input
            type="text"
            name="phone"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 text-sm">
            Teslim Alacağınız Saat
          </label>
          <select
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="teslimSaati"
            onChange={handleTimeChange}
            value={selectedTime}
          >
            <option value="">Saat Seçiniz</option>
            {availableTimes.map((time, index) => (
              <option value={time} key={index}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </form>
    ) : (
      <Preview product={product} request={request} />
    )}
    {!buttonClick && <Orders ordersData={ordersData} />}
    <div className="flex justify-center mt-4">
      <button
        onClick={handleButtonClick}
        className={`bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${buttonClick ? 'hidden' : ''}`}
      >
        Siparişi Tamamla
      </button>
    </div>
  </div>
</div>

  
  );
}

export default App;
