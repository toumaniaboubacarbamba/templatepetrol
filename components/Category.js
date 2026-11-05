// Page d'archive d'une catégorie de blog (liste des articles de la catégorie)
export default function Category({ nom, articles }) {
  return (
    <main className="site-main" id="content" role="main">
      <header className="page-header">
        <h1 className="entry-title">
          Catégorie : <span>{nom}</span>
        </h1>
      </header>
      <div className="page-content">
        {articles.map((a) => (
          <article key={a.href} className="post">
            <h2 className="entry-title">
              <a href={a.href}>{a.titre}</a>
            </h2>
            <a href={a.href}>{a.image && <img src={a.image} alt={a.alt} className="attachment-large size-large wp-post-image" />}</a>
            <p>{a.extrait}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
