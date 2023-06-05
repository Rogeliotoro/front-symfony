import React, { useEffect, useState } from 'react';


const Podcast = () => {
    const [podcasts, setPodcasts] = useState([]);

    const getPodcast = async () => {
        try {
            const userRes = await fetch("http://127.0.0.1:8000/api/podcast", {
                method: "GET",
                
            });
            const datosPodcast = await userRes.json();
            setPodcasts(datosPodcast);
        } catch (error) {
            console.log(error);
        }
    };
   
    useEffect(() => {
        getPodcast();
    }, []);

    return (
        <div className='margin'>
            <h2>Podcast</h2>
            <div className='espacio'></div>
            <table className="table table-bordered table-hover table-sm">
                <thead >
                    <tr >
                        <th>id</th>
                        <th>Title</th>
                        <th>Upload Date</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                  
                </thead>
                {Array.isArray(podcasts) && podcasts.map((item, index) => {
                        return (
                            <tbody >
                                <tr>
                                    <td class="table-bordered table-light">none</td>
                                    <td><input type="text" className="form-control" name="" defaultValue={item.id} /></td>
                                    <td><input type="text" className="form-control" name="" defaultValue={item.title} /></td>
                                    <td><input type="text" className="form-control" name="" defaultValue={item.upload_date} /></td>
                                    <td><input type="text" className="form-control" name="" defaultValue={item.description} /></td>
                                   
                                    <td><span class="not-set">(no definido)</span></td>
                                    <td>none</td>
                                </tr>
                            </tbody>
                        );
                    })}
            </table>

        </div>
    );
};

export default Podcast;