
import Image from "next/image";
import { FC } from "react";

import styles from '../../../styles/home/ProductCard.module.scss';
import AddCartButton from "./AddCartButton";

// Interfaz de los productos
interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface Props {
    products: Product[]; // Recibe un arreglo de productos
}

const ProductCard: FC<Props> = ({ products }) => {
    return (
        <div className={styles.card_container}>
            {products.map((product) => (
                <figure key={product.id} className={styles.figure_container}>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={477}
                        height={300}
                    />
                    <figcaption className={styles.figcaption_container}>
                        <h1>{product.name}</h1>
                        <div className={styles.subcontainer_card}>
                            <p>${product.price.toFixed(2)}</p>
                            <AddCartButton />
                        </div>
                    </figcaption>
                </figure>
            ))}
        </div>
    );
};

export default ProductCard;