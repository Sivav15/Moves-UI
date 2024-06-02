import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const InventoryItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    const findMaterial = (item) => {
        const selectedOptions = item.type?.filter(type => type.selected).map(type => type.option);
        return selectedOptions?.join(', ');
    }

    return (
        <div className='py-1'>
            <div className='flex justify-between items-center bg-[#E5E5E5] px-3 py-2 rounded'>
                <div className='flex items-center gap-2'>
                    <div className='font-bold'>{item.displayName}</div>
                    <div className="bg-[#EC5642] text-white text-center rounded-full h-7 w-7 flex items-center justify-center">
                        {item.category.length}
                    </div>
                </div>
                <div onClick={toggleOpen} className="cursor-pointer">
                    {isOpen ? <MdKeyboardArrowUp size={30} /> : <MdKeyboardArrowDown size={30} />}
                </div>
            </div>
            {isOpen && (
                <div className="py-2 mt-2">
                    <div className="flex flex-wrap">
                        {item.category.map((category, i) => (
                            <div className="w-64 m-1 py-2 px-5 rounded-lg shadow-lg shadow-slate-300" key={i}>
                                <h3 className="font-bold text-center">{category.displayName}</h3>
                                <div>
                                    {category.items.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-1">
                                            <div>
                                                <div className='font-normal'>{item.displayName}</div>
                                                <div className='font-semibold'>
                                                    {findMaterial(item)}
                                                </div>
                                            </div>
                                            <div className="font-semibold">{item.qty}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

    )
}

export default InventoryItem