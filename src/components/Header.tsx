"use client";
import { Sun, Moon, Bell, User, HelpCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Icon from "../../public/Icon.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white dark:bg-customDark text-black dark:text-white border-b md:px-6 mb-4">
      {/* Logo or Title */}
      <div className="flex items-center">
        <Image src={Icon} alt="Icon" width={30} height={30} className="mr-2" />
        <h1 className="text-base font-bold text-blue-950 dark:text-white md:text-lg">
          ELT Global
        </h1>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-3 md:gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleDarkMode}
                className="p-2 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 md:p-2.5"
              >
                {darkMode ? (
                  <Sun className="text-yellow-500 w-5 h-5" />
                ) : (
                  <Moon className="text-blue-500 w-5 h-5" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Light / Dark</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="p-2 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 md:p-2.5">
                <Bell className="w-5 h-5 text-green-700" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="p-2 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 md:p-2.5">
                <HelpCircle className="w-5 h-5 text-red-700" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Customer Support</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
}
