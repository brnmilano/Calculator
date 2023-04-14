import Box from '@mui/material/Box';
import styles from "./styles.module.scss";
import { moreOperators, numbers, operators } from '../../screens/Calculator/models';
import { Button } from '../../components/Button';

export function Calculator() {

  return (
    <Box className={styles.container}>
      <Box className={styles.calculatorItems}>
        <Box>
          <Box className={styles.moreOperatos}>
            {moreOperators.map(moreOperator => {
              return (
                <Box>
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
                  <Button size='small'>
                    {number.label}
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
                <Button size='small'>
                  {operator.label}
                </Button>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}