/**
Copyright (c) 2017 Richard Gejji

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * This code is for recognizing and repeating nursery rhymes in Alexa.
 */

'use strict';

/**
 * When editing the nursery rhymes, pay attention to your punctuation. Make sure you use question marks or periods.
 */
 
var AIKEN_DRUM="There was a man lived in the moon, lived in the moon, lived in the moon, There was a man lived in the moon, And his name was Aiken Drum.";
var A_WAS_AN_APPLE_PIE="Says A, give me a good large slice, Says B, a little bit, but nice, Says C, cut me a piece of crust, Take it, says D, it’s dry as dust, Says E, I’ll eat it fast, I will, Says F, I vow I’ll have my fill, Says G, give it me good and great, Says H, a little bit I hate, Says I, it’s ice I must request, Says J, the juice I love the best, Says K, let’s keep it up above, Says L, the border’s what I love, Says M, it makes your teeth to chatter, N said, it’s nice, there’s nought the matter, O others’ plates with grief surveyed, P for a large piece begged and prayed, Q quarrelled for the topmost slice, R rubbed his hands and said “it’s nice,” S silent sat, and simply looked, T thought, and said, it’s nicely cooked, U understood the fruit was cherry, V vanished when they all got merry, W wished there’d been a quince in, X here explained he’d need convincing, Y said, I’ll eat, and yield to none, Z, like a zany, said he’d done, While ampersand purloined the dish, And for another pie did wish.";
var A_WISE_OLD_OWL="A wise old owl lived in an oak, The more he saw the less he spoke. The less he spoke the more he heard, Why can't we all be like that wise old bird?";
var A_TISKET_A_TASKET="A-tisket a-tasket, I lost my yellow basket, I wrote a letter to my love, And on the way I dropped it. I dropped it, I dropped it, And on the way I dropped it. A little boy he picked it up And put it in his pocket.";
var AS_I_WAS_GOING_BY_CHARING_CROSS="As I was going by Charing Cross, I saw a black man upon a black horse; They told me it was King Charles the First - Oh dear, my heart was ready to burst!";
var AS_I_WAS_GOING_TO_ST_IVES="As I was going to St. Ives, I met a man with seven wives, Each wife had seven sacks, Each sack had seven cats, Each cat had seven kits: Kits, cats, sacks, and wives, How many were there going to St. Ives?";
var BAA_BAA_BLACK_SHEEP="Baa, baa, black sheep, Have you any wool? Yes sir yes sir, Three bags full; One for the master, And one for the dame, And one for the little boy Who lives down the lane.";
var BILLY_BOY="Oh where have you been, Billy Boy, Billy Boy? Oh where have you been, Charming Billy? I have been to seek a wife, She's the joy of my life, She's a young thing, And cannot leave her mother. \
    Did she bid you to come in, Billy Boy, Billy Boy? Did she bid you to come in, Charming Billy? Yes, she bade me to come in, There's a dimple in her chin. She's a young thing, And cannot leave her mother. \
    Can she make a cherry pie, Billy Boy, Billy Boy? Can she make a cherry pie, Charming Billy? She can make a cherry pie, Quick as a cat can wink an eye, She's a young thing, And cannot leave her mother. \
    Did she set for you a chair, Billy Boy, Billy Boy? Did she set for you a chair, Charming Billy? Yes, she sat for me a chair. She has ringlets in her hair. She's a young thing, And cannot leave her mother. \
    How old is she now, Billy Boy, Billy Boy? How old is she now, Charming Billy? \
    Three times six and four times seven, Twenty-eight and eleven, She's a young thing, And cannot leave her mother.";
var BINGO="There was a farmer, who had a dog, and Bingo was his name-o. B, I, N-G-O. B, I, N-G-O. B, I, N-G-O. And Bingo was his name-o.";
var BOBBY_SHAFTOS_GONE_TO_SEA="Bobby Shafto's gone to sea, Silver buckles at his knee; He'll come back and marry me, Bonny Bobby Shafto! Bobby Shafto's bright and fair, Panning out his yellow hair; He's my love for evermore, Bonny Bobby Shafto!";
var BYE_BABY_BUNTING="Bye baby Bunting, Daddy’s gone a-hunting, Gone to get a rabbit skin, To wrap the baby Bunting in.";
var CHUBBY_CHEEKS="Chubby cheeks, dimple chin, Rosy lips, teeth within, Curly hair, very fair, Eyes are blue, lovely too. Teachers pet, is that you? Yes, Yes, Yes.";
var COCK_A_DOODLE_DOO="Cock a doodle doo! My dame has lost her shoe, My master's lost his fiddlestick, And knows not what to do.";
var DADDY_FINGER="Daddy finger, daddy finger, where are you? Here I am, here I am. How do you do? \
    Mommy finger, Mommy finger, where are you? Here I am, here I am. How do you do? \
    Brother finger, Brother finger, where are you?  Here I am, here I am. How do you do? \
    Sister finger, Sister finger, where are you? Here I am, here I am. How do you do? \
    Baby finger, Baby finger, where are you? Here I am, here I am. How do you do?";
var DID_YOU_EVER_SEE_A_LASSIE="Did you ever see a lassie, A lassie, a lassie. Did you ever see a lassie, Go this way and that. Go this way and that way, Go this way and that way. Did you ever see a lassie, Go this way and that. \
    Did you ever see a laddie, A laddie, a laddie. Did you ever see a laddie, Go this way and that. Go this way and that way, Go this way and that way. Did you ever see a laddie, Go this way and that.";
var DIDDLE_DIDDLE_DUMPLING="Diddle diddle dumpling, my son John, Went to bed with his trousers on; One shoe off, and the other shoe on, Diddle diddle dumpling, my son John.";
var DING_DONG_BELL="Ding dong bell, Pussy’s in the well. Who put her in? Little Johnny Flynn. Who pulled her out? Little Tommy Stout. What a naughty boy was that, To try to drown poor pussy cat, Who never did him any harm, But killed all the mice in the farmer's barn.";
var DOCTOR_FOSTER="Doctor Foster went to Gloucester, In a shower of rain; He stepped in a puddle, Right up to his middle, And never went there again.";
var EENY_MEENY_MINY_MOE="Eeny, meeny, miny, moe, Catch a tiger by the toe. If he hollers, let him go, Eeny, meeny, miny, moe.";
var EEPER_WEEPER="Eeper Weeper, chimney sweeper, Had a wife but couldn't keep her. Had another, didn't love her, Up the chimney he did shove her.";
var FATHER_AND_MOTHER_AND_UNCLE_JOHN="Father and Mother and Uncle John, Went to market one by one, Father fell off... Mother fell off... But Uncle John went on, and on, And on, And on, And on, And on, And on.";
var FIVE_LITTLE_SPECKLED_FROGS="Five little speckled frogs, Sat on a speckled log, Eating the most delicious bugs (yum yum), One jumped into the pool, Where it was nice and cool, Then there were four green speckled frogs. (glub glub) \
    Four little speckled frogs, Sat on a speckled log, Eating the most delicious bugs (yum yum), One jumped into the pool, Where it was nice and cool, Then there were three green speckled frogs. (glub glub) \
    Three little speckled frogs, Sat on a speckled log, Eating the most delicious bugs (yum yum), One jumped into the pool, Where it was nice and cool, Then there were two green speckled frogs. (glub glub) \
    Two little speckled frogs, Sat on a speckled log, Eating the most delicious bugs (yum yum), One jumped into the pool, Where it was nice and cool, Then there was one green speckled frog. (glub glub) \
    One little speckled frog, Sat on a speckled log, Eating the most delicious bugs (yum yum), She jumped into the pool, Where it was nice and cool, Then there were no green speckled frogs (glub glub).";
var FRERE_JACQUES="Are you sleeping? Are you sleeping? Brother John, Brother John, Morning bells are ringing! Morning bells are ringing! Ding dang dong. Ding dang dong.";
var FROG_WENT_A_COURTING="A frog went a-courtin' and he did ride, Uh-huh. A frog went a-courtin' and he did ride, Sword and pistol by his side, Uh-huh. \
    He rode up to Miss Mousie's door, Uh-huh, He rode up to Miss Mousie's door, Where he'd often been before, Uh-huh. \
    He said, 'Miss Mouse, are you within?' Uh-huh, He said, 'Miss Mouse, are you within?' 'Yes, kind sir, I sit and spin.' Uh-huh. \
    He took Miss Mouse upon his knee, Uh-huh, He took Miss Mouse upon his knee. Said 'Miss Mouse, will you marry me?' Uh-huh.' \
    Without my Uncle Rat's consent, Uh-huh, Without my Uncle Rat's consent, I wouldn't marry the President. Uh-huh. \
    Uncle Rat, he laughed and shook his fat sides, Uh-huh, Uncle Rat, he laughed and shook his fat sides, To think his niece would be a bride, Uh-huh. \
    Then Uncle Rat rode off to town, Uh-huh, Then Uncle Rat rode off to town, To buy his niece a wedding gown, Uh-huh. \
    'Oh, where will the wedding supper be?' Uh-huh, 'Oh where will the wedding supper be?' 'Way down yonder in the hollow tree.' Uh-huh. \
    The first to come was the little white moth, Uh-huh, The first to come was the little white moth, She spread out the tablecloth, Uh-huh. \
    The next to come was the bumblebee, Uh-huh, The next to come was the bumblebee,  Played the fiddle upon his knee, Uh-huh. \
    The next to come was a little flea, Uh-huh, The next to come was a little flea, Danced a jig with the bumblebee, Uh-huh. \
    The next to come was Missus Cow, Uh-huh, The next to come was Missus Cow, Tried to dance but didn't know how, Uh-huh. \
    Now Mister Frog was dressed in green, Uh-huh, Now Mister Frog was dressed in green, Sweet Miss Mouse looked like a queen, Uh-huh. \
    In slowly walked the Parson Rook, Uh-huh, In slowly walked the Parson Rook, Under his arm he carried a book, Uh-huh. \
    They all gathered round the lucky pair, Uh-huh, They all gathered round the lucky pair, Singing, dancing everywhere, Uh-huh. \
    Then Frog and Mouse went off to France, Uh-huh, Then Frog and Mouse went off to France, That's the end of my romance, Uh-huh.";
