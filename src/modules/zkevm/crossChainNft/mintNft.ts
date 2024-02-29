import { ethers } from 'ethers';
import { contract } from '@/constants';
import ABI from '@/abi/zkevm/crossChainNft/abi.json'
import { estimateGasFee, sendTransaction } from '@/modules/utils';
import { Calls } from '@/types';
import { Wallet } from 'zksync-web3';
import { Module } from '@/types';


function getCalls(): Calls {
  const contractInstance = new ethers.Contract(contract.POLY_ZKEVM.CROSSCHAINNFT, ABI);
  const functionName = 'mint';
  const args: any[] = [];
  const options = {
    gasLimit: ethers.utils.parseEther('0.01')
  }
  return {
    contract: contractInstance,
    functionName: functionName,
    args: args,
    options: options
  }
}

export default {
  title: 'CrossChainNft-Mint',
  description: `MintNft`,
  value: 'crossChainNft-Mint',
  type: 'CrossChain',
  estimateGasFee: (signer: Wallet) => estimateGasFee(signer, getCalls()),
  sendTransaction: (signer: Wallet) => sendTransaction(signer, getCalls()),
} as Module

