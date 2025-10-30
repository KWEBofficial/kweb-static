export interface MemberLevel {
  level: string
  english: string
  description: string
  applyCondition: string
  passCondition: string
  schedule: string
  bgColor: string
}

const MEMBER_LEVELS: MemberLevel[] = [
  {
    level: '준회원 🐣',
    english: 'Junior',
    description: `한 학기 동안 현업 선배들이 인정한 커리큘럼과 
    자체제작 스터디 자료로 실력있는 선배들에게서 배워보세요!

    웹의 기초에서부터 다양하게 준비된 실습으로, 급변하는 웹 개발
    트렌드에서 좋은 기술을 찾고 잘 사용할 수 있는 능력과
    빠르게 프로젝트를 시작할 수 있는 능력을 모두 목표로 합니다.`,
    applyCondition: `정보대학 소속 학생 및 정보대학 전공 이중전공생, 학번 무관, 정회원 2학기 이상 활동 가능자`,
    passCondition: `각 학기 승급 시험 통과`,
    schedule: `각 학기당 8~9회의 스터디가 매주 진행되며, 
    종강총회일에 승급시험이 예정되어 있습니다.`,
    bgColor: '#FFF8FC'
  },
  {
    level: '정회원 🐔',
    english: 'Senior',
    description: `자유 주제로 팀을 모아 함께 공부하고 있습니다.

    나만의 아이디어로 웹, 앱 등 실제 배포 프로젝트나
    이론 위주의 기술, 면접 스터디들을 자유롭게 발제할 수 있으며 
    실무경험, 외주 등 많은 기회가 제공됩니다.`,
    applyCondition: `준회원 수료자, 준회원 면제과제 합격자`,
    passCondition: `2학기 이상 활동`,
    schedule: `각 학기당 개강총회, 종강총회 외 4번의 스터디 공유회가 있습니다.`,
    bgColor: '#F4F5FF'
  },
  {
    level: '명예회원 🦚',
    english: 'Alumni',
    description: `매년 11월, KWEB의 전통, 화합의 날에 진행하는 행사에서
    115명의 명예회원들을 만나보세요! 
    
    IT기업, 대기업, 연구실 등 다양한 직업 분야의 선배님들과
    함께합니다.`,
    applyCondition: `정회원 활동 3학기 이상`,
    passCondition: `-`,
    schedule: `화합의 날 및 그 외 행사들 자유롭게 참여`,
    bgColor: '#F5F5F5'
  }
]

export default MEMBER_LEVELS

export const AVERAGE_PASS_RATE = 30

export const MEMBER_COUNT = [
  {
    level: '준회원',
    count: 83,
    description: `탄탄한 기초를 다지는 1년간의 여정`
  },
  {
    level: '정회원',
    count: 28,
    description: '개발가능인력 (휴회원 제외)'
  },
  {
    level: '명예회원',
    count: 115,
    description: '화합의날에 만나요!'
  }
]
