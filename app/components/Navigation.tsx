"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  // サーバー側とクライアント側で同じ初期状態を使用してハイドレーションエラーを防ぐ
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isTopPage, setIsTopPage] = useState(false);

  useEffect(() => {
    // クライアント側でのみパス名をチェック
    setIsAboutActive(pathname === "/about");
    setIsTopPage(pathname === "/");
  }, [pathname]);

  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/name.svg"
          alt="作家名のロゴタイプ"
          width={222}
          height={41}
          className={styles.logo}
          priority
          sizes="(max-width: 768px) 150px, 222px"
        />
      </Link>
      <div className={`${styles.links} ${isTopPage ? styles.topPage : ""}`}>
        <a
          href="https://instagram.com/soboku_design"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Works
        </a>
        <Link
          href="/about"
          className={`${styles.link} ${isAboutActive ? styles.active : ""}`}
        >
          About
        </Link>
        <a href="mailto:design.oioi.0127@gmail.com" className={styles.link}>
          Contact
        </a>
      </div>
    </nav>
  );
}
