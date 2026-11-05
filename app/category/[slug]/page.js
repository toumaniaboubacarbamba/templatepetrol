import { notFound } from "next/navigation";
import PageShell from "../../../components/PageShell";
import Category from "../../../components/Category";
import { categories } from "../../../lib/categories";

// Une page statique par catégorie, générée au build
export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cat = categories[slug];
  return { title: cat ? `${cat.nom} – Petrol` : "Catégorie – Petrol" };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const cat = categories[slug];
  if (!cat) notFound();

  return (
    <PageShell>
      <Category nom={cat.nom} articles={cat.articles} />
    </PageShell>
  );
}
