// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Nav(props) {
  const lis = props.topics.map((li) => (
    <li key={li.id}>
      <a
        id={li.id}
        href={'/read/' + li.id}
        onClick={(e) => {
          e.preventDefault();
          props.onChangeMode(Number(e.target.id));
        }}
      >
        {li.title}
      </a>
    </li>
  ));
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'HTML', body: 'HTML is ...' },
    { id: 2, title: 'CSS', body: 'CSS is ...' },
    { id: 3, title: 'JavaScript', body: 'JavaScript is ...' },
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === 'READ') {
    let title,
      body = null;
    topics.forEach((topic) => {
      console.log(topic.id, id);
      if (topic.id === id) {
        title = topic.title;
        body = topic.body;
      }
    });
    content = <Article title={title} body={body}></Article>;
  }
  return (
    <div className="App">
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
