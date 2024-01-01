"use client"
import styles from './page.module.css'
import { useState,useEffect } from 'react';
import dotenv from 'dotenv';
dotenv.config();
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
    const url = process.env.URL;
    const resp = await fetch(`${url}`);
    const json = await resp.json();
    setData(json);
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Your Coffee of the Day is ....</h1>
      <h2 className="dataclass">
        Data is : {data && data[1] && data[1].title}
      </h2>
    </main>
  )
}
