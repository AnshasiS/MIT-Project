
# How to start the app
* Project Name" Navigation-MIT-project
* Clone the following Mygit link: https://mygit.th-deg.de/sa30280/navigation-mit-project.git
* Download MongoDB compass, start the program and use the following link to connect to my database; mongodb+srv://Anshasi:7Km8p96ZY8bItDsD@cluster0.gpwcr.mongodb.net/test
* start Visual Studio code and run the following commands in separate terminals
  * "ng serve" to compile the front end side
  * "npm run startserver" to compile the backend side
  * "npm run compodoc" to run compodoc in the background, to read the typescript documentation on webbrowser.
  * start the localHost:4200 ( web browser) and use below credential to login to the website;
    * Username : saeedhani
    * email: saeedhani@hotmail.com
    * password: 12345678!Qw
    * or simply sign up and login wih any credentials

# Development tools

* Visual Studio Code (VSC) as an IDE
* Mygit as a version control system

# Technologies used

* Angular material 
* Flex-layout
* Ngx-translate 
* Ngx-translate-cache
* CORS anywhere 
* Body parser
* Express
* JSON web Token (JWT)
* Leaflet
* Leaflet routing machine
* Mongoose
* Mongoose unique validator 
* RXJS
* MongoDB ( cloud solution: MongoDBCompass)
* SASS for Mixins
* Compodoc for typescript code documentation
* Mygit as a remote repository 

# Prerequists NPM install codes
* `npm install --save angular-leaflet`
* `npm install --save leaflet-routing-machine`
* `npm install @angular/flex-layout`
* `npm install express`
* `npm install cors`
* `npm install ngx-translate-cache --save`
* `npm install @ngx-translate/core --save`
* `npm install body-parser`
* `ng add @angular/material`
* `npm install jsonwebtoken`
* `npm install mongoose`
* `npm install --save mongoose-unique-validator`
* `npm install rxjs`


# Personas
  
  ![alt text](../assets/persona1.jpg)

  Sami: Sami is 20 years old freshman at the university of deggendorf, he studies Informatik Bachelors of science, he is an introvert, an has no social life, he likes to play video games, once he is done with his homeworks and lectures, he chose Informatik among all course of studies, because he knew that not a great deal interaction with people is required, due to his humble interaction with people, it affected his memroy and he has difficulty remembering the way to certain places.
  Goals: He attends many lectures through out the semester, and because of his weak memory, he needs directions to the lecture room, he is going to attend next.

![alt text](../assets/persona2.jpg)

Maya: Maya is 23 year old student, who studies business administration at the university of deggendorf, she is a social person and loves attending parties, social events and getting to know new people, she chose to study business administartion because she knew she will deal with different departements once she landed a job, which will keep her enthusiasm at its peak as she she doesn't like monotony at work and the fact that she will deal only with people within her departement.
Goals: she wants to check the events that is going to happen within the current semester, such as intercultural events, christmas parties and get together events.

![alt text](../assets/persona3.jpg)

kartal: Kartal is 25 year old senior student who studies Mechatronics engineering, he is a technology enthusiast, creative and loves to extend his knowledge in different fields other than the field he is currently studying at TH-deggendorf, normally he love to learn by Hands-on experience and involves himself in lots of project work.  
Goal: kartal wants to check the lecture plans of subjects offered in other faculties, and he wants to check free rooms so that he can study with hi buddies in campus, and work on projects together.   


# Stakeholders

| StakeHolders   |      ID  | 
|----------|:-------------:|
| User/Customer |  1 | 
| Testers | 2 |
| Project Leader | 3 |
| Management | 4 |
| Database maintainer | 5 |
| Frontend developers | 6 |
| Backend developers | 7 |
| Purchaser | 8 |

# Requists/ Requirements

