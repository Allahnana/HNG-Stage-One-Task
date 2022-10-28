
import './App.css';
import profile from './image/abdul.jpeg';

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="img">
            <div className="container-img">
              <img src={profile} alt="dev_abdul" className="profile" />

            </div>

          </div>

          <div className="profile-sec">
            <h1 className="twitter">Dev_Allahnana</h1>
            <h2 className="slack">Dev_Abdul</h2>
          </div>

          <div className="link-sec">

            <button className="btn"><a className="link" href="https://training.zuri.team/">Zuri Team</a></button>
            
            <button className="btn"><a className="link" href="https://books.zuri.team/">Zuri Books</a></button>
          
            <button className="btn"><a className="link" href="https://books.zuri.team/">Python</a></button>
            
            <button className="btn"><a className="link" href="https://background.zuri.team/">Pitch</a></button>

            <button className="btn"><a className="link" href="https://books.zuri.team/design-rules">Design</a></button>
          </div>

        </div>  
      
      </div>
    </div>
  );
}

export default App;
