import 'dotenv/config'
import { constants } from 'ethers'
import { Contract } from 'zksync-web3'
import { estimateGasFee, sendTransaction } from '@/modules/utils'
import ABI from '@/abi/zksync/safe/abi.json'
import type { Wallet } from 'zksync-web3'
import { Module } from '@/types'

async function getCalls(signer: Wallet) {
  const contract = new Contract(
    '0xDAec33641865E4651fB43181C6DB6f7232Ee91c2',
    ABI,
  )
  const address = await signer.getAddress()
  const initializer = contract.interface.encodeFunctionData('setup', [
    [address],
    1,
    constants.AddressZero,
    '0x',
    '0x2f870a80647BbC554F3a0EBD093f11B4d2a7492A',
    constants.AddressZero,
    0,
    constants.AddressZero,
  ])
  return {
    contract,
    functionName: 'createProxyWithNonce',
    args: [
      '0x1727c2c531cf966f902E5927b98490fDFb3b2b70',
      initializer,
      Date.now(),
    ],
  }
}

export default {
  title: 'Safe',
  description: '创建 Safe 钱包',
  value: 'safe',
  type: 'SafeWallet',
  estimateGasFee: async (signer: Wallet) => 
    estimateGasFee(signer, await getCalls(signer)),
  sendTransaction: async (signer: Wallet) =>
    sendTransaction(signer, await getCalls(signer)),
} as Module
