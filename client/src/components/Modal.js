import React from 'react'
import {
  Button,
  Dialog,
  Intent,
  Classes
} from '@blueprintjs/core'

const Modal = ({ isOpen, toggleDialog, title, iconName, children }) => (
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
