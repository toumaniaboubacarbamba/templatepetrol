import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children, footer = true }) {
  return (
    <div id="page" className="jkit-template site">
      <Header />
      {children}
      {footer && <Footer />}
    </div>
  );
}
