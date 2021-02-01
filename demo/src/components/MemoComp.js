import React from 'react';

 function MemoComp({name}) {
     console.log('Rendering the Memo Comp')
  return (
    <div>
        {name}
    </div>
  );
}
export default React.memo(MemoComp)
