import React, { useState, useEffect } from 'react';
import { proxyComponent } from './hot-loader';


const App = ({title}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => ++val);
    }, 1000);
  }, []);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      thisggg is title: {title}
    </div>
  );
}

// export default App;
export default proxyComponent(App);

