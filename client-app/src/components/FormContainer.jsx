import { useState } from "react";
import { toast } from "react-toastify";
import { serverUrl } from "../helpers/Constants";
import axios from "axios";

const FormContainer = ({fetchData}) => {
  const [fullUrl, setFullUrl] = useState("");

  async function onSubmitHandler(e) {
    e.preventDefault();
    try {
      // API CODE
      const response = await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl,
      });
      console.log(response);
      
      toast.success("Url Shortened");
      setFullUrl("");
      fetchData()
    } catch (error) {
        console.log(error);
        
      toast.error("Wahala");
       setFullUrl("");
    }
  }

  return (
    <div className="max-w-full mx-auto p-2">
      <div className="bg-rose-950 my-8 rounded-xl h-90">
        <h2 className="text-yellow-300 text-4xl text-center pb-4 uppercase">
          URL Shortner
        </h2>
        <p className="text-white text-center pb-2 text-xl font-extralight">
          Paste Untidy Links To Shorten
        </p>
        <p className="text-white text-center pb-4 text-sm">
          Free tool to shorten a URL or reduce link, Use our URL shortner to
          create a shortened & neat link making it easy to use.
        </p>
        <form className="" onSubmit={onSubmitHandler}>
          <div className="flex items-center  justify-center">
            <div className="relative w-[80%]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-900">
                urlshortner.link /
              </div>
              <input
                type="text"
                className="block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Add Your Link"
                required
                value={fullUrl}
                onChange={(e) => setFullUrl(e.target.value)}
              />
              <button
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                type="submit"
              >
                Shorten URL
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
