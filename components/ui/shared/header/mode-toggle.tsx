'use client';
import { useState, useEffect } from "react";
import { DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem
     } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes"; 
import {SunIcon, MoonIcon, SunMoon} from 'lucide-react'
const ModeTggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true);
    },[]);

    if (!mounted) {
        return null;
    }
    return   <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0" >
                {theme === "system" ? (
                    <SunMoon/>
                ) : theme === "dark" ? (
                    <MoonIcon/>
                ) : (
                    <SunIcon/>
                )
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent >
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem 
           checked={theme === "system"} 
           onClick={() => setTheme("system")}
        >
             System
        </DropdownMenuCheckboxItem>        <DropdownMenuCheckboxItem 
           checked={theme === "dark"} 
           onClick={() => setTheme("dark")}
        >
             Dark
        </DropdownMenuCheckboxItem>        <DropdownMenuCheckboxItem 
           checked={theme === "light"} 
           onClick={() => setTheme("light")}
        >
             Light
        </DropdownMenuCheckboxItem>
        </DropdownMenuContent>

    </DropdownMenu>;
}
 
export default ModeTggle;