import '../styles/ImageBreak.css';

export const ImageBreak = () => {
  return (
    <section className="image-break" data-header-scheme="on-dark">
      <img
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80"
        alt="Paisaje de montaña y agua"
        className="image-break__bg"
      />
      <div className="image-break__overlay" />
      <div className="image-break__content">
        <h2 className="image-break__title">
          Desde el manantial<br />hasta tu oficina
        </h2>
        <p className="image-break__sub">
          Agua de origen de montaña, purificada con 5 etapas de filtración y entregada directamente en tu sede.
        </p>
      </div>
    </section>
  );
};
