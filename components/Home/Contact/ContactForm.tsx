import React from 'react';

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
      <h1 className='text-white text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>
        Let's Work Together!
      </h1>
      <p className='text-gray-300 mt-3 text-sm md:text-base'>
        Silakan isi formulir di bawah ini untuk menghubungi kami.
      </p>

      {/* input fields */}
      <form className='mt-8 w-full space-y-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder='First name'
            className='bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border border-gray-600 w-full'
          />
          <input
            type='text'
            placeholder='Last name'
            className='bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border border-gray-600 w-full'
          />
          <input
            type='email'
            placeholder='Email address'
            className='bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border border-gray-600 w-full'
          />
          <input
            type='text'
            placeholder='Phone number'
            className='bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border border-gray-600 w-full'
          />
        </div>

        <select
          className='w-full bg-black text-white placeholder:text-gray-500 px-4 py-3.5 rounded-md border border-gray-600'
        >
          <option value="">Select Service</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="fullstack">Fullstack Development</option>
        </select>

        <textarea
          rows={6}
          placeholder='Your message...'
          className='w-full bg-black text-white placeholder:text-gray-500 px-4 py-3 rounded-md border border-gray-600'
        ></textarea>
        
        <div>
          <button
            type='submit'
            className='w-full md:w-auto px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
