import React from 'react';


const Rank = ({name, entries}) => {
    return(
        <div width='50px' height='' style={{zIndex: 1}}>
            <div className='blue f3' width='200px' style={{zIndex: 1}}>
                {`${name}, your current entry count is...`}
            </div>
            <div className='blue f1'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;

