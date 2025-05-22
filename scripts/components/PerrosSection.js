function PerrosSection({ addToCart }) {
    const dogProducts = [
        {
            id: 5,
            name: "Alimento para perros adultos",
            description: "Nutrición completa con carne real como primer ingrediente.",
            price: 22.99,
            image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 6,
            name: "Correa resistente",
            description: "Correa de nylon reforzado de 2 metros de largo.",
            price: 14.99,
            image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 7,
            name: "Juguete de goma duradero",
            description: "Ideal para perros que muerden fuerte, resistente a roturas.",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 8,
            name: "Cama ortopédica",
            description: "Cama suave con soporte para articulaciones.",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Productos para Perros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dogProducts.map(product => (
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