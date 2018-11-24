# showgoat-service

## Deployment

Prereqs:

* A Route 53 Hosted Zone for `showgoat.net.`

Create a new Change Set for the prod deploy:

```
$ sls deploy stage --prod --changeset
```