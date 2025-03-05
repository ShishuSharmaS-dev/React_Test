const ProductList = () => {
    const products=[{id:1, Name:"abc", Price:400},
                    {id:2, Name:"xyz", Price:350},
                    {id:3, Name:"sss", Price:500}
    ]
  return (
    <div>
      {products.map(p=>(
        <div key={p.id}>
            <p>id: {p.Name}</p>
            <p>Name: {p.Name}</p>
            <p>Price: {p.Price}</p>
        </div>
      ))}
    </div>
  )
}
export default ProductList
