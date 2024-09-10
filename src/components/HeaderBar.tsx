import { useState } from 'react'
import Image from 'next/image'
import { AppBar, Button, MenuList, MenuListItem, Toolbar } from 'react95'
import startLogo from '/public/static/images/start-logo.png'
import welcomeLogo from '/public/static/images/world-2.png'
import computerIcon from '/public/static/images/computer-2.png'
import cameraIcon from '/public/static/images/camera-2.png'
import consoleIcon from '/public/static/images/joystick-4.png'
import { useRouter } from 'next/navigation'

type HeaderBarProps = {
}

const HeaderBar = () => {

  const router = useRouter()
  const [ open, setOpen ] = useState<boolean>(false)

  const handleClick = (name: string) => router.push(`/${name}`)

    return (
      <div>
        <AppBar>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: 'bold' }}
              >
                <Image
                  src={startLogo}
                  alt=''
                  style={{ height: '20px', width: '20px', marginRight: 4 }}
                />
                Start
              </Button>
              {open && (
                <MenuList
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '100%',
                    zIndex: '10'  
                  }}
                >
                  <MenuListItem 
                        style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer' }}                   
                        onClick={() => handleClick('')}>
                        <Image
                            src={welcomeLogo}
                            alt=''
                            style={{ height: '20px', width: '20px', marginRight: 4 }}
                        />
                        Welcome
                    </MenuListItem>
                    <MenuListItem 
                        style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer' }}                   
                        onClick={() => handleClick('cameras')}>
                        <Image
                            src={cameraIcon}
                            alt=''
                            style={{ height: '20px', width: '20px', marginRight: 4 }}
                        />
                        Cameras
                    </MenuListItem>
                    <MenuListItem 
                        style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer' }}
                        onClick={() => handleClick('computers')}>
                        <Image
                            src={computerIcon}
                            alt=''
                            style={{ height: '20px', width: '20px', marginRight: 4 }}
                        />
                        Computers
                    </MenuListItem>
                    <MenuListItem 
                        style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer' }}
                        onClick={() => handleClick('consoles')}>
                        <Image
                            src={consoleIcon}
                            alt=''
                            style={{ height: '20px', width: '20px', marginRight: 4 }}
                        />
                        Consoles
                  </MenuListItem>
                </MenuList>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default HeaderBar