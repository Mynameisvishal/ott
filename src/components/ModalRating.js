import React from 'react'

function ModalRating({key,image,title,movie,trigger}) {
    const [open, setOpen] = React.useState(false);
    return (
        <div>

        </div>
    //     <Modal
    //     onClose={() => setOpen(false)}
    //     onOpen={() => setOpen(true)}
    //     open={open}
    //     trigger={trigger}
    //   >
    //     <Modal.Header>{title}</Modal.Header>
    //     <Modal.Content image>
    //       <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
    //       <Modal.Description>
    //         <Header>Default Profile Image</Header>
    //         <p>
    //           We've found the following gravatar image associated with your e-mail
    //           address.
    //         </p>
    //         <p>Is it okay to use this photo?</p>
    //       </Modal.Description>
    //     </Modal.Content>
    //     <Modal.Actions>
    //       <Button color='black' onClick={() => setOpen(false)}>
    //         Nope
    //       </Button>
    //       <Button
    //         content="Yep, that's me"
    //         labelPosition='right'
    //         icon='checkmark'
    //         onClick={() => setOpen(false)}
    //         positive
    //       />
    //     </Modal.Actions>
    //   </Modal>
    )
}

export default ModalRating
