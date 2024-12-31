"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Github } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="community">
      <div className="container py-20 sm:py-20">
        <div className=" mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-2xl md:text-5xl font-bold flex flex-col items-center">
                <Github className="size-16 mb-4" />
                <div>We welcome everyone to {" "}
                <span className="text-gradient bg-gradient-to-r from-primary to-purple-600">
                join
                </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[60%] text-xl text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore cupiditate veniam sapiente maxime.
            </CardContent>

            <CardFooter className="flex gap-5">
              <Button asChild  className="rounded-full" size="lg"><a href="https://github.com/yogesh2104/shapex-ui" target="_blank">Fork on Github</a></Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
