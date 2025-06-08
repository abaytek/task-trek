import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { getFirstChar } from "@/lib/utils";
import { supabaseServer } from "@/lib/supabase/server";
import LogoutButton from "./logout-button";

const UserAvatar = async () => {
  const supabase = await supabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <DropdownMenu>
      <div className="p-4">
        <DropdownMenuTrigger>
          <div className="h-8 w-8 rounded-full bg-amber-700 text-center text-white text-2xl font-bold flex items-center justify-center">
            {getFirstChar(user?.email ?? "")}
          </div>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="mx-4">
       <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
