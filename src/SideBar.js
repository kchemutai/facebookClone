import { Chat, ExpandMoreOutlined, People, Storefront, VideoLibrary } from '@material-ui/icons'
import { EmojiFlags } from '@material-ui/icons'
import { logDOM } from '@testing-library/dom'
import React from 'react'
import './SideBar.css'
import SideBarRow from './SideBarRow'
import { useStateValue } from './StateProvider'


function SideBar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SideBarRow title={user.displayName} src={user.photoURL} />
            <SideBarRow title="Pages" Icon={EmojiFlags} />
            <SideBarRow title="Friends" Icon={People} />
            <SideBarRow title="Messenger" Icon={Chat} />
            <SideBarRow title="Market Place" Icon={Storefront} />
            <SideBarRow title="Videos" Icon={VideoLibrary} />
            <SideBarRow title="Market Place" Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default SideBar
