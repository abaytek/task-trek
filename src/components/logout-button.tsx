'use client'
import React from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import supabaseClient from "@/lib/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter();
    const handleSignout = async () => {
        const {error} = await supabaseClient.auth.signOut();
        if(!error){
            toast.success("Signed out successfully")
            router.push('/auth/login')
        }
    }
  return (
    <DropdownMenuItem onClick={() => supabaseClient.auth.signOut()}>
      Logout
    </DropdownMenuItem>
  );
};

export default LogoutButton;
