import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePayment from '../components/homepage/HomePagyment';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
      </Head>

      <Header></Header>

      <main className="content">
        <HomePayment></HomePayment>
      </main>

      <Footer></Footer>
    </div>
  );
}
