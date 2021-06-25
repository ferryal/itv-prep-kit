const passage = `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.`

const timeToRead = text => { 
  const averageReadingTime = 200 // Humans read an average of 200 words per minute
  const cleanedPassage     = passage.split(" ").filter(el => el.trim() !== "")
  const timeInMinutes      = cleanedPassage.length / averageReadingTime;

  return timeInMinutes < 1 
    ? duration = `${Math.round(timeInMinutes * 60)}s` 
    : duration = `${Math.round(timeInMinutes)}mins`
}
console.log(timeToRead(passage))
// output 37s