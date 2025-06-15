"use client";

import { useState, useEffect, useRef } from "react";
import SideNav from "./SideNav";

export default function SidebarWrapper() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const touchStartX = useRef(0);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Swipe to close on mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX.current - touchEndX > 50) {
        setOpen(false);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      {/* Menu Button (only on mobile) */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 m-2 bg-blue-600 text-white rounded fixed top-3 left-3 z-50 "
      >
        ☰ Menu
      </button>

      {/* Backdrop with blur only on mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 backdrop-blur-sm z-40 xs:hidden"
        />
      )}

      {/* Responsive Sidebar */}
      <aside
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 h-full z-50
          transition-transform duration-300 ease-in-out
          bg-[#111c32] text-white 
          flex flex-col overflow-y-auto
          2xl:relative 2xl:translate-x-0 xs:flex
          w-[80vw] xs:w-[260px] 
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SideNav />
      </aside>
    </>
  );
}
