import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function ValueDefinition() {
  return (
    <TableRow>
      <TableCell noWrap>
        2.2. Definição da solução e proposta de valor
      </TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a solução e a proposta de valor foram definidas e
          validadas e se respondem ao problema identificado junto aos potenciais
          clientes.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Quais os benefícios oferecidos pela sua solução (proposta de valor)?
        </Text>
      </TableCell>
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
    </TableRow>
  );
}

export default ValueDefinition;
