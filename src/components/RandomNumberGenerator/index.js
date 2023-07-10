import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
    state = {no: 0}

    randomNoGenerate = () => Math.ceil(Math.random() * 100)

    onClickBtn = () => {
        const generateNo = this.randomNoGenerate()
        this.setState({no: generateNo})
    }

    render() {
        const { no } = this.state
        return (
            <div className='bg-container'>
                <div className='card'>
                    <h1 className='heading'>Random Number</h1>
                    <p className='description'>Generate a random number in the range of 0 to 100</p>
                    <button className='button' type='button' onClick={this.onClickBtn}>Generate</button>
                    <p className='generate-no'>{no}</p>
                </div>
            </div>
        )
    }
}

export default RandomNumberGenerator