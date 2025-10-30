import { Box, Flex, Icon, Link, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'

import { Footer } from '../../components/Footer'

import CONTRIBUTOR from '@data/contributor'

const contributors = () => {

  return (
    <>
      <Flex
        w={'full'}
        textAlign={{ base: 'left', md: 'center' }}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        bg={'gray.100'}
      >
        <Box w={'full'} pt={20} px={10}>
          <Text
            mb={2}
            fontSize={'5xl'}
            fontWeight={'bold'}
            lineHeight={'tight'}
            bgGradient={'linear(to-r, blue.400, purple.800)'}
            bgClip={'text'}
          >
            Contributors
          </Text>
        </Box>
        <Box w={'full'} px={10} bgGradient={'linear(to-b, gray.100 50%, white 50%)'}>
          <Flex my={30} bg={'white'} rounded={'md'} shadow={'lg'} alignItems={'center'} justifyContent={'center'}>
            <Stack spacing={8} px={{ base: 2, md: 16 }} py={10} flex={{ base: '0.9', md: '0.7' }}>
              <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
                {CONTRIBUTOR.map((contributors, idx) => (
                  <Box bg={'#F4F4F4'} rounded={'md'} p={4} key={idx}>
                    <Flex direction={'row'} alignItems={'center'} justifyContent={'start'} key={idx}>
                      <VStack ml={6} textAlign={'left'} align={'left'}>
                        <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={'bold'} color={'gray.800'}>
                          {contributors.name}
                          <Box as="span" color="gray.500" fontSize={{ base: 'sm', md: 'md' }} ml={2}>
                            {contributors.role}
                          </Box>
                        </Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }} color={'gray.500'}>
                          {contributors.date}
                        </Text>
                        <Box as="span" fontSize={{ base: 'sm', md: 'md' }} ml={2}>
                          <Link
                            fontSize={{ base: 'sm', md: 'md' }}
                            color={'blue.600'}
                            href={contributors.github}
                            isExternal
                          >
                            <Icon
                              as={AiFillGithub}
                              boxSize={6}
                              viewBox={'0 0 24 24'}
                              stroke={'currentcolor'}
                              aria-hidden={'true'}
                              style={{ marginRight: '2px' }}
                            />
                          </Link>

                          <Link
                            fontSize={{ base: 'sm', md: 'md' }}
                            color={'black'}
                            href={`mailto:${contributors.mail}`}
                            isExternal
                          >
                            <Icon
                              as={HiMail}
                              boxSize={6}
                              viewBox={'0 0 24 24'}
                              stroke={'currentcolor'}
                              aria-hidden={'true'}
                            />
                          </Link>
                        </Box>
                      </VStack>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </>
  )
}
export default contributors
