input = document.body.innerText
rows = input.split('\n');

oppoChoices = ['A', 'B', 'C'];
meChoices = ['X', 'Y', 'Z'];

choicesToPoints = oppoChoices.reduce((memo, _choice, x) => {
    meChoices.map((meChoice, y) => {
        choice = x;

        if (y == 2) {
            choice = x + 1;
        } else if (y == 0) {
            choice = x - 1;
        }

        if (choice < 0) {
            choice = 2;
        } else if (choice > 2) {
            choice = 0
        }
        

        memo[`${_choice} ${meChoice}`] = (y * 3) + choice + 1;
    });
    
    return memo;
}, {});

score = rows.reduce((memo, row) => {
    if (!row.trim()) return memo;
    return memo + choicesToPoints[row];
}, 0);
