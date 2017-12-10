import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const AddWidgetButton = () => (
  <Link
    to="/widget/new"
    className="pt-button pt-minimal pt-icon-plus"
  >Add Widget</Link>
)

export default AddWidgetButton
