function jsonifyMyTable(id = undefined) {
  this.error = false;
  const table = document.getElementById(id);
  // 1. Does id exist in DOM?
  if (!table) {
    this.error = `${id} does not exist in DOM.`;
    return;
  }
  // 2. Does id correspond to <table>?
  if (table.tagName.toLowerCase() != 'table') {
    this.error = `Element of ${id} is not a table.`;
    return;
  }
  // 3. Does table have rows?
  if ([...table.rows].length < 1) {
    this.error = `There are no rows in table#${id}.`;
    return;
  }
  // 4. Extract header.
  this.headers = [...table.rows[0].cells].map(cell => cell.innerText);
  // 5. Are headers unique?
  if (this.headers.length > new Set(this.headers).size) {
    this.error = `Headers repeat.`;
    return;
  }
  // 6. Prepare the result.
  this.res = [...table.rows].map((row, index) => {
    if (index == 0) return; // This is the header.
    const cells = [...row.cells].map(cell => cell.innerText);
    return this.headers.reduce(
      (acc, cur, index) => (acc = { ...acc, [cur.valueOf()]: cells[index] }),
      Object.assign({})
    );
  });
  this.res.shift(); // Remove header.
}

if (!window) module.exports = jsonifyMyTable;
