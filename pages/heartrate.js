// Similar to bitcoin.js file

import { withScreenSize } from '@vx/responsive';
import Background from '../components/background';
import HeartrateValue from '../components/heartratevalue';
// import BitcoinPrice from '../components/bitcoinprice';
import jsonData from '../components/heartratedata.json';

console.log(jsonData);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  //https://hl7.org/fhir/2017Jan/observation-example-heart-rate.json
  componentDidMount() {
    // fetch('https://hl7.org/fhir/2017Jan/observation-example-heart-rate.json')

        this.setState({
          data: jsonData
        });

  }
  render() {
    const { screenWidth, screenHeight } = this.props;
    const { data } = this.state;
    return (
      <div className="app">
        <Background width={screenWidth} height={screenHeight} />
        <div className="center">
          {/* CHANGE LINE BELOW */}
          <HeartrateValue data={data} width={screenWidth} height={screenHeight} />
          {/* <BitcoinPrice data={data} width={screenWidth} height={screenHeight} /> */}
          <p className="identity">
            CHANGE LINE BELOW
            {data.disclaimer}
          </p>
        </div>
        <style jsx>{`
          .app,
          .center {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            display: flex;
            font-family: arial;
            flex-direction: column;
          }

          .identity {
            margin-top: 35px;
            font-size: 11px;
            color: white;
            opacity: 0.4;
          }
          .center {
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default withScreenSize(App);
