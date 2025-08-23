import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

export const metadata = {
  title: 'My E-Commerce',
  description: 'Landing page with Next.js + Bootstrap',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        {children}
        
        <Footer />
        </body>
    </html>
  )
}
