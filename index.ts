import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";

fetchProductCatalog()
.then((product) => {
  for (let i = 0; i < product.length; i++) {
    console.log(`${product[i].name}`)
    return fetchProductReviews(product[i].id)
  }
})
.then((review) => {
  console.log(`Product Review: ${review}`)

})
.catch((error) => {
  console.error(error)
})
