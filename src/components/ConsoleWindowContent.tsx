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
      <h1>Consoles</h1>
      <p>What&apos;s more fun than playing games made decades before you were born? My first exposure to retro gaming was sitting on the floor at my grandparents house playing my Dad's old Atari 2600 (specifically playing Pitfall!). I currently have {consoleJson.length} consoles, originating from between {getMinYear(consoleJson)} and {getMaxYear(consoleJson)}</p>
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