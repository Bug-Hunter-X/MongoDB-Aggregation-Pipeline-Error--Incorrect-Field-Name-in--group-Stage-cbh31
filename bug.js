```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$fieldName", sum: {$sum: "$anotherField"}}}, //Typo in field name
  {$sort: {sum: -1}},
  {$limit: 10}
])
```