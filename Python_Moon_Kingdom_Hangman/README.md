## [Moon Kingdom Transformation (Hangman)](https://replit.com/@Sheree1986/MoonKingdom#main.py)



This python application take a spin on the classic game of hangman. Sailor Moon is one of my first and all time favorite anime. 
Instead of the tradition "hanging", it is replaced with a transformation. In order to win a user has 10 attempts to guess the correct word 
before Sailor Moon completes her transformation.


#### Shoot for the Stars
Sailor Moon theme hangman game.  Where as the player guesses wrong Sailor Moon completes her Moon Prism Power Make UP transformation. When the transformation is completed the player losses. The original opening theme song is the background music. Other sounds play when guess is correct or incorrect. The win screen and the lost screen will have different gifs and messages. There will be two player functionality and buttons to quit, start, replay. The ability to keep score if there are two players.

#### MVP v1
- [X] Basic hangman game that allows user to guess multiple worded answers
- [X] Pictures to show Sailor Moon transformation as player guess wrong letter
- [X] Letter disappear of screen once clicked
- [X] If guess is correct the letter appears on the word guess screen area
- [X] When all letter are correct user is showed message
- [X] If lost another message is shown


### MVP v2
- [X] Sound for both background and when letter clicked
- [X] Start, exit and restart buttons



#### Machineries Used

1. Python - [python-3.10.5](https://www.python.org/downloads/)
2. Pip - [pip 22.2.2](https://packaging.python.org/en/latest/tutorials/installing-packages/)
3. Pygame [Pygame](https://pypi.org/project/pygame/)

### Technical requirements ⚙️
- [X] You must create an app using the newly learn programming language via self-study (Python)
- [X] Be a complete product
- [X] Implement thoughtful user stories
- [X] Meet MVP and MPV2 outlined

### Necessary Deliverables 🏁
- [x] Your project idea (a brief 2-3 sentence description of your app)
- [x] A README.md


### User Stories �
- [x] As a user I should be able to click a button to either start a new game or exit the main menu
- [x] As a user I should be able to click on a letter to guess a word
- [x] As a user the correct word should appear in the guess area
- [x] As a user once a letter is pressed it show not be visible or clickable 
- [x] As a user I should get 10 guesses to find the word correct. If not I am taken to a lost screen.
- [x] As a user will be taking to a win screen if the correct word is guessed
- [x] As a user I should hear the Sailor Moon Theme song playing in the background
- [x] As a user I should hear a sound when a letter is pressed in the game screen
- [x] As a user I can click a restart button during game play to restart game
- [x] As a user words should randomly 





#### Struggles
The restart button functionality was the most difficult code to create. I had to use pseudo code to add my logic. Then finally figure out how to stop the restart button from glitching.
The glitch was created by a pygame.display.update in the wrong place. Another struggle was getting the app deployed. Because of the risk to cyber security it was decided not to create a .exe file. [Replit](https://replit.com/@Sheree1986/MoonKingdom#main.py) an online IDE was used to deploy the game.





## INSTRUCTIONS(STEP BY STEP)
### 1. Fork & Clone this repo above 🔱
### 2. Open up in vscode - check versions by typing pip --version (pip3) and python --version (python3) in the terminal
### 3. install pygame (pip install pygame)
### 4. To run app enter (python main.py) in the terminal 





