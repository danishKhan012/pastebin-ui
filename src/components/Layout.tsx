import "../styles/layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="header">
        <span className="logo">Pastebin-Lite</span>
      </header>

      <main className="container">{children}</main>
    </>
  );
}
