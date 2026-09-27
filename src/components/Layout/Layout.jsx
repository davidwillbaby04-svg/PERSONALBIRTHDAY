function Layout({ children }) {
  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      {children}
    </main>
  );
}

export default Layout;