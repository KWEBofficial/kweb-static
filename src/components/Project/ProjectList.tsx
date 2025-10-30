import { Container, Text, VStack } from '@chakra-ui/react'
import Projects from 'data/projects'
import ProjectBox from 'components/Project/ProjectBox'

const ProjectList = () => {
  return (
    <Container maxWidth={'1200px'} centerContent mt={32} mb={16}>
      <Text fontSize={'2xl'} fontWeight={'normal'} textAlign={'center'}>
        Projects
      </Text>
      <VStack spacing={16} mt={16} width={'100%'}>
        {Projects.map((project, idx) => (
          <ProjectBox project={project} key={idx} />
        ))}
      </VStack>
    </Container>
  )
}

export default ProjectList
