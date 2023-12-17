// import React, { memo, useState } from 'react';

// const Umnoj = () => {
//         const [count,setCount]=useState(2)
//     function  handler(){
//       setCount(count*2)
//     }
//     return (
//         <div>
//                <span>{count}</span>
//             <button onClick={handler}>*</button>
//         </div>
//     );
// };

// export default  memo(Umnoj)






import React ,{ useCallback, useState } from 'react';


const Umnoj = () => {
    const [count,setCount]=useState(2)
    const handler=useCallback(()=>{
        setCount(count*2)
    },[count])
    return (
        <div>
               <span>{count}</span>
         <button onClick={handler}>*</button>
        </div>
    );
};


export default Umnoj




