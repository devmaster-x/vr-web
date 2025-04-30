"use client";
import Layout from "@/components/Layout";
import { Details, Contact, Landing, Partners, Teams } from "./sections";

export default function HomeComponent() {
  return (
    <Layout>
      <Landing />
      <Details />
      <Partners />
      <Teams />
      <Contact />
    </Layout>
  );
}
