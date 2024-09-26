"use client";

import { forwardRef } from "react";
import { Button, ButtonProps } from "./ui/button";
import { signOut } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

const LogoutButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (properties, ref) => {
    const { toast } = useToast();
    return (
      <Button
        {...properties}
        ref={ref}
        onClick={async () => {
          try {
            await signOut({
              redirect: true,
            });
          } catch (error) {
            console.error(error);
            toast({
              title: "Error",
              description: "Failed to log you out",
              variant: "destructive",
            });
          }
        }}
      />
    );
  }
);

LogoutButton.displayName = "LogoutButton";

export { LogoutButton };
