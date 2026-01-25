import { LuGraduationCap, LuDatabase, LuCircle, LuSquare, LuBraces, LuMouse } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";

//blobs array: color, size, xposition, yposition
export const blobs = [
  { color: "rgba(255,140,0,0.45)", size: 300, x: "15%", y: "25%" },
  { color: "rgba(80,120,255,0.45)", size: 200, x: "70%", y: "10%" },
  { color: "rgba(255,140,0,0.45)", size: 180, x: "70%", y: "55%" },
  { color: "rgba(80,120,255,0.45)", size: 155, x: "12%", y: "80%" },
  { color: "rgba(255,140,0,0.45)", size: 190, x: "83%", y: "15%" },
  { color: "rgba(80,120,255,0.45)", size: 280, x: "5%", y: "65%" }
];

//dots
export const dots = [
  { x: "12%", y: "8%", color: "rgba(255,140,0,0.6)", size: 3, },
  { x: "68%", y: "12%", color: "rgba(80,120,255,0.5)", size: 5 },
  { x: "22%", y: "45%", color: "rgba(255,140,0,0.5)", size: 6 },
  { x: "78%", y: "35%", color: "rgba(80,120,255,0.6)", size: 5 },
  { x: "35%", y: "65%", color: "rgba(255,140,0,0.4)", size: 4 },
  { x: "88%", y: "68%", color: "rgba(80,120,255,0.5)", size: 5 },
  { x: "48%", y: "25%", color: "rgba(255,140,0,0.5)", size: 5 },
  { x: "8%", y: "52%", color: "rgba(80,120,255,0.4)", size: 3 },
  { x: "62%", y: "88%", color: "rgba(255,140,0,0.6)", size: 2 },
  { x: "92%", y: "22%", color: "rgba(80,120,255,0.5)", size: 6 },
  { x: "28%", y: "15%", color: "rgba(255,140,0,0.4)", size: 5 },
  { x: "58%", y: "72%", color: "rgba(80,120,255,0.6)", size: 6 },
]


// icon array
export const svgShapes = [
    { Icon: IoCodeSlash , color:"rgba(255,140,0,0.45)",size: 30, x:"50%", y:"5%", duration: 15, rotate:true, layer:"back" },
    { Icon: LuSquare, color:"rgba(80,120,255,0.45)", size: 80, x:"60%", y:"70%", duration: 23, rotate:true, layer:"back" },
    { Icon: LuBraces, color:"rgba(255,140,0,0.45)", size: 30, x:"90%", y:"60%", duration: 20, rotate:true, layer:"back" },
    { Icon: LuCircle, color:"rgba(80,120,255,0.45)", size: 50, x:"20%", y:"30%", duration: 20, rotate:false, layer:"front" },
    { Icon: LuMouse, color:"rgba(255,140,0,0.45)", size: 30, x:"50%", y:"10%", duration: 20, rotate:true, layer:"back" },
    { Icon: LuGraduationCap, color:"rgba(80,120,255,0.45)", size: 30, x:"90%", y:"45%", duration: 20, rotate:true, layer:"back" },
    { Icon: LuDatabase, color:"rgba(255,140,0,0.45)", size: 30, x:"20%", y:"80%", duration: 20, rotate:false, layer:"front" },
    { Icon: LuGraduationCap, color:"rgba(255,140,0,0.45)", size: 30, x:"80%", y:"50%", duration: 20, rotate:true, layer:"back" },
    { Icon: IoCodeSlash, color:"rgba(80,120,255,0.45)", size: 30, x:"15%", y:"60%", duration: 18, rotate:true, layer:"front" },
    { Icon: LuSquare, color:"rgba(255,140,0,0.45)", size: 38, x:"75%", y:"25%", duration: 22, rotate:true, layer:"back" },
    { Icon: LuCircle, color:"rgba(80,120,255,0.45)", size: 75, x:"40%", y:"85%", duration: 25, rotate:false, layer:"front" },
    { Icon: LuBraces, color:"rgba(255,140,0,0.45)", size: 32, x:"65%", y:"45%", duration: 19, rotate:true, layer:"front" },
  ]