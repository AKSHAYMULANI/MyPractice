import { Button, 
  Container, 
  Flex , 
  useDisclosure, 
  Modal, 
  Stack,
  Input,
  Select
  
} from "@chakra-ui/react"

import React,{useEffect,useRef} from 'react'


function HomePage(){
  const modal1 = useDisclosure()
  const modal2 = useDisclosure()


  
return <div>
  <Container>
  <Flex gap = '2rem' mt='1rem' justifyContent='center'>
    <Button  onClick={modal1.onOpen}>Add Hospitals </Button>
    <Button  onClick={modal2.onOpen}>Add Doctors </Button>
  </Flex>
  <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
       
    <Stack spacing={3} my='2rem'>
    <Input placeholder='Enter Hospital Name' size='sm' />
    <Input placeholder='Enter Address' size='sm' />
    </Stack>
    <Button type='submit' mr='2rem'> Submit </Button>
    <Button colorScheme='blue' mr={3} onClick={modal1.onClose}>
      Close
    </Button>    
  </Modal>

  <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
       <Stack spacing={3} my='2rem'>
       <Input placeholder='Doctor Name Name' size='sm' />
       <Select placeholder='Select Hospital'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <Select placeholder='Select Specialisation'>
          <option value='option1'>Geneal</option>
          <option value='option2'>Eye, Nose</option>
          <option value='option3'>Skin</option>
        </Select>
       <Input placeholder='Salary'  type= 'number' size='sm' />
       </Stack>
       <Button type='submit' mr='2rem'> Submit </Button>
       <Button colorScheme='blue' mr={3} onClick={modal2.onClose}>
         Close
       </Button>    
     </Modal>
  </Container>

</div>
}

export default HomePage