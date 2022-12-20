import { createContext } from "react";

const UserTheme = createContext({
    theme: "default",
    setTheme: ()=>{}
})

export default UserTheme;