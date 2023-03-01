import {
  classnames,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'

const whiteText = classnames(textColor('text-white'))
const grayText = classnames(textColor('text-gray-300'))

const headerText = classnames(
  whiteText,
  fontSize('text-3xl', 'md:text-6xl'),
  fontWeight('font-bold'),
  textAlign('text-center')
)
export function HeaderText({ children }) {
  return <p className={headerText}>{children}</p>
}

const bodyText = classnames(grayText, textAlign('text-center'))
export function BodyText({ children }) {
  return <p className={bodyText}>{children}</p>
}
