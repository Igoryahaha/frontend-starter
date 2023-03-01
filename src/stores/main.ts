import { persistentAtom } from '@nanostores/persistent'

const counter = persistentAtom<string>('count', '0')

export default counter
