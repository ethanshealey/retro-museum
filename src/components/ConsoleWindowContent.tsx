import sort from "@/util/sort"
import { ScrollView, Separator } from "react95"
import GenericEntry from "./GenericEntry"
import GenericEntryType from "@/types/GenericEntryType"
import getMinYear from "@/util/getMinYear"
import getMaxYear from "@/util/getMaxYear"
import consoleJson from '@/data/console.json'

const ConsoleWindowContent = () => {
    
  return (
    <ScrollView className='scroll-view'>
      <h1>Computers</h1>
      <p>I have always found vintage computers to be super interesting, but due to their size and price I have not collected many. I currently have {consoleJson.length} computers, originating from between {getMinYear(consoleJson)} and {getMaxYear(consoleJson)}</p>
      <Separator />
      {
        sort(consoleJson).map((camera: GenericEntryType) => (
          <GenericEntry key={camera.id} entry={camera} />
        ))
      }
    </ScrollView>
  )
}

export default ConsoleWindowContent