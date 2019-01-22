import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (err) => {
                this.setState({
                    errorMessage: err.message

                });
            }
        );
    }

    /**
     * This method takes care of the decision making when
     * rendering the component.
     * 
     */
    renderContent() {
        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        } else if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        } else {
            return (
                <Spinner message="Please accept location request" />
            );
        }
    }

    render() {
        return (
            // The div is not necessary here but to show
            // the power of refactoring
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));