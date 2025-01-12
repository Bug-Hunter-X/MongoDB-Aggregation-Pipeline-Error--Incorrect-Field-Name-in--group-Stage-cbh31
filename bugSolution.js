```javascript
// Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$fieldName", sum: {$sum: "$anotherField"}}}, //Corrected field name
  {$sort: {sum: -1}},
  {$limit: 10}
])
```