import { BrowserRouter as Router , Routes ,Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import Tickets from "./pages/ticket/Tickets"
import Detail from "./pages/ticket/detail/Detail"
import Checkout from "./pages/ticket/checkout/Checkout"
import Invoice from "./pages/ticket/invoice/Invoice"
import SignIn from "./pages/signIn/SignInPage"
import Services from "./pages/service/ServiceMain"
import SignUp from "./pages/signUp/SignUpPage"
function App() {

  return (
    <>
      <Router>
        <main className="w-full flex flex-col bg-neutral-50 min-h-screen">

          {/* navbar */}
          <Navbar />

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />} />
            <Route path="/bus-ticket" element={<Tickets />}/>
            <Route path="/bus-ticket/checkout" element={<Checkout />}/>
            <Route path="/bus-ticket/payment" element={<Invoice />}/>
            <Route path="/bus-ticket/detail" element={<Detail />}/>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>

          {/* Footer */}
          <Footer />

        </main>
      </Router>
    </>
  )
}

export default App
