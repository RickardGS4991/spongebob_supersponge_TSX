import React, { useState } from 'react'

function RegisterScreen() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div  className="relative w-screen h-screen bg-[url('/register_b.webp')]">
      <div className="flex items-center justify-center">
        <div  className="relative w-[40%] h-screen p-10">
          <img
              src="/bg.png"
              alt="Marco"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
            />
          <form action="" className="relative z-20 flex flex-col justify-center items-center px-6 py-10">
          <div className="relative z-30 flex flex-col items-center justify-center">
            <img
              src="/title.png"
              alt="decoración"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] object-contain"
            />
            <h2 className="relative z-10 text-3xl font-bold text-center text-blue-500 mb-2">
              Registro
            </h2>
          </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-blue-400" htmlFor="username">Username</label>
              <input type="text" name="name" id="name" value={formData.username} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 bg-blue-500/20 text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div className='mb-4'>
              <label className="block mb-1 font-medium text-blue-500" htmlFor="email">Email</label>
              <input type="text" name='email' id='email' value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 bg-blue-500/20 text-blue-900 placeholder-blue-900 focus:outline-noe focus:ring-2 focus:ring-blue-500" />
            </div>
          </form>
        </div>
        <div className="w-[60%] h-screen"></div>
      </div>
    </div>
  );
}

export default RegisterScreen