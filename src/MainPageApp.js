  import React from 'react';
  import './stylesCSS/MainPageApp.css';
  import Button from 'react-bootstrap/Button';
  import 'bootstrap/dist/css/bootstrap.min.css';
  //import 'https://fonts.googleapis.com/css2?family=Caveat&display=swap';

  class MainPageApp extends React.Component {
    render() {
      return (
        <div id="mainDiv">
         
          <img className="mainImg" src="https://data3.cupsell.pl/upload/generator/208051/640x420/3387519_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235"></img>
            <br></br>
            <br></br>
            <h1>Przepisy Patiś</h1>
          <br></br>
            <>
            <Button style={{backgroundColor:"#D8BFD8",color:"black",fontFamily:'Oswald '}} variant="info" size="lg" block >
              Śniadania
            </Button>
            <Button style={{backgroundColor:"#DDA0DD",color:"black",fontFamily:'Oswald'}} variant="info" size="lg" block >
              Obiady
            </Button>
            <Button style={{backgroundColor:"#D8BFD8",color:"black",fontFamily:'Oswald'}} variant="info" size="lg" block >
              Ciasta
            </Button>
            <Button style={{backgroundColor:"#DDA0DD",color:"black",fontFamily:'Oswald'}}  variant="info" size="lg" block >
              Przekąski
            </Button>
            <Button style={{backgroundColor:"#D8BFD8",color:"black",fontFamily:'Oswald'}} variant="info" size="lg" block >
              Desery
            </Button>
            <Button style={{backgroundColor:"#DDA0DD",color:"black",fontFamily:'Oswald'}}   variant="info" size="lg" block >
              Zupy
            </Button>
          </>
          
        </div>
        
        
          
      )
    }
  }
export default MainPageApp
