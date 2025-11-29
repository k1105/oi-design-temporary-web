import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import circleStyles from "../components/circle.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <Link
        href="/"
        className={`${circleStyles.circle} ${circleStyles.circleYellow}`}
      />
      <main className={styles.main}>
        <div className={styles.leftSection}>
          <Image
            src="/image/oi_about_photo.jpg"
            alt="大井勇星"
            width={300}
            height={300}
            className={styles.profileImage}
            priority
          />
          <Image
            src="/gif/face.gif"
            alt=""
            width={300}
            height={300}
            className={styles.faceGif}
            priority
          />
        </div>
        <div className={styles.rightSection}>
          <h1 className={styles.name}>
            <span className={styles.nameHighlight}>大井勇星 / Yusei Oi</span>
          </h1>
          <p className={styles.title}>
            <span className={styles.nameHighlight}>Graphic Designer</span>
          </p>
          <p className={styles.description}>
            2001年和歌山県生まれ。京都精華大学グラフィックデザインコース卒業。MAQを経て、CHOCOLATE（外部パートナー）として活動。2025年よりgroovisions所属。ロゴ、ポスター、パッケージなどのデザインを軸に幅広く手掛けている。
          </p>
          <ul className={styles.timeline}>
            <li>2019-2023 京都精華大学グラフィックデザインコース</li>
            <li>2023-2025 MAQ</li>
            <li>2023-現在 CHOCOLATE (インターン→外部パートナー)</li>
            <li>2025-現在 groovisions</li>
          </ul>
          <div className={styles.contact}>
            <p>
              Instagram →
              <a
                href="https://instagram.com/soboku_design"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--yellow)",
                  padding: "0 0.4em",
                  borderRadius: "0.2em",
                  marginLeft: "0.3em",
                }}
              >
                soboku_design
              </a>
            </p>
            <p>
              Mail →
              <a
                href="mailto:design.oioi.0127@gmail.com"
                style={{
                  backgroundColor: "var(--yellow)",
                  padding: "0 0.4em",
                  borderRadius: "0.2em",
                  marginLeft: "0.3em",
                }}
              >
                design.oioi.0127@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
