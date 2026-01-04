import Navigation from './Navigation'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navigation />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
