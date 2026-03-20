import "./globals.css";

export const metadata = {
  title: "Inar Ventures",
  description: "Managed yoga teaching support for global programs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <nav className="flex justify-between items-center px-6 py-5 border-b max-w-6xl mx-auto">
  <div className="font-semibold text-lg">Inar Ventures</div>
  <div className="flex gap-6 text-sm text-gray-700">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/teachers">For Teachers</a>
    <a href="/contact">Contact</a>
  </div>
</nav>
        {children}
      </body>
    </html>
  );
}