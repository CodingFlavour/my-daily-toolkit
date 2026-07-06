'use client';

import Header from "@/layout/Header/Header";
import { Button } from "@coding-flavour/common";
import { useRouter } from "next/navigation";
import styles from './Minecraft.module.scss';

const { main } = styles;

const Minecraft = () => {
  const router = useRouter();

  const nav = () => router.push('/games/mc/progression-challenge');
  return (
    <main className={main}>
      <Header />
      <section>
        <h3>Reto de Progresión</h3>
        <p>
          ¿Te sientes nostálgico? Con este reto de progresión, podrás revivir la experiencia de jugar Minecraft en sus primeras versiones. Comenzarás con herramientas básicas y deberás avanzar a través de las actualizaciones del juego, desbloqueando nuevas características y enfrentándote a desafíos cada vez mayores.
        </p>
        <Button
          text="Comenzar"
          clickFn={nav}
        />
      </section>
    </main>
  )
}

export default Minecraft;
