import PageShell from "../../components/PageShell";
import ServicesPage from "../../components/ServicesPage";

export const metadata = { title: "Services – Petrol" };

export default function Page() {
  return (
    <PageShell>
      <ServicesPage />
    </PageShell>
  );
}
