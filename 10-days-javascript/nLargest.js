// numbers:including number  (Integer: 1 <= number )
// n (Integer: 1<=n )

function nLargest(numbers, n) {
  // First Array
  let haveMax = numbers
  let nMax = 0
  for (let i = 1; i <= n; i++) {
    // Find MaxNumber
    let max = 0
    for (let i = 0; i < haveMax.length; i++) {
      if (haveMax[i] > max) {
        max = haveMax[i]
      }
    }
    // cut MaxNumber
    for (let i = haveMax.length - 1; i >= 0; i--) {
      if (haveMax[i] == max) {
        haveMax.splice(i, 1)
      }
    }
    nMax = max
  }
  return nMax
}
