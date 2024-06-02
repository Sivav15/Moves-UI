import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CustomItems = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className='flex justify-between items-center bg-[#E5E5E5] px-3 py-2 rounded'>
                <div className='flex items-center gap-2'>
                    <div className='font-bold'>Custom Items</div>
                    <div className="bg-[#EC5642] text-white text-center rounded-full h-7 w-7 flex items-center justify-center">
                        {item.items.length}
                    </div>
                </div>
                <div onClick={toggleOpen} className="cursor-pointer">
                    {isOpen ? <MdKeyboardArrowUp size={30} /> : <MdKeyboardArrowDown size={30} />}
                </div>

            </div>
            {isOpen && (
                <div className="py-2 mt-2">
                    <div className="flex flex-wrap">

                        <div className="w-64 m-1 py-2 px-5 rounded-lg shadow-lg shadow-slate-300" >
                            <h3 className="font-bold text-center">{item.units}</h3>
                            <div>
                                {item.items.map((value, index) => (
                                    <div key={index} className="flex justify-between items-center py-1">
                                        <div>
                                            <div className='font-normal'>{value.item_name}</div>

                                        </div>
                                        <div className="font-semibold">{value.item_qty}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomItems