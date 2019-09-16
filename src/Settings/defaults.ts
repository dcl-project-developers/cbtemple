export const DEFAULT_SHOWCASE_NFTS = {
    "0x38E908b70C8E0DCFE452C0fB2eBf432f9c5A6f20": { // ChainbreakersPets Contract
        "tokens": [
          354 /* Manticore */, 302 /* Cyclop */,
          301 /* Cheetah */, 300 /* Wolf */,
          299 /* Kitten */, 298 /* Worm */
        ],
        "positions": [
          new Vector3(32, 3, 4.775), new Vector3(16, 3, 4.775),
          new Vector3(8, 3, 4.775),  new Vector3(40, 3, 4.775),
          new Vector3(16*3-4.775, 3, 8), new Vector3(4.775, 3, 8),
        ],
        "scales": [
          new Vector3(1.65, 1.65, 1.65), new Vector3(1.65, 1.65, 1.65),
          new Vector3(1.35, 1.35, 1.35), new Vector3(1.35, 1.35, 1.35),
          new Vector3(1, 1, 1), new Vector3(1, 1, 1)
        ],
        "rotations":[
          Quaternion.Euler(0, 180, 0), Quaternion.Euler(0, 180, 0),
          Quaternion.Euler(0, 180, 0), Quaternion.Euler(0, 180, 0),
          Quaternion.Euler(0, 90, 0), Quaternion.Euler(0, 270, 0)
        ]
    },
    "0x0111ac7e9425c891f935c4ce54cf16db7c14b7db":{
      "tokens": [ 2233 ], /* Chain Breaker*/
      "positions": [ new Vector3(24, 3, 4.775) ],
      "scales": [ new Vector3(2, 2, 2)],
      "rotations": [ Quaternion.Euler(0, 180, 0)]
    }
  };

