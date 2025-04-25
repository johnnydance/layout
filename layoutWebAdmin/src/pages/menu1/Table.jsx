import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Box, Chip, Switch } from "@mui/material";
import {
  DataGridPremium,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid-premium";
import { useTranslation } from "react-i18next";

const Header = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
};

function Table({ rows = [] }) {
  const { t } = useTranslation();

  const columns = [
    {
      field: "id",
      headerName: t("NO."),
      maxWidth: 80,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "column1",
      headerName: t("Tên bài"),
      minWidth: 470,
      flex: 1,
      editable: false,
    },
    {
      field: "column2",
      headerName: t("Phòng ban"),
      minWidth: 200,
      flex: 1,
      editable: false,
    },
    {
      field: "column3",
      headerName: t("Ngày tạo"),
      minWidth: 200,
      flex: 1,
      editable: false,
    },
    {
      field: "column4",
      headerName: t("Thê loại"),
      minWidth: 500,
      flex: 1,
      editable: false,
    },
    {
      field: "column5",
      headerName: t("column5"),
      minWidth: 500,
      flex: 1,
      editable: false,
    },
    {
      field: "column6",
      headerName: t("column6"),
      minWidth: 500,
      flex: 1,
      editable: false,
    },
    {
      field: "column7",
      headerName: t("column7"),
      minWidth: 500,
      flex: 1,
      editable: false,
    },
    {
      field: "Status",
      headerName: t("Status"),
      width: 80,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <Switch checked={row?.IsActive} />
          </Box>
        );
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: t("Action"),
      width: 100,
      // cellClassName: 'actions',
      getActions: () => {
        return [
          <GridActionsCellItem
            key={1}
            icon={<Edit sx={{ color: "rgba(102, 112, 133, 1)" }} />}
            label="Edit"
            color=""
            // onClick={() => {handleDrawers(true, UPDATE, row)}}
          />,
          <GridActionsCellItem
            key={1}
            icon={<Delete sx={{ color: "rgba(102, 112, 133, 1)" }} />}
            label="Edit"
          />,
        ];
      },
    },
  ];

  return (
    <DataGridPremium
      sx={{ height: "60vh" }}
      rows={rows}
      columns={columns}
      disableMultipleColumnsSorting
      // showCellVerticalBorder={true}
      hideFooter
      getRowHeight={() => "auto"}
      initialState={{
        pinnedColumns: { left: [], right: ["Status", "actions"] },
      }}
    />
  );
}

export default Table;
