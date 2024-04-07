export default function myTest(a = 5) {
  const k = 8;
  if (a > 0) {
    console.log("Statement 1");
    console.log("Statement 2");
  } else {
    console.log("Statement 3");
  }
  console.log("Statement 4");

  return 6;
}

export function myTest2(a = 5) {
  const k = 8;
  if (a > 0) {
    console.log("Statement 1");
    console.log("Statement 2");
  } else {
    console.log("Statement 3");
  }
  console.log("Statement 4");

  return 6;
}
