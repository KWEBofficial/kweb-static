import { Container, Text, SimpleGrid, VStack, Link, Flex, HStack } from '@chakra-ui/react'
import { ProjectProps, Team } from 'data/projects'
import Image from 'next/image'
import React from 'react'

const ProjectBox: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <Flex
      bg={`linear-gradient(90deg, ${project.bgColor ?? '#E3E3E3'} 0.95%, rgba(253, 242, 234, 0.00) 102.94%)`}
      borderRadius={4}
      minH={'256px'}
      width={{ sm: '100%' }}
      transition="transform 0.3s ease-in-out, background 0.3s ease-in-out"
      _hover={{
        transform: 'scale(1.05)',
        bgColor: project.bgColor ?? '#E3E3E3',
        cursor: 'pointer'
      }}
      onClick={() => project.url && window.open(project.url, '_blank')}
    >
      <SimpleGrid columns={[1, null, 2]} spacing={10} width="100%" gridTemplateColumns={['1fr', null, '1fr 3fr']}>
        <ProjectImage image={project.image} />
        <ProjectInformation project={project} isRightAlign />
      </SimpleGrid>
    </Flex>
  )
}

const ProjectInformation = ({ project }: { project: ProjectProps; isRightAlign?: boolean }) => {
  return (
    <VStack m={10} flex={1} justify="flex-start" align="flex-start">
      <Flex flexDir={{ base: 'column', sm: 'row' }} align="baseline">
        <Text fontSize="5xl" fontWeight="bold">
          {project.name}
        </Text>
        <Text fontSize="sm" mx={2}>
          {project.description}
        </Text>
      </Flex>
      <Text fontSize="sm" lineHeight={2}>
        {project.introduction}
        {project.team && (
          <HStack fontSize="sm" mt={4}>
            <Text fontWeight={'semibold'}>개발인력: </Text>
            {project.team.map((member: Team, idx: number) => (
              <Flex flexDir="row" align="baseline" key={idx}>
                <Text fontSize="sm">
                  <Link href={member.url} isExternal>
                    `{member.enterYear} {member.name}
                  </Link>
                </Text>
              </Flex>
            ))}
          </HStack>
        )}
      </Text>
    </VStack>
  )
}

const ProjectImage = ({ image }: { image: string }) => {
  return (
    <Container p={0} height="100%" alignItems="center" justifyContent="center" centerContent>
      <Image
        src={image}
        alt="projects"
        height={'200px'}
        width={'200px'}
        quality={100}
        placeholder="blur"
        blurDataURL={image}
      />
    </Container>
  )
}

export default ProjectBox
