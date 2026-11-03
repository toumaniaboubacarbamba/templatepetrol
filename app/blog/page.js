import PageShell from "../../components/PageShell";
import Blog from "../../components/Blog";

export const metadata = { title: "Blog – Petrol" };

export default function Page() {
  return (
    <PageShell>
      <Blog />
    </PageShell>
  );
}
