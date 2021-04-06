const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  console.log(`Great guess I\'ll be refering to you by ${answer1} from now on.`);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`Hey that seems like a fun activity: ${answer2} `);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Great! So you like to listen to: ${answer3} `);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        console.log(`Who doesn't love: ${answer4} ?`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`Ok, so you like eating: ${answer5} ?`);
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            console.log(`What a grat answer: ${answer6} ?`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`That indeed is a very cool thing: ${answer7} ?`);
              console.log(`So from all the information we have gathered you can use this pholowing paragraph for your profile:
                            Hi, you can call me ${answer1}, I am an individual who enjoyes to ${answer2} in my free time while vibing to
                            ${answer3}.  Obviously ${answer4} is my favorite meal of the day in which I enjoy all the ${answer5} I can eat.
                            I also quite enjoy watching and playing ${answer6} on the weekends and when the weather ideal. A little
                            fact about me is ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