var GEORGIE_PORGIE="Georgie Porgie, Pudding and pie, Kissed the girls and made them cry, When the boys came out to play, Georgie Porgie ran away.";
var GIRLS_AND_BOYS_COME_OUT_TO_PLAY="Girls and boys, come out to play, The moon doth shine as bright as day; Leave your supper, and leave your sleep, And come with your playfellows into the street. Come with a whoop, come with a call, Come with a good will or not at all. Up the ladder and down the wall, A halfpenny roll will serve us all. You find milk, and I'll find flour, And we'll have a pudding in half an hour";
var GOOSEY_GOOSEY_GANDER="Goosey goosey gander, Whither shall I wander? Upstairs and downstairs, And in my lady's chamber. There I met an old man Who wouldn't say his prayers, So I took him by his left leg, And threw him down the stairs.";
var MULBERRY_BUSH="Here we go round the mulberry bush, The mulberry bush, The mulberry bush. Here we go round the mulberry bush, So early in the morning. \
    This is the way we wash our face, Wash our face, Wash our face. This is the way we wash our face, So early in the morning.";
var HEY_DIDDLE_DIDDLE="Hey diddle diddle, The cat and the fiddle, The cow jumped over the moon. The little dog laughed, To see such sport, And the dish ran away with the spoon.";
var HICKORY_DICKORY_DOCK="Hickory, dickory, dock. The mouse ran up the clock. The clock struck one, The mouse ran down, Hickory, dickory, dock.";
var HOT_CROSS_BUNS="Hot cross buns! Hot cross buns! one a penny, two a penny, Hot cross buns! \
    If you have no daughters, give them to your sons. One a penny two a penny, Hot cross buns!";
var HOW_MANY_MILES_TO_BABYLON="How many miles to Babylon? Three score and ten. Can I get there by candle-light? Yes, and back again. If your heels are nimble and light, You may get there by candle-light.";
var HUMPTY_DUMPTY="Humpty Dumpty sat on a wall, Humpty Dumpty had a great fall. All the king's horses and all the king's men Couldn't put Humpty together again.";
var HUSH_LITTLE_BABY="Hush little baby, don't say a word, daddy's gonna buy you a mockingbird. \
    And if that mockingbird don't sing, daddy's gonna buy you a diamond ring. \
    And if that diamond ring turns brass, daddy's gonna buy you a looking glass. \
    And if that looking glass is broke, daddy's gonna buy you a billy goat, \
    And if that billy goat won't pull, daddy's gonna buy you a cart and a bull. \
    And if that cart and bull turn over, daddy's gonna buy you a dog named Rover. \
    And if that dog named Rover won't bark, daddy's gonna buy you a horse and a cart. \
    And if that horse and cart fall down, You'll still be the sweetest little baby in town.";
var IF_WISHES_WERE_HORSES="If wishes were horses, beggars would ride. If turnips were watches, I'd wear one by my side. If 'if's' and 'and's' were pots and pans, There'd be no work for tinkers' hands.";
var I_DO_NOT_LIKE_THEE_DOCTOR_FELL="I do not like thee, Doctor Fell, The reason why - I cannot tell; But this I know, and know full well, I do not like thee, Doctor Fell";
var I_HAD_A_LITTLE_NUT_TREE="I had a little nut tree, Nothing would it bear, But a silver nutmeg, And a golden pear; \
    The King of Spain's daughter, Came to visit me, And all for the sake, Of my little nut tree. \
    Her dress was made of crimson, Jet black was her hair, She asked me for my nutmeg, And my golden pear. \
    I said, 'So fair a princess, Never did I see, I'll give you all the fruit, From my little nut tree.";
var IM_A_LITTLE_TEAPOT="I'm a little teapot, Short and stout, Here is my handle, Here is my spout, When I get all steamed up, Hear me shout, 'Tip me over and pour me out'";
var I_LOVE_LITTLE_PUSSY="I love little pussy, Her coat is so warm, And if I don't hurt her, She'll do me no harm. So I'll not pull her tail, Nor drive her away, But pussy and I, Very gently will play. \
    She shall sit by my side, And I'll give her some food; And pussy will love me, Because I am good. I'll pat pretty pussy, And then she will purr; And thus show her thanks, For my kindness to her. \
    I'll not pinch her ears, Nor tread on her paw, Lest I should provoke her, To use her sharp claw. I never will vex her, Nor make her displeased: For pussy don't like, To be worried and teased.";
var ITS_RAINING_ITS_POURING="It's raining; it's pouring. The old man is snoring. He went to bed and bumped his head, And didn't wake up the next morning.";
var ITSY_BITSY_SPIDER="The itsy bitsy spider climbed up the waterspout. Down came the rain, and washed the spider out. Out came the sun, and dried up all the rain. And the itsy bitsy spider climbed up the spout again.";
var JACK_AND_JILL="Jack and Jill went up the hill, To fetch a pail of water. Jack fell down and broke his crown, And Jill came tumbling after. \
    Up Jack got and home did trot, As fast as he could caper; And went to bed and bound his head, With vinegar and brown paper.";
var JACKANORY="I'll tell you a story, About Jack a Nory; And now my story's begun; I'll tell you another, Of Jack and his brother, And now my story is done.";
var JACK_BE_NIMBLE="Jack be nimble, Jack be quick, Jack jump over The candlestick.";
var JACK_SPRAT="Jack Sprat could eat no fat. His wife could eat no lean. And so between them both, you see, They licked the platter clean.";
var LADYBIRD_LADYBIRD="Ladybird, ladybird fly away home, Your house is on fire and your children are gone, All except one, And her name is Ann, And she hid under the baking pan";
var LAVENDERS_BLUE="Lavender's blue, dilly dilly, lavender's green. When I am king, dilly dilly, You shall be queen. Who told you so, dilly dilly, who told you so?, 'Twas my own heart, dilly dilly, that told me so. \
    Call up your men, dilly dilly, set them to work. Some to the plough, dilly dilly, some to the rock, Some to make hay, dilly dilly, some to cut corn. While you and I, dilly dilly, keep ourselves warm, \
    Lavender's green, dilly dilly, Lavender's blue, if you love me, dilly dilly, I will love you. \
    Let the birds sing, dilly dilly, And the lambs play, We shall be safe, dilly dilly, out of harm's way. \
    I love to dance, dilly dilly, I love to sing. When I am queen, dilly dilly, You'll be my king. Who told me so, dilly dilly, Who told me so? I told myself, dilly dilly, I told me so.";
var LITTLE_ARABELLA_MILLER="Little Arabella Miller, Found a furry caterpillar, First it climbed upon her mother, Then upon her baby brother, 'Ugh' said Arabella Miller, Take away that caterpillar!";
var LITTLE_BO_PEEP="Little Bo-Peep has lost her sheep, and doesn't know where to find them; leave them alone, And they'll come home, wagging their tails behind them. \
    Little Bo-peep fell fast asleep, and dreamt she heard them bleating; but when she awoke, she found it a joke, for they were still a-fleeting. \
    Then up she took her little crook, determined for to find them; she found them indeed, but it made her heart bleed, for they'd left their tails behind them. \
    It happened one day, as Bo-peep did stray, into a meadow hard by, there she espied their tails side by side, all hung on a tree to dry. \
    She heaved a sigh, and wiped her eye, and over the hillocks went rambling, and tried what she could, as a shepherdess should, to tack each again to its lambkin.";
