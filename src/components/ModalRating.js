import React from 'react';
import { Modal, Image,Header,Button,Icon } from 'semantic-ui-react';
function ModalRating({ movie, trigger }) {
    const [modal, setModal] = React.useState(false);
        if (trigger === "true") {
            setModal(true)
        }

    const openModal = () => setModal(true);

    const closeModal = () => setModal(false);

    return (
        <div>
            {console.log("inside modalRAting")}
            <Modal basic open={modal} onClose={closeModal}>
                <Modal.Header>{movie.title}</Modal.Header>
                <Modal.Content>
            
                </Modal.Content>
                <Modal.Actions>
                    <Button color="green" inverted >
                    <Icon name="checkmark" /> Add
                    </Button>
                    <Button color="red" inverted onClick={closeModal}>
                    <Icon name="remove" /> Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
       
    )
}

export default ModalRating
