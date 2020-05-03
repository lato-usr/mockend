# Usage

Command line

```
mockend [port]
```

Module

```
const server = require("mockend");

server.listen(4000);
```

```
curl localhost:4000/test.txt
404

curl -X POST localhost:4000/test.txt
201

curl localhost:4000/test.txt
200
```

# License

MIT
