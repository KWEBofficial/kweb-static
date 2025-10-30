import { Box, Flex, Grid, GridItem, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import CONTACTS from '../../data/contact'
import Logo from '../../../public/logo.png'
import ContactInfo from './Contact'
interface FooterProps {}
import Image from 'next/image'

export const LandingPageFooter: React.FC<FooterProps> = ({}) => {
  const containerBg = useColorModeValue('white', 'gray.600')
  const iconColor = useColorModeValue('gray.800', 'white')
  const iconHoverColor = useColorModeValue('gray.600', 'gray.300')
  return (
    <Box bg={containerBg} py={{ base: 0, lg: 28 }} px={{ base: 0, lg: 14 }}>
      <Grid templateColumns={'repeat(2, 1fr)'} gap={6} px={6} py={6}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Flex alignItems={'center'}>
            <Image src={Logo.src} alt="케이웹 로고" width={64} height={64} quality={100} />
            <Box>
              <Heading color={'gray.800'} fontSize={'1.4em'} ml={2} fontWeight={'normal'}>
                KWEB
              </Heading>
              <Heading color={'gray.800'} fontSize={'0.8em'} ml={2} fontWeight={'normal'}>
                고려대학교 정보대학 웹개발 학회
              </Heading>
            </Box>
          </Flex>
          <Text fontSize={'4xl'} fontWeight={'hairline'} mt={10}>
            Contact Us.
          </Text>
          <Text my={4}>
            입부 신청, 채용 홍보, 외주 요청, 그리고 기타 사항은 케이웹 공식 계정 및 운영진에게 문의주세요 !
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }} display={'flex'} justifyContent={{ base: 'left', md: 'center' }}>
          <Box>
            {CONTACTS.map((contacts, index) => {
              return <ContactInfo key={index} contact={contacts} color={iconColor} hoverColor={iconHoverColor} />
            })}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}
