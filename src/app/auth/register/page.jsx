'use client'
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/navigation'

export default function register(){

    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();
    const onSubmit = handleSubmit(async (date) => {

        if(date.password != date.confirmPassword){
            return alert('el password no es igual');
        }

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                name: date.name,
                username: date.username,
                email: date.email,
                password: date.password
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
        if(res.ok){
            router.push('/auth/login');
        }
        const resJSON = await res.json();
        console.log(resJSON);

    })

     return (
        <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
            <form action="" onSubmit={onSubmit} className=''>
                <h1 className='text-salte-200 font-bold text-white text-4xl mb-9 justify-center flex items-center'>
                Registrar
                </h1>
                <label htmlFor="name" className='text-slate-500 mb-2 block text-sm'>
                    Name
                </label>
                <input type="text"
                {...register("name", {
                    required: {
                        value: true,
                        message: "este campo es obligatorio"
                    }
                })}
                className='p-3 rounded block mb-2 bg-slate-900 text-slate-300'
                placeholder='example: hugo'
                />
                {
                    errors.name && (
                        <span className='text-red-500 text-xs'>
                            {errors.name.message}
                        </span>
                    )
                }

                <label htmlFor="username" className='text-slate-500 mb-2 block text-sm'>
                Username
                </label>
                <input type="text" 
                {...register("username", {
                    required: {
                        value: true,
                        message: "esta sesión es requerida"
                    }
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300"
                placeholder='example: hugo24'
                />
                {
                    errors.username && (
                        <span className='text-red-500 text-xs'>
                            {errors.username.message}
                        </span>
                    )
                }

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

                <label htmlFor="confirPassword" className='text-slate-500 mb-2 block text-sm'>
                confirPassword
                </label>
                <input type="password" 
                {...register("confirmPassword", {
                    required: {
                        value: true,
                        message: "esta sesion es requerida"
                    }
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300"
                placeholder='example: 123'
                />

                {
                    errors.confirmPassword && (
                        <span className='text-red-500 text-xs'>
                            {errors.confirmPassword.message}
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