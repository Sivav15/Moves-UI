import React from 'react'

const HouseDetails = ({ move }) => {
    return (
        <div className='my-5'>
            <div className='flex justify-between items-center '>
                <div className='font-bold'>House Details</div>
                <button className='px-2 bg-black py-2 text-white rounded'>Edit House Details</button>
            </div>
            <div className='text-[#EC5642] font-semibold my-3'>
                Existing House Details
            </div>
            <div className='flex flex-wrap'>
                <div className='w-96'>
                    <div className='font-semibold'>
                        Floor No
                    </div>
                    <div>
                        {move.old_floor_no}
                    </div>
                </div>
                <div className='w-96'>
                    <div className='font-semibold'>
                        Elevator Available
                    </div>
                    <div>
                        {move.old_elevator_availability}
                    </div>
                </div>
                <div className='w-96'>
                    <div className='font-semibold'>
                        Distance from Elevator / Staircase to truck
                    </div>
                    <div>
                        {
                            move.old_parking_distance
                        }
                    </div>
                </div>
            </div>
            <div className='text-[#EC5642] font-semibold my-3'>
                New House Details
            </div>
            <div className='flex flex-wrap'>
                <div className='w-96'>
                    <div className='font-semibold'>
                        Floor No
                    </div>
                    <div>
                        {move.new_floor_no}
                    </div>
                </div>
                <div className='w-96'>
                    <div className='font-semibold'>
                        Elevator Available
                    </div>
                    <div>
                        {
                            move.new_elevator_availability
                        }
                    </div>
                </div>
                <div className='w-96'>
                    <div className='font-semibold'>
                        Distance from Elevator / Staircase to truck
                    </div>
                    <div>
                        {
                            move.new_parking_distance
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HouseDetails