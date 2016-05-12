var p = "In the midway of this our mortal life,\
        I found me in a gloomy wood, astray\
        Gone from the path direct: and e'en to tell\
        It were no easy task, how savage wild\
        That forest, how robust and rough its growth,\
        Which to remember only, my dismay\
        Renews, in bitterness not far from death.\
        Yet to discourse of what there good befell,\
        All else will I relate discover'd there.\
        How first I enter'd it I scarce can say,\
        Such sleepy dullness in that instant weigh'd\
        My senses down, when the true path I left,\
        But when a mountain's foot I reach'd, where clos'd\
        The valley, that had pierc'd my heart with dread,\
        I look'd aloft, and saw his shoulders broad\
        Already vested with that planet's beam,\
        Who leads all wanderers safe through every way.";

var word_count = {},
    words = p.replace(/\.|,|:/g, "").replace(/\s+/g, " ").split(" "),
    popular_word;

words.forEach(function(word) {
  if (!(word in word_count)) {
    word_count[word] = 0;
  }
  word_count[word]++;
});

for (word in word_count) {
  if (!popular_word) {
    popular_word = word;
  }
  if (word_count[word] > word_count[popular_word]) {
    popular_word = word;
  }
}

console.log("There were a total of " + words.length + " words.");
console.log("The most frequent word was " + popular_word + " with " + word_count[popular_word] + " occurrences.");