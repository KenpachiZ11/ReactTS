import React from 'react';
import arrayObjectInfo from '../../Utils/arrayObjectInfo';

type Props = {}

const MainPageCardInfo = (props: Props) => {
    return (
        <>
            {
                arrayObjectInfo && arrayObjectInfo.length > 0 ?
                arrayObjectInfo.map(elem => {
                    return (
                        <div key={elem.id}>
                            <h1>{elem.title}</h1>
                            <p>{elem.body}</p>
                        </div>
                    )
                }) : null
            }
        </>
    )
}

export default MainPageCardInfo;