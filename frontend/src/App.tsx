import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function App() {
  document.title = "E-Pasar";
  return (
    <div className="App">
      <div className="p-3 px-5 shaodw-b shadow-md flex flex-row gap-x-10 items-center">
        <h3 className="text-lg font-bold text-violet-600 flex">E-Pasar</h3>
        <div className="flex border border-gray-200 rounded-md flex-auto">
          <input
            type="text"
            name="q"
            className="px-3 py-2 w-full"
            placeholder="Search..."
          />
        </div>
        <ul className="col flex flex-row gap-x-3 items-center">
          <li className="col">
            <button className="btn px-4 py-2 bg-violet-800 rounded-lg text-white font-medium">
              Sign-in
            </button>
          </li>
          <li className="col">
            <button className="btn px-4 py-2 border-2 text-violet-600 border-violet-600 rounded-lg  font-medium">
              Sign-Up
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-7 mx-16">
        {/* populer */}
        <h3 className="text-3xl text-violet-700 font-medium my-2">
          Pop<span className="text-gray-700">ular</span>
        </h3>
        <div className="flex flex-row mt-2 gap-x-2">
          <div className="flex w-48 shadow-md rounded-sm border flex-col">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              className="w-full h-44 object-cover"
            />
            <div className="p-2">
              <h3 className="text-md mt font-light">
                Pokok Sepatu (1 Pasang lainnya dijual terpisah)
              </h3>
              <h1 className="text-xl font-bold mt-2">
                <FontAwesomeIcon icon={brands("ethereum")} className="mr-2" />
                0,04
              </h1>
            </div>
          </div>
          <div className="flex w-48 shadow-md rounded-sm border flex-col">
            <img
              src="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              className="w-auto h-44 object-cover"
            />
            <div className="p-2">
              <h3 className="text-md mt font-light">Stick PS</h3>
              <h1 className="text-xl font-bold mt-2">
                <FontAwesomeIcon icon={brands("ethereum")} className="mr-2" />
                0,04
              </h1>
            </div>
          </div>
          <div className="flex w-48 shadow-md rounded-sm border flex-col">
            <img
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              className="w-auto h-44 object-cover"
            />
            <div className="p-2">
              <h3 className="text-md mt font-light">
                Pokok Sepatu (1 Pasang lainnya dijual terpisah)
              </h3>
              <h1 className="text-xl font-bold mt-2">
                <FontAwesomeIcon icon={brands("ethereum")} className="mr-2" />
                0,04
              </h1>
            </div>
          </div>
          <div className="flex w-48 shadow-md rounded-sm border flex-col">
            <img
              src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              className="w-auto h-44 object-cover"
            />
            <div className="p-2">
              <h3 className="text-md mt font-light">
                Pokok Sepatu (1 Pasang lainnya dijual terpisah)
              </h3>
              <h1 className="text-xl font-bold mt-2">
                <FontAwesomeIcon icon={brands("ethereum")} className="mr-2" />
                0,04
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
