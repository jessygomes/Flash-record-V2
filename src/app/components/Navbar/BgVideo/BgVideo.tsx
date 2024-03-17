import styles from "./BgVideo.module.css";
import Video from "next-video";

export default function BgVideo() {
  return (
    <div className={styles.containerVideo}>
      <Video
        className={styles.bg__video}
        src="/videos/videprezcompr.mp4"
        controls={false}
        muted
        autoPlay
        playsInline
        loop
      />
    </div>
  );
}
