import Header from "./ui/Header"
import Footer from "./ui/Footer"
import Container from "./ui/Container"
import BannerCategories from "./ui/BannerCategories"
import HomeBanner from "./ui/HomeBanner"
import Highlights from "./ui/Highlights"
import  Categories  from "./ui/Categories"
import ProductList from "./ui/ProductList"

function App() {

  return (
    <main>
      <BannerCategories/>
      <HomeBanner/>
      <Highlights/>
      <Categories/>
      <ProductList/>
      {/* <DiscountedBanner/> */}
      {/* <Blog/> */}
    </main>
  )
}

export default App
