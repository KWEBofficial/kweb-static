import { Box, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import AnimatedCounter from './AnimatedCounter' // Assuming AnimatedCounter is imported correctly

interface MemberBoxProps {
  level: string
  count: number
  description: string
}

const MemberBox: React.FC<MemberBoxProps> = ({ level, count, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      style={{ border: '1px solid gray', borderRadius: 4 }}
      py={4}
      display={'flex'}
      justifyContent={'center'}
      width={300}
      height={150}
      transition="transform 0.3s ease-in-out, background 0.3s ease-in-out"
      _hover={{
        transform: 'scale(1.05)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack textAlign={'center'}>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          {level}
        </Text>
        <Text fontSize={'4xl'} fontWeight={'bold'}>
          <AnimatedCounter to={count} />명
        </Text>
        {isHovered && (
          <Text fontSize={'xs'} fontWeight={'light'} color={'gray.300'}>
            {description}
          </Text>
        )}
      </Stack>
    </Box>
  )
}

export default MemberBox
