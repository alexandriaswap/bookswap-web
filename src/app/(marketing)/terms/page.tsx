import { Footer, Navbar } from "@/components/marketing";
import Terms from "@/components/marketing/sections/Terms/Terms";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use the BookSwap app and website to list, discover, and swap books with other readers.",
};

export default function TermsPage() {
  return (
    <main
      className="font-body min-h-screen flex flex-col items-center"
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
      }}
    >
      <Navbar />
      <Terms />
      <Footer />
    </main>
  );
}
