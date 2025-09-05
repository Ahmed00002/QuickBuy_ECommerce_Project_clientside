import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

const BestSellingProducts = () => {
  const products = [
    { id: 1, name: "Product 1", price: 100, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 150, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 200, image: "product3.jpg" },
    {
      id: 4,
      name: "Product 4",
      price: 250,
      image: "product4.jpg",
      isDiscount: true,
    },
  ];
  return (
    <>
      <section className="center mt-36 pb-16 border-b-[2px] mb-3">
        <SectionTitle
          heading={"Best Selling"}
          title={"Best Selling Products"}
          isViewMore={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <>
              <div>
                <ProductCard key={product.id} product={product} />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default BestSellingProducts;
