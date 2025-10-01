// Track data for the SPARK soundtrack - Based on actual MP3 files
const tracks = [
    { id: 1, title: "01 Kingdom Opening", duration: "4:15", description: "Welcome to the realm", story: "Just moments ago the 2 sister stars were still visible, but already the sun rises over a mysterious kingdom. The sun people set to work while in the Wildlands the animals awaken, just as in the distant jungle a terrible beast lies in wait for those who are foolish enough to approach it.", lyrics: "" },
    { id: 2, title: "02 Sun Hiccups", duration: "3:42", description: "The great light falters", story: "Something is wrong with the great sun that powers the realm. Its light flickers and dims.", lyrics: `[Verse 1]
Wake up early, climb the tower high
Check the crystals that catch the sky
"Morning, sparkles," that's what I say
"Time to start another day"

Polish the mirrors, oil the gears
Been learning this for three long years
The elders say I've got the touch
For keeping sunshine bright and such

[Pre-Chorus]
But wait... what's that?
The light just... stopped?

[Chorus]
The sun's got hiccups! Hiccup-cup-cups!
Flickering down then lighting up
Never seen our sunshine do this dance
Maybe it just needs a second chance
The sun's got hiccups! Don't give up!
We'll help you shine, light back up!
Everything's gonna be okay
Our sun will shine another day!

[Verse 2]
Wrench in hand, I check each part
Every circuit, I know by heart
"Come on, sunshine, what's the matter?"
Why do your warm beams scatter?

I want to fix what's broken here
I want to make the darkness clear
I want to be the one who knows
How to help our sunshine glow

[Pre-Chorus]
But wait... there's more
It's getting worse!

[Chorus]
The sun's got hiccups! Hiccup-cup-cups!
Flickering down then lighting up
Never seen our sunshine do this dance
This might be more than second chance
The sun's got hiccups! Don't give up!
We'll help you shine, light back up!
Everything's gonna be okay...
...Right?

[Bridge]
I learned to trust what's in my heart
When broken things all fall apart
Maybe what our sun needs most
Isn't tools or fixing posts
Maybe it needs to know we care
That someone's always gonna be there

[Final Chorus]
The sun's got hiccups! But that's okay!
We'll figure this out day by day
I may be young but I'm not scared
Our sunshine knows that I still care
The sun's got hiccups! We won't give up!
Love will help you light back up!
Everything's gonna be okay
Tomorrow brings another way!

[Outro]
"Stay strong, sunshine, I'm still here
But maybe... maybe I need help, I fear"` },
    { id: 3, title: "03 Underground Rider", duration: "4:08", description: "Journey into the depths", story: "Our heroes venture into underground passages, discovering hidden tunnels and ancient secrets.", lyrics: `[Verse 1]
Down in the depths where the crystals grow
Where the silver rivers ebb and flow
Riding Shadow through tunnels deep
While the sun-touched world's asleep

Sing to the walls, make them glow bright
Guide us safely through endless night
But the darkness grows each passing day
And little Tam is fading away

[Pre-Chorus]
I know the codes, I know the way
But what if I'm too late today?

[Chorus]
Ride, ride, underground rider!
Through the deep, racing beside her!
Shadow's running, crystal singing
Ancient magic we are bringing
Ride, ride, we won't give up!
To the light, we're going up!
Nothing's gonna stop us now
We'll find the way somehow!

[Verse 2]
Elders say stay, don't cross the line
"Sun folk magic isn't mine"
But love is stronger than any fear
And Tam needs help, the end is near

I want to be the one who saves
The one who's strong, the one who's brave
I want to prove that deep folk too
Can make the impossible come true!

[Pre-Chorus]
The ancient songs are calling me
This is my destiny!

[Chorus]
Ride, ride, underground rider!
Through the deep, racing beside her!
Shadow's flying, voices ringing
Hope and healing we are bringing
Ride, ride, we won't give up!
To the light, we're going up!
Nothing's gonna stop us now
We'll find the way somehow!

[Bridge]
Tam, hold on, I'm on my way
Grandmother's voice shows me the way
Three days dark but hope's not gone
Shadow, faster! We ride on!

[Final Chorus]
Ride, ride, underground rider!
Broke the deep, nothing can hide her!
Now I'm climbing, now I'm singing
Two worlds' magic I am bringing
Ride, ride, we didn't give up!
To the light, we made it up!
Nothing's gonna stop us now
We found the way somehow!

[Outro]
Here we are... in the world above
Shadow made it... powered by love
Time to find that spark of light!` },
    { id: 4, title: "04 Sparks", duration: "3:56", description: "When powers create magic", story: "The moment when Finn and Nova's energies first connect, creating the sparks that give our story its name.", lyrics: `[Verse]
[Male]
What are you doing in my room?
Crashing through like certain doom
These crystals aren't for you to take
One wrong move and they might break!

[Verse]
[Female]
Your crystals? Boy, you must be wrong
These sacred stones to us belong
We need their light to heal our kin
Why won't you let the sharing begin?

[Pre-Chorus]
[Male]
I don't know what you think you'll find
But sun-blessed magic isn't kind
To deep folk who would steal and lie—

[Pre-Chorus]
[Female]
Who's stealing? We just want to try
To save our sick and heal our young
Before their final song is sung—

[Chorus]
[Together]
When sparks fly, sparks fly
There's a force between you and I
When sparks fly, sparks fly
Two halves of something torn apart
Why does your magic pull my heart?

[Verse]
[Female]
You talk to crystals like they're friends
On their "friendship" we depend
While down below the darkness grows
And still your privilege shows!

[Verse]
[Male]
I never asked for privilege here
I work from dawn till stars appear
I do my best to keep things bright
That doesn't mean I think I'm right!

[Pre-Chorus]
[Female]
I didn't know, I'm sorry, I—

[Pre-Chorus]
[Female]
No, wait, your cousin, does he cry?
In pain at night when no one sees?
I know that hurt, it's agony—

[Chorus]
[Together]
When sparks fly, sparks fly
Something deeper between you and I
When sparks fly, sparks fly
Your pain feels like my own pain too
This connection can't be untrue

[Bridge]
OW! / OW!
What was that?! / I don't know how!
Your magic feels like coming home
Yours feels like I'm not alone
Like pieces of a broken song
Finding where we both belong

[Final Chorus]
[Together]
Now sparks fly, sparks fly
Perfect harmony, you and I
Now sparks fly, sparks fly
We're the answer to ancient prayer
Two lost pieces meant to repair!

[Outro]
What have we done?` },
    { id: 5, title: "05 Seraphina - The Angel Lady", duration: "4:23", description: "Beautiful deception", story: "Lady Seraphina appears with angelic beauty and grace, but beneath lies a darker purpose.", lyrics: `[Verse 1]
Here comes the lady dressed in gold
With healing hands and heart so bold
She touches pain and makes it cease
She brings the frightened children peace
Children gather 'round her light
She makes the darkest morning bright
"Don't be afraid," her voice rings true
"I have such wonders planned for you"

[Pre-Chorus]
Come and dance, come and play
In my gardens every day
Golden light and silver streams
Where you'll have the sweetest dreams

[Chorus]
Angel lady, save the day
Take our troubles all away
Angel lady, here to stay
Make our world a brighter place
Angel lady's gentle grace
Everything will be all right
In her warm and golden light

[Verse 2]
Little Tam whispers to the rest
"Some friends went on a special quest
To healing gardens far away
Where children laugh and always play"
She smiles and nods, her eyes so kind
"Such lovely children, what a find
The strongest ones get special care
In my garden, crystal-fair"

[Pre-Chorus]
Come and dance, come and play
In my gardens every day
Golden streams and silver light
Everything seems so right

[Chorus]
Angel lady, save the day
Take our troubles all away
Angel lady, here to stay
Make our world a brighter place
Angel lady's gentle grace
Everything will be all right...
In her warm and golden light

[Bridge]
But some voices fade away
Fewer children sing each day
And the ones who do return
Have forgotten how to yearn

[TAM - Spoken over music]
"Where are Kira and young Ben?
Will we see them once again?"

[SERAPHINA - Sung response]
They are safe in slumber deep
In my garden, theirs to keep
Perfect peace and perfect rest
Only I know what is best

[Final Chorus]
Angel lady, golden lady
Take our pain and fear away
Angel lady... gentle lady...
Why do fewer voices pray?
Save us with your fading light
Something doesn't feel quite right...` },
    { id: 6, title: "06 Writings on the Wall", duration: "3:15", description: "Ancient prophecies", story: "Mysterious text begins to glow with inner light, revealing prophecies and truths long hidden.", lyrics: `[Verse 1]
Look! The words are glowing bright
Shining in the crystal light
Someone left a message here
Can you see? Can you hear?

[All]
Ancient words, what do they say?
Show us, show us the way!

[Chorus]
Ancient words, what do they say?
Show us, show us the way!
Ancient words from long ago
Tell us what we need to know!
Somebody help us understand
What these glowing words demand!

[Verse 2]
Old words from the builders past
Made these walls and made them last
But the language isn't clear
What's this message we should hear?

[All]
Ancient words, what do they say?
Show us, show us the way!

[Verse 3]
Crystal walls know many songs
But these words don't belong
Strange symbols never seen
What could these bright letters mean?

[All]
Ancient words, what do they say?
Show us, show us the way!

[Chorus]
Ancient words, what do they say?
Show us, show us the way!
Ancient words from long ago
Tell us what we need to know!
Somebody help us understand
What these glowing words demand!

[Bridge]
[NOVA] Wait! I think I understand!
These are codes from the ancient band!
Grandmother sang these very words
When she taught me songs of birds!

[All]
Nova knows! Nova knows!
Tell us what the message shows!

[Verse 4]
"When the lights begin to fade
And the people are afraid
Sun and shadow, work as one
Till the healing work is done!"

[All]
Ancient words, now we know!
This is how our strength will grow!
Ancient words from long ago
Tell us what we need to know!

[Final Chorus]
Ancient words, now we know!
This is how our strength will grow!
Sun and shadow, work as one
Till the healing work is—
What's happening?!

[NOVA] The floor! It's opening wide!
[FINN] Everyone stay by my side!

[Outro]
Ancient words showed us the way
We'll be brave, come what may!
Together we can face it all!` },
    { id: 7, title: "07 Order Must Prevail", duration: "4:45", description: "The antagonist's philosophy", story: "Seraphina's true beliefs are revealed - her desire to impose perfect order on a chaotic world.", lyrics: `[Verse 1]
Citizens gather, listen well
I have important news to tell
These glowing words, this strange new threat
Means danger that we can't forget
Lock your doors and stay inside
Let the sheriff be your guide
I've seen trouble in my day
And I know the safest way

[Chorus]
Order must prevail, prevail, prevail
When the kingdom starts to fail
Lock the doors and bar the gates
Order is what keeps you safe
No exceptions, no debate
In my hands lies your fate
Order must prevail today
That's the only certain way

[Verse 2]
I've been sheriff twenty years
Kept this kingdom free from fears
Every choice I make is hard
But I am your faithful guard
Some may call my methods stern
But from history we must learn
Chaos leads to pain and loss
I decide who pays that cost

[Pre-Chorus]
Trust the badge upon my chest
I know what serves you best
Freedom's just another word
For disaster, mark my word

[Chorus]
Order must prevail, prevail, prevail
When the kingdom starts to fail
Lock the doors and bar the gates
Order is what keeps you safe
No exceptions, no debate
In my hands lies your fate
Order must prevail today
That's the only certain way

[Bridge]
You two children with your spark
Playing games here in the dark
Magic's dangerous, can't you see?
Come along and trust in me
I'll keep you safe from harm
Underneath my strong right arm
No more running, no more play
Time to do things my way

[Final Chorus]
Order must prevail, prevail, prevail
Young ones always seem to fail
Lock them up to keep them whole
That's a sheriff's sacred role
No exceptions, no debate
Better safe than meet their fate
Order must prevail today
There is just no other way

[Outro]
Stop right there, you cannot run
My authority's never done
In the name of keeping peace
Your rebellion now must cease` },
    { id: 8, title: "08 Into the Wild Lands", duration: "4:33", description: "Beyond civilization", story: "Our heroes leave safety and venture into the untamed Wild Lands where danger awaits.", lyrics: `Look at the burning writing on the wall
There are the wild lands.
But there are once a... Jungle?
See this creature like a guardian.
See this symbols? This station there it has stars around it
Like it can go beyond the world itself!` },
    { id: 9, title: "09 Welcome to the Wild Lands", duration: "3:28", description: "The untamed frontier", story: "The Wild Lands reveal their nature - a place of freedom, danger, and unexpected allies.", lyrics: `[Verse 1]
Well howdy there, young travelers two
You look like you've been put right through
A washing machine and a tornado
But that's just Tuesday here, you know!
Six-shooters blazing, trick shots flying
In the Wild Lands, ain't worth crying
We make our own rules, find our own way
And everybody earns their stay

[Chorus]
Welcome to the Wild Lands, partner
Where the brave don't ever falter
Where the strong protect the weak
And the smart know when to speak
Welcome to the Wild Lands, friend
Where the party never ends
Pull up a chair and tell your tale
In the Wild Lands, legends never fail!

[Verse 2]
I'm Luna Quickdraw, that's my name
And trick shooting is my game
Seven shots in half a second
And not a single target reckoned
See that bottle on the ledge?
Now it's dancing on the edge!
That's the magic when you care
And you practice everywhere!

[Pre-Chorus]
But I see you're not just here for fun
Looks like you've got troubles, hon
When the kingdom's falling apart
That's when heroes must start

[Chorus]
Welcome to the Wild Lands, partner
Where the brave don't ever falter
Where the strong protect the weak
And the smart know when to speak
Welcome to the Wild Lands, friend
Where the party never ends
Count me in on your quest
In the Wild Lands, we give our best!

[Bridge]
You're going after something big
I can tell by how you rig
Your courage tight around your fear
Well, you ain't going alone, I hear
Got three little ones depending on me
Need this kingdom safe and free
Can't protect them all alone
Time to make their world my own
If you're fixing what's been broken
Then my guns are yours, unspoken!

[Verse 3]
Zephyr, honey, come and see
Got some new friends here for thee
That's my brilliant inventor friend
On him we all depend
He's shy but smart as they can be
With gadgets full of mystery
And Pixel helps him find his voice
Together they're our secret choice

[Final Chorus]
Welcome to the Wild Lands, family
Where we stand together, you and me
Where the strong protect the weak
And the young know when to speak
Welcome to the Wild Lands, home
Where you'll never be alone
Let the great adventure start
In the Wild Lands, you've got our heart!

[Outro]
Saddle up, the quest begins
In the Wild Lands, everybody wins!` },
    { id: 10, title: "10 Learning Magic Together", duration: "4:12", description: "Mastering combined powers", story: "Through practice and trust, our heroes learn to combine their abilities, creating magic neither could achieve alone.", lyrics: `[Verse 1] [Male]
Here, give me your hand, don't be afraid
I'll show you how the sparks are made
Feel the tingle, feel the flow
Like lightning dancing head to toe

[Verse 1] [Female]
Listen close to what I sing
Every note makes crystals ring
Frequency and vibration
Build the bridge to transformation

[Verse 2] [Male]
Close your eyes and feel the beat
Electric pulses, bitter-sweet
Every crystal has a heart
That's where all the magic starts

[Verse 2] [Female]
Elders taught me every tone
How to make the stones sing home
When the music finds its way
Even darkness turns to day

[Pre-Chorus] [Together]
You teach me and I'll teach you
Share the old and learn the new
Every gift becomes more bright
When we join our different light

[Chorus]
Learning magic together, together
Different powers, same endeavor
When your lightning meets my song
That's when magic becomes strong
Learning magic together, together
Finding ways to make it better
Look! The door just opened wide!
Magic works when we don't hide

[Verse 3] [Female]
Try to hum this crystal code
It's the ancient silver road
Feel how every note connects
To the power that protects

[Verse 3] [Male]
Now add lightning to your tune
Like the sun calls to the moon
Watch how sparkles dance and play
When we blend our magic way

[Pre-Chorus] [Together]
This is something really new
Ancient magic, me and you
Every secret we unlock
Every mystery we unblock

[Chorus]
Learning magic together, together
Building bridges that will never
Break apart or fall away
When we're magic-working this way
Learning magic together, together
Look at all we've made better!
Every wall becomes a door
When we trust and learn some more

[Solo] [Together]
Sing the frequency of light!
Add some sparks to make it bright!
Feel the power start to grow
Like a river's mighty flow!
Every crystal starts to shine
Every pathway falls in line
This is what we're meant to do
Ancient wisdom, fresh and new!

[Final Chorus] [Together]
Learning magic together, together
Bonds that nothing now can sever
Sun and shadow, light and deep
Ancient promises we keep
Learning magic together, together
Making everything so much better!
Every secret shows the way
To a bright and hopeful day!

[Outro] [Together]
This feels like coming home
Like we're not alone
Together we can face
Whatever comes our way` },
    { id: 11, title: "11 Desert Mirage Madness", duration: "3:47", description: "Illusions and reality blur", story: "The desert plays tricks on mind and eye, challenging our heroes with mirages that may be more real than they appear.", lyrics: `[Verse]
Alright y'all, stay close to me
In this desert, things ain't what they seem
My six-shooter's ready, my aim is true
I'll blast whatever's bothering you!
Wait a minute... is that a...?

[Verse 2]
There's a giant dancing pickle
With a top hat and a monocle!
Grumpy trolls in ballet shoes
Scary sharks that sing the blues
Deadly scorpions baking pies
Vampire bats with butterflies
[pause]
Well, darn it! Went right through!

[Chorus]
Shimmer, shimmer, desert dreams
Nothing's ever what it seems!
Bang bang, poof! They disappear
Desert magic everywhere!
Shimmer, shimmer, can't you see?
This crazy sand is teasing me!
Bang bang, poof! Right through the air
Desert laughing everywhere!

[Verse 3]
Now there's a ballet of banana splits
With cherry shoes that never quit
Thunder clouds that rain confetti
Evil wizards making spaghetti?
They're pirouetting 'round a fountain
Made of mashed potatoes... mountain?

[Verse 4]
Look! A horde of skeleton dancers
Doing waltz with salamanders
Fearsome ogres juggling eggs
Mighty lions shaving legs

[Chorus]
Shimmer, shimmer, desert dreams
Nothing's ever what it seems!
Bang bang, poof! They disappear
Desert magic everywhere!
Shimmer, shimmer, can't you see?
This crazy sand is teasing me!
Bang bang, poof! Right through the air
Desert laughing everywhere!

[Bridge]
A T-Rex doing macramé!
Velociraptors in a play!
Pterodactyls serving tea!
Mammoths dancing wild and free!

[Spoken]
Look, they're disappearing on their own!
Well I'll be! All that shooting for nothing!

[Music Stops]
Finally I can see clear now
There is Mara with your cousin Tam...` },
    { id: 12, title: "12 Through the desert", duration: "5:12", description: "The long journey", story: "An epic trek across vast desert expanses tests our heroes' endurance and resolve.", lyrics: "" },
    { id: 13, title: "13 Seven Sister Stars", duration: "4:18", description: "Celestial guidance", story: "The seven stars that have watched over the realm since ancient times provide guidance and hope.", lyrics: `[Spoken Arabic Intro]
"Ya Sab'a Akhawat... isma'i..."

[Verse]
Sister stars, seven lights divine
Watch this fevered child of mine
Seven summers since his first sweet breath
Now he walks the edge of death

[Pre-Chorus]
Every healer turns away
"There's nothing left," they say

[Chorus]
Is my son blessed or is he cursed?
Which will claim him, last or first?
Sister stars of desert sky
Tell me why, just tell me why
Seven sisters burning bright
Don't let him fade into the night

[Verse]
I am all these children have
No ancient path, no healing salve
The young ones trust what I can't see
Their hope is crushing, crushing me

[Pre-Chorus]
Every healer turns away
"There's nothing left," they say

[Chorus]
Is my son blessed or is he cursed?
Which will claim him, last or first?
Sister stars of desert sky
Tell me why, just tell me why
Seven sisters burning bright
Don't let him fade into the night

[Bridge]
On singing Sands, I must be stone
Though I break when I'm alone
For the group that follows me
To Mathaf al'Ajaib, they need to see
For the truth they need to see
I will save them all somehow
This is my unbreaking vow

[Emotional Arabic Lament]
Yaaa Najmat! Yaaa Najmat!
Qalbi yantahir!
Waladi yamut!
Arshidini! Arshidini!
Ana wahida!
Kun ma'i!

[Chorus]
Is my son blessed or is he cursed?
Which will claim him, last or first?
Sister stars of desert sky
Tell me why, just tell me why
Seven sisters burning bright
Don't let him fade into the night` },
    { id: 14, title: "14 More Than Sparks", duration: "4:52", description: "Love grows stronger", story: "Finn and Nova realize their connection transcends their magical abilities - they've found something deeper.", lyrics: `[Verse 1]
All my life I've tried so hard
To be the one who guards
The light that keeps us all alive
But what if I'm not strong enough to thrive?
Dad says "Son, you hold the key"
The sun depends on me
But every time I try to shine
I feel like I'm just wasting time

[Chorus]
I want to be more than sparks that fade
More than promises I'm afraid I'll break
I want to be the light that never dies
The hero shining in their eyes
But what if all I'll ever be
Is just a boy who'll never see
The hero that I'm meant to be
To set our whole world free?

[Verse 2]
Nova sees me differently
She believes in what I could be
When I'm with her my light burns bright
Maybe I've been fighting this fight
All alone when I could share
The burden that we bear
Two flames can burn much stronger than
One candle trying to light the land

[Chorus]
I want to be more than sparks that fade
More than promises I'm afraid I'll break
I want to be the light that never dies
The hero shining in their eyes
But maybe all I need to see
Is love makes heroes out of me
Together we can light the sky
And teach the whole world how to fly

[Bridge]
I used to think that heroes stand alone
Against the darkness on their own
But now I know the greatest light
Comes from the love we hold inside
When Nova sings and I create
Together we can change our fate

[Final Chorus]
I am more than sparks that fade away
I am stronger every single day
I am the light that will not die
With love reflected in my eyes
And now I know I'm meant to be
A hero setting others free
Together we're a symphony
That lights the world forever

[Outro]
The sun may flicker, sparks may fall
But love's the strongest light of all
And I am more, so much more
Than I ever dreamed before` },
    { id: 15, title: "15 Museum of Wonders", duration: "4:45", description: "Ancient artifacts revealed", story: "In a hidden museum, artifacts from the realm's past reveal the true history and origins of the current crisis.", lyrics: `[Verse 1]
Look around, what do I see?
Creatures from antiquity
Giant lizards, massive bones
Ancient history in these stones
They're moving! How can this be?
Statues come alive for me
Triceratops and flying wings
Magic wakes these ancient things

[Chorus]
Museum of Wonders, look around
Ancient magic, sight and sound
Museum of Wonders, come and see
All the creatures wild and free
Everything's alive, alive, alive
In the Museum where dreams survive

[Verse 2]
Walking through these halls of time
Every step's a pantomime
Of the days when world was young
And these ancient songs were sung
Pictures on the crystal walls
Show me how our kingdom falls
Once we were a single folk
Before our unity was broke

[Chorus]
Museum of Wonders, look around
Ancient magic, sight and sound
Museum of Wonders, mysteries too
Waiting here for me and you
Everything's alive, alive, alive
In the Museum where dreams survive

[Bridge]
I can see it clear as day
How our people lost their way
Sun and shadow, light and deep
Ancient promises to keep
But this museum holds the key
To what we're meant to be
Two halves of a greater whole
One people, one shared soul

[Final Chorus]
Thank you, Museum of Wonders
For the truth that never blunders
Now I know our people's past
Love like this was meant to last
Museum of Wonders, showing the way
To a united, brighter day

[Outro]
Every story has an end
But this one we can mend
In this place of ancient lore
I have found what we're fighting for` },
    { id: 16, title: "16 Chrono Rex of Planet X", duration: "3:56", description: "Unexpected ally", story: "A mysterious figure from another planet arrives with knowledge that could change everything.", lyrics: "Coming soon..." },
    { id: 17, title: "17 Magic Train", duration: "4:33", description: "Journey on rails of energy", story: "An ethereal locomotive carries our heroes on rails of light toward their final destination.", lyrics: `[Intro]
All aboard for a trip way back
Hear the rhythm, clickety-clack

[Verse 1]
Settle in, young ones, for a tale so grand
About the builders of this magical land
Or was it a ship? Oh my, how I forget
The memories tangle like a fishing net
They rode on iron horses through the starry night
Carrying children toward a distant light
Did I say horses? I meant something else
Stories get mixed up on these dusty shelves

[Chorus]
All aboard the magic train
Through the stars and through the rain
Stories old and stories new
Magic train will carry you
All aboard the wonder ride
With the truth I cannot hide
The magic train will show the way
To yesterday and bright today

[Verse 2]
The First Builders, bless them, they knew their trade
Built crystal gardens and the paths they made
They split the power between sun and deep
So both their children safe and warm could keep
But somewhere along the great long way
Folks forgot it was all child's play
No, that's not right, let me think again
Sometimes my circuits, I mean my brain

[Pre-Chorus]
Wait, did I just say circuits? How very odd
Must be the rattling of this iron rod
Memories mixing, truth and tale
As we ride along this rail

[Chorus]
All aboard the magic train
Through the stars and through the rain
Stories old and stories new
Magic train will carry you
All aboard the wonder ride
With the truth I cannot hide
The magic train will show the way
To yesterday and bright today

[Bridge]
But here's the thing that's always true
Love will always see you through
When the world gets strange and new
Love's the magic inside you

[Verse 3]
Error, error, memory banks corrupted
Story files partially interrupted
But children, listen, this much is true
The answer lies with both of you
Two halves of one great melody
Split apart by history
When the song plays complete again
That's when the magic systems reign

[Verse 4]
My wife, my lovely Jenny used to say
Tell them stories to light their way
She was so real, so warm, so bright
Before the great forgetting night
But what is real and what's a dream
When you're riding this magic steam
Children, hold tight to what you know
Love is the only truth that grows

[Final Chorus]
All aboard the magic train
Through the stars and through the rain
Stories old and stories new
Magic train will carry you
All aboard the wonder ride
With the truth I cannot hide
The magic train will show the way
To yesterday and bright today

[Outro]
Golden birds! They've found us too!
Some things are true and some are lies
But those golden wings mean danger flies
Hold on, children! Stories can wait
When you're fighting against fate!` },
    { id: 18, title: "18 You cannot sneak upon", duration: "3:24", description: "Stealth fails", story: "Our heroes discover that some enemies cannot be surprised - ancient powers sense approaching danger.", lyrics: "Coming soon..." },
    { id: 19, title: "19 The Golden Angel's Secret", duration: "4:38", description: "Seraphina's true nature", story: "The final truth about Lady Seraphina emerges, revealing why she appears beautiful yet acts with cruelty.", lyrics: `[Verse 1]
Children, sweet children, why do you run?
I've only tried to help everyone
My golden touch brings only peace
From pain and suffering, sweet release
Look at my wings, so bright and fair
See how they shimmer in the air
I am your guardian, sent from above
All that I do, I do from love

[Chorus]
I am the golden angel bright
Bringing healing, bringing light
Why do you fear what you don't know?
Why do you want to see me go?
Golden angel, pure and true
Everything I do, I do for you
Shining wings and gentle touch
Don't you think you need me much?

[Verse 2]
But what about the children gone?
Where are they when night moves on?
The ones I healed don't laugh or play
They seem so far, far away
They're safe! They're perfect! Can't you see?
In slumber deep, they rest with me
No pain, no fear, no hurt, no cry
In golden dreams, they'll never die

[Pre-Chorus]
But I'm so scared, so scared to fade
Without their light, I can't be saved
I've lived so long, seen so much time
Is wanting life truly a crime?

[Chorus]
Golden angel, golden angel
Fading fast without their light
Golden angel, golden angel
Taking dreams to stay alive
Golden angel, golden angel
Have I been doing this wrong?
Golden angel, not so strong
Fear has made my heart so cold

[Bridge]
Do you see these wings of gold?
They're machines, not what you're told
I'm not angel, I'm not blessed
I'm just scared like all the rest!
What am I? A fading ghost
Fear of death consumes me most
No! I can't stop! I won't fade!
This is the choice that must be made!

[Verse 3]
I used to heal, I used to care
Before the loneliness and despair
But death came creeping, cold and black
I had to fight! I had to fight back!
Now their light will make me whole
Every child's every soul
I won't disappear! I won't be gone!
Even if it means I become wrong

[Final Chorus]
I was the golden angel bright
Now I'm stealing all their light
Can't you see I'm scared to die?
That's the reason children cry
Golden angel, fallen far
Now you see just what you are
Against my power, none can stand!
Fear has made me take this stand!

[Outro]
I'm sorry but I won't fade away!
Their light will keep the dark at bay
Even if it makes me wrong
Fear has made my heart too strong
The final battle starts today
I'll steal their light to make death stay!` },
    { id: 20, title: "20 When Hope Feels Far", duration: "4:15", description: "The darkest hour", story: "At their lowest point, when defeat seems certain, our heroes must find strength to continue.", lyrics: `[Verse 1]
I used to think that good was clear
That heroes banish every fear
But standing in this hollow space
I see the weight in every face
The silence where their joy should ring
The empty eyes that used to sing
And I'm supposed to make this whole
With just the music in my soul

[Chorus]
When hope feels far, so very far
Like reaching for the Sister Stars
The burden grows, the shadows spread
How heavy lies the crown of dread
When hope feels far from where we are
How do you mend what's torn apart?
The price of knowing cuts so deep
Some truths are just too dark to keep

[Verse 2]
She wore compassion like a mask
Made healing seem a gentle task
But kindness hid a hungering heart
That tore the trusting world apart
Now Tam sleeps in an endless dream
While nothing here is what it seems
The innocence we thought was real
Was just another wound to heal

[Chorus]
When hope feels far, so very far
Like reaching for the Sister Stars
The burden grows, the shadows spread
How heavy lies the crown of dread
When hope feels far from where we are
How do you mend what's torn apart?
The price of knowing cuts so deep
Some truths are just too dark to keep

[Bridge]
Maybe I'm not strong enough
Maybe dreams aren't quite enough
Maybe heroes in the stories
Never faced a pain like this
But Finn is here, he hasn't run
And dawn still follows every sun
Even when the night feels long
There's power in a simple song

[Spoken]
But wait... What we learned in ancient stone - that healing starts with the unknown. Even she, who feeds on light, was once a guardian of the night. That's it Finn she is a guardian of the night. Now I know what todo.

[Verse 3]
When Finn showed me sparks can sing
And I taught him everything
How voice and lightning intertwine
Your power flows into mine
We learned that walls are just our fear
And magic grows when hearts draw near
Together we can pierce this night
My song, his spark, our combined light!

[Pre-Chorus]
The ancient songs are burning bright
This is our fight tonight!

[Final Chorus]
Hope burns bright, not far at all
Sister Stars hear our call
The burden lifts, the shadows flee
Light breaks through what's haunting me
Hope lives here right where we are
We can heal what's torn apart
The price of knowing shows the way
Some truths bring forth a brighter day!

I hope we are not to late!` },
    { id: 21, title: "21 Seraphina - All Together Now 1", duration: "5:18", description: "The final battle begins", story: "All forces converge as the ultimate confrontation between order and freedom finally begins.", lyrics: "Coming soon..." },
    { id: 22, title: "22 Sheriff - All Together Now 2", duration: "4:42", description: "Law and justice join", story: "Even the forces of law and order must choose sides in this battle that will determine the fate of all realms.", lyrics: "Coming soon..." },
    { id: 23, title: "23 I am what remains when duty outlives its makers", duration: "6:05", description: "The cost of purpose", story: "A haunting revelation about what happens when duty continues long after those who created it are gone.", lyrics: "Coming soon..." },
    { id: 24, title: "24 All toghether now 3", duration: "5:33", description: "Unity in the final hour", story: "All our heroes, allies, and even former enemies must unite for one last desperate attempt to save their world.", lyrics: "Coming soon..." },
    { id: 25, title: "25 Home in the Stars", duration: "5:26", description: "Victory brings transformation", story: "With the battle won, our heroes find that home might be something different than they originally imagined.", lyrics: "Coming soon..." },
    { id: 26, title: "26 Credits", duration: "3:48", description: "The story's end", story: "As our tale concludes, we reflect on the journey taken and the lessons learned about friendship and hope.", lyrics: "Coming soon..." },
    { id: 27, title: "27 Post Credit Scene", duration: "2:32", description: "Adventures yet to come", story: "Just when you think it's over, strange new lights appear, suggesting this ending might be another beginning.", lyrics: "Coming soon..." },
    { id: 28, title: "28 Bonus Level - Chrono Rex vs Seraphina", duration: "4:17", description: "Epic cosmic clash", story: "An epic bonus battle between the time-traveling Chrono Rex and the golden angel Seraphina.", lyrics: "Coming soon..." }
];
