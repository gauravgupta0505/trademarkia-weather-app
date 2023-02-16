import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    type="text"
                    placeholder="Search for city..."
                    className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
                />
                <UilSearch
                    size={25}
                    className="text-white cursor-pointer transition ease-out opacity-95 hover:scale-125 hover:opacity-100 hover:text-stone-200"
                />

                <UilLocationPoint
                    size={25}
                    className="text-white cursor-pointer transition ease-out opacity-95 hover:scale-125 hover:opacity-100"
                />

                <div className="flex flex-row w-1/4 items-center justify-center">
                    <button
                        size={25}
                        name="metric"
                        className="text-xl text-white font-light transition ease-out opacity-95 hover:scale-125"
                    >
                        °C
                    </button>
                    <p className="text-xl text-white mx-1">|</p>
                    <button
                        size={25}
                        name="imperial"
                        className="text-xl text-white font-light transition ease-out opacity-95 hover:scale-125"
                    >
                        °F
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Inputs;
