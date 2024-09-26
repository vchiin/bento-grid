import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const DashboardPage = () => (
  <div>
    <Header />

    <div className="mt-10 px-4">
      <h2 className="text-lg font-medium">Dashboard</h2>
      <Button
        variant="ghost"
        className="mt-2"
      >
        <Link
          href="/"
          className="flex items-center gap-1"
        >
          <ArrowLeftIcon className="size-4" /> To the grid
        </Link>
      </Button>
    </div>
  </div>
);

export default DashboardPage;
