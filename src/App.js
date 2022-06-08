import React, {Component} from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        //must make arrow function because this value can change. In this case, the value of this was pointing toward the input
        // console.log(e.target.value)
        this.setState({searchfield: e.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            // return robot names that match search input 

        })

        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>

                </div>
            )
        }
    }
}

export default App