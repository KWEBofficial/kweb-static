import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import kweb_globe from '../../../public/kweb-globe.png'

const SplineKweb: React.FC = () => {
  return (
    <Box height={'100%'} width={'auto'}>
      <Image src={kweb_globe.src} alt="KWEB 지구본" width={kweb_globe.width / 2} height={kweb_globe.height / 2} />
    </Box>
  )
}

export default SplineKweb
