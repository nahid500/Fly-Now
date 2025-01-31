const SearchFlights = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
            <h2 className="text-2xl font-bold mb-6">Search Flights</h2>
            
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Departure Input */}
                    <div>
                        <label className="block text-gray-700">From</label>
                        <select className="w-full p-2 border rounded">
                            <option value="">Select Departure City</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="chittagong">Chittagong</option>
                            <option value="sylhet">Sylhet</option>
                        </select>
                    </div>

                    {/* Destination Input */}
                    <div>
                        <label className="block text-gray-700">To</label>
                        <select className="w-full p-2 border rounded">
                            <option value="">Select Destination</option>
                            <option value="new-york">New York</option>
                            <option value="london">London</option>
                            <option value="dubai">Dubai</option>
                        </select>
                    </div>

                    {/* Date Picker */}
                    <div>
                        <label className="block text-gray-700">Departure Date</label>
                        <input type="date" className="w-full p-2 border rounded" />
                    </div>

                    {/* Passenger Count */}
                    <div>
                        <label className="block text-gray-700">Passengers</label>
                        <select className="w-full p-2 border rounded">
                            <option value="1">1 Passenger</option>
                            <option value="2">2 Passengers</option>
                            <option value="3">3 Passengers</option>
                            <option value="4">4+ Passengers</option>
                        </select>
                    </div>

                    {/* Search Button */}
                    <div className="col-span-2 text-center">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            Search Flights
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchFlights;
