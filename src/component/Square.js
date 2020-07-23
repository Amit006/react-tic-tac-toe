import React from "react";

export class Square extends React.Component {
    render() {

        const squareStyle = {
            'width':'100px',
            'height':'100px',
            'backgroundColor': '#AA00FF',
            'border': ' 1px solid blue',
            'margin': '6px',
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'fontSize': '50px',
            'color': 'white'
          }
          
    const { plotValue , cellClicked} = this.props;
      return (
        <div
          className="square"
          style={squareStyle} onClick={ () => cellClicked()}>
           { plotValue }   
        </div>
      );
    }
  }
