import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div className="container">
            <div className="blurb">
              <h1>Hi there, I'm Kheda!</h1>
              <p>I'm best known as the horrible cop from <em>A Touch of Evil</em> Don't trust me. <a href="/about">Read
                more about my life...</a></p>
            </div>
            <!-- /.blurb -->
          </div>
          <!-- /.container -->
        </header>
      </div>
  );
}

export default App;
