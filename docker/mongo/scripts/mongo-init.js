db.createUser({
  user: 'customers',
  pwd: 'bluecore',
  roles: [
    {
      role: 'readWrite',
      db: 'customers',
    },
  ],
});

db.delinquents.insertMany([
    {
        "name": "Noah",
        "value": 1565.63,
        "delinquent_since": "2021-04-22T21:42:32.883Z"
      },
      {
        "name": "Oliver",
        "value": 29959.61,
        "delinquent_since": "2021-04-20T21:42:32.883Z"
      },
      {
        "name": "Liam",
        "value": 155.63,
        "delinquent_since": "2021-03-22T21:42:32.883Z"
      },
      {
        "name": "Benjamin",
        "value": 2995.61,
        "delinquent_since": "2021-02-20T21:42:32.883Z"
      },
      {
        "name": "Luccas",
        "value": 565.63,
        "delinquent_since": "2021-01-22T21:42:32.883Z"
      },
      {
        "name": "Isabella",
        "value": 29959.61,
        "delinquent_since": "2020-04-20T21:42:32.883Z"
      },
      {
        "name": "Emma",
        "value": 1565.3,
        "delinquent_since": "2020-01-22T21:42:32.883Z"
      },
      {
        "name": "Sophia",
        "value": 2999.61,
        "delinquent_since": "2021-02-20T21:42:32.883Z"
      },
      {
        "name": "Mason",
        "value": 156.63,
        "delinquent_since": "2019-01-22T21:42:32.883Z"
      },
      {
        "name": "Evelyn",
        "value": 259.61,
        "delinquent_since": "2011-04-21T21:42:32.883Z"
      }
]);
