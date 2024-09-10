import { useState, useEffect } from 'react'
import {
    Button,
    Toolbar,
    Window,
    WindowContent,
    WindowHeader
  } from 'react95';
import { ImCross } from "react-icons/im";
import Draggable from 'react-draggable';
import welcomeIcon  from '/public/static/images/world-2.png'
import cameraIcon from '/public/static/images/camera-2.png'
import computerIcon  from '/public/static/images/computer-2.png'
import consoleIcon  from '/public/static/images/joystick-4.png'
import {isMobile} from 'react-device-detect';

import Image from 'next/image'

type GenericWindowProps = {
    type: string,
    content: JSX.Element
}

const GenericWindow = ({ type, content }: GenericWindowProps) => {

    const [ icon, setIcon ] = useState<any>()

    useEffect(() => {

        console.log(`Spawning in a window of type ${type}`)

        switch(type) {
            case 'welcome':
                setIcon(welcomeIcon)
                break
            case 'cameras':
                setIcon(cameraIcon)
                break
            case 'computers':
                setIcon(computerIcon)
                break
            case 'consoles':
                setIcon(consoleIcon)
                break
        }

    }, [])

    useEffect(() => {
        console.log(isMobile)
    }, [isMobile])
    
    return (
        <Draggable handle=".window-title" disabled={isMobile}>
            <Window className='window'>
                <WindowHeader className='window-title'>
                    <span className='window-title-span'>
                    <Image
                        src={icon ?? ''}
                        alt=''
                        style={{ height: '20px', width: '20px', marginRight: 4 }}
                    />
                    {type}.exe</span>
                    <Button>
                        <span className='close-icon'><ImCross /></span>
                    </Button>
                </WindowHeader>
                <Toolbar style={{ width: '100%' }} className='window-toolbar'>
                    <Button variant='menu' size='sm'>
                        File
                    </Button>
                    <Button variant='menu' size='sm'>
                        Edit
                    </Button>
                    <Button variant='menu' size='sm' disabled>
                        Save
                    </Button>
                </Toolbar>
                <WindowContent className='window-content'>
                    { content }
                </WindowContent>
            </Window>
        </Draggable>
    )
}

export default GenericWindow