export const isColummOfFour = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfFour: number
) => {
    for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
        const columnOfFour: number[] = [
            i,
            i + boardSize,
            i + boardSize * 2,
            i + boardSize * 3
        ];
        
        const decidedColor: string = newBoard[i];
        const isBlank: boolean = newBoard[i] === "";
        // console.log("col of 4 is ",columnOfFour,"decided color is ",decidedColor);
        if (columnOfFour.every((candy: number) => newBoard[candy] === decidedColor && !isBlank)) {
            console.log("column of 4 is ",columnOfFour);
            columnOfFour.forEach((candy: number) => newBoard[candy] = "");
            return true;
        }
    }
}


export const isColummOfThree = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfThree: number
) => {
    for (let i: number = 0; i <= formulaForColumnOfThree; i++) {
        const columnOfFour: number[] = [
            i,
            i + boardSize,
            i + boardSize * 2, 
        ];
        
        const decidedColor: string = newBoard[i];
        const isBlank: boolean = newBoard[i] === "";
        // console.log("col of 4 is ",columnOfFour,"decided color is ",decidedColor);
        if (columnOfFour.every((candy: number) => newBoard[candy] === decidedColor && !isBlank)) {
            console.log("column of 4 is ",columnOfFour);
            columnOfFour.forEach((candy: number) => newBoard[candy] = "");
            return true;
        }
    }
}

