import { createPlugin } from '@fullcalendar/common'
import { DayTableView } from './DayTableView'
import { TableDateProfileGenerator } from './TableDateProfileGenerator'
import './main.css'

export { DayTable } from './DayTable'
export { DayTableSlicer } from './DayTableSlicer'
export { Table } from './Table'
export { TableSeg } from './TableSeg'
export { TableView } from './TableView'
export { buildDayTableModel } from './DayTableView'
export { DayTableView as DayGridView } // export as old name!

export default createPlugin({
  initialView: 'yearView',
  views: {

    yearGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator,
    },

    yearView: {
      type: 'yearGrid',
      duration: { years: 1 },
    },

  },
})
