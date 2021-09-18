



import Works from './components/Works';
import Contacto from './components/Contacto';
import Banner from './components/Banner';
import TopBar from './components/TopBar';
// import Modalwindows from './components/Modalwindows';
// import { useState } from 'react';


function App() {

  // const [show, setshow] = useState(true)
  // const Onclose = ()=> setshow(false)

  // // const [isOpen, setisOpen] = useState(false);

    // const toggle = ()=>{
    //   setshow(!show);

    // }

  return (
    <div className="h-full  w-full ">
      <TopBar />
      <Banner />
      {/* < Modalwindows show={show} Onclose={Onclose} /> */}
      <Works  />
      <Contacto />

     
      
      
    </div>
  );
}

export default App;
