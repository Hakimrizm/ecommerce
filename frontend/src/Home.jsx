import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "./Layout"
import Cta from "./components/front/Cta"
import CardProduct from "./components/front/CardProduct"
import Category from "./components/front/Category"
import Footer from "./components/front/Footer"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function halo() {
      try {
        const results = (await axios.get('http://localhost:3000/api/product')).data
        setProducts(results)
      }catch(e) {
        console.log(e)
      }
    }

    halo()
  }, [])

  return (
    <Layout>
      <Cta />

      <div className="flex justify-center mt-4 mb-4">
        <Category />
      </div>

      <div className="container mx-auto p-4 sm:flex sm:gap-5 flex-wrap justify-center mb-4">
        { products.map(product => (
          <CardProduct key={product._id} product={product} />
        )) }
      </div>

      <Footer />
    </Layout>
  )
}
