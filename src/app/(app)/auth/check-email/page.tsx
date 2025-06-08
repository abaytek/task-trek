import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";

const CheckEmail = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Card className="p-5">
        <CardTitle>Check your email</CardTitle>
        <CardDescription>
          We sent a password reset link to your email address inbox, please
          check your inbox.
        </CardDescription>
      </Card>
    </div>
  );
};

export default CheckEmail;