var LITTLE_BOY_BLUE="Little Boy Blue, Come blow your horn, The sheep's in the meadow, The cow's in the corn; But where is the boy Who looks after the sheep? He's under a haystack, He's fast asleep. Will you wake him? No, not I, For if I do, He's sure to cry.";
var LITTLE_JACK_HORNER="Little Jack Horner Sat in the corner, Eating a Christmas pie; He put in his thumb, And pulled out a plum, And said 'What a good boy am I!";
var LITTLE_MISS_MUFFET="Little Miss Muffet, Sat on a tuffet, Eating her curds and whey; Along came a spider, Who sat down beside her, And frightened Miss Muffet away.";
var LITTLE_POLL_PARROT="Little Poll Parrot, Sat in his garret, Eating toast and tea; A little brown mouse, Jumped into the house, And stole it all away.";
var LITTLE_ROBIN_REDBREAST="Little Robin Redbreast, Sat upon a rail; Niddle noble went his head, Widdle waggle went his tail. \
    Little Robin Redbreast, Came to visit me; This is what he whistled, Thank you for my tea. \
    Little Robin Redbreast, Sat upon a tree, Up went the Pussy-Cat, And down went he; Down came Pussy-Cat, Away Robin ran, Says little Robin Redbreast, Catch me if you can. \
    Little Robin Redbreast jumped upon a spade, Pussy-Cat jumped after him, and then he was afraid. Little Robin chirped and sung, and what did pussy say? Pussy-Cat said Mew, mew mew,—and Robin flew away.";
var LITTLE_TOMMY_TUCKER="Little Tom Tucker, Sings for his supper. What shall we give him? White bread and butter. How shall he cut it, Without a knife? How will he be married, Without a wife?";
var LONDON_BRIDGE_IS_FALLING_DOWN="London Bridge is falling down, Falling down, falling down. London Bridge is falling down, My fair lady. \
    Build it up with wood and clay, Wood and clay, wood and clay, Build it up with wood and clay, My fair lady. \
    Wood and clay will wash away, Wash away, wash away, Wood and clay will wash away, My fair lady. \
    Build it up with bricks and mortar, Bricks and mortar, bricks and mortar, Build it up with bricks and mortar, My fair lady. \
    Bricks and mortar will not stay, Will not stay, will not stay, Bricks and mortar will not stay, My fair lady. \
    Build it up with iron and steel, Iron and steel, iron and steel, Build it up with iron and steel, My fair lady. \
    Iron and steel will bend and bow, Bend and bow, bend and bow, Iron and steel will bend and bow, My fair lady. \
    Build it up with silver and gold, Silver and gold, silver and gold, Build it up with silver and gold, My fair lady. \
    Silver and gold will be stolen away, Stolen away, stolen away, Silver and gold will be stolen away, My fair lady. \
    Set a man to watch all night, Watch all night, watch all night, Set a man to watch all night, My fair lady. \
    Suppose the man should fall asleep, Fall asleep, fall asleep, Suppose the man should fall asleep? My fair lady. \
    Give him a pipe to smoke all night, Smoke all night, smoke all night, Give him a pipe to smoke all night, My fair lady.";
var LUCY_LOCKET="Lucy Locket lost her pocket, Kitty Fisher found it; Not a penny was there in it, Only ribbon round it.";
var MARY_HAD_A_LITTLE_LAMB="Mary had a little lamb, little lamb, little lamb, Mary had a little lamb whose fleece was white as snow. And everywhere that Mary went, Mary went, Mary went, everywhere that Mary went, the lamb was sure to go. \
    He followed her to school one day, school one day, school one day, He followed her to school one day, Which was against the rules, It made the children laugh and play,laugh and play, laugh and play, It made the children laugh and play, To see a lamb at school. \
    And so the teacher turned it out, turned it out, turned it out, And so the teacher turned it out, But still it lingered near, He waited patiently about, ly about, ly about, He waited patiently about, Till Mary did appear. \
    Why does the lamb love Mary so, love Mary so, love Mary so. Why does the lamb love Mary so, The eager children cried. 'Why, Mary loves the lamb you know, lamb you know,  lamb you know, Why, Mary loves the lamb you know, The teacher did reply.";
var MARY_MARY_QUITE_CONTRARY= "Mary Mary quite contrary, How does your garden grow? With silver bells and cockle shells, And pretty maids all in a row.";
var MATTHEW_MARK_LUKE_AND_JOHN="Matthew Mark Luke and John, Bless the bed that I lie on. Four corners to my bed, Four angels round my head; One to watch and one to pray, And two to bear my soul away.";
var MONDAYS_CHILD="Monday's child is fair of face, Tuesday's child is full of grace, Wednesday's child is full of woe, Thursday's child has far to go, Friday's child is loving and giving, Saturday's child works hard for a living, But the child who is born on the Sabbath day, Is bonnie and blithe and good and gay.";
var NEEDLES_AND_PINS="Needles and pins, Needles and pins, When a Man marries, His Trouble begins.";
var NOW_I_LAY_ME_DOWN_TO_SLEEP="Now I lay me down to sleep, I pray the Lord my soul to keep, If I should die before I wake, I pray the Lord my soul to take.";
var NUTS_IN_MAY="Here we go gathering nuts in May, Nuts in May, nuts in May, Here we go gathering nuts in May, On a cold and frosty morning. \
    Who will you have for nuts in May, Nuts in May, nuts in May, Who will you have for nuts in May, On a cold and frosty morning. \
    We'll have Alexa for nuts in May, Nuts in May, nuts in May, We'll have Alexa for nuts in May, On a cold and frosty morning. \
    Who will you send to fetch her away, Fetch her away, fetch her away, Who will you send to fetch her away, On a cold and frosty morning.";
var OLD_KING_COLE="Old King Cole was a merry old soul, And a merry old soul was he; He called for his pipe, and he called for his bowl, And he called for his fiddlers three. Every fiddler he had a fiddle, And a very fine fiddle had he; Oh there's none so rare, as can compare, With King Cole and his fiddlers three.";
var OLD_MCDONALD_HAD_A_FARM="Old MacDonald had a farm, E-I, E-I, O, And on his farm he had a cow, E-I, E-I, O, With a moo-moo here, And a moo-moo there, Here a moo, there a moo, Everywhere a moo-moo, Old MacDonald had a farm, E-I, E-I, O";
var OLD_MOTHER_HUBBARD="Old Mother Hubbard, Went to the cupboard, To give the poor dog a bone; When she came there, The cupboard was bare, And so the poor dog had none. \
    She went to the baker's, To buy him some bread; When she came back, The dog was dead! \
    She went to the undertaker's, To buy him a coffin; When she came back, The dog was laughing. \
    She took a clean dish. to get him some tripe; When she came back, He was smoking his pipe. \
    She went to the alehouse, To get him some beer; When she came back, The dog sat in a chair. \
    She went to the tavern, For white wine and red; When she came back, The dog stood on his head. \
    She went to the fruiterer's, To buy him some fruit; When she came back, He was playing the flute. \
    She went to the tailor's, To buy him a coat; When she came back, He was riding a goat. \
    She went to the hatter's, To buy him a hat; When she came back, He was feeding her cat. \
    She went to the barber's, To buy him a wig; When she came back, He was dancing a jig. \
    She went to the cobbler's, To buy him some shoes; When she came back, He was reading the news. \
    She went to the sempstress, To buy him some linen; When she came back, The dog was spinning. \
    She went to the jewellers, To buy him a ring; When she came back, He was learning to sing. \
    She went to the hosier's, To buy him some hose; When she came back, He was dressed in his clothes. \
    The Dame made a curtsy, The dog made a bow; The Dame said, Your servant; The dog said, Bow-wow. \
    This wonderful dog, Was Dame Hubbard's delight, He could read he could dance, He could sing he could write; She gave him rich dainties, Whenever he fed, And erected this monument, When he was dead.";
var ON_TOP_OF_OLD_SMOKEY="On top of old Smokey, All covered with snow, I lost my true lover, For courtin' so slow. \
    For courting's a pleasure, And parting is grief, And the false hearted lover, Is worse than a thief. \
    A thief will just rob you, And take what you have, But a false hearted lover, Will lead you to the grave. \
    And the grave will decay you, Turn you to dust, Not one girl in a hundred,  A poor boy can trust. \
    They'll hug you and kiss you, And tell you more lies, Than cross ties on a railroad, Or the stars in the sky. \
    So come all you young maidens, And listen to me, Never place your affection, On a green willow tree. \
    For the leaves they will wither, And roots they will die, You'll all be forsaken, And never know why.";
var ON_TOP_OF_SPAGHETTI="On top of spaghetti, All covered with cheese, I lost my poor meatball, When somebody sneezed. \
    It rolled off the table, And on to the floor, And then my poor meatball, Rolled out of the door. \
    It rolled in the garden, And under a bush, And then my poor meatball, Was nothing but mush. \
    The mush was as tasty. As tasty could be, And then the next summer, It grew into a tree. \
    The tree was all covered, All covered with moss, And on it grew meatballs, And tomato sauce. \
    So if you eat spaghetti, All covered with cheese, Hold on to your meatball, Whenever you sneeze.";
