"use client"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export const Mode = () => {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed z-50 top-3 right-3 h-[20px] w-[20px] block">
        <SunIcon
          onClick={() => setTheme("dark")}
          className="absolute top-0 left-0 h-[20px] w-[20px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <MoonIcon
          onClick={() => setTheme("light")}
          className="absolute top-0 left-0 h-[20px] w-[20px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
