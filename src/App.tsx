import './App.css'
import BackgroundAnimation from './AnimatedBackground'
import {motion} from "framer-motion"
import {useState} from "react"
import { FeatureCardRow } from './components/Feature Cards/FeatureCards'
import { ClubStatsRow } from './components/Stats banner/BannerCard'
import { FancyButton } from './components/button/Button'

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
          display:"flex",
          justifyContent:"center",
          inset:0,
          minHeight:"100vh",
          width:"100%",
          zIndex:1,
        }}>

          <div 
            style={{
              width:"80rem",
            }}>
            <motion.img
              src="kitty.jpg"
              animate={{ rotate:rotation }}
              onClick={handleClick}
              transition={{ duration:0.5, ease:"easeInOut" }}
            />
            <h1>woaw.....</h1>

          <FeatureCardRow/>
          <ClubStatsRow/>
          <FancyButton/>
          </div>
            

        </div>
    </>
  )
}

export default App
