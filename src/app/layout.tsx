import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = { title: "Jared Inya-Agha", description: "Portfolio by Jared Inya-Agha" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="portfolioDark" lang="en">
      <body className={`${inter.className} text-base-content`}>{children}</body>
    </html>
  )
}

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Jared Inya-Agha",
//   description: "Portfolio by Jared Inya-Agha",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" data-theme="portfolioDark">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
