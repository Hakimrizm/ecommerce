import { useState, useEffect } from "react"
import axios from "axios"

export default function TableProduct() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function halo() {
      try {
        const results = (await axios.get('http://localhost:3000/api/product')).data
        setProducts(results)
        console.log(products)
      }catch(e) {
        console.log(e)
      }
    }

    halo()
  }, [])

  return (     
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr className="bg-white border-b dark:bg-gray-900" key={product._id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  { product.name }
                </th>
                <td className="px-6 py-4">
                  { product.description }
                </td>
                <td className="px-6 py-4">
                  { product.category.name }
                </td>
                <td className="px-6 py-4">
                  ${ product.price }
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                </td>
              </tr>
              // <h1>asd</h1>
            ))
          }
          </tbody>
      </table>
    </div>
  )
}