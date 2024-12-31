import Link from "next/link";
import { Input } from "@/components/ui/input"; // npx shadcn@latest add input
import { Button } from "@/components/ui/button"; // npx shadcn@latest add button
import { Label } from "@/components/ui/label"; // npx shadcn@latest add label
import { Separator } from "@/components/ui/separator"; // npx shadcn@latest add separator
import { Card, CardContent } from "@/components/ui/card"; // npx shadcn@latest add card
import { Framer } from "lucide-react";
import { GoogleLogo } from "@/components/google-logo";


  

export default function LoginFormTwo({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`flex justify-center items-center min-h-[calc(100vh-3rem)] ${className}`}
    >
      <Card className="w-full max-w-md rounded-lg shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col items-center">
            <Link href="/">
                <Framer className="size-12 border rounded-md bg-white text-black p-1" />
            </Link>
            <p className="mt-4 text-2xl font-semibold ">Welcome Back</p>
            <p className="mt-2 text-sm ">Login to continue to your account</p>
          </div>
          <form className="mt-6 space-y-5">
            <div>
              <Label htmlFor="email" className="">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Label htmlFor="password" className="">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Continue with Email
            </Button>
            <div className="my-7 w-full flex items-center justify-center overflow-hidden">
              <Separator />
              <span className="text-sm px-2">OR</span>
              <Separator />
            </div>
            <Button type="submit" className="w-full flex items-center justify-center gap-2">
              <GoogleLogo />
              Continue with Google
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Link
              href="#"
              className="text-sm text-primary underline hover:text-primary-dark"
            >
              Forgot your password?
            </Link>
            <p className="mt-2 text-sm ">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-primary underline hover:text-primary-dark"
              >
                Create one
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
