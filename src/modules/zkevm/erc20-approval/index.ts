import 'dotenv/config'
import { Contract } from 'zksync-web3'
import { estimateGasFee, sendTransaction } from '@/modules/utils'
import ABI from '@/abi/common/erc20-approval.json'
import items from './items'
import type { Wallet } from 'zksync-web3'
import { Module } from '@/types'

async function getCalls(contractAddress: string, signer: Wallet) {
  const address = await signer.getAddress();
  return {
    contract: new Contract(contractAddress, ABI),
    functionName: 'approve',
    args: [address, 0],
  }
}

export default items.map((item) => ({
  title: item.title,
  description: `授权${item.title}`,
  value: item.value,
  type: 'Erc20_approval',
  estimateGasFee: async (signer: Wallet) =>
    estimateGasFee(signer, await getCalls(item.contractAddress, signer)),
  sendTransaction: async (signer: Wallet) =>
    sendTransaction(signer, await getCalls(item.contractAddress, signer)),
})) as Module[]
