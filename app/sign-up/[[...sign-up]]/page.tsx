import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <SignUp />
    </main>
  );
}