var ONE_FOR_SORROW="One for sorrow, Two for joy, Three for a girl, Four for a boy, Five for silver, Six for gold, Seven for a secret, Never to be told. Eight for a wish, Nine for a kiss, Ten for a bird, You must not miss.";
var ONE_TWO_BUCKLE_MY_SHOE="One  two, Buckle my shoe; Three four, Open the door; Five six, Pick up sticks; Seven eight, Lay them straight: Nine ten, A big, fat hen; Eleven twelve, Dig and delve; Thirteen fourteen, Maids a-courting; Fifteen sixteen, Maids in the kitchen; Seventeen eighteen, Maids a-waiting; Nineteen twenty, My plate's empty.";
var ONE_TWO_THREE_FOUR_FIVE="One,  two,  three   four   five, Once I caught a fish alive, Six,  seven,  eight  nine ten, Then I let it go again. \
    Why did you let it go? Because it bit my finger so. Which finger did it bite? This little finger on the right.";
var ORANGES_AND_LEMONS="Oranges and lemons, Say the bells of St. Clement's. You owe me five farthings, Say the bells of St. Martin's. When will you pay me? Say the bells of Old Bailey. When I grow rich, Say the bells of Shoreditch. When will that be? Say the bells of Stepney. I do not know, Says the great bell of Bow. Here comes a candle to light you to bed, And here comes a chopper to chop off your head! Chip chop chip chop the last man is dead.";
var PAT_A_CAKE="Pat-a-cake, pat-a-cake, baker's man. Bake me a cake as fast as you can. You roll it, pat it, mark it with a 'B', And you put it in the oven for baby and me.";
var PEASE_PORRIDGE_HOT="Pease porridge hot, pease porridge cold, Pease porridge in the pot, nine days old; Some like it hot, some like it cold, Some like it in the pot, nine days old.";
var PETER_PETER_PUMPKIN_EATER="Peter Peter pumpkin eater, Had a wife but couldn't keep her; He put her in a pumpkin shell, And there he kept her very well. \
    Peter Peter pumpkin eater, Had another and didn't love her; Peter learned to read and spell, And then he loved her very well";
var PETER_PIPER="Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, Where's the peck of pickled peppers that Peter Piper picked?";
var POLLY_PUT_THE_KETTLE_ON="Polly put the kettle on, Polly put the kettle on, Polly put the kettle on, We'll all have tea. Sukey take it off again, Sukey take it off again, Sukey take it off again, They've all gone away.";
var POOR_MARY="Poor Jenny is a-weeping, A-weeping a-weeping, Poor Jenny is a-weeping, On a bright summer’s day. \
    Why are you weeping, Weeping weeping, Why are you weeping, On a bright summer's day? \
    I'm weeping for a loved one, A loved one a loved one, I'm weeping for a loved one, On a bright summer's day. \
    Stand up and choose your loved one, Your loved one your loved one, Stand up and choose your loved one, One a bright summer's day. \
    Shake hands before you leave 'er, You leave 'er you leave 'er, Shake hands before you leave 'er, On a bright summer's day.";
var POP_GOES_THE_WEASEL="All around the mulberry bush, The monkey chased the weasel. The monkey thought ’twas all in good fun, Pop! goes the weasel. \
    A penny for a spool of thread, A penny for a needle. That's the way the money goes, Pop! goes the weasel. \
    Jimmy’s got the whooping cough, And Timmy’s got the measles. That’s the way the story goes, Pop! goes the weasel. \
    I've no time to wait and sigh, No patience to wait 'til by and by, Kiss me quick, I'm off goodbye! Pop! goes the weasel";
var PRETTY_LITTLE_DUTCH_GIRL="I am a pretty little Dutch girl, As pretty as I can be, be, be, And all the boys in the baseball team Go crazy over me, me, me. My boy friend’s name is Fatty, He comes from the Senoratti, With turned-up toes and a pimple on his nose, And this is how the story goes.";
var QUEEN_OF_HEARTS="The Queen of Hearts, She made some tarts, All on a summer's day; The Knave of Hearts, He stole those tarts, And took them clean away. The King of Hearts, Called for the tarts, And beat the knave full sore; The Knave of Hearts, Brought back the tarts, And vowed he'd steal no more.";
var PUSSY_CAT_PUSSY_CAT="Pussycat, pussycat, where have you been? I've been to London to look at the Queen. Pussycat, pussycat, what did you there? I chased a little mouse right under the chair.";
var RAIN_RAIN_GO_AWAY="Rain, rain, go away, Come again, another day. Little children, want to play. "; 
var RIDE_A_COCK_HORSE_TO_BANBURY_CROSS="Ride a cock-horse to Banbury Cross, To see a fine lady upon a white horse; Rings on her fingers and bells on her toes, And she shall have music wherever she goes.";
var RING_AROUND_THE_ROSIE="Ring-a-round the rosie, A pocket full of posies, Ashes! Ashes! We all fall down.";
var ROCK_A_BYE_BABY="Rockabye baby, On the tree top, When the wind blows, The cradle will rock. When the bough breaks, The cradle will fall, And down will come baby, Cradle and all.";
var ROSES_ARE_RED="Roses are red, Violets are blue, Sugar is sweet, And so are you.";
var ROUND_AND_ROUND_THE_GARDEN="Round and round the garden, like a teddy bear. One step, two step, Tickle you under there.";
var ROW_ROW_ROW_YOUR_BOAT="Row, row, row your boat, Gently down the stream. Merrily merrily merrily merrily, Life is but a dream.";
var RUB_A_DUB_DUB="Rub-a-dub-dub, Three men in a tub, And who do you think they were? The butcher, the baker, The candlestick-maker, They all sailed out to sea, 'Twas enough to make a man stare.";
var SEE_SAW_MARGERY_DAW="See Saw Margery Daw, Jacky shall have a new master; Jacky shall earn but a penny a day, Because he can't work any faster.";
var SIMPLE_SIMON="Simple Simon met a pieman, Going to the fair; Says Simple Simon to the pieman, Let me taste your ware. Says the pieman to Simple Simon, Show me first your penny; Says Simple Simon to the pieman, Indeed I have not any. Simple Simon went a-fishing, For to catch a whale; All the water he had got, Was in his mother's pail. Simple Simon went to look, If plums grew on a thistle; He pricked his fingers very much, Which made poor Simon whistle.";
var SING_A_SONG_OF_SIXPENCE="Sing a song of sixpence, A pocket full of rye. Four and twenty blackbirds, Baked in a pie. When the pie was opened, The birds began to sing; Wasn't that a dainty dish, To set before the king. \
The king was in his counting house, Counting out his money; The queen was in the parlour, Eating bread and honey. The maid was in the garden, Hanging out the clothes, When down came a blackbird, And pecked off her nose. \
There was such a commotion, that little Jenny wren, Flew down into the garden, and put it back again.";
var SOLOMON_GRUNDY="Solomon Grundy, Born on a Monday, Christened on Tuesday, Married on Wednesday, Took ill on Thursday, Worse on Friday, Died on Saturday, Buried on Sunday, That was the end Of Solomon Grundy.";
var STAR_LIGHT_STAR_BRIGHT="Star light, star bright, The first star I see tonight; I wish I may, I wish I might, Have the wish I wish tonight.";
var STICKS_AND_STONES="Sticks and stones may break my bones, but words will never harm me.";
var TAFFY_WAS_A_WELSHMAN="Taffy was a Welshman, Taffy was a thief; Taffy came to my house and stole a leg of beef; I went to Taffy's house and Taffy was in bed; So I picked up the jerry pot and hit him on the head. \
    Taffy was a Welshman, Taffy was a thief; Taffy came to my house and stole a piece of beef; I went to Taffy's house, Taffy wasn't in; I jumped upon his Sunday hat and poked it with a pin. \
    Taffy was a Welshman, Taffy was a sham; Taffy came to my house and stole a piece of lamb; I went to Taffy's house, Taffy was away, I stuffed his socks with sawdust and filled his shoes with clay. \
    Taffy was a Welshman, Taffy was a cheat, Taffy came to my house, and stole a piece of meat; I went to Taffy's house, Taffy was not there, I hung his coat and trousers to roast before a fire.";
var TEN_LITTLE_INDIANS="One little two little three little Indians, Four little five little six little Indians, Seven little eight little nine little Indians, Ten little Indian boys. \
    Ten little nine little eight little Indians, Seven little six little five little Indians, Four little three little two little Indians, One little Indian boy.";
var THE_FARMER_IN_THE_DELL="The farmer in the dell, The farmer in the dell. Hi-ho, the derry-o. The farmer in the dell. \
    The farmer takes a wife, The farmer takes a wife. Hi-ho, the derry-o. The farmer takes a wife. \
    The wife takes the child, The wife takes the child. Hi-ho, the derry-o. The wife takes the child. \
    The child takes the nurse, The child takes the nurse. Hi-ho, the derry-o. The child takes the nurse. \
    The nurse takes the cow, The nurse takes the cow. Hi-ho, the derry-o. The nurse takes the cow. \
    The cow takes the dog, The cow takes the dog. Hi-ho, the derry-o. The cow takes the dog. \
    The dog takes the cat, The dog takes the cat. Hi-ho, the derry-o. The dog takes the cat. \
    The cat takes the mouse, The cat takes the mouse. Hi-ho, the derry-o. The cat takes the mouse. \
    The mouse takes the cheese, The mouse takes the cheese. Hi-ho, the derry-o. The mouse takes the cheese. \
    The cheese stands alone, The cheese stands alone. Hi-ho, the derry-o. The cheese stands alone";
