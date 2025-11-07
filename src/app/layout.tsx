// File: src/app/layout.tsx
import type { Metadata } from "next";
// Import the global CSS file
import "../index.css"; 

export const metadata: Metadata = {
 title: "Electrical Comparator Virtual Lab",
 description: "A virtual lab for the Electrical Comparator experiment.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
     <html lang="en">
<body>{children}</body>
</html> );
}