import logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <div className='bg-amber-300 grid grid-cols-2 items-center mx-auto px-4 py-2 text-black'>
            <div className='flex justify-center items-center'>
                <img src={logo} alt='logo'></img>
            </div>
            <div className=''>
                <ul className='flex justify-center px-10 gap-6 items-center font-medium'>
                    <li className="hover:text-white cursor-pointer">Home</li>
                    <li className="hover:text-white cursor-pointer">Flights</li>
                    <li className="hover:text-white cursor-pointer">Contact Us</li>
                    <li className="hover:text-white cursor-pointer">Sign Up</li>
                    <li className="hover:text-white cursor-pointer">Sign In</li>
                </ul>
            </div>
            
        
        </div>
    )
}

export default Navbar