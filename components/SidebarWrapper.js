"use client";

import { useState, useEffect, useRef } from "react";
import SideNav from "./SideNav";

export default function SidebarWrapper() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const touchStartX = useRef(0);

  // Close sidebar when clicking outside (on mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        window.innerWidth < 1024 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Swipe-to-close on mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX.current - touchEndX > 50 && window.innerWidth < 1024) {
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
      {/* Top Navbar */}
      <nav className=" flex items-center justify-between bg-[#111c32] text-white p-4 fixed w-full top-0 z-50 shadow-md h-16 ">
        <h1 className="text-lg font-semibold lg:ml-[220px]">DailyDone</h1>
        <button
          onClick={() => setOpen(true)}
          className={` bg-blue-600 px-3 py-1 rounded text-white ${
            open ? "hidden" : "block"
          } lg:hidden`}
        >
          ☰
        </button>
      </nav>

      {/* Backdrop (mobile only) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 backdrop-blur-3xl z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`
          h-full bg-[#111c32] text-white z-50 overflow-y-auto flex flex-col
          transition-transform duration-300 ease-in-out

          /* Mobile sliding */
          fixed top-0 left-0 w-[80vw] max-w-[260px]
          ${open ? "translate-x-0" : "-translate-x-full"}

          /* lg and up: static, always shown */
          lg:translate-x-0 lg:relative lg:w-[260px]
        `}
      >
        <SideNav />
      </aside>
    </>
  );
}
