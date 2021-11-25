import smalllogo from '../assets/small_logo.webp'
import rgf from '../assets/rgf.webp'
import rocksifter from '../assets/rocksifter.webp'
import rgfMachine from '../assets/rgf_machine.webp'
import q from '../assets/q.webp'

export default function RGFFeeders() {
  return (
    <div>
      <div>DO YOU HAVE A PRIMARY SCREENING APPLICATION?</div>
      <div>The renowned Böhringer Roller Grizzly Screen Feeders have proven more and more successfully as heavy duty robust and 100% effective method of feeding and screening out high volumes of  fines in difficult sticky feed material environments prior to the crushing plants.</div>
      <div>Böhringer "RM & RS" Series Roller Grizzly Feeders</div>
      <div className='rgf-small-logos'>
        <img src={smalllogo} style={{ width: '10vw' }} alt='bohringer small logo' />
        <img src={rgf} style={{ width: '10vw' }} alt='rgf small logo' />
      </div>
      <div className='rgf-1'>
        <img src={rocksifter} style={{ width: '35vw' }} alt='rocksifter' />
        <ul>
          <li>Uniform feed rate</li>
          <li>Low head room</li>
          <li>No vibration</li>
          <li>Easy to replace wear parts (Cams) unique only to Böhringer</li>
          <li>Low horsepower</li>
          <li>Adjustable, self cleaning on the run  system</li>
          <li>Heavy duty solid shafts and short drive train</li>
          <li>Heavy duty longer life self lubricating bearing system</li>
          <li>Long wear life special alloy wear cast  cams</li>
          <li>High performance high capacity</li>
          <li>Low cost per ton operating cost</li>
        </ul>
      </div>
      <div className='rgf-2'>
        <img src={rgfMachine} style={{ width: '35vw' }} alt='rgf machine' />
        <div style={{ width: '15vw' }}>
          <img src={q} style={{ width: '15vw' }} alt='check' />
          <div>Proven over time Böhringer outstanding Quality</div>
        </div>
      </div>
    </div>
  )
}
