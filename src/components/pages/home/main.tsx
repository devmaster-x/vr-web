import Layout from "@/components/Layout";
import { About, News, Partners, Teams, Landing } from './sections';

export default function HomeComponent() {
  return (
    <Layout>
      <Landing />
      <About />
      <News />
      <Partners />
      <Teams />
    </Layout>
  );
}
