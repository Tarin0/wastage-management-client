import toast from "react-hot-toast";

const ScheduleForm = () => {
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const userEmail = form.emailAddress.value;
        const userName = form.username.value;
        const userPhone = form.phone.value;
        const userCity = form.city.value;
        const userZipCode = form.zipCode.value;
        const preferredTime = form.preferredTime.value;
        const date = form.date.value;
        const location = form.location.value;
        const info = form.info.value;

        try {
            const property = { userEmail, userName, userPhone, userCity, userZipCode, preferredTime, date, location, info };
            
            fetch('https://wastage-management-server.vercel.app/schedule-info', {
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
                        toast.success('Your schedule info added');
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
            <section className="my-10 max-w-4xl p-6 mx-auto bg-gray-900 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Book a Schedule</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" >Username</label>
                            <input name="userName" id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Email Address</label>
                            <input name="email" id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Phone Number</label>
                            <input name="phone" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Location</label>
                            <input name="location" id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Street Address</label>
                            <input name="streetAddress" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Flat No</label>
                            <input name="flatNo" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >City</label>
                            <input name="city" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Zip Code</label>
                            <input name="zipCode" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>
                        
                        
                        <div>
                            <label className="text-white dark:text-gray-200" >Prefered Time</label>
                            <select name="preferredTime" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option>9:00 am - 11:00 am</option>
                                <option>11:00 am - 1:00 pm</option>
                                <option>1:00 pm - 3:00 pm</option>
                                <option>3:00 pm - 5:00 am</option>
                            </select>
                        </div>
            
                        <div>
                            <label className="text-white dark:text-gray-200" >Date</label>
                            <input name="date" id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Anything else we should know?</label>
                            <textarea name="info" id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                       
                    </div>

                    <div className="flex justify-end mt-6">
                        <button  type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Submit</button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default ScheduleForm;