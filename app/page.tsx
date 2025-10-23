import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, B2B SaaS AI!</h1>
      <Button>Click me</Button>
      <ThemeToggle />
    </div>
  );
}