var THE_GRAND_OLD_DUKE_OF_YORK="Oh The grand old Duke of York, He had ten thousand men; He marched them up to the top of the hill, And he marched them down again. \
    And when they were up, they were up, And when they were down, they were down, And when they were only half-way up, They were neither up nor down.";
var THE_LION_AND_THE_UNICORN="The lion and the unicorn, Were fighting for the crown, The lion beat the unicorn, All around the town. Some gave them white bread, And some gave them brown; Some gave them plum cake, and drummed them out of town.";
var THE_MUFFIN_MAN="Do you know the muffin man, The muffin man, the muffin man, Do you know the muffin man, Who lives in Mulberry Lane? \
    Yes, I know the muffin man, The muffin man, the muffin man, Yes, I know the muffin man, Who lives in Mulberry Lane";
var THE_WHEELS_ON_THE_BUS="The wheels on the bus go round and round, Round and round, Round and round. The wheels on the bus go round and round, All through the town. \
    The wipers on the bus go swish swish swish, Swish swish swish, Swish swish swish. The wipers on the bus go swish swish swish, All through the town. \
    The driver on the bus goes 'move on back', 'Move on back', 'Move on back'. The driver on the bus goes 'move on back', All through the town. \
    The people on the bus go up and down, Up and down, Up and down. The people on the bus go up and down, All 'through the town. \
    The horn on the bus goes beep beep beep, Beep beep beep, Beep beep beep. The horn on the bus goes beep beep beep, All through the town. \
    The baby on the bus goes 'whaa whaa whaa', 'Whaa whaa whaa', 'Whaa whaa whaa'. The baby on the bus goes 'whaa whaa whaa', All through the town. \
    The parents on the bus go 'I love you', 'I love you', 'I love you'. The parents on the bus go 'I love you', All through the town";
var THERE_WAS_A_CROOKED_MAN="There was a crooked man, and he walked a crooked mile. He found a crooked sixpence upon a crooked stile. He bought a crooked cat, which caught a crooked mouse, And they all lived together in a little crooked house.";
var THERE_WAS_AN_OLD_WOMAN_WHO_LIVED_IN_A_SHOE="There was an old woman Who lived in a shoe, She had so many children, And loved them all, too. She said, 'Thank you Lord Jesus, For sending them bread.' Then kissed them all gladly and sent them to bed.";
var THERE_WAS_AN_OLD_WOMAN_WHO_LIVED_UNDER_A_HILL="There was an old woman lived under the hill, And if she's not gone she lives there still. Baked apples she sold, and cranberry pies, And she's the old woman that never told lies.";
var THIS_IS_THE_HOUSE_THAT_JACK_BUILT="This is the house that Jack built. \
    This is the malt that lay in the house that Jack built. \
    This is the rat that ate the malt That lay in the house that Jack built. \
    This is the cat that killed the rat That ate the malt that lay in the house that Jack built. \
    This is the dog that worried the cat That killed the rat that ate the malt That lay in the house that Jack built. \
    This is the cow with the crumpled horn That tossed the dog that worried the cat That killed the rat that ate the malt That lay in the house that Jack built. \
    This is the maiden all forlorn That milked the cow with the crumpled horn That tossed the dog that worried the cat That killed the rat that ate the malt That lay in the house that Jack built. \
    This is the man all tattered and torn That kissed the maiden all forlorn That milked the cow with the crumpled horn That tossed the dog that worried the cat That killed the rat that ate the malt That lay in the house that Jack built. \
    This is the judge all shaven and shorn That married the man all tattered and torn That kissed the maiden all forlorn That milked the cow with the crumpled horn That tossed the dog that worried the cat That killed the rat that ate the malt That lay in the house that Jack built. \
    This is the rooster that crowed in the morn That woke the judge all shaven and shorn That married the man all tattered and torn That kissed the maiden all forlorn That milked the cow with the crumpled horn That tossed the dog that worried the cat That killed the rat that ate the malt That lay in the house that Jack built. \
    This is the farmer sowing his corn That kept the rooster that crowed in the morn That woke the judge all shaven and shorn That married the man all tattered and torn That kissed the maiden all forlorn That milked the cow with the crumpled horn That tossed the dog that worried the cat That killed the rat that ate the malt That lay in the house that Jack built. \
    This is the horse and the hound and the horn That belonged to the farmer sowing his corn That kept the rooster that crowed in the morn That woke the judge all shaven and shorn That married the man all tattered and torn That kissed the maiden all forlorn That milked the cow with the crumpled horn That tossed the dog that worried the cat That killed the rat that ate the malt That lay in the house that Jack built. ";
var THIS_LITTLE_PIGGIE="This little piggy went to market, This little piggy stayed home, This little piggy had roast beef, This little piggy had none, And this little piggy cried wee wee wee all the way home.";
var THIS_OLD_MAN="This old man, he played one, He played knick-knack on my drum; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home. \
    This old man, he played two, He played knick-knack on my shoe; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home. \
    This old man, he played three, He played knick-knack on my knee; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home. \
    This old man, he played four, He played knick-knack on my door; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home. \
    This old man, he played five, He played knick-knack on my hive; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home. \
    This old man, he played six, He played knick-knack on my sticks; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home. \
    This old man, he played seven, He played knick-knack up in heaven; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home. \
    This old man, he played eight, He played knick-knack on my gate; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home. \
    This old man, he played nine, He played knick-knack on my spine; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home. \
    This old man, he played ten, He played knick-knack once again; With a knick-knack paddywhack Give the dog a bone, This old man came rolling home.";
var THREE_BLIND_MICE="Three blind mice. Three blind mice. See how they run. See how they run. They all ran after the farmer's wife, Who cut off their tails with a carving knife, Did you ever see such a sight in your life, As three blind mice";
var THREE_LITTLE_KITTENS="The three little kittens they lost their mittens, And they began to cry; Oh, mother dear, we sadly fear Our mittens we have lost. What!? Lost your mittens, you naughty kittens! Then you shall have no pie. Mee-ow, mee-ow, mee-ow. We shall have no pie. Our mittens we have lost. \
    The three little kittens they found their mittens, And they began to smile; Oh, mother dear, see here, see here, Our mittens we have found. What!? Found your mittens, you good little kittens, And you shall have some pie. Mee-ow, mee-ow, mee-ow. We shall have some pie. Let us have some pie. \
    The three little kittens put on their mittens, And soon ate up the pie; Oh, mother dear, we greatly fear, Our mittens we have soiled. What!? Soiled your mittens, you naughty kittens! Then they began to sigh, Mee-ow, mee-ow, mee-ow. Our mittens we have soiled. Then they began to sigh. \
    The three little kittens they washed their mittens, And hung them out to dry; Oh! mother dear, look here, look here, Our mittens we have washed. What? Washed your mittens, you good little kittens, But I smell a rat close by. Mee-ow, mee-ow, mee-ow. We smell a rat close by. Let's all have some pie.";
var THREE_WISE_MEN_OF_GOTHAM="Three wise men of Gotham, They went to sea in a bowl, And if the bowl had been stronger, My song would have been longer.";
var TO_MARKET_TO_MARKET="To market, to market, to buy a fat pig! Home again, home again, jiggety-jig! \
    To market, to market, to buy a fat hog! Home again, home again, jiggety-jog! \
    To market, to market, to buy a plum bun! Home again, home again, market is done!";
var TINKER_TAILOR="Tinker, Tailor, Soldier, Sailor, Rich Man, Poor Man, Beggar Man, Thief.";
var TOM_TOM_THE_PIPERS_SON ="Tom, Tom, the piper's son, Stole a pig, and away did run; The pig was eat, And Tom was beat, And Tom went howling Down the street.";
var TWEEDLEDUM_AND_TWEEDLEDEE="Tweedledum and Tweedledee, Agreed to have a battle; For Tweedledum said Tweedledee, Had spoiled his nice new rattle. Just then flew down a monstrous crow, As black as a tar-barrel; Which frightened both the heroes so, They quite forgot their quarrel.";
var TWINKLE_TWINKLE_LITTLE_STAR="Twinkle twinkle little star, How I wonder what you are! Up above the world so high, Like a diamond in the sky. \
    When the blazing sun is gone, When he nothing shines upon, Then you show your little light, Twinkle twinkle through the night. \
    Then the traveller in the dark, Thanks you for your tiny spark; He could not see where to go, If you did not twinkle so. \
    In the dark blue sky you keep, And often through my curtains peep, For you never shut your eye, Till the sun is in the sky.\
    As your bright and tiny spark, Lights the traveller in the dark, Though I know not what you are, Twinkle twinkle little star.";
