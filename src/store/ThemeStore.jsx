import {create} from "zustand";
import {Dark, Light} from "../styles/themes"
export const useThemestore=create((set, get)=>{
    theme:"ligth",
    themeStyle:Light,
    setTheme:()=>{
        const{theme}=get();
        set({theme:theme==="ligth"?"dark":"ligth"});
        set({themeStyle:theme==='light'?Dark:Light});
    }
})