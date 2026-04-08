import './globals.css';

export const metadata = {
  title: 'HTML Starter',
  description: 'A Next.js HTML starter template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <nav className="nav">
              <a href="/" className="nav-logo">MySite</a>
              <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
