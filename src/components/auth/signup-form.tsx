"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z as zod } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { ENV_CONFIG } from "@/config/env.config";
import supabaseClient from "@/lib/supabase/client";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formSchema = zod.object({
    name: zod.string().nonempty("Name is required").min(3),
    email: zod
      .string()
      .nonempty("Email is required")
      .email({ message: "Enter a valid email address" }),
  });

  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = async (data: zod.infer<typeof formSchema>) => {
    setLoading(true);
    const auth = await supabaseClient.auth.signInWithOtp({
      email: data.email,
      options: {
        shouldCreateUser: true,
      },
    });
    if (auth.data) {
      setLoading(false);
      toast.success("Check your email to continue");
      router.push(`/verify-otp?email=${data.email}`);
    } else if (auth.error) {
      setLoading(false);
      toast.error(auth.error.message);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign up to proceed</CardTitle>
          <CardDescription>
            Enter your details below to signup to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...form.register("name")}
                  id="name"
                  type="text"
                  placeholder="Abebe Beso"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...form.register("email")}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Signup
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
