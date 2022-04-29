import { useVote } from '@thirdweb-dev/react'

export default function Component() {
  const vote = useVote("0x2fF2ca7E37c2Ac3dD5FeA79214ab971A0b0aEb24")

  // Now you can use the vote contract in the rest of the component
}