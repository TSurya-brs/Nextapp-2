import NavBar from "./navbar/page"
import Prac from "./practise/page"
import Login from "./login/page"
import ToDo from "./todo/page"
import Table from "./table/page"
import Header from "./header/page"
import Content from "./content/page"
import Footer from "./footer/page"





const page = () => {
  return (
    <>
    {/* <Prac/> */}
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Content />
      </div>
      <Footer />
    </div>
      {/* {<Login/>} */}
      {/* <NavBar/> */}
      {/* <Log/> */}
      {/* <ToDo/> */}
      {/* <Table/> */}
      
    </>
  )
}

export default page
