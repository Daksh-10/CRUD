"use client";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <button className="button" onClick={() => router.push("/")}>
        Home
      </button>
      {children}
    </div>
  );
}
