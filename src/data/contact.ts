import { IconType } from 'react-icons/lib'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaDiscord, FaFacebookF } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

export type Contact = {
  icon: IconType
  name: string
  value?: string
  href?: string
  tooltip?: string
  isCopy?: boolean
}
const CONTACTS: Contact[] = [
  {
    icon: IoIosMail,
    name: '이메일',
    value: 'officialkweb@gmail.com',
    tooltip: '메일주소 복사하기',
    isCopy: true
  },
  {
    icon: FaFacebookF,
    name: '페이스북',
    value: 'Kweb - 고려대학교 컴퓨터학과 전공소모임',
    href: 'https://www.facebook.com/groups/kweb.group',
    tooltip: '페이스북 그룹 바로가기'
  },
  {
    icon: AiFillGithub,
    name: '깃헙 조직 계정',
    value: 'KWEBOfficial',
    href: 'https://github.com/KWEBofficial',
    tooltip: '깃헙 조직 바로가기'
  },
  { icon: FaDiscord, name: '디스코드 서버', tooltip: '운영진에게 문의주세요' },
  {
    icon: AiFillInstagram,
    name: '인스타그램 계정',
    value: '@kweb1998',
    href: 'https://www.instagram.com/kweb1998/',
    tooltip: 'KWEB의 각종 소식을 만나보세요'
  }
]
export default CONTACTS
