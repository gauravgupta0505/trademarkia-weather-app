import React from "react";

function TimeAndLocation() {
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight">
                    Thursday, 16 Feb 2023 | Local Time: 7:30 PM
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">Delhi, IN</p>
            </div>
        </div>
    );
}

export default TimeAndLocation;
