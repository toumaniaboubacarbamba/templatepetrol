import "./template.css";
import "./menu-mobile.css";
import "./template-pages.css";
import "./fixes.css";

export const metadata = {
  title: "Petrol – Industrie pétrolière et gazière",
  description: "Reproduction du template Petrol (Jegtheme) en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="home page jkit-color-scheme elementor-default elementor-template-full-width elementor-kit-3 elementor-page elementor-page-159 jkit-nav-menu-loaded">
        {children}
      </body>
    </html>
  );
}
