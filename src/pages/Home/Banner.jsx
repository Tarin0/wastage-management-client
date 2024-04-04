

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(home.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Save Your Planet</h1>
                        <p className="mb-5">We can solve your corporate IT disposition needs quickly and professionally.
                            Save Your community, Save Your planet</p>
                        <button className="btn btn-primary">About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;