| Requist ID   |      Requist  |      Requirement ID  |   Requirement  |
|----------|:-------------:|:-------------:|:-------------:|
| req1   |  a user wants to sign up | rt1 | <ul align="left"><li >the system must allow the user to register</li><li> the user must follow the pattern defined for each field (username, email, password)</li><li>the user must enter username, emaill and password credentials</li><li> the system must not allow the user to use the signup button until all of the fields have been set</li><li>the user must click on sign up button</li><li>the system checks whether the entered credentials are unique which means that username, email and password haven't been used by another user</li><li>the system stores the user credentials on the server if they are unique</li><ul> |
| req2   |  a user wants to login | rt2 |<ul align="left"><li>The system must allow the user to login </li><li>The user must have been already signed up before</li><li>The user must enter Username, email and password that has been allocated for him/her </li><li> the system must not allow the user to use the login button until all of the fields have been set</li><li> A user must click on login button</li><li>The system checks whether the entered credential matches one of the stored user credentials</li></ul> |
| req3   |  a user wants to change the language of the website | rt3 |<ul align="left"><li> The system must allow the user to translate the website to other languages</li><li>the user must chose the preferred language from a drop-down list in the navigation bar </li></ul>
| req4   |  a user wants to navigate the website on small sized screen | rt4 |<ul align="left"><li> The system must allow the user to use side navigation bar </li><li> the side navigation bar must appear only if the size of the screen is less than 960 pixel </li><li>The system must provide the same navigation functionality provided by the navigation bar in big sized screens </li></ul>
| req5   |  a user wants to check Home/ Events/ News pages | rt5 |<ul align="left"><li> The system must allow the user to route to Home/ News/ Events page </li><li> the user must click on the Home/ News/ Events buttons accordingly </li></ul>
| req6   |  a user wants to navigate from one room to another room | rt6 |<ul align="left"><li>The system checks whether the user is logged in</li><li> The system must allow the user to route to the navigation page only when the user is logged in </li><li> The user must specify the room he wants to navigate to </li><li>The user must read the QR code of the room he is currently in</li> <li>The user must click on the navigation icon</li><li>The system compares the two rooms and suggests a route between the two rooms </li></ul>
| req6   |  a user wants to check the Mensa menu of the week | rt6 |<ul align="left"><li>The system checks whether the user is logged in</li><li> The system must allow the user to route to the info page only when the user is logged in </li><li> The system fetches the menu data from the server and shows it in a tabular form</li></ul>
| req7   |  a user wants to check the exam schedule | rt7 |<ul align="left"><li>The system checks whether the user is logged in</li><li> The system must allow the user to route to the info page only when the user is logged in </li><li>The user must click on the exams tab</li><li> The system fetches the exams data from the server and shows it in a tabular form</li></ul>
| req8   |  a user wants to check the Lectures plan of the semester | rt8 |<ul align="left"><li>The system checks whether the user is logged in</li><li> The system must allow the user to route to the info page only when the user is logged in </li><li>The user must click on the lectures plan tab</li><li> The system fetches the lectures plan data from the server and shows it in a tabular form</li></ul>
| req9   |  a user wants to check the availabilty of a specific room at a specific date/time | rt9 |<ul align="left"><li>The system checks whether the user is logged in</li><li> The system must allow the user to route to the info page only when the user is logged in </li><li>The user must click on the free Rooms tab</li><li>The user must specify the time slot/ room ID and pick a date</li><li> the system must not allow the user to use the search functionality until all of the fields have been chosen</li> <li> The system fetches the lecture data that are occupying that room on that date/time slot from the server and shows it in a tabular form</li></ul>
| req10   |  a user wants to logout  | rt10 |<ul align="left"><li> The system must allow the user to logout only if he is already logged in </li><li>The user can use the logout button in the main navigation bar/ side navigation bar </li></ul>

# How to use the app

