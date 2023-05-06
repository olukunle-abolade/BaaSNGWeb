"use client"

import { Sidebar } from "@/components/shared/sidebar/sidebar";
import Topnav from "@/components/topnav/topnav";
import { LayoutContent, LayoutContentMain, LayoutWrapper } from "@/styles/style-layout";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <LayoutWrapper>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Sidebar/>
      <LayoutContent>
        <Topnav/>
        <LayoutContentMain active>
          {children}
        </LayoutContentMain>
      </LayoutContent>
    </LayoutWrapper>
  );
}