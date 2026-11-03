import PageShell from "../../components/PageShell";
import About from "../../components/About";

export const metadata = { title: "À propos – Petrol" };

export default function Page() {
  return (
    <PageShell>
      <About />
    </PageShell>
  );
}
