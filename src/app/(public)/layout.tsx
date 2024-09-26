import { auth } from "@/auth";
import { redirect } from "next/navigation";

const PublicLayout: React.FC<
  Readonly<{
    children?: React.ReactElement;
  }>
> = async ({ children }) => {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return children;
};

export default PublicLayout;
