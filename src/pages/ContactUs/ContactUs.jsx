import toast from "react-hot-toast";

const ContactUs = () => {
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const userEmail = form.email.value;
        const userName = form.name.value;
        const userPhone = form.phone.value;
        const message = form.message.value;
        const userCity = form.city.value;

        try {

            const property = { userEmail, userName, userPhone, message, userCity};
            fetch('https://wastage-management-server.vercel.app/contact', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(property)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success('Your contact info added');
                        form.reset();
                    }
                })
        }
        catch (err) {
            toast.error(err);
        }

    };

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(contactus.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-semibold">CONTACT US TODAY</h1>

                    </div>
                </div>
            </div>

            <section className="m-16 py-6 bg-gray-800 text-gray-50">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">TrashCo Removal Service</p>
                        <p className="pt-2 pb-4">Serving Los Angeles and Orange County!</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Chittagong, Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>trashco@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input name="name" type="text" placeholder="Your Name" className="h-12 border border-gray-500 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input name="email" type="email" placeholder="Your Email" className="h-12 border border-gray-500 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">PickUp City or Zip Code</span>
                            <input name="city" type="text" placeholder="PickUp City or Zip Code" className="h-12 border border-gray-500 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Your Phone</span>
                            <input name="phone" type="text" placeholder="Your Phone" className="h-12 border border-gray-500 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea name="message" rows="3" placeholder="Your Message" className="h-20 border border-gray-500 block w-full rounded-md focus:ring focus:ri focus:ri bg-gray-800"></textarea>
                        </label>
                        <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-violet-400 text-gray-900 focus:ri hover:ri">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;