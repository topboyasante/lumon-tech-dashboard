import * as React from "react";

import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  getFacetedRowModel,
  getFacetedUniqueValues,
  PaginationState,
} from "@tanstack/react-table";

//import { RangeOptions, TableFacetProps } from '@/types';

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

import { DataTableContent } from "./data-table-content";
import { DataTableToolbar } from "./data-table-toolbar";
import { DataTablePagination } from "./data-table-pagination";
import { TableFacetProps } from "@/types";
import { cn, globalTableFilterFn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];

  title?: string;
  inputKey?: string;
  isLoading?: boolean;
  centerText?: boolean;
  bodyClassName?: string;
  tableClassName?: string;
  inputPlaceholder?: string;
  containerClassName?: string;
  showColumnControl?: boolean;
  shouldExport?: boolean;
  mode?: "single" | "range";
  //dateRange?: Date | RangeOptions;
  initialSort?: SortingState;
  facetOptions?: TableFacetProps[];
  handleRefreshTable?: () => void;
  //setDateRange?: (range: RangeOptions | RangeOptions) => void;
  onClickCell?: (row: TData, column: ColumnDef<TData, TValue>) => void;
}

export function DataTable<TData, TValue>({
  data,
  title,
  columns,
  inputKey,
  initialSort,
  facetOptions,
  bodyClassName,
  tableClassName,
  isLoading = false,
  containerClassName,
  showColumnControl = true,
  inputPlaceholder = "Filter anything...",

  onClickCell,
  handleRefreshTable,
}: Readonly<DataTableProps<TData, TValue>>) {
  const ref = React.useRef<HTMLDivElement>(null);

  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = React.useState<SortingState>(initialSort ?? []);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const resetScroll = () => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
      pagination,
      rowSelection,
      columnFilters,
      columnVisibility,
    },

    // debugTable: true,
    //FIXME: handle manual pagination for all the tables
    manualPagination: true,
    enableRowSelection: true,

    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    globalFilterFn: globalTableFilterFn,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-4 px-4 py-3 bg-background rounded-xl border border-neutral-lighter shadow-sm shadow-neutral-lighter",
        containerClassName,
      )}
    >
      <DataTableToolbar
        title={title}
        table={table}
        inputKey={inputKey}
        facetOptions={facetOptions}
        inputPlaceholder={inputPlaceholder}
        showColumnControl={showColumnControl}
        handleRefreshTable={handleRefreshTable}
      />

      <Separator />

      <Table className={cn("max-h-64 overflow-auto", tableClassName)}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className="text-sm leading-[16px] font-medium"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody
          className={cn("max-h-64 overflow-auto mini-scrollbar", bodyClassName)}
        >
          <DataTableContent
            table={table}
            columns={columns}
            isLoading={isLoading}
            onClickCell={onClickCell}
          />
        </TableBody>
      </Table>

      <Separator />
      <div className="w-full overflow-x-auto">
        <DataTablePagination resetScroll={resetScroll} table={table} />
      </div>
    </div>
  );
}
