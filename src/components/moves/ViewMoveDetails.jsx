import React from 'react'
import HouseDetails from './HouseDetails'
import InventoryDetails from './InventoryDetails'

const ViewMoveDetails = ({ move }) => {
    return (
        <div >
            <div className='my-5'>
                <div className='flex justify-between items-center'>
                    <div className='font-bold'>Additional Information</div>
                    <button className='px-2 bg-black py-2 text-white rounded'>Edit Additional Info</button>
                </div>
                <p className='text-md mt-3'>Test data </p>
            </div>
            <HouseDetails move={move} />
            <InventoryDetails move={move} />
        </div>
    )
}

export default ViewMoveDetails