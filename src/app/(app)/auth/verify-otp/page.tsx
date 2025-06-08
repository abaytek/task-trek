"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import supabaseClient from "@/lib/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { set } from "date-fns";
import { OTPInput, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z as zod } from "zod";

const VerifyOtp = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") as string;
  const [value, setValue] = React.useState<string>("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();
  const formSchema = zod.object({
    otp: zod.string().nonempty("OTP is required").min(6),
    email: zod.string(),
    type: zod.string(),
  });

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const { data, error } = await supabaseClient.auth.verifyOtp({
        type: "email",
        token: value,
        email: email,
      });
      if (error) {
        toast.error(error.message);
      }
      if (data.user) {
        toast.success("OTP verified");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Card className="">
        <CardHeader>Verify OTP</CardHeader>
        <CardDescription></CardDescription>
        <CardContent>
          <InputOTP
            value={value}
            onChange={(value) => setValue(value)}
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          >
            <InputOTPGroup className="gap-2 w-full">
              <InputOTPSlot className="p-2" index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </CardContent>
        <CardFooter className="pt-3">
          <Button onClick={handleSubmit} type="submit" className="w-full">
            {isSubmitting ? (
              <span className="animate-spin h-4 w-4 rounded-full border-white border-t-transparent border-2" />
            ) : (
             <span className="text-white">Submit</span>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VerifyOtp;
