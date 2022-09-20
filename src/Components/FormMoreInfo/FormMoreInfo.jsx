import React from 'react'
import { useForm } from 'react-hook-form'
import FormImg from './Assets/Img/FormImg.png'
import './Assets/styles.css'

const FormMoreInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className='formMoreInfo'>
        <div className='formMoreInfo_img'>
            <div style={{ backgroundColor: 'rgba(0, 66, 116, .5)', width: '100%', height: '100%', position: 'absolute', top: 0 }} />
            <img src={FormImg} alt="formImg" />
        </div>
        <div className='formMoreInfo_form'>
            <div className='formMoreInfo_form_'>
                <div className='formMoreInfo_form_title'>
                    <h2>Solicita una <span>Cita en linea</span></h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='formMoreInfo-form_form'>
                    <h3>Nombre</h3>
                    <div className='formMoreInfo-form_input'>
                        <input type="text" {...register('name', {required: true})} placeholder='Nombre Completo' />
                    </div>
                    {errors.name?.type === 'required' &&
                        <p className='errorRequired'>Debe colocar su nombre completo</p>
                    }
                    <h3>Nacionalidad</h3>
                    <div className='formMoreInfo-form_input'>
                        <input type="text" {...register('nationality', {required: true})} placeholder='Nacionalidad' />
                    </div>
                    {errors.nationality?.type === 'required' &&
                        <p className='errorRequired'>Debe colocar su nacionalidad</p>
                    }
                    <h3>ID ó Pasaporte</h3>
                    <div className='formMoreInfo-form_input'>
                        <input type="text" {...register('identification', {required: true})} placeholder='Número de ID ó Pasaporte' />
                    </div>
                    {errors.identification?.type === 'required' &&
                        <p className='errorRequired'>Debe colocar su idenificación o pasaporte</p>
                    }
                    <h3>Teléfono</h3>
                    <div className='formMoreInfo-form_input'>
                        <input type="number" {...register('num', {required: true})} placeholder='Numero Célular' />
                    </div>
                    {errors.num?.type === 'required' &&
                        <p className='errorRequired'>Debe colocar su número celular</p>
                    }
                    <h3>Procedimiento</h3>
                    <div className='formMoreInfo-form_input'>
                        <input type="text" {...register('procedure')} placeholder='Procedimiento a realizar' />
                    </div>
                    <h3>Mensaje</h3>
                    <div className='formMoreInfo-form_inputMessage'>
                        <textarea {...register('message')} placeholder='Coloque aquí su mensaje' />
                    </div>
                    <div className='formMoreInfo-form_inputSubmit'>
                        <input type="submit" value='Enviar' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormMoreInfo