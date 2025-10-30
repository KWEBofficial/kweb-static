import { CopyIcon } from '@chakra-ui/icons'
import { Icon, Text, Flex, Tooltip } from '@chakra-ui/react'
import { Contact } from '@data/contact'
import { useToastMessage } from 'utils/toastMessage'

interface ContactInfoProps {
  contact: Contact
  color: string
  hoverColor: string
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contact, hoverColor }) => {
  const setToastMessage = useToastMessage()
  const handleCopyClick = () => {
    navigator.clipboard.writeText(contact.value ?? '')
    setToastMessage({
      description: '클립보드에 복사되었습니다.',
      status: 'info',
      duration: 1000,
      size: 'xs'
    })
  }

  const handleLinkClick = () => {
    window.open(contact.href ?? '', '_blank')
  }

  return (
    <Tooltip label={contact.tooltip} placement="auto-start" color={'white'}>
      <Flex
        alignItems={'center'}
        onClick={contact.href ? handleLinkClick : undefined}
        _hover={{ color: hoverColor, cursor: 'pointer' }}
        transition={'color 0.2s ease-in-out'}
        my={2}
      >
        <Icon as={contact.icon} w={'32px'} h={'32px'} mr={2} />
        <Text fontSize={'xs'} fontWeight={'thin'}>
          {contact.name}
        </Text>
        {contact.value && (
          <Text fontSize={'xs'} mx={2}>
            : {contact.value}
          </Text>
        )}
        {contact.isCopy && <CopyIcon onClick={handleCopyClick} color={'gray.400'} ml={1} />}
      </Flex>
    </Tooltip>
  )
}

export default ContactInfo
