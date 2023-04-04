import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 
    flex justify-center items-center p-4"
    >
        <form className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-white">Contact</p>
            </div>
            <input className="p-2" type="text" placeholder="Name" name="name" />
            <input className="my-4 p-2" type="email" placeholder="Email" name="email" />
            <textarea className="p-2" name="message" rows="10" placeholder="Enter your message" ></textarea>
        <button className="text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">Submit</button>
        </form>
    </div>
  );
};

export default Contact;
