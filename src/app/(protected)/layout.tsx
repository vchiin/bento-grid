import { auth } from "@/auth";
import { redirect } from "next/navigation";

const ProtectedLayout: React.FC<
  Readonly<{
    children?: React.ReactElement;
  }>
> = async ({ children }) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return children;
};

export default ProtectedLayout;
