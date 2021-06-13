import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alzhemy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a >Alzhemy</a>
        </h1>

        <p className={styles.description}>
          Let's get started by clicking 
          <code className={styles.code}>
            <Button variant="contained" color="primary" href="/1">
            THIS
            </Button>
         </code>
        </p>

        
      </main>

     
    </div>
  )
}
