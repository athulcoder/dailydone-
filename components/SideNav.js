import {
  Calendar,
  CrossIcon,
  Edit,
  LogOutIcon,
  Moon,
  OctagonAlertIcon,
  ScreenShare,
  Settings,
  Sun,
  Trash2Icon,
} from "lucide-react";

function SideNav() {
  return (
    <nav className="w-[70%] h-[100vh] bg-fuchsia-950 flex flex-col items-center ">
      <div className="h-[130px] w-full bg-amber-700 flex flex-col justify-center">
        <div className="flex items-start  justify-between mx-2">
          <div className="rounded-full w-[60px] h-[60px] bg-amber-900 "></div>
          <Sun className="mt-2" />
        </div>

        <div className="flex items-start flex-col justify-between mx-2">
          <p>Thomas Venier</p>
          <p className="text-gray-400 text-[12px]">@thomasnew</p>
        </div>
      </div>

      {/* nav links */}
      <div className="w-full  flex flex-col my-5 gap-1 border-b-1 border-gray-600">
        <li className="flex gap-2.5 h-[30px] items-center border-y-1 bg-pink-900 px-5 py-5">
          <ScreenShare /> DashBoard
        </li>
        <li className="flex gap-2.5 h-[30px] items-center  px-5 py-5">
          <Edit /> Profile
        </li>
        <li className="flex gap-2.5 h-[30px] items-center  px-5 py-5">
          <Settings /> Settings
        </li>
        <li className="flex gap-2.5 h-[30px] items-center  px-5 py-5">
          <Calendar /> Calender View
        </li>
      </div>

      {/* Tasks Data Nav */}

      <div className="w-full  flex flex-col my-1 gap-1 border-b-1 border-gray-600">
        <li className="flex gap-2.5 h-[30px] items-center  px-5 py-5">
          <Calendar /> All Tasks
        </li>
        <li className="flex gap-2.5 h-[30px] items-center border-y-1 bg-pink-900 px-5 py-5">
          <OctagonAlertIcon /> Overdues
        </li>
        <li className="flex gap-2.5 h-[30px] items-center  px-5 py-5">
          <CrossIcon /> Add new
        </li>
        <li className="flex gap-2.5 h-[30px] items-center  px-5 py-5">
          <Trash2Icon /> Trash
        </li>
      </div>

      <button className="text-white flex gap-3 cursor-pointer px-5 py-2 rounded-md bg-purple-800 mt-auto mb-5">
        <LogOutIcon />
        Logout
      </button>
    </nav>
  );
}

export default SideNav;
