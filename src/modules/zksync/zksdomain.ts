import 'dotenv/config'
import { Contract } from 'zksync-web3'
import { estimateGasFee, sendTransaction } from '@/modules/utils'
import ABI from '@/abi/zksync/zksdomain/abi.json'
import type { Wallet } from 'zksync-web3'
import { Module } from '@/types'

async function generageRandomName(contract: Contract) {
  const random = Math.random().toString(36).slice(2)
  const length = Math.floor(Math.random() * 4) + 6
  const name = random.slice(0, length)
  console.log(`name-----------${name}`)
  debugger;
  const available = await contract.available(name)
  if (!available) {
    return generageRandomName(contract)
  }
  return name
}

async function getCalls(signer: Wallet) {
  const contract = new Contract(
    '0xcbe2093030f485adaaf5b61deb4d9ca8adeae509',
    ABI,
  )
  const address = await signer.getAddress();
  const name = await generageRandomName(contract.connect(signer))
  return {
    contract,
    functionName: 'register',
    args: [name, address, 1],
  }
}

export default {
  title: 'ZKS Domain',
  description: '注册 .zks 域名',
  value: 'zksdomain',
  type: 'ZKSDomain',
  estimateGasFee: async (signer: Wallet) =>
    estimateGasFee(signer, await getCalls(signer)),
  sendTransaction: async (signer: Wallet) =>
    sendTransaction(signer, await getCalls(signer)),
} as Module
