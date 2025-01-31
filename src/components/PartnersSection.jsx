import p1 from '../images/p1.jpeg'
import p2 from '../images/p2.jpeg'
import p3 from '../images/p3.jpeg'
import p4 from '../images/p4.jpeg'
import p5 from '../images/p5.jpeg'
import p6 from '../images/p6.jpeg'


const PartnersSection = () => {
    const partners = [
        { name: "Qatar Airways", logo: p1},
        { name: "Emirates", logo: p2 },
        { name: "Singapore Airlines", logo: p3 },
        { name: "Turkish Airlines", logo: p4 },
        { name: "British Airways", logo: p5 },
        { name: "Saudi Airways", logo: p6 }
    ];

    return (
        <div className="flex flex-col items-center py-10 bg-gray-100">
            <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
                {partners.map((partner, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center">
                        <img src={partner.logo} alt={partner.name} className="h-25 mb-4 object-contain" />
                        <h3 className="text-lg font-semibold">{partner.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnersSection;
