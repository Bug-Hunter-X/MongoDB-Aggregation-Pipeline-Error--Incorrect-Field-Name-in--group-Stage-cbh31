# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error in MongoDB aggregation pipelines: using an incorrect field name in the `$group` stage.  The bug results in inaccurate aggregation results.  The solution demonstrates the correct usage of field names within the pipeline.

## Bug Description
The original code contains a typo in the field name used within the `$sum` operator of the `$group` stage. This leads to incorrect calculations and overall inaccurate results from the aggregation query.

## Solution
The solution corrects the typo in the field name, ensuring the aggregation pipeline accurately calculates the desired sum.