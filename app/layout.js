import "../src/index.css";

export const metadata = {
  title: "VeraLux - Decentralized Finance Platform",
  description:
    "Join the future of decentralized finance with VeraLux. Stake, earn, and govern in our innovative DeFi ecosystem.",
  keywords: "DeFi, cryptocurrency, staking, governance, blockchain, VeraLux",
  authors: [{ name: "VeraLux Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#3366FF" />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
