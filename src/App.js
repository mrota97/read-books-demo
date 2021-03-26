import './styles/App.scss';
import React from 'react';

// icons and placeholders
import { run as runHolder } from 'holderjs/holder'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars, faAngleDown, faStar } from "@fortawesome/free-solid-svg-icons"

function BookEntry() {
  return (
    <div className="book-entry-container">
      <div className="book-entry-box">
        {/* main */}
        
        <div className="book-entry-main">
          <div className="book-cover-container">
            <div>
              <img src="holder.js/150x226?auto=yes" alt="placeholder"/>
            </div>
          </div>
          <div className="book-details">
            <h1>Title</h1>
            <h3>Author</h3>
            <div>
              <div>
                <FontAwesomeIcon icon={faStar} color="green" />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>2,000,000 votes</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies nisl at urna fringilla aliquet. Donec dictum. </p>
          </div>
        </div>

        {/* footer */}
        <div className="book-entry-footer">
          <span>test</span>
        </div>
      </div>
    </div>
  )
}

function BookCarouselItem() {
  return (
    <div className="book-carousel-item">
      <div className="book-cover-container">
        <div>
          <img src="holder.js/242x365?auto=yes" alt="placeholder"/>
        </div>
      </div>
      <div className="book-details">
        <h1>BIG MAGIC: Creative Living Beyond Fear</h1>
        <h3>by Author</h3>
        <div className="rating">
          <div>
            <FontAwesomeIcon icon={faStar} color="yellow" />
            <FontAwesomeIcon icon={faStar} color="yellow" />
            <FontAwesomeIcon icon={faStar} color="yellow" />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h4>2,000,000 votes</h4>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies nisl at urna fringilla aliquet. Donec dictum. </p>
        <button>
          See This Book
        </button>
      </div>
    </div>
  )
}

function AuthorListEntry({ name }) {
  return (
    <div className="author">
      <div className="author-pfp">
        <div>
          <img src="holder.js/30x30" alt="author profile icon" />
        </div>
      </div>
      <h4>{name}</h4>
    </div>
  )
}

function BookListEntry({ name, author }) {
  return (
    <div className="book">
      <div className="book-cover">
        <div>
          <img src="holder.js/50x75" alt="best books cover" />
        </div>
      </div>
      <div className="book-info">
        <h4>{name}</h4>
        <h5>by {author}</h5>
      </div>
    </div>
  )
}

function App() {
  React.useEffect(() => { runHolder() }, [])
  return (
    <div className="App">
      {/* navbar container */}
      <header className="App-header">
        <div className="header-left">
          <div>
            <h3>Browse Catagory</h3>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div>|</div>
          <div>
            <FontAwesomeIcon icon={faSearch} />
            <h3><span style={{ color: "lightgray" }}>Search Book</span></h3>
          </div>
        </div>

        <div className="header-brand">
          <h1><span style={{ fontWeight: "normal"}}>read</span>books</h1>
        </div>
        

        <div className="header-right">
          <div>
            <div>
              <img src="holder.js/30x30" alt="user profile" />
            </div>
          </div>
          <div>|</div>
          <div>
            <FontAwesomeIcon icon={faBars} />
            <h3>Menu</h3>
          </div>
        </div>

      </header>

      {/* carousel container */}
      <div className="App-carousel">
        {Array(10).fill(0).map(v => (
          <div className="slide">
            <BookCarouselItem />
          </div>
        ))}
      </div>

      {/* main content container */}
      <div className="App-main">
        
        {/* sidebar */}
        <div className="sidebar">
          {/* author list */}
          <section className="best-authors">
            <h2>Author of the Week</h2>
            <ul>
              <li><AuthorListEntry name={"Sebastian Jeremy"} /></li>
              <li><AuthorListEntry name={"Jonathan Doe"} /></li>
              <li><AuthorListEntry name={"Angeline Summer"} /></li>
              <li><AuthorListEntry name={"Noah Jones"} /></li>
              <li><AuthorListEntry name={"Tommy Adam"} /></li>
              <li><AuthorListEntry name={"Ian Cassandra"} /></li>
            </ul>
          </section>

          {/* book list */}
          <section className="best-books">
            <h2>Books of the Year</h2>
            <ul>
              <li><BookListEntry name={"Big Magic: Create living Beyond Fear"} author={"Elizabeth Gilbert"} /></li>
              <li><BookListEntry name={"Big Magic: Create living Beyond Fear"} author={"Elizabeth Gilbert"} /></li>
              <li><BookListEntry name={"Big Magic: Create living Beyond Fear"} author={"Elizabeth Gilbert"} /></li>
              <li><BookListEntry name={"Big Magic: Create living Beyond Fear"} author={"Elizabeth Gilbert"} /></li>
              <li><BookListEntry name={"Big Magic: Create living Beyond Fear"} author={"Elizabeth Gilbert"} /></li>
              <li><BookListEntry name={"Big Magic: Create living Beyond Fear"} author={"Elizabeth Gilbert"} /></li>
            </ul>
          </section>
        </div>

        {/* book view container */}
        <div className="book-container">
          
          {/* genre tabs */}
          <section className="genre-toolbar">
            <h2>Popular by Genre</h2>
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
          <div className="book-grid">
            {Array(10).fill(0).map(v => <BookEntry />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
