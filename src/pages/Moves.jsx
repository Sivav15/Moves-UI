import React from 'react'
import MoveItem from '../components/moves/MoveItem'

const Moves = () => {

    const moves = [
        {
            from: 'Ejipura, Bengaluru, Karnataka',
            to: 'HSR Layout, Bengaluru, Karnataka',
            bhk: '1 BHK',
            items: 32,
            distance: '4.8 km',
            date: 'Sep 26, 2020 at 6:18 pm',
            requestId: 'E21418',
            isFlexible: true,
        },
        {
            from: 'Ejipura Signal, 100 Feet Road, Chandra Reddy Layout, S T Bed Layout, Ejipura, Bengaluru, Karnataka',
            to: 'Ulsoor Lake, Ulsoor Lake Pathway, Rukmani Colony, Sivanchetti Gardens, Bengaluru, Karnataka',
            bhk: '3 + BHK',
            items: 82,
            distance: '8.3 km',
            date: 'Sep 16, 2020 at 7:28 pm',
            requestId: 'E41057',
            isFlexible: true,
        },
        {
            from: 'Rajajinagar Metro Station, Chord Road, West of Chord Road 2nd Stage, Nagapura, Bengaluru, Karnataka',
            to: 'HAL Old Airport Road, BDA Colony, Domlur Village, Domlur, Bengaluru, Karnataka',
            bhk: '3 BHK',
            items: 72,
            distance: '10.1 km',
            date: 'Sep 18, 2020 at 5:30 pm',
            requestId: 'E12012',
            isFlexible: false,
        },
    ];

    return (
        <div className='p-6 w-full'>
            <div className='font-bold text-lg '>
                My Moves
            </div>
            {moves.map((move, index) => (
                <MoveItem move={move} key={index} />
            ))}

        </div>
    )
}

export default Moves