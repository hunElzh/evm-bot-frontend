import { BigNumber, ethers } from 'ethers';
import { contract } from '@/constants';
import ABI from '@/abi/zkevm/crossChainNft/abi.json'
import { estimateGasFee, sendTransaction } from '@/modules/utils';
import { Calls } from '@/types';
import { Wallet } from 'zksync-web3';
import { Module } from '@/types';

function getArgs() {
  const ethers = BigNumber.from(0)
  const chainId = 1; // 改成手动选择
  const tokenId = 1;
}


function getCalls(): Calls {
  const contractInstance = new ethers.Contract(contract.POLY_ZKEVM.CROSSCHAINNFT, ABI);
  const functionName = 'crossChain';
  const args = [BigNumber.from(0), 1, 'tokenId'];
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
  title: 'CrossChainNft-CrossChain',
  description: `CrossChain`,
  value: 'crossChainNft-Mint-CrossChain',
  type: 'CrossChain',
  estimateGasFee: (signer: Wallet) => estimateGasFee(signer, getCalls()),
  sendTransaction: (signer: Wallet) => sendTransaction(signer, getCalls()),
} as Module

