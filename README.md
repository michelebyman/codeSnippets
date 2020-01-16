# studentsBackend
----
* *Assignment in Api:er mot backend EVXFEH 18* 


 Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken **metod**, **path**, **URI**, **response code** och **body** som skickas in och svarar. Om du har svårt att bestämma dig för en url, ta ex. (http://www.smp.se/kultur-noje/) ?
 
 ```
- metod = GET 
- path =  /kultur-noje
- URI = (http://www.smp.se/kultur-noje/) 
- body = HTML
- Vi får även tillbka flera headers
```
 **Beskriv HTTP-protokollets vanligaste metoder och vad de gör?**

```
| **GET** – skickar den utpekade filen till klienten. 

| **POST** – skapar ett nytt objekt med den utvalda datan som skickas in om det matchar schemat, om det finns något. 

| **PUT** – ändrar hela objektet till det som skickas med, här måste du skicka med alla värden i objektet. 

| **PATCH** – uppdaterar objecktet och dess innehåll till det som skickas med, här kan du uppdatera enstaka värden. 

| **DELETE** – Raderar den utpekade datan. 
```

 **"http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas?**

```
- URI = scheme://authority/path?query
- authority = host:port i detta fall 
- path defineras med /  = users
- query defineras efter ? =  username=something
```

**På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl?**

```
Exampel: 
curl -X GET "localhost:3000/students?name=TheNameYouSearchFor" -H "Content-Type: application/json; charset=utf-8" | jq

- header = -H "Content-Type: application/json; charset=utf-8" 
- query = ?name=TheNameYouSearchFor" 


Exampel: 
curl -X GET "localhost:3000/students/5cece29f0cef6b4c8e00dbf5" | jq
- pathparameter =  /students/hereComesThePathParameterWhichIsThe_IdTHisTime
```



----

* **All you need to set up this on your computer should be below**
----

* **Start by cloning or downloading the repository**
```
When that is done navigate to the folder and Paste this in your terminal: 
npm install 

This will install all the dependencies you need for this project and give you the latest updates. 
```
----

* **URL**
```
localhost:3000
```


* **CURL**
 ```
we use curl in our terminal to be able to send requests. 
Exampel: curl -X GET "localhost:3000/students"  

Exampel: 
curl --help

This will get information about different options you can use with curl
 ```


  * **Brew for mac**
 ```
"So, Homebrew is a package manager for OS X that allows a user to easily install software from the larger body of UNIX and open source software on the Mac" 
source:
https://www.quora.com/What-is-Homebrew-for-OS-X


Paste that in a macOS Terminal: 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
 ```

 * **Chocolatey for Windows**
 ```
The package manager for Windows
Chocolatey - Software Management Automation

Install it here:
https://chocolatey.org/
 ```


 * **JQ**
 ```
 We use jq in our request to make it more readable. 
 Install jq by typing this in your terminal: brew install jq
 Now we can do requests that looks nicer
 Exampel: curl -X GET "localhost:3000/users"  | jq
 ```
 
 * **Methods:**

  `GET` | `POST` | `DELETE` | `PUT` | 


*  **URL Params**
```
   /students/{userId} 
```

 *  **URL Query**
 ```
  /students?thisIsYourQuery

Exampel: 
curl -X GET "localhost:3000/students?name=TheNameYouSearchFor" -H "Content-Type: application/json; charset=utf-8" | jq
```

 **GET** -students
```
Example request: 

curl localhost:3000/students | jq

Example response: 

  {
    "student": {
      "address": {
        "street": "My street",
        "zipCode": "my zipCe",
        "city": "My city"
      },
      "email": "michelebyman@gmail.com",
      "name": "Michele Byman"
    },
    "_id": "5cec2ce893a24d47fb3d37c7",
    "__v": 0
  },

  
Example request:  - Singel student by _id


Exampel: - Singel Student by query
curl -X GET  "localhost:3000/students/?name=Michele+Byman"  | jq

response:

{
  "student": {
    "address": {
      "street": "My street",
      "zipCode": "my zipCe",
      "city": "My city"
    },
    "email": "michelebyman@gmail.com",
    "name": "Michele Byman"
  },
  "_id": "5cece2990cef6b4c8e00dbf4",
  "__v": 0
}


```
**POST** -student
```
Example request: 

curl -X POST "localhost:3000/students" -H "accept: application/json" -H "Content-Type: application/json" -d '{
    "student": {
        "email": "michelebyman@gmail.com",
        "name": "Michele Byman",
        "address": {
            "street": "My street",
            "zipCode": "my zipCe",
            "city": "My city"
        }
    }
}' | jq

Example response: 

{
  "student": {
    "address": {
      "street": "My street",
      "zipCode": "my zipCe",
      "city": "My city"
    },
    "email": "michelebyman@gmail.com",
    "name": "Michele Byman"
  },
  "_id": "5cec2de693a24d47fb3d37c9",
  "__v": 0
}

```

**PUT** -student

```
Exampel request: 

curl -X PUT "localhost:3000/students/5cec4f0efaeb324a81e1928a" -H "accept: application/json" -H "Content-Type: application/json" -d '{
    "student": {
        "email": "k@gmail.com",
        "name": "a",
        "address": {
            "street": "street",
            "zipCode": "zipCode",
            "city": "City"
        }
    }
}' | jq

Example response: 

{
    "student": {
      "address": {
        "street": "street",
        "zipCode": "zipCode",
        "city": "City"
      },
      "email": "k@gmail.com",
      "name": "a"
    },
    "_id": "5cec355e9c0ef848af7d3777",
    "__v": 0
  }


```
**DELETE** -student

```
Exampel request: 

curl -X DELETE "localhost:3000/students/5cece983469fbe4dddcde879" | jq

Example response: 

{
  "student": {
    "address": {
      "street": "My street",
      "zipCode": "my zipCe",
      "city": "My city"
    },
    "email": "michelebyman@gmail.com",
    "name": "Kalle Anka"
  },
  "_id": "5cece983469fbe4dddcde879",
  "__v": 0
}

```


> * **Feedback**                                      
Det har varit  bra takt i kursen, matrialet och undervisningen har varit bra med tydliga exempel,  det viktiga tror jag är att när vi får så mycket exempel att följa steg för steg,  så behövs frågor eller mindre test för eleverna -(detta eftersom folk gärna inte ställer frågor).  Strukturen hade kunnat var lite annurlunda. 

