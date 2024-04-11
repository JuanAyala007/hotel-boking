import React from 'react'
import { useForm } from 'react-hook-form'
import '../../styles/PriceFilter.css'

const PriceFilter = ({setFromTo}) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {  
      const from =  data.from
      const to = data.to

      setFromTo({
        from: from === "" ? 0 : +from,
        to: to === "" ? infinity : +to
      })

    }



  return (
    <section className='container-price'>

        <form className='price-form' onSubmit={handleSubmit(submit)}>
        <h3 className='price-name'>Price</h3>

          <div className='price-container'>

          <label className='price-label'>
            <span className='price-span'>From</span>
            <input className='price-input' {...register("from")} type="number" placeholder='$' />
          </label>

          <label className='price-label'>
            <span className='price-span'>To</span>
            <input className='price-input' {...register("to")} type="number" placeholder='$' />
          </label>


          </div>
          <button className='price-btn'>Apply</button>

        </form>
        
    </section>
  )
}

export default PriceFilter