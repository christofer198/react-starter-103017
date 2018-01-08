const myCreateElement = (type, props, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type,
    ref: null,
    props: { ...props, children }
  };
};

const navbar = () => {};

// navbar({color: 'green', icon: 'bug', title: 'My app', description: 'idk'})

const article = data => {
  return myCreateElement('div', { className: 'article' }, [
    myCreateElement('h1', {}, data.title),
    myCreateElement('p', {}, data.text)
  ]);
};

// const myHeader = myCreateElement('h1', {}, 'bye');

ReactDOM.render(
  article({ title: 'Some Relevant News', text: 'its probably bad news' }),
  document.getElementById('main')
);
