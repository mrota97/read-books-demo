import './App.scss';

function App() {
  return (
    <div className="App">
      {/* navbar container */}
      <header className="App-header">
        <ul className="header-left">
          <li>Browse Catagory</li>
          <li>|</li>
          <li>Search Book</li>
        </ul>

        <p>readbooks</p>

        <ul className="header-right">
          <li>icon</li>
          <li>|</li>
          <li>menu</li>
        </ul>

      </header>

      {/* carousel container */}
      <div className="App-carousel"></div>

      {/* main content container */}
      <div className="App-main">
        
        {/* sidebar */}
        <div className="sidebar">
          {/* author list */}
          <section>
            <h2>Author of the Week</h2>
            <ul>
              <li>Sebastian Jeremy</li>
              <li>Jonathan Doe</li>
              <li>Angeline Summer</li>
              <li>Noah Jones</li>
              <li>Tommy Adam</li>
              <li>Ian Cassandra</li>
            </ul>
          </section>

          {/* book list */}
          <section>
            <h2>Books of the Year</h2>
            <ul>
              <li>Big Magic: Create living Beyond Fear</li>
              <li>Big Magic: Create living Beyond Fear</li>
              <li>Big Magic: Create living Beyond Fear</li>
              <li>Big Magic: Create living Beyond Fear</li>
              <li>Big Magic: Create living Beyond Fear</li>
              <li>Big Magic: Create living Beyond Fear</li>
            </ul>
          </section>
        </div>

        {/* book view container */}
        <div className="book-container">
          
          {/* genre tabs */}
          <section className="genre-toolbar">
            <h3 className="genre-header">Popular by Genre</h3>
            <ul className="genre-list">
              <li>All Genres</li>
              <li>Business</li>
              <li>Science</li>
              <li>Fiction</li>
              <li>Philosophy</li>
              <li>Biography</li>
            </ul>
          </section>

          {/* book list grid */}
          <div className="book-grid"></div>

        </div>
      </div>
    </div>
  );
}

export default App;
