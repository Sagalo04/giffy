import React, { useContext } from 'react';
// import Context from '../context/StaticContext';
import StaticContext from '../context/StaticContext'

function Detail({params}) {
    const context = useContext(StaticContext)
    console.log(context)
    const {id} = params
    return (
        <div>
            Gif {id}
        </div>
    );
}

export default Detail;