## [Moon Kingdom Transformation (Hangman)](https://replit.com/@Sheree1986/MoonKingdom#main.py) - Project # 2



## Situation

Was tasked with learning a new language based on manager requirements through self-study. This Python application takes a spin on the classic game of hangman. Sailor Moon is one of my first and all-time favorite anime. Instead of the traditional "hanging", it is replaced with a transformation. To win a user has 10 attempts to guess the correct word 
before Sailor Moon completes her transformation.

## Task
The project folder structure is as followed:

<details>

   🌙 assets

   🌙 Photo not used

   🌙 requirement.text

   🌙 runtime.txt

   🌙 main.py
   
   🌙 button.py
</details>



This project fulfills job functions 1, 2, and 6 as a Fullstack MERN Application:

**This includes the following competencies:**: 

<details>

🌙 JF 1.1 Can explain all stages of the software development life cycle (what each stage contains, including the inputs and outputs). Yes, the deployment of this application was the most difficult. In the end, I used Replit to run/host the game. 
   
🌙 JF 1.5 Can follow software designs and functional/technical specifications. Learning Python was very fun. It took a while to get used to the spacing/tabbing requirements but with practice, I was able to learn and grow. This project was completely designed by me, so I was able to implement the specifications. 	


🌙 JF 2.2 Can identify relevant and up-to-date software designs and how to read and implement functional/technical specifications. For the portfolio, I had to update pygame to get the application running locally. The replit "deployment" had no such issue.

🌙 JF 2.3 Can develop effective user interfaces. This was the most fun project to work on. I got to learn a new language and make a classic game with my spin. Using Pygame allows for music and other sound effects to get the user engaged. A future implementation would be the mute button and two-player functionality with scorekeeping.
   

🌙 JF 6.3 Able to communicate software solutions and ideas to technical and non-technical stakeholders. This was done through the video presentation.
   
🌙 JF 6.4 Works independently and takes responsibility. For example, has a disciplined and responsible approach to risk, and stays motivated and committed when facing challenges. A Kanban board wasn't used for this project but I did follow the user stories as a guideline for what needed to be accomplished to mark this project as done.		
   
🌙 JF 6.6 Shows initiative for solving problems within their own remit, being resourceful when faced with a problem to solve. Under the struggles sections of the original readme, I outlined how the restart button issue was solved.				

</details>


## Action 
🌙 Took a self-study Python course on the Verizon learning platform

🌙 Watch Video tutorial for the basic of hangman

🌙 Designed the functionality of my version of hangman (transformation)

🌙 Learned how to use pygame library to include music into game



## Result 
🌙 [Video Presentation](https://www.youtube.com/watch?v=Z9r3lrbA_Tk)

🌙 [Replit Website](https://replit.com/@Sheree1986/MoonKingdom#main.py)



# Features

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



#### Machineries/Technology Used

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



