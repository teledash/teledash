import React from 'react'

import {
  Button,
  Intent,
  Dialog,
} from '@blueprintjs/core'

class DataManager extends React.Component {
    state = { isOpen: false };

   render() {
        return (
            <div>
                <Button onClick={this.toggleDialog} text="Show dialog" />
                <Dialog
                    iconName="inbox"
                    isOpen={this.state.isOpen}
                    onClose={this.toggleDialog}
                    title="Dialog header"
                >
                    <div className="pt-dialog-body">
                        Some content
                    </div>
                    <div className="pt-dialog-footer">
                        <div className="pt-dialog-footer-actions">
                            <Button text="Secondary" />
                            <Button
                                intent={Intent.PRIMARY}
                                onClick={this.toggleDialog}
                                text="Primary"
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }

   toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });
}

export default DataManager
