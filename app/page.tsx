import Header from "@/layout/Header/Header";
import styles from './Home.module.scss';

const { main } = styles;

export default function Home() {
  return (
    <main className={main}>
      <Header />
    </main>
  );
}
