## API Documentation

### Apply for a loan

Create new loan record with user information

```
POST /api/loan
```

#### Body

| Name         | Type   | Description        |
| ------------ | ------ | ------------------ |
| name         | string |                    |
| nationalId   | string |                    |
| phoneNumber  | string | +849xxxxxxxx       |
| gender       | number | 0: female, 1: male |
| amount       | number | 10000000           |
| interestRate | number | 7.06               |
| duration     | number | duration in month  |

#### Example request

```
curl --location --request POST 'http://localhost:3000/api/loan' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Nguyễn Thị Ngọc Trinh",
    "nationalId": "225925482",
    "phoneNumber": "+84905761112",
    "gender": 0,
    "amount": 10000000,
    "interestRate": 7.06,
    "duration": 12
}'
```

---

### Get loan information

Get status, information of a created loan

```
GET /api/loan/[id]
```

#### Body

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | string | UUID v4     |

#### Example request

```
curl --location --request GET 'http://localhost:3000/api/loan/659b8749-5100-43ad-bf53-5ca263d2d357'
```

---

### Approve/Reject a loan

Update the loan status to approved/rejected

```
POST /api/loan/[id]/review
```

#### Body

| Name   | Type   | Description       |
| ------ | ------ | ----------------- |
| id     | string | UUID v4           |
| status | string | approved/rejected |

#### Example request

```
curl --location --request POST 'http://localhost:3000/api/loan/659b8749-5100-43ad-bf53-5ca263d2d357/review' \
--header 'Content-Type: application/json' \
--data-raw '{
    "status": "approved"
}'
```

---

### Verify loan information

Check whether the loan information is tampered or not

```
POST /api/loan/[id]/verify
```

#### Body

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | string | UUID v4     |

#### Example request

```
curl --location --request POST 'http://localhost:3000/api/loan/659b8749-5100-43ad-bf53-5ca263d2d357/verify'
```
