import klue from '../../public/klueProject.png'
import klub from '../..//public/klubProject.png'
import hobit from '../../public/hobitProject.png'

export interface Team {
  name: string
  enterYear: number
  url?: string
}

export interface ProjectProps {
  id: number
  name: string
  description: string
  introduction: string
  team?: Team[]
  image: string
  url: string | undefined
  bgColor?: string
}

const Projects: ProjectProps[] = [
  {
    id: 1,
    name: 'KLUE',
    description: '고려대학교 강의평가 사이트',
    introduction: `단연 KWEB의 자랑, 고려대학교 학생이라면 한번쯤은 써봤을만한 강의평가 사이트!
                    KLUE는 2012년도부터 KWEB에서 시작한 웹사이트로, 학우분들의 솔직한 강의평가를 듣기 위해 개발되었습니다.
                    매 해 12,000건의 검색과 누적 5000명의 사용자를 자랑하는 KLUE는 실력있는 명예회원들이 안전하게 유지보수중입니다.
                    물론, KWEB 정회원들에게도 간혹 프로젝트 참여 기회가 주어집니다!`,
    image: klue.src,
    url: 'https://klue.kr/',
    bgColor: '#FDF2EA'
  },
  {
    id: 2,
    name: 'KLUB',
    description: '고려대학교 동아리 관리 서비스',
    introduction: `2023년도 KWEB 해커톤 1등작, 동아리 운영진들이 직접 개발한 관리 서비스! 
                  동아리 부원 명단, 등급, 출석, 회의, 회비, 등 많은 걸 다 관리할 수 있어요!
                  동아리 홍보 및 지원기능도 제공해 보다 수월하게 사용자들의 동아리 검색 및 등록을 돕고 있습니다.
                  나날히 성장하는 KLUB 서비스 많이 지켜봐 주세요!`,
    image: klub.src,
    url: 'https://klub.kr/',
    bgColor: '#EFF0FF'
    // team: [
    //   {
    //     name: '홍길동',
    //     enterYear: 17,
    //     url: 'https://github.com/KWEBofficial'
    //   },
    //   {
    //     name: '갑동이',
    //     enterYear: 17,
    //     url: 'https://github.com/KWEBofficial'
    //   }
    // ]
  },
  {
    id: 4,
    name: 'hoBIT',
    description: '정보대학 챗봇 서비스',
    introduction: `hoBIT은 정보대학 학생들이 궁금해 할 질문들에 대해, 학과 홈페이지의 수많은 문서를
                  일일히 탐색하지 않고도 편하게 답변을 얻을 수 있도록
                  제공하는 챗봇 서비스입니다. 공간예약, 학사행정, 안전교육 등 궁금한 것이 있으면 무엇이든 물어보세요.`,
    image: hobit.src,
    url: 'https://hobit.kr/',
    bgColor: '#FEAEB6'
  }
]

export default Projects
