interface ConditionProps<T> {
  else?: React.ReactNode;
  then: React.ReactNode;
  value: T;
}

/*
  Отличие Condition от Activity React 19 в том, что Condition размонтирует по условию, а Activity сохраняет state (пауза, а не уничтожение)
*/
/*
TODO: хреновый Condition, доработать потом, беды с типизацией then как минимум, добавить elseif
*/
export const Condition = <T,>({ value, then, else: otherwise }: ConditionProps<T>) =>
  value ? then : (otherwise ?? null);
