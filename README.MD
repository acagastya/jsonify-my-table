# jsonify-my-table

Convert a HTML table to JSON. Actually, to an array of JSON objects.

## Usage

Consider a HTML table with `id=myTable`.

```html
<table id="myTable">
  ...
</table>
```

To convert it to an array of JSON objects:

```javascript
const tableData = new jsonifyMyTable('myTable');
tableData.res; // array of JSON objects.
```

`jsonifyMyTable` class accepts one parameter; the table id.

## Data members

In the above example, `tableData` contains following data members:

- **`res`** &mdash; the array containing JSON objects.
- `headers` &mdash; the keys in the objects (also, the table headers).
- `error` &mdash; a flag which indicates if an error was occurred. Set to `false` if no errors occurred, else contains the error message.

```javascript
const tableData = new jsonifyMyTable('id');

if (!tableData.error) {
  // tableData.res...
}
```

## Errors

1. `id` does not exist in DOM.
2. Element of `id` is not a table.
3. There are no rows in `table#id`.
4. Headers repeat.

## Note

Use this for the client-side JavaScript. Though this module is published as a _Node Package Module_, it can not run on server-side JavaScript. This is because it makes use of `document`, which is not available in Node, as is.

To add it in the `<script>` tag, make use of [Unpkg](https://unpkg.com 'UNPKG').

**Example:** `<script src="unpkg.com/jsonify-my-table@latest/jsonify-my-table.min.js"></script>`
