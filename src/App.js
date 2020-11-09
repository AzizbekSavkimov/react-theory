import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {name: 'Audi', year: 2015},
                {name: 'Ford', year: 2016},
                {name: 'Mazda', year: 2010},
            ],
            pageTitle: 'React Components',
            showCars: false,
            clicked: false
        }
    }
    toggleCarsHandler = () => {
       this.setState({
           showCars: !this.state.showCars
       })
    }
    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars]
        cars[index] = car;
        this.setState({
            cars
        })
    }
    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({
            cars
        })
    }

    render() {
        let cars = null;
        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                    return (
                        <ErrorBoundary key={index}>
                            <Car
                                name={car.name}
                                year={car.year}
                                index={index}
                                onChangeName={event => this.onChangeName(event.target.value, index)}
                                onDelete={() => this.deleteHandler(index)}
                            />
                        </ErrorBoundary>
                    )
                })
        }
        return (
            <div className="Car">
                <h1>{this.state.pageTitle}</h1>
                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContext.Provider>
                <hr/>
                <button onClick={this.toggleCarsHandler} style={{marginTop: '20px'}}>Toggle Cars</button>
                <button onClick={() => this.setState({clicked: true})}>Change Clicked</button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    { cars }
                </div>
            </div>
        )
    }
}

export default App;
