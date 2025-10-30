import { MonthlyEvent } from '@data/timeline'
import TIMELINE from '@data/timeline'
import { Box, Text, Flex } from '@chakra-ui/react'
import Reveal from '../Reveal'
const TimeLine: React.FC<{ isTabletSize: boolean }> = ({ isTabletSize }) => {
  return (
    <Flex direction={isTabletSize ? 'column' : 'row'} justifyContent={'center'} p={isTabletSize ? 28 : 0}>
      {TIMELINE.map((monthlyEvent, idx) => (
        <MonthlyEvent key={idx} data={monthlyEvent} order={idx + 1} isTabletSize={isTabletSize} />
      ))}
    </Flex>
  )
}

export default TimeLine

interface MonthlyEventProps {
  data: MonthlyEvent
  order?: number
  isTabletSize: boolean
}

const MonthlyEvent: React.FC<MonthlyEventProps> = ({ data, order, isTabletSize }) => {
  const { events, month } = data
  return (
    <Reveal direction="right" order={order} delay={0.1}>
      <Box
        borderTop={isTabletSize ? 'none' : '1px solid #e2e8f0'}
        borderLeft={isTabletSize ? '1px solid #e2e8f0' : 'none'}
        paddingLeft={isTabletSize ? 8 : 0}
        paddingTop={isTabletSize ? 0 : 8}
        height={isTabletSize ? (events ? 70 : 30) : 'auto'}
        width={isTabletSize ? 'auto' : events ? 100 : 50}
      >
        <Box
          transition="transform 0.3s ease-in-out, background 0.3s ease-in-out"
          _hover={{
            transform: 'scale(1.05)'
          }}
        >
          {events && <Text>{month}월</Text>}
          {events?.map((event, idx) => (
            <Text key={idx} fontSize={'xs'} fontWeight={'light'}>
              {event}
            </Text>
          ))}
        </Box>
      </Box>
    </Reveal>
  )
}
