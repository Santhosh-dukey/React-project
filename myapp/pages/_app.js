import { MyContext } from '@/context/MyContext'
import { useState } from 'react';


export default function App({ Component, pageProps }) {
  const [levelUp, setlevelUp] = useState(0);
  return (
    <MyContext.Provider value={{levelUp, setlevelUp}}>
       <Component {...pageProps} />
    </MyContext.Provider>
   
  )
}
