import {
  ASSIGN_INTERVAL_ID
} from '../../constants'

export const assignIntervalId = (datasourceId, intervalId) => ({
  type: ASSIGN_INTERVAL_ID,
  datasourceId,
  intervalId
})
