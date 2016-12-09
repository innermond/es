import React from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'

const favoritesIcon = <FontIcon className='material-icons'>Favorites</FontIcon>
const deprecatedIcon = <FontIcon className='material-icons'>Deprecated</FontIcon>
const nearBy = <IconLocationOn />

const Bottom = () => {
    return (
    <Paper >
        <BottomNavigation>
            <BottomNavigationItem label='Location' icon={nearBy} />
            <BottomNavigationItem label='Favorites' icon={favoritesIcon} />
            <BottomNavigationItem label='Deprecated' icon={deprecatedIcon} />
        </BottomNavigation>
    </Paper>
)
}

export default Bottom
