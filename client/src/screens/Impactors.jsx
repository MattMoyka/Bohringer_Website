import smalllogo from '../assets/small_logo.webp'
import bohringer from '../assets/bohringer.webp'
import q from '../assets/q.webp'
import PB from '../assets/PB_edited.webp'
import rc1450 from '../assets/rc1450.webp'
import secondarySeries from '../assets/secondarySeries.webp'
import SANDMACHINE from '../assets/SANDMACHINE.webp'
import trackmounted from '../assets/track_mounted_impacted_crusher.webp'
import './screen.css'

export default function Impactors() {
  return (
    <div>
      <div className='impactors-top-title'>WHICH STYLE IMPACT CRUSHER DO YOU REQUIRE FOR YOUR APPLICATION ?</div>
      <div className='impactors-secondary-title'>Quality. Reliability. Innovation. <br />
        By integrating innovation into our core products, at Böhringer we  pride ourselves in delivering superior value with premium quality and craftsmanship to our customers</div>
      <div className='impactors-top-img'>
        <img src={smalllogo} id='impact-img-size' alt='small logo' />
        <div>
          <img src={bohringer} id='impact-img-size' alt='bohringer' />
          <img src={q} id='impact-img-size' alt='check mark' />
        </div>
      </div>
      <div className='impactor-info-title'>Primary Series Impactor "PB" AND  "RC"</div>
      <div className='impactor-info-container'>
        <img src={PB} style={{ width: '35vw' }} alt='machines' />
        <ul>
          <li>High performance high capacity</li>
          <li>High reduction ratio</li>
          <li>Lower cost per ton operating cost</li>
          <li>Longer wear life due to proprietary specialized alloy castings</li>
          <li>Cubical crack free uniform particles</li>
          <li>Selective crushing</li>
          <li>Large expansion chamber </li>
          <li>Optimum rotor design</li>
        </ul>
      </div>
      <div className='impactor-info-title'>Primary - Secondary Series Impactor "RC"</div>
      <div className='impactor-info-container'>
        <img src={rc1450} style={{ width: '35vw' }} alt='machines' />
        <ul>
          <li>High performance high capacity</li>
          <li>High reduction ratio</li>
          <li>Lower cost per ton operating cost</li>
          <li>Longer wear life due to proprietary specialized alloy castings</li>
          <li>Cubical crack free uniform particles</li>
          <li>Selective crushing</li>
          <li>Large expansion chamber </li>
          <li>Optimum rotor design</li>
        </ul>
      </div>
      <div className='impactor-info-title'>Secondary Series "HS"</div>
      <div className='impactor-info-container'>
        <img src={secondarySeries} style={{ width: '35vw' }} alt='machines' />
        <ul>
          <li>High performance high capacity</li>
          <li>High reduction ratio</li>
          <li>Lower cost per ton operating cost</li>
          <li>Longer wear life due to proprietary specialized alloy castings</li>
          <li>Cubical crack free uniform particles</li>
          <li>Selective crushing</li>
          <li>Large expansion chamber </li>
          <li>Optimum rotor design</li>
        </ul>
      </div>
      <div className='impactor-info-title'>Tertiary  Series Reversible Impactor "HS-RV"</div>
      <div className='impactor-info-container'>
        <img src={SANDMACHINE} style={{ width: '35vw' }} alt='machines' />
        <ul>
          <li>High performance high capacity</li>
          <li>High reduction ratio</li>
          <li>Lower cost per ton operating cost</li>
          <li>Longer wear life due to proprietary specialized alloy castings</li>
          <li>Cubical crack free uniform particles</li>
          <li>Selective crushing</li>
          <li>Large expansion chamber </li>
          <li>Optimum rotor design</li>
        </ul>
      </div>
      <div className='impactors-footer'>
        <img src={smalllogo} style={{ width: '10vw' }} alt='small logo' />
        <div id='impactors-footer-font'>A" leader in inertia crushing technology</div>
      </div>
      <img src={trackmounted} id='impactor-footer-img' alt='track mounted impact crusher' />
    </div>
  )
}
