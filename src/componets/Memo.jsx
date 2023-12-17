
// const Memo = () => {
    //     const [count,setCount]=useState(0)
    //     function  handler(){
        //       setCount(count+1)
        //     }
        //     return (
//         <div>
//             <span>{count}</span>
//             <button onClick={handler}>+</button>
//         </div>
//     );
// };

// export default memo( Memo)






// import React ,{ useCallback, useMemo, useState } from 'react';


// const Memo = () => {
//     const [count,setCount]=useState(0)
//     const memo=useMemo(()=>{
//         setCount(count+1)
//     },[count])
//     return (
//         <div>
//                <span>{count}</span>
//          <button onClick={memo}>+</button>
//         </div>
//     );
// };

// export default Memo;


import React, { useMemo, useState, useCallback, } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
//   const [counter, setCounter] = useState(2);

  const cachedValue = useMemo(() => {
    return count *2; 
  }, [count]);

  const handleButtonClick = useCallback(() => {
    setCount(count+ 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <p>{cachedValue}</p>

      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default Memo;
