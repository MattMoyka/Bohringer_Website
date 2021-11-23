import bohringerProcessing from '../assets/Böhringer_Materials_Processing_Impact_Cr.webp'
import './screen.css'
import smalllogo from '../assets/small_logo.webp'
import thomas from '../assets/thomas.webp'

export default function AboutUs() {
  return (
    <div>
      <img src={bohringerProcessing} className='about-processing-img' alt='bohringer processing plant' />
      <div className='about-container'>
        <div><b>North American delegates attend  a seminar at Böhringer in 1987.</b>
          <br />
          <br />
          Böhringer Gmbh was first  Founded In Oedheim West Germany in 1948 by the Late Paul Böhringer.From there Böhringer.Gmbh became a respected World leader through its innovative product offering in the international Mining recycling and aggregate processing World.Today Böhringer equipment can be found in operation in every corner of the Globe.

          <br />
          <br />

          Böhringer first entered the North American market in July of 1984 through its subsidiary, “Böhringer Inc”, owned by its president Mr Thomas Hecker.In 1996 Böhringer Gmbh seased operation due to a shrinking European Market for high end systems.At this time Böhringer  Inc, acquired sole rights to the Böhringer brand initially successfully supply a thriving US market with foresight Böhringer Inc introduced the company’s vast experience, know-how and technology in processing equipment systems to the American aggrigate & recycled product producer and later to a growing International market.

          <br />
          <br />

          Based on Böhringer  Inc, equipment criteria, and flexibility to adapt aggregate processing Systems’ to customer’s individual needs, with a steady and stable growth pattern, Böhringer have been able to supply systems’ at market price with advanced operating benefits.So far, Böhringer Inc have placed well in excess’ of 355 specialized & 554 standard systems’ in various industries, with repeated sales to individual and group customers.Bohringer Inc has over 48 years of US and World product application knowledge.A number of strategically situated Global Distributors’ with Professional and experienced sales personnel in aggregate processing equipment have been engaged over the years for the stocking & marketing of our systems and spare parts.

          <br />
          <br />

          As of late all equipment is being manufactured & assembled in North America, Europe and Asia.Major changes are taking place within Böhringer creating a evolving focus on improving quarry/contractor operations, with an emphasis on applications, process, correct equipment selection and quality related issues arising in everyday aggregate production.Thomas Hecker and his team continue to innovate introducing new concepts and constant product improvement.</div>
        <div className='about-right-column'>
          <img src={smalllogo} alt='small bohringer logo' />
          <img src={thomas} style={{ width: '25vw' }} alt='thomas hecker' />
          <div>Thomas Hecker with the late Paul Böhringer in 1991.</div>
        </div>
      </div>

    </div>
  )
}
