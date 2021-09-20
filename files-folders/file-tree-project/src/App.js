import React, { useState } from "react";

// Pratice working with props and useState
// Building a dummy File manager
function App() {
  return (
    <div>
     <h1>My Computer</h1>
     {/* added name props to the Folder and File components that we can reuse */}
      <Folder name="Desktop" >
        <Folder name="Random">
          <File name="random_song.mp3" />
          <File name="random_img.jpeg" />
          </Folder>
       </Folder>
     <Folder name="Downloads">
       <File  name="SpiderMan_NoWayHome.mp4"/>
       <File name="GundamWing.mp4"/>
      </Folder>
    </div>
  );
}


// Here 1st, we created the Folder to display the Folder Name, e.g the names prop
// Then we added isOpen to handle the state of opening the folders
// created a toggle to handle the opening and closing

function Folder(props){
  const [isOpen, setIsOpen ] = useState(false)

  const {name, children} = props

  function handleClick(){
    setIsOpen(!isOpen)
  }

  return(
    <>
  <div>
    <span onClick={handleClick}>{name}</span>
    <div style={{ marginLeft: '1rem'}}>
      {isOpen ? children : null}
    </div>
  </div>
  </>
  )
}

// These are the files
// they recive there name from the props so thats why we have props
// as the parameter on line 49
// also access it as props.name

const File = (props) => {
  return <div style={{ marginLeft: '1rem' }}>{props.name}</div>
}

export default App;
