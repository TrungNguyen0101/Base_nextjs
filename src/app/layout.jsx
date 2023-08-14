import './globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f0f0f0] p-[5px] overflow-hidden">{children}</body>
    </html>
  );
}
