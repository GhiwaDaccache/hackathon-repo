import { useState } from "react";
import Header from "../components/Header";

const Authentication = () => {
  const [login, setLogin] = useState(false);
  const [location, setLocation] = useState("");
  const [latLong, setLatLong] = useState({ latitude: 0, longitude: 0 });

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLatLong({
            latitude: latitude,
            longitude: longitude,
          });
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            const cityName = data.locality;
            setLocation(cityName);
          } catch (error) {
            console.error("Error fetching city name:", error.message);
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <main className="w-screen h-screen bg-slate-900">
      <Header />
      <div className="container mx-auto">
        <div className="max-w-lg bg-white p-10 rounded-lg mx-auto text-center">
          <h1>Join ResQ</h1>
          <p className="mt-2">Signup or login to continue.</p>

          <form className="mt-4 flex flex-col gap-4">
            {!login && (
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded-lg outline-none focus:border-slate-900"
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-lg outline-none focus:border-slate-900"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-lg outline-none focus:border-slate-900"
            />
            {!login && (
              <button type="button" onClick={handleClick}>
                Get Location
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-white bg-blue-950 inline-block mx-auto mt-auto"
            >
              {login ? "Login" : "Signup"}
            </button>

            <a href="#" onClick={() => setLogin(!login)}>
              {login ? "New to ResQ? Join now!" : "Already a member?"}
            </a>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Authentication;
