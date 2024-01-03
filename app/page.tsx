"use client"
import styles from './page.module.css'
import Image from 'next/image';
import { useState,useEffect } from 'react';
interface CoffeeData{
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}


export default function Home() {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState<CoffeeData[] | undefined>(undefined);

  const getData = async () => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`);
    const json = await resp.json();
    setData(json);
  }

  return (
    <>
    <h1 className={styles.header}>Your Coffee of the Day is ....</h1>
    <main className={styles.main}>
      <div className={styles.left_main}>
        <Image src={"/hotcoffee.png"} alt="Hot" className={styles.hot} sizes="100vw" width={0} height={0}/>
      </div>
      <div className={styles.middle_main}>2dsds</div>
      <div className={`${styles.right_main}`}>
        <Image src={"/icedcoffee.png"} alt="Iced" className={styles.iced} sizes="100vw" width={0} height={0}/>
      </div>
    </main>
    <footer className={styles.footer}>
        Created by some-earth
      </footer>
    </>
  )
}
