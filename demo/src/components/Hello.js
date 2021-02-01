import React from 'react';

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Hemant..$</h1>
    //     </div>
    // )
    return React.createElement('div', {id:'hello',className:'democlass'}, React.createElement('h1', null, 'Hello Hemant'))
}

export default Hello