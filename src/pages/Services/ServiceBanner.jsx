import ServiceCards from "./ServiceCards";

const ServiceBanner = () => {
    return (
        <div>
             <div className="hero min-h-screen" style={{ backgroundImage: 'url(contactus.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-semibold">Our Services</h1>

                    </div>
                </div>
            </div>
            <ServiceCards></ServiceCards>
        </div>
    );
};

export default ServiceBanner;