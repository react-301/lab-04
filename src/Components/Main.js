import React from 'react';
import HornedBeast from './HornedBeast ';
import Form from 'react-bootstrap/Form';
import hornsData from './hornsData.json';


class Main extends React.Component {


    filter = (event) => {
        let numHorns=parseInt(event.target.value);
        let allHorns=hornsData;
        let newAllHorns;
        if(numHorns){
            newAllHorns=allHorns.filter((item)=>{
                if(item.horns == numHorns)
                return item;
            })
        }
        else{
            newAllHorns=allHorns;
        }
        this.props.displayFilteredImages(newAllHorns);
    }

    render() {

        return (
            <>
                <div>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select" custom onChange={this.filter}>
                                <option value=''>All</option>
                                <option value='1'>One</option>
                                <option value='2'>Two</option>
                                <option value='3'>Three</option>
                                <option value='100'>Wow...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>


                <div>
                    {this.props.hornsData.map(item => {
                        return (
                            <>
                                <HornedBeast
                                    title={item.title}
                                    imgUrl={item.image_url}
                                    description={item.description}
                                    displayAsModal={this.props.displayAsModal}
                                />

                            </>
                        )
                    })}
                </div>

            </>
        )
    }


}

export default Main; 