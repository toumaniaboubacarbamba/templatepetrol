import PageShell from "../../components/PageShell";
import NotFound from "../../components/NotFound";

export const metadata = { title: "Page introuvable – Petrol" };

export default function Page() {
  return (
    <PageShell footer={false}>
      <NotFound />
    </PageShell>
  );
}
