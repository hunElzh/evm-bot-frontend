import pancakeswap from './pancakeswap/pancakeswap'
import satoriDeposit from './satori/satoriDeposit'
import keomDeposit from './keom/keomDeposit'
import keomBorrow from './keom/keomBorrow'
import keomRepayBorrow from './keom/keomRepayBorrow'
import keomWithDraw from './keom/keomWithdraw'
import mintCrossChainNFT from './crossChainNft/mintNft'
import erc721Approval from './erc721-approval'
import erc20Approval from './erc20-approval'


function handleModules() {
  const modules = [
    // pancakeswap,
    // satoriDeposit,
    keomDeposit,
    keomBorrow,
    keomRepayBorrow,
    keomWithDraw,
    mintCrossChainNFT,
  ].sort((a, b) => a.value.localeCompare(b.value))

  modules.push(...erc20Approval, ...erc721Approval)

  return modules;
}

export default handleModules()
