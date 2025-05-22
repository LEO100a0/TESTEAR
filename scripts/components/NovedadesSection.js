function NovedadesSection({ addToCart }) {
    const products = [
        {
            id: 101,
            name: "Nuevo alimento premium para gatos",
            description: "Formulado con ingredientes naturales para una nutrición completa.",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 102,
            name: "Juguete interactivo para perros",
            description: "Mantén a tu perro entretenido y estimulado mentalmente.",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 103,
            name: "Jaula moderna para hámsters",
            description: "Diseño innovador con múltiples niveles y accesorios incluidos.",
            price: 39.99,
            image: "https://images.unsplash.com/photo-1553284965-e2815db2e5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Novedades en PetStore</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden pet-card">
                        <img src={product.image} 
                             alt={product.name} 
                             className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-blue-600">${product.price.toFixed(2)}</span>
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}