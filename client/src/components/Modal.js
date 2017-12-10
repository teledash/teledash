import React from 'react'
import {
  Button,
  Dialog,
  Intent,
  Classes
} from '@blueprintjs/core'

const Modal = ({ isOpen, toggleDialog, children }) => (
  <div>
    <Dialog
      className={`${Classes.DARK}`}
      iconName="inbox"
      isOpen
      onClose={toggleDialog}
      title="Dialog header"
    >
      <div className={`${Classes.DIALOG_BODY} ${Classes.DARK}`}>
        { children }
      </div>
      <div className={`${Classes.DIALOG_FOOTER} ${Classes.DARK}`}>
        <div className={`${Classes.DIALOG_FOOTER_ACTIONS} ${Classes.DARK}`}>
          <Button text="Secondary" />
          <Button
            intent={Intent.PRIMARY}
            onClick={toggleDialog}
            text="Primary"
          />
        </div>
      </div>
    </Dialog>
  </div>
)

export default Modal
