import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
    

   handleClose =()=>{
       this.props.handleClose();
   }

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        {this.props.selectedBeast.title}
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img src={this.props.selectedBeast.image_url} />
                    </Modal.Body>
                    <Modal.Footer>
                        {this.props.selectedBeast.description}
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}


export default SelectedBeast;