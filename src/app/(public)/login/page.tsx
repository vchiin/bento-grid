import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./_components/form";
import { TelegramButton } from "./_components/telegram";

const LoginPage = () => (
  <div className="w-screen h-screen flex items-center justify-center">
    <Card className="max-w-sm w-full">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials below to use the application
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <TelegramButton />
      </CardFooter>
    </Card>
  </div>
);

export default LoginPage;
