import type { Product } from '../../lib/products'

const whatsappPhone = '2348086622817'

export default function ProductCard({ product }: { product: Product }) {
  const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    `Hi Pel’s Artistry, I’d like to order the ${product.name}.`
  )}`

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
      <div className="relative h-48 overflow-hidden bg-[#f8f3f2]">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#800020]">{product.name}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold text-slate-950">{product.price}</p>
          <a
            href={whatsappLink}
            className="inline-flex items-center rounded-full bg-[#800020] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#610018]"
          >
            Order
          </a>
        </div>
      </div>
    </article>
  )
}
