export default function ProductPackaging({ product }) {
  const variantClass = [
    product.style === 'gift' && 'product-gift',
    product.style === 'limited' && 'product-limited',
    product.style === 'reserve' && 'product-reserve',
    product.style === 'stick' && 'product-stick',
    product.style === 'gear' && 'product-gear',
  ]
    .filter(Boolean)
    .join(' ') || 'product-bag';

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (product.style === 'pods') {
    return (
      <div className="pod-box">
        <div className="pod-panel">
          <img src={`${basePath}/assets/logo.png`} alt="LX SHOT logo" className="pack-brand-logo" />
          <img src={product.image} alt={product.imageAlt} className="pod-logo" />
          <div className="pod-brand">PREMIUM COFFEE PODS</div>
          <div className="pod-detail">{product.weight}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`product-package ${variantClass}`}>
      <div className="bag-seal" />
      <div className="bag-body">
        <img src={`${basePath}/assets/logo.png`} alt="LX SHOT logo" className="pack-brand-logo" />
        <img src={imageSrc} alt={product.imageAlt} className="bag-logo" />
        <div className="bag-title">{product.name}</div>
        <div className="bag-badge">{product.weight}</div>
        <p className="bag-copy">{product.description}</p>
        {product.style === 'gift' && <div className="gift-pill">Gift-ready ritual</div>}
      </div>
    </div>
  );
}
