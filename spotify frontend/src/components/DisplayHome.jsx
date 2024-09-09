import React, { useContext } from 'react'
import Navbar from './Navbar'
// import { albumsData, songsData } from '../assets/frontend-assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

    const { songsData, albumsData } = useContext(PlayerContext);
    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Chart</h1>
                <div className='flex overflow-auto'>
                    {albumsData ? albumsData.map((item, index) => (<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />)) : null}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                    {songsData ? songsData.map((item, index) => (<SongItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />)) : null}
                </div>
            </div>
        </>
    )
}

export default DisplayHome