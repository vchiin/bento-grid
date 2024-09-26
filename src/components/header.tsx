"use client";

import { SessionProvider, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <nav className="px-4 py-2 fixed top-0 left-0 w-full bg-white">
        <h3 className="font-medium text-sm">{session.data.user?.email}</h3>
      </nav>
    );
  }

  return null;
};

const SessionHeader = () => (
  <SessionProvider>
    <Header />
  </SessionProvider>
);

export { SessionHeader as Header };
