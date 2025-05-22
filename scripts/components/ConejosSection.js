function ConejosSection({ addToCart }) {
    const rabbitProducts = [
        {
            id: 9,
            name: "Alimento para conejos",
            description: "Mezcla balanceada de heno, vegetales y granos.",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1556838803-cc94986cb631?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 10,
            name: "Jaula espaciosa",
            description: "Amplia jaula con área de descanso y comedero incluido.",
            price: 59.99,
            image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 11,
            name: "Juguete de madera",
            description: "Bloques de madera seguros para masticar.",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 12,
            name: "Bebedero automático",
            description: "Dispensador de agua que mantiene el líquido fresco.",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Productos para Conejos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {rabbitProducts.map(product => (
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