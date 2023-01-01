import React, {useState} from "react";
// client reviews
const clientReviews = [
  {
    num: 1,
    icon: "fa-solid fa-location-arrow",
    name: "Address",
    desc: "Mirzapur, Tangail, Dhaka, Bangladesh",
  },
  {
    num: 2,
    icon: "fa-solid fa-envelope",
    name: "Email",
    desc: "designermehedimb@gmail.com",
  },
  {
    num: 3,
    icon: "fa-solid fa-phone",
    name: "Phone",
    desc: "+8801783238465",
  },
];
const Contact = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    yourEmail: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('Send Message')
  // handel input change 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // submit form data
   const submitData = (event) => {
     event.preventDefault();
     setFormStatus("Sending Messages...");
     const { firstName, lastName, yourEmail, message } = event.target.elements;
     let conFom = {
       firstName: firstName.value,
       lastName: lastName.value,
       yourEmail: yourEmail.value,
       message: message.value
     };
     console.log(alert(conFom.firstName));
   };
  return (
    <>
      <section className="bg-[url('../../public/images/map-color-overlay.png')] bg-no-repeat bg-cover">
        <div className="container">
          <h4 className="text-2xl md:text-3xl font-bold font-roboto text-center">
            Contact Me
          </h4>
          {/* contact info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8">
            {clientReviews.map((curr, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="bg-slate-200 shadow-sm dark:bg-[#1E1E25] p-6 flex flex-col justify-center items-center text-center space-y-3 rounded-lg">
                    <i
                      className={`${curr.icon} text-3xl rounded-full border-2 border-m-white w-16 h-16 flex justify-center items-center p-8`}></i>
                    <h4 className="font-roboto font-bold text-xl md:text-2xl text-m-pink dark:text-m-yellow">
                      {curr.name}
                    </h4>
                    <span className="font-semibold">{curr.desc}</span>
                  </div>
                </>
              );
            })}
          </div>
          {/* contact form */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            <form
              method="POST"
              onSubmit={submitData}
              className="flex flex-col space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  onChange={handleInputChange}
                  value={values.firstName}
                  name="firstName"
                  className="bg-transparent outline-none rounded-md border p-4 py-2 placeholder:font-roboto placeholder:font-bold"
                  type="text"
                  placeholder="First Name..."
                  required
                  autoComplete="false"
                />
                <input
                  value={values.lastName}
                  onChange={handleInputChange}
                  name="lastName"
                  className="bg-transparent outline-none rounded-md border p-4 py-2 placeholder:font-roboto placeholder:font-bold"
                  type="text"
                  placeholder="Last Name..."
                  required
                  autoComplete="false"
                />
              </div>
              <input
                onChange={handleInputChange}
                value={values.yourEmail}
                name="yourEmail"
                className="bg-transparent outline-none rounded-md border p-4 py-2 placeholder:font-roboto placeholder:font-bold"
                type="email"
                placeholder="Your Email..."
                required
                autoComplete="false"
              />
              <textarea
                onChange={handleInputChange}
                value={values.message}
                name="message"
                className="bg-transparent outline-none rounded-md border p-4 py-2 placeholder:font-roboto placeholder:font-bold"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Messages..."
                required
                autoComplete="false"></textarea>
              <button
                type="submit"
                className="w-full h-auto bg-m-pink dark:bg-m-yellow transition-colors font-roboto font-bold rounded-full p-4 py-2 cursor-pointer">
                {formStatus}
              </button>
            </form>
            <div>
              <iframe
                className="w-full h-[400px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58205.25911401456!2d89.88204925585475!3d24.247769552819268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfbe3d271b363%3A0x8a0d420f347f7c7c!2z4Kaf4Ka-4KaZ4KeN4KaX4Ka-4KaH4Kay!5e0!3m2!1sbn!2sbd!4v1672057653679!5m2!1sbn!2sbd"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
