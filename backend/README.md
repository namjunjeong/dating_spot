# Backend-Server

⭐️ OpenSource Project ⭐️

### 🚨 Local Server URL (Server Host) 🚨

```text
http://127.0.0.1:3000
```

### 🌸 Overview

| HTTP METHOD |  End Point   |  Description  |
| :---------: | :----------: | :-----------: |
|    POST     |    /user     |   회원가입    |
|     GET     |    /user     |   유저 조희   |
|   DELETE    |    /user     |   유저 탈퇴   |
|    POST     | /auth/login  |    로그인     |
|     GET     | /auth/logout |   로그아웃    |
|    POST     |    /data     | 카카오맵 정보 |

---

#### 🧡 회원가입

##### 📌 Request Body

```json
{
  "id": "guest",
  "password": "1234",
  "email": "guest@example.com",
  "username": "elon"
}
```

##### 📌 Server Response

```json
{
  "status": 200,
  "message": "회원가입 성공"
}
```

---

#### 🧡 유저 조회

##### 📌 Server Response

```json
{
  "status": 200,
  "data": {
    "_id": "63904cc6ace7c48b96001fb5",
    "id": "guest",
    "password": "abcdefghijklmn",
    "email": "guest@example.com",
    "username": "elon",
    "created_at": "2022-12-07T08:20:22.441Z",
    "__v": 0
  }
}
```

---

#### 🧡 유저 탈퇴

##### 📌 Server Response

```json
{
  "status": 200,
  "message": "탈퇴 성공"
}
```

---

#### 🧡 로그인

##### 📌 Request Body

```json
{
  "id": "guest",
  "password": "1234"
}
```

##### 📌 Server Response

```json
{
  "status": 200,
  "message": "로그인 성공"
}
```

---

#### 🧡 로그아웃

##### 📌 Server Response

```json
{
  "status": 200,
  "message": "로그아웃"
}
```

---

#### 🧡 카카오맵 정보

##### 📌 Request Body

```json
{
  "x": 126.923778562273,
  "y": 37.5568707448873,
  "catagory": "cafe"
}
```

##### 📌 Server Response

```json
{
  "status": 200,
  "data": {
    "x": 126.923778562273,
    "y": 37.5568707448873,
    "list": [
      {
        "place_name": "1984",
        "x": 126.922881704192,
        "y": 37.5573639089622,
        "picture": "image.jpg",
        "place_url": "https://place.map.kakao.com/23634722",
        "id": 123,
        "rate": 4.7
      },
      {
        "place_name": "카페공명",
        "x": 126.926352615326,
        "y": 37.5598708965573,
        "picture": "image.jpg",
        "place_url": "https://place.map.kakao.com/1797970569",
        "id": 123,
        "rate": 3.8
      }
    ]
  }
}
```

---
