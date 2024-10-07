import { FC } from 'react';

import Image from 'next/image';

import styles from '../../../styles/product/WatchOtherProducts.module.scss';
import AddCartButton from './AddCartButton';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface Props {
    product: Product;
}

const WatchOtherProducts: FC<Props> = ({ product }) => {
    return(
        <figure className={styles.figure__container}>
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={477}
                height={300}
            />
            <figcaption className={styles.figcaption}>
                <h1>{product.name}</h1>
                <div className={styles.subcontainer}>
                    <p>$ {product.price}</p>
                    <AddCartButton />
                </div>
                
            </figcaption>
        </figure>
    )
}

export default WatchOtherProducts;