## Usecase-1: Sami wants to navigate from one room to another
* Assuming that sami isn't a registered user since he is a frechman, first he has to register himself in the system, he clicks on the "login" button in the navigation bar, it will route him to the login/signup page.
* Sami has to insert his username/email and password in the corresponding fields, he has to follow the pattern defined by the system; minimim 8 Alphabetical characters for the username, an email and a password of minimum length of 8 characters that consists of a minimum of 1 number, 1 capital letter and one small letter.
* Once sami has finished entering his credentials, he clicks on the "signup" button, once the system checks that the credentials are unique, System shows a successful signup dialog, other wise he has to re-enter a different unique credentials and click on the "signup" button again.
*  On successful sign up, he has to re-enter his credentials and click on "login" button, which directs him to the home page.
* Sami has to click on "Navigation" button in the navigation bar, which directs him to the navigation page.
* Sami selects one of the room in the select list, that he intends to go to, and clicks on the "QR" icon to read the room he is currently in.
* The system shows Sami a dialog, which states whether he is in the correct room or not, if not, the system gives Sami hints about the location of the requested room 
* The system enables the "Navigate" icon and asks Sami to use it, had he want a precise navigation to the room.
* Once Sami clicks on the "navigate" icon, the system marks his current location and the location of the requested room on the map.
* After clicking the "Navigate" icon the system enables the "Clear Marker" button, to let Sami delete the markers and the route from the map.
* Sami uses the navigation and have reached his point, now he logs out of the system by simply clicking on "logout" button in the navigation bar, which directs him to the home page again.

## Usecase-2: Maya wants to check the events of the university on her mobile device.
* Maya has to click on "side navigation" icon in the navigation bar.
* Maya clicks on the "events" tab.
* Upon clicking on the "events" tab, the system directs Maya to the events page

## Usecase-3: Meriam is an international student who dosn't know German language, she wants to check the studies and courses offered by the university she want to scroll through the news and events to get a feel of what student life is like.
* Meriam has to choose English language from the select drop list in the navigation bar.
* The system translate the website to english and loads Home page as default page.
* To check studies offered Meriam clicks on "read more" Button in the studies and courses mat-card.
* To check the news Meriam clicks on the "News" button in the navigation bar, the system directs her to News page.
* To check the events Meriam clicks on the "events" button in the navigation bar, the system directs her to the events page.

## Use case-4: kartal has a "Plc programming" exam next month (February), he wants to check the exam room, then he wants to check the availabilty of room ID 3 from the date 11/1/2021 till 15/1/2021 between the time 8:00 am and 11:00 am, so that he can study with his friends in campus, after checking those he wants whats to know on Mensa menu for today.
* Assuming that Kartal is already registered since he is a senior student, Kartal needs to login in order to fulfil all of his requests.
* Kartal clicks on the login Button in the navigation bar, which directs him to the login page.
* Kartal needs to enter his credentials, and click on the login button, on correct input, the login button redirects him to homepage.
* Kartal clicks on the "info" button in the navigation bar, which directs him right away to the Mensa menu, after checking the main dish.
* Kartal clicks on the "exams schedule" tab, which has a tabular information on various exam subjects, once he is done.
* Kartal clicks on the "Free Rooms" tab, there he has to select room ID 3, set the time slot to 8:00 am, 10:00am, 11:00 am for each date.
* Kartal picks the dates 11/1, 12/1, 13/1, 14/1, 15/1 respectively.
* kartal clicks on the "Search" button for each date/time combination.
* System lists lectures that are going to be held in that room, on those days/time slots.
* Kartal now know that the room is booked as below table.

| Date/Time slot/room ID=3   |  8:00  -9:45   | 9:45-11:00 |
|----------|:-------------:|:-------------:|
| 11/1/2021 |  Booked | Booked|
| 12/1/2021 |  Booked | Free|
| 13/1/2021 |  Booked | Booked|
| 14/1/2021 |  Free | Free|
| 15/1/2021 |  Free | Booked|

* Kartal clicks on the "logout" button in the navigation bar, which directs him back to homepage.


**Please note that sometimes University API return wrong times and date, however I am calling the API with the correct timing and date, as I have taken into consideration the time zone difference during coding. You can check the console as a proof**

**API: https://thabella.th-deg.de/thabella/opn/period/findByRoom/${id}/${dateTime}**

# Folder structure 
### Backend Routes and middleware

```mermaid
graph TD;
  Backend-->Middlewares;
  Middlewares-->check-Authorization;
  Backend-->Events-Route;
  Backend-->Exams-Route;
  Backend-->Mensa-Route;
  Backend-->lectures-Route;
  Backend-->app.js;
  app.js-->User-Authorization-Route;
  app.js-->User-Credentials-Post-Route;
  app.js-->Rooms-Route;
  app.js-->Route-Handlers;
```

