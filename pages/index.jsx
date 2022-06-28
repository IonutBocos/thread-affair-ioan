import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentBanner from '../components/homepage/ContentBanner';
import HomePayment from '../components/homepage/HomePayment';
import HomeSocial from '../components/homepage/HomeSocial';
import HomeNewsletter from '../components/homepage/HomeNewsletter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
      </Head>

      <Header></Header>

      <main className="content">
        <header className="content-header mb-5">
          <ContentBanner></ContentBanner>
        </header>

        <section className="content-main">
          <HomeNewsletter></HomeNewsletter>

          <HomeSocial></HomeSocial>

          <HomePayment></HomePayment>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}
