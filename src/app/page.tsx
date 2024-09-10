'use client'
import HeaderBar from '@/components/HeaderBar'
import GenericWindow from '@/components/GenericWindow'
import WelcomeWindowContent from '@/components/WelcomeWindowContent'


export default function Home() {

  return (
    <div>
      <div id="main">
        <GenericWindow type='welcome' content={<WelcomeWindowContent />} />
      </div>
      <HeaderBar />
    </div>
  )
}
