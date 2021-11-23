import './screen.css'
import logo from '../assets/bohringerlogo.webp'
import rocks from '../assets/rocks.webp'
import smalllogo from '../assets/small_logo.webp'

export default function Home() {
  return (
    <>
      <div className='home-info-grid'>
        <div className='grid-info-container'>
          <div id='home-primary-font'>IMPACT CRUSHERS</div>
          <div id='home-secondary-font'>PRIMARY - SECONDARY - TERTIARY</div>
        </div>
        <div className='grid-info-container'>
          <div id='home-primary-font'>RGF FEEDERS</div>
          <div id='home-secondary-font'>ROLLER GRIZZLY FEEDERS</div>
        </div>
        <div className='grid-info-nb'>
          <div id='home-primary-font'>MINERAL SIZERS</div>
          <div id='home-secondary-font'>VOLUME REDUCTION FOR  MINERALS - ORES - ROCK  RECYCLING</div>
        </div>
        <div className='grid-info-container'>
          <div id='home-primary-font'>JAW CRUSHERS</div>
          <div id='home-secondary-font'>PRIMARY - SECONDARY - HORIZONTAL</div>
        </div>
        <div className='grid-info-container'>
          <div id='home-primary-font'>WHEEL PORTABLE CRUSHERS</div>
          <div id='home-secondary-font'>PRIMARY - SECONDARY - TERTIARY</div>
        </div>
        <div className='grid-info-nb'>
          <div id='home-primary-font'>TRACK PORTABLE CRUSHERS</div>
          <div id='home-secondary-font'>PRIMARY - SECONDARY - TERTIARY</div>
        </div>
      </div>
      <div className='home-history'>
        <img src={logo} style={{ width: '30vw' }} alt='bohringer-logo' />
        <div>Backed by 70 years of history in innovation we have the solution to your volume reduction comminution requirement.</div>
        <img src={rocks} alt='rocks' className='rocks-bg' />
      </div>
      <div>
        <div>
          <img src={smalllogo} alt='small bohringer logo' />
          OFFERING YOU THE BEST SOLUTION FOR YOU OPERATION SINCE 1948.
        </div>
      </div>
    </>
  )
}
