import PageShell from "../../components/PageShell";
import AboutPage from "../../components/AboutPage";

export const metadata = { title: "À propos – Petrol" };

export default function Page() {
  return (
    <PageShell>
      <AboutPage />
    </PageShell>
  );
}
