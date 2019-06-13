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
const myTableObj = new jsonifyMyTable("myTable");
myTableObj.res; // array of JSON objects.
```

`jsonifyMyTable` class accepts one parameter; the table id.

## Data members

In the above example, `myTableObj` contains following data members:

- **`res`** &mdash; the array containing JSON objects.
- `headers` &mdash; the keys in the objects (also, the table headers).
- <small>`table`</small> &mdash; this one is the selection of table, in this case `table#myTable`.

- [OPTIONAL] `error` &mdash; a flag which indicates if an error was occurred.

## Errors

1. If the `id` was not found in the `document`.
2. If the specified `id` is not of a table.
3. If the headers repeat.

## Note

Use this for the client-side JavaScript. Though this module is published on `npm`, it can not run on server-side JavaScript. This is because it makes use of `document`, which is not available in node, as is.

To add it in the `<script>` tag, make use of [Unpkg](https://unpkg.com "UNPKG").

**Example:** `<script src="unpkg.com/jsonify-my-table@latest/jsonify-my-table.min.js"></script>`
