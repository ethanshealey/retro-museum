'use client'
import ConsoleWindowContent from '@/components/ConsoleWindowContent'
import GenericWindow from '@/components/GenericWindow'
import HeaderBar from '@/components/HeaderBar'

export default function Consoles() {
  
    return (
      <div>
        <HeaderBar />
        <div id="main">
          <GenericWindow type='consoles' content={<ConsoleWindowContent />} />
        </div>
      </div>
    )
}
