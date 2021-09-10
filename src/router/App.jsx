import React, {useState} from 'react'
import SideNav from '../components/Generics/SideNav'
import Routing from '../router/Routing'

function App(props) {
    const {location}= props
    const [viewSide, setViewSide]= useState(false);
    const handleView = () => {
        setViewSide(!viewSide)
    }
  return (
      <>
          {viewSide ? (<SideNav/>): null}
          <Routing {...props} />
      </>
  );
}

export default App;
