import React, {Component} from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';

// state is an object; changeable;
//props are things that come out of state.

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        //must make arrow function because this value can change. In this case, the value of this was pointing toward the input
        // console.log(e.target.value)
        this.setState({searchfield: e.target.value})
    }




    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            // return robot names that match search input 

        })
        // console.log(filteredRobots)
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>

        )
    }
}

export default App