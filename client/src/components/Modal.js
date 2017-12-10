import React from 'react'
import {
  Dialog,
  Classes
} from '@blueprintjs/core'

const Modal = ({ toggleDialog, title, iconName, children }) => (
  <div>
    <Dialog
      className={`${Classes.DARK}`}
      iconName={iconName}
      isOpen
      onClose={toggleDialog}
      title={title}
    >
      {children}
    </Dialog>
  </div>
)

export default Modal
