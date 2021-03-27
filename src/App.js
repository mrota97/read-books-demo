/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/App.scss';
import React from 'react';

// icons and placeholders
import { run as runHolder } from 'holderjs/holder'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars, faAngleDown, faStar, faEllipsisV } from "@fortawesome/free-solid-svg-icons"

// get a random number from 1 to rangeEnd (default 10)
function getRandomNumber(rangeEnd = 10) {
  return Math.floor((Math.random() * rangeEnd) + 1)
}

// 500 x 700
function getRandomBookCover() {
  return `https://readbooksdemo.s3.amazonaws.com/read-books-demo/book_cover_${getRandomNumber(10)}.png`
}

function getRandomProfilePicture() {
  return `https://readbooksdemo.s3.amazonaws.com/read-books-demo/profile_picture_${getRandomNumber(5)}.png`
}


function BookCarouselItem() {
  return (
    <div className="book-carousel-item">
      <div className="book-cover-container">
        <div className="image-flex-wrapper">
          <img src={getRandomBookCover()} alt="placeholder" />
        </div>
      </div>
      <div className="book-details">
        <h1>BIG MAGIC: Creative Living Beyond Fear</h1>
        <h3>by Author</h3>
        <div className="rating">
          <div className="star-row">
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
          <span>See This Book</span>
        </button>
      </div>
    </div>
  )
}

function AuthorListEntry({ name }) {
  return (
    <div className="author">
      <div className="author-pfp">
        <div className="image-flex-wrapper">
          <img src={getRandomProfilePicture()} alt="author profile icon" />
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
        <div className="image-flex-wrapper">
          <img src={getRandomBookCover()} alt="best books cover" />
        </div>
      </div>
      <div className="book-info">
        <h4>{name}</h4>
        <h5>by {author}</h5>
      </div>
    </div>
  )
}

function BookGridEntry({ name, author, likedBy }) {
  
  function constructLikedCounter() {
    let likedText;
    switch (likedBy.length) {
      case 1:
        likedText = <p><span style={{ fontWeight: "bold" }}>{likedBy[0]}</span> liked this</p>
        break
      case 2:
        likedText = (
          <p>
            <span style={{ fontWeight: "bold" }}>{likedBy[0]}</span> and&nbsp;
            <span style={{ fontWeight: "bold" }}>{likedBy[1]}</span> liked this
          </p>
        )
        break;
      case 3:
        likedText = (
          <p>
            <span style={{ fontWeight: "bold" }}>{likedBy[0]}</span> and&nbsp;
            <span style={{ fontWeight: "bold" }}>2 other friends</span> liked this
          </p>
        )
        break;
      default:
        likedText = <p>No likes</p>
    }
    return (
      <div className="book-entry-footer">
        <div className="image-group">
          {likedBy.map(v => (
            <div className="image-flex-wrapper">
              <img src={getRandomProfilePicture()} alt="author profile icon" />
            </div>
          ))}
        </div>
        {likedText}
      </div>
    )
  }

  return (
    <div className="book-entry-container">
      <div className="book-entry-box">
        {/* main */}
        
        <FontAwesomeIcon icon={faEllipsisV} className="menu-button" color="blue" />
        <div className="book-entry-main">
          <div className="book-cover-container">
            <div className="image-flex-wrapper">
              <img src={getRandomBookCover()} alt="placeholder"/>
            </div>
          </div>
          <div className="book-details">
            <h2>{name}</h2>
            <h3>by {author}</h3>
            <div className="rating">
              <div className="star-row">
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>2,000,000 votes</p>
            </div>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies nisl at urna fringilla aliquet. Donec dictum. </p>
          </div>
        </div>

        {/* footer */}
        {constructLikedCounter()}
      </div>
    </div>
  )
}

function BookContainer() {
  const [activeGenre, setActiveGenre] = React.useState(1)
  
  // generate sample data
  const sampleGenreList = [
    { name: "All Genres", value: 1 },
    { name: "Business", value: 2 },
    { name: "Science", value: 3 },
    { name: "Fiction", value: 4 },
    { name: "Philosophy", value: 5 },
    { name: "Biography", value: 6 }
  ]

  const sampleAuthorNames = ['Sebastian Jeremy', 'Angeline Summer', 'Ian Cassandra']
  const sammpleFriendNames = ['Noah Jones', 'Tommy Adam', 'Jonathan Doe']

  // each book will get placed in a random genre
  const booksByGenre = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] }

  for (let i = 0; i < 10; i++) {
    const dummyBookEntry = {
      name: "Placeholder Book Covers",
      author: sampleAuthorNames[getRandomNumber(3) - 1],
      likedBy: sammpleFriendNames.slice(0, getRandomNumber(3))
    }
    const dummyBookGenre = sampleGenreList[getRandomNumber(5)]
    booksByGenre[1].push(dummyBookEntry)
    booksByGenre[dummyBookGenre.value].push(dummyBookEntry)
  }

  return (
    <div className="book-container">
      {/* genre tabs */}
      <section className="genre-toolbar">
        <h2>Popular by Genre</h2>
        <ul className="genre-list">
          {sampleGenreList.map(({ name, value }) => (
            <li>
              <a
                href="#"
                onClick={() => setActiveGenre(value)}
                className={activeGenre === value ? "active" : ""}
              >
                {name}
              </a>
              {activeGenre === value && <div className="active-underline" />}
            </li>
          ))}
        </ul>
      </section>

      {/* book list grid */}
      <div className="book-grid">
        {booksByGenre[activeGenre].map(v => <BookGridEntry name={v.name} author={v.author} likedBy={v.likedBy} />)}
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
            <h3 className="icon-left">Browse Catagory</h3>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="separator">|</div>
          <div>
            <FontAwesomeIcon icon={faSearch} />
            <h3 className="icon-right"><span style={{ color: "lightgray" }}>Search Book</span></h3>
          </div>
        </div>

        <div className="header-brand">
          <h1><span style={{ fontWeight: "normal"}}>read</span>books</h1>
        </div>
        

        <div className="header-right">
          <div>
            <div className="image-flex-wrapper">
              <img src={getRandomProfilePicture()} alt="user profile" />
            </div>
          </div>
          <div className="separator">|</div>
          <div>
            <FontAwesomeIcon icon={faBars} />
            <h3 className="icon-right">Menu</h3>
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
            <h2 className="sidebar-heading">Author of the Week</h2>
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
            <h2 className="sidebar-heading">Books of the Year</h2>
            <ul>
              <li><BookListEntry name={"Placeholder Book Covers"} author={"John Doe"} /></li>
              <li><BookListEntry name={"Placeholder Book Covers"} author={"John Doe"} /></li>
              <li><BookListEntry name={"Placeholder Book Covers"} author={"John Doe"} /></li>
              <li><BookListEntry name={"Placeholder Book Covers"} author={"John Doe"} /></li>
              <li><BookListEntry name={"Placeholder Book Covers"} author={"John Doe"} /></li>
              <li><BookListEntry name={"Placeholder Book Covers"} author={"John Doe"} /></li>
            </ul>
          </section>
        </div>

        {/* book view container */}
        <BookContainer />
      </div>
    </div>
  );
}

export default App;
