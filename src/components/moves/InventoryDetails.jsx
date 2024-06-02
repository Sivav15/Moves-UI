import React from 'react'
import InventoryItem from './InventoryItem';
import CustomItems from './CustomItems';


const InventoryDetails = ({ move }) => {

    return (
        <div>
            <div className='flex justify-between items-center my-4'>
                <div className='font-bold'>Inventory Details</div>
                <button className='px-2 bg-black py-2 text-white rounded'>Edit Inventory</button>
            </div>
            {
                move.items.inventory.map((item, key) => {
                    return <InventoryItem item={item} key={key} />
                })
            }
            <CustomItems item={move.items.customItems} />
            <div
                style={{
                    backgroundColor: "#E1E1E1",
                }}
                className="w-full h-[1.5px] mt-5"
            ></div>
        </div>
    )
}

export default InventoryDetails