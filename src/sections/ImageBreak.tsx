import '../styles/ImageBreak.css';

export const ImageBreak = () => {
  return (
    <section className="image-break" data-header-scheme="on-dark">
      <picture>
        <source type="image/webp" srcSet="/images/imagebreak-mountain.webp" />
        <img
          src="/images/imagebreak-mountain.webp"
          alt="Paisaje de montaña con fuente de agua natural en Colombia"
          className="image-break__bg"
          loading="lazy"
          decoding="async"
          width="1920"
          height="1280"
        />
      </picture>
      <div className="image-break__overlay" />
      <div className="image-break__content">
        <h2 className="image-break__title">
          Desde el manantial<br />hasta tu oficina
        </h2>
        <p className="image-break__sub">
          Agua de origen de montaña, purificada con microfiltración y desinfección con rayos UV. Entregada directamente en tu sede.
        </p>
      </div>
    </section>
  );
};