export const DEFAULT_STONE_TEXTS = {
    0: {
      "header": "A Day in the Life",
      "content": "I had been working the fields as usual, another load\nof grain to go towardsthe Masters’ stockpile,\nwhen I tripped over the unseen extended footof Timerius,\nwho reveled in causing trouble when he could. “Get up\nyou lazygood-for-nothing slave!” Timerius liked to\nbring attention to my mistakes whenever possible, in an effort\nto distance himself from the herd. We had grown up together,\nbut when the previous slave-driver had fallen to heatstroke,\nhe had found a way to steadily worm himself into the\nremaining overseers good graces; mostly involving a\ngenerous amount butt-kissing and belittling the rest of\nus as much as possible. I glanced angrily back at his\nsneering face, and catching the look he remarked \n“Don’t give me that look. We all need to take care\nof ourselves.” and walked away before he brought attention\nto his own lack of progress with his section of the\nfield. This left me working to gather the fallen items\naround me when the closest guard came around. Noting\nmy situation, he harshly shoved me to the side and demanded\nto know why I was taking a break. I meekly stammered a\nreply, but he interrupted me with a new demand: if I couldn’t\nwork like the rest, I would have to go dig some trenches\nfor the new field section.",
      "position": new Vector3(29.95, 2.3, 42.925),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(12.75, 0, 0)
    },
    1: {
      "header": "Off the Trenches",
      "content": "All of us dreaded trench detail; it was backbreaking\nwork, and the guards posted there enjoyed holding back\nthe water to watch us suffer while pushing us to the\nvery limit of exhaustion. Here is where I found myself\nnow, digging at the furthest corner of the masters’\nland. As I fell into the familiar rhythm of moving dirt,\nmy mind wondered to far off lands I had heard about\nin stories from the elders. As if in a daze, I failed\nto notice the soft ground begin to give way under my\nfeet until I started to fall into a newly uncovered\nstone pit!",
      "position": new Vector3(33.95, 2.3, 42.925),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(12.75, 0, 0)
    },
    2: {
      "header": "Unearthed History",
      "content":  "I landed on hard earth with a suddenness that took my\nbreath away. As I gathered my senses, I glanced up and was\namazed at how far I had fallen. I was at least\n15 meters deep! As my eyes adjusted to the darkness, I looked\naround to see if I could gain my bearings. In the\ndim light shed through the newly created hole, I could\nmake out stone shapes along a wall to my right, but\nto the left only blackness. As I crept forward, testing\neach step before putting my foot down, I could\nbegin to make out the outline of a huge stone archway\na short distance ahead of me. Bass reliefs of grinning\nmonster-like faces adorned the archway, all looking down\ntowards whoever walked beneath it, and now that my vision\nwas more adjusted I could see the path continued beyond\nand a faint glow could be see ahead. A strange\ntugging sensation started to attract my attention, as if gentle\nhands were attempting to bring me forward. I felt fear, but also\na strange warmth that somehow reassured me.\n\nAt this point I could hear the guards above starting to yell;\nthey must have just noticed I was not where I was supposed\nto be. Steadying myself, I gave into the pull and\nallowed my legs to carry me forward under the archway\ntoward the glow…",
      "position": new Vector3(37.95, 2.3, 42.925),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(12.75, 0, 0)
    },
    3: {
      "header": "The Temple of the Cyclops",
      "content": "The force guided my steps along a rough, down-sloping\npath, and after walking for a short while, the walls opened up\ninto a massive cavern. The walls of this chamber\nwere covered in a fungus that was giving off a faint blue\nlight somehow, allowing me to see the structure before\nme. The ornate marble pillars on each side of a\ncrumbling arched entrance were covered top to bottom\nin beautiful works of art, depicting huge giants wrestling\nwith other monsters of legend. I could identify\nmulti-headed hydras from the stories my grandfather used\nto tell at night, and I could see huge Krakens I had\nheard a guard describing once wrapping its tentacles around\nthe arm of another giant. These went on as far as I\ncould see, but towards the edges of the wall most of the\nfiner detail had faded with time. In front of this\nbuilding the ground was jagged and covered with ancient looking\nmetal armor pieces and broken weapons. I noticed a mace head\nin the middle of the remains, but its size was\nabsurdly huge. Who could wield a weapon like this? I was \nabout to movefurther into the entrance, when the tugging \nsensation returned, pulling me towards a nearby boulder. I\nwalked closer to investigate, but as the detail came\ninto closer focus, I realized the boulder was actually a\nmassive skull!",
      "position": new Vector3(42.945, 2.3, 34.05),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(0, 90, 0).multiply(Quaternion.Euler(12.75, 0, 0))
    },
    4: {
      "header": "Discovery",
      "content": "Gasping at my discovery, I took a step back. The massive\nskull was so obvious from here that I marveled at how I could\nhave missed it when I first entered the cavern. Aside\nfrom it’s immense size, it looked like any other\nhuman skull, except it only had one eye socket that\ndominated the upper half of its face. It was so old where\nit touchedthe ground had begun to fall away to rot,\nbut the right side seemed to have an unnatural break, as if\na massive forced had smashed in the side it\nlong ago. Sticking out of this crack I could make out a black\nhandle. A strange pulse of power seemed to emanate\nfrom it, and before I could stop myself I reached my hand\nout to touch it.",
      "position": new Vector3(42.945, 2.3, 30.05),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(0, 90, 0).multiply(Quaternion.Euler(12.75, 0, 0))
    },
    5: {
      "header": "Visions of the Past",
      "content": "I opened my eyes and the edges of my vision were blurry,\nas if I was in a dream. I was in the same cavern, but now the\nglow from the fungus was glaringly bright, and the ruined\nstructure looked as if it had just been built.\nThe level of detail was beyond anything I could have \nimagined, and the entrance was shut with huge iron doors.\nIn front of the doors waged a battle straight out\nof my nightmares. Swarms of armored solders were\nattempting to trip a behemoth figure with one giant\neye, who was swinging a club so large it looked like the\nhandle was made from one massive tree. With each swing it\nwould send at least 3 of the soldiers flying away to\ncrash into other monstrous creatures that seemed\nto be waiting on the edges of the battle. As soldiers\nwould drop lifeless to the ground these creatures would dip\ndown and start to feast on the poor souls’ bodies.\nI was horrified by the monstrous battle and scared. Was\nI really here? Is this how I die?",
      "position": new Vector3(42.945, 2.3, 26.05),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(0, 90, 0).multiply(Quaternion.Euler(12.75, 0, 0))
    },
    6: {
      "header": "Enter the Champion",
      "content": "It appeared the monstrous giant was about to become the\nvictor in this battle, when I heard a shrill whistle come from\nbehind me. Turning around I gaped in awe at an onrushing\nsoldier riding a large warhorse directly into the\nscene I had just witnessed. This man was different then\nthe rest, broader of shoulder, with a presence that gave\nhim an air of authority. He wore very dark armor,\nwith a massive set of horns rising from his head,\nbut the most impressive piece of this mans\nensemble was his weapon. As he rode, he readied a\nmassive hammer in his hands: Jet black along the handle and\nhead, with a large red eye in the center, the weapon seemed\nto be surveying the field of battle. A cheer\nrose among those on the field, and soldiers cleared the way\nfor there incoming champion. The giant bristled and\nroared at this new challenger, and swung his treelike mace.",
      "position": new Vector3(42.945, 2.3, 22.05),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(0, 90, 0).multiply(Quaternion.Euler(12.75, 0, 0))
    },
    7: {
      "header": "Battle of the titans",
      "content": "The warrior jumped off his horse, who took the brunt of\nthe monsters’ swing and crumpled to the ground. The\nmomentum of his leap carried him towards the beast head,\nand as he got closer to his target, a purple glow began\nto pulse from his hammer. The effect grew in intensity as\nhe swung a wide arcing swing directly into the giants face.\nThe monster obviously expected to shrug off the hit as\nhe had so many times before from these smaller creatures,\nas it took no action to try and\navoid it. I could feel the ground shake and multiple\nstalagmites cracked and fell from the ceiling of the\ncavern from the impact, and the monster spun around fully\ntwo times, dropping his mace where he fought and stumbling\ntowards the corner where I stood, crumbling to the\nground, black hammer stuck in a deep hole in the\nside of his face.",
      "position": new Vector3(42.945, 2.3, 18.05),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(0, 90, 0).multiply(Quaternion.Euler(12.75, 0, 0))
    },
    8: {
      "header":  "Aftermath",
      "content": "A cheer rose from the small group of soldiers, but a\nhorrific scream came from the temple at the same\ntime. 2 more of the one-eyed giants, roughly half the size of\nthe first, came running out of the temple in a blind rage.\nThey were followed by multiple tiny versions of themselves,\nwho were crying most pitifully as their wardens left them alone.\nThe first few hits took the soldiers by surprise,\nhalving their numbers immediately. The former hammer\nwielder started to sprint towards\nthe fallen giant, but he was hit by one massive fist\nand sent sprawling to the floor. As \nthe other soldiers attempted to get to him some of the\ncreatures that had stayed out of the fight started to\nswoop in, no doubt in an effort to get first\nbite of the remaining fighters. As the final moments\nof the battle seemed about to pass my vision\nblurred again.",
      "position": new Vector3(42.945, 2.3, 14.05),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(0, 90, 0).multiply(Quaternion.Euler(12.75, 0, 0))
    },
    9: {
      "header": "The Future",
      "content": "My vision cleared, and I was back in the cavern, the\nfaint glow showing the building was back to its\ndecrepit state. My hand was still touching the worn\nblack handle, and I grasped it and pulled the mighty\nhammer from the monsters skull. The lustrous\nblack I had seen in my vision was more a mottled\ndark gray, and the red eye seemed less ominous\nin my hands, but the sense of power could still\nbe felt as I held the weapon. As I walked to the\narea where I had witnessed the mighty champions’\nlast stand, I found his battered armor and helmet.\nI lifted the helmet and put it over my head, and I\ncould feel a rush of power course down my arms. I put\nthe sleeping hammer on my back, and lifted one of the\nrusted swords laying on the ground. I could hear the\nguards coming, they had finally figured out a way down\nthe hole and were coming for me, but after what\nI had witnessed, and the swelling pride I could feel\nrushing up from my belly, I only had one thought… \n\nI will never be a slave again.",
      "position": new Vector3(42.945, 2.3, 10.05),
      "scale": new Vector3(0.1, 0.1, 0.1),
      "rotation": Quaternion.Euler(0, 90, 0).multiply(Quaternion.Euler(12.75, 0, 0))
    }
  }
