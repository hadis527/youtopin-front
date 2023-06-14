import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import AddToDo from '../addToDo';
const UpadatToDo =(props) =>{
    const { isOpen, onClose,title,selectedTask,mode} = props;
    return (
      <>
        <Modal isOpen={isOpen} onClose={() => onClose(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <AddToDo mode={mode} selectedTask={selectedTask}/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default UpadatToDo;