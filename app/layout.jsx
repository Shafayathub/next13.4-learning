import '@styles/globals.css';

export const metadata = {
  title: 'Nextjs Fullstack test',
  description: 'Discovering and learning the latest updates of Next.js 13.4',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
