import FooterSection from "@/components/footer-section"
import SiteHeader from "@/components/site-header"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "made with ShapeXUI",
};


interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <FooterSection />
    </div>
  )
}
