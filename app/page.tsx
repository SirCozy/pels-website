import ProductCard from './components/ProductCard'
import { products } from '../lib/products'

const whatsappPhone = '2348086622817'
const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  'Hi Pel’s Artistry, I’d love to order a handcrafted décor piece.'
)}`

const services = [
  'Custom décor design',
  'Personalized space styling',
  'Handcrafted aesthetic pieces',
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ash text-slate-950">
      <header className="border-b border-white/70 bg-ash/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <span className="text-lg font-semibold uppercase tracking-[0.28em] text-[#800020]">
            Pel’s Artistry
          </span>
          <a
            href={whatsappLink}
            className="inline-flex items-center rounded-full bg-[#800020] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#610018]"
          >
            Order on WhatsApp
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-16 pt-14 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(128,0,32,0.16),_transparent_45%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex rounded-full border border-[#800020] bg-white/80 px-3 py-1 text-sm uppercase tracking-[0.24em] text-[#800020] shadow-sm">
              Premium handcrafted décor
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Handcrafted décor that brings elegance and personality into every space.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
              Pel’s Artistry creates elegant, aesthetic, and meaningful décor pieces designed to transform spaces with warmth, texture and timeless style.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center rounded-full bg-[#800020] px-7 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#610018]"
              >
                Order on WhatsApp
              </a>
              <a href="#products" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300">
                View products
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:max-w-xl">
            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#800020]">Elegant craft</p>
              <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">Luxury décor with a calm, modern aesthetic.</p>
            </div>
            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#800020]">Meaningful spaces</p>
              <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">Each piece is made to reflect the people who live with it.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/70 bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#800020]">About Pel’s Artistry</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Crafted with intention, texture, and storytelling.
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Pel’s Artistry started from a love for turning simple spaces into something beautiful and meaningful. What began as a personal passion for crafts and decor has grown into a brand that brings warmth, elegance, and personality into every space. Each piece is created with intention — not just to decorate, but to tell a story and reflect the people who live with it.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#800020]">Featured products</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Elegant décor pieces ready to transform your space.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Browse handcrafted décor designed for premium interiors, with calm textures and thoughtful finishes. Tap any product to begin your WhatsApp order.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/70 bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-[2rem] border border-slate-200 bg-ash/80 p-8 shadow-soft"
              >
                <h3 className="text-xl font-semibold text-slate-950">{service}</h3>
                <p className="mt-4 text-slate-600">Delivered with premium craftsmanship, calm styling, and timeless elegance.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-[#800020] px-8 py-12 text-white shadow-soft sm:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-ash">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Start your custom décor order on WhatsApp.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ash/90">
                Quick quote, design guidance, and order support through WhatsApp. Pel’s Artistry is here to make your next décor piece feel personal and beautifully styled.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#800020] shadow-soft transition hover:bg-slate-100"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/10 p-6 text-sm text-white sm:p-8">
              <div>
                <p className="font-semibold text-ash">Phone</p>
                <p className="mt-2">08086622817</p>
                <p>08103120512</p>
              </div>
              <div>
                <p className="font-semibold text-ash">Social</p>
                <p className="mt-2">Instagram: @pels_artistry</p>
                <p>TikTok: @pelsartistry</p>
              </div>
              <div>
                <p className="font-semibold text-ash">Email</p>
                <p className="mt-2">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
