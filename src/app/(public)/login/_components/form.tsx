"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { LoginSchema, loginSchema } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm: React.FC<
  Readonly<{
    className?: string;
  }>
> = ({ className }) => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (!response) {
        throw new Error("Failed to perform the request");
      }

      if (response.ok) {
        router.push("/dashboard");
        return;
      }

      if (response.error === "CredentialsSignin") {
        form.setError("root", {
          message: "Incorrect Credentials",
        });
        return;
      }

      const message = JSON.parse(response.error ?? "");
      if (Array.isArray(message)) {
        message.forEach((message) => {
          if ("path" in message && "message" in message) {
            form.setError(message.path.join("."), {
              message: message.message,
            });
          }
        });
        return;
      }

      throw new Error("Unknown error");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign in",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-y-4", className)}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="example@email.com"
                type="email"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
                type="password"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <FormMessage>{form.formState.errors.root.message}</FormMessage>
        )}
      </Form>

      <Button
        type="submit"
        size="lg"
      >
        Login
      </Button>
    </form>
  );
};

export { LoginForm };
