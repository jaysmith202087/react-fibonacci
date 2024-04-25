export   const calculateFibonacciSqn = (currentNumber: number) => {
    let prevNumber = 0;
    let nextNumber = 1;

    while(true) {
        let tempNumber = nextNumber;
        nextNumber += prevNumber;
        prevNumber = tempNumber;

        if(nextNumber > currentNumber) {
            return nextNumber;
        }
    }
  }