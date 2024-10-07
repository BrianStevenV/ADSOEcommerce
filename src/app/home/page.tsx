import BannerHome from "../components/BannerHome"
import ProductCard from "../components/ProductCard"


const productList = [
  { id: 1, name: 'Smartphone Pro Max', price: 999.99, imageUrl: '/camera.png' },
  { id: 2, name: 'Wireless Earbuds', price: 199.99, imageUrl: '/camera.png' },
  { id: 3, name: '4K Smart TV', price: 799.99, imageUrl: '/camera.png' },
];

function HomePage() {
  return (
    <div>
        <BannerHome />

        <section style={{margin: '6rem', marginBottom: '3.7rem'}}>
            <h1>
                Feature Products
            </h1>
        </section>

        <section>
            <ProductCard products={productList} />
        </section>

    </div>
  )
}
export default HomePage