export default function CardProduct({ product }) {
  return (
    <div className="card sm:w-72 sm:mb-0 mb-4">
      <div className="card-body">
        <h1 className="text-2xl font-semibold mb-3">{ product.name }</h1>
        <p className="mb-3">{ product.description }</p>
        <p className="text-2xl font-semibold mb-3">${ product.price }</p>
        <button type="button" className="btn-success w-full">Add To Cart</button>
      </div>
    </div>
  )
}
