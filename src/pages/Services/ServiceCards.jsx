import { Link } from "react-router-dom";


const ServiceCards = () => {
    return (
        <div className="grid grid-cols-3 m-14 gap-10">
            <div>
                <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt=""
                        src="/public/service1.jpg"
                        className="h-56 w-full rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracki">Door to Door</h2>
                                <p className="dark:text-gray-100">Clients can simply schedule their hard drive destruction online and through our website</p>
                            </div>

                            <div>
                                <dt className="sr-only">Address</dt>

                                <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                            </div>
                            <div >
                                <Link to="/schedule-form">
                                <button className="btn my-5 flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Click for Schedule</button>
                                </Link>
                            
	
                            </div>
                        </dl>


                    </div>
                </a>
            </div>
            <div>
                <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt=""
                        src="/public/service2.jpg"
                        className="h-56 w-full rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracki">Pickup Services</h2>
                                <p className="dark:text-gray-100">Clients can simply schedule their hard drive destruction online and through our website</p>
                            </div>

                            <div>
                                <dt className="sr-only">Address</dt>

                                <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                            </div>
                            <div >
                            <Link to="/schedule-form">
                                <button className="btn my-5 flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Click for Schedule</button>
                                </Link>
	
                            </div>
                        </dl>


                    </div>
                </a>
            </div>
            <div>
                <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt=""
                        src="/public/service3.jpg"
                        className="h-56 w-full rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracki">Recycling</h2>
                                <p className="dark:text-gray-100">Users quickly replace their electronic devices with newer, faster & stronger gadgets on the market.</p>
                            </div>

                            <div>
                                <dt className="sr-only">Address</dt>

                                <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                            </div>
                            <div >
                            <Link to="/schedule-form">
                                <button className="btn my-5 flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Click for Schedule</button>
                                </Link>
	
                            </div>
                        </dl>


                    </div>
                </a>
            </div>
        </div>
    );
};

export default ServiceCards;