import React from 'react'
import ContentSidebar from './ContentSidebar'
import "./style.scss";
import OrderActivity from './OrderActivity';

export default function SideContent() {
  return (
    <div className='flex flex-col gap-[2.3rem] w-[350px]'>
        <ContentSidebar/>
        <OrderActivity />
    </div>
  )
}
