import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }) {
  return (
    <div id="page" className="jkit-template site">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
