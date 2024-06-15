'use client'
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react';
import {useState} from 'react';

export default function register(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState();
    const route = useRouter();
    const onSubmit = handleSubmit(async (data) => {
        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        })

        if(res.error){
            setError(res.error);
        } else {
            route.push('/dashboard');
            route.refresh();
        }
    })
     return (
        <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
            <form action="" onSubmit={onSubmit} className=''>
                {error && (
                    <p className='text-white p-3 mb-3 bg-red-500'>{error}</p>
                )}
                <h1 className='text-salte-200 font-bold text-white text-4xl mb-9 justify-center flex items-center'>
                Login
                </h1>

                <label htmlFor="email" className='text-slate-500 mb-2 block text-sm'>
                email
                </label>
                <input type="email" 
                {...register("email", {
                    required: {
                        value: true,
                        message: "esta sesion es requerida"
                    }
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300"
                placeholder='example: hugo@gmail.com'
                />
                {
                    errors.email && (
                        <span className='text-red-500 text-xs'>
                            {errors.email.message}
                        </span>
                    )
                }

                <label htmlFor="password" className='text-slate-500 mb-2 block text-sm'>
                password
                </label>
                <input type="password" 
                {...register("password", {
                    required: {
                        value: true,
                        message: "esta sesión es requerida"
                    }
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300"
                placeholder='example: 123'
                />
                {
                    errors.password && (
                        <span className='text-red-500 text-xs'>
                            {errors.password.message}
                        </span>
                    )
                }

                <button
                className='w-full bg-blue-500 text-white p-3 rounded-lg'
                >
                    Register
                </button>

            </form>
        </div>
    )
}