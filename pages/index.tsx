import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session }: { data: any } = useSession();

  if (session && session.authenticated) {
    return (
      <div className={styles.container}>
        <Head>
          <title>NX Demo</title>
          <meta name='description' content='NX Demo' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Signed in as <span>{session?.user?.name}</span>
          </h1>
          <button className={styles.button} onClick={() => signOut()}>
            Sign out
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NX Demo</title>
        <meta name='description' content='NX Demo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Not signed in</h1>
        <button className={styles.button} onClick={() => signIn()}>
          Sign in
        </button>
      </main>
    </div>
  );
}
