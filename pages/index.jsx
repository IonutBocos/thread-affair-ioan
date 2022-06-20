import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
      </Head>

      <Header></Header>

      <header className="header mt-5 text-warning"></header>

      <main className="content"></main>

      <footer className="footer"></footer>
    </div>
  );
}
