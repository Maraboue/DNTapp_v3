import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        url: 'DNT',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Tokenomics',
        url: 'tokenomicsmobile',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        url: 'aboutmobile',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        url: 'teammobile',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Road Map',
        url: 'roadmapmobile',
        icon: <FaIcons.FaMapMarkedAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Community',
        url: 'communitymobile',
        icon: <FaIcons.FaHandsHelping />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        url: 'footermobile',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
];