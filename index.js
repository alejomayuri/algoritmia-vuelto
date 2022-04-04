const cola = [25, 25, 50, 50, 25, 100, 25, 50, 25, 100]

const tickets = (arr) => {
    let dict = {}
    for (let bill of arr) {
        if (bill === 25) {
            if (dict[25] === undefined) {
                dict[25] = 1
            } else {
                dict[25] += 1
            }
        }
        if (bill === 50) {
            if (dict[25] === undefined) {
                dict[25] = 0
            }
            if (dict[25] === 0) {
                return 'NO'
            } else {
                dict[25] -= 1
                if (dict[50] === undefined) {
                    dict[50] = 1
                } else {
                    dict[50] += 1
                }
            }
        }
        if (bill === 100) {
            if (dict[50] === undefined) {
                dict[50] = 0
            }
            if (dict[50] === 0) {
                if (dict[25] === undefined) {
                    dict[25] = 0
                }
                if (dict[25] < 3) {
                    return 'NO'
                } else {
                    dict[25] -= 3
                }
            } else {
                if (dict[25] === 0) {
                    return 'NO'
                } else {
                    dict[50] -= 1
                    dict[25] -= 1
                }
            }
        }
    }
    return 'SI'
}

console.log(tickets(cola))