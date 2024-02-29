import dmail from './dmail'
import syncswap from './syncswap'
import zksdomain from './zksdomain'
import omnisea from './omnisea'
import safe from './safe'
import erc721Approval from './erc721-approval'
import erc20Approval from './erc20-approval'

function handleModules() {
  const modules = [
    dmail,
    syncswap,
    zksdomain,
    omnisea,
    safe,
  ].sort((a, b) => a.value.localeCompare(b.value))

  modules.push(...erc721Approval, ...erc20Approval)

  return modules;
}

export default handleModules()
