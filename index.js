import { useEffect, useState } from "react";

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => setProductsInfo(json));
  }, []);

  const categoriesNames = [...new Set(productsInfo.map(p => p.category))];
  console.log(categoriesNames);

  return (
    <div className="p-5">
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            <h2 className="text-2xl capitalize">{categoryName}</h2>
              {productsInfo.filter(p => p.category === categoryName).map(product => (
                <div>{product.name}</div>
              ))}
            </div>
        ))}
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src="/products/iphone.jpg" alt=""/>
            </div>
            <div>
              <h3 className="font-bold text-lg">Iphone 12</h3>
            </div>
            <p className="text-sm mt-1 leading-4">Esimerkki tekstiäEsimerkki tekstiä Esimerkki tekstiä</p>
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">899€</div>
              <button className="bg-emerald-400 text-white py-1 px-3">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
