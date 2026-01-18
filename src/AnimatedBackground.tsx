import { motion } from "framer-motion";
import { blobs,svgShapes, dots} from "./BackgroundElem";


export default function BackgroundAnimation(){
    return(
    <div
        style={{
            position:"fixed",
            top:0,
            left:0,
            width:"100vw",
            height:"100%",
            backgroundColor:"rgb(16,16,16)",
            overflow:"hidden",
            zIndex:-1,
            pointerEvents:"none",
        }}
    
    >
        {/* BLOBS */}
      {blobs.map((b, i) => (
        <motion.div
          key={`blob-${i}`}
          style={{
            position: "absolute",
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            background: b.color,
            borderRadius: "50%",
            filter: "blur(120px)",
            zIndex:1,
          }}
          animate={{
            // start move move start
            x: [0, 80, -60, 40, 0],
            y: [0, -70, 50, -30, 0],
            scale: [1, 1.2, .8, 1.3, 1]
          }}
          transition={{
            duration: 30 + i * 8,
            // infinity = resets when i click on the cat
            // repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: i * .3,
          }}
        />
      ))}
      {/*      SVG?    */}
      {svgShapes.map((s, i) =>(
        <motion.div
          key={`s-${i}`}
          style={{
            position: "absolute",
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            color: s.color,
            zIndex:s.layer === "front" ? 3 : 2,
            filter: s.layer === "back" ? "blur(2px)": "none"
          }}
          animate={{
            x: [0, Math.floor(Math.random()* 50)+ 1, Math.floor(Math.random()* 60)+ 1,0],
            y: [0, Math.floor(Math.random()* 40)+ 1, Math.floor(Math.random()* 70)+ 1,0],
            rotate: s.rotate ? [0,180,360] : 0,
            // opacity????//blur
          }}
          transition={{
            duration: s.duration,
            // repeat: Infinity,
            repeatType:"loop",
            ease:"easeInOut",
          }}
          >
            <s.Shape/>
          </motion.div>
      ))}

      {dots.map((dot,i)=> (
        <motion.div
          key={`key-$(i)`}
          style={{
            position:"absolute",
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
            backgroundColor: dot.color,
            borderRadius: "50%",
            zIndex:2,
          }}
          animate={{
            // x: [0, 10, -10, 5, 0],
            y: [0, -8, 8, -5, 0],
            opacity: [0.8, 0.9, 0.8],
            // scale: [1,1.2, 1.3, 1.1,1],
          }}
          transition={{
            duration: 5 * i + 2,
            // repeat: Infinity,
            repeatType:"loop",
            ease:"easeInOut",
            delay: i * 0.3,
          }}
          >
        </motion.div>

      ))}

      </div>
)}