#### Routes
  * EventRoute.js: fetches JSON objects that corresponds to EventsModel
  * ExamsRoute.js: fetches JSON objects that corresponds to ExamsModel
  * LectureRoute.js: fetches JSON objects that corresponds to LecturesModel
  * MensaRoute.js : fetches JSON objects that corresponds to MensaModel
  * app.js: contains routes for 
    * posting/storing users credentials, authenticating users
    * fetching JSON objects that corresponds to RoomsModel.
    * route handlers for standalone routes

  #### Middelware
    signature validation of the recieved Token using the secret key 

    ```javascript
        try {
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify( token, "secret_key");
            next();
        }
            catch(error)  {
                res.status(401).json({ message: "not authorized route"})
            }
      ```
### Backend Schema

Refer to frontend Models for detailed description

```mermaid
graph TD;
  
  Backend-->Schema;
  Schema-->Events-Model;
  Schema-->Exams-Model;
  Schema-->Lectures-Model;
  Schema-->Mensa-Model;
  Schema-->Users-Model;
  Schema-->Rooms-Model;
  
```


### Frontend Services

```mermaid
graph TD;
  src-Folder-->app-Folder
  app-Folder-->info-Folder;
  app-Folder-->services-Folder;
  services-Folder-->user-Authorization-Service;
  services-Folder-->user-Credentials-Post-Service;
  services-Folder-->Navigate-Service;
  services-Folder-->Marker-Service;
  services-Folder-->side-Navigationbar-Service;
  info-Folder-->Exams-Fetch-Service;
  info-Folder-->Lecture-Fetch-Service;
  info-Folder-->Mensa-Fetch-Service;
  info-Folder-->Events-Fetch-Service;
```

#### Services

*  Navigate service 
    * a service to fetch RoomsModel JSON objects from server and send their long/lat coordinates to "MarkerService" where they are treated as observables 
*  Marker Service
    * Defines two subjects; marker for point A and a marker for point B in order to send the coordinates of both markers to subscribed components
* User Credential Post service
  * a service for posting/storing users credentials to the server
* Authorization service
  * a service for authenticating users credentials 
* Side navigation bar Service
  * a service for sending a click observable whenever the user clicks on the side nav icon in the Nav Bar component
  * Use case: so that I can control the opening and closing of the side nav container that exists in the app component
* HTTP service for fetching exam schedule
  * A service for fetching ExamsModel JSON objects from database (Exams schedule)
* HTTP service for fetching Mensa Menu
  * A service for fetching MensaModel JSON objects from database ( Mensa menu)
* HTTP service for fetching free rooms data
  * A service for fetching specific LecturesModel JSON object that is going to be held in a specific room ID and at a specific date/time from database
* HTTP service for fetching events happening in a semester (Lecture plans, organiser, etc)
  * A service for fetching EventsModel JSON objects from database (for instance lecture plans)  

### Frontend Models 

```mermaid
graph TD;
  src-Folder-->app-Folder
  app-Folder-->info-Folder;
  app-Folder-->Frontend-Models-Folder;
  info-Folder-->Exams-Model;
  info-Folder-->Lecture-Model;
  info-Folder-->Mensa-Model;
  info-Folder-->Events-Model;
  Frontend-Models-Folder-->Users-Model;
  Frontend-Models-Folder-->Rooms-Model;
```

#### Rooms 
a Model that is used for storing the langtitude and longtitude of a room, to be used later in navigation service

  ```JSON
{
  "room": "A101"
  "floor": "Second"
  "building": "A"
  "lat": "48.830387734847406"
  "long": "12.954195141792297"
}
```

#### Users
a Model that represents user credentials

  ```JSON
{
  "username": "saeedhani"
  "email": "saeedhani@hotmail.com"
  "password": "12345678!Qw"
  }
```

#### Mensa
A model that resembles the Mensa menu
  ```JSON
{
  "day": "Monday"
  "mainplate": "Chicken parmigiana"
  "salad": "Rainbow Orzo Sala"
  "drinks": "orange juice"
  "price": "9.5 euro"
  "openingTime": "11:00"
  "closingTime": "12:30"
}
```

