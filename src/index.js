import React from 'react';
import ReactDOM from 'react-dom/client';

 const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
 
 }

const Book = () =>{
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/713UttE-zRL._AC_UL600_SR600,400_.jpg"
    alt="Enough"
  />
)
const Title = () => <h2>Title of the book</h2>
const Author = () => {
  return <h4>Cassidy Hutchinson</h4>
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);