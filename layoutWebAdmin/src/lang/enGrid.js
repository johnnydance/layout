export const enGrid = {
  // Root
  noRowsLabel: 'No data available',
  noResultsOverlayLabel: 'No results found.',
  errorOverlayDefaultLabel: 'An error occurred',

  // Density selector toolbar button text
  toolbarDensity: 'Density',
  toolbarDensityLabel: 'Density',
  toolbarDensityCompact: 'Compact',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Comfortable',

  // Columns selector toolbar button text
  toolbarColumns: 'Columns',
  toolbarColumnsLabel: 'Choose columns',

  // Filters toolbar button text
  toolbarFilters: 'Filters',
  toolbarFiltersLabel: 'Show filters',
  toolbarFiltersTooltipHide: 'Hide',
  toolbarFiltersTooltipShow: 'Show',
  toolbarFiltersTooltipActive: (count) =>
    count > 1 ? `${count} active filters` : `${count} active filter`,

  // Export selector toolbar button text
  toolbarExport: 'Export',
  toolbarExportLabel: 'Export',
  toolbarExportCSV: 'Export CSV',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Search',
  columnsPanelTextFieldPlaceholder: 'Column title',
  columnsPanelDragIconLabel: 'Sort',
  columnsPanelShowAllButton: 'Show all',
  columnsPanelHideAllButton: 'Hide all',

  // Filter panel text
  filterPanelAddFilter: 'Add filter',
  filterPanelDeleteIconLabel: 'Delete',
  filterPanelOperators: 'Operators',
  filterPanelOperatorAnd: 'And',
  filterPanelOperatorOr: 'Or',
  filterPanelColumns: 'Columns',
  filterPanelInputLabel: 'Value',
  filterPanelInputPlaceholder: 'Filter value',

  // Filter operators text
  filterOperatorContains: 'Contains',
  filterOperatorEquals: 'Equals',
  filterOperatorStartsWith: 'Starts with',
  filterOperatorEndsWith: 'Ends with',
  filterOperatorIs: 'Is',
  filterOperatorNot: 'Is not',
  filterOperatorAfter: 'After',
  filterOperatorBefore: 'Before',
  filterOperatorIsEmpty: 'Is empty',
  filterOperatorIsNotEmpty: 'Is not empty',

  // Column menu text
  columnMenuLabel: 'Column Menu',
  columnMenuShowColumns: 'Show columns',
  columnMenuFilter: 'Filter',
  columnMenuHideColumn: 'Hide column',
  columnMenuUnsort: 'Remove sorting',
  columnMenuSortAsc: 'Sort ascending',
  columnMenuSortDesc: 'Sort descending',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count > 1 ? `${count} active filters` : `${count} active filter`,
  columnHeaderFiltersLabel: 'Filter',
  columnHeaderSortIconLabel: 'Sort',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count > 1 ? `${count.toLocaleString()} rows selected` : `${count.toLocaleString()} row selected`,

  // Total rows footer text
  footerTotalRows: 'Total:',

  // Total visible rows footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} / ${totalCount.toLocaleString()}`,

  // Actions cell more text
  actionsCellMore: 'More'
}
