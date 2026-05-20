import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import "./Layout.css"

function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />

      <main className="main">
        <Header />

        <section className="content">
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout;