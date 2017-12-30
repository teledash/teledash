export function mapValuesToProps(widgets, widgetId) {
  // Widget is in edit mode
  if (widgetId && widgets.length) {
    // coerce widgetId to string and keep strictly equal sign!
    const widget = widgets.find(w => +widgetId === w.id)
    const { name, type, extraFields } = widget
    return { name, type, ...extraFields }
  }

  // This is a new widget
  return { name: '', type: '' }
}
