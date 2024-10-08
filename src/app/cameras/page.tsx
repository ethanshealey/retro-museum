'use client'
import HeaderBar from '@/components/HeaderBar'
import GenericWindow from '@/components/GenericWindow';
import CameraWindowContent from '@/components/CameraWindowContent';

export default function Cameras() {
  
    return (
      <div>
        <div id="main">
          <GenericWindow type='cameras' content={<CameraWindowContent />} />
        </div>
        <HeaderBar />
      </div>
    )
}
