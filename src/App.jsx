import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-800">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600"></div>
            © {new Date().getFullYear()} AcmeCloud. All rights reserved.
          </div>
          <div className="text-sm text-slate-600 flex gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App