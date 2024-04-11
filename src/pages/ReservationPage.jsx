import { useForm } from "react-hook-form"
import '../components/styles/ReservationPage.css'


const ReservationPage = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {

  }

  
  return (
    <section className="reservation-card">
      <h3 className="reservation-title">Reservation hotel</h3>
      <form className="reservation-form" onSubmit={handleSubmit(submit)}>
        <label className="reservation-label">
          <span>Check-in</span>
          <input className="reservation-input" {...register("checkIn")} type="date" />
        </label>

        <label className="reservation-label">
          <span>Check-out</span>
          <input className="reservation-input" {...register("checkIn")} type="date" />
        </label>
        <button className="reservation-btn">Submit</button>
      </form>
    </section>
  )
}

export default ReservationPage