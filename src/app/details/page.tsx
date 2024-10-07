import { vendored } from 'next/dist/server/future/route-modules/pages/module.compiled';
import styles from '../../../styles/product/ProductDetailPage.module.scss';

import WatchOtherProducts from '../components/WatchOtherProducts';
import ProductCardInfo from "../components/ProductCardInfo";
import TechnicalSpecs from "../components/TechnicalSpecs";

const product = { id: 1, name: 'Smartphone Pro Max', price: 999.99, imageUrl: '/camera.png' };

const productInfo = {id: 2, name: 'Camera Pro', price: 1299.99, description: 'It is the perfect choice for professionals, with high resolution sensor and advanced autofocus system, you will capture stunning imags in any situation.', imageUrl: '/camera.png'};  
function ProductDetails() {
  return (
    <div>
        <ProductCardInfo product={productInfo} />
        <div className={styles.container_sec_section}>
            <TechnicalSpecs />
            <WatchOtherProducts product={product} />
        </div>
        
    </div>
  );
}
export default ProductDetails;