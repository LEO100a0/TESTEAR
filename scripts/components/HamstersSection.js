function HamstersSection({ addToCart }) {
    const hamsterProducts = [
        {
            id: 13,
            name: "Alimento para hámsters",
            description: "Mezcla de semillas, granos y frutas secas.",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1621553820502-7df2751f58d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 14,
            name: "Rueda de ejercicio silenciosa",
            description: "Rueda que no hace ruido para ejercicio nocturno.",
            price: 19.99,
            image: "https://images.unsplash.com/photo-1584555130003-7a8a0d4247b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 15,
            name: "Casa de madera",
            description: "Pequeña casa para esconderse y dormir.",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1584555130107-824215c4838e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 16,
            name: "Túnel de plástico",
            description: "Set de túneles para explorar y jugar.",
            price: 14.99,
            image: "https://images.unsplash.com/photo-1584555130170-9d0875e03c07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Productos para Hámsters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hamsterProducts.map(product => (
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