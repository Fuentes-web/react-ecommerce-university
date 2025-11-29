import { useParams, useLocation, Link } from 'react-router-dom';
import type { Producto } from '../../services/ecommerce/productos.services';

export default function ProductDetail() {
  const { id } = useParams();
  const { state } = useLocation();

  const producto: Producto | undefined = state?.producto;

  if (!producto) {
    return (
      <div className="container py-5">
        <h2>No se encontró el producto</h2>
        <p>Debes ingresar desde la página principal.</p>

        <Link to="/" className="btn btn-secondary">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <h1 className="mb-4">{producto.nombre}</h1>

      <div className="row">
        
        {/* Imagen */}
        <div className="col-md-6">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded"
          />
        </div>

        {/* Info del producto */}
        <div className="col-md-6">

          <p className="text-muted">{producto.descripcion}</p>

          <h3 className="text-primary fw-bold">
            ${producto.precio.toFixed(2)}
          </h3>

          <p className="mt-3">
            <strong>Categoría:</strong> {producto.categoria}
          </p>

          <p>
            <strong>Stock:</strong>{" "}
            {producto.stock > 0 ? `${producto.stock} unidades` : "Agotado"}
          </p>

          <Link to="/" className="btn btn-secondary mt-4">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}
