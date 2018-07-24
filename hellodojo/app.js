const reactHead = document.getElementById('header');

ReactDOM.render(
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null, 
            "Hello Dojo!"
        ),
        React.createElement(
            "h3",
            null, 
            "Things I need to do:"
        ),
        React.createElement(
            "h6",
            null, 
            "Learn React"
        ),
        React.createElement(
            "h6",
            null, 
            "Climb Mt.Everest"
        ),
        React.createElement(
            "h6",
            null, 
            "Run a Marathon"
        )
    ),
    reactHead
);