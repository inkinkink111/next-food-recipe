"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex justify-center items-center gap-4">
        <p className="text-green-500">{session.user.name}</p>
        <Button variant={"destructive"} onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button variant={"default"} onClick={() => signIn()}>
      Sign In
    </Button>
  );
};

export default SigninButton;
