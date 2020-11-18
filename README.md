# TechnestTestFrontend

## Acknowledgements
For this project, the following graphic resources have been used:
* Pizza icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
* Pizza love icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

## Directory structure

### FE
The project structure follows a structured based on functional chunks of the application. While this is a small project,
it has nonetheless been structured in ```views``` and ```components``` folders. The first map to application full features 
or views, while the second folder holds presentational components that might or might not make use of state via Hooks.

This means that all the resources related to the feature are contained in a directory and a module is defined for
 that purpose. And that tha application would scale more easily.

The general purpose services like the ```auth.service``` or ```socket.service``` are in their own directory ```services```.


### BE
Same happens for all the resources in the backend, generated with the **Nest.js** CLI. The module ```pizza-love``` is the main
one and holds the logic to fulfil the requirements.

## Design decisions
Some assumptions have been made that affect both FE and BE:

* The login flow has been faked, using a FE service. To come up with a fully fledged login flow (let alone sign up,
password reset, etc) would have been time consuming, and for the purposes of this test I found more interesting to focus
on the rest.

* Both FE and BE use Typescript, for the advance type checking and features that it provides.

* In order to fulfil the requirements, a real time communication has been implemented. For this, Socket.io has been chosen
as it is supported by default by Nest.js. Hence, the information for the bar chart is updated in real time when any
of the users click the "Pizza love" button in their own session.

* The initial data load has been faked as well, however this would normally be made through a regular HTTP GET request.

### FE

#### Design
Material-ui has been used as a design framework and for the definition of css-in-jss styles for the components.

#### Componentization and state management
* This project only contains functional components, and makes use of React Hooks to work with the state.
* The main component in the application is ```App```. It impelements a ```mediator pattern``` where it orchestrates
the rest of the components. Due to the requirements of the test no routing was added since it would be overengineering
the application.
* The rest of the components are presentational, and might have internal state (like ````Login```), through the use
of React Hooks.

### BE
* The main module is ```pizza-love```. It has got a ```gateway```, and a ```service```.
* The
* The main files are ```pizza-love.gateway``` to control the real time communication and ```pizza-love.service``` 
with the main logic to update them.

## Code style
The project has been built following the principles below:
* Prettier along with ESLint for React has been used and followed for the codestyle.
* The Angularjs commit convention has been used for the commit messages. Please check the commit history
 for specific samples.: *type(scope): subject*.
* Husky has been used to implement Git Hooks to check the code style before pushing to the repository.


## Pending improvements
* Better error handling.
* Internationalization.
* Loading indicators.
* As mentioned before, the login flow has been faked, so completing the flow would be an improvement.
* Routing when necessary.
* Show authenticated user info.
* Fix the ```import``` problem with Socket.io and Typescript.


## Testing
* The backend main service has been tested considering all the possible scenarios.
* On the FE, unfortunately, I ran intro quite some trouble when mocking Socket.io for testing the FE components. This issue
has been reported in different platforms like Github or StackOverflow. I did
run out of time without a viable solution so I decided to deliver the test missing some meaningful tests on the FE side.
However, my approach would be:

  * Do the minimum snapshot testing to make sure the component renders correctly. I do not consider testing the reception
  of properties, for instance, to be meaningful, since I'd be testing React itself.
  * Follow an ATDD-like testing flow. Not unit-testing every single function separately but small pieces of functionality
  following the application flow.
  * Test for all possible inputs and outputs of that specific flow to cover all cases.  

## Running the app
Clone the repository and:

### BE\
* Inside the ````pizza-lovers-server``` directory, run ```npm i```.
* Run ```npm run start:dev```.

### FE
* Inside the ````pizza-lovers-client``` directory, run ```npm i```.
* Run ```npm start```.


