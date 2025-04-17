import { useState } from "react";
import { FormPropsModel } from "../model/form.props.model";

export const FormComponent: React.FC<FormPropsModel> = ({placeholders, labels, onSubmit}) => {
    const [formData, setFormData] = useState({
        email: '',
        nickname: '',
        password: ''
    });

    const onHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    type formkey = keyof typeof formData;
    return(
    <div className="h-screen flex-col items-center justify-center z-10  border-8 border-black">
        <form action="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-10  border-8 border-blue-600" onSubmit={(e) => {
            e.preventDefault()
            onSubmit(formData)
            }}
            >
            {labels.map((label: string, index: number) => {
                const key = placeholders[index] as formkey;
                return (
                    <div className="mb-4" key={index}>
                        <label className="block mb-1 font-medium text-blue-800" htmlFor={label}>{label}</label>
                        <input className="w-full border border-gray-300 rounded px-4 py-2 bg-blue-500/20 text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name={placeholders[index]} id={placeholders[index]} value={formData[key]} onChange={onHandle}/>
                    </div>
                );
            })}

            <button>Registrarse</button>
            
        </form>
    </div>
    );
}
