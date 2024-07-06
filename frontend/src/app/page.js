"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import "../../styles/style.css";
export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <button className="button" onClick={() => router.push("./mainn/create")}>
        Create
      </button>
      <button className="button" onClick={() => router.push("./mainn/read")}>
        Read
      </button>
      <button className="button" onClick={() => router.push("./mainn/update")}>
        Update
      </button>
      <button className="button" onClick={() => router.push("./mainn/delete")}>
        Delete
      </button>
    </main>
  );
}