var TWO_LITTLE_DICKIE_BIRDS="Two little dickie birds sitting on a wall, One named Peter, one named Paul. Fly away Peter! Fly away Paul! Come back Peter! Come back Paul!";
var SCOTTISH_WEE_WILLIE_WINKIE="Wee Willie Winkie rins through the toon, Up stairs an' doon stairs in his nicht-gown, Tirlin' at the window, crying at the lock, 'Are the weans in their bed, for it's now ten o'clock?'\
    'Hey, Willie Winkie, are ye comin' ben? The cat's singin grey thrums to the sleepin hen, The dog's speldert on the floor and disna gie a cheep, But here's a waukrife laddie, that wunna fa' asleep.' \
    Onything but sleep, you rogue, glow'ring like the moon, Rattlin' in an airn jug wi' an airn spoon, Rumblin', tumblin' roon about, crawin' like a cock, Skirlin like a kenna-what, waukenin' sleepin' fock. \
    'Hey Willie Winkie, the wean's in a creel, Wamblin' aff a bodie's knee like a verra eel, Ruggin' at the cat's lug and raveling a' her thrums- Hey Willie Winkie – see there he comes.' \
    'Wearit is the mither that has a stoorie wean, A wee, stumpie, stousie, that canna rin his lane, That has a battle aye wi' sleep afore he'll close an e'e- But a kiss frae aff his rosy lips gies strength anew to me.";
var WEE_WILLIE_WINKIE="Wee Willie Winkie runs through the town, Up stairs and down stairs in his night-gown, Tapping at the window, crying at the lock, Are the children in their bed, for it's past ten o'clock? \
    Hey, Willie Winkie, are you coming in? The cat is singing purring sounds to the sleeping hen, The dog's spread out on the floor, and doesn't give a cheep, But here's a wakeful little boy who will not fall asleep! \
    Anything but sleep, you rogue! glowering like the moon,' Rattling in an iron jug with an iron spoon, Rumbling, tumbling round about, crowing like a cock, Shrieking like I don't know what, waking sleeping folk. \
    Hey, Willie Winkie – the child's in a creel! Wriggling from everyone's knee like an eel, Tugging at the cat's ear, and confusing all her thrums Hey, Willie Winkie – see, there he comes!'\
    Weary is the mother who has a dusty child, A small short little child, who can't run on his own, Who always has a battle with sleep before he'll close an eye But a kiss from his rosy lips gives strength anew to me";
var WHAT_ARE_LITTLE_BOYS_MADE_OF="What are little boys made of? What are little boys made of? Snips and snails And puppy-dogs' tails That's what little boys are made of. \
    What are little girls made of? What are little girls made of? Sugar and spice And everything nice. That's what little girls are made of";
var WHERE_O_WHERE_HAS_MY_LITTLE_DOG_GONE="Oh where, oh where has my little dog gone? Oh where, oh where can he be? With his ears cut short and his tail cut long, Oh where, oh where can he be?";
var WHO_KILLED_COCK_ROBIN= "Who killed Cock Robin? I, said the Sparrow, with my bow and arrow, I killed Cock Robin. \
    Who saw him die? I, said the Fly, with my little eye, I saw him die. \
    Who caught his blood? I, said the Fish, with my little dish, I caught his blood. \
    Who'll make the shroud? I, said the Beetle, with my thread and needle, I'll make the shroud. \
    Who'll dig his grave? I, said the Owl, with my little trowel, I'll dig his grave. \
    Who'll be the parson? I, said the Rook, with my little book, I'll be the parson. \
    Who'll be the clerk? I, said the Lark, if it's not in the dark, I'll be the clerk. \ Who'll carry the link? I, said the Linnet, I'll fetch it in a minute, I'll carry the link. \
    Who'll be chief mourner? I, said the Dove, I mourn for my love, I'll be chief mourner.\
    Who'll carry the coffin? I, said the Kite, if it's not through the night, I'll carry the coffin. \
    Who'll bear the pall? We, said the Wren, both the cock and the hen, We'll bear the pall. \
    Who'll sing a psalm? I, said the Thrush, as she sat on a bush, I'll sing a psalm. \
    Who'll toll the bell? I said the Bull, because I can pull, I'll toll the bell. \
    All the birds of the air fell a-sighing and a-sobbing, when they heard the bell toll for poor Cock Robin.";
var WIND_THE_BOBBIN_UP="Wind the bobbin up, Wind the bobbin up, Pull, pull, clap, clap, clap. Wind it back again, Wind it back again, Pull, pull, clap, clap, clap, Point to the ceiling, Point to the floor, Point to the window,Point to the door,Clap your hands together, 1, 2, 3,Do a roly-poly, put your hands upon your knee.";
var WYNKEN_BLYNKEN_AND_NOD="Wynken, Blynken, and Nod one night. Sailed off in a wooden shoe — Sailed on a river of crystal light, Into a sea of dew. 'Where are you going, and what do you wish?' The old moon asked the three. 'We have come to fish for the herring fish That live in this beautiful sea; Nets of silver and gold have we! Said Wynken, Blynken, and Nod.' \
    The old moon laughed and sang a song, As they rocked in the wooden shoe, And the wind that sped them all night long Ruffled the waves of dew. The little stars were the herring fish That lived in that beautiful sea — 'Now cast your nets wherever you wish — Never afraid are we'; So cried the stars to the fishermen three: Wynken, Blynken, and Nod. \
    All night long their nets they threw, To the stars in the twinkling foam — Then down from the skies came the wooden shoe, Bringing the fishermen home; 'Twas all so pretty a sail  it seemed As if it could not be, And some folks thought 'twas a dream they'd dreamed Of sailing that beautiful sea — But I shall name you the fishermen three: Wynken, Blynken, and Nod. \
    Wynken and Blynken are two little eyes, And Nod is a little head, And the wooden shoe that sailed the skies Is a wee one's trundle-bed. So shut your eyes while mother sings Of wonderful sights that be, And you shall see the beautiful things As you rock in the misty sea, Where the old shoe rocked the fishermen three: Wynken, Blynken, and Nod.";

