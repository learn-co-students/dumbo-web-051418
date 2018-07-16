import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

// const myCreateElement = (type, children, props = {}) => {
//   return {
//     $$typeof: Symbol.for('react.element'),
//     type: type,
//     props: { children: children },
//     ref: null
//   };
// };

const Article = (props) => {
  return (
    <div>
      <h1 className="article-heading">{props.title}</h1>
      <p className="article-main">{props.text}</p>
    </div>
  )
}




ReactDOM.render(<div>
    <Navbar content="All my articles" subheader="gotta love articles" />
    <Article title="title 1" text="text1" />
    <Article title="title 2" text="text2" />
    <Article title="TITLE" text="Y YO YFOU OAYFO " />
  </div>,
  document.getElementById('main')
);

//
// React.createElement('div', {}, [
//   Navbar({title: "All my articles", subheader: "gotta love articles"}),
//   Article({title: "title 1", text: "text1"}),
//   Article({title: "title 2", text: "text2"}),
//   Article({title: "TITLE", text: "Y YO YFOU OAYFO "})
// ])
