export default rows => rows.map((row, i) => Object.assign({}, row, { id: i }))
