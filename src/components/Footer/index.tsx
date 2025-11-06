import { Box, Text, Link, HStack, Icon, Divider } from '@chakra-ui/react'
import CONTACTS from '@data/contact'
import React from 'react'
import { LandingPageFooter } from './LandingPageFooter'
interface FooterProps {
  isLandingPage?: boolean
}

export const Footer: React.FC<FooterProps> = ({ isLandingPage }) => {
  return (
    <Box m={10}>
      {isLandingPage ? (
        <LandingPageFooter />
      ) : (
        <>
          <Divider my={4} />
          <HStack justify={'center'}>
            {CONTACTS.map((contacts, index) => {
              return (
                <Link href={contacts.href} isExternal key={index}>
                  <Icon as={contacts.icon} w={'20px'} h={'20px'} />
                </Link>
              )
            })}
          </HStack>
        </>
      )}
      <Text fontSize={'xs'} color={'gray.600'} textAlign={'center'} mt={4}>
        &copy; Copyright. All rights reserved.
      </Text>
      <Text fontSize={'xs'} color={'gray.600'} textAlign={'center'}>
        <Link href={'contributors'} fontSize={'xs'} textDecor={'underline'} textAlign={'center'}>
          Developers
        </Link>
      </Text>
    </Box>
  )
}
