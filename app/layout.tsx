import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer>
          <p className="text-center text-white items-center justify-center bg-blue-500 p-4">
            &copy; 2025 Laia ❤️. All rights reserved.
          </p>
        </footer>
      </body>

    </html>
  );
}
