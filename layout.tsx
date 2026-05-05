export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>

          <aside style={{ width: "200px", background: "#111", color: "#fff", padding: "20px" }}>
            <h2>🐟 Fish System</h2>
            <p><a href="/">Home</a></p>
            <p><a href="/dashboard">Dashboard</a></p>
            <p><a href="/predict">Predict</a></p>
            <p><a href="/records">Records</a></p>
          </aside>

          <main style={{ flex: 1, padding: "20px" }}>
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
