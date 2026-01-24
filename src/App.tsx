import './App.css'
import BackgroundAnimation from './AnimatedBackground'
import {motion} from "framer-motion"
import {useState} from "react"
import Chat from './chatbot frontend/chatbot-frontend'

function App() {
  const [rotation, setRotation] = useState(0)

  const handleClick = () =>(
    setRotation(rotation + 360)
  )

  return (
    <>
    <BackgroundAnimation/>
      <div 
        style={{
          position:"relative",
          inset:0,
          minHeight:"100vh",
          width:"100%",
          zIndex:1,
        }}>
            <motion.img
              src="kitty.jpg"
              animate={{ rotate:rotation }}
              onClick={handleClick}
              transition={{ duration:0.5, ease:"easeInOut" }}
            />
            <h1>woaw.....</h1>
            <Chat/>
        </div>
    </>
  )
}

export default App
