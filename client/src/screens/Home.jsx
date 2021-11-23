import './screen.css'
import logo from '../assets/bohringerlogo.webp'
import rocks from '../assets/rocks.webp'
import tworock from '../assets/tworockcrush.webp'
import onerock from '../assets/onerockcrush.webp'
import smalllogo from '../assets/small_logo.webp'
import rgf from '../assets/rgf.webp'
import suppliers from '../assets/suppliers.webp'
import champ from '../assets/champ140.webp'
export default function Home() {
  return (
    <>
      <img className='home-page' src={champ} alt='rock crusher' />

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
        <div style={{ width: '600px', fontWeight: '800' }}>Backed by 70 years of history in innovation we have the solution to your volume reduction comminution requirement.</div>
        <img src={rocks} alt='rocks' className='rocks-bg' />
      </div>
      <div style={{ backgroundColor: '#eef0e4', position: 'relative' }}>
        <div>
          <div className='best-solution-container'>
            <img src={smalllogo} style={{ width: '6vw' }} alt='small bohringer logo' />
            <div className='best-solution'>OFFERING YOU THE BEST SOLUTION FOR YOU OPERATION SINCE 1948.</div>
          </div>
        </div>
        <div className='home-machine-images'>
          <div>
            <img src={onerock} alt='impact crusher' style={{ height: '70vh' }} />
            <div style={{ width: '20vw', textAlign: 'center' }}>
              Our UNBEATABLE series of impact crusher is used in the cement, aggregate and recycling industries.</div>
          </div>
          <div>
            <img src={tworock} alt='mineralizer' style={{ height: '70vh' }} />
            <div style={{ width: '25vw', textAlign: 'center' }}>Our UNBEATABLE roller grizzly screens proved more and more successfully as sturdy and effective system for the screening of fines sticky difficult feed material in crushing plants.</div>
            <div style={{ width: '25vw', textAlign: 'center' }} className='home-text-box'>
              Our UNBEATABLE mineral sizer design for the industrial beneficiation of primary and secondary raw materials, crushing procedures for the production of specific grain sizes, forms, surfaces or for the over burden of multi-component materials play a central role.</div>

          </div>
        </div>
      </div>
      <div style={{ background: 'white', marginTop: '200px' }}>
        <div className='home-bottom-image-title'>Systems Manufactured Utilizing Quality Brands</div>
        <div className='home-bottom-images'>
          <img src={smalllogo} style={{ width: '10vw' }} alt='small bohringer logo' />
          <img src={suppliers} style={{ width: '40vw' }} alt='list of suppliers' />
          <img src={rgf} style={{ width: '10vw' }} alt='rgf' />
        </div>
      </div>

    </>
  )
}
