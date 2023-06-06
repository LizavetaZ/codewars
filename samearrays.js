// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
const comp = (a, b) => {
  if (
    a === null ||
    b === null ||
    a.length === 0 ||
    b.length === 0 ||
    a.length !== b.length
  ) {
    return false;
  }

  let status = true;
  let i = 0;
  while (status && i < a.length) {
    status = b.indexOf(Math.pow(a[i],2)) > -1
    i++;
  }

  return status;
}
