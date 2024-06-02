import React, { useEffect, useState } from 'react'
import MoveItem from '../components/moves/MoveItem'
import ViewMoveDetails from '../components/moves/ViewMoveDetails';
import axios from 'axios';
import loading from '../assets/loading.svg'

const Moves = () => {
    const [moves, setMoves] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [viewMore, setViewMore] = useState({
        toggle: false,
        index: null
    })


    const handleViewItem = ({ index, toggle }) => {
        if (index === viewMore.index) {
            setViewMore({
                toggle: false,
                index: null,
            })
            return
        }
        setViewMore({
            toggle: toggle,
            index: index,
        })
    }

    useEffect(() => {
        getMoves();
    }, []);

    const getMoves = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://test.api.boxigo.in/sample-data/');

            setMoves(response.data.Customer_Estimate_Flow);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div className='flex justify-center items-center h-screen'>
        <img src={loading} className='w-10 h-10' alt="loading" />
    </div>;
    if (error) return <p>Error fetching data: {error.message}</p>;
    return (
        <div className='w-full'>
            <div className='pt-6 pb-2 font-bold text-lg sticky top-0 z-1 bg-white'>
                My Moves
            </div>
            <div className='px-3'>
                {moves.length > 0 && moves.map((move, index) => (
                    <MoveItem move={move} index={index} key={index} handleViewItem={handleViewItem} viewMore={viewMore} />
                ))}


            </div>
        </div>
    )
}

export default Moves