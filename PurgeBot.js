//Libraries
const Discord = require('discord.js');
const client = new Discord.Client();

//Constants & variables
const  roleName = "Muzzle of Shame";
const emoteNames = ["downvote","upvote"];
const  botToken = "ODQ4MDM4NjI1MzA3Mzk0MTM4.YLGzhA.tNzw8cu9uTrHMXOJlTvMFntxHH8";
const arrayOfNo =["this","th1s","thi5","th15","7his","7h15","7h1s","7hi5","th*s","*his","t*is","thi*","th*5","th1*","th**","t***","**i*","*h**","***s",
                  "ratio","r4tio","rat1o","rati0","ratlo","r*tio","rat*o","rati*","r4t1o","rat10","r4ti0","r4t10","r*ti*"];
let i=0;


const filter = (reaction, user) => emoteNames.includes(reaction.emoji.name);



//Confirmation of bot activation
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


//On message
client.on('message', msg => {

  //When user has blacklist role
  if (msg.member.roles.cache.some(role => role.name === roleName)) {
      

    //Loop to look at all blacklisted words
    for(i=0;i<arrayOfNo.length;i++){
        
      //When blacklisted word is found
      if(msg.content.toLowerCase().includes(arrayOfNo[i])){
          


        //Set time to wait for the reactions
        msg.awaitReactions(filter,{ max: 1, time: 60000, errors: ['time'] }).then(collected => {

          msg.delete();
            
          
        });
        break;

      }



    }
    
  } 
  
});

//Turn on bot
client.login(botToken);