import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Social media icons

const Footer = () => {
    return (
        <div className="bg-amber-300  bottom-0 w-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="text-center sm:text-left">
                    <h3>Fly Now won the Best Airline Ticket Booking System in Bangladesh</h3>
                    <p> We Serve, You Fly</p>
                </div>

                <div className="text-center sm:text-left">
                    <ul>
                        <li>Delivery Charges</li>
                        <li>Terms & Conditions</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <ul>
                        <li>Find us at:</li>
                        <li>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2"
                                aria-label="Facebook"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2"
                                aria-label="Instagram"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2"
                                aria-label="Twitter"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                                <span>Twitter</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-center">
                &copy; {new Date().getFullYear()} Fly Now. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
