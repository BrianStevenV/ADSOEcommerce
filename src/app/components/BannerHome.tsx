import Image from "next/image";
import styles from '../../../styles/home/BannerHome.module.scss';

function BannerHome() {
  return (
    <figure className={styles.figure}>
            <Image
                src="/camera.png"
                alt="Home"
                width={380}
                height={380}
            />
            <figcaption className={styles.figcaption}>
                <h1>Professional Audiovisual Products</h1>
                <p>Discover our selection of high-quality equipment for your creative projects</p>
            </figcaption>
      </figure>
  )
}
export default BannerHome;