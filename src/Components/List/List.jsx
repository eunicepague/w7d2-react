import '../List/index.css';
import Nike1 from '../../assets/whiteretropy.jpg';
import Nike2 from '../../assets/runnershoes.jpg';
import Nike3 from '../../assets/gscourtshoes.jpg';
import Nike4 from '../../assets/duramoshoes.jpg';

const section = () => {
  return (
    <>
      <section className="list">
        <div className="list-container">
          <button className="btn-list">New Arrivals</button>
          <button className="btn-list">Our Key Icons</button>
          <button className="btn-list">Your Running Shoes</button>
        </div>
      </section>

      <section className="card-selection">
        <div className="card">
          <img src={Nike1}></img>
          <h4>RETROPY E5 SHOES</h4>
          <p>New ₱6,800</p>
        </div>
        <div className="card">
          <img src={Nike2}></img>
          <h4>RESPONSE RUNNER SHOES</h4>
          <p>New ₱3,00</p>
        </div>
        <div className="card">
          <img src={Nike3}></img>
          <h4>G.S. COURT SHOES</h4>
          <p>New ₱5,000</p>
        </div>
        <div className="card">
          <img src={Nike4}></img>
          <h4>DURAMO SPEED SHOES</h4>
          <p>New ₱4,500</p>
        </div>
      </section>
    </>
  );
};

export default section;
