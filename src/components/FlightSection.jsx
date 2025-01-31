


const FlightSection = () => {
    // Demo flight details with images
    const flights = [
        { id: 1, name: "Dhaka to New York", price: "$1200", duration: "16h 30m", image: "https://cdn.britannica.com/95/5395-050-EFC8AB0B/City-Afyonkarahisar-volcanic-rock-Turkey-cone.jpg" },
        { id: 2, name: "London to Tokyo", price: "$950", duration: "14h 20m", image: "https://cdn.britannica.com/95/5395-050-EFC8AB0B/City-Afyonkarahisar-volcanic-rock-Turkey-cone.jpg" },
        { id: 3, name: "Dubai to Sydney", price: "$1100", duration: "13h 50m", image: "https://cdn.britannica.com/95/5395-050-EFC8AB0B/City-Afyonkarahisar-volcanic-rock-Turkey-cone.jpg" },
        { id: 4, name: "Toronto to Paris", price: "$850", duration: "7h 45m", image: "https://cdn.britannica.com/95/5395-050-EFC8AB0B/City-Afyonkarahisar-volcanic-rock-Turkey-cone.jpg" },
        { id: 5, name: "Bangkok to Los Angeles", price: "$1050", duration: "17h 10m", image: "https://cdn.britannica.com/95/5395-050-EFC8AB0B/City-Afyonkarahisar-volcanic-rock-Turkey-cone.jpg" },
        { id: 6, name: "Singapore to Berlin", price: "$980", duration: "12h 30m", image: "https://cdn.britannica.com/95/5395-050-EFC8AB0B/City-Afyonkarahisar-volcanic-rock-Turkey-cone.jpg" },
    ];

    return (
        <div className="flex flex-col items-center py-10 bg-gray-100">
            <h2 className="text-2xl font-bold mb-6">Flight Deals</h2>

            {/* Flight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
                {flights.map((flight) => (
                    <div 
                        key={flight.id} 
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
                    >
                        <img src={flight.image} alt={flight.name} className="w-full h-40 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold mb-2">{flight.name}</h3>
                            <p className="text-gray-600">Price: <span className="font-bold">{flight.price}</span></p>
                            <p className="text-gray-500">Duration: {flight.duration}</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlightSection;
