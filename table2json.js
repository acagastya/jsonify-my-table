class table2json {
  constructor(tableID) {
    this.table = document.getElementById(tableID);
    if (!this.table) {
      this.error = true;
      console.error(`Table of id "${tableID}" not found.`);
      return;
    }
    if (this.table.tagName != "TABLE") {
      this.error = true;
      console.error(`Element of id "${tableID}" is not a table.`);
      return;
    }
    this.headers = [];
    for (let i = 0; i < this.table.rows[0].cells.length; i++)
      this.headers.push(this.table.rows[0].cells[i].innerText);
    if (this.headers.length > new Set(this.headers).size) {
      this.error = true;
      console.error(`Headers repeat.`);
      return;
    }
    this.res = [];
    for (let i = 1; i < this.table.rows.length; i++) {
      let values = [];
      for (let j = 0; j < this.table.rows[i].cells.length; j++)
        values.push(this.table.rows[i].cells[j].innerText);
      let obj = {};
      this.headers.forEach(
        (el, index) => (obj = { ...obj, [el.valueOf()]: values[index] })
      );
      this.res.push(obj);
    }
  }
}
exports.table2json = table2json;
