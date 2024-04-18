// Assets
import map from "../../assets/map.png";
import app_store from "../../assets/appstore.png"
import google_play from "../../assets/googleplay.png"

const Landing = () => {
  return (
    <>
      <section className="bg-slate-900 min-h-screen">
        <img src={map} className="w-full h-full absolute top-0 left-0 z-0 opacity-50" />

        <div className="relative container text-white ml-auto z-10 max-w-lg flex flex-col gap-4 -translate-y-20">
          <h1 className="text-5xl font-bold">
            Disaster Prevention App
          </h1>
          <p>Delivering the most appropriate information at the fastest level.</p>
          <div className="flex gap-4">
            <img src={app_store} alt="App Store" className="w-40" />
            <img src={google_play} alt="Google Play" className="w-40" />
          </div>
        </div>

        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full absolute bottom-0 left-0 -scale-y-100"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-white"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Landing;
