import sort from "@/util/sort"
import { ScrollView, Separator } from "react95"
import GenericEntry from "./GenericEntry"
import GenericEntryType from "@/types/GenericEntryType"
import computerJson from '@/data/computers.json'
import getMaxYear from "@/util/getMaxYear"
import getMinYear from "@/util/getMinYear"

const ComputerWindowContent = () => {
    
  return (
    <ScrollView className='scroll-view'>
      <h1>Computers</h1>
      <p>I have always found vintage computers to be super interesting, but due to their size and price I have not collected many. I currently have {computerJson.length} computers, originating from between {getMinYear(computerJson)} and {getMaxYear(computerJson)}</p>
      <Separator />
      {
        sort(computerJson).map((camera: GenericEntryType) => (
          <GenericEntry key={camera.id} entry={camera} />
        ))
      }
    </ScrollView>
  )
}

export default ComputerWindowContent