#### Exams
a model for the exam schedule

 ```JSON
{
  "subject": "PLC programming"
  "courseOfStudy": "AI-M SS2020"
  "day": "Wednesday 02.12.2021"
  "time": "10:00"
  "duration": "90 min"
  "room": "E067"
  "examiner": "T.Toth"
  "semester": "1"
  "type": "PSTA"
  }
```

#### Lecture
A model that represents lectures that are taking place in a specific room at a certain Date/time
 ```JSON
{
  "description": "Personalwesen"
  "organiser": "Zeitlhöfler, Markus"
  "startDateTime": "2020-11-25 08:00"
  "participants": "	TM-3"
}
```

#### Events
A model that resembles the events that are going to happen during the current semester, for instance lectures plan.
 ```JSON
{
      "organiser": "Fruth, Klaus"
      "label": "BWL-2A"
      "description": "Compliance und Vertragsrecht"
      "info": {
        "begin": "Sonntag, 15. März 2020", "end": "Freitag, 17. Juli 2020", "name": " Sommersemester 2020 (AWW)"
      }
}
```
### Frontend Interceptor
Clones outgoing HTTP requests and adds an authorization header to the JWT ( JSON web Token)
```mermaid
graph TD;
  src-Folder-->app-Folder
  app-Folder-->auth-Interceptor;
```

```Javascript
intercept(req: HttpRequest<any>, next: HttpHandler)  {   
        const AuthToken = this.AuthService.getToken();
        const authRequest = req.clone({
            headers : req.headers.set('Authorization', "Bearer " + AuthToken)});
        return next.handle(req);
    }
```

### Frontend Components

```mermaid
graph TD;
  srcFolder-->appFolder
  appFolder-->BodyComponent;
  appFolder-->eventsComponent;
  appFolder-->footerComponent;
  appFolder-->NavbarComponent;
  appFolder-->DialogComponent;
  appFolder-->infoFolder;
  appFolder-->LoginComponent;
  appFolder-->NachrichtenComponent;
  appFolder-->NavigationComponent;
  appFolder-->HeaderComponent;
  infoFolder-->ExamsComponent;
  infoFolder-->freeRoomsComponent;
  infoFolder-->MensaComponent;
  infoFolder-->lecturePlanComponent;
```
#### Description of components

* footer Component: contains footer elements for all pages
* header Component: contains header elements for all pages
* NavigBar Component: contains the Navigation bar for all pages
* Body Component: contains body elements of the Home page
* Events Component: contains the body of the Events page
* News Component: contains the body of the news page
* login Component: contains login elements of the login page
* Navigation Component: contains Navigation elements of the navigation page 
* info Component: contains tab elements of four Components
  * Mensa Component: contains a table of the Mensa menu
  * Exams Component: contains a table of the exams schedule
  * LecturePlan Component : contains a table of an event in  our case it is lectures plan
  * FreeRooms Component: contains a table of lectures that is being held in a specific room

# Typography and theming
```mermaid
graph TD;
  src-Folder-->assets-Folder
  assets-Folder-->my-palette.scss;
```

```mermaid
graph TD;
  src-Folder-->my-theme.scss;
```
* A palette that corresponds to the corporate identity of technical university of deggendorf has been created.
* A coloring theme have been configured using the created palette.
* A customized typograpghy that corresponds to the corprate identity of Technical university of deggendorf has been created.

```javascript
$primary : mat-palette($md-mypalette, 50);
$accent : mat-palette($md-mypalette, 100);
$warn :  mat-palette($md-mypalette, 200);
$theme : mat-light-theme($primary, $accent, $warn);
```
```javascript
$custom-typography: mat-typography-config(
$font-family :'Saira',
$headline: mat-typography-level(24px, 32px, 400),
$title: mat-typography-level(24px, 30px, 400),
```

* The default Angular material typography for components texts and HTML text tags has been overridden by the newly created typography.
* The default Angular material theme for mat-tabs and mat-buttons have been overridden by the newly created theme.

