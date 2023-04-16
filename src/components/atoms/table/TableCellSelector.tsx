import React from "react";

import TableCell, { TableCellProps } from "./TableCell";

import { Selector, SelectorProps } from "@/components/molecules";

type PickedFields = "items" | "onChange";
type Spread<T extends React.Key> = Pick<SelectorProps<T>, PickedFields>;
type Nest<T extends React.Key> = Omit<SelectorProps<T>, PickedFields>;

interface Props<T extends React.Key>
  extends Omit<TableCellProps, "children" | "onChange">,
    Spread<T> {
  selectorProps?: Nest<T>;
}

function TableCellSelector<T extends React.Key>({
  items,
  onChange,
  ...props
}: Props<T>) {
  return (
    <TableCell {...props} className="p-0 m-0 h-1">
      <Selector
        className="h-full"
        borderless
        items={items}
        onChange={onChange}
      />
    </TableCell>
  );
}

export default TableCellSelector;
