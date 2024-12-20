import { Container, Header } from "@/shared/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxizza Pizza | Оформление заказа",
  description: "Generated by Next.js",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f8eaea]">
      <Container>
        <Header
          hasCart={false}
          hasSearch={false}
          className="border-b-gray-200"
        />
        {children}
      </Container>
    </main>
  );
}
