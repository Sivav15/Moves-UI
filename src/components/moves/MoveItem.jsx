import React from "react";
import {
    FaHome,
    FaBox,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaCheckSquare,
    FaExclamationTriangle,
    FaPencilAlt,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import ViewMoveDetails from "./ViewMoveDetails";
const MoveItem = ({ move, handleViewItem, viewMore, index }) => {
    return (
        <div className="bg-white my-4" key={index}>
            <div className="flex items-center w-full flex-wrap ">
                <div className="w-4/12">
                    <div className="text-md text-black font-bold">From</div>
                    <div className="text-sm font-normal">{move.moving_from}</div>
                </div>
                <div className="w-2/12 flex justify-center">
                    <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg focus:outline-none">
                        <FaArrowRightLong color="#EC5642" size={18} />
                    </button>
                </div>
                <div className="w-4/12">
                    <div className="text-md text-black font-bold">To</div>
                    <div className="text-sm font-normal">{move.moving_to}</div>
                </div>
                <div className="w-2/12 flex justify-center">
                    <div>
                        <div className="text-md text-black font-bold">Request#</div>
                        <div className="font-semibold text-red-500">{move.estimate_id}</div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-8 flex-wrap ">
                <div className="flex items-center text-sm">
                    <FaHome className="mr-2" color="#EC5642" size={20} />{" "}
                    {move.property_size}
                </div>
                <div className="flex items-center text-sm">
                    <FaBox className="mr-2" color="#EC5642" size={18} />{" "}
                    {move.total_items}
                </div>
                <div className="flex items-center text-sm">
                    <FaMapMarkerAlt className="mr-2" color="#EC5642" size={18} />{" "}
                    {move.distance}
                </div>
                <div className="flex items-center text-sm">
                    <FaCalendarAlt className="mr-2" color="#EC5642" size={18} />{" "}
                    {move.moving_on}
                    <FaPencilAlt className="ml-2" size={14} />
                </div>
                {move.move_date_flexible && (
                    <div className="flex items-center text-sm">
                        <FaCheckSquare className="mr-2" color="#EC5642" size={18} />
                        Is flexible
                    </div>
                )}
                <div>
                    <button
                        className="ml-4 px-2 py-1.5 rounded"
                        style={{
                            border: "2px solid #EC5642",
                            color: "#EC5642",
                        }}
                        onClick={() => handleViewItem({ toggle: true, index })}
                    >
                        View move details
                    </button>
                    <button
                        className="ml-2 text-white px-2 py-1.5  rounded"
                        style={{
                            backgroundColor: "#EC5642",
                        }}
                    >
                        Quotes Awaiting
                    </button>
                </div>
            </div>

            <div className="flex text-sm mt-5">
                <FaExclamationTriangle className="mr-1" color="#EC5642" size={18} />{" "}
                <span className="pl-2">
                    <span className="font-semibold">Disclaimer:</span> Please update your
                    move date before two days of shifting
                </span>
            </div>
            {viewMore.toggle && viewMore.index === index ? null : <div
                style={{
                    backgroundColor: "#E1E1E1",
                }}
                className="w-full h-[1.3px] mt-5"
            ></div>
            }

            <div className={`transition-all duration-500 `}>
                {viewMore.toggle && viewMore.index === index && <ViewMoveDetails move={move} />}
            </div>
        </div>
    );
};

export default MoveItem;
