import React from 'react'
import { DeleteMemberComponent } from './DeleteMemberComponent'

export const DeleteMemberbutton = ({memberRole}) => {
  return (
    <div>
        {memberRole.role !== "ROLE_ADMIN" && <DeleteMemberComponent memberId = { memberRole.memberId }/>}
    </div>
  )
}