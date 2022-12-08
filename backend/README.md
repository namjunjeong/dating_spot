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
|    POST     | /auth/guest  | 게스트 로그인 |
|    POST     |    /data     | 카카오맵 정보 |
|    POST     |    /spot     |   스팟 추가   |
|     GET     |    /spot     |   스팟 조회   |

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

#### 🧡 게스트 로그인

##### 📌 Server Response

```json
{
  "status": 200,
  "message": "로그인 성공"
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
        "picture_url": "image.jpg",
        "id": 123,
        "place_url": "https://place.map.kakao.com/23634722",
        "rate": 4.7
      },
      {
        "place_name": "카페공명",
        "x": 126.926352615326,
        "y": 37.5598708965573,
        "picture_url": "image.jpg",
        "id": 124,
        "place_url": "https://place.map.kakao.com/1797970569",
        "rate": 3.8
      }
    ]
  }
}
```

---

#### 🧡 스팟 추가

##### 📌 Request Body

```json
{
  "x": 126.923778562273,
  "y": 37.5568707448873,
  "cafe": [
    {
      "place_name": "1984",
      "x": 126.922881704192,
      "y": 37.5573639089622,
      "picture_url": "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F34E424DE54454CCB8C5623E96B979B9F",
      "place_url": "https://place.map.kakao.com/23634722",
      "rate": 4.3
    },
    {
      "place_name": "카페공명",
      "x": 126.926352615326,
      "y": 37.5598708965573,
      "picture_url": "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2Fsearchregister_1919726515",
      "place_url": "https://place.map.kakao.com/1797970569",
      "rate": 4.3
    }
  ],
  "restaurant": [
    {
      "place_name": "하이디라오 홍대지점",
      "x": "126.924760602353",
      "y": "37.5571921297692",
      "picture_url": "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2FCC5A124B50294DFCB690BD5E9EC7F28E",
      "place_url": "http://place.map.kakao.com/1622865435",
      "rate": 4.3
    },
    {
      "place_name": "중화복춘",
      "x": "126.924296449184",
      "y": "37.5595596531777",
      "picture_url": "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA19E0A5AF48C42F681B4C5CC56E70F42",
      "place_url": "https://place.map.kakao.com/965893653",
      "rate": 4.3
    }
  ]
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
        "picture_url": "image.jpg",
        "place_url": "https://place.map.kakao.com/23634722",
        "id": 123,
        "rate": 4.7
      },
      {
        "place_name": "카페공명",
        "x": 126.926352615326,
        "y": 37.5598708965573,
        "picture_url": "image.jpg",
        "place_url": "https://place.map.kakao.com/1797970569",
        "id": 124,
        "rate": 3.8
      }
    ]
  }
}
```

---

#### 🧡 스팟 조회

##### 📌 Server Response

```json
[
  {
    "_id": "6391de41e4b8c980a0724c59",
    "email": "guest@example.com",
    "x": 126.923778562273,
    "y": 37.5568707448873,
    "cafe": [
      {
        "place_name": "1984",
        "x": 126.922881704192,
        "y": 37.5573639089622,
        "picture_url": "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F34E424DE54454CCB8C5623E96B979B9F",
        "place_url": "https://place.map.kakao.com/23634722",
        "rate": 4.3,
        "_id": "6391de41e4b8c980a0724c5a"
      },
      {
        "place_name": "카페공명",
        "x": 126.926352615326,
        "y": 37.5598708965573,
        "picture_url": "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2Fsearchregister_1919726515",
        "place_url": "https://place.map.kakao.com/1797970569",
        "rate": 4.3,
        "_id": "6391de41e4b8c980a0724c5b"
      }
    ],
    "restaurant": [
      {
        "place_name": "하이디라오 홍대지점",
        "x": 126.924760602353,
        "y": 37.5571921297692,
        "picture_url": "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2FCC5A124B50294DFCB690BD5E9EC7F28E",
        "place_url": "http://place.map.kakao.com/1622865435",
        "rate": 4.3,
        "_id": "6391de41e4b8c980a0724c5c"
      },
      {
        "place_name": "중화복춘",
        "x": 126.924296449184,
        "y": 37.5595596531777,
        "picture_url": "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA19E0A5AF48C42F681B4C5CC56E70F42",
        "place_url": "https://place.map.kakao.com/965893653",
        "rate": 4.3,
        "_id": "6391de41e4b8c980a0724c5d"
      }
    ],
    "stroll": [],
    "gallery": [],
    "themeCafe": [],
    "shopping": [],
    "hopping": [],
    "drink": [],
    "created_at": "2022-12-08T12:53:21.412Z",
    "__v": 0
  }
]
```

---
