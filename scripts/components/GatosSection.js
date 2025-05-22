function GatosSection({ addToCart }) {
    const catProducts = [
        {
            id: 1,
            name: "Alimento para gatos adultos",
            description: "Alimento balanceado con proteína de alta calidad.",
            price: 18.99,
            image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            name: "Rascador de 3 niveles",
            description: "Rascador con plataformas para descanso y juego.",
            price: 45.99,
            image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 3,
            name: "Juguete con plumas",
            description: "Varita con plumas para estimular el instinto de caza.",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 4,
            name: "Arena aglomerante",
            description: "Arena perfumada que facilita la limpieza.",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Productos para Gatos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {catProducts.map(product => (
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