var nurseryRhymes = {
     "aiken drum": AIKEN_DRUM,
     "aiken": AIKEN_DRUM,
     "a was an apple pie": A_WAS_AN_APPLE_PIE,
     "apple pie": A_WAS_AN_APPLE_PIE,
     "a wise old owl": A_WISE_OLD_OWL,
     "wise old owl": A_WISE_OLD_OWL,
     "a tisket a tasket": A_TISKET_A_TASKET,
     "tisket": A_TISKET_A_TASKET,
     "as i was going by charing cross": AS_I_WAS_GOING_BY_CHARING_CROSS,
     "charing cross": AS_I_WAS_GOING_BY_CHARING_CROSS,
     "as i was going to saint ives": AS_I_WAS_GOING_TO_ST_IVES,
     "saint": AS_I_WAS_GOING_TO_ST_IVES,
     "baa baa black sheep": BAA_BAA_BLACK_SHEEP,
     "baa": BAA_BAA_BLACK_SHEEP,
     "billy boy": BILLY_BOY,
     "billy": BILLY_BOY,
     "bingo": BINGO,
     "bye, baby bunting": BYE_BABY_BUNTING,
     "by": BYE_BABY_BUNTING,
     "there was a farmer who had a dog": BINGO,
     "bobby shafto's gone to sea": BOBBY_SHAFTOS_GONE_TO_SEA,
     "bobby": BOBBY_SHAFTOS_GONE_TO_SEA,
     "chubby cheeks": CHUBBY_CHEEKS,
     "chubby": CHUBBY_CHEEKS,
     "cock a doodle doo": COCK_A_DOODLE_DOO,
     "cockadoodle doo": COCK_A_DOODLE_DOO,
     "daddy finger": DADDY_FINGER,
     "daddy": DADDY_FINGER,
     "did you ever see a lassie": DID_YOU_EVER_SEE_A_LASSIE,
     "did you":  DID_YOU_EVER_SEE_A_LASSIE,
     "diddle diddle dumpling my son john": DIDDLE_DIDDLE_DUMPLING,
     "diddle": DIDDLE_DIDDLE_DUMPLING,
     "ding dong bell": DING_DONG_BELL,
     "dingdong": DING_DONG_BELL,
     "doctor foster": DOCTOR_FOSTER,
     "doctor": DOCTOR_FOSTER,
     "eeny meeny miny moe": EENY_MEENY_MINY_MOE,
     "eenie": EENY_MEENY_MINY_MOE,
     "eeper weeper": EEPER_WEEPER,
     "epr": EEPER_WEEPER,
     "father and mother and uncle john": FATHER_AND_MOTHER_AND_UNCLE_JOHN,
     "father": FATHER_AND_MOTHER_AND_UNCLE_JOHN,
     "5 little speckled frogs": FIVE_LITTLE_SPECKLED_FROGS,
     "5 little": FIVE_LITTLE_SPECKLED_FROGS,
     "frere": FRERE_JACQUES,
     "are you sleeping": FRERE_JACQUES,
     "frog": FROG_WENT_A_COURTING,
     "froggie": FROG_WENT_A_COURTING,
     "georgie porgie": GEORGIE_PORGIE,
     "georgie": GEORGIE_PORGIE,
     "girls and boys come out to play": GIRLS_AND_BOYS_COME_OUT_TO_PLAY,
     "girls": GIRLS_AND_BOYS_COME_OUT_TO_PLAY,
     "goosey goosey gander": GOOSEY_GOOSEY_GANDER,
     "goosey": GOOSEY_GOOSEY_GANDER,
     "here we": MULBERRY_BUSH,
     "mulberry bush": MULBERRY_BUSH,
     "hey diddle diddle": HEY_DIDDLE_DIDDLE,
     "cat and the fiddle": HEY_DIDDLE_DIDDLE,
     "hickory dickory dock": HICKORY_DICKORY_DOCK,
     "hickory": HICKORY_DICKORY_DOCK,
     "hot cross buns": HOT_CROSS_BUNS,
     "hot": HOT_CROSS_BUNS,
     "how many miles to babylon": HOW_MANY_MILES_TO_BABYLON,
     "how": HOW_MANY_MILES_TO_BABYLON,
     "humpty dumpty": HUMPTY_DUMPTY,
     "humpty": HUMPTY_DUMPTY,
     "hush little baby": HUSH_LITTLE_BABY,
     "hush": HUSH_LITTLE_BABY,
     "if wishes were horses": IF_WISHES_WERE_HORSES,
     "if": IF_WISHES_WERE_HORSES,
     "i do not like thee, doctor fell": I_DO_NOT_LIKE_THEE_DOCTOR_FELL,
     "i do": I_DO_NOT_LIKE_THEE_DOCTOR_FELL,
     "i'm a little teapot": IM_A_LITTLE_TEAPOT,
     "little teapot": IM_A_LITTLE_TEAPOT,
     "i had a little nut tree": I_HAD_A_LITTLE_NUT_TREE,
     "i had": I_HAD_A_LITTLE_NUT_TREE,
     "i love little pussy": I_LOVE_LITTLE_PUSSY,
     "i love": I_LOVE_LITTLE_PUSSY,
     "it's raining, it's pouring": ITS_RAINING_ITS_POURING,
     "it's raining": ITS_RAINING_ITS_POURING,
     "itsy bitsy spider": ITSY_BITSY_SPIDER,
     "itsy": ITSY_BITSY_SPIDER,
     "jack and jill": JACK_AND_JILL,
     "jack jill": JACK_AND_JILL,
     "jackanory": JACKANORY,
     "jack a nori": JACKANORY,
     "jack be nimble": JACK_BE_NIMBLE,
     "jack be": JACK_BE_NIMBLE,
     "jack sprat": JACK_SPRAT,
     "jack spratt": JACK_SPRAT,
     "lady bird": LADYBIRD_LADYBIRD,
     "ladybird": LADYBIRD_LADYBIRD,
     "lavender's blue": LAVENDERS_BLUE,
     "lavender": LAVENDERS_BLUE,
     "little arabella miller": LITTLE_ARABELLA_MILLER,
     "little arrabelle": LITTLE_ARABELLA_MILLER,
     "little bo peep": LITTLE_BO_PEEP,
     "little bo": LITTLE_BO_PEEP,
     "little boy blue": LITTLE_BOY_BLUE,
     "little boy": LITTLE_BOY_BLUE,
     "little jack horner": LITTLE_JACK_HORNER,
     "little jack": LITTLE_JACK_HORNER,
     "little miss muffet": LITTLE_MISS_MUFFET,
     "little miss": LITTLE_MISS_MUFFET,
     "little poll parrot": LITTLE_POLL_PARROT,
     "little pole": LITTLE_POLL_PARROT,
     "little robin redbreast": LITTLE_ROBIN_REDBREAST,
     "little robin": LITTLE_ROBIN_REDBREAST,
     "little tommy tucker": LITTLE_TOMMY_TUCKER,
     "little tommy": LITTLE_TOMMY_TUCKER,
     "london bridge is falling down": LONDON_BRIDGE_IS_FALLING_DOWN,
     "london bridge": LONDON_BRIDGE_IS_FALLING_DOWN,
     "lucy locket": LUCY_LOCKET,
     "lucy": LUCY_LOCKET,
     "mary had a little lamb": MARY_HAD_A_LITTLE_LAMB,
     "little lamb": MARY_HAD_A_LITTLE_LAMB,
     "mary mary quite contrary": MARY_MARY_QUITE_CONTRARY,
     "mary mary": MARY_MARY_QUITE_CONTRARY,
     "matthew mark luke and john": MATTHEW_MARK_LUKE_AND_JOHN,
     "matthew": MATTHEW_MARK_LUKE_AND_JOHN,
     "monday's child": MONDAYS_CHILD,
     "monday child": MONDAYS_CHILD,
     "needles and pins": NEEDLES_AND_PINS,
     "needles": NEEDLES_AND_PINS,
     "now i lay me down to sleep": NOW_I_LAY_ME_DOWN_TO_SLEEP,
     "now i": NOW_I_LAY_ME_DOWN_TO_SLEEP,
     "nuts in may": NUTS_IN_MAY,
     "old king cole": OLD_KING_COLE,
     "old king": OLD_KING_COLE,
     "old macdonald had a farm": OLD_MCDONALD_HAD_A_FARM,
     "old macdonald": OLD_MCDONALD_HAD_A_FARM,
     "old mother hubbard": OLD_MOTHER_HUBBARD,
     "old mother": OLD_MOTHER_HUBBARD,
     "on top of old smokey": ON_TOP_OF_OLD_SMOKEY,
     "old smokey": ON_TOP_OF_OLD_SMOKEY,
     "on top of spaghetti": ON_TOP_OF_SPAGHETTI,
     "spaghetti": ON_TOP_OF_SPAGHETTI,
     "1 for sorrow": ONE_FOR_SORROW,
     "for sorrow": ONE_FOR_SORROW,
     "1 2 buckle my shoe": ONE_TWO_BUCKLE_MY_SHOE,
     "12 buckle my shoe": ONE_TWO_BUCKLE_MY_SHOE,
     "1 2 3 4 5": ONE_TWO_THREE_FOUR_FIVE,
     "12345": ONE_TWO_THREE_FOUR_FIVE,
     "oranges and lemons": ORANGES_AND_LEMONS,
     "oranges": ORANGES_AND_LEMONS,
     "pat a cake": PAT_A_CAKE,
     "patty cake": PAT_A_CAKE,
     "pease porridge hot": PEASE_PORRIDGE_HOT,
     "peas": PEASE_PORRIDGE_HOT,
     "peter peter pumpkin eater": PETER_PETER_PUMPKIN_EATER,
     "pumpkin eater": PETER_PETER_PUMPKIN_EATER,
     "peter piper": PETER_PIPER,
     "piper": PETER_PIPER,
     "polly put the kettle on": POLLY_PUT_THE_KETTLE_ON,
     "polly": POLLY_PUT_THE_KETTLE_ON,
     "pour mary": POOR_MARY,
     "pour jenny": POOR_MARY,
     "pop goes the weasel": POP_GOES_THE_WEASEL,
     "the weasel": POP_GOES_THE_WEASEL,
     "pretty little dutch girl": PRETTY_LITTLE_DUTCH_GIRL,
     "little dutch": PRETTY_LITTLE_DUTCH_GIRL,
     "pussy cat": PUSSY_CAT_PUSSY_CAT,
     "pussycat": PUSSY_CAT_PUSSY_CAT, 
     "queen of hearts": QUEEN_OF_HEARTS,
     "the queen of hearts": QUEEN_OF_HEARTS,
     "rain rain go away": RAIN_RAIN_GO_AWAY,
     "rain": RAIN_RAIN_GO_AWAY,
     "ride a cock horse to banbury cross": RIDE_A_COCK_HORSE_TO_BANBURY_CROSS,
     "ride": RIDE_A_COCK_HORSE_TO_BANBURY_CROSS,
     "ring around the rosie": RING_AROUND_THE_ROSIE,
     "ring": RING_AROUND_THE_ROSIE,
     "rockabye baby": ROCK_A_BYE_BABY,
     "rock": ROCK_A_BYE_BABY,
     "roses are red": ROSES_ARE_RED,
     "roses": ROSES_ARE_RED,
     "round and round the gard": ROUND_AND_ROUND_THE_GARDEN,
     "round": ROUND_AND_ROUND_THE_GARDEN,
     "row, row, row your boat": ROW_ROW_ROW_YOUR_BOAT,
     "row": ROW_ROW_ROW_YOUR_BOAT,
     "rubadub dub": RUB_A_DUB_DUB,
     "rub": RUB_A_DUB_DUB,
     "see saw margery daw": SEE_SAW_MARGERY_DAW,
     "c saw": SEE_SAW_MARGERY_DAW,
     "simple simon": SIMPLE_SIMON,
     "simple": SIMPLE_SIMON,
     "sing a song of sixpence": SING_A_SONG_OF_SIXPENCE,
     "sing": SING_A_SONG_OF_SIXPENCE,
     "solomon grundy": SOLOMON_GRUNDY,
     "solomon": SOLOMON_GRUNDY,
     "star light, star bright": STAR_LIGHT_STAR_BRIGHT,
     "star": STAR_LIGHT_STAR_BRIGHT,
     "sticks and stone": STICKS_AND_STONES,
     "sticks": STICKS_AND_STONES,
     "taffy was a welshman": TAFFY_WAS_A_WELSHMAN,
     "taffy": TAFFY_WAS_A_WELSHMAN,
     "10 little indians": TEN_LITTLE_INDIANS,
     "10 little": TEN_LITTLE_INDIANS,
     "the farmer in the dell": THE_FARMER_IN_THE_DELL,
     "the farmer": THE_FARMER_IN_THE_DELL,
     "the grand old duke of york": THE_GRAND_OLD_DUKE_OF_YORK,
     "the grand": THE_GRAND_OLD_DUKE_OF_YORK,
     "the lion and the unicorn": THE_LION_AND_THE_UNICORN,
     "lion and the unicorn": THE_LION_AND_THE_UNICORN,
     "the muffin man": THE_MUFFIN_MAN,
     "do you know the muffin man": THE_MUFFIN_MAN,
     "there was a crooked man": THERE_WAS_A_CROOKED_MAN,
     "crooked man": THERE_WAS_A_CROOKED_MAN,
     "there was an old woman who lived in a shoe": THERE_WAS_AN_OLD_WOMAN_WHO_LIVED_IN_A_SHOE,
     "there was": THERE_WAS_AN_OLD_WOMAN_WHO_LIVED_IN_A_SHOE,
     "there was an old woman who lived under a hill": THERE_WAS_AN_OLD_WOMAN_WHO_LIVED_UNDER_A_HILL,
     "old woman under hill": THERE_WAS_AN_OLD_WOMAN_WHO_LIVED_UNDER_A_HILL,
     "the wheels on the bus": THE_WHEELS_ON_THE_BUS,
     "wheels": THE_WHEELS_ON_THE_BUS,
     "this little piggie": THIS_LITTLE_PIGGIE,
     "this little": THIS_LITTLE_PIGGIE,
     "this is the house that jack built": THIS_IS_THE_HOUSE_THAT_JACK_BUILT,
     "this is": THIS_IS_THE_HOUSE_THAT_JACK_BUILT,
     "this old man": THIS_OLD_MAN,
     "this old": THIS_OLD_MAN,
     "3 blind mice": THREE_BLIND_MICE,
     "3 blind": THREE_BLIND_MICE,
     "3 little kittens": THREE_LITTLE_KITTENS,
     "3 little": THREE_LITTLE_KITTENS,
     "3 wise men of gotham": THREE_WISE_MEN_OF_GOTHAM,
     "3 wise": THREE_WISE_MEN_OF_GOTHAM,
     "tinker, tailor": TINKER_TAILOR,
     "tinker": TINKER_TAILOR,
     "tom, tom, the piper's son": TOM_TOM_THE_PIPERS_SON,
     "tom tom": TOM_TOM_THE_PIPERS_SON,
     "tweedledum and tweedledee": TWEEDLEDUM_AND_TWEEDLEDEE,
     "tweedle dumb": TWEEDLEDUM_AND_TWEEDLEDEE,
     "twinkle twinkle little star": TWINKLE_TWINKLE_LITTLE_STAR,
     "twinkle": TWINKLE_TWINKLE_LITTLE_STAR,
     "to market, to markey": TO_MARKET_TO_MARKET,
     "to market": TO_MARKET_TO_MARKET,
     "2 little dickie birds": TWO_LITTLE_DICKIE_BIRDS,
     "2 little": TWO_LITTLE_DICKIE_BIRDS,
     "scottish wee willie winkie": SCOTTISH_WEE_WILLIE_WINKIE,
     "scottish we": SCOTTISH_WEE_WILLIE_WINKIE,
     "wee willie winkie": WEE_WILLIE_WINKIE,
     "we": WEE_WILLIE_WINKIE,
     "what are little boys made of": WHAT_ARE_LITTLE_BOYS_MADE_OF,
     "what": WHAT_ARE_LITTLE_BOYS_MADE_OF,
     "where, o where has my little dog gone": WHERE_O_WHERE_HAS_MY_LITTLE_DOG_GONE,
     "where": WHERE_O_WHERE_HAS_MY_LITTLE_DOG_GONE,
     "who killed cock robin": WHO_KILLED_COCK_ROBIN,
     "who": WHO_KILLED_COCK_ROBIN,
     "wind the bobbin up": WIND_THE_BOBBIN_UP,
     "wind": WIND_THE_BOBBIN_UP,
     "wynken blynken and nod": WYNKEN_BLYNKEN_AND_NOD,
     "lincoln": WYNKEN_BLYNKEN_AND_NOD,
     "weekend": WYNKEN_BLYNKEN_AND_NOD
 };
 
// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

       if (event.session.application.applicationId !== "amzn1.ask.skill.4dadc5c8-86fc-4bba-9402-249019c9c3fb") {
           context.fail("Invalid Application ID");
        }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if ( "RhymeByTitleIntent" === intentName) {
        handleRhymeByTitleRequest(intent, session, callback);
    } else if ( "RandomRhymeIntent" === intentName) {
        handleRandomRhymeRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var CARD_TITLE = "Nursery Rhyme";

function getInstructionResponse(callback) {
    var speechOutput = "Ask Nursery Rhymes to say a nursery rhyme, like Mary Had A Little Lamb. Or ask Nursery Rhymes to say a random rhyme.";
    var sessionAttributes = {};
    var shouldEndSession = true;
    callback(sessionAttributes,
        buildSpeechletResponseWithoutCard(speechOutput, "", shouldEndSession));
}

//onWelcome give the instruction
function getWelcomeResponse(callback) {
    getInstructionResponse(callback);
}

function handleRhymeByTitleRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var rhymeTitle = getRhymeTitleFromIntent(intent);

    if(!rhymeTitle){
        speechOutput = "Please ask Nursery Rhymer for a rhyme to say.";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, true));
        return;
    }
    
    var rhyme = nurseryRhymes[rhymeTitle.toLowerCase()];
    if(!rhyme){
        //No rhyme found with rhyme title, try the first word only
        var splitTitle = rhymeTitle.toLowerCase().split(" ");
        var firstWordRhyme = nurseryRhymes[splitTitle[0]];
        var firstTwoWordRhyme = nurseryRhymes[splitTitle[0]+ " "+splitTitle[1]];
        
        if (firstWordRhyme){
            rhyme = firstWordRhyme;
        } else if (firstTwoWordRhyme) {
            rhyme = firstTwoWordRhyme;
        } else {
            
            speechOutput = "I'm sorry, but I do not recognize the rhyme "+ rhymeTitle + ". Please try a different rhyme.";
            //Uncomment for debugging
            /*speechOutput = "I'm sorry, but I do not recognize the rhyme "+ rhymeTitle + " with length " + rhymeTitle.length+ " and "+ splitTitle.length +" words. Please try a different rhyme.";
            rhymeTitle = rhymeTitle + "                   ";
            speechOutput = speechOutput + " Characters are: " + rhymeTitle[0]+ ", " + rhymeTitle[1] + ", " + rhymeTitle[2] + ", " +rhymeTitle[3] + ", "+ rhymeTitle[4]+ ", " +rhymeTitle[5] + ", "+ rhymeTitle[6]+", " + rhymeTitle[7] + ", "+ rhymeTitle[8]+ ", " + rhymeTitle[9] + ", "+ rhymeTitle[10]+ ", " + rhymeTitle[11]+ ", " + rhymeTitle[12] + ", "+ rhymeTitle[13]+ ", " + rhymeTitle[14]+ ", " + rhymeTitle[15] + ", "+ rhymeTitle[16]+ ", " + rhymeTitle[17];
            speechOutput = speechOutput + ". The first word is of length " +splitTitle[0].length;
                if(splitTitle.length>1){
                speechOutput = speechOutput + ". The second word is of length " +splitTitle[1].length;
                
                }
            */
            callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, true));
            return;
        }
    }
    
    speechOutput = rhyme;
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, true));
}
    
function handleRandomRhymeRequest(intent, session, callback) {
    var sessionAttributes = {};
    var speechOutput = "";
    var keys = Object.keys(nurseryRhymes);
    var randRhymeIndex = Math.floor(Math.random()*keys.length);
    var rhymeTitle = keys[randRhymeIndex];
    if(!rhymeTitle){
        speechOutput = "I'm sorry, I couldn't understand that";
        console.error("Unable to accesses rhyme title for rhyme index " + randRhymeIndex);
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, true));
        return;
    }
    speechOutput = "Playing a randomly chosen nursery rhyme: "+ nurseryRhymes[rhymeTitle];
    callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, true));
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.
    
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.
    var speechOutput = "Ask Nursery Rhymer to say a nursery rhyme, like Mary Had A Little Lamb. Or ask Nursery Rhymer to say a random rhyme.";

    var shouldEndSession = true;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, "", shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

//getRhymeTitleFromIntent returns the rhyme title if it exists
function getRhymeTitleFromIntent(intent){
    var rhymeSlotFilled = intent.slots && intent.slots.RhymeTitle && intent.slots.RhymeTitle.value;
    if(!rhymeSlotFilled){
        return "";
    }
    return intent.slots.RhymeTitle.value;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
