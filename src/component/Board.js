import React from "react";
import { Square } from "./Square";


export class Board extends React.Component {


constructor(props){
    super(props);
    this.state= {
        square: Array(9).fill(null),
        plotValue: true
    }
}



    onChangeCellValue  = (Index) => {

        const { plotValue , square } = this.state;
        let ploatSymbol  = plotValue? 'X': 'O';
    
        square[Index-1] = ploatSymbol;
        this.setState({ square: square, plotValue: !plotValue });
        console.groupEnd();
      }


    calculateSequers = (sequre) =>{
        
        let answars = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            
            [1,4,7],
            [2,5,8],
            [3,6,9],

            [1,5,9],
            [3,5,7]
        ];

        // n*1 approch
        for( let i=0; i< answars.length; i++){
            let anArray = answars[i];
             if(sequre[anArray[0]-1] == sequre[anArray[1]-1] && sequre[anArray[1]-1] == sequre[anArray[2]-1] && sequre[anArray[2]-1]){
                 return true;
             }   
        }

        return false;
    }   


    Rest = () =>{
          this.setState({ square: Array(9).fill(null)});
    } 

    render() {


        //style portion 
        const rowStyle = {
            display: 'flex'
          }
          const boardStyle = {
            'backgroundColor': '#eee',
            'width': '350px',
            'height': '350px',
            'alignItems': 'center',
            'justifyContent': 'center',
            'display': 'flex',
            'flexDirection': 'column',
            'border': '3px #eee solid'
          }
          
          const containerStyle = {
            'display': 'flex',
            'alignItems': 'center',
            'flexDirection': 'column'
          }
          
          const instructionsStyle = {
            'marginTop': '5px',
            'marginBottom': '5px',
            'fontWeight': 'bold',
            'fontSize': '16px',
          }
          
          const buttonStyle = {
            'marginTop': '15px',
            'marginBottom': '16px',
            'width': '80px',
            'height': '40px',
            'backgroundColor': '#8acaca',
            'color': 'white',
            'fontSize': '16px',
          }  
    

        const { square, plotValue} = this.state;  
        
        const winner = this.calculateSequers(square);
        let status1;
        let status2;
        let player  = plotValue? 'X':'O';
        if(winner){
            status1  = 'Winner :'+ player;
        }  else {
           status2 =  'Next player: '+ player;
        }


        return (
        <div style={containerStyle} className="gameBoard">
          <div className="status" style={instructionsStyle}>{status2}</div>
        <div className="winner" style={instructionsStyle}>{status1}</div>
          <button style={buttonStyle} onClick={()=> this.Rest()}>Reset</button>
          <div className="container" style={ winner? {pointerEvents: "none", opacity: "0.4"}:{"":""} }>
          <div className="board-row" style={rowStyle} >
            <Square cellClicked={() => this.onChangeCellValue(1)} plotValue={square[0]} />
            <Square cellClicked={() => this.onChangeCellValue(2)} plotValue={square[1]}/>
            <Square cellClicked={() => this.onChangeCellValue(3)} plotValue={square[2]}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square cellClicked={() => this.onChangeCellValue(4)} plotValue={square[3]}/>
            <Square cellClicked={() => this.onChangeCellValue(5)} plotValue={square[4]}/>
            <Square cellClicked={() => this.onChangeCellValue(6)} plotValue={square[5]}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square cellClicked={() => this.onChangeCellValue(7)} plotValue={square[6]}/>
            <Square cellClicked={() => this.onChangeCellValue(8)} plotValue={square[7]}/>
            <Square cellClicked={() => this.onChangeCellValue(9)} plotValue={square[8]}/>
          </div>
          </div>
        </div>
      );
    }
  }
  
