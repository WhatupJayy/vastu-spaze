import React from 'react'
import { CONTACT_INFO } from '../constants'
import { RiHome2Fill, RiHome2Line, RiHome4Fill, RiHome5Fill, RiMailFill, RiPhoneLine } from '@remixicon/react'

const ContactUs = () => {
  return (
    <section className='max-w-7xl mx-auto' id='contact'>
        <div className='my-20'>
            <h2 className='text-xl lg:text-2xl tracking-tight text-center uppercase mb-12'> CONTACT US</h2>
            <p className='max-w-2xl text-lg mb-12 text-center mx-auto'>{CONTACT_INFO.text}</p>
            <div className='flex flex-col lg:flex-row justify-around mx-4'>
                <div className='flex mb-8 lg:mb-0'>
                    <RiPhoneLine className='text-3xl mr-4' />
                    <div>
                        <p className='text-lg font-semibold'>{CONTACT_INFO.phone.label}</p>
                        <p className='text-neutral-600'>{CONTACT_INFO.phone.value}</p>
                    </div>
                </div>
                <div className='flex mb-8 lg:mb-0'>
                    <RiMailFill className='text-3xl mr-4' />
                    <div>
                        <p className='text-lg font-semibold'>{CONTACT_INFO.email.label}</p>
                        <p className='text-neutral-600'>{CONTACT_INFO.email.value}</p>
                    </div>
                </div>
                <div className='flex mb-8 lg:mb-0'>
                    <RiHome4Fill className='text-3xl mr-4' />
                    <div>
                        <p className='text-lg font-semibold'>{CONTACT_INFO.address.label}</p>
                        <p className='text-neutral-600'>{CONTACT_INFO.address.value}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs
