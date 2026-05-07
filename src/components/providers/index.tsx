import React from "react";
import { TooltipProvider } from "../ui/tooltip";
import { ThemeProvider } from "./theme-provider";
interface RootProviderProps{
  children:React.ReactNode
}

export default function RootProvider({ children }: RootProviderProps) {
  return (
    <ThemeProvider>
    <TooltipProvider>
      {children}
    </TooltipProvider>
    </ThemeProvider>
  )
}
