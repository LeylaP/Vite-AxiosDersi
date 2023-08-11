# React + Vite

`npx create-react-app` yerine `npm create vite` kullaniyoruz
`npm start` yerine `npm run dev`

# Axios

Axios ve Fetch en populer iki veri cekme

## Faydalari

- Ozellestirilebilir
- Axios otomatik olarak gelen veriyi JSON formatina ceviriyor
  -Hata ayiklama ozellikleri
  HTTP isteklerini (get, post, put, delete) yapmasi daha kolay

## Kullanim

- npm i axios
- import axios from "axios"

## HTTP istegi yapma

- Get > Veri Alma
  -- axios.get("url")

- Post > veri gonderme
--   axios.post
-   # Fetch Ornegi:

`` fetch("http://localhost:3030/todos", {
    method: "POST", // Istek Turu
    header: {
    "Content-Type": "application/json", // Veri tipi tanimlama
    },
    body: JSON.stringify(newTodo),
    });
``
-    # Axios Ornegi
    ``
        axios.post("http://localhost:3030/todos", newTodo);
    ``



# Json Server kutupanesi

- Sahte bir API olusturmaya yarar
- Bu kutupane sadece kendi bilgisayarimizda calisan localhost API si olusturur
- Olusturdugu API nin temeli bir JSON dosyasidir
- API 'ya yapilan istekler sonucunda `db.json dosyasi degisir`

## Faydalari

-Prototip Olusturma: Gercek API hazir olmama durumunda hizlica kendi API miz uzerinden projemizi hazirlamamiza yariyor
-Kullanimi basit

## Kullanim

- npm i json-server
- proje klasoru icerisinde bir `db.json` dosyasi olustur ve veri ekle
- package.json icerisine scriptler arasina scripti ekle
  -- "server":"json-server --watch db.json --port 3030"
- tanimlanan scripti " npm run server " ile calistir
