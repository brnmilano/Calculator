import Box from '@mui/material/Box';
import styles from './styles.module.scss';
import { Button } from '../../components/Button';
import { moreOperators, numbers, operators } from '../../screens/Calculator/models';
import { useState } from 'react';

export function Calculator() {
  const [number, setNumber] = useState<string[]>([])

  const [operator, setOperator] = useState<string[]>([])

  const handleClickNumberCalculator = (numero: string, operador: string) => {
    setNumber([...number, numero])

    setOperator([...operator, operador])

    if (operador === "=") {
      const teste = numero + operador
      console.log(teste);
    }
  }

  return (
    <Box className={styles.container}>
      <Box sx={{ backgroundColor: "#303644" }}>
        <Box className={styles.valuesWrapper}>
          {number}
        </Box>

        <Box className={styles.calculatorItems}>
          <Box>
            <Box className={styles.moreOperatos}>
              {moreOperators.map((moreOperator, index) => {
                return (
                  <Box key={index}>
                    <Button size='small'>
                      {moreOperator.label}
                    </Button>
                  </Box>
                )
              })}
            </Box>

            <Box className={styles.numbers}>
              {numbers.map(number => {
                return (
                  <Box className={styles.orderNumber}>
                    <Button onClick={() => handleClickNumberCalculator(number.value, number.value)} size='small'>
                      {number.value}
                    </Button>
                  </Box>
                )
              })}
            </Box>
          </Box>

          <Box className={styles.operators}>
            {operators.map(operator => {
              return (
                <Box>
                  <Button onClick={() => handleClickNumberCalculator(operator.value, operator.value)} size='small'>
                    {operator.value}
                  </Button>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}