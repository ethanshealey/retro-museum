'use client'
import ComputerWindowContent from '@/components/ComputerWindowContent'
import GenericWindow from '@/components/GenericWindow'
import HeaderBar from '@/components/HeaderBar'

export default function Computers() {
  
    return (
      <div>
        <div id="main">
          <GenericWindow type='computers' content={<ComputerWindowContent />} />
        </div>
        <HeaderBar />
      </div>
    )
}
