import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { applyThemeChangeEffect } from "@/lib/theme-effect"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Ensure theme toggle is only rendered client-side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  const handleThemeChange = () => {
    // Apply ripple effect when changing theme
    applyThemeChangeEffect()
    
    // Set the new theme
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      isIconOnly
      variant="light"
      radius="full"
      size="sm"
      aria-label="Toggle theme"
      className="theme-toggle-selector relative h-9 w-9 border border-border hover:bg-accent hover:text-accent-foreground"
      onClick={handleThemeChange}
    >
      <div className="relative h-6 w-6">
        {/* Sun icon with rays that animate */}
        <span
          className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${
            isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <Sun size={18} className="text-primary" />
        </span>
        
        {/* Moon icon that animates */}
        <span
          className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
          }`}
        >
          <Moon size={18} className="text-primary" />
        </span>
      </div>
      
      {/* A subtle glow effect */}
      <span className={`absolute inset-0 rounded-full transition-all duration-500 ${
        isDark 
          ? "bg-gradient-to-tr from-transparent via-primary/5 to-transparent" 
          : "bg-gradient-to-br from-primary/10 via-transparent to-transparent"
      }`} />
    </Button>
  )
}

export default ThemeToggle 