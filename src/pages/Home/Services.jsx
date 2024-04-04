
const Services = () => {
    return (
        <div className="m-10">
            <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-3xl font-bold mb-5 text-gray-600">FULL SERVICE JUNK REMOVAL</h1>
                            <h3 className="text-xl mb-5 font-light">We are a family owned junk removal company that was started back in 1978. Our attention to detail and our customer service is why we’ve been in business for over 40 years..</h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>

            <div className="grid grid-cols-3 gap-4 m-10">
            <div className="hero h-80" style={{ backgroundImage: 'url(s1.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Residential</h1>
                    </div>
                </div>
            </div>
            <div className="hero h-80" style={{ backgroundImage: 'url(s2.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Property Management</h1>
                        
                    </div>
                </div>
            </div>
            <div className="hero h-80" style={{ backgroundImage: 'url(s3.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Commercial</h1>
                        
                    </div>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Services;