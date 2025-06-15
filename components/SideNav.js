"use client";

import {
  Calendar,
  CrossIcon,
  Edit,
  LogOutIcon,
  OctagonAlertIcon,
  ScreenShare,
  Settings,
  Sun,
  Trash2Icon,
} from "lucide-react";

export default function SideNav() {
  return (
    <nav className="h-screen w-full flex flex-col items-center text-white">
      <div className="h-[130px] w-full bg-[#16022f] flex flex-col justify-center">
        <div className="flex items-start justify-between mx-2">
          <div className="rounded-full w-[60px] h-[60px] bg-[#003755]" />
          <Sun className="mt-2 text-white" />
        </div>
        <div className="flex items-start flex-col justify-between mx-2 mt-2">
          <p>Thomas Venier</p>
          <p className="text-gray-400 text-[12px]">@thomasnew</p>
        </div>
      </div>

      {/* Primary links */}
      <div className="w-full flex flex-col my-5 gap-1 border-b border-gray-600">
        <div className="flex gap-2.5 items-center px-5 py-3 cursor-pointer hover:bg-[#1a2a4f]">
          <ScreenShare /> DashBoard
        </div>
        <div className="flex gap-2.5 items-center px-5 py-3 cursor-pointer hover:bg-[#1a2a4f]">
          <Edit /> Profile
        </div>
        <div className="flex gap-2.5 items-center px-5 py-3 cursor-pointer hover:bg-[#1a2a4f]">
          <Settings /> Settings
        </div>
        <div className="flex gap-2.5 items-center px-5 py-3 cursor-pointer hover:bg-[#1a2a4f]">
          <Calendar /> Calendar View
        </div>
      </div>

      {/* Tasks */}
      <div className="w-full flex flex-col my-1 gap-1 border-b border-gray-600">
        <div className="flex gap-2.5 items-center px-5 py-3 cursor-pointer hover:bg-[#1a2a4f]">
          <Calendar /> All Tasks
        </div>
        <div className="flex gap-2.5 items-center px-5 py-3 cursor-pointer hover:bg-[#1a2a4f]">
          <OctagonAlertIcon /> Overdues
        </div>
        <div className="flex gap-2.5 items-center px-5 py-3 cursor-pointer hover:bg-[#1a2a4f]">
          <CrossIcon /> Add new
        </div>
        <div className="flex gap-2.5 items-center px-5 py-3 cursor-pointer hover:bg-[#1a2a4f]">
          <Trash2Icon /> Trash
        </div>
      </div>

      <button className="text-white flex gap-3 cursor-pointer px-5 py-2 rounded-md bg-[#0e337c] mt-auto mb-5">
        <LogOutIcon />
        Logout
      </button>
    </nav>
  );
}
