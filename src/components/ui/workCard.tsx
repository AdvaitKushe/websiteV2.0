import { Card } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface WorkCard {
    title: string;
    description: string;
    image: string;
    stack: string[]
  }
  

function WorkCard ({title, description, image, stack}: WorkCard) {
  return (
   
    <Card.Root width="320px" key = "elevated">
      <Card.Body gap="2">
        <Avatar
          src= {image}
          name="Nue Camp"
          size="lg"
          shape="rounded"
          
        />
        
        <Card.Title mt="2">{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default WorkCard