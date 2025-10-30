import { Footer } from '../components/Footer'
import { Box, Divider, Flex, HStack, SimpleGrid, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MEMBER_LEVELS, { MEMBER_COUNT } from '@data/memberLevel'
import Reveal from '@components/Reveal'
import TimeLine from '@components/MainPage/Timeline'
import SplineKweb from '@components/MainPage/Spline'
import MemberBox from '@components/MainPage/MainMemberBox'
import ProjectList from '@components/Project/ProjectList'
import Image from 'next/image'
import Logo from '../../public/logo.png'

const MAX_CONTENT_WIDTH = '800px'
const OVER_CONTENT_WIDTH = '1000px'

const Index = () => {

  const isTabletSize = useMediaQuery('(max-width: 950px)')[0]

  const moveToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  return (
    <>
      <Flex
        width={'100%'}
        pb={{ base: 4, md: 16 }}
        pt={{ base: 4, md: 10 }}
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image
          src={Logo.src}
          alt="케이웹 로고"
          width={'100%'}
          height={'100%'}
          quality={100}
          placeholder="blur"
          blurDataURL={Logo.src}
        />

        <Stack maxW={MAX_CONTENT_WIDTH} width={'100%'} pb={{ base: 8, md: 20, lg: 32 }} px={{ base: 4, md: 0 }}>
          <Flex direction={'column'} alignItems={'left'}>
            <Divider my={{ base: 10, md: 22 }} />
            <Box mt={32}>
              <Flex>고려대학교 정보대학 웹개발학회</Flex>
              <Flex
                display={{ base: 'block', md: 'flex' }}
                justifyContent={'flex-start'}
                alignItems="left"
                flexWrap={{ base: 'nowrap', md: 'wrap' }}
              >
                <Text fontSize={'4xl'} fontWeight={'bold'} color={'blue.600'} display={'inline'}>
                  K
                </Text>
                <Text fontSize={'4xl'} fontWeight={'bold'} display={'inline'}>
                  orea University&nbsp;
                </Text>
                <Text fontSize={'4xl'} fontWeight={'bold'} color={'blue.600'}>
                  WEB&nbsp;
                </Text>
                <Text fontSize={'4xl'} fontWeight={'bold'}>
                  Master
                </Text>
              </Flex>
            </Box>
            <Box mt={10} mb={32}>
              <Flex display={{ base: 'block', md: 'flex' }}>
                <Text mr={4}>여러분을 웹의 세계로 초대합니다!&nbsp;</Text>
                <Flex
                  onClick={() => window.open('https://klub.kr/club/1', '_blank')}
                  style={{ cursor: 'pointer' }}
                  alignItems={'center'}
                  color={'blue.800'}
                  transition="transform 0.3s ease-in-out, background 0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)'
                  }}
                >
                  <Text mr={1}>Join Us</Text>
                  <FaLongArrowAltRight />
                </Flex>
              </Flex>
              <Flex display={{ base: 'block', md: 'flex' }} mt={2}>
                <Text mr={4}>채용 홍보 및 외주 요청 등은 케이웹 공식 계정으로 운영진에게 문의해주세요</Text>
                <Flex
                  style={{ cursor: 'pointer' }}
                  alignItems={'center'}
                  color={'blue.800'}
                  onClick={moveToFooter}
                  transition="transform 0.3s ease-in-out, background 0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)'
                  }}
                >
                  <Text mr={1}>Contact</Text>
                  <FaLongArrowAltRight />
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Stack>
        <Stack maxW={OVER_CONTENT_WIDTH} width={'100%'} pb={{ base: 8, md: 20, lg: 32 }}>
          <SimpleGrid columns={{ base: 1, xl: 3 }} spacing={{ base: 0, md: 4, lg: 8, xl: 8 }} width={'100%'}>
            {MEMBER_LEVELS.map((level, idx) => (
              <Reveal key={idx} order={idx + 1} delay={0.3}>
                <Box
                  height={'100%'}
                  key={idx}
                  bgColor={level.bgColor}
                  p={10}
                  borderRadius={{ base: 0, md: 24 }}
                  transition="transform 0.3s ease-in-out, background 0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)'
                  }}
                >
                  <Flex mb={2} alignItems={'center'}>
                    <Text fontWeight={'bold'} fontSize={'3xl'}>
                      {level.level}
                    </Text>
                    <Text ml={2} fontWeight={'bold'} fontSize={'md'}>
                      |&nbsp;&nbsp;{level.english}
                    </Text>
                  </Flex>
                  <Text lineHeight={'tall'} color={'gray.600'} fontSize={'xs'}>
                    {level.description}
                  </Text>
                  <Text mt={4} mb={2} fontWeight={'bold'}>
                    지원자격
                  </Text>
                  <Text lineHeight={'tall'} color={'gray.600'} fontSize={'xs'}>
                    {level.applyCondition}
                  </Text>
                  <Text mt={4} mb={2} fontWeight={'bold'}>
                    수료조건
                  </Text>
                  <Text lineHeight={'tall'} color={'gray.600'} fontSize={'xs'}>
                    {level.passCondition}
                  </Text>
                  <Text mt={4} mb={2} fontWeight={'bold'}>
                    일정
                  </Text>
                  <Text lineHeight={'tall'} color={'gray.600'} fontSize={'xs'}>
                    {level.schedule}
                  </Text>
                </Box>
              </Reveal>
            ))}
          </SimpleGrid>
        </Stack>
      </Flex>
      <Flex w="100%" bg="#282828" color={'whitesmoke'} justifyContent={'center'} py={{ base: 10, md: 20, lg: 32 }}>
        <Stack gap={12} justifyContent={'center'}>
          <Reveal>
            <Flex justifyContent={'center'} alignItems={'center'} width={'100%'}>
              <SplineKweb />
            </Flex>
          </Reveal>

          <Reveal>
            <Box>
              <Text fontSize={'2xl'} fontWeight={'normal'} textAlign={'center'} mb={16}>
                Timeline
              </Text>
              <TimeLine isTabletSize={isTabletSize} />
            </Box>
          </Reveal>
          <Reveal>
            <Box my={{ base: 16, md: 64 }}>
              <Text fontSize={'2xl'} fontWeight={'extralight'} textAlign={'center'} mb={16}>
                Members
              </Text>
              <HStack gap={4} flexDir={isTabletSize ? 'column' : 'row'} justifyContent={'center'}>
                {MEMBER_COUNT.map((member, idx) => (
                  <MemberBox key={idx} level={member.level} count={member.count} description={member.description} />
                ))}
              </HStack>
            </Box>
          </Reveal>
        </Stack>
      </Flex>
      <ProjectList />
      <Footer isLandingPage />
    </>
  )
}

export default Index
