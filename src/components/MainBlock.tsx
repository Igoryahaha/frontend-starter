import { BodyText, HeaderText } from 'components/Text'
import { Suspense } from 'react'
import { useStore } from '@nanostores/react'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  space,
} from 'classnames/tailwind'
import counter from 'stores/main'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-2')
)
export default function () {
  const count = useStore(counter)

  return (
    <div className={container}>
      <HeaderText>Frontend Template</HeaderText>
      <Suspense fallback={<BodyText>Loading...</BodyText>}>
        <button onClick={() => counter.set(String(Number(count) + 1))}>
          <>Click {count}</>
        </button>
      </Suspense>
    </div>
  )
}
