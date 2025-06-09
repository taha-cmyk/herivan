import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences | Herivan - Your Moroccan Van Adventure",
  description: "Explore curated Moroccan experiences with Herivan's premium van rental service",
};

export default function ExperiencesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}