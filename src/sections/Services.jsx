import ServicesCard from "../components/ServicesCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="flex justify-center items-center gap-9 flex-wrap   ">
      {services.map((service)=>(
        <ServicesCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services