```javascript
@include angular-material-typography($custom-typography); 
@include mat-tabs-theme($theme);
@include mat-button-theme($theme)
```
**changing the color of texts to match the corporate identity was done through Mixins as shown in the sample code below**
```javascript
@mixin corporateIdTextColor($theme) {
        $config: mat-get-color-config($theme);
        $myprimary: map-get($config, primary);
        $myaccent: map-get($config, accent);
        $mywarn: map-get($config, warn);
        p{
            color: mat-color($myaccent);
        }
    }
     div {
         @include corporateIdTextColor($theme);
    }
```
# Translation
JSON files
```mermaid
graph TD;
  src-Folder-->assets-Folder;
  assets-Folder-->i18n-folder;
  i18n-folder-->de.json;
  i18n-folder-->en.json;
```
Source code

```mermaid
graph TD;
  src-Folder-->app-Folder;
  app-Folder-->app-module.ts; 
```
* Created the Key-Value pair for each string in JSON files
* Installed the dependency Ngx-translate.
* Used the translate service to add/ set defaults languages and translate

```javascript
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang('de');
    const browserlang =translateCacheService.getCachedLanguage() || this.translate.getBrowserLang();
    this.translate.use(browserlang);
    translateCacheService.init();
    const browserLang = translateCacheService.getCachedLanguage() || translate.getBrowserLang();
```
* used the translate HTTP loader to use the JSON translation files that are located in the assets folder
```javascript
export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
```
* Used the translate cache service for recalling selected language at page refresh 
```javascript
export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}
```

# Route guards

* Routes have been guarded as below scheme.

 ![alt text](../assets/Routes.jpg)

  
# Use case UML
![alt text](../assets/UseCaseUML.png)
## Description of UML buttons

### login button
selectButton(): sets a variable that indicate that login button was clicked. 

Authorization service: a service for authenticating users.

### Signup button
selectButton2(): sets a variable that indicate that signup button was clicked.

Credential post service: a service for posting/storing users credentials to the server.

### Qr Code Button/ Select room Form
Navigate Service: a service to fetch RoomsModel JSON objects from server and send their long/lat coordinates to "MarkerService" where they are treated as observables.

Marker service: Defines two subjects; marker for point A and a marker for point B in order to send the coordinates of both markers to subscribed components. 

### Navigation Icon Button
makeMarker(): 
* on clicking navigation Icon, it checks if there is previous route, it will clear them from the map.
* it checks if there are previous markers on the map, it clears the layer of markers.
* creates a point A marker and adds it to the marker layers.
* creates a point B marker and adds it to the marker layers.
* create a Leaflet route between both points and adds it to the map. 

### Clear Marker buton
clearmarker():
* clears the markers layer from the map. 
* clears the routes from the map.

### Search Button
printData() : it fetches lecture model Json objects from mongoDB.

HTTP service: A service for getting specific Lecture JSON object that is going to be held in a specific room ID and at a specific date/time from database. 

### Pick date Form
setDate():
* stores the picked date in a variable. 
* concatenates the picked date in a variable which combines both date and time.

### Select room ID Form
setID(): stores the selected room ID in a variable.

### Select time slot Form
setTime(): 
* stores the selected time slot in a variable. 
* concatenates selected time slot in a variable which combines both date and time.

### Select language form
useLanguage():  set the language to be used in the translate service.

### Logout Button
Authorization service : a service for authenticating users.

logout() : 
* sets the token to null.
* sets boolean observable to false which represent the authentication status (un-authenticated user).
* navigates to home page.
* clears the token from the local storage in the DOM. 

### Side Navigation icon
Side navigation service: a service for sending a click observable whenever the user clicks on the side nav icon in the Nav Bar component.

openNavigationBar():
* on each click on the side navigation icon, state variable is toggeled.  
* it sends the state variable as an observable using "sideNavigationService" to app-component to control the opening and closing of "mat-sidenav" tag element. 


  
  


# Wireframes

### Homepage

![alt text](../assets/HomePage.png)

### Info page

![alt text](../assets/infoPage.png)

### Login page
![alt text](../assets/loginPage.png)

### Navigation page
![alt text](../assets/navigationPage.png)


# General Notes 

Since I am using a demo routing server, pedestrian routing was not supported in leaflet routing machine.







         


    