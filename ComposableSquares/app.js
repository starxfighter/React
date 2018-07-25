

const Title = (props) => {
    const { text,    color, bkcolor } = props;
    return React.createElement('h1', { style: { color: color, backgroundColor: bkcolor, display: 'inline-block', width: '25%', height:'200px' } }, text);
}
const App = (props) => {
    return React.createElement('div', null,
        React.createElement(Title, { text: 'White on Blue', color: 'white', bkcolor: 'blue' } ),
        React.createElement(Title, { text: 'Blue on Red', color: 'blue', bkcolor: 'red'  } ),
        React.createElement(Title, { text: 'Green on Pink', color: 'green', bkcolor: 'pink' } )
    )
}

ReactDOM.render(
    App(),
    document.getElementById('head')
);