import Image from "next/image"
import{ FC } from "react"
import styles from '../../../styles/product/ProductCardInfo.module.scss'
import AddProductCartButton from "./AddProductCartButton";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

interface Props {
    product: Product;
}

const ProductCardInfo: FC<Props> = ({ product }) => {
  return (

    <figure className={styles.figure_card_container}>
        <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={500}
            className={styles.image}
        />
        <figcaption className={styles.figcaption}>
            <h1 className={styles.figcaption__title}>{product.name}</h1>
            <p className={styles.figcaption__price}>$ {product.price}</p>
            <p className={styles.figcaption__description}>{product.description}</p>
            <AddProductCartButton />
        </figcaption>
    </figure>
  )
}
export default ProductCardInfo