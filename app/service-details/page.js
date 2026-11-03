import PageShell from "../../components/PageShell";
import ServiceDetails from "../../components/ServiceDetails";

export const metadata = { title: "Détail du service – Petrol" };

export default function Page() {
  return (
    <PageShell>
      <ServiceDetails />
    </PageShell>
  );
}
