
const computerTurn = () => {
    const vals = ['rock','paper','scissors'];
    const tempIndex = Math.floor(Math.random()*3)
    const result = vals[tempIndex];
  return result;
}

export default computerTurn