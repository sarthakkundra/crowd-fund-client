import { createConfig,http } from 'wagmi'
import { sepolia } from 'wagmi/chains'

 const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
})

export default config