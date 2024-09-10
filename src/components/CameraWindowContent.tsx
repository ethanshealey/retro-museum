import cameraJson from "@/data/cameras.json"
import GenericEntryType from "@/types/GenericEntryType"
import GenericEntry from "./GenericEntry"
import { ScrollView, Separator } from "react95"
import sort from "@/util/sort"
import getMinYear from "@/util/getMinYear"
import getMaxYear from "@/util/getMaxYear"

const CameraWindowContent = () => {

  return (
    <ScrollView className='scroll-view'>
      <h1>Cameras</h1>
      <p>Antique cameras have been the main focus of my dive into this rabbit hole. I currently have {cameraJson.length} cameras, originating from between {getMinYear(cameraJson)} and {getMaxYear(cameraJson)}</p>
      <Separator />
      {
        sort(cameraJson).map((camera: GenericEntryType) => (
          <GenericEntry key={camera.id} entry={camera} />
        ))
      }
    </ScrollView>
  )
}

export default CameraWindowContent