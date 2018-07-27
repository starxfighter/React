const rows = prompt("How many rows");

// create Square. backgroundcolor is being passed in from the row constructor
const Square = (props) => {
    return React.createElement('div', { style: { backgroundColor: props.backgroundColor, height: '20px', width: '20px', display:'inline-block', "marginBottom":"-5px" }})
}

// creates the rows. Makes sure that the starting cell color is not the same as the previous row
const Row = (props) => {
    // holds each square until the row has been completed based on the input from the user
    let arrayOfSquares = [];
    let color = props.startingColor
    for (let i = 0; i < rows; i++) {
        if (i % 2)
            arrayOfSquares.push(React.createElement(Square, { backgroundColor: color}))
        else
            arrayOfSquares.push(React.createElement(Square, { backgroundColor: color}))
        if (color === 'red') {
            color = 'black'
        }
        else {
            color  = 'red'
        }
    }
    // returns the completed row
    return React.createElement('div', null, arrayOfSquares )
}

const CheckerBoard = (props) => {
    // holds the rows until the board has been completed
    let arrayOfRows = [];
    for (let i = 0; i < rows; i++) {
        if (i % 2) {
            arrayOfRows.push(React.createElement(Row, { startingColor: "red"}))
        }
        else {
            arrayOfRows.push(React.createElement(Row, { startingColor: "black"}))
        }
    }
    // returns the completed board
    return React.createElement('div', null, arrayOfRows )
}
    
ReactDOM.render(React.createElement(CheckerBoard), document.getElementById("board"));