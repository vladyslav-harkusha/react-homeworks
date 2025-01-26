import {createContext} from "react";
import {themes} from "./themesConstant.ts";

type ThemeContextType = {
    theme: string;
    changeTheme: (nextTheme: string) => void;
}

const defaultThemeValue: ThemeContextType = {
    theme: themes.light,
    changeTheme: (nextTheme) => {
        console.log(nextTheme);
    }
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeValue);