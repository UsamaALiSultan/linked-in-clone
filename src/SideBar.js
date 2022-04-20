import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './SideBar.css'

function SideBar() {


    const user = useSelector(selectUser)

     const recentItem = (topic) => (

        <div className="siderBar__recentItem">


            <span className="sideBar__hash">

                #
            </span>

            <p>{topic}</p>
        </div>
     )

  return (
    <div className="sideBar">


        <div className="sideBar__top">

            <img src="https://i.ebayimg.com/images/g/yQ0AAOSwm29gc8tE/s-l400.jpg" alt="" />
            <Avatar src={user.photoUrl} className="sideBar__avatar" > 
             {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sideBar__stats">
            <div className="sideBar__stat">

                <p>Who viewed you</p>
                <p className="sideBar__statNumber">

                    2,55
                </p>
            </div>

            <div className="sideBar__stat">

<p>views on your posts</p>
<p className="sideBar__statNumber">

    2,554
</p>
</div>


            
        </div>


        <div className="sideBar__bottom">

           <p>Recent</p>
           {recentItem(' Reactjs ')}
           {recentItem(' R1 ')}
           {recentItem(' R2 ')}
           {recentItem(' R3 ')}
             
        </div>
    </div>
  )
}

export default SideBar