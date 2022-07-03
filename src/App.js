// import logo from './logo.svg';
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
  const lis = [];
  props.topics.map((li) =>
    lis.push(
      <li key={li.id}>
        <a
          href={'/read/' + li.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(li.id);
          }}
        >
          {li.title}
        </a>
      </li>
    )
  );
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function App() {
  const topics = [
    { id: 1, title: 'HTML', body: 'HTML is ...' },
    { id: 2, title: 'CSS', body: 'CSS is ...' },
    { id: 3, title: 'JavaScript', body: 'JavaScript is ...' },
  ];
  return (
    <div className="App">
      <Header
        title="REACT"
        onChangeMode={() => {
          alert('Header');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
