import PageShell from "../components/PageShell";
import NotFound from "../components/NotFound";

export const metadata = { title: "Page introuvable – Petrol" };

// Page affichée par Next.js pour toute adresse inconnue
export default function NotFoundPage() {
  return (
    <PageShell footer={false}>
      <NotFound />
    </PageShell>
  );
}
