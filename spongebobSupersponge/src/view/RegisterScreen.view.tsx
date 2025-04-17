import React, { useState } from 'react'
import { RegisterModel } from '../model/register.model';
import { FormComponent } from '../components/Form.generic';

function RegisterScreen() {

  const [registerData, setRegisterData] = useState<RegisterModel>({
    email: '',
    nickname: '',
    password: ''
});

  const keysFormData = ['email', 'nickname', 'password'];

  const onHandleSubmit = (data: RegisterModel) => {
    setRegisterData(prev => ({...prev, data}));
    console.log(registerData);
  }

  return (
    <div  className="w-screen h-screen bg-[url('/register_b.webp')]">
      <div className="flex items-center justify-center ">
        <div  className="relative first-line:relative w-[40%] h-screen pb-20 border-8 border-red-700">
          <img src="/title.png" alt="title logo" 
            className='absolute top-1 left-1/2 -translate-x-1/2 z-20 w-[60%] h-[20%]'
          />
          <img
              src="/bg.png"
              alt="Marco"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-5"
            />

          <FormComponent placeholders={keysFormData} labels={keysFormData} onSubmit={onHandleSubmit}/>
          <p className='p-2 text-blue-800 font-semibold z-30'>¿Ya tienes una cuenta? Inicia sesión <a className='focus:text-red-500'>Aquí</a></p>
        </div>
        <div className="w-[60%] h-screen"></div>
      </div>
    </div>
  );
}

export default RegisterScreen