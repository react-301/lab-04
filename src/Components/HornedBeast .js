import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberofClicks: 0
        }
    }

    increaseNumberOfClicks = () =>{
        this.setState({
            numberofClicks : this.state.numberofClicks+1
        })
    }

    displayAsModal =()=>{
        this.props.displayAsModal(this.props.title);
    }

    render() {

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={this.displayAsModal} variant="top" src={this.props.imgUrl} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>❤️{this.state.numberofClicks} Vote</Card.Text>
                    <Button variant="primary" onClick={this.increaseNumberOfClicks}>Vote</Button>
                </Card.Body>
            </Card>
        )
    }


}

export default HornedBeast;