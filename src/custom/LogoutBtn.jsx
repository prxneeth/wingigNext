import { logoutAction } from "@/app/services/auth-actions";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button className="border-none   cursor-pointer p-1 " type="submit">
        {/* <LogOut className="w-3 p-2  border-none hover:text-primary" /> */}
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </form>
  );
}
