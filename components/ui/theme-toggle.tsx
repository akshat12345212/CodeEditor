"use client";

import { useTheme } from "next-themes";
import { useEffect , useState } from "react";
// import { Moon, Sun } from "lucide-react";



export  function ThemeToggle(){
    const Sun ="🌤️"
    const Moon ="⋆🌙ྀིྀི "
    const {setTheme , theme} = useTheme();
    const [mounted , setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    } , []);

    if(!mounted){
        return null;
    }

    return (
        <div 
        className="cursor-pointer"
        onClick={()=>{
            setTheme(theme === "light" ? "dark" : "light");
        }}
        >
            {
                theme === "light" ? (<div className ="h-4 w-4 items-center ">{Sun}</div>) : (<div>{Moon}</div>)
            }
        </div>
    )
}

// export default {theme,setTheme};