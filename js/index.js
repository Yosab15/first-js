var final;
function getQuote(){
    let n=Math.floor((Math.random()*10)+1);
    if(n==final){
        if(n==10){
            n-=2;
        }
        else if(n==0){
            n+=2;
        }
        else{
            n=n+1;
        }
    }
    final=n;
    var arrquote=[
        '" Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',
        '" So many books, so little time."',
        '" You only live once, but if you do it right, once is enough."',
        '" Be the change that you wish to see in the world."',
        '" In three words I can sum up everything Ive learned about life: it goes on."',
        '" If you tell the truth, you dont have to remember anything."',
        '" A friend is someone who knows all about you and still loves you."', 
        '" Be yourself; everyone else is already taken."',
        '" A room without books is like a body without a soul."',
        '" A  You know you are in love when you can not fall asleep because reality is finally better than your dreams."',
        '" f you want to know what a man is like, take a good look at how he treats his inferiors, not his equals."',
        '" Live as if you were to die tomorrow. Learn as if you were to live forever. "',
        
       
    ]
    var arrauthor=[
        '  --Albert Einstein',
        ' -- Frank Zappa',
        ' --Mae West',
        ' --Mahatma Gandhi',
        ' --Robert Frost',
        ' -- Mark Twain',
        ' -- Elbert Hubbard',
        ' -- Oscar Wilde',
        ' --  Marcus Tullius Cicero',
        ' --  Dr. Seuss',
        ' --  J.K. Rowling, Harry Potter and the Goblet of Fire',
        ' --   Mahatma Gandhi',

        

        
       
    ]


    document.getElementById('quote').innerHTML=arrquote[final];
    document.getElementById('author').innerHTML=arrauthor[final];
    console.log(final)

}
