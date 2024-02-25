'use client'

import Content from '@/ui/dashboard/content';
import { ethers } from 'ethers';

const Page = () => {
  const projectData: Project[] = [
    {
      title: '项目名称 1',
    },
    {
      title: '项目名称 2',
    },
    {
      title: '项目名称 3',
    },
    {
      title: '项目名称 4',
    },
  ];

  
  
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  async function handleClick() {
    
  }


  return (
    <>
      <Content
        project={projectData}
        provider={provider}
      />
      <button onClick={handleClick}>111</button>
    </>
  )
}

export default Page;