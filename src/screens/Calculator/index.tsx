import Box from '@mui/material/Box';
import styles from './styles.module.scss';
import { Button } from '../../components/Button';
import { numbers, operators } from '../../screens/Calculator/models';
import { useState } from 'react';

export function Calculator() {
  const [number, setNumber] = useState<string>("") // números da calculadora
  const [oldNumber, setOldNumber] = useState<string>("") // salva o primeiro número clicado
  const [operator, setOperator] = useState<string>("") // operadores da calculadora ( +, -, /, *)

  const handleClickNumberCalculator = (newNumber: string) => {
    if (number === "0") {
      setNumber(newNumber)
    } else {
      setNumber(number + newNumber)
    }
  }

  const handleClickOperator = (newOperator: string) => {
    let result = 0

    if (newOperator === "=") {

      switch (operator) {
        case "+":
          result = Number(oldNumber) + Number(number);
          break

        case "-":
          result = Number(oldNumber) - Number(number);
          break

        case "x":
          result = Number(oldNumber) * Number(number)
          break

        case "/":
          result = Number(oldNumber) / Number(number)
          break
      }

      setNumber(String(result))
      return
    }

    if (newOperator === "%") {
      result = Number(number) / 100
      console.log({ result });

      setNumber(String(result))
      return
    }

    if (newOperator === "-/+") {
      setNumber(String(Number(number) * -1))
      return
    }

    handleClearCalculator()
    setOldNumber(number)
    setOperator(newOperator);
  }

  const handleClearCalculator = () => {
    setNumber("")
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.calculator}>
        <Box className={styles.valuesWrapper}>
          {number}
        </Box>

        <Box className={styles.calculatorItems}>
          <Box>
            <Box className={styles.moreOperatos}>
              <Button onClick={() => handleClearCalculator()} size='small'>
                AC
              </Button>

              <Button onClick={() => handleClickOperator("-/+")} size='small'>
                -/+
              </Button>

              <Button onClick={() => handleClickOperator("%")} size='small'>
                %
              </Button>
            </Box>

            <Box className={styles.numbers}>
              {numbers.map(number => {
                return (
                  <Box className={styles.orderNumber}>
                    <Button onClick={() => handleClickNumberCalculator(number.value)} size={number.value === "0" ? 'large' : 'small'}>
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
                  <Button onClick={() => handleClickOperator(operator.value)} size='small'>
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