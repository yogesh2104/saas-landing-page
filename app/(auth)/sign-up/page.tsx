"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // npx shadcn@latest add card
import { Label } from "@/components/ui/label"; // npx shadcn@latest add label
import { Input } from "@/components/ui/input"; // npx shadcn@latest add input
import { Button } from "@/components/ui/button"; //npx shadcn@latest add button
import { Check, Eye, EyeOff, Framer, Info, X } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"; // npx shadcn@latest add hover-card
import { GoogleLogo } from "@/components/google-logo";

type StrengthScore = 0 | 1 | 2 | 3 | 4 | 5;

type checkType = {
  met: boolean;
  text: string;
};

type PasswordStrength = {
  score: StrengthScore;
  check: checkType[];
};

const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  { regex: /[!-\/:-@[-`{-~]/, text: "At least 1 special characters" },
] as const;

const SignUp = () => {
  const [password, setPassword] = React.useState<string>("");
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const PasswordStrength = React.useMemo((): PasswordStrength => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));

    return {
      score: requirements.filter((req) => req.met).length as StrengthScore,
      check: requirements,
    };
  }, [password]);

  return (
    <section className="min-h-screen p-1">
      <div className="pt-[2.4rem] mb-[2.4rem]">
        <Card className="mx-auto max-w-lg rounded-xl">
          <CardHeader>
          <div className="flex flex-col items-center">
            <Link href="/">
                <Framer className="size-12 border rounded-md bg-white text-black p-1" />
            </Link>
            <p className="mt-4 text-2xl font-semibold ">Create Account</p>
            <p className="mt-2 text-sm ">Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="underline text-primary hover:text-primary font-medium"
                >
                  Sign in
                </Link>
            </p>
          </div>
          </CardHeader>
          <CardContent className="p-4 md:p-8">
            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="fname">First Name</Label>
                    <Input
                      id="fname"
                      type="text"
                      name="fname"
                      placeholder="Enter Your First Name."
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lname">Last Name</Label>
                    <Input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter Your Last Name."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="username"
                      name="username"
                      placeholder="Choose Your Username"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="demo@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-2 relative">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <HoverCard openDelay={200}>
                      <HoverCardTrigger>
                        <Info size={20} className={`cursor-pointer`} />
                      </HoverCardTrigger>
                      <HoverCardContent className="bg-background">
                        <ul
                          className="space-y-1.5"
                          aria-label="Password requirements"
                        >
                          {PasswordStrength.check.map((req, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              {req.met ? (
                                <Check size={16} className="text-emerald-500" />
                              ) : (
                                <X
                                  size={16}
                                  className="text-muted-foreground/80"
                                />
                              )}
                              <span
                                className={`text-xs ${
                                  req.met
                                    ? "text-emerald-600"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {req.text}
                                <span className="sr-only">
                                  {req.met
                                    ? " - Requirement met"
                                    : " - Requirement not met"}
                                </span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Choose Your Password."
                    type={isVisible ? "text" : "password"}
                    aria-invalid={PasswordStrength.score < 4}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setIsVisible((prev) => !prev)}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 top-6 outline-none flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground  "
                  >
                    {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <div className="flex gap-2 w-full justify-between ">
                  <span
                    className={`${PasswordStrength.score >= 1 ? "bg-red-200" : "bg-border"}  p-1 rounded-full w-full`}
                  ></span>
                  <span
                    className={`${
                      PasswordStrength.score >= 2 ? "bg-red-300" : "bg-border"
                    }  p-1 rounded-full w-full`}
                  ></span>
                  <span
                    className={`${
                      PasswordStrength.score >= 3 ? "bg-red-400" : "bg-border"
                    }  p-1 rounded-full w-full`}
                  ></span>
                  <span
                    className={`${
                      PasswordStrength.score >= 4 ? "bg-green-500" : "bg-border"
                    }  p-1 rounded-full w-full`}
                  ></span>
                  <span
                    className={`${
                      PasswordStrength.score >= 5 ? "bg-green-600" : "bg-border"
                    }  p-1 rounded-full w-full`}
                  ></span>
                </div>

                <div className="grid gap-2 relative">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={isVisible ? "text" : "password"}
                    placeholder="Comfirm Your Password."
                  />
                  <button
                    type="button"
                    onClick={() => setIsVisible((prev) => !prev)}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 top-6 outline-none flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground  "
                  >
                    {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                <Button type="submit" className="w-full">
                  Create An Account
                </Button>
                <Button type="submit" className="w-full flex items-center justify-center gap-2 ">
                    <GoogleLogo />
                    Continue with Google
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignUp;
