import React, { useState, useEffect } from 'react'
import { url } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify'

const ListAlbum = () => {

    const [data, setData] = useState([]);

    const fetchAlbums = async () => {

        try {
            const response = await axios.get(`${url}/api/album/list`);
            if (response.data.success) {
                setData(response.data.album)
                // console.log( response.data.album);

            }
        } catch (error) {
            toast.error("Error Occured")
        }
    }

    const removeAlbum = async (id) => {
        try {
            const response = await axios.post(`${url}/api/album/remove`, { id });

            if (response.data.success) {
                toast.success(response.data.message);
                await fetchAlbums();
            }
        } catch (error) {
            toast.error("Error Occured");
        }

    }

    useEffect(() => {
        fetchAlbums();
    }, [])


    return (
        <div>
            <p>All Albums List :-</p>
            <br />
            <div>
                <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Description</b>
                    <b>Album Colour</b>
                    <b>Action</b>
                </div>
                {data ? data.map((item, index) => {
                    return (
                        <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                            <img className='w-12' src={item.image} alt='' />
                            <p>{item.name}</p>
                            <p>{item.desc}</p>
                            <input type='color' value={item.bgColour} />
                            <p className='cursor-pointer' onClick={() => removeAlbum(item._id)}>x</p>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default ListAlbum
