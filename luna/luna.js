var page = 0
    
var prevBtn
var nextBtn
var book
var chapter

var paper1
var paper2
var paper3
var paper4
var paper5
var paper6
var paper7
var paper8
var paper9
var paper10
var pageList



// Business Logic
let currentLocation = 1
let numOfPapers = 10
let maxLocation = numOfPapers + 1
const allowedInnerWidth = 800


$(document).ready(function($) {
    prevBtn = document.querySelector("#prev-btn")
    nextBtn = document.querySelector("#next-btn")
    book = document.querySelector("#book")
    chapter = document.querySelector("#chapter-cover")
    
    paper1 = document.querySelector("#p1")
    paper2 = document.querySelector("#p2")
    paper3 = document.querySelector("#p3")
    paper4 = document.querySelector("#p4")
    paper5 = document.querySelector("#p5")
    paper6 = document.querySelector("#p6")
    paper7 = document.querySelector("#p7")
    paper8 = document.querySelector("#p8")
    paper9 = document.querySelector("#p9")
    paper10 = document.querySelector("#p10")
    pageList = [document.getElementById("page1"), document.getElementById("page2"),
                        document.getElementById("page3"), document.getElementById("page4"),
                        document.getElementById("page5"), document.getElementById("page6"),
                        document.getElementById("page7"), document.getElementById("page8"),
                        document.getElementById("page9"), document.getElementById("page10"), 
                        document.getElementById("page11"), document.getElementById("page12"), 
                        document.getElementById("page13"), document.getElementById("page14"), 
                        document.getElementById("page15"), document.getElementById("page16"), 
                        document.getElementById("page17"), document.getElementById("page18")]
    
    // Event Listener
    prevBtn.addEventListener("click", goPrevPage)
    nextBtn.addEventListener("click", goNextPage)

    loadDropDownContent()

    if (window.innerWidth <= allowedInnerWidth) {
        loadChapter(1)
    }
    else {
        loadChapter(1)
    }
    
})

function openBook() {
    if (window.innerWidth > allowedInnerWidth) {
        book.style.transform = "translateX(50%)"
        prevBtn.style.transform = "translateX(-180px)"
        nextBtn.style.transform = "translateX(180px)"
        chapter.style.transition = "0s"
        chapter.style.transform = "scale(0)"
    }
    prevBtn.style.display = "inherit"
    nextBtn.style.display = "inherit"
}

function closeBook(isAtBeginning) {
    if (window.innerWidth > allowedInnerWidth) {
        if(isAtBeginning) {
            book.style.transform = "translateX(0%)"
            currentLocation = 1
            page = 0
        } else {
            book.style.transform = "translateX(100%)"
            currentLocation = 11
            page = 20
        }
    } else if (!isAtBeginning) {
        currentLocation = 11
    }
    if(isAtBeginning) {
        prevBtn.style.display = "none"
        nextBtn.style.display = "inherit"
    } else {
        nextBtn.style.display = "none"
        prevBtn.style.display = "inherit"
    }
    
    prevBtn.style.transform = "translateX(0px)"
    nextBtn.style.transform = "translateX(0px)"
    chapter.style.transition = "transform .5s"
    chapter.style.transform = "scale(1)"
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        prevBtn.style.display = "inherit"
        nextBtn.style.display = "inherit"
        var mobile = false
        page += 2
        if (window.innerWidth <= allowedInnerWidth) {
            mobile = true
            page -= 1
        }
        switch(currentLocation) {
            case 1:
                openBook()
                paper1.classList.add("flipped")
                paper1.style.zIndex = 1
                if (mobile) {
                    document.getElementById("page2").innerHTML = chapterList[0]
                    mobileFlip = false
                }
                currentLocation++
                break
            case 2:
                if (mobile && !mobileFlip) {
                    document.getElementById("page2").innerHTML = chapterList[1]
                    mobileFlip = true
                } else {
                    paper2.classList.add("flipped")
                    paper2.style.zIndex = 2
                    if (mobile) {
                        document.getElementById("page4").innerHTML = chapterList[2]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 3:
                if (mobile && !mobileFlip) {
                    document.getElementById("page4").innerHTML = chapterList[3]
                    mobileFlip = true
                } else {
                    paper3.classList.add("flipped")
                    paper3.style.zIndex = 3
                    if (mobile) {
                        document.getElementById("page6").innerHTML = chapterList[4]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 4:
                if (mobile && !mobileFlip) {
                    document.getElementById("page6").innerHTML = chapterList[5]
                    mobileFlip = true
                } else {
                    paper4.classList.add("flipped")
                    paper4.style.zIndex = 4
                    if (mobile) {
                        document.getElementById("page8").innerHTML = chapterList[6]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 5:
                if (mobile && !mobileFlip) {
                    document.getElementById("page8").innerHTML = chapterList[7]
                    mobileFlip = true
                } else {
                    paper5.classList.add("flipped")
                    paper5.style.zIndex = 5
                    if (mobile) {
                        document.getElementById("page10").innerHTML = chapterList[8]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 6:
                if (mobile && !mobileFlip) {
                    document.getElementById("page10").innerHTML = chapterList[9]
                    mobileFlip = true
                } else {
                    paper6.classList.add("flipped")
                    paper6.style.zIndex = 6
                    if (mobile) {
                        document.getElementById("page12").innerHTML = chapterList[10]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 7:
                if (mobile && !mobileFlip) {
                    document.getElementById("page12").innerHTML = chapterList[11]
                    mobileFlip = true
                } else {
                    paper7.classList.add("flipped")
                    paper7.style.zIndex = 7
                    if (mobile) {
                        document.getElementById("page14").innerHTML = chapterList[12]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 8:
                if (mobile && !mobileFlip) {
                    document.getElementById("page14").innerHTML = chapterList[13]
                    mobileFlip = true
                } else {
                    paper8.classList.add("flipped")
                    paper8.style.zIndex = 8
                    if (mobile) {
                        document.getElementById("page16").innerHTML = chapterList[14]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 9:
                if (mobile && !mobileFlip) {
                    document.getElementById("page16").innerHTML = chapterList[15]
                    mobileFlip = true
                } else {
                    paper9.classList.add("flipped")
                    paper9.style.zIndex = 9
                    if (mobile) {
                        document.getElementById("page18").innerHTML = chapterList[16]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 10:
                if (mobile && !mobileFlip) {
                    document.getElementById("page18").innerHTML = chapterList[17]
                    mobileFlip = true
                } else {
                    paper10.classList.add("flipped")
                    paper10.style.zIndex = 10
                    if (mobile) {
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            default:
                throw new Error("unknown state")
        }
        if ((chapterList[page - 2] == `` && !mobile) || (chapterList[page - 1] ==`` && mobile)) {
            mobileFlip = true
            currentLocation++
            checkPagesForward(mobile)
        }
        if (currentLocation > numOfPapers) {
            closeBook(false)
        }
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        var mobile = false
        page -= 2
        if (window.innerWidth <= allowedInnerWidth) {
            mobile = true
            page += 1
        }
        switch(currentLocation) {
            case 2:
                if (mobile && mobileFlip) {
                    document.getElementById("page2").innerHTML = chapterList[0]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    paper1.classList.remove("flipped")
                    paper1.style.zIndex = 10
                    currentLocation--
                    closeBook(true)
                }
                break
            case 3:
                if (mobile && mobileFlip) {
                    document.getElementById("page4").innerHTML = chapterList[2]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page2").innerHTML = chapterList[1]
                    paper2.classList.remove("flipped")
                    paper2.style.zIndex = 9
                    currentLocation--
                }
                break
            case 4:
                if (mobile && mobileFlip) {
                    document.getElementById("page6").innerHTML = chapterList[4]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page4").innerHTML = chapterList[3]
                    paper3.classList.remove("flipped")
                    paper3.style.zIndex = 8
                    currentLocation--
                }
                break
            case 5:
                if (mobile && mobileFlip) {
                    document.getElementById("page8").innerHTML = chapterList[6]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page6").innerHTML = chapterList[5]
                    paper4.classList.remove("flipped")
                    paper4.style.zIndex = 7
                    currentLocation--
                }
                break
            case 6:
                if (mobile && mobileFlip) {
                    document.getElementById("page10").innerHTML = chapterList[8]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page8").innerHTML = chapterList[7]
                    paper5.classList.remove("flipped")
                    paper5.style.zIndex = 6
                    currentLocation--
                }
                break
            case 7:
                if (mobile && mobileFlip) {
                    document.getElementById("page12").innerHTML = chapterList[10]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page10").innerHTML = chapterList[9]
                    paper6.classList.remove("flipped")
                    paper6.style.zIndex = 5
                    currentLocation--
                }
                break
            case 8:
                if (mobile && mobileFlip) {
                    document.getElementById("page14").innerHTML = chapterList[12]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page12").innerHTML = chapterList[11]
                    paper7.classList.remove("flipped")
                    paper7.style.zIndex = 4
                    currentLocation--
                }
                break
            case 9:
                if (mobile && mobileFlip) {
                    document.getElementById("page16").innerHTML = chapterList[14]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page14").innerHTML = chapterList[13]
                    paper8.classList.remove("flipped")
                    paper8.style.zIndex = 3
                    currentLocation--
                }
                break
            case 10:
                if (mobile && mobileFlip) {
                    document.getElementById("page18").innerHTML = chapterList[16]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page16").innerHTML = chapterList[15]
                    paper9.classList.remove("flipped")
                    paper9.style.zIndex = 2
                    currentLocation--
                }
                break
            case 11:
                paper10.classList.remove("flipped")
                paper10.style.zIndex = 1
                if (mobile) {
                    mobileFlip = true
                    document.getElementById("page18").innerHTML = chapterList[17]
                }
                currentLocation--
                break
            default:
                throw new Error("unknown state")
        }
        if ((chapterList[page - 2] == `` && !mobile) || (chapterList[page - 1] ==`` && mobile)) {
            mobileFlip = false
            checkPagesReverse(mobile)
        }
        if (currentLocation == numOfPapers) {
            openBook()
        }

        
    }
}

function changeChapter() {
    resetBook()
    if (window.innerWidth <= allowedInnerWidth) {
        chapterValue = parseInt(document.getElementById("chapter-mobile").value)
        loadChapter(parseInt(document.getElementById("chapter-mobile").value))
    }
    else {
        if (parseInt(document.getElementById("chapter-back").value) == chapterValue) {
            chapterValue = parseInt(document.getElementById("chapter-cover").value)
            loadChapter(parseInt(document.getElementById("chapter-cover").value))
        }
        else {
            chapterValue = parseInt(document.getElementById("chapter-back").value)
            loadChapter(parseInt(document.getElementById("chapter-back").value))
        }
    }
    document.getElementById("chapter-back").value = chapterValue
    document.getElementById("chapter-cover").value = chapterValue
    document.getElementById("chapter-mobile").value = chapterValue

}

function resetBook() {
    currentLocation = 1
    page = 0
    paper10.classList.remove("flipped")
    paper10.style.zIndex = 1
    paper9.classList.remove("flipped")
    paper9.style.zIndex = 2
    paper8.classList.remove("flipped")
    paper8.style.zIndex = 3
    paper7.classList.remove("flipped")
    paper7.style.zIndex = 4
    paper6.classList.remove("flipped")
    paper6.style.zIndex = 5
    paper5.classList.remove("flipped")
    paper5.style.zIndex = 6
    paper4.classList.remove("flipped")
    paper4.style.zIndex = 7
    paper3.classList.remove("flipped")
    paper3.style.zIndex = 8
    paper2.classList.remove("flipped")
    paper2.style.zIndex = 9
    paper1.classList.remove("flipped")
    paper1.style.zIndex = 10
    mobileFlip = false

    
    closeBook(true)
}

function loadDropDownContent() {
    document.getElementById("chapter-mobile").innerHTML = chapterSelection
    document.getElementById("chapter-cover").innerHTML = chapterSelection
    document.getElementById("chapter-back").innerHTML = chapterSelection
}

function checkPagesForward(mobile) {
    for (item in chapterList) {
    }
    if (chapterList[16] === `` && (mobileFlip || !mobile)) {
        paper9.classList.add("flipped")
        paper9.style.zIndex = 9
        paper10.classList.add("flipped")
        paper10.style.zIndex = 10
        currentLocation ++
        page = 19
        closeBook(false)
    }
    if (chapterList[14] === `` && (mobileFlip || !mobile)) {
        paper8.classList.add("flipped")
        paper8.style.zIndex = 8
        currentLocation ++
    }
    if (chapterList[12] === `` && (mobileFlip || !mobile)) {
        paper7.classList.add("flipped")
        paper7.style.zIndex = 7
        currentLocation ++
    }
    if (chapterList[10] === `` && (mobileFlip || !mobile)) {
        paper6.classList.add("flipped")
        paper6.style.zIndex = 6
        currentLocation ++
    }
    if (chapterList[8] === `` && (mobileFlip || !mobile)) {
        paper5.classList.add("flipped")
        paper5.style.zIndex = 5
        currentLocation ++
    }
}

function checkPagesReverse(mobile) {
    if (chapterList[16] === `` && (!mobileFlip || !mobile)) {
        paper9.classList.remove("flipped")
        paper9.style.zIndex = 2
        paper10.classList.remove("flipped")
        paper10.style.zIndex = 1
        currentLocation --
        page -= 2
        openBook()
        
    }
    if (chapterList[14] === `` && (!mobileFlip || !mobile)) {
        paper8.classList.remove("flipped")
        paper8.style.zIndex = 3
        currentLocation --
        page -= 2
    }
    if (chapterList[12] === `` && (!mobileFlip || !mobile)) {
        paper7.classList.remove("flipped")
        paper7.style.zIndex = 4
        currentLocation --
        page -= 2
    }
    if (chapterList[10] === `` && (!mobileFlip || !mobile)) {
        paper6.classList.remove("flipped")
        paper6.style.zIndex = 5
        currentLocation --
        page -= 2
    }
    if (chapterList[8] === `` && (!mobileFlip || !mobile)) {
        paper5.classList.remove("flipped")
        paper5.style.zIndex = 6
        currentLocation --
        page -= 2
    }

    if (mobile && chapterList[page - 1] ==`` && chapterList[page - 2] != ``) {
        mobileFlip = false
        pageList[page - 1].innerHTML = chapterList[page - 2]
        page--
    }
    else if (mobile){
        mobileFlip = true
    }
}

var chapterList = []
var chapterValue = 1

const chapterSelection = `<option value="1" class="dropper">Chapter 1</option>
                        <option value="2" class="dropper">Chapter 2</option>
                        <option value="3" class="dropper">Chapter 3</option>
                        <option value="4" class="dropper">Chapter 4</option>
                        <option value="5" class="dropper">Chapter 5</option>
                        <option value="6" class="dropper">Chapter 6</option>
                        <option value="7" class="dropper">Chapter 7</option>
                        <option value="8" class="dropper">Chapter 8</option>
                        <option value="9" class="dropper">Chapter 9</option>
                        <option value="10" class="dropper">Chapter 10</option>
                        <option value="11" class="dropper">Chapter 11</option>
                        <option value="12" class="dropper">Chapter 12</option>
                        <option value="13" class="dropper">Chapter 13</option>
                        <option value="14" class="dropper">Chapter 14</option>
                        <option value="15" class="dropper">Chapter 15</option>
                        <option value="16" class="dropper">Chapter 16</option>
                        <option value="17" class="dropper">Chapter 17</option>
                        <option value="18" class="dropper">Chapter 18</option>
                        <option value="19" class="dropper">Chapter 19</option>
                        <option value="20" class="dropper">Chapter 20</option>
                        <option value="21" class="dropper">Chapter 21</option>
                        <option value="22" class="dropper">Chapter 22</option>`

var mobileFlip = false

const ch1p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 1</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">I step onto the ground floor of the defunct apartment complex. The wind whistles through the cracks of the cobbled walls. Our footsteps echo lightly in the confined space, tapping against the shattered granite that has long lost its luster.</p>
<p id="indent">The sky is a bright overcast gray, as if threatening snow but not quite willing to act upon it. The sun’s outline is barely above the horizon. Its weak beams lightly illuminate the otherwise drab interior of the lobby.</p>
<p id="indent">Although the building was abandoned more than a decade ago, it had clearly started falling apart much earlier than that. Dangerous lead paint and withering wallpaper has done more to make the place haunting than </p>
<p id="page-end">1</p>`
const ch1p2 = `<p id="page-start"> </p>
<p id="no-indent">the disrepair of the floorboards and infrastructure. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“That’s sort of what I was thinking, too,” I say, running my index finger along the dusty top of the lobby desk. “If the cops don’t evict us within a month, we’ll be moving anyway. The last thing I want is to die from lead poisoning or the ceiling collapsing in on me. Wouldn’t even be a fun way to go.”</p>
<p id="indent">Freckles gives me a discerning look. I sigh and scoop him up in my arms, letting him climb onto my shoulder and around my neck like an uncomfortable scarf. Certainly the laziest robot cat I’ve ever seen.</p>
<p id="indent">We step out of the building, and my arms are immediately covered in goosebumps. This year’s been abnormally warm, but it’s a matter of time until the temperatures drop. Too bad I lost my jacket in the last move. I’ll have to find one that I can “borrow” soon.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Trust me, I would if I could. Unfortunately, that costs money, and all of my ideas are illegal, which, if I remember correctly, you don’t like those kinds of ideas.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I’m not arguing with you again today.”</p>
<p id="indent">Our walk to the scrapyard is a bit longer than twenty minutes. With every step, his cold metal body presses against my neck, and I can feel the vibrations of his mechanical parts. </p>
<p id="indent">He’s a one-of-a-kind steambot, built by some super-smart engineer called the Gearmaster. The dude’s apparently built almost a hundred creatures like the brass tabby, but they’ve lost a lot of their spark in the public eye.</p>
<p id="page-end">2</p>`
const ch1p3 = `<p id="page-start"> </p>
<p id="indent">At least, compared to the Clockwork. Some kid named Orion saved all of Carmsborough with the Clockwork by his side, and now they’re heroes. </p>
<p id="indent">All I’m saying is, put Freckles and I in their position, and we would’ve done it, too. Maybe even better.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“What, you don’t think we could’ve done better? I’ve witnessed you in action, Freckles. No Syndra punk could get past you and me. I mean, he gets the rest of his life handed to him while we slave away at the scrapyard. And that’s why I’m morally justified when I steal.”</p>
<p id="indent">The phrase, much like the sting of December, hangs in the air.</p>
<p id="indent">It’s hard to remember a time before I had to resort to stealing. </p>
<p id="indent">Well, that’s not entirely true. I remember the begging phase, too. Begging for food, money, a bed to sleep on, and to be accepted by an orphanage. </p>
<p id="indent">That was all I could do after Mom died. The landlord kicked me out of our apartment when I couldn’t afford rent. I’d go to busy streets and churches, hoping someone would be generous and help me, but it never got me anywhere. Sprinkle in a little racism from the head honchos at the orphanage, and I was back to square one. So, I switched to stealing.</p>
<p id="indent">Is it moral? </p>
<p id="indent">Is forcing a kid to live on the street for her entire teenage life because her only living parent dies moral? Is going to church to listen to a sermon about helping the poor sinner, but ignoring the starving child on the front steps moral? Is making a teenager work fifty-hour workweeks for just pennies a day moral?</p>
<p id="indent">I didn’t think so.</p>
<p id="indent">Freckles calls it a double standard. I call it returning the favor. </p>
<p id="page-end">3</p>`
const ch1p4 = `<p id="page-start"> </p>
<p id="no-indent">Everything’s been stolen from me. Why shouldn’t I give them the same treatment?</p>
<p id="indent">I shake the thought away. This is a conversation we have daily, and yet we get nowhere. No point in ruining my mood. Besides, we’ve gotta get moving if we want to get to work on time. I don’t have a watch, but I can tell we’re cutting it close.</p>
<p id="indent">“Ready for another fun day at Cheapskate Chad’s?”</p>
<p id="indent">Freckles tilts his mechanical head, as if acknowledging he doesn’t have much of a choice. </p>
<p id="indent">Freckles and I reach the scrapyard entrance, where everyone’s lined up for attendance. We go to the spot at the end of the line and wait for Chad to write us in. </p>
<p id="indent">“Good morning, Luna,” he says, finally reaching me.</p>
<p id="indent">“Yeah, it might be. We’ll find out soon.”</p>
<p id="indent">“Today’s eight hours instead of ten. We’re closing shop a few days for Christmas, and we’ll start again the twenty-seventh.”</p>
<p id="indent">“Maybe it really will be a good day. Christmas again? I swear we had one of those last year, too.”</p>
<p id="indent">“Funny how that works, huh?” He writes something on his clipboard and moves to the person behind me. “Keep your cat out of trouble today, please.”</p>
<p id="indent">“You always say that, and yet nothing ever happens.”</p>
<p id="indent">“Nothing happens <em>because</em> I say it.”</p>
<p id="indent">“Sounds like flawed logic to me.”</p>
<p id="indent">“Meow,” Freckles interrupts.</p>
<p id="indent">“Are you gonna patronize me all day, Freckles? I recognize flawed logic when I see it.”</p>
<p id="page-end">4</p>`
const ch1p5 = `<p id="page-start"> </p>
<p id="indent">We cut a path across the scrapyard to our usual spot, avoiding sharp metal fragments along the way. Basins full of metal and plastic scraps as deep as I am tall are scattered throughout the scrapyard, contained entirely by one dinky iron fence. The pathways between them are rarely walkable without playing hopscotch.</p>
<p id="indent">Basin thirteen is our home. We spend hours each day sorting loose material into bins and hauling it to basins six and seven, and today was going to be no different. Metals to six, plastics to seven. Fill a bin, wheel it to its new home, and repeat. If we meet the quota, we get a small bonus. </p>
<p id="indent">Freckles and I always meet the quota. I think Foreman Chad would be against our little team-up if it wasn’t beneficial for him. He gets double the labor for the price of one, and we get an extra quarter. A dollar a day hardly gets you anywhere, but it builds up eventually. </p>
<p id="indent">And with a few more months, I’ll have saved up enough to get myself some respectable clothing and a job that actually pays. After that, an apartment, and home-cooked meals, and on and on.</p>
<p id="indent">We’ve had a few setbacks. I lost twelve dollars in a pair of pants that was left behind, and here and there I’ve had to buy food or a new button for my overalls. Nevertheless, we’re closer than ever to freedom.</p>
<p id="indent">And then I’ll be done stealing. As soon as I turn eighteen.</p>
<p id="indent">I glance at Freckles to see if he has any wise remarks, but he’s busy staring at one of the scrap pieces in our basin. It has a red light that flashes in sync with a soft beeping noise it’s emitting. </p>
<p id="indent"><em>Beep. Beep.</em></p>
<p id="indent">Freckles grabs it from the pile, carries it to me in his metal mouth, and drops it in my hand. The surprisingly heavy black cube looks like it plugs into something on one end. </p>
<p id="page-end">5</p>`
const ch1p6 = `<p id="page-start"> </p>
<p id="indent">And might be worth a lot.</p>
<p id="indent">“I wonder if our friend in the Commerce District would be interested in this,” I say, putting it in my overalls’ side pocket. “Might boost us to where we need to be for that new set of clothes.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I know, wishful thinking. Sometimes you’ve gotta have a little positivity, Freckles. You’re such a downer all the time.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">One of the SH Intranational Transportation trucks that delivers raw materials reverses and parks next to our basin, and the two of us clear some space. The man driving it, Jeremy, locks eyes with me in his rear-view mirror, sticks his thumb up, and tips his cargo hold back.</p>
<p id="indent">It’s a good thing we grabbed this cube when we did. I mean, we’d have found it at some point, but if something’s not at the top of the pile, it can take months to be dug out. It’s possible the cube was already there for that long.</p>
<p id="indent">Jeremy finishes dumping a new batch of plastics and drives away, leaving us with a literal mountain of things to sort for the day. </p>
<p id="indent">By the time the shift ends, nothing else interesting has happened, so we snag our dollar from the foreman and head to the man at the docks. Fortunately for us, the Industrial District is adjacent to the Commerce District, so the walk isn’t unbearably long.</p>
<p id="indent">We weave along the streets for an hour and reach the first set of docks in the district. Half of them sit at sea level, and half hover thirty feet in the air, supported by dangerously thin wooden beams. Carmsborough docks are unique in that way, or so I’m told. I’ve never left the country. </p>
<p id="indent">A loud whistle sounds off to our right. A cloudship in one of the </p>
<p id="page-end">6</p>`
const ch1p7 = `<p id="page-start"> </p>
<p id="no-indent">upper docks is preparing to set sail. Its balloon is massive and tight, like it would pop with the slightest touch. </p>
<p id="indent">Once upon a time, I wanted to fly in a cloudship. They’re a strange Carmsborough invention that can sail both the seas and the skies, but have such a limited range that they’re hardly worth anything commercially. Most only make it as far as London without a refuel. Still, to feel the breeze in your hair like that…</p>
<p id="indent">Maybe someday. For now, there’s a beeping gadget to pawn off.</p>
<p id="indent"><em>Beep. Beep.</em></p>
<p id="indent">“Is that Luna I see?” </p>
<p id="indent">A haggled man a few years older than me is staring from across the cobbled street, sitting on a bench, wearing an overcoat that is definitely too big. </p>
<p id="indent">“Well, if it isn’t the man of the hour,” I say, making my way to him. “I’ve got something I think you’ll be interested in, Shane.” I’ve got a nickname for him, too, but it’s not exactly a good idea to call your business partner shady.</p>
<p id="indent">“Let’s have a gander at it, then.” He smiles at me, revealing a couple of missing teeth and… dirt? Cavities? I’m not sure. He’s been on the streets longer than me. Whenever his last proper teeth cleaning was is anyone’s guess.</p>
<p id="indent">“Remember, no running off with what I show you. Freckles is swifter than both of us, and heavier than you’d expect.” </p>
<p id="indent">“Yes, yes, I remember.”</p>
<p id="indent">I reveal the noisy object in my hand and offer it to him. He examines it for a solid ten seconds before his eyes go wide. The item falls out of his hand and drops to the ground as he bolts up from the bench.</p>
<p id="page-end">7</p>`
const ch1p8 = `<p id="page-start"> </p>
<p id="indent">“Are you trying to get us in trouble, kid?” </p>
<p id="indent">“What? No? What is it?”</p>
<p id="indent">“That belongs to a mob boss. See that ‘B’ on the side of it? He marks all his important mob boss stuff with it. Where’d you get this?”</p>
<p id="indent">“At the scrapyard. Are you sure it belongs to a mob boss?”</p>
<p id="indent">“Oh God, what if that beeping is a tracker? What if you’ve led him straight to us?”</p>
<p id="indent">“Calm down, Shane. Who’s the mob boss?”</p>
<p id="indent">“Get away from me, Luna, and stay away until you’ve gotten rid of that thing.”</p>
<p id="indent">Shane glances one last time at me, Freckles, and the machine, and dramatically darts away. </p>
<p id="indent">I walked an hour to the Commerce District for <em>this</em>?</p>
<p id="indent">I pick the item up and return it to my pocket. There’s no way what Shane is saying is true. Probably another one of his schizophrenic rants. He’ll be back in an hour, apologizing for the outburst.</p>
<p id="indent">That said, he’s never acted like that when I’ve brought him something. Could it really belong to a mob boss? And, second question, could I give it to said mob boss for a small chunk of change?</p>
<p id="indent">Both are excellent questions for when he apologizes to me. In the meantime, I might as well hunt for dinner or something else to scavenge. Maybe even a new coat.</p>
<p id="indent">With Freckles still beside me, I work my way through the buildings between the Commerce and Industrial districts, on the lookout for anything that catches my eye. </p>
<p id="indent">A few blocks from the spot we met Shady Shane, the smell of warm bread wafts into my nose. It’s heaven. I make a beeline straight for the </p>
<p id="page-end">8</p>`
const ch1p9 = `<p id="page-start"> </p>
<p id="no-indent">source and find myself face-to-face with Thatch’s Bakery. </p>
<p id="indent">It’s been about three months since I’ve had fresh bread. I can usually loot a trash can next to some sort of restaurant where it’s at least a day old, but by that point it’s stale and a little harder to tolerate. Beggars can’t be choosers, but my begging days are long gone. </p>
<p id="indent">Freckles and I walk to the back and spot a dumpster. I lift the lid, and… jackpot.</p>
<p id="indent">It’s <em>filled</em> with bread. They must’ve just cleaned inventory. If I’d planned to be scavenging in the Commerce District today, I would’ve grabbed a bag or two to take stuff in this morning. I guess I’ll have to settle with whatever I can fit in my arms.</p>
<p id="indent">It’s not stealing if they didn’t want it anyway, I don’t think. I’m sure a lawyer wouldn’t agree with me, but if it’s in the dumpster, what more are you going to do with it? You’re obviously not gonna sell it, that’s for sure.</p>
<p id="indent">“You plannin’ on sharin’?” someone asks behind me. My hand isn’t even all the way in yet. “That’s my stake your arm’s in.”</p>
<p id="indent">Freckles lets out a metallic growl. I turn to see who it is, but I don’t recognize the guy. </p>
<p id="indent">Of course the place with a dumpster full of bread is gonna have claims staked. You’ve outdone yourself this time on the critical thinking test, Luna.</p>
<p id="indent">“Yes, sir, I certainly am planning on sharing,” I say, sneaking away from the dumpster. “I wasn’t sure if this was claimed or not, but I’m desperately hungry. You wouldn’t have a problem with a little girl like me getting some food here, right?”</p>
<p id="indent">“Normally I wouldn’t,” he says, walking closer to me, “but said little girl has one blaring flaw that I simply can’t ignore.”</p>
<p id="page-end">9</p>`
const ch1p10 = `<p id="page-start"> </p>
<p id="indent">“Oh, don’t you dare say it. Let’s not be racist, now.”</p>
<p id="indent">He pulls a knife out of his sleeve and points it at me. “This little black girl is in the wrong part of the city.”</p>
<p id="indent">I was planning on going a full week without getting into a fight in some shady alley. Truly, I was. </p>
<p id="indent">After all, blood stains are awful hard to remove from my overalls.</p>
<p id="indent">Freckles and I both charge the guy at the same time, but Freckles connects first. The man receives a metal cat to the chest and smacks against the cobblestone wall of one of the alley buildings. In retaliation, he grabs onto Freckles and tosses him aside. The distraction lets me get in and kick at one of his legs.</p>
<p id="indent">He screams in pain and swings at me with his knife. I dodge away, lining Freckles up for the next shot. He jumps on the man’s back, sending them both stumbling towards me. My fist flies out and lands on his nose, creating an unpleasant cracking sound. It makes me queasy every time.</p>
<p id="indent">The man yells again, holding his nose with his free hand. “You broke my nose, you stupid b—”</p>
<p id="indent">In one last motion, I sweep his legs from under him, and he lands on his face. The knife clatters down at his side, which Freckles picks up with his mouth.</p>
<p id="indent">“Let’s move,” I say, wiping my bloody hand on my overalls and moving to the dumpster. I grab three or four loaves, hug them to my chest, and the two of us quickly leave the alley.</p>
<p id="indent">I’m not even sure where we’re going. That’s something I’ll have to figure out later. </p>
<p id="indent">We traverse a couple of alleys and emerge on a different street. I slow my pace and join the crowd flowing along the sidewalks. As far as they </p>
<p id="page-end">10</p>`
const ch1p11 = `<p id="page-start"> </p>
<p id="no-indent">know, we didn’t do anything. We bought this bread with our hard-earned money and didn’t fight another homeless person for it.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Look, I’m not proud of what happened either, Freckles, but he had it coming. Besides, we needed this bread.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Okay, I needed this bread. Obviously, you don’t eat, so there’s no reason you would—”</p>
<p id="indent">“Meow.”</p>
<p id="indent">Freckles stops and tugs at the pocket of my overalls where the beeping cube is. </p>
<p id="indent"><em>Beep beep. Beep beep.</em></p>
<p id="indent">It’s going faster.</p>
<p id="indent">Oh my God, maybe it is a tracker. Or a bomb. Or it’s leading us to something.</p>
<p id="indent">I pull it out. The red dot is flashing at the same rate as the beeping. </p>
<p id="indent">“You realize we have to test this, right?”</p>
<p id="indent">Freckles focuses on me with a blank stare. I’m gonna assume that means he agrees.</p>
<p id="indent">The two of us hurry back to the front of Thatch’s Bakery and listen to the beeping.</p>
<p id="indent"><em>Beep. Beep.</em></p>
<p id="indent">“It’s leading us to something!”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Of course this is a good idea, Freckles. Where’s that bravado you had last year when we went to the old fishing dock? Hell, where’s that bravado you had when you jumped on that guy and forced him against the wall?”</p>
<p id="page-end">11</p>`
const ch1p12 = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Well then, let’s go. Maybe it’ll lead us to treasure. Besides, we don’t work tomorrow, so we can afford to have an overnight hunt.”</p>
<p id="indent">We move to the spot Freckles first noticed the increased beeping speed at and make sure it still happens.</p>
<p id="indent"><em>Beep beep. Beep beep.</em></p>
<p id="indent">Good.</p>
<p id="indent">There won’t be many alley shortcuts on this adventure. The rest of Carmsborough will have to watch me follow a beeping cube while clinging tightly onto bread.</p>
<p id="indent">Even though all of Carmsborough was sectioned into districts nearly a hundred years ago, the gray streets and the buildings that fit in between them are winding and pattern-less. Most buildings don’t even have alleyways, and the ones that do are usually rat infested or occupied by someone as unfortunate as me.</p>
<p id="indent">We cross the streets and navigate the cracked sidewalks of the Commerce District, avoiding cars and bikers whenever necessary.</p>
<p id="indent"><em>Beep beep beep. Beep beep beep.</em></p>
<p id="indent">“Closer…”</p>
<p id="indent">This is the furthest I’ve ever been in the Commerce District. The buildings are taller and more modern, with large, reflective windows and lots of metal. People wearing suits are coming in and out of fancy revolving doors.</p>
<p id="indent">I’ll bet if I robbed one of these suits, they’d be loaded with cash.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I know, I know. Doesn’t stop me from daydreaming, though.”</p>
<p id="indent">I spot a wide alley up ahead, which opens to a second set of docks. </p>
<p id="page-end">12</p>`
const ch1p13 = `<p id="page-start"> </p>
<p id="no-indent">Did we somehow already cross this entire section of the Commerce District? Either way, that alley is the perfect shortcut to end our treasure hunt sooner.</p>
<p id="indent">The sun is a lot lower in the sky, and hides behind most of the towers we pass. The alley is lit solely by the sunlight that can sneak past the two buildings that form it. The shoreline is not too far away. This cube better not be leading us into the ocean. I didn’t pack my swimsuit today. Not that I own one.</p>
<p id="indent">A man steps into the alley in front of me, wearing a suit that hardly fits his muscular frame. I stop dead in my tracks, and Freckles gets into a defensive position.</p>
<p id="indent">“Thank you so much for bringing me my tool,” a voice echoes from where we entered the alley. I turn to face a bald man with abnormally large hands.</p>
<p id="indent">Like, huge hands. Big enough that his shirts have to have stretched sleeve holes. I can’t wrap my head around how big they are, but he could easily wrap one around my head.</p>
<p id="indent">“I’m not sure what you’re talking about,” I say, eyes glued to the pancakes attached to the ends of his arms. He’s pretty tall, too–maybe seven feet. This poor man and his awful proportions.</p>
<p id="indent">“That device in your hand belongs to me,” he says. “I would appreciate if you gave it back without causing too much trouble.”</p>
<p id="indent">I check behind me again. The muscular man at the other end of the alley is much closer now.</p>
<p id="indent">Something tells me there’s no easy way out of this.</p>
<p id="page-end">13</p>`
const ch1p14 = ``
const ch1p15 = ``
const ch1p16 = ``
const ch1p17 = ``
const ch1p18 = ``
const ch1 = [ch1p1, ch1p2, ch1p3, ch1p4, ch1p5, ch1p6, ch1p7, ch1p8, ch1p9, ch1p10, ch1p11, ch1p12, ch1p13, ch1p14, ch1p15, ch1p16, ch1p17, ch1p18]

const ch2p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 2</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“So what’s this device do, anyway?” I ask, stalling. There’s nothing in the alley to fight with, and no way to leave without plowing through one of them. “Does it lead you to some buried treasure or something?” </p>
<p id="indent">“You’ll never know.” The man cracks his hand-sized knuckles.</p>
<p id="indent">“Bet you’re wrong. And, I’ll bet when you clap, it sounds like a building collapsing.” </p>
<p id="indent">“That’s a good one. Not very original, but a good one nonetheless.” He steps closer.</p>
<p id="indent">“Yeah, I’m sure you get compared to those big construction cranes all the time, huh?”</p>
<p id="page-end">14</p>`
const ch2p2 = `<p id="page-start"> </p>
<p id="indent">Do I take on the big-handed guy and the muscular guy, or give them the beeper thing and pray they let me go? </p>
<p id="indent">Freckles, apparently making the choice for us, roars and charges the guy behind us. I follow suit, yelling and charging. </p>
<p id="indent">The goon braces for impact and handles the attack of the heavy metallic beast pretty well, but crumbles when I collide right after. The three of us fall, all in one messy pile. The loaves of bread in my arm suffer a bit, but they’re still edible. </p>
<p id="indent">With a yell, the large-handed man rushes down the alley. Freckles and I pause for a second before I scramble to get up, and we run for the docks. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I noticed we’re in trouble, Freckles. What would you have recommended?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“This thing might lead to a jackpot. I couldn’t just hand it to the first disproportionate enemy I crossed. Besides, you’re the one who attacked first.”</p>
<p id="indent">My clunky boots and his heavy paws rattle against the boards of the old wooden dock with every bound, turning heads and clearing a path in front of us. I don’t dare check to see how close they’ve gotten. The last thing I want is to be tackled by a grown man on a densely populated dock.</p>
<p id="indent"><em>Beep beep beep beep. Beep beep beep beep.</em></p>
<p id="indent">Cloudships with different-colored balloons blur past us, all in different stages of docking or undocking. For a moment, I get distracted by their designs. Some are really artistic, but the rest have a simple pastel color.</p>
<p id="indent">Reality comes crashing back to me immediately, however, when my </p>
<p id="page-end">15</p>`
const ch2p3 = `<p id="page-start"> </p>
<p id="no-indent">eyes lock onto a cart of melons being wheeled in my path. Freckles manages to jump out of the way to avoid it, but I swerve way too late, crashing into its side. An army of watermelon dislodges from the display, rolling all over the place.</p>
<p id="indent">I drop all the bread instinctively and look at the two men chasing us. They’re far enough away, but closing in quickly. With the beeper still in my hand, and going off insanely fast, I retrieve a loaf and a small melon and zip right around the cart.</p>
<p id="indent">“Hey!” the cart owner yells. “You’ve gotta pay for that!” </p>
<p id="indent">“Sorry, not sorry!” I yell back, rejoining Freckles. We make it a little further before a loud crash reverberates through the sea-soaked wood. I don’t even have to look to know they charged into the cart. They’re not gaining on us all that much, but I still have no clue where the beeper is leading us—</p>
<p id="indent"><em>Beeeeeeeeeeeep.</em></p>
<p id="indent">We stop right in front of a plain, unassuming cloudship. This must be the spot the device wants us to be at. But why?</p>
<p id="indent">Freckles and I exchange a brief glance and simultaneously decide to hop on board. </p>
<p id="indent">My first time on board a cloudship, and it’s because I’m hiding from a mob boss. A little outside my comfort zone on this adventure.</p>
<p id="indent">We hurry inside, descending a flight of stairs where I can only assume the steering wheel is. There’s no doubt they saw which ship we went in, but it is their ship. It wouldn’t be hard to guess.</p>
<p id="indent">“Meow.” Freckles points his head towards a smaller room. Its lights are off, but I can faintly make out a steering wheel and a few other buttons in the faint sunlight peeking in from the windows.</p>
<p id="page-end">16</p>`
const ch2p4 = `<p id="page-start"> </p>
<p id="indent">“You’re the best, Freckles,” I whisper, despite the device still beeping and being incredibly loud, and tiptoe into the room. I feel my hand along the wall, searching for a light switch, which reveals labels, cables, and an array of unlabeled buttons. Luckily for us, someone left the keys inside of the ignition.</p>
<p id="indent"><em>Creak.</em></p>
<p id="indent">A board above us strains under the weight of a foot. If there’s any time to kick this puppy into full gear, it’s now.</p>
<p id="indent">I carefully set the bread and watermelon on the floor and turn the key in the ignition. The controls in front of me spring to life, and somewhere on board, the hum of the engine kicks in. </p>
<p id="indent">“Alrighty, how do we get this thing moving?”</p>
<p id="indent">The sound of footsteps descends the stairs behind us. Freckles readies himself, waiting to pounce behind the doorframe. My eyes frantically scan the buttons and levers in front of me for some sort of clue. They land on a large switch that says “ENGAGE LOCK” at one end and “DISENGAGE LOCK” on the other. It’s flipped up in the engaged position.</p>
<p id="indent">“Here’s to this being the right thing to do,” I say, pulling the lever. The ship lurches, and my gut slams into the wheel. The footsteps in the other room stumble but continue in our direction.</p>
<p id="indent">The ship rises a bit and moves forward, marking our ascent away from the commerce dock. I turn and clench my fists, ready to fight the intruder on board. He appears in the doorway, and Freckles launches himself at the thug. </p>
<p id="indent">The man, caught entirely off guard, is forced backwards by the impact. His head reverberates off a metal pipe jutting from the wall, which cracks </p>
<p id="page-end">17</p>`
const ch2p5 = `<p id="page-start"> </p>
<p id="no-indent">open, spraying what I can only assume is steam. He hits the floor, unconscious.</p>
<p id="indent">I unclench my fists and stand in shock.</p>
<p id="indent">“Well, uh, good job, Freckles.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Now what do we do?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">I turn towards the cockpit windshield. The shock on my face turns to horror.</p>
<p id="indent">We’re on track to collide with another cloudship.</p>
<p id="indent">“Ohmygod ohmygod ohmygod!”</p>
<p id="indent">I spin the steering wheel quick and hard to the right, sending the whole ship tilting and shuttering. There’s a long bar next to the steering wheel that looks like it can be moved up and down, so I give it a tug. My stomach flips as the ship sinks lower in the air, coming closer to the crashing waves below us.</p>
<p id="indent">The cloudship disappears from view above us as we limbo between it and the ocean, but just in front of us, two more ships appear. And, of course, both are directly in our path.</p>
<p id="indent">“I should’ve gone up.” I pull the bar towards me as hard as possible. The commandeered ship groans under the strain, but does as told, and narrowly dodges them.</p>
<p id="indent">I scan the entire cockpit window, making sure that was the last of the fun obstacles in our way. The sky is a kaleidoscope of colors, unblotted by any clouds or more cloudships. It might be beautiful if I weren’t choking on adrenaline.</p>
<p id="indent">“Meow.”</p>
<p id="page-end">18</p>`
const ch2p6 = `<p id="page-start"> </p>
<p id="indent">Freckles nudges one of the unconscious man’s arms, which flops lifelessly back to the floor. His victim, the muscular man we’d had the pleasure of meeting earlier in the alley, clearly never stood a chance.</p>
<p id="indent">“We should tie him up in case he stirs again.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“There better be rope. Otherwise, we’re in some serious trouble. And I have no intention of throwing him off into the ocean.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I figured you’d appreciate that.”</p>
<p id="indent">I duck under the steam still spewing from the pipe, and the two of us go to explore the small ship, hunting for rope or something similar to tie the thug down.</p>
<p id="indent">“Can we talk about how well I handled steering this thing? I was a natural. Didn’t even know what that bar did. Pulled it anyway. What a champion.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“No, it wasn’t luck. It’s called intuition.”</p>
<p id="indent">On the top deck, we discover a storage room filled with random food, miscellaneous tools, and an incredibly thick rope long enough to stretch the entire length of the ship. I can’t even wrap my hand around its circumference. Carrying this much is out of the question.</p>
<p id="indent">“Well, this sucks. Any more ideas?”</p>
<p id="indent">Freckles leans forward and opens his mouth, letting the knife we took from the homeless man earlier clatter to the ground. </p>
<p id="indent">“Wait, you’ve been stashing that in there the entire time? Where was that when we were pinned in the alley?”</p>
<p id="indent">“Meow.”</p>
<p id="page-end">19</p>`
const ch2p7 = `<p id="page-start"> </p>
<p id="indent">“Oh no, sir. You don’t get to claim moral high ground when we’re facing certain doom like that. We’re going to have a serious conversation on when it’s okay to stab people once we’ve figured this situation out.”</p>
<p id="indent">I roll a solid portion of rope off its comically large spindle and start cutting away at it with the knife. Then, I throw one end over my shoulder and drag the rest of it behind me on the ground. Freckles bats at it all the way back down to the unconscious man on the lower level.</p>
<p id="indent">Freckles grabs the opposite end of the rope in his jaws, and together we bind the motionless man until he’s barely visible underneath. I tie the thick rope to the best of my ability, and we push the man against a wall.</p>
<p id="indent">“Fingers crossed that holds him. I’m gonna get some dinner now.”</p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>)○ ◦ ∙</p>
<p id="indent">Despite having an understandably limited stock of food, I collect some cheese, water, and a barrel full of peanuts to match the bread and watermelon I’d stolen earlier. There’s also beer, but I don’t figure driving an airship for the first time and holding a man three times my size captive while drunk is a good idea.</p>
<p id="indent">I bring the food and water with me to the cockpit, which is getting uncomfortably warm with the steam still leaking out of the broken pipe. My next goal is to find something to patch that up with, because there’s no way that pipe isn’t important.</p>
<p id="indent">It doesn’t take me long to finish half of the small watermelon, which I cut using the stolen knife, so I switch to some of the other foods in front of me.</p>
<p id="indent">“You realize this is easily my most diverse meal this month? Maybe this actually was a good idea.”</p>
<p id="page-end">20</p>`
const ch2p8 = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“But think of all the possibilities. We could go to London, or even France, if we want. We could become sky pirates and fight for justice. ‘Captain Luna, the blood moon pirate.’ How does that sound?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I’ve been sitting on that one for a while. I think it has a nice ring to it.”</p>
<p id="indent">Red flashing lights go off in the cockpit, partnered with a blaring siren. Freckles and I bolt upright, startled by the interruption.</p>
<p id="indent">“I’m not sure what this means,” I say, hunting for clues on the dashboard. Nothing jumps out at me. A scan of the windshield leaves me empty-handed, too.</p>
<p id="indent">I run to the top deck of the ship and gander at the rest of the area. Behind us, five cloudships are slowly approaching, each bearing the same ‘B’ symbol as the beeper in my pocket.</p>
<p id="indent">The beeper.</p>
<p id="indent">I can’t believe I forgot about the beeper! It’s hard to notice because of the sirens, but the beeping object is still violently flashing to its high-pitched tempo. It has to belong to something here.</p>
<p id="indent">I hastily return to the cockpit. Freckles is hunched down, his back arched angrily. </p>
<p id="indent">“We’ve got company following us,” I say, searching for a spot to plug the strange item in. “I think we’ll have to re-dock at Carmsborough. I doubt there’s enough gas to outrun these guys, or any weapons to slow them.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I can’t stop on a dime midair, Freckles. Besides, I don’t think they’re </p>
<p id="page-end">21</p>`
const ch2p9 = `<p id="page-start"> </p>
<p id="no-indent">going to be all that friendly with us after what we did to brawns in the corner.”</p>
<p id="indent">I turn the steering wheel left, trying to move us to the docks in a way that we won’t be rammed by the five enemy ships slowly making their way towards us. </p>
<p id="indent">Now what to do with the beeper?</p>
<p id="indent">Freckles and I search the ship again, looking in rooms new and old for a place to put the cube. Through the windows, we can see Carmsborough slowly reappearing along the horizon, and the ships edging slightly closer by the minute. </p>
<p id="indent">A click sounds across the ship, turning off the alarms on board. A loud noise rustles before a voice speaks. “Stop your ship and allow yourself to be boarded, kid.”</p>
<p id="indent">“How do we talk to them?” I ask Freckles, who stares blankly at me. We hurry to the cockpit again, and I find a button for a push-to-speak microphone.</p>
<p id="indent">“Sorry, that isn’t gonna happen. Tell me what this device does, and maybe we can talk about touching base.”</p>
<p id="indent">“You’re in way over your head, girl. The last thing you want is to make my boss more upset than he already is.”</p>
<p id="indent">“Tell your boss I want five thousand dollars for the safe return of his ship and this cube thing.”</p>
<p id="indent">“This is not a negotiation. You are in no position to give demands. We have no problem knocking you out of the sky.”</p>
<p id="indent">“Oh, please. You haven’t done it yet because you need this cube. You wouldn’t dare.”</p>
<p id="indent">The line goes silent for a moment, and I turn to go back to searching. </p>
<p id="page-end">22</p>`
const ch2p10 = `<p id="page-start"> </p>
<p id="no-indent">Then, while climbing the stairs, I hear loud wood cracking coming from every direction. Bullets pound the hull of the ship, and although neither of us are in the danger zone, the warning is completely clear.</p>
<p id="indent">“Last chance, kid. Stop now, or we will rain fire on you until you have no choice but to crash and burn.”</p>
<p id="indent">There’s one last room we haven’t checked yet, so I finish running up the stairs and burst into the door. A forward-facing window reveals how close to Carmsborough we really are. Barely a minute more, and we could try to dock.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I know, Freckles, but it has to be–there!”</p>
<p id="indent">Right in front of us is a strange black machine, as tall as I am, with a plug that looks like the handheld beeper would fit perfectly inside.</p>
<p id="indent">What could it do? Is it a shield? Or a gun? Or some sort of teleporter that will take me to a safe place?</p>
<p id="indent">I plug the object into the machine, and it lights up dramatically. Some inner mechanisms begin whirring, shaking the room and creating an unpleasant sound. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“I’m, uh, not sure what it’s doing either.”</p>
<p id="indent">“What have you done?” the voice on the speaker says, a quiver in their voice. </p>
<p id="indent">Just outside the window, a bright glowing light appears, coming from right below where the machine sits on board. Its color slowly gradients from white to red, and the buzzing gets louder. </p>
<p id="indent">Heat waves warp the room. The glass window slowly turns a dangerous pink-red shade and melts away. A layer of sweat cakes my </p>
<p id="page-end">23</p>`
const ch2p11 = `<p id="page-start"> </p>
<p id="no-indent">forehead, forcing Freckles and I to step back. The wood of the ship glows and smolders, and the light expands a bit more.</p>
<p id="indent">Oh god. What <em>have</em> I done?</p>
<p id="indent">Without warning, the bright light shoots off in a straight line down to the dock. Below us, the boardwalk erupts in flames, and a loud explosion sounds off. Embers, ash, and scraps of different materials are thrown into the air.</p>
<p id="indent">People scatter in different directions–some towards the chaos, but most away from it. The beam of light deactivates, and the machine in front of us comes to a screeching halt. Alarms go off again. There’s no doubt the cloudships following behind us are close to connecting with and boarding our ship.</p>
<p id="indent">I’m starting to think I might be in a little bit over my head.</p>
<p id="page-end">24</p>`
const ch2p12 = ``
const ch2p13 = ``
const ch2p14 = ``
const ch2p15 = ``
const ch2p16 = ``
const ch2p17 = ``
const ch2p18 = ``
const ch2 = [ch2p1, ch2p2, ch2p3, ch2p4, ch2p5, ch2p6, ch2p7, ch2p8, ch2p9, ch2p10, ch2p11, ch2p12, ch2p13, ch2p14, ch2p15, ch2p16, ch2p17, ch2p18]

const ch3p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 3</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Freckles and I descend to the docks in our hijacked ship. A horde of people surrounds the damage I caused with the laser beam. The ships behind us are a stone’s toss away, but clearly letting us land instead of tearing us apart with bullets. </p>
<p id="indent">“I think I messed up, Freckles.” Fear pricks at the corners of my eyes, and my arms are permanently tensed. Adrenaline’s coursed through my body too many times today, and I can already feel myself winding down again. </p>
<p id="indent">Freckles doesn’t even spare the energy to reply. We both understand how bad of a situation this is.</p>
<p id="page-end">25</p>`
const ch3p2 = `<p id="page-start"> </p>
<p id="indent">And, unlike every other situation I’ve been in, I can’t just run away. Even if I do manage to escape the scene somehow, there’ll be cops and mobsters looking to hunt for me on every street in Carmsborough. It wouldn’t be long before I’d be caught.</p>
<p id="indent">How do you explain that to the cops? “A mob boss was chasing me, so I stole one of his airships and tried a technology I didn’t understand as a last-ditch effort to avoid death, only to find it would vaporize an entire portion of the Commerce District?”</p>
<p id="indent">For that matter, how would I explain this to the mob boss? ‘I wanted to exploit you for money, and when that didn’t work, I took the nuclear option?’</p>
<p id="indent">I’d get off easier with the cops.</p>
<p id="indent">I shakily land the ship, barely making it to one of the cloudship docks. There’s no way for me to tell if anyone’s waiting for us outside, but I can almost guarantee there is. I look at Freckles. Even though he has no way to show emotion, I can tell he has the same somber weight looming over him as I do.</p>
<p id="indent">“Let’s go, bud. If it’s the mob that meets us at the dock, we have to go out swinging. If it’s the police, I want you to find yourself another best friend. Maybe next time, meet someone who isn’t getting into trouble every day.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">I offer my hands again, and he leaps onto my shoulders. Friends ‘til the very end. If we weren’t about to walk into certain doom, I’d probably cry.</p>
<p id="indent">We climb the stairs and brace ourselves for whoever’s waiting for us on the dock. By now, the enemy ships should’ve also had a chance to </p>
<p id="page-end">26</p>`
const ch3p3 = `<p id="page-start"> </p>
<p id="no-indent">dock, so we’ll for sure get visitors at some point.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I realize that. I’m not looking forward to it, either.”</p>
<p id="indent">I peer off the deck of the ship for a split second. There’s… only one person, standing in anticipation. He’s wearing a bright red business suit with fuzzy white accents, a red tie, a white button-up shirt, and a Santa Hat to top it all off. His left arm is resting on a cane, which he’s pivoting back and forth in front of him in a wide motion.</p>
<p id="indent">“Hello?” I call, staring at the man.</p>
<p id="indent">“Well, I don’t have all day,” he says, his accent different. Australian, or maybe New Zealand. I don’t know the difference.</p>
<p id="indent">I cautiously step off the ship and to the dock, Freckles as suspicious and attentive as I am. The stranger has a smile on his face, with no sign of hostility.</p>
<p id="indent">This is confusing.</p>
<p id="indent">“Who are you?”</p>
<p id="indent">“I am your ticket out of this mess, young girl. Please, come walk with me, and we’ll talk.”</p>
<p id="indent">I have no reason to trust this guy. Actually, I have negative reasons to trust this guy, with my number one reason being the fact that none of the mob boss goons have made their appearance yet, even though I can clearly see that their ships landed.</p>
<p id="indent">“Fair enough,” he says, noticing my lack of movement. “I understand that trust is a difficult thing, especially to those who have to fend for themselves. Let me tell ya, kid, you’ve made some pretty powerful enemies today, you realize that?”</p>
<p id="indent">I glance at the hijacked ship, which is still smoldering from the mess I </p>
<p id="page-end">27</p>`
const ch3p4 = `<p id="page-start"> </p>
<p id="no-indent">made earlier. “I’m well aware.”</p>
<p id="indent">“You’ve made a mob boss very pissed today. Please, come walk with me. I insist. If you’re worried about those numbskull henchmen, they won’t do a thing with me nearby.”</p>
<p id="indent">Without waiting for me, he walks down the dock, using his cane like some old-timey rich-guy flair item. He doesn’t even seem to need to use it. I take slow steps behind him, increasingly curious to see where this is going.</p>
<p id="indent">Just who is this man, so confident we won’t be attacked? Surely, he’s not the mob boss, right? That was the big-handed dude from the alleyway, not this jovial man dressed like a holly jolly entrepreneur.</p>
<p id="indent">“What’s your name, kiddo?”</p>
<p id="indent">“Luna.”</p>
<p id="indent">“And your cat’s?”</p>
<p id="indent">“Freckles.”</p>
<p id="indent">“Ah. Well, it’s a pleasure to meet you, Luna and Freckles. My name is Bijabers. I’m what you might call the owner of the ship you so haphazardly weaponized against a peaceful civilization.”</p>
<p id="indent">Oh, God. He <em>is</em> the mob boss.</p>
<p id="indent">“Look, sir. I’m incredibly sorry for what happened back there. I had no clue what that machine did, and your men were chasing me, and I was trying to—”</p>
<p id="indent">“Please, spare yourself the breath, Luna. I’d be a hypocrite if I was mad at you for attempting to make a quick buck, even if it did go south like that. For that reason, I’m not upset.”</p>
<p id="indent">“You’re not upset?”</p>
<p id="indent">He turns to face the two of us. His smile is gone.</p>
<p id="page-end">28</p>`
const ch3p5 = `<p id="page-start"> </p>
<p id="indent">“Oh, no. I am. I’m fuming, actually. That technology was way too expensive to be wasted like that. As fun as it was to see the dock get shredded, the materials that went into creating that device are incredibly rare, and I cannot let a transgression like this slide.”</p>
<p id="indent">He snaps, and his henchmen flood out from the ships and swarm the surrounding dock. The disproportionate man from the alley also appears, and stands right behind Bijabers. He looks as disgruntled as his boss.</p>
<p id="indent">“Your sole saving grace right now, Luna, is that I am in desperate need of people to work my mineral resources mine. The device must be recreated within the next couple of weeks, and so there’s going to be a lot of overtime work for those poor workers. Luckily for you, it just so happens a free excavation overseer position opened up.”</p>
<p id="indent">“Let me guess, your idea of ‘working’ is a step above slavery?”</p>
<p id="indent">“A step above?” He gives me a twisted but genuine-sounding laugh. “Men, get the girl.”</p>
<p id="indent">The horde of bad guys closes in on us, and the large-handed man stares at us intently.</p>
<p id="indent">“I want the cat, boss,” he says, smiling. “Consider it my trophy.”</p>
<p id="indent">“Alright, Slaphand, you can have the cat. Please, don’t make too much of a mess.”</p>
<p id="indent">There’s only one way we’re escaping this one.</p>
<p id="indent">I flip the knife out again, and Freckles rolls off of my shoulders. We both get ready to attack Slaphand, who honestly couldn’t have picked a more suitable mob name for himself. He cracks his hot-dog fingers and charges at us.</p>
<p id="indent">I throw the knife at him as he runs, which surprisingly goes blade-first into his shoulder. He winces a little, but doesn’t lose momentum until </p>
<p id="page-end">29</p>`
const ch3p6 = `<p id="page-start"> </p>
<p id="no-indent">Freckles pounces at him, smashing the knife further in. Then he stops, grabs the knife from his shoulder, and kicks Freckles, who does a flip midair and lands on his paws. Before Freckles can go in for another attack, Slaphand’s already reached me. He aggressively picks me up with both hands. </p>
<p id="indent">I squirm, but it’s no use. His massive hands keep a tight grip on my arms and stomach, and I’m at his mercy. He furrows his brow, lifts me above his uninjured shoulder, and launches me high into the air.</p>
<p id="indent">I scream as I fly off the side of the dock. The water below is awake and ready for me. Somehow, out of everything that’s happened today so far, being thrown off the dock is the scariest. I try to take a quick breath, but lose all of my stored air on impact.</p>
<p id="indent">The water is deep and dark, and I can feel its cold pressure pushing against my chest. Panic swells in my lungs, but I do my best to not breathe instinctively. At some point, the inertia of being thrown wears off, and I stop sinking as fast. All I have to do is make it to the surface before it’s too late.</p>
<p id="indent">How deep was I thrown? I desperately swing my arms towards the surface, but I can feel the ebbing and flowing of the water fighting against my every move. The faint lights of incandescent bulbs hover above me, but no matter how hard I move my arms and legs, I can’t seem to reach them.</p>
<p id="indent">I’m gonna drown.</p>
<p id="indent">No, please… this can’t be how I go.</p>
<p id="indent">There’s so much still to do. Find a job, get new clothes, have a life, and maybe even start a family. I can’t lose it all because of one lousy day and one big accident.</p>
<p id="page-end">30</p>`
const ch3p7 = `<p id="page-start"> </p>
<p id="indent"><em>Focus, Luna</em>. You’ve got this. Just swim to the top and get some air. That’s all you’ve gotta do.</p>
<p id="indent">I throw my hands up even harder, scooping at the water with as much exertion as my drained body can muster. The surface of the water is more visible, and so close. My brain is pounding from lack of oxygen, but I keep going. I have to.</p>
<p id="indent">Finally, lightheaded and losing sight, my head emerges, and I take the biggest breath of air in my life. And then the second-biggest one. </p>
<p id="indent">Surrounding me from on the docks is the crowd of henchmen, watching and waiting for me to climb up. There’s a ladder not too far away, but I can’t just walk back into this mess, right?</p>
<p id="indent">In front of me, Bijabers and Slaphand appear, the latter carrying Freckles in a large metal cage. He’s hissing from inside, but he almost sounds scared or sad.</p>
<p id="indent">It’s over.</p>
<p id="indent">“It’s over, kid,” Bijabers says, echoing my thoughts. “Might as well join the rest of the party.”</p>
<p id="indent">“You’ll never get away with this, Bijabers. Orion and the Clockwork will stop you, and you’ll go to jail, just like Syndra did.”</p>
<p id="indent">He lets out another equally twisted laugh. I hate the sound.</p>
<p id="indent">“Sweetheart, Orion and the Clockwork have no clue we exist. Your precious little boy wonder is on the complete opposite side of town, having dinner with his father and sister. You’ve lost.”</p>
<p id="indent">I make the climb of shame up to the dock, where a group of them immediately handcuff me and push me away from Freckles, Slaphand, Bijabers, and the wreck of a ship that I’d steered moments ago. I strain my neck, trying to look back at my caged cat, but Slaphand has already </p>
<p id="page-end">31</p>`
const ch3p8 = `<p id="page-start"> </p>
<p id="no-indent">disappeared with my best friend. </p>
<p id="indent">Along with some other apparent victims of Bijabers and his goons, I’m loaded onto a normal-sized airship a little further down the docks. They line us up and chain us to a wall in what appears to be an old armory or living quarters. Thugs armed with guns and batons pace the room, even though there’s only four of us and I’m the only one who looks anywhere close to physically capable. </p>
<p id="indent">But I am exhausted. My legs are jelly and it’s hard for me to stand, but my handcuffs are way too high on the wall for me to sit. It’s the second-worst mental torture they’re putting me through. The first is not knowing where Freckles is or where I’m headed. </p>
<p id="indent">“Why’d they pick you up?” the man closest to me asks. He’s severely beaten, with bruises and cuts blanketing his visible skin. </p>
<p id="indent">“I used some super-valuable technology of theirs to accidentally blow up a commerce dock. You?” </p>
<p id="indent">“The loan I took with them was too much, and I couldn’t pay it on time, so I decided to go out with a bang.” He points to his very obvious damages. “You should see the other guy.”</p>
<p id="indent">That’s so… mundane. You mean to tell me I’m going to the same slave island as a guy who couldn’t pay a loan he took irresponsibly? I did infinitely more damage to Bijabers than this random schmuck, and yet we’re both gonna end up getting black lung and dying in a mineshaft for whatever “precious minerals” the psychopath wants.</p>
<p id="indent">“What’d you two do?” I ask, looking at the two others chained on the opposite wall.</p>
<p id="indent">“The same. We couldn’t pay our debt.”</p>
<p id="indent">“So I’m stuck on a slaver ship with three people, whose only crimes </p>
<p id="page-end">32</p>`
const ch3p9 = `<p id="page-start"> </p>
<p id="no-indent">are poor money management?”</p>
<p id="indent">“That’s most of the people he gets,” the guy beside me says. “Poor chumps trying to make it to the next paycheck that can’t afford his rate but take the loan, anyway. He also snags people who oppose him before they make too much of a scene. That way, he stays undetected to the police and Orion.”</p>
<p id="indent">“Do you think Orion will save us?” one of them asks.</p>
<p id="indent">“Don’t get your hopes up,” I answer. </p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="indent">Even though I’m stuck standing against the hard wooden wall, I manage to doze off until the ship comes to a stop an undetermined amount of time and Bijabers’ goons drag us off the ship. The moon sits high in the sky above us as we walk to shore, attached to each other single-file with one long chain. </p>
<p id="indent">“Where are we going?” I ask, hoping one of the goons or prisoners will have an answer.</p>
<p id="indent">“You will be going to the sleeping hall for the night,” a henchman answers. “Find a room and get some rest before your supervisors give you your jobs. You will wake up at six o’clock sharp, just like the rest of the workers, and start your day with breakfast at the mess hall.”</p>
<p id="indent">“Sounds like a life of luxury.”</p>
<p id="indent">“Keep yapping, and I’ll make sure your life of luxury doesn’t involve a tongue.”</p>
<p id="indent">He makes a pretty convincing argument.</p>
<p id="indent">We walk for another five minutes before finally arriving at a building. A clock on the side reveals that midnight is only twenty minutes away. </p>
<p id="page-end">33</p>`
const ch3p10 = `<p id="page-start"> </p>
<p id="indent">But how? How long was our flight? Are we on the south side of Carmsborough, near the Agriculture District?</p>
<p id="indent">“Get inside and find a room,” the man says, opening the door for us and unlocking our chains. I subconsciously feel my wrist where the cuff has rubbed it raw, wandering around the inside of the unlit building. Outlines of sleeping people litter the floor, and we have to step over someone almost every time we move our feet.</p>
<p id="indent">Eventually, the four of us branch off, and I locate a little offshoot room with enough space for me to curl up on the floor. It’s no different from what I’m used to, if not a little more cramped and a lot stuffier.</p>
<p id="indent">I spend the rest of my waking moments thinking about Freckles and how alone he must be in his cage, but despite my worrying and the nap on board the slaver ship, I fall asleep quickly.</p>
<p id="page-end">34</p>`
const ch3p11 = ``
const ch3p12 = ``
const ch3p13 = ``
const ch3p14 = ``
const ch3p15 = ``
const ch3p16 = ``
const ch3p17 = ``
const ch3p18 = ``
const ch3 = [ch3p1, ch3p2, ch3p3, ch3p4, ch3p5, ch3p6, ch3p7, ch3p8, ch3p9, ch3p10, ch3p11, ch3p12, ch3p13, ch3p14, ch3p15, ch3p16, ch3p17, ch3p18]

const ch4p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 4</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Today is just an ordinary day for me. </p>
<p id="indent">I wake up on the cold hay floor of the rundown windmill I’ve been using as this month’s makeshift home. The sun still isn’t in the sky yet, but the calmness that hangs in the air tells me it will be soon.</p>
<p id="indent">It’s days like today that keep me going.</p>
<p id="indent">Sure, I’ve gotta work at Cheapskate Chad’s today, and the walk is far from convenient, since the windmill sits right between the Industrial and Housing districts, but at least on the way I’ll get to hear the birds chirping and feel the dew on my hands as I run them through the morning grass.</p>
<p id="indent">Spring, for me, is fresh. It’s the cold bottle of water you pull out of </p>
<p id="page-end">35</p>`
const ch4p2 = `<p id="page-start"> </p>
<p id="no-indent">your cooler while walking the hilly countryside. It’s soaking in the sun after spending your eight-hour workday illuminated by harsh industrial bulbs. It’s watching the innocence of a house finch bounce around on the cobbled streets, searching for worms in between the cracks. </p>
<p id="indent">Those are pretty good descriptions. Maybe poetry is in my future.</p>
<p id="indent">I’d need to stop working at Chad’s first, though.</p>
<p id="indent">Unfortunately, this is not spring. This is fall. And this day in particular is the anniversary of the end of my life. Or I’m pretty sure it is, considering I don’t have a calendar readily accessible. Fall is everything spring isn’t. Hopeless, brutal, heartbreaking.</p>
<p id="indent">I thought I’d feel more on the anniversary. More sad or angry, that is. But I don’t. Not yet, at least.</p>
<p id="indent">My trip to the scrapyard from the windmill is roughly forty-five minutes, which means the sun won’t have even started painting its spherical canvas a rumbling orange by the time I clock in. </p>
<p id="indent">The birds, like every other respectable creature, are still asleep right now. I’ll just have to listen to them while sorting my bins today. I’m sure today’s song will be as beautiful as yesterday’s. I’m counting on it.</p>
<p id="story-break"></p>
<p id="indent">I jolt awake. Someone in front of me touches their foot to my leg. I gag a bit, bend my leg a little further so I’m out of range, and my heavy eyelids close shut again.</p>
<p id="story-break"></p>
<p id="indent">“Good morning, Luna,” Cheapskate Chad says, marking me as present on his timesheet. </p>
<p id="indent">“Yeah, we’ll see about that.”</p>
<p id="indent">“Oh, please. You love working here. Why else would you walk forty-</p>
<p id="page-end">36</p>`
const ch4p3 = `<p id="page-start"> </p>
<p id="no-indent">five minutes across Carmsborough?”</p>
<p id="indent">“Probably because nobody else will hire an underage homeless black girl. You’re the only one with standards low enough.” </p>
<p id="indent">“Oh, please. I’m blushing. Go get to work, Luna.”</p>
<p id="indent">I begin my day at basin thirteen, per usual. I don’t understand how Carmsborough comes up with all this metal and scrap, but there hasn’t been a single day where we’ve even gotten <em>low</em> on truckloads to sort. Half of the iron dumped into the basin rusts before it even makes it into one of the sorted bins.</p>
<p id="indent">In my first hour, I wheel off four bins full of plastic or metal. After wheeling off my fifth bin, however, I return to find my pile even bigger. </p>
<p id="indent">“What’s the big idea?” I yell, looking at the truck driver who just dumped into my basin. Half of the material doesn’t even belong in my tin. It’s just a bunch of electronics that don’t match the plastic or metal that I normally sort through.</p>
<p id="indent">“What’s happening here?” Cheapskate Chad asks, making his way to my basin.</p>
<p id="indent">“This numbskull just dumped electronics into my basin! I’ll be working for days to get this stuff out!”</p>
<p id="indent">“Hey, Jeremy!” Chad yells to the driver. “What the hell are you doing? You’re gunking the system!”</p>
<p id="indent">“Sorry, boss,” Jeremy shouts from his vehicle. “I got confused about which one to put it in.”</p>
<p id="indent">“You’re gonna be even more confused when that comes from your paycheck, kid!” He turns to me and says, “I’ll give you double for the next couple days while you clean this and wheel it to eleven. Try not to stab yourself on any wires. I can’t afford more first aid kits until the thirtieth.”</p>
<p id="page-end">37</p>`
const ch4p4 =`<p id="page-start"> </p>
<p id="indent">“Yeah, alright.”</p>
<p id="indent">Apparently, I need the wrong stuff dumped into my bin more often. I’ll take a mishap like this any day if it means I can afford food for once. I wheel an unused bin over from the front of Chad’s office and start loading some of the stuff. None of it seems very valuable, which is a bummer, considering how easy it would be to make off with it. Honesty is such a chore.</p>
<p id="story-break"></p>
<p id="indent">Someone in the room yells, startling us all awake. A wave of cramped shuffling ensues as everyone searches for a more comfortable position on the hard floor.</p>
<p id="indent">“Shut up, Lanny,” I hear. “Nobody wants your ramblings this early in the morning.”</p>
<p id="indent">“They’re coming for us. They’re coming for us. All life in London will end. And then the monster will kill us all.”</p>
<p id="indent">“Are you really on that stupid crap again, Terry? Go to bed.”</p>
<p id="story-break"></p>
<p id="indent">With less than an hour left before the end of the day, I’ve already removed a sizable chunk of the electronic mess that blessed me this morning. Besides four or five loose batteries that may or may not still have some juice left, the only thing that’s jumped out at me is a perfectly intact rotary phone. I don’t have any calls to make, but maybe Shady Shane knows someone who does.</p>
<p id="indent">Still, an entire phone would be hard to carry off without being noticed. That one’s probably not gonna happen.</p>
<p id="indent">I reluctantly pick it up and put it in the bin. Then, right as I move to wheel it away to basin eleven, the sound of rustling metal erupts from my </p>
<p id="page-end">38</p>`
const ch4p5 = `<p id="page-start"> </p>
<p id="no-indent">pile. Am I witnessing an electronic avalanche?</p>
<p id="indent">The clattering and scraping continues, but I don’t see anything moving. I walk the perimeter of the basin, trying to locate the source, and find the spot where the noise is the loudest. With thick gloves that I use for grabbing metal, I dig into the electronics pile, hoping to discover whatever’s moving things around.</p>
<p id="indent">And then, a head appears.</p>
<p id="indent">A robotic cat head.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Oh my God, what are you?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">I help dig it out the rest of the way, and it springs to the top.</p>
<p id="indent">It really is a mechanical cat.</p>
<p id="indent">“What were you doing in this mess, big guy?”</p>
<p id="indent"><em>Now</em> what’s happening, Luna?” Cheapskate Chad walks this way again, somehow sounding more exhausted than the first time.</p>
<p id="indent">“I found this cat here in the electronic pile. It’s still fully functioning and everything.”</p>
<p id="indent">“Well, I’ll be darned. I wonder how a steambot ended up going for reclamation.”</p>
<p id="indent">“You think maybe he’s defective?”</p>
<p id="indent">“Meow.” The cat gives me a look.</p>
<p id="indent">“Sorry, I didn’t mean it. You’re definitely not defective. Seem fine to me.”</p>
<p id="indent">“Fine enough to be resold instead of scrapped, I’d say,” Chad says, approaching the cat. The cat backs away, clearly not in favor of being sold or scrapped.</p>
<p id="page-end">39</p>`
const ch4p6 = `<p id="page-start"> </p>
<p id="indent">“Actually, you think I could keep it instead?”</p>
<p id="indent">“Are you kidding me, kid?”</p>
<p id="indent">“I mean, no. I’d be willing to give up my new bonus, and maybe a week or two worth of pay for it. Unless, of course, you want me to call the government and let them know you have a thirteen-year-old girl working for you under dangerous conditions for ten hours a day.”</p>
<p id="indent">Chad weighs the thought, but I’ve obviously won the discussion. </p>
<p id="indent">“Alright, fine. This week’s pay, including the bonus. But the next time you find something like this, it’s getting resold without debate.”</p>
<p id="indent">“You’re the best, Chad. Here’s a rotary phone for your hard work.” I grab the phone and toss it at him, but he just lets it fall to the ground and break. Guess he’s not a true purveyor of worth.</p>
<p id="indent">A buzzer sounds across the scrapyard, signaling the end of the workday. </p>
<p id="indent">“Come here, robot kitty-cat. It’s time to head to your new home with me.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">It’s hesitant at first, but eventually slinks up to me. It even rubs against my legs. </p>
<p id="indent">“Let’s go, friend. I’ve got to go hunt for dinner in the Commerce District for a moment, and then we’ll swing our way over to my windmill home in the west.”</p>
<p id="indent">As I plot our path through the city, the robotic cat trails behind me by only a few feet at most. It stops for oncoming traffic when I do, and rushes ahead when I speed up to cross a road. This thing’s already completely loyal to me, even though all I did was dig it out of a pile of scraps. </p>
<p id="page-end">40</p>`
const ch4p7 =`<p id="page-start"> </p>
<p id="indent">Too bad it’ll feel betrayed when I take it to Shady Shane in return for a massive chunk of change.</p>
<p id="indent">Like the dozens of other trips I’ve made to visit Shady Shane, I stop to look at the countless cloudships lining the commerce docks. The cat stops with me, as if doing the same. He’s making it really hard to hate him, that’s for sure.</p>
<p id="indent"><em>It. it's</em> making it really hard to hate <em>it</em>. I literally can’t afford to get attached right now. I have a dream to achieve, and he’s gonna make it a reality.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I wonder if my good friend Shane is in the neighborhood today. I’m sure he’d love to see you. He’s probably never met a steambot before, either.”</p>
<p id="indent">I can’t believe I’m trying to play my actions off to a cat. </p>
<p id="indent">The two of us walk to Shady Shane’s usual spot, but his bench is empty, and he’s not lingering nearby. </p>
<p id="indent">“Hey, Shane, are you around?”</p>
<p id="indent">I go to check in a nearby courtyard, which is disturbingly quiet for this time of day. Where could he be off to?</p>
<p id="indent">A low, metallic growl kicks up to my right. I look down and see the cat hunched over, as if ready to attack something in the courtyard.</p>
<p id="indent">“Hey, kid,” a voice says, appearing from the direction the cat’s facing. “Searching for someone?” </p>
<p id="indent">“Yeah,” I answer, suspicious. “You wouldn’t happen to know where Shane is, would you?”</p>
<p id="indent">“Nah, I’ve never heard of a Shane,” another voice says, on the opposite side of the courtyard. “But we do know about some defenseless</p>
<p id="page-end">41</p>`
const ch4p8 = `<p id="page-start"> </p>
<p id="no-indent">girl and her cat standing in our courtyard.”</p>
<p id="indent">“I’m beginning to think I’m looking in the wrong place. We’re very sorry for intruding in your courtyard, sirs, and will be leaving. Thank you for your help.” I start to scoot out of the courtyard, never losing focus on either of the two hostile men. The cat, on the other hand, doesn’t move an inch.</p>
<p id="indent">“I don’t think so, girl. Come here, let’s stay awhile.”</p>
<p id="indent">“Not to be rude, but you two are acting exactly like a stereotypical pervert, so I’ll have to pass. Surely you understand.”</p>
<p id="indent">“No. We don’t.”</p>
<p id="indent">The two men rush forward and chase me to the courtyard entrance. I run onto the street, my heart beating hard. My feet take me all the way to the end of the block, where I stop to breathe and see how far behind they are. Back at the courtyard, the cat is pouncing at and pummeling the two men, throwing them up against walls and on the ground. </p>
<p id="indent">He’s… <em>defending me</em>.</p>
<p id="indent">I return just in time for him to send the second man to the concrete again. Neither decide to get up this time.</p>
<p id="indent">“You are one feisty thing,” I say, crouching to pet him. Petting a mechanical cat is the most natural unnatural thing I’ve ever done.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“You’re telling me. These guys didn’t stand a chance.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Let’s we see what we can scavenge real quick for dinner, and then we’ll head home. Do you eat anything?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, that was kind of a stupid question.”</p>
<p id="page-end">42</p>`
const ch4p9 = `<p id="page-start"> </p>
<p id="indent">I offer to pick him up, and he accepts. I hold him like a baby over my arm for a second, until he climbs onto my shoulders and curls around my neck. The tick of his mechanical heart resonates through my body.</p>
<p id="indent">“What on earth am I going to call you?”</p>
<p id="indent">He looks at me blankly. “Meow.”</p>
<p id="indent">“Well, I can’t just call you ‘cat.’ Maybe Cali? No, that’s too basic. Butterscotch?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“No, you’re right. You’re more aggressive than a Butterscotch, anyway. What about… Freckles?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I’m pretty good at names. Freckles it is, then.”</p>
<p id="indent">I walk to my windmill house with Freckles clinging firmly to my shoulders. Something tells me this four-legged machine is going to be worth more to me than a chunk of change.</p>
<p id="indent">That night, I cried more than I had in a long time. The anniversary, compounded with my new friend, finally took its toll.</p>
<p id="story-break"></p>
<p id="indent">“Wake up, dear,” I hear, startling me awake for the third time tonight. An older lady is hovering above me and staring into my eyes. “It is six o’clock. You do not want to make the supervisor upset.”</p>
<p id="indent">“What? Yeah, I’m awake.”</p>
<p id="indent">I wipe small tears from my eyes. I miss my cat already. </p>
<p id="page-end">43</p>`
const ch4p10 = ``
const ch4p11 = ``
const ch4p12 = ``
const ch4p13 = ``
const ch4p14 = ``
const ch4p15 = ``
const ch4p16 = ``
const ch4p17 = ``
const ch4p18 = ``
const ch4 = [ch4p1, ch4p2, ch4p3, ch4p4, ch4p5, ch4p6, ch4p7, ch4p8, ch4p9, ch4p10, ch4p11, ch4p12, ch4p13, ch4p14, ch4p15, ch4p16, ch4p17, ch4p18]

const ch5p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 5</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“It is time to get up, child. They have zero tolerance for slacking.”</p>
<p id="indent-adjustment-more">“I’m getting there,” I say, rubbing my eyes to get the fog out. The woman in front of me looks sixty years old. Why on earth are they keeping someone who should probably be retired in their mining sweatshop?</p>
<p id="indent">“Come with me,” she says, extending her hand. I take it and use her to hoist myself up. The room is alive with fifteen or so other people, all scrambling to get busy. “Let us get you some appropriate clothes. Your supervisor will not like what you are currently wearing.”</p>
<p id="indent">“Umm, okay.”</p>
<p id="indent">She leads me to a small closet full of dirty, light-blue jumpsuits. The </p>
<p id="page-end">44</p>`
const ch5p2 = `<p id="page-start"> </p>
<p id="no-indent">two adjectives are almost opposites, but they managed it somehow. I pick one that looks almost the right size, and slip it on over my normal clothes. </p>
<p id="indent">“Why are you helping me?” I ask.</p>
<p id="indent">“That attitude is exactly why,” she answers. “You are lost. I can tell you do not belong on this island. Also, I do not recommend layering like that. You will get very sweaty from the work.”</p>
<p id="indent">“I’m not taking my clothes off in front of all these strangers. And I don’t think any of us belong here, to be fair. We’re literally prisoners right now.”</p>
<p id="indent">“You are too young to be here, mixed in with this crowd. No matter what you did to be in this position, this place and the men who run it are unjust. My name is Mary. I try to help everyone, and today, you have my full attention.”</p>
<p id="indent">“Luna,” I say, “and thanks, I guess. I don’t want to sound rude, but you seem to be a little too <em>old</em> to be here.”</p>
<p id="indent">“My life is full of many mistakes, Luna, but my biggest was taking one too many loans with the wrong group. You are right, none of us should be stuck in this awful place, but we cannot change that. Our times to leave will come, and we will be free.”</p>
<p id="indent">Great. Another person shipped away for poor money management. Did anybody here actually do anything wrong, or were they all unfortunate?</p>
<p id="indent">Once again, she has me follow her to a separate room, where I stand in line with the three transplants I was shipped here with last night. They’re also clad in the blue jumpsuits.</p>
<p id="indent">“I must leave you now, Luna,” Mary whispers, backing out of the room. “Good luck today. If you need anything later, find me. I will be </p>
<p id="page-end">45</p>`
const ch5p3 = `<p id="page-start"> </p>
<p id="no-indent">cleaning one of the ships.”</p>
<p id="indent">“Not so fast, woman,” a voice says from behind us. I recognize the owner immediately. Goosebumps line my neck and arms, and my jaw tenses angrily.</p>
<p id="indent">Mary slumps her shoulders and joins the four of us in line. Looks like she doesn’t want to cross the big baddy, either.</p>
<p id="indent">“So glad to see you again,” Slaphand says, appearing in front of us. “I hope you slept well.”</p>
<p id="indent">“What’d you do with my cat, you freak?”</p>
<p id="indent">“Don’t worry. He’s in good hands.”</p>
<p id="indent">“I wouldn’t say ‘good’ hands. ‘Monstrously large,’ maybe.”</p>
<p id="indent">“That’s no way to talk to your supervisor, now, is it?”</p>
<p id="indent">Of course. Of course he’s my supervisor. Why not? It’s not like this was already an awful situation. Actually, I needed more reasons to hate this place.</p>
<p id="indent">“As you’ll remember, the position of Excavation Overseer has an opening, and so that’s what you’ll be doing. I’m glad one of your fellow inmates took the liberty of getting you dressed, but you’ll be wearing a yellow set instead.”</p>
<p id="indent">“Oh, you poor child,” Mary says next to me.</p>
<p id="indent">“And what exactly does that mean?” I ask, ignoring Mary’s comment.</p>
<p id="indent">“It mostly means you’ll be making sure people are working, and you’ll handle any infractions. If someone’s not working, you’re in charge of fixing that in whatever way you seem fit.”</p>
<p id="indent">“That’s it?”</p>
<p id="indent">“That’s it.”</p>
<p id="indent">“What’s the catch?”</p>
<p id="page-end">46</p>`
const ch5p4 = `<p id="page-start"> </p>
<p id="indent">“There is no catch. You’ll be on a team with three other Overseers. Feel free to tell me if any of them aren’t doing their job, either. The rest of you know where to go. Get to work.”</p>
<p id="indent">This sounds too easy. There’s no way that’s all I’m doing.</p>
<p id="indent">“Why’d you say ‘poor child’ when he told me my job?” I ask Mary, trailing her to a second closet, presumably filled with yellow jumpsuits.</p>
<p id="indent">“Those on the floor and in the mines dislike Overseers,” she answers, tossing me a second suit. It’s bright, yellow, and, frankly, equally disgusting. “The one before you was murdered because he was too forceful in getting people to get to work. Tossed down a quarry. You will need to avoid picking fights you cannot win.”</p>
<p id="indent">And there’s the catch. I’ll be physically assaulted if I try to do my job, and if I don’t, I’ll be snitched on by one of the other Overseers. Towing the line’s the name of the game.</p>
<p id="indent">At least I won’t have to dig in dumpsters for food.</p>
<p id="indent">We walk out of the Housing building together. Although the sun is hardly peeking over the horizon, I can see the flat, expansive island is flush with the ocean in every direction. Two buildings stand directly in front of us, one labeled “Mess Hall” and the other “Administration.” You can tell which one is deemed more important by comparing their upkeeping on the outside. They’re connected in the middle by a long makeshift tunnel of wood and aluminum siding. </p>
<p id="indent">To our right, a vast field of quarries covers most of the land, and a shipyard with three standard-size airships stands slightly above the ground. The massive mine machinery is already buzzing with life, and even though we’re standing quite a ways away, it echoes loudly.</p>
<p id="indent">Everywhere my eyes stop, I can see workers moving around. There </p>
<p id="page-end">47</p>`
const ch5p5 = `<p id="page-start"> </p>
<p id="no-indent">has to be two hundred or so of them. How can Bijabers and Slaphand get away with a process this big without even being <em>heard</em> of by someone like Orion? Where’s the government in all of this nonsense?</p>
<p id="indent">“What if you follow me to the shipyard, and I tell you more about working here?” Mary offers.</p>
<p id="indent">“I’m okay with that,” I say. “This is overwhelming.”</p>
<p id="indent">The two of us make our way to the shipyard. People in blue jumpsuits are walking on and off the ships, loading and unloading heavy-looking crates. One notices me and Mary walking up and drops his box for a moment.</p>
<p id="indent">“Mary, you’re working with the new Overseer?”</p>
<p id="indent">“This Overseer is just a kid, Antoine. She belongs here no more than we do. I am helping her today because she is a lost soul.”</p>
<p id="indent">“Whatever you say, Mary. You’d better be right on this.”</p>
<p id="indent">“Have I ever been wrong?”</p>
<p id="indent">“I feel like I shouldn’t answer that, <em>señora</em>.” Antoine picks his box back up and carries it away, shaking his head. At least Mary has some friends in this prison.</p>
<p id="indent">“Why haven’t you asked why I’m here?” I ask her, as she grabs a bucket and sponge from a nearby shed.</p>
<p id="indent">“For two reasons, Luna,” she says, filling the bucket with less-than-pristine water. “I can sense the great trouble you have endured for way too long. You hurt deeply. I am afraid that the trouble and hurt will follow you and grow into something that nobody can control.”</p>
<p id="indent">“I’m going to pretend you didn’t just make me sound like a terrorist. And the second reason?”</p>
<p id="indent">“You are not the center of the universe, child.” She smiles at me. It </p>
<p id="page-end">48</p>`
const ch5p6 = `<p id="page-start"> </p>
<p id="no-indent">isn’t forced or unnatural. </p>
<p id="indent">“Ouch. Fair, I guess, but it didn’t need to be said.”</p>
<p id="indent">“Did it not? You are a fierce young adult. The world has wronged you many times, no doubt. But you have a passion that could get you into a lot of trouble here. Try not to be a hero. Heroes get killed.”</p>
<p id="indent">“Heroes like Orion?”</p>
<p id="indent">“I do not know Orion or his character. I have only heard the stories that get brought in with new people. All I can say is if he were truly as pure as people say he is, we would not be stuck on this island.”</p>
<p id="indent">“Preach it, sister.”</p>
<p id="indent">That said, I still have a little hope that he’ll pull through. Orion always stands up for the little guy. Surely he’ll defeat Bijabers soon and free us all.</p>
<p id="indent">Boy, what a hypocrite I am. Yesterday I was telling Freckles how unhelpful Orion and the Clockwork are, and now…</p>
<p id="indent">Now, I’m Freckles-less and begging for the self-proclaimed rescuers of Carmsborough to come rescue me, too. My heart pangs again, longing for my mechanical partner. Maybe Mary’s right. I’m not the focus. Freckles hasn’t even been on my mind since I woke up. Although, in my defense, that was maybe an hour ago.</p>
<p id="indent">“Actually, I think you’re half-wrong, Mary.”</p>
<p id="indent">“And not half-right? How so?” She turns to face me, rubbing away at the side of the metal airship with her sponge. I’m not sure how she plans to get this whole thing clean with a bucket and a sponge, but that’s not my problem. She’s staying busy, after all.</p>
<p id="indent">“This <em>isn't</em> about me. I’m planning on rescuing my best friend. My cat was taken from me by these awful slavers, and I’ll be darned if I’m not breaking him free within the next week.”</p>
<p id="page-end">49</p>`
const ch5p7 = `<p id="page-start"> </p>
<p id="indent">“There is that dangerous ambition I was speaking of,” Mary says. “You are very good at riling yourself up. It might even work on me. Please be careful, Luna. I do not want to welcome two new Overseers in the span of one week.”</p>
<p id="indent">Speaking of Overseers…</p>
<p id="indent">One of the other three walks by, clearly staring directly at the two of us. I guess that’s my sign to get started for the day. </p>
<p id="indent">“Well, Mary, I’m off to do whatever patrolling I’m supposed to do. Try not to get yourself into too much trouble.”</p>
<p id="indent">She chuckles.</p>
<p id="indent">I begin with the shipyard, circling it once or twice. Walking the perimeter and being this close really puts the size of these airships in perspective. They’re far from normal sized, and certainly aren’t vessels for transporting their kidnapped debtors. Are they preparing for some sort of battle?</p>
<p id="indent">And also, how have these not been noticed by someone from the outside? Something this big, let alone three things this big, has got to be visible from miles in the sky.</p>
<p id="indent">Other than the three potential warships, there’s nothing else interesting happening at the shipyard, so I move on to patrol some of the quarries. Each has ten people working at them. Half are operating machinery while the rest are in the quarry, digging and wheeling dirt to and from their worksite. Reminds me too much of the scrapyard.</p>
<p id="indent">The first pit I glance into goes on for what looks like a hundred feet. I’m not exactly sure what they’re mining for, but whatever it is, they haven’t found any yet today. Multiple empty carts line the ledge.</p>
<p id="indent-adjustment-more">The second one goes even further, but none of the machinery is doing </p>
<p id="page-end">50</p>`
const ch5p8 = `<p id="page-start"> </p>
<p id="no-indent">anything. All ten people are inside, chipping away at one of the quarry walls. I take a peek in a barrel at the edge, which has an enormous amount of coal. What do they use all of it for?</p>
<p id="indent">“Are you the new Overseer?” a voice asks to my side. I turn to see another Overseer, a large man that stands at least a foot above me.</p>
<p id="indent">“Yeah, I am.”</p>
<p id="indent">“Good luck, kid. You’re gonna need it.”</p>
<p id="indent">He walks away, leaving me to stew in his words. I’m glad Mary found me first. I’d probably have started fights with almost everyone if she hadn’t. Or panicked.</p>
<p id="indent">I make my way to a third quarry, where the workers are sitting idly by in the grass.</p>
<p id="indent">“What’s happening here?”</p>
<p id="indent">“Our machinery broke down. We can’t do any mining.”</p>
<p id="indent">“What are you mining for?”</p>
<p id="indent">“Coal, just like our neighbors.”</p>
<p id="indent">“Then why can’t you mine it just like your neighbors?”</p>
<p id="indent">“You want us to go into the quarry and start smacking the rocks? Is that what you want?”</p>
<p id="indent">“I mean, I don’t see why you can’t. Looks to me that your pit’s as deep as theirs.”</p>
<p id="indent">“Once you get some mechanics on their way over, maybe we’ll talk about doing it by hand.”</p>
<p id="indent">“I’ll see what I can do. For now, at least try to seem busy, I guess.”</p>
<p id="indent-adjustment-less">I feel like mechanics should’ve been mentioned in my little onboarding session. Is it my job to find the mechanics and get them to fix stuff?</p>
<p id="page-end">51</p>`
const ch5p9 = `<p id="page-start"> </p>
<p id="indent">I search for one of the other Overseers, hoping for insight, and spot the one from the shipyard earlier. I job embarrassingly across the field of quarries and arrive gasping for air.</p>
<p id="indent">“Is there something I can help you with?” she asks, crossing her arms. Apparently, “stuck-up” is a common characteristic here.</p>
<p id="indent">“Hey. The people in the third quarry told me their machinery is broken, and that they want a mechanic. Is that our job, and where do I do that?”</p>
<p id="indent">“Let me lead you to the mechanics shop. I needed to go that way, anyway. I don’t know where they get off forcing a kid like you into the Overseer position. I’m Lana, by the way.”</p>
<p id="indent">“Luna.”</p>
<p id="indent">“No kidding? Well, ain’t that funny.”</p>
<p id="indent">Luna and Lana. That sure won’t get confusing.</p>
<p id="indent">She turns and starts moving, expecting me to follow. We walk to the Administration building and enter through a large overhead door. Inside is some sort of workshop, with welding masks, tools, and a billion different pieces of scrap scattered on the floor. A lot of this stuff could make for some useful makeshift weapons if necessary. </p>
<p id="indent">“This is the mechanics shop. Usually, you find one of them somewhere in here and tell them who wants help. They work directly for the supervisors, so we have no authority over them and vice versa. At best, they’ll get to the quarry in a couple hours, maybe more. At worst, well…”</p>
<p id="indent">A few of the mechanics, wearing gray and brown, walk out of a door and into the workshop. They look as goonish as the people that brought me here last night. </p>
<p id="page-end">52</p>`
const ch5p10 = `<p id="page-start"> </p>
<p id="indent">“Hey, boys,” Lana says, her demeanor changing into something a little more promiscuous. “Wouldn’t you do me a favor and give quarry three some love?”</p>
<p id="indent">“Anything for you, Lana,” one of them says, forming a heart with their hands. </p>
<p id="indent">“Anyone else need some love?” another asks.</p>
<p id="indent">“Hmmm. That’ll depend on how well you do with the first one.”</p>
<p id="indent">I quietly take my leave, but they don’t seem to notice or care.</p>
<p id="indent">That was… disturbing? Disgusting? Both?</p>
<p id="indent">Both.</p>
<p id="indent">I decide to head back to Mary at the shipyard to check on her. At least she won’t try to seduce three gross mechanics.</p>
<p id="indent">When I arrive, the third Overseer is hovering over her. The two are in a heated conversation.</p>
<p id="indent">“What’s going on?” I ask, sizing up the Overseer. He’s not as big as the one from the quarries, but he’s still pretty large. I could probably take him if I catch him by surprise.</p>
<p id="indent">“I needed a short break from all the exertion I was putting out is all,” Mary says. “I was on my way to get to work again.”</p>
<p id="indent">“You’ve been sitting here doing nothing for fifteen minutes, old lady,” the Overseer says. “That’s way longer than you should need for taking a sponge to the side of an airship.”</p>
<p id="indent">“Well, like I said, I was—”</p>
<p id="indent">“You’ve gotta back off, dude,” I say, raising my own voice. “She’s like, sixty. Of course she needs a bit of a break every now and then. It’s not like she tones her muscles hitting the gym after work.”</p>
<p id="indent">“Please, do not interfere in this, Luna.”</p>
<p id="page-end">53</p>`
const ch5p11 = `<p id="page-start"> </p>
<p id="indent">“Absolutely not. You deserve respect just as much as he does.”</p>
<p id="indent">“Do you have a problem, kid?” the Overseer asks.</p>
<p id="indent">“As a matter of fact, I do. Maybe go hound on the ten people at quarry three for not doing anything all morning instead of an old woman taking a fifteen-minute break.”</p>
<p id="indent">He stares at me, no doubt determining whether or not I’m worth it. Before he gets to say anything more, however, a long beep sounds off from some overhead speakers. The hundred or so people working at the quarries drop their stuff and funnel towards the buildings.</p>
<p id="indent">“You’re lucky it’s lunchtime,” the man says, looking past me to Mary. “But you better stay busy.”</p>
<p id="indent">He gives me one last glare and makes his way to the mess hall himself.</p>
<p id="indent">“That was very selfless of you,” Mary says, standing up off the ground. “It surprised me.”</p>
<p id="indent">“Yeah, I guess that was pretty selfless,” I realize. Why does that surprise her? Or me, for that matter?</p>
<p id="indent">“Do not do it again.”</p>
<p id="indent">“What? He was being harsh on you. I couldn’t let that happen.”</p>
<p id="indent">“Yes, you can and should. It is his and your job to do so. If you want to get you and your pet out of here, then you have to focus on yourself. The last thing you need is to make more enemies than necessary.”</p>
<p id="indent">“I appreciate it, but you’re not gonna stop me from helping you. You helped me this morning, after all.”</p>
<p id="indent">We walk together to the mess hall and get ourselves a plate of whatever slop they’re serving. It doesn’t look too appetizing, but honestly, I’m still glad it’s a guaranteed meal. The two of us sit side by side at a long table populated with other shipyard workers. For the most part, they’re all </p>
<p id="page-end">54</p>`
const ch5p12 = `<p id="page-start"> </p>
<p id="no-indent">laughing and having a good time, but seem a little wary being this close to me.</p>
<p id="indent">“Fifty-eight, by the way,” Mary says, between bites.</p>
<p id="indent">“What?”</p>
<p id="indent">“While we were at the ship, you said sixty. I am actually fifty-eight years old. Just figured I should tell you.”</p>
<p id="indent">She smiles, and I smile back. I’m glad Mary’s one of the good ones.</p>
<p id="page-end">55</p>`
const ch5p13 = ``
const ch5p14 = ``
const ch5p15 = ``
const ch5p16 = ``
const ch5p17 = ``
const ch5p18 = ``
const ch5 = [ch5p1, ch5p2, ch5p3, ch5p4, ch5p5, ch5p6, ch5p7, ch5p8, ch5p9, ch5p10, ch5p11, ch5p12, ch5p13, ch5p14, ch5p15, ch5p16, ch5p17, ch5p18]

const ch6p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 6</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Following an uneventful evening, I fall asleep with no hesitation. Staying asleep, however, proves difficult. I’m repeatedly woken by random noises, the foot of another person kicking me, or the newly repeating memory-dream of the day I met Freckles, as if my brain is trying to make me feel guilty for losing my best friend.</p>
<p id="indent">And, of course, it’s working. I wake at nearly six in the morning, upset and a wreck from the memory that once again haunted me. A single tear rolls down my cheek, the last remnant of a long night of restlessness. It’s only the beginning of day two, but the pain of his absence is becoming unbearable. </p>
<p id="page-end">56</p>`
const ch6p2 = `<p id="page-start"> </p>
<p id="indent">Things are about to kick into action shortly, so I sit up, preventing myself from having the chance to fall back asleep or wallow any longer. I glance around the room, searching for my elderly companion, and spot her rubbing the crust from her sleepy eyes. When she notices me staring, she gives a little wave.</p>
<p id="indent">We both quietly sneak out of the room, careful to avoid the sleeping lumps strewn across the floor. A few others stir awake, but for the most part, everyone’s looking to get their last few minutes of beauty rest.</p>
<p id="indent">“I’m not gonna lie, Mary, I’m feeling awful hungry already.”</p>
<p id="indent">“One of the greatest troubles on the island,” she replies. “Breakfast will end by the time we make it to the mess hall, though. They close shop at exactly six to prepare for lunch, and we have to get right to business when the bell sounds off.”</p>
<p id="indent">“I wouldn’t say ‘no breakfast’ is the greatest trouble here. I’d probably say the whole ‘slave labor’ thing is.”</p>
<p id="indent">“Ah, well, I said ‘one of,’ did I not?”</p>
<p id="indent">“Alright, but there’s a sizeable gap between the two concepts.”</p>
<p id="indent">“Are we going to argue semantics all morning?”</p>
<p id="indent">“If I can get away with it, sure.”</p>
<p id="indent">We switch into fresh pairs of our respective clothing types, and not a moment later, the six o’clock bell rings, signaling that work time has begun. Like yesterday, I follow Mary to the shipyard, where she heads directly to the little shed for her equipment.</p>
<p id="indent">“I recommend busying yourself a little more today than you did yesterday, Luna,” she says, wringing a sponge out into her bent-up metal bucket. “There are many things to get accustomed to here, especially for an Overseer like yourself.”</p>
<p id="page-end">57</p>`
const ch6p3 = `<p id="page-start"> </p>
<p id="indent">“Yeah, I guess I better. Any idea where to start?”</p>
<p id="indent">“If it would make you feel more comfortable, the men here at the shipyard are more easygoing than the rest of the island.”</p>
<p id="indent">Taking her word, I begin my patrol of the dockyard. The large ships, which are still magnificent, sit idly by as people clean them, load things onto them, and congregate on their decks, planning their days.</p>
<p id="indent">I’m almost thankful I have this job. No worrying over black lung, or breaking my spine lifting things onto an airship, or standing in one spot, doing the same thing for ten hours a day.</p>
<p id="indent">“Well, if it ain’t the pipsqueak from yesterday,” I hear off to my side. I turn to see the larger-built Overseer walking my way, a humored face masking his tough-guy persona. “I didn’t think you’d survive the night surrounded by all of those ruffians.”</p>
<p id="indent">“I’d say. It was tough getting to sleep. And staying asleep.”</p>
<p id="indent">“It’s tough every night. You’ll get used to it.”</p>
<p id="indent">“Thanks for the glimmer of hope.”</p>
<p id="indent">“Yeah, no problem. Tell you what, I don’t know what you’ve done, but the other two aren’t that fond of ya. Lana’s a bit tweaked this morning, and Renet seems to be stewing, too. The name’s Arnold. I’m about the last person you haven’t pissed off, from the sounds of it.”</p>
<p id="indent">“Luna,” I reply, “and that figures. I had a standoff with Renet yesterday for getting after an old lady taking a break. Not sure what Lana’s deal is, though.”</p>
<p id="indent">“Eh, could be anything. She’s just like that, honestly. Well, good luck, I suppose, and if you need my help, don’t.”</p>
<p id="indent">With that, the large man walks away, off to visit some of the far-off quarries towards the center of the island. </p>
<p id="page-end">58</p>`
const ch6p4 = `<p id="page-start"> </p>
<p id="indent">Yesterday, he hardly even looked my way, but today he was willing to hold a light conversation and give me advice? An interesting way to make an impression on someone, I guess.</p>
<p id="indent-adjustment-less">Following in his lumbering footsteps, I finish my round at the shipyard and make my way to the quarries, ready for another exciting day of trying to force people to work against their will for no pay. A surefire way to get everyone to hate you, and I can’t say I blame them all that much.</p>
<p id="indent">Still, I walk to yesterday’s problem quarry and find the group of men once again sitting idle. They watch me approach the entire way, not even pretending to act like they’re happy I exist.</p>
<p id="indent">“I see you guys still aren’t getting anything done,” I say, leaning on an inactive piece of machinery.</p>
<p id="indent">“I see you haven’t gotten the mechanics to do anything,” the main man from yesterday replies, getting a little too up-close and personal for my liking.</p>
<p id="indent">“As far as I was told, the mechanics were supposed to have come this way yesterday, but even if they didn’t, that’s no excuse to be doing nothing. At least go join one of the other quarries.”</p>
<p id="indent">“Oh, sure. As if that’s gonna happen. Everyone’s rock-noggin territorial over these darn quarries. Can’t have more than twelve to one dig site, anyway.”</p>
<p id="indent">“Well then, I recommend splitting up and getting a go-on.”</p>
<p id="indent">“For being both fresh meat <em>and</em> a foot shorter than me, you’re awful lippy, kid. Why are you even an Overseer? What favors did you do for the big man to get such a high rank in his abusive cycle, huh?”</p>
<p id="indent">“Yeah, who is you, anyway?” another asks, joining in on our less-than-</p>
<p id="page-end">59</p>`
const ch6p5 = `<p id="page-start"> </p>
<p id="no-indent">cordial conversation. “We ain’t big fans of people dressed in yellow like you, in case you didn’t hear the news.”</p>
<p id="indent">I can feel the pressure of the situation closing in. If it came down to it, there’s no way I’d be able to fend off ten physically fit men, much less run away. “I don’t do favors for anyone, and especially not Slaphand. Just try to look busy, alright? The last thing we need is to have our hours extended any more than they are.”</p>
<p id="indent">“And whose fault do you reckon that is, might I ask?” Renet says from behind me, arms crossed. “Word on the floor is, someone messed with one of Slaphand’s pieces of equipment and sabotaged whatever operation he’s been running, forcing us to work overtime to rebuild the machine.”</p>
<p id="indent">I can feel adrenaline pumping into my system in real-time. Am I really the reason there’s ten-hour workdays right now?</p>
<p id="indent">“I have absolutely no idea what you’re talking about,” I say, looking directly into his eyes, although I’m ninety-nine percent sure my goose is cooked. “I’m here for the same reasons as everyone else: I had to borrow some stupid-large amount of money, only to realize I wouldn’t be able to pay it. And, of course, it was a fake company loaning it.”</p>
<p id="indent">“For some reason, that’s hard to believe,” the main quarry man says, getting even closer. If I wanted to, I could strike him and break his nose without giving him a chance to think. As tempting as it is, I’m forced to pocket the idea as Arnold makes his glorious return.</p>
<p id="indent">“Everyone get to work, and now,” he half shouts, surveying the growing group of quarry workers that were accumulating nearby. All eyes are on the heavyset man. There was no need to yell. “I will not hesitate to use force.”</p>
<p id="indent">Either frightened or discomforted by the thought of a man of his </p>
<p id="page-end">60</p>`
const ch6p6 = `<p id="page-start"> </p>
<p id="no-indent">physique committing any sort of bodily harm, the crowd disperses, leaving the original quarry worker and the three of us standing in a permanently hostile circle.</p>
<p id="indent">“Word of advice, Luna,” Renet spits, “if you’re gonna try to boss ten adult men around, actually have some authority.”</p>
<p id="indent">“Better than misusing it against a sixty-year-old woman, bud.”</p>
<p id="indent">“Alright, that’s enough,” Arnold says, drawing our complete attention with his demanding aura. “There’s no reason to be fighting over stupid little things like this. Let the other person handle things how they want, and if you have a problem with it, talk in a civil manner.”</p>
<p id="indent">“What if we discuss why she’s even here in the first place, Arnold?” Renet once again crosses his arms and gives me an angry glare. “Because of her, we’re working extra hours for those damned slavers. And now she’s supposed to be on our level?”</p>
<p id="indent">“We don’t know if the rumors are true,” Arnold says, visibly unsure if he believes himself. “And even if they are, I have also heard we will be returning to normal hours by the week’s end.”</p>
<p id="indent">“We’d better be, or else, kid.” Renet stomps away. I can almost imagine steam pouring from his ears. Arnold merely sighs and walks off in a different direction towards an unruly horde. I’m inevitably left alone, discounting the dismissive or hateful side-eyes of those I pass. </p>
<p id="indent">I walk the length of the quarries for another fifteen minutes before deciding I need to go visit Mary again. She hasn’t moved very much since I left, but there’s a noticeable sheen to the newly waxed areas of the gargantuan ship.</p>
<p id="indent">“Have I mentioned how much I hate this job?” I ask her rhetorically, leaning against an unwaxed section of metal hull. </p>
<p id="page-end">61</p>`
const ch6p7 = `<p id="page-start"> </p>
<p id="indent">“You may have mentioned it in passing,” she replies. “What reason do you have this time?”</p>
<p id="indent">“Well, not only are people upset that I’m trying to do my job, but there’s also a rumor flying around that I’m the reason we’re doing a ten-hour workday.”</p>
<p id="indent">“I must admit, it is suspicious that the day you arrived is the day that we were moved to ten hours a day. At the same time, I cannot imagine that whatever you did would warrant this much panic from those in charge.”</p>
<p id="indent">“You think there’s panic at the top?”</p>
<p id="indent">“Oh, no doubt. The last time we had increased hours was because of a part malfunction that wiped a brand-new airship. I shudder thinking about what could have caused it this time.”</p>
<p id="indent">I guess that confirms the rumors, then. I truly am the reason people are suffering more. Not that I could’ve guessed any of this would happen. I didn’t even know what I was getting into when Freckles found the device.</p>
<p id="indent">My poor Freckles…</p>
<p id="indent">I have to find a way off this island. My cat is stuck in a cage all because I couldn’t control myself.</p>
<p id="indent">“I just don’t think it’s fair, Mary. I hate having to boss people around like this.”</p>
<p id="indent">“What job did you work before being sent here?”</p>
<p id="indent">“I worked at a scrapyard, where I mostly kept to myself. I would be given orders, sure, but the day was mine as long as I was doing what I needed to. I never had to be the boss, and I never felt like I was under this much pressure.”</p>
<p id="page-end">62</p>`
const ch6p8 = `<p id="page-start"> </p>
<p id="indent">“I understand what you are feeling, Luna.”</p>
<p id="indent">“How can you possibly understand what it’s like to be forced to tell slaves what to do, Mary? This is like, next-level torture.”</p>
<p id="indent">“I was a preschool teacher for quite some time. While that is an awful comparison to our current situation, there are similarities in how sometimes we have to be the bad guy, Luna. Like those we are trying to tell what to do, we cannot always do what we want. If the kindergarteners want cookies, but you have explicit orders not to give them cookies, who here is the bad guy?”</p>
<p id="indent">“The administrator who made the rule?”</p>
<p id="indent">Mary stops to ponder my answer. She clearly wasn’t expecting a response quite so cynical. “Well, I suppose, yes. It is something the kindergarteners do not recognize in the moment, but it is true, nonetheless.”</p>
<p id="indent">“So, what I’m hearing is, we need to take this out on the guys up top who control everything.”</p>
<p id="indent">“I am not sure how you have managed to spin the lesson of my parable like this, but if it helps you realize you are not at fault, then sure. Take it out on the guys up top.”</p>
<p id="indent">“Thanks, Mary. You’re the best.”</p>
<p id="indent">I speed off to a more secluded area of the island, invigorated by a new idea. Today, I’ll devise a plan to scout the island. Tomorrow, I’ll find where my best friend is being held. And then, I’m going to escape this hell.</p>
<p id="page-end">63</p>`
const ch6p9 = ``
const ch6p10 = ``
const ch6p11 = ``
const ch6p12 = ``
const ch6p13 = ``
const ch6p14 = ``
const ch6p15 = ``
const ch6p16 = ``
const ch6p17 = ``
const ch6p18 = ``
const ch6 = [ch6p1, ch6p2, ch6p3, ch6p4, ch6p5, ch6p6, ch6p7, ch6p8, ch6p9, ch6p10, ch6p11, ch6p12, ch6p13, ch6p14, ch6p15, ch6p16, ch6p17, ch6p18]

const ch7p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 7</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">I wake to the uncomfortably loud buzzing sound of the morning alarm reverberating through the building. My whole body feels achy and groggy from all the physical exertion these past couple of days. Surely it can’t be six o’clock already, right?</p>
<p id="indent">The noise of rustling in the room confirms my worry. </p>
<p id="indent">There goes my naïve hope that this was all some twisted nightmare. Night three without Freckles, and I’m in the denial stage. I need to escape this place–and fast.</p>
<p id="indent">First, I need to make sure and see if he’s even on the island, or figure out if he got carried away somewhere else.</p>
<p id="page-end">64</p>`
const ch7p2 = `<p id="page-start"> </p>
<p id="indent">“Good to see you are on time today, Luna,” Mary says, holding two bowls in her hands. “I snagged us some breakfast before they closed shop this morning.”</p>
<p id="indent">“You’re the best, Mary.” As unappetizing as plain oatmeal normally is, it’s food, and right now, that’s all I need.</p>
<p id="indent">Nothing interesting happened after lunch yesterday, other than a bit more patrolling and some yelling between quarries. Quarry three still never got their machinery running, which made me more than a little upset at the time, but I realized during dinner that I honestly don’t care. I’m not gonna be Slaphand’s pet Overseer for a literal slave operation that I am actively being forced to participate in.</p>
<p id="indent">I never saw him again yesterday, either. If I had to take an educated guess, I’d say he’s been hiding away in the Administration building this whole time. </p>
<p id="indent">After dinner, I took a shower in a disgusting public bathroom and went to sleep on the hard linoleum floor. At least the bathrooms had privacy.</p>
<p id="indent">And, of course, I dreamt of Freckles. If I’d recognized how big of an impact that cat would have on me, I would’ve treated him so much better. Maybe I would’ve even listened to what he had to say. He was scarily good at keeping me in line and making sure we didn’t get into trouble. Something tells me I’ll need his wisdom here, too.</p>
<p id="indent">Mary and I hastily finish our oatmeal, put the bowls away, and get ready for a fun day of unpaid labor and authoritarian control over our lives. Strange how when I word it that way, it doesn’t sound fun.</p>
<p id="indent">“What’s on the agenda for you today, Mary?”</p>
<p id="indent">“A little of the same thing as always, I fear.” She sighs dramatically.</p>
<p id="page-end">65</p>`
const ch7p3 = `<p id="page-start"> </p>
<p id="indent">“Well, I understand you’re a busy girl, but I’ve got a different job for you, if you’d like.”</p>
<p id="indent">“Oh? What are you offering?”</p>
<p id="indent">“How does helping me come up with an escape plan sound?”</p>
<p id="indent">“You still have those crazy ideas in your head, Luna? It is much too dangerous to be staging an escape, never mind the fact that I am an old woman who could not attempt it if she tried.”</p>
<p id="indent">“Fifty-eight’s not that old.” I give her the same smile she gave me my first day. “Besides, you know you wanna. All I’m doing today is gathering some info. I have to find Freckles and figure out the best way off the island, as well as when to put things in motion. It’ll be easy. I won’t even make you fight anyone.”</p>
<p id="indent">“That is not as reassuring as you might think it is. Is ‘easy’ really the right word for this situation?”</p>
<p id="indent">“Oh, come on, Mary. This could be our sole chance at leaving.”</p>
<p id="indent">Mary tosses her head side to side, visually deciding whether or not my idea is worth the risks involved. Realistically, I could try to do it without her, and would probably do better that way, but I want to get her off the island, too. Did I get attached to her too quickly?</p>
<p id="indent">“Alright, Luna. You win. But only because of your enthusiasm. Tell me your plan.”</p>
<p id="indent">“I knew I could count on you, Mary. So, as I’ve previously mentioned, one of the quarries has broken down machinery, and I had to grab a mechanic to repair it. Their workshop is built into the Administration building, and the hangar door stays open all day. We have easy access to the rest of the building through the shop, as well as any makeshift weapons we need, with wrenches and screwdrivers and other stuff readily </p>
<p id="page-end">66</p>`
const ch7p4 = `<p id="page-start"> </p>
<p id="no-indent">available for anyone to snag, so long as they’re not paying attention. The two of us will sneak inside the building, do some recon, see if Freckles is being held there, and gather as much intel as we can before tomorrow’s escape.”</p>
<p id="indent">“You want to be gone by <em>tomorrow</em>?”</p>
<p id="indent">“Well, the sooner, the better, I’d say. We should get moving.”</p>
<p id="indent">“Am I going to regret agreeing to this?”</p>
<p id="indent">Probably.</p>
<p id="indent">“Probably not.”</p>
<p id="indent">Instead of going to the shipyard for the day, Mary and I blaze a trail to the workshop as inconspicuously as possible. Inside, two of the three mechanics from yesterday are standing around, messing with the gear shaft of some large, motorized machine.</p>
<p id="indent">“Can we help you two?” one of them asks, spotting us in the open garage doorway.</p>
<p id="indent">“Yeah,” I start. “I just got back from a talk with boss-man. He’s not happy right now.”</p>
<p id="indent">“Why’s that?”</p>
<p id="indent">“Well, I came to you the other day asking for repairs to quarry three’s machines, but you haven’t fixed them yet. He says he wants the job done by lunch, or it’s you in the blue jumpsuits.”</p>
<p id="indent">“Why don’t you mind your own business, kid?” the second mechanic asks, upset. “We didn’t do nothing to you.”</p>
<p id="indent">“I am minding my business, actually. In fact, I could’ve told him about your disgusting little affair with Lana, but I was minding my business pretty hard. So if you want to keep that a secret, I suggest you get moving.”</p>
<p id="page-end">67</p>`
const ch7p5 = `<p id="page-start"> </p>
<p id="indent">The two of them sheepishly hurry to get into a four-wheeler and drive away, leaving Mary and I unattended.</p>
<p id="indent">“That was some scary next-level manipulation,” she comments. “How did you learn to do that?”</p>
<p id="indent">“I’ve had a good few years of practice on it. Now’s our chance to loot what we can and sneak inside.”</p>
<p id="indent">I grab a heavy-looking wrench from a workbench and notice a group of three walkie-talkie chargers. Two are empty, but the third is occupied, its radio sitting and soaking in some battery life.</p>
<p id="indent">Where’s the third mechanic today? This had better not throw a wrench in my plans.</p>
<p id="indent">I have no clue what the channels are, but I snag the walkie-talkie and shove it in one of the jumpsuit’s spacey pockets just in case. Maybe it’ll give us the edge up on when the mechanics are done with their job.</p>
<p id="indent">“Are you grabbing anything, Mary?”</p>
<p id="indent">“I am not strong enough to carry anything like that wrench, and I do not think I could bring myself to use it as a weapon.”</p>
<p id="indent">“Alright then, we’ll get moving. Remember, steal or memorize anything we can use as intel. We can’t afford to be caught off guard tomorrow.”</p>
<p id="indent">I turn the handle of the door that leads into the rest of the Administration building and brace myself. It slowly swings open, revealing a clean lounge with a coffee machine, table, fridge, and oven. If it weren’t for all the despair on the outside, you’d think this was a white-collar kitchenette at your garden-variety office complex.</p>
<p id="indent">“I shouldn’t be surprised their living conditions are much better than ours.”</p>
<p id="page-end">68</p>`
const ch7p6 = `<p id="page-start"> </p>
<p id="indent">“They love to flaunt it in our faces. Keeps us longing for our homes back in Carmsborough.”</p>
<p id="indent">“As if I needed more reasons to hate these guys.”</p>
<p id="indent">We sneak through the lounge, avoiding a large window taking up most of one of the walls. The doorway leads us to a long hallway, lined by a claustrophobic number of doors. </p>
<p id="indent">And we can’t tell whether they’re occupied or not unless we check. There’s no way we can safely enter any of them while searching for Freckles and Slaphand. I pick a door more towards our end and open it, once again prepared for the worst. Mary peeks around the corner, also tense, but relaxes a little after peering inside.</p>
<p id="indent">This room is also free of people. Filing cabinets line all four walls, only leaving empty spaces in the corners where you wouldn’t be able to pull out any drawers. As tempting as it is to start digging inside, we don’t have the time to go riffling through them willy-nilly. We don’t even know if they hold anything remotely interesting or useful.</p>
<p id="indent">The next room is also person-free, but has a table in the center with papers strewn across it haphazardly. I steal a peek at a couple. All of them mention Orion and the Clockwork in the header of the page.</p>
<p id="indent">“This is weird. There’s like a hundred diagrams of the inner workings of the Clockwork and some scarily detailed information on Orion. Do you think they’re going to attack them?”</p>
<p id="indent">“Most likely. If they discover this island, there will be no stopping them from destroying all of Slaphand’s hard work.”</p>
<p id="indent">“Wait, so Slaphand is the one completely in charge here?”</p>
<p id="indent">“He works for another man, but he controls the entire island. His boss has never visited.”</p>
<p id="page-end">69</p>`
const ch7p7 = `<p id="page-start"> </p>
<p id="indent">“His name is Bijabers. He wears some pretty exotic clothes and is Australian or something. I met him right before I got sent here. I genuinely think he’s a psychopath.”</p>
<p id="indent">“You have to be soulless to hold people as slaves like this. He is more than a psychopath. He is the devil.”</p>
<p id="indent">“Yeah, that fits, too. Way to be dramatic, Mary.”</p>
<p id="indent">Each diagram of the Clockwork is different. Do they not know what the inside looks like?</p>
<p id="indent">They’re not tearing Freckles apart for research, are they?</p>
<p id="indent">“It’s a good thing I’m planning on getting us out of here tomorrow,” I say, showing her the diagrams. She nods solemnly.</p>
<p id="indent">We work our way through a couple more rooms, all empty, until we reach one with a machine almost exactly like the one on the cloudship I hijacked. This one is missing a few parts, and some of the outer shelling, but it’s clearly the same design.</p>
<p id="indent">Bijabers must be moving ahead of schedule. Maybe they really were going back to normal shifts by the end of the week.</p>
<p id="indent">“We have to break this,” I say, grabbing my wrench.</p>
<p id="indent">“What is it?” Mary asks, justified concern evident on her face.</p>
<p id="indent">“This thing has the power to blow a hole through a building. I can’t imagine Bijabers has any good intentions for this machine.”</p>
<p id="indent">“Maybe they are using it to destroy the <em>Überall</em>.”</p>
<p id="indent">Now it’s my turn to be confused. “What’s the <em>Überall</em>?”</p>
<p id="indent">“I am not sure. That is what this wall of paper says.”</p>
<p id="indent">She points to a corkboard absolutely covered in documents. In big bold words, the phrase “PLASMARIZER: TO DESTROY THE <em>ÜBERALL</em>” sits directly in the middle.</p>
<p id="page-end">70</p>`
const ch7p8 = `<p id="page-start"> </p>
<p id="indent">“Maybe the <em>Überall</em> is a ship or weapon or something. Either way, the enemy of our enemy is our friend, and I don’t think we want our enemy using this weapon.”</p>
<p id="indent">I lift the stolen wrench above my head, ready to bring it down upon the machine, when I hear a pair of footsteps in the hall. Two men in uniforms step into the room and close the door. </p>
<p id="indent">Busted.</p>
<p id="indent">“You have three seconds to drop that, or we’ll break your arms and make you do it ourselves,” the one on my left says.</p>
<p id="indent">“That is very forceful, mister. And right off the bat, too. But if you insist.”</p>
<p id="indent">I throw the wrench as hard as I can at him, which smashes into his chest with a crack. While he doubles over to recover, I run to the guy on my right and plow into his stomach. Out of the corner of my eye, I watch Mary pick the wrench up to keep it away from my first victim.</p>
<p id="indent">I loop behind the man I barreled into and wrap my arm around his neck. All I need is for him to go unconscious so that I can take care of the first guy, too. He swings back at me with his fist, but can’t reach far enough to do any actual damage.</p>
<p id="indent">The first guy, probably sporting a cracked rib or two, stands and charges at us. I launch his friend at him, and the two collide loudly before toppling to the ground. I reach to get the wrench from Mary, never letting my eyes lose focus on their jumbled bodies collapsed on the floor, but neither get up.</p>
<p id="indent">“Really? That’s all it took to knock two grown men unconscious?”</p>
<p id="indent">“You did some serious damage to the first one with that throw,” Mary says, wincing from either the sound, the thought of the pain, or both. “I </p>
<p id="page-end">71</p>`
const ch7p9 = `<p id="page-start"> </p>
<p id="no-indent">did not enjoy that.”</p>
<p id="indent">“I’m sure he didn’t, either. It’s okay, though. These are the bad guys. If anything, they deserved it.”</p>
<p id="indent">“These men are not in charge of anything.”</p>
<p id="indent">“Yeah, but they’re also making a conscious decision to work for the men who do, and to me, there’s no difference.”</p>
<p id="indent">“Would you not also work for the bad men if they threatened those you love?”</p>
<p id="indent">“No, I wouldn’t. I’d do what I’m doing right now, which includes destroying this thing.”</p>
<p id="indent">It’s a long process, but I eventually end up mangling and wrecking the innerworkings of the laser machine. The whole time, Mary switches between checking under the door for any shadows, watching my two victims to make sure they stay unconscious, and nervously reading some of the information on the board. Considering this is just a practice run for our actual escape, we’re doing a pretty good job. A power duo for sure.</p>
<p id="indent">No more powerful than me and Freckles together, but still pretty powerful.</p>
<p id="indent">“That should do it. Now, let’s go find my cat.”</p>
<p id="indent">“What do we do with the guards?”</p>
<p id="indent">Oh yeah.</p>
<p id="indent">“You’re not gonna like it, but let’s steal their uniforms. That way, we’ll be less suspicious in a building full of people wearing the same garb. After that, I’ll go hide them in a room somewhere. Maybe the room of filing cabinets, so they’re hidden for as long as possible.”</p>
<p id="indent">I was right–she didn’t like the idea. Much to her chagrin, we both remove our jumpsuits and switch into one of the guard uniforms, being </p>
<p id="page-end">72</p>`
const ch7p10 = `<p id="page-start"> </p>
<p id="no-indent">careful to not somehow wake one of them in the process. Not that I couldn’t just as easily put them to sleep again, but they’re already in for an embarrassing moment when they come to later. The goal is to keep them out of the equation, not to permanently damage them.</p>
<p id="indent">I drag their unconscious bodies into the room of filing cabinets and hide them in the corner spaces where cabinets couldn’t fit. Unless you’re looking right at the spot, it’s difficult to tell they’re even there. Then, we hide our old jumpsuits in the now torn-apart machine, and leave the room slightly more confident than we had been walking in.</p>
<p id="indent">“Lead the way,” Mary says, gesturing with her hand. We continue down the hall, peeking through each doorway. Sometimes we get confused faces, but for the most part, the room is either empty or those inside aren’t paying attention.</p>
<p id="indent">With four doors left, including one at the very end of the hall that seems like it could be Slaphand’s office, we move more slowly and cautiously. I move to open one, but stop when a voice talks inside.</p>
<p id="indent">“Great meeting with you, P-Man. I look forward to your comprehensive report by the end of the week. With any luck, we’ll have a little buffer time until they attack us. That way, we can turn the tides much faster.”</p>
<p id="indent">Slaphand exits the room, smiling at whoever else was in there with him. Mary and I dive behind the doorway of the neighboring room. It takes all of my willpower to not jump around the corner and start going feral with my stolen wrench.</p>
<p id="indent">His footsteps move towards his office at the end of the hallway. I let myself peer past the corner, and watch the abnormally dimensioned man in a white suit walk to his office, carrying Freckles in a cage.</p>
<p id="page-end">73</p>`
const ch7p11 = `<p id="page-start"> </p>
<p id="indent">His ears perk up as he notices me staring at him.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I hear ya, buddy,” I whisper. “Soon.”</p>
<p id="indent">“Quiet, machine,” Slaphand says, shaking the cage a little. Freckles looks annoyed, but is otherwise completely untouched. They haven’t torn him to bits to map his innerworkings yet. I’ll have to make sure they never get the chance.</p>
<p id="indent">“Let’s bounce,” I say, filled with new hope. “If you’re still willing to help see this all the way to the end, we can talk more tomorrow at the beginning of the day. I’ve got some semblance of a plan, but I’ll need more time to get everything completely put together.”</p>
<p id="indent">“We will see. For now, I would much rather be working at the airships to keep them clean.”</p>
<p id="indent">“Good idea.”</p>
<p id="indent">We grab our jumpsuits, switch our clothes, and quietly exit the Administration building while still carrying the wrench, walkie-talkie, and guard suits. The mechanics are nowhere in sight, meaning the excavation machinery must be kicking their butts. </p>
<p id="indent">“Where do you think we could hide this stuff for later?” I ask, gesturing to our stolen goods.</p>
<p id="indent">Mary thinks for a minute and says, “Nobody but me uses the cleaning shed at the shipyard, save for a guard on rare occasions. We could easily hide this stuff for a few days in there.”</p>
<p id="indent">“Well, we’ll only need to hide them for tonight, as long as all goes well tomorrow.”</p>
<p id="indent">We make our way to the shipyard, do our best to discretely hide our spoils, and part ways for what’s left of the morning.</p>
<p id="page-end">74</p>`
const ch7p12 = `<p id="page-start"> </p>
<p id="indent">It’s only been two full days, but seeing Freckles alive and well did a lot for my aching heart. With luck, he’ll be back at my side within the next forty-eight hours.</p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="indent">For the rest of the day, Mary and I hardly look at or talk to each other, trying to be as inconspicuous as possible. Even during dinner, we barely make conversation, although my nerves have a bigger part to play in that than anything. Her fellow shipyard workers try asking where she was for the first half of the morning, but she simply smiles and shrugs.</p>
<p id="indent">She dozes off long before I even go to curl up in my spot, leaving me alone to think over the day’s events. There’s a lot of information to take in, but I have to focus on what really matters: rescuing Freckles and getting us a safe way off the island.</p>
<p id="indent">My eyes wander as I think, first landing on the mirage of bodies surrounding me, all in different stages of winding down for the night, then at the pale walls, discolored from years of neglect, and finally at the camera in the corner of the room. </p>
<p id="indent">That’s weird. I can’t believe I didn’t notice the camera. Usually I’m pretty good at spotting details like that.</p>
<p id="indent">No matter. Freckles will be perched on my shoulders in less than twenty-four hours. I’m shaking with anticipation. My best friend is alive, and—</p>
<p id="indent"><em>I didn’t notice the camera. </em></p>
<p id="indent"><em>There are cameras.</em></p>
<p id="indent">If they haven’t seen the footage of the two of us sneaking around the Administration building yet, they will soon.</p>
<p id="page-end">75</p>`
const ch7p13 = `<p id="page-start"> </p>
<p id="indent">Our timetable has moved to tonight.</p>
<p id="page-end">76</p>`
const ch7p14 = ``
const ch7p15 = ``
const ch7p16 = ``
const ch7p17 = ``
const ch7p18 = ``
const ch7 = [ch7p1, ch7p2, ch7p3, ch7p4, ch7p5, ch7p6, ch7p7, ch7p8, ch7p9, ch7p10, ch7p11, ch7p12, ch7p13, ch7p14, ch7p15, ch7p16, ch7p17, ch7p18]

const ch8p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 8</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“Mary, wake up,” I whisper, lightly shaking the older woman. “I’ve got some bad news about our little escapade earlier today.”</p>
<p id="indent">“Is that you, Luna?”</p>
<p id="indent">“Come on, Mary. We messed up.”</p>
<p id="indent">My voice wavers as much as my hands. I don’t want to picture what will happen when they find the video footage.</p>
<p id="indent">“What happened?”</p>
<p id="indent">“There are cameras, Mary. We have to move now, or we’re in serious danger.”</p>
<p id="indent">Mary straightens dramatically, her eyes wide. “I did not think of the </p>
<p id="page-end">77</p>`
const ch8p2 = `<p id="page-start"> </p>
<p id="no-indent">cameras.”</p>
<p id="indent">“Yeah, me neither. We’ve gotta figure out what to do and how to do it. The clock is ticking.”</p>
<p id="indent">“We must find a quieter place to talk. Others are still awake and could cause trouble.”</p>
<p id="indent">“True. Let’s bounce to the shed. We’ll grab our equipment and go from there.”</p>
<p id="indent">Sneaking out of the cramped lodging this late at night proves to be as much of a challenge as it sounds. Those that are still awake aren’t interested in us leaving, probably because of my Overseer status, but that doesn’t mean guards were going to be okay with it. When one rounds the corner, we make it look like we’re getting ready to sleep for the evening, heading for open spots on the floor. They spend a minute surveying and snooping, and eventually dip.</p>
<p id="indent">Finally, after thirty minutes of espionage, we enter into the cold December night. A few dense storm clouds threaten to break open, blotting the sky and full moon. How funny would it be if the first snow of the season came right when we’re ready to enact our plan?</p>
<p id="indent">A snowflake flickers down and lands on Mary’s shoulder.</p>
<p id="indent">Apparently not very funny at all.</p>
<p id="indent">“Let’s make this quick. I don’t think we wanna freeze to death.”</p>
<p id="indent">“What is the plan after we get the suits?”</p>
<p id="indent">“We’re going to grab Freckles, steal a ship, and fly all the way to Carmsborough. If we can, I’d prefer a cloudship, because that’s the only thing I’ve ever flown.”</p>
<p id="indent">I exclude the detail that I’ve never <em>learned</em> how to fly in the first place. The last thing I need is her flaking on me now. Like it or not, either of us </p>
<p id="page-end">78</p>`
const ch8p3 = `<p id="page-start"> </p>
<p id="no-indent">are screwed if we decide to stay on the island.</p>
<p id="indent">“That sounds more like a dream than a plan.”</p>
<p id="indent">“It’s not like I had a lot of prep time, Mary. Do you have anything that could help?”</p>
<p id="indent">“Well, they never leave the ships unlocked. Even the cloudships. They keep the keys somewhere, but I am not sure where. Maybe in one of the last few rooms we did not check in the Administration building.”</p>
<p id="indent">“Okay, so we’ll get Freckles, grab an airship key, snag a ship, and get out of here. Piece of cake, right?”</p>
<p id="indent">“Hmm.”</p>
<p id="indent">I’m not totally convinced, either.</p>
<p id="indent">Despite a rally of panning spotlights and an occasional guard patrolling the grounds, we make it to the shed in good time and rush to equip our stolen gear. The radio and wrench jingle uncomfortably in the spacious pockets of my suit, bumping against my hips as I step.</p>
<p id="indent">As a test, I decide to switch on the radio. It emits a constant low static noise, signaling empty airwaves. I turn the volume just low enough that the static disappears, but loud enough for us to hear any late-night conversations.</p>
<p id="indent">“Would it be better if we could disable the video system for a short time?” Mary suggests.</p>
<p id="indent">“You’re full of good ideas, Mary. Any idea where the security room would be?”</p>
<p id="indent">“No.”</p>
<p id="indent">“Fair. Let’s see if we can take care of that first.”</p>
<p id="indent">“This plan is beginning to sound less and less like a piece of cake, Luna, and more like a complicated way to get killed. I am worried for our </p>
<p id="page-end">79</p>`
const ch8p4 = `<p id="page-start"> </p>
<p id="no-indent">safety.”</p>
<p id="indent">“It’s okay, Mary. We’ve got this big ol’ wrench on our side, and I think I’ve already demonstrated my willingness to use it.”</p>
<p id="indent">“And if they come at us with more than fists?”</p>
<p id="indent">“They haven’t yet, have they?”</p>
<p id="indent">She stays silent, but clearly isn’t content with my answer. The two of us tiptoe our way to the Administration building, once again being careful to avoid the spotlights and prying eyes of the guards making their rounds. I’m not sure how many are on patrol, but fighting them all is not an option, even if they’re unarmed. </p>
<p id="indent">“We’re getting word of two ambushed guards earlier today, as well as missing equipment from the mechanics shop,” a voice on the radio says, scaring us motionless. “Be on the lookout for anyone in a guard outfit that doesn’t belong. Security is going to be checking the tapes as soon as possible.”</p>
<p id="indent">“Roger that,” another voice crackles back seconds later. I recognize it as one of the mechanics from earlier.</p>
<p id="indent">“Our operation time is getting smaller and smaller,” I say to Mary. A bead of nervous sweat forms on my forehead, contradicting the snow slowly building up on the frosty grass. </p>
<p id="indent">“Let us go take care of the videos, then.”</p>
<p id="indent">We reach the mechanics shop, which, unsurprisingly, has closed its doors for the night. A quick yank on each confirms they’re locked.</p>
<p id="indent">“Are there any other doors that lead into the Administration building, Mary?”</p>
<p id="indent">“We could use the long hallway that attaches the Housing and Administration buildings,” she suggests, pointing to the makeshift </p>
<p id="page-end">80</p>`
const ch8p5 = `<p id="page-start"> </p>
<p id="no-indent">connector. “It will not be easy, especially if they have it on lockdown, but that may be our only option. The front door to Administration is always locked.” </p>
<p id="indent">“I guess we’re sneaking through Housing again.”</p>
<p id="indent">We walk into the overpacked building with a little more intent than we left with. No point in the others not knowing we don’t belong. All we’re trying to do is stay away from the guards. </p>
<p id="indent">“You have my hopes higher than they should be, Luna,” Mary says, stepping over some of the already asleep bodies. “For the first time in a long time, I truly believe I will see my children again soon.”</p>
<p id="indent">Of course she has children. I never even considered the idea. She probably had a husband too, although I can’t imagine he’s still around if she hasn’t brought him up.</p>
<p id="indent">“How many do you have?” I ask, as if they wouldn’t be my parents’ age. Feels weird to think about.</p>
<p id="indent">“I have two. A son and a daughter. Oh, how I miss my mornings with Elouise when we sat and broke bread with each other. I want nothing more than to return to my old routine, but I am afraid that we will never be truly safe after we escape from this hell.”</p>
<p id="indent">“We’ll get you to your kids, Mary, and something tells me these goons have more to worry about than the two of us breaking free. They’re preparing for something much bigger, and we’re just a couple of road bumps in whatever plan they’re cooking.”</p>
<p id="indent">“I suppose. Well, what is your home life? Do you have family waiting for you?”</p>
<p id="indent">In front of us is the divider that leads to the Administration building. It’s strangely unguarded, which most likely means it’s also locked. I quietly </p>
<p id="page-end">81</p>`
const ch8p6 = `<p id="page-start"> </p>
<p id="no-indent">try the door, praying nobody’s on the opposite side guarding it.</p>
<p id="indent">“Nah. My mom died five years ago, and my dad left long before that. It’s just Freckles and I. I’m not sure who I would’ve become if I hadn’t found the little robot dude at work one day. I might not even be alive without him.” </p>
<p id="indent">“I am sorry to hear that. Maybe when all of this is said and done, we can find a new place together.” </p>
<p id="indent">“Yeah, maybe,” I say, not focusing on what she’s saying. The knob turns, and the door slowly drifts open. </p>
<p id="indent">Nobody’s in the long hallway connecting the two buildings. We’re in luck again.</p>
<p id="indent">“Boss, we’ve got bad news regarding the new Plasmarizer,” a voice says on the radio, startling the two of us and a couple of people that were nodding off to sleep. I turn the knob a little further and hold it to my ear.</p>
<p id="indent">Slaphand’s booming voice crackles over the speaker. “Yeah, what is it this time?” </p>
<p id="indent">“Whoever was sneaking about yesterday might have damaged it, too. I’m standing in the security room trying to get the timestamp, but it could be a few hours.”</p>
<p id="indent">A string of swear words sounds off from the black box in my hand. </p>
<p id="indent">“We can’t afford another setback like this! I’m going to look at the Plasmarizer right now!”</p>
<p id="indent">The two of us stop at the end of the hallway. He’ll be walking our way, and the last thing we need is to run directly into the one man we’re explicitly avoiding.</p>
<p id="indent">Through the door, we can hear him yelling and stomping down the hall. We’re dead meat as soon as he finds out it was me again.</p>
<p id="page-end">82</p>`
const ch8p7 = `<p id="page-start"> </p>
<p id="indent">“I think we have to change our plan again,” I whisper to Mary. “We can’t destroy the video system if Slaphand’s walking around. He could enter in there at any moment.”</p>
<p id="indent">“Then we should lie low and grab only your cat and the keys,” Mary suggests.</p>
<p id="indent">I crank the doorknob as slow as possible and peek my head through the tiny crack. The hall is empty for now. </p>
<p id="indent">“Alright. Let’s get moving. There weren’t many doors left for us to check, but we should still hurry.”</p>
<p id="indent">We take soft and nervous steps towards the opposite end of the hallway. My neck is tense and my eyes are fixated on one of the last few doors we didn’t check behind.</p>
<p id="indent">Please be the one we need.</p>
<p id="indent">Every movement we make creaks slightly against the carpeted flooring. This time my senses are even more attuned to the noises compared to our first round of recon. </p>
<p id="indent">“Wait, creaking means empty space underneath the boards.”</p>
<p id="indent">“What?” Mary asks in a hushed tone.</p>
<p id="indent">“There’s a <em>basement</em>, Mary. We might have to search there, too.”</p>
<p id="indent">“Well, that figures.” Her eyes seem hollow, emphasizing the frown resting on her face.</p>
<p id="indent">We finally reach the door I’ve been honed in on, and I swing it open as if I do so every day. A flight of stairs leads into a dark basement, lit scarcely by a few gas lanterns hanging on the walls.</p>
<p id="indent">“I hate being right.”</p>
<p id="indent">Just to confirm, we check the other rooms. Like the hallway, they’re surprisingly empty, and don’t have what we’re here for.</p>
<p id="page-end">83</p>`
const ch8p8 = `<p id="page-start"> </p>
<p id="indent">“To the basement it is,” I say, reopening the door. Despite our best efforts, our shoes echo against the walls with every step until we reach the concrete floor, where the freezing temperature of the underground room hits us immediately. It feels as bad as it does outside, minus the snow part. Aside from a few extra doors lining the walls, the place is wide open and empty. </p>
<p id="indent">“I am tired of playing this door game,” Mary comments. </p>
<p id="indent">“Jackpot,” I say, pointing to the only labeled room: security.</p>
<p id="indent">“I thought we were going to skip the security room?” she asks.</p>
<p id="indent">“Well, we were,” I say, slipping the wrench out of my pocket, “but this is too good of a situation to pass up. You go ahead and check the other rooms. I’ll handle these guys.”</p>
<p id="indent">“Please do not do this, Luna. There is no way of telling how many people are in there. You may get us caught. Or killed.”</p>
<p id="indent">“I could also save us from being caught or killed, and I’m willing to take that risk.”</p>
<p id="indent">Mary shakes her head in disapproval but sneaks away to search elsewhere. I carefully open the security room door without a sound. </p>
<p id="indent">There are three men, all focused on seven monitors rotating between different rooms and the main hallway. Judging from the timestamp in the corner of each screen, they’re hunting for the incriminating footage from yesterday.</p>
<p id="indent">I close the door behind me as quietly as I opened it and lift the wrench over my head, ready to clock the man in the middle. My reflection faintly shows in the monitor screens, and the three turn just in time to watch me bring the makeshift weapon down.</p>
<p id="indent">With a loud bonk on his head, the man in the middle flops onto a </p>
<p id="page-end">84</p>`
const ch8p9 =`<p id="page-start"> </p>
<p id="no-indent">keyboard in front of him, mashing buttons and messing with the monitors. The other two draw their fists and swing at me. I duck, but not in time to dodge their next attack. The guard to my left kicks and crashes into my arm, sending me tumbling.</p>
<p id="indent">I hate to say it, but this <em>was</em> a bad idea. Even if they hadn’t noticed me bringing the wrench down on my first target, I probably wouldn’t be able to take these two in close quarters without help. Mary was right–I let my heartache and need for revenge get in the way of rational thinking. </p>
<p id="indent">The man on my right also sends out a kick, landing square on my stomach. I fight the urge to throw up and claw my way to a standing position. Wielding the wrench like a baseball bat, I swing in front of me, not aiming for either of them in particular. They both dodge backwards, giving me a chance to lunge at the one on the right, weapon-first. It hits his shoulder, and he grunts with pain. </p>
<p id="indent">Keeping the momentum, I punch his side with my free arm, landing in between his hip bone and ribcage. The other man, apparently feeling lonely, jumps at me, rips me off of his partner, pins me against the wall, and wraps his hands around my neck. </p>
<p id="indent">“At least buy me dinner first,” I say, trying to break his grip with my own hands.</p>
<p id="indent">“Call the boss!” he yells to the other, looking away long enough for me to lift both of my legs into the air and kick off of him. Both feet plant on his calves, and push him harshly to the ground, butt first, head second. I also smack into the floor, but scramble back up quickly.</p>
<p id="indent">His partner grabs a walkie-talkie and presses the button, ready to alert the boss. Acting fast, I launch the wrench at his hand, which connects with the radio and shatters it in his hands. He winces, but any serious </p>
<p id="page-end">85</p>`
const ch8p10 = `<p id="page-start"> </p>
<p id="no-indent">damage potential is blocked by the now-worthless radio.</p>
<p id="indent">We exchange a momentary glance, first at each other and then at the wrench, and both dive for it. I land on top of him and put him in a chokehold, hoping he’ll clock out without having the chance to use the wrench against me.</p>
<p id="indent">The man I’d kicked to the floor sits up and watches the two of us for a moment before realizing what’s happening. He moves to join in on the fun, raising his leg.</p>
<p id="indent">I try to roll while keeping the headlock intact, but my victim’s too heavy for me. A barrage of kicks hammers my exposed side, sending stars darting across my vision. </p>
<p id="indent">This fight has to end, and soon. Every new attack hurts more and more, threatening to make me black out. After a few more seconds, the man underneath me stops moving, and his grip on the wrench loosens. I can finally roll away from the next kick. My side is screaming in pain, but for now, I reclaim my makeshift weapon and stand as straight as possible, facing the last of the three men.</p>
<p id="indent">“Alright,” he says, “you wanna fight <em>mano y mano</em>? I can do this all day. Come here, you little bi—”</p>
<p id="indent">“How are things going?” Mary asks, swinging the door open and slamming it into the man’s face. He crumples to the floor with a thud. Wide-eyed, she peeks around the edge and sees her accidental handiwork.</p>
<p id="indent">“Why’d you open the door so violently?” I ask. I lightly touch my side, wincing at the raw pain. </p>
<p id="indent">“I did not mean to. It swung open more than I intended. Anyway, I found a ring of keys, so we have our ride.”</p>
<p id="indent">“Well, great work, Mary. And now, we don’t have to worry about </p>
<p id="page-end">86</p>`
const ch8p11 = `<p id="page-start"> </p>
<p id="no-indent">anyone checking the—”</p>
<p id="indent">“Hey!” a voice shouts from outside of the room. We peek, panicked, and come face to face with two familiar-looking guards at the bottom of the staircase. </p>
<p id="indent">“Wait, you’re the two prisoners that knocked us unconscious and stole our clothes!” the other says, angry.</p>
<p id="indent">“Uh oh,” Mary says. </p>
<p id="indent">What an understatement.</p>
<p id="indent">Before we even have time to move, the guards speed back upstairs. </p>
<p id="indent">“We’ve gotta move,” I say, hysteria bubbling in my chest. Momentarily forgetting the searing pain in my side, I bound across the basement and hop up the stairs, blazing ahead of Mary.</p>
<p id="indent">“I’ll grab Freckles if you make your way to the airships, Mary. We can’t afford to lose any more time.”</p>
<p id="indent">I take a quick glance down at main hallway of the Administration building, and when I don’t spot any guards, I rush directly to Slaphand’s office.</p>
<p id="indent">Right as I move to grab the handle, the door opens. In front of me stands the big man himself, his abnormally large hands balled angrily into fists. He’s already left the room with the machine? How long was my fight in the basement?</p>
<p id="indent">I look behind me, ready to dart away, but four more guards, including yesterday’s victims, have blocked off our exit. Multiple guns are pointing our direction.</p>
<p id="indent">Mary was right. I shouldn’t have gone for the security room guards, and now my one chance of rescuing Freckles is gone. We raise our hands, and I drop the wrench, which lands loudly on the floor. </p>
<p id="page-end">87</p>`
const ch8p12 = `<p id="page-start"> </p>
<p id="indent">What have I gotten myself into this time?</p>
<p id="page-end">88</p>`
const ch8p13 = ``
const ch8p14 = ``
const ch8p15 = ``
const ch8p16 = ``
const ch8p17 = ``
const ch8p18 = ``
const ch8 = [ch8p1, ch8p2, ch8p3, ch8p4, ch8p5, ch8p6, ch8p7, ch8p8, ch8p9, ch8p10, ch8p11, ch8p12, ch8p13, ch8p14, ch8p15, ch8p16, ch8p17, ch8p18]

const ch9p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 9</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“You don’t know what you’ve gotten yourself into this time, kid.”</p>
<p id="indent">I stay silent, refusing to give Slaphand any more satisfaction. Not that it matters at this point. We’re in his room now, behind large metal bars that restrict us to the corner. </p>
<p id="indent">According to Slaphand’s taunts, as well as the otherwise empty space, Freckles hadn’t been here for a few hours. Not long after Mary and I saw him while scouting earlier, he’d been loaded on an airship to be sent somewhere else in Carmsborough. A deep rage inside me threatens to pop the blood vessels in my head. </p>
<p id="indent">“By the way,” he continues, “I’ve seen your handiwork. You’re </p>
<p id="page-end">89</p>`
const ch9p2 = `<p id="page-start"> </p>
<p id="no-indent">talented, I’ll give you that. Not everyone can incapacitate five guards, not to mention the machine you’ve recklessly destroyed again. Now that we’ve lost progress a second time, I need to make an example of the two of you.” </p>
<p id="indent">“An example how?” Mary asks him, speaking for the first time since our capture. Like mine, her mood immediately flipped when we were confronted by guns, and I can’t tell if she’s upset with me specifically or just in general.</p>
<p id="indent">“In all my years doing what I do, I’ve never been more frustrated with someone than I am with you two. Well, less you than the kid, Mary. I’ve taken the liberty to read your file a bit. It’s honestly shocking you decided to help her out when your sentence was set to end in a month.”</p>
<p id="indent">“Mary, you only had a month left?” I ask, incredulous.</p>
<p id="indent">“I did not do this for me,” she replied.</p>
<p id="indent">“You, on the other hand, are a mystery to me, kid,” Slaphand continues. “You’ve stepped in between me and my plans two too many times, and I don’t even know your name.” </p>
<p id="indent">“My name is Luna, and you’re gonna learn to fear it.”</p>
<p id="indent">“Oh, I’m sure I won’t.” He moves towards his desk, hovering one of his massive fingers over a red button beside a speaker, and daintily taps it.</p>
<p id="indent">“Attention all workers, I have a midnight announcement for you: two of your own have been apprehended sneaking around in the Administration building and wreaking havoc. In doing so, they’ve destroyed the machine we’ve been collecting parts and raw materials for. This means that we are even less likely to reach our goal on time, and therefore, must add another two hours to the workday.”</p>
<p id="indent">“Another <em>two hours</em>?” Mary blurts. “We were only on ten a day for </p>
<p id="page-end">90</p>`
const ch9p3 = `<p id="page-start"> </p>
<p id="no-indent">three days!”</p>
<p id="indent">“You may recall that we had moved to ten to meet our deadline a few days ago. That was because the first version of the machine had been sabotaged as well. Remarkably, you can blame the same person for both incidents: Luna, the new Overseer. If you have any qualms, please speak to her. Thank you, and enjoy your twelve-hour shifts.”</p>
<p id="indent">Mary looks at me in disbelief. “Did I hear this man correctly?”</p>
<p id="indent">“You didn’t want to hear why I was here, so I didn’t tell you,” I say, sheepishly. “I suspected it was the case when Renet mentioned it, but you were so sure it wasn’t my fault that I didn’t bring it up again.”</p>
<p id="indent">She gives me a long stare before saying, “Well, I guess everything really is about you, Luna. You have proven this old woman wrong.”</p>
<p id="indent">“Look, I’m sorry, Mary. I never should’ve dragged you into this mess, and now I’ve extended your workdays twice.”</p>
<p id="indent">“I am not hurt, Luna. You have done what you thought was right. I am simply at a loss for what to do.”</p>
<p id="indent">“There is nothing for you to do,” Slaphand says, walking back to us. “You two will be stuck in here until I decide you’re done causing damage to my people and property. Good night, trouble. Oh, and Merry Christmas.”</p>
<p id="indent">He leaves the room and turns the light off, drowning us in complete darkness. I sit against the wall, defeated. </p>
<p id="indent">“What now?” Mary asks.</p>
<p id="indent">“Next chance I get, that man is going down.”</p>
<p id="indent">“And how are you going to do that?”</p>
<p id="indent">“I’m not sure yet, but I’ve gotta do something. Returning to work as an Overseer is a death sentence, but so is trying to escape. I’m surprised </p>
<p id="page-end">91</p>`
const ch9p4 = `<p id="page-start"> </p>
<p id="no-indent">he even kept us alive.”</p>
<p id="indent">“He wants to torture you, most likely. You have significantly wronged him twice. He has killed his own guards for less.”</p>
<p id="indent">And what better torture than being put on a pedestal with a target painted on your head?</p>
<p id="indent">It takes a long time, but eventually, Mary drifts to sleep. I’m kept awake by the realization that there was a zero percent chance of rescuing Freckles tonight. Hopefully my little guy is okay. I need him now more than ever. </p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="indent">We wake a few hours later to an alarm blaring. I guess I could manage some sleep after all. We’re still under the cover of near-complete blackness. There’s not even red flashing lights paired with the ear-splitting noise. What little I can see from the faint moon glow is closed off when a heavy metal blinder slowly closes over the glass window, sealing us in Slaphand’s office. </p>
<p id="indent">“What is happening?” Mary yells, clutching her chest.</p>
<p id="indent">“I’m not sure! I think they’re being attacked!”</p>
<p id="indent">Our answer comes a minute or two later with the sound of a loud blast rocking the ground. </p>
<p id="indent">“Do you think it’s Orion and the Clockwork?”</p>
<p id="indent">“That is probably our best option,” Mary answers. Another explosion sounds off, spraying dust and small chunks of ceiling to the floor. “Although, I am not sure if Orion would use explosions to free people.”</p>
<p id="indent">“That’s a good point. Maybe the government?”</p>
<p id="indent">A third blast cracks the wall behind us, letting a little light spill in from </p>
<p id="page-end">92</p>`
const ch9p5 = `<p id="page-start"> </p>
<p id="no-indent">the hallway. Armed guards run past, all in various stages of panic. Whatever it is, they’re clearly worried.</p>
<p id="indent">Slaphand’s voice calls from outside the door, yelling something unintelligible at his guards, before he barges in and flips the light on. Without so much as glancing at us, he opens a drawer, grabs some strange-looking gun and a keyring, and leaves just as quickly as he arrived, slamming the door shut. </p>
<p id="indent">With the force behind his action, the crack in the wall shoots all the way to and across the ceiling, arcs to our containment, and stops at the heavy metal keeping us in.</p>
<p id="indent">“Did you see that?” Mary says, mouth open in surprise, staring at the crumbling wall.</p>
<p id="indent">“The man is strong enough to split concrete on accident. It’s a good thing I didn’t attack him.” I walk up to the now-weakened spot of our makeshift jail and grab onto the bars. “I’m gonna see if we can wiggle this loose and escape. The last thing we need is for the ceiling to collapse on us.”</p>
<p id="indent">Mary joins me, and together, we repeatedly throw ourselves against the metal bars, trying desperately to get them to budge. The bar frame squeaks and scratches against whatever is keeping it lodged in the concrete ceiling, but otherwise doesn’t move.</p>
<p id="indent">“No dice,” I say, giving up. As soon as we both turn away from the weakened spot, however, a fourth explosion rocks the building, cracking the ceiling even further and sending the cage falling.</p>
<p id="indent">We both stare at the debris. A good portion of the room’s ceiling is now on the floor, revealing the cold and cloudy night sky. Snowflakes and ash trickle in, already coating Slaphand’s desk. </p>
<p id="page-end">93</p>`
const ch9p6 = `<p id="page-start"> </p>
<p id="indent">“We weakened it,” Mary says, smiling.</p>
<p id="indent">“Yeah, something like that,” I smile back. “Quick, let’s bounce. No point in waiting for the rest of the building to collapse.”</p>
<p id="indent">I search Slaphand’s desk for anything useful, but there are no more weapons or keys to be found, and something tells me going to the basement is an incredibly awful idea. I scoot away from the desk, and not a moment later, yet another blast sends the rest of the ceiling falling, absolutely crushing the wood underneath it.</p>
<p id="indent">If I weren’t severely panicking, the timing of these explosions would be almost comedic.</p>
<p id="indent">The two of us, still in guard uniforms, slip away from the room and join a flock exiting the building. If they realize who we are, they don’t show any signs. Whatever attack is happening right now is more important than the two of us wandering amuck.</p>
<p id="indent">“To the mechanics shop we go,” I say, planning on snagging an extra makeshift weapon, or even a four-wheeler. We enter in, only to find the center of the ceiling collapsed in. Any vehicle that might’ve been left in the shop is currently a pancake.</p>
<p id="indent">I grab a new wrench off of a workbench and peek out the window of the overhead door. Flashes of light appear from the ends of guns across the field, illuminating the snow now coming down in full force. Off in the distance, I see a disproportionate man running to a grounded airship.</p>
<p id="indent">“He’s escaping! We have to go get him!”</p>
<p id="indent">I reach to open the normal-sized door, but recoil as a spray of bullets dents the metal inward. My hand is frozen on the doorknob. Suddenly, opening it doesn’t seem like such a great idea.</p>
<p id="indent">“What if we go back through the Housing building?” Mary suggests.</p>
<p id="page-end">94</p>`
const ch9p7 = `<p id="page-start"> </p>
<p id="indent">“Good idea.”</p>
<p id="indent">The two of us run into the main Administration building and hurry down the long hallway into the equally long median hallway that connects the two buildings. Then, jumping over and shoving some of the other prisoners, we make our way to the main exit door.</p>
<p id="indent">Right at the exit, a blast rocks our world. Loud cracking and a flash of fiery light consume our senses, and it takes me a moment to regain my footing.</p>
<p id="indent">I stare at the field. Slaphand is but a dot now, still retreating towards the airship, which has been spraying bullets into the sky. If we wait any longer, he’s going to get away, and I <em>really</em> might never reunite with Freckles again.</p>
<p id="indent">“Luna, help me!” Mary calls from behind me. I turn to see her under a pile of concrete and rebar, no doubt from the walls and ceiling crumbling. It’s a wonder I didn’t get hit.</p>
<p id="indent">I look at her, panicked, and then at the ever-receding figure of Slaphand. </p>
<p id="indent">Oh God, what do I do?</p>
<p id="indent">“Luna, please,” she cries, clearly suffering. “This hurts. I think I might have broken something.”</p>
<p id="indent">What would Freckles say? What would <em>I</em> say?</p>
<p id="indent">I can’t know what Freckles would say without him being here.</p>
<p id="indent">“Stay still, Mary, I’m gonna go find help.” I give her one last glance before running onto the open battleground. </p>
<p id="indent">I’m sorry, Mary. Freckles has to come first.</p>
<p id="indent">Part of me almost feels guilty. She’s been nothing but kind and helpful to me. She risked everything for me because I gave her hope that we could </p>
<p id="page-end">95</p>`
const ch9p8 = `<p id="page-start"> </p>
<p id="no-indent">be free. And now, in the middle of a bloody, dangerous ambush, I’m leaving her crushed underneath a heavy pile of rubble.</p>
<p id="indent">But she’ll be okay, right?</p>
<p id="indent">I convince myself not to glance back at her. I have to get to Slaphand somehow. Unfortunately, the most direct path is between the two factions of people fighting across the island. The guards, though vastly outnumbered, are somehow holding their own against the other group, who, from what I can tell, is sporting brown suits and a red band of some sort around their arm.</p>
<p id="indent">Up in the air is a completely different story. There are three different kinds of airships. I recognize the ones from the shipyard, which are launching volleys at both of the other types of ships. A second group, in a fleet of about fifteen or twenty, has a red and white flag with a black symbol on it, and the last simply sports a white flag with a lavender “S” emblazoned in the middle. </p>
<p id="indent">All three factions are trading shots, but it seems like Slaphand’s men aren’t going to last much longer up there. Good riddance, honestly. That still leaves the problem of the other two: who are the good guys, and who are the bad guys?</p>
<p id="indent">I initially decide to hug the sides of the buildings, hoping nobody will notice the five-foot-one girl sneaking away from the battlefield, and make it all the way to the mechanics shop without being noticed. On arrival, a guard and brown-suited man notice me, momentarily putting their differences aside to stare.</p>
<p id="indent">“Hey, boys,” I say, wearing an anxious smile. The brown-coated one raises their gun to me. Instinctively, I raise my wrench, for some reason using it as a shield against a bullet.</p>
<p id="page-end">96</p>`
const ch9p9 = `<p id="page-start"> </p>
<p id="indent">Two shots ring out. The first, from the gun of the man in brown, miraculously connects with the wrench, reflecting the bullet and forcing it deep into the ground. The other comes from the guard’s gun, dropping the brown-coated man in an instant.</p>
<p id="indent">“Thanks for that,” I say, looking at the wrench. Thank God I decided to grab it. Without thinking, I reach for the dead man’s pistol and hold it in my left hand.</p>
<p id="indent">Can I kill? I’ve never tried, but if push comes to shove, I think I could do it in a situation like this. Second question: can I shoot a gun?</p>
<p id="indent">I point at the ground and pull the trigger. It aims roughly where I wanted it to. Works for me.</p>
<p id="indent">Ahead of me, I can see Slaphand’s ship gearing up to fly away. I’m far away from the center of attention now, but still nowhere near safe enough to run blindly across the field.</p>
<p id="indent">Above me, a bullet burrows itself in the concrete wall of the mechanics shop. </p>
<p id="indent">I’m not safe <em>anywhere</em> on this battlefield. It’s now or never, Luna. Let’s make it now.</p>
<p id="indent">I break into a full sprint towards the airship, doing my best to watch for stray bullets and enemies. Should I have taken the time to change into one of the yellow jumpsuits again? The yellow would be a brighter target, but it’d also mean I’m less of a target, right?</p>
<p id="indent">The brown-coated men are the good guys, right? They wouldn’t shoot a prisoner, right?</p>
<p id="indent">Too late for that thought. The only thing to worry about is the man ahead of me, who thinks he’s safe aboard his ship.</p>
<p id="indent">Halfway to it, an incredibly loud shrieking noise rips through the air. </p>
<p id="page-end">97</p>`
const ch9p10 = `<p id="page-start"> </p>
<p id="no-indent">The battle on the ground stops as everyone turns to find the source. A missile streaks from one of the S ships to one of Slaphand’s, creating an awesome bloom of fire, ashes, wood, and metal in the air.</p>
<p id="indent">Or, at least, it would be awesome, if it weren’t directly above <em>me</em>. </p>
<p id="indent">Debris of all sizes comes raining down, landing gracelessly in the snow-covered grass. I keep my eyes facing up, attempting to dodge the serious pieces, but there’s nothing I can do to avoid the smaller splinters of wood and metal threatening to tear me open.</p>
<p id="indent-adjustment-more">Slaphand’s escape ship lets out a roar and starts to slowly lift off the ground. A deep-violet shimmer highlights the entirety of its hull, giving it an enchanting range of hues. Upset by the new development, a few of the ships in the air send a wave of bullets and cannon fire to his ship. It all connects with the newly hued ship but stops short of creating any damage. </p>
<p id="indent">Is that some sort of airship shield?</p>
<p id="indent">The dizzying speed of everything happening is too much for me. I feel a piece of still-falling debris collide with my shoulder, and I tumble to the ground. Sharp pain ripples through my body, but I can still move my arm, meaning nothing’s broken or damaged too badly.</p>
<p id="indent">Finally, Slaphand’s ship lurches forward, taking itself hastily away from the messy battle on the field and in the air. </p>
<p id="indent">I’m too late. He’s going to get away.</p>
<p id="indent">A feeling of despair courses over me. Everything I’ve done to get my cat has tumbled apart because of some spontaneous battle in middle of the night. And the worst part is, Orion and the Clockwork aren’t even here to save us.</p>
<p id="indent">The more I ponder it, the less it all makes sense. Who are these different groups of people, and why did they all suddenly converge on the </p>
<p id="page-end">98</p>`
const ch9p11 = `<p id="page-start"> </p>
<p id="no-indent">island on Christmas morning before the sun has even come up? What on earth is even worth fighting for here?</p>
<p id="indent">The Plasmarizer. The Plasmarizer is worth fighting for.</p>
<p id="indent">And with that destroyed, all of this will be for nothing, too. Sounds like everyone ruined everyone else’s plans for the day.</p>
<p id="indent">With the debris from the exploded airship done falling, I get off the ground and wipe the dust, snow and ash off of myself. I need to go rescue Mary now. Maybe she won’t be too upset with me leaving her to go get my best friend.</p>
<p id="indent">I rush back to the buildings, still actively avoiding creating attention for anyone looking for their next target. Continued blasts have rendered a significant portion of the Administration building entirely unsafe, but a fair bit of the Housing building is still intact, including the front section where I left Mary.</p>
<p id="indent">With no safe way to sneak inside, away from the fighting, I decide to hug the buildings again, until a group of three brown-suited men spot me and point their guns in my direction. Their weapons are much bigger than the pistol I’ve looted, though it’s not like I could shoot them faster than they could me, anyway.</p>
<p id="indent">This is the end. I guarantee it.</p>
<p id="indent">I squeeze my eyes shut, bracing for my inevitable death. I hope it’s quick and painless. After everything I’ve endured, I’m owed that.</p>
<p id="indent">Gunshots ring out.</p>
<p id="indent">But I don’t feel anything other than the stiff wind and snow battering my body. </p>
<p id="indent">I let myself open my eyes and see a man wearing all white standing where the brown-coated men once were. A magenta “S” is worn proudly </p>
<p id="page-end">99</p>`
const ch9p12 = `<p id="page-start"> </p>
<p id="no-indent">on his chest.</p>
<p id="indent">A mental sigh escapes me, if only for a moment. The man, not lowering his gun, starts moving closer to me.</p>
<p id="indent">“Hey, bud, maybe we can talk about this,” I say, trying to slowly move for my pistol. “I mean, you did just save my life. I’m not even actually a guard here. I stole this suit yesterday while sneaking around. I hate these guys.”</p>
<p id="indent">“Are you Luna?” the man asks, ignoring my rambling and getting even closer to me. For some reason, the fact that he says my name, or is at least looking for me, makes me stop reaching for my gun.</p>
<p id="indent">“Wait, what?”</p>
<p id="indent">“Are you Luna?”</p>
<p id="indent">“How do you know my name? <em>Why</em> do you know my name?”</p>
<p id="indent">“So, you <em>are</em> Luna?” He sounds impatient.</p>
<p id="indent">“Yeah, I am. What’s going on?”</p>
<p id="indent">The man lifts his free arm to his mouth and speaks into a device on his wrist. “Sir, we found her. Requesting confirmation to escort. We may have a chance at success after all.”</p>
<p id="page-end">100</p>`
const ch9p13 = ``
const ch9p14 = ``
const ch9p15 = ``
const ch9p16 = ``
const ch9p17 = ``
const ch9p18 = ``
const ch9 = [ch9p1, ch9p2, ch9p3, ch9p4, ch9p5, ch9p6, ch9p7, ch9p8, ch9p9, ch9p10, ch9p11, ch9p12, ch9p13, ch9p14, ch9p15, ch9p16, ch9p17, ch9p18]

const ch10p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 10</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“I need you to do some serious explaining.”</p>
<p id="indent">“There’s no time, kid. We have to get to the ship.”</p>
<p id="indent">“I suggest you make time, pal.” I level my stolen pistol with his chest, holding it in both hands, choosing to ignore the fact that I am heavily outgunned at the moment. “And I’m incredibly tired of being called ‘kid.’” </p>
<p id="indent">His expression hardly changes as he sighs.</p>
<p id="indent">“I am part of the S-Platoon, a secret militia that has been preparing for today’s events for a very long time. My boss had heard of you through the grapevine, specifically regarding your skills and talents, and wants to recruit you.”</p>
<p id="page-end">101</p>`
const ch10p2 = `<p id="page-start"> </p>
<p id="indent">“Wait, your boss wants to hire me? Who’s your boss? Who are these other guys? What exactly is happening right now?”</p>
<p id="indent">“World War III, essentially,” he replies, taking aim at a cluster of the brown-coated men. “Those are a skilled group of Hitler’s Nazis, here because they wanted the tech that was on this island. It’s also half of the reason we’re here as well.”</p>
<p id="indent">“Tech like the Plasmarizer?”</p>
<p id="indent">“Precisely like the Plasmarizer. Our sources say you disposed of it, but rumor was they were working on building a second one.”</p>
<p id="indent">“I disposed of that one too, actually,” I say. “Let’s just say I wasn’t comfortable with the idea of these guys having weapons that powerful.”</p>
<p id="indent">The man stares at me for a good long time, and I can’t tell if he’s upset or shocked. With any luck, it’s the latter.</p>
<p id="indent">“Well, I guess that means the rest of the mission is called off, then,” he says, relaying the information with his communication device. “I guess you <em>do</em> have some gusto to you. The name’s Alexander Cho. I’m the S-Platoon’s leader and your personal chauffer to the boss.”</p>
<p id="indent">“You never told me who the boss is.”</p>
<p id="indent">“Not really my place to tell, but he is simply referred to as ‘S.’ It’s a sort of branding push from what I can tell, but I’m not sure who he’s trying to brand himself to, seeing as we stay secret for a reason. Now, tell me, Luna, is that enough for you? Are you ready to get away from this godforsaken battlefield?”</p>
<p id="indent">The thought lingered in my head. In a few short days, I’ve gone from homeless girl earning pennies a day to slave for an authoritarian meathead to being <em>offered</em> a job somewhere else with absolutely no guarantee as to how survivable it will be. I guess beggars can eventually be choosers if </p>
<p id="page-end">102</p>`
const ch10p3 = `<p id="page-start"> </p>
<p id="no-indent">they’re thrown into one of the worst situations possible.</p>
<p id="indent">A few bullets land in the grass nearby, kicking dirt onto my already disastrously messy outfit. “Yeah, I think I’m ready to go.”</p>
<p id="indent">“Solid choice, I’d say.”</p>
<p id="indent">He says a few words into his wrist device beckons me forward, clearing a way through the muddy, bloody battlefield. The battle hadn’t started that long ago, but it’s wrapping up here on the ground. Some airships are still in the air, but none of the Slaphand-Bijabers floating machines are going to last much longer.</p>
<p id="indent">“Will your boss be able to help me get my friend back?”</p>
<p id="indent">“Is that the cat?”</p>
<p id="indent">“Wait, how do you know about Freckles?”</p>
<p id="indent">“No doubt, that is something that you will have to mention to S. He is very excited to add you to the team.”</p>
<p id="indent">“Well, that’s good, I guess.”</p>
<p id="indent">For being the head of the S-Platoon, whatever that is, Alexander sure doesn’t seem to have a grasp on what’s going on in his boss’ brain. Maybe that will come in handy later if I ever have to pitch the two against each other.</p>
<p id="indent">I can’t believe I’m already plotting and planning an escape, just in case these people are as awful as those who were exploiting me for their own selfish desires. The S-Platoon is the group killing the Nazis and slavers. Surely, that makes them the good guys. Or, at least, better than the bad guys. Then again, there are very few men in charge who don’t exploit those below them for their own selfish desires. Maybe they’re gonna be different.</p>
<p id="indent">I keep saying that. It never happens.</p>
<p id="page-end">103</p>`
const ch10p4 = `<p id="page-start"> </p>
<p id="indent-adjustment-more">A ship in front of us lowers, offering an escape. The bad guys on the ground catch wind of the situation and search for their newest target. To our left, the fascist brigade locks on, and to our right, the mob boss’ goons use the break in fighting to recuperate and try to catch an upper hand.</p>
<p id="indent">Here, in the middle, is Alexander Cho, a dozen or so S-Platoon fighters, and me, struggling to fight back growing panic.</p>
<p id="indent">All focus is directed to the landing ship when loud mechanisms creak and whir, opening six spots along the hull about as wide as a soccer ball, three on either side of a slowly descending drawbridge-like door. Then, without warning, rockets and bullets spray outward into the two opposing crowds, blasting and hammering them to smithereens. </p>
<p id="indent">To say it’s gruesome would be putting it lightly. It’s more than I can bear to stand.</p>
<p id="indent">On cue, I feel my knees get weak, and my stomach flips. The semi-edible slop I’d had for dinner gets thrown up, and I can feel my whole body burning. The S-Platoon finishes off what’s left of the opposing parties while I stay on the ground, getting it all out of my system.</p>
<p id="indent">This is <em>so</em> far from what I imagined tonight was going to be like.</p>
<p id="indent">“Come on, Luna, it’s time to go,” Alexander says, offering me a hand. After making sure there’s no threat of another round, I take it and hoist myself to my feet. </p>
<p id="indent">“No shame in a weak stomach at the sight of something like that,” he says in a poor attempt to reassure me. I’m not sure why he feels obligated.</p>
<p id="indent">“I don’t think that counts as a weak stomach. I think that counts as a <em>normal</em> stomach.”</p>
<p id="indent">He laughs, which is slightly off-putting, given the scenario. “I suppose that’s fair. Let’s get onto the ship.”</p>
<p id="page-end">104</p>`
const ch10p5 = `<p id="page-start"> </p>
<p id="indent">The violent leader of the S-Platoon, trying as hard as he can to be cordial, motions to the large airship again. I can tell his movements and courtesies are forced. Why is he going through all the trouble to make it seem like he’s being genuine? What am I getting myself into?</p>
<p id="indent">Brushing the suspicion away, I follow him into the hull of the mechanical beast. I can’t even comprehend how massive it is at first. The ceiling is maybe twelve feet high, but still somehow leaves space in the ship for two or three more inner levels. The walls and floors consist almost entirely of some sort of coated wood, likely meant to make it fire resistant.</p>
<p id="indent">“Welcome aboard the <em>Lateral</em>, Luna. This is one of the best ships my boss has. It will be transporting us to our base. Please make yourself at home in a boardroom. The trip won’t be too long.”</p>
<p id="indent">“Where’s the base?” I ask, eyes still taking in the marvel of technology.</p>
<p id="indent">“At an undisclosed location in Carmsborough, which will be revealed if you accept his job offer.”</p>
<p id="indent">“What happens if I don’t accept the job offer?”</p>
<p id="indent">He stops and appears to think for a moment. “I’m not entirely sure. I think the boss is all in on you accepting the offer, though. After all, you want to get your friend back. The cat.”</p>
<p id="indent">The idea of rescuing him resonates with me, and I walk into the nearest boardroom in the hallway. Inside is a simple bed and dresser, with no other extra decorations or furniture items.</p>
<p id="indent">The bed, all too alluring, grabs my attention, and I go to sit.</p>
<p id="indent">I remember the last time I had the chance to sleep in a bed. It was the last night before I was kicked evicted from my apartment. I was none the wiser. Back then, there was no wondering where I would find my next </p>
<p id="page-end">105</p>`
const ch10p6 = `<p id="page-start"> </p>
<p id="no-indent">meal and no worrying about being attacked in alleys. </p>
<p id="indent">Exhaustion catches up to me almost as soon as I enter the room, and with the prospect of an honest-to-God bed right in front of me, there’s no twisting my arm to get some rest. I hit the bed, and I’m down for the count.</p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="indent">I wake an undetermined amount of time later to the sound of knocking on the door. Like earlier this morning, my fight-or-flight response kicks in, and I bolt upright, only to ease from the sudden burst of adrenaline. I didn’t even think it was possible to run out of adrenaline, but here I am.</p>
<p id="indent">I’m safe, and I just slept on a mattress for the first time in years. The things we take for granted. I slowly slump off of the bed and to the door.</p>
<p id="indent">“Who is it?” </p>
<p id="indent">“This is Leader Cho again, Luna. We’ve arrived at the base, and will be deboarding in a few minutes. I’ve had my men prepare you an outfit, which they’ve placed in the lounge down the hall. Feel free to change, mostly for your own safety.”</p>
<p id="indent">“For my own safety? Are you guys gonna shoot me?”</p>
<p id="indent">“Not if we know it’s you,” he replies, walking away from the door. </p>
<p id="indent">With that, I leave the room and head to the hall in search of the lounge. It’s a large room, and impressively decorated, but there’s no time to look at all the chairs and tables or the piano in the corner. I spot the clothes on a couch, grab them, and retreat to the boardroom again. Like the others on the ship, the outfit laid out for me is a crisp, clean white. </p>
<p id="indent">I get dressed and make my way to where we entered the ship earlier.</p>
<p id="page-end">106</p>`
const ch10p7 = `<p id="page-start"> </p>
<p id="indent">“Ready to see the big man himself?” Alexander Cho asks, having changed from his battle suit. His current apparel is more akin to a military general’s garb, fitting with the rest of the aura he gives off. </p>
<p id="indent">With a light shining directly on us, it’s easier to describe him better. He has to be at least fifty years old, if his deep, onset wrinkles have anything to say. His beard is short and scruffy and mostly white, and his tanned hands tell years of stories, including one of marriage.</p>
<p id="indent">“Hello? Earth to Luna?”</p>
<p id="indent">“Yeah, sorry, spaced it for a second.”</p>
<p id="indent">“I get it. Observing and detailing everything you can. No doubt a survival mechanism you’ve picked up from years of being on the move. It’s an admirable trait.”</p>
<p id="indent">“Never really thought of it that way.”</p>
<p id="indent">“We all discover ways to cope and stay alive. Sometimes, we don’t even notice we do it. We’re going straight to see the boss, and then we’ll get some lunch and, depending on your answer, determine what the next steps are.”</p>
<p id="indent">“Wait, lunch? How long was I asleep?”</p>
<p id="indent">“It’s nearly half-past-ten now, so six hours. I’m honestly surprised you slept through the skirmish we had a couple of hours ago with a Nazi airship.”</p>
<p id="indent">A voice on the speakers announces our landing, and the two of us stand in front of the opening hatch in the ship’s hull. </p>
<p id="indent">“There was a fight with a Nazi airship?”</p>
<p id="indent">“Trust me, we had it all under control. They were vastly outgunned. The boss made sure that we wouldn’t be caught off guard.”</p>
<p id="indent">“You sure are hyping bossman up big time,” I say, as we walk down </p>
<p id="page-end">107</p>`
const ch10p8 = `<p id="page-start"> </p>
<p id="no-indent">the sloped exit. The ground is rocky, and a look at the horizon provides me the reasoning. In the near distance, the tall range of the Golem Mountains that runs directly through the heart of Carmsborough looms above us. Seeing as the country’s not sitting on the intersection of two tectonic plates, you could say scientists are more than baffled at their formation. </p>
<p id="indent">I just think they look neat. Who cares where they came from?</p>
<p id="indent">“Majestic, aren’t they?” Cho comments, staring off at the tallest in the range. “The tallest, Mount Dovi, is over there. She stands at barely above twenty-five thousand feet, although I’m not exactly sure how they’ve measured that. It’s not like you can take one big tape measure.” </p>
<p id="indent">“Do you think anyone’s ever tried climbing it?”</p>
<p id="indent">“Oh, for sure, but nobody’s succeeded without the use of an airship. It’s far too difficult to even reach, surrounded by all of its sibling mountains like it is. Some claim it holds some sort of treasure in its core, but personally, I doubt it. Anyway, the boss is in the short building directly in front of us. I’ll leave you to have a conversation with him.”</p>
<p id="indent">For being the base of such a strangely well-equipped militia as the S-Platoon, it’s oddly… backwards. The roads are all gravelly and uneven, the buildings seem like they would blow away with one bad windstorm, and people are wandering around almost aimlessly. It’s obvious the boss’ building has the most upkeep in the area.</p>
<p id="indent">I walk to the building, small rocks crunching under my new white sneakers gotten from the couch. The ground has already made them slightly dusty. Before I get the chance to knock, the door swings wide open, and I’m met by a man only slightly taller than me. </p>
<p id="indent">“It’s about time I meet the woman of the year!” he bellows, grabbing </p>
<p id="page-end">108</p>`
const ch10p9 = `<p id="page-start"> </p>
<p id="no-indent">onto my shoulder. “Oh, the things I’ve seen and heard. Destroying Bijabers’ Plasmarizer not once, but twice? The audacity! The guffaw!”</p>
<p id="indent">“You wouldn’t happen to be the boss by any chance, would you?” I ask the overzealous man, leading me somewhere deeper into the structure. </p>
<p id="indent">“Oh, quick to catch on, too! You would make a fantastic addition to my team, if you so choose. I am S, but you may call me ‘the boss’ if it’s easier. Then again, one is a one-syllable letter, and the other is a title, but I’m certainly not to judge. Please, Luna, have a seat.”</p>
<p id="indent">The boss extends his arm and motions to a seat in front of an official-looking desk. Sitting on the desk is a globe, a topographic map of Carmsborough, and three different stacks of paper. The man’s busy, to say the least.</p>
<p id="indent">I take the seat, and he sits opposite me on his side of the desk. </p>
<p id="indent">“I hope Platoon Leader Cho wasn’t too rough in trying to acquire you for our cause. The man’s not really a people-person, and his decades of military experience are usually his only character trait.”</p>
<p id="indent">“He tried his best, I think,” I say, managing an uncomfortable smile. Like Alexander Cho before, the man in front of me is overexcited. To his credit, though, he seems genuine. Despite this, there’s a forcefulness to his nature. He has a commanding voice and stature, and is no doubt fearsome when needed.</p>
<p id="indent">“I love to hear that. Well, Luna, I know more about you than you are probably comfortable with, so I think it’s time to tell you a bit about me. I am the boss of this militia group. We are a secret organization hidden within Carmsborough looking to ensure the safety and wellbeing of all we can.”</p>
<p id="indent">“Secret organization? Why do you need to be secret?”</p>
<p id="page-end">109</p>`
const ch10p10 = `<p id="page-start"> </p>
<p id="indent">“Unfortunately, there’s a lot happening right now, and we have quite a few enemies. You’ve met Bijabers and Slaphand, the two heads of an international crime syndicate bent on turning Carmsborough into their home. You’ve also had a run-in with the Nazis, it seems, which isn’t necessarily a new development, but we were shocked to find out they’ve started World War III as of last night. Not a fun group of people, that lot.”</p>
<p id="indent">“That’s an understatement.”</p>
<p id="indent">“For sure. Now, unlike most, we are also against Orion and the Clockwork. It would be fair for you to be shocked or repulsed by that information, but please implore me in telling you why.”</p>
<p id="indent">“I think I have a good idea why,” I say. “I’ve never seen them help a single soul that genuinely needs saving. Why hadn’t they ever tried helping at whatever slave island I was at?”</p>
<p id="indent">“There’s a strange bias that Orion and the Clockwork appear to operate off of. You see, they tend to solely help those in power or who have money, rather than those that actually need saving. Those like you, who were homeless for years, struggling to get by on your own. Or, like you recently had the displeasure of experiencing, those that suffer at the hands of Bijabers and his crew. Is it possible they are working together? Perhaps, but that’s a theory for another day.”</p>
<p id="indent">“So, you’re essentially a political figure trying to clean things up?”</p>
<p id="indent">“In a way, I suppose, although politics is corrupt and moves too slowly for real change to help real people like you. We take direct action. This is why I’ve brought you here, Luna. You’re not afraid of direct action. It’s all you’ve ever dealt with, and you’ve become exceptionally effective in getting what you need. Therefore, I would like to offer you a </p>
<p id="page-end">110</p>`
const ch10p11 = `<p id="page-start"> </p>
<p id="no-indent">job.”</p>
<p id="indent">“You want me to be part of your S-Platoon?” I’m not even sure I could entertain the idea. Being told what to do isn’t exactly my style.</p>
<p id="indent">“Absolutely not. That group of ruffians would bore you, I fear, and it would get you no closer to your inevitable goal of getting Freckles back safe and sound.”</p>
<p id="indent">My heart skips a beat. “I’m listening.”</p>
<p id="indent">“If you were to join my team, you would have a special mission: hunting down and killing Slaphand, and retrieving your pet.”</p>
<p id="indent">“You’re lying. What’s the catch?”</p>
<p id="indent">“The only catch is that when you’ve completed the mission, you’re free to do your own thing until I call you for another mission. It could be a week, or it could be a year. There’s no telling when I’ll require your expertise, and if you do well, you’ll be compensated well.”</p>
<p id="indent">I almost can’t believe it. A chance at revenge, a chance at real compensation, a chance at freedom, and, most importantly, a chance to get Freckles back. All with the agreement to occasionally work for him again when he needs.</p>
<p id="indent">My brain is desperately attempting to rattle off a list of the red flags that have popped up since being rescued on the island, but my heart’s not listening. My heart knows what it wants.</p>
<p id="indent">“I understand how hard this is to take in all at once, so if you’d like time to sit and—”</p>
<p id="indent">“I accept.” I level my hand in front of me, ready to shake his. He smiles as if he expected my answer, and takes it.</p>
<p id="indent">It’s time I got my best friend back. </p>
<p id="page-end">111</p>`
const ch10p12 = ``
const ch10p13 = ``
const ch10p14 = ``
const ch10p15 = ``
const ch10p16 = ``
const ch10p17 = ``
const ch10p18 = ``
const ch10 = [ch10p1, ch10p2, ch10p3, ch10p4, ch10p5, ch10p6, ch10p7, ch10p8, ch10p9, ch10p10, ch10p11, ch10p12, ch10p13, ch10p14, ch10p15, ch10p16, ch10p17, ch10p18]

const ch11p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 11</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">I walk out into the crisp air of the Golem Mountains. The sun’s hanging high in the sky, and there’s a briskness to the breeze that I didn’t notice earlier. The tall grass that stretches all the way to the base of the mountains is waving rhythmically with the wind. Though there are no birds in sight, my mind fills the void left in their absence with the sound of chirping.</p>
<p id="indent">I haven’t felt this carelessly free in a long time.</p>
<p id="indent">Sure, it won’t last long. We still have some job details to dig into, as well as a possible training course that the boss man wants me to go through, but for now, a weight is lifted off of my shoulders. I have a </p>
<p id="page-end">112</p>`
const ch11p2 = `<p id="page-start"> </p>
<p id="no-indent">guaranteed roof over my head, readily available food that is actually edible, and a bed to sleep in.</p>
<p id="indent">It’s strangely calming. Maybe even exciting, despite not having my best friend to share the experience with. Still, I can’t help but feel I’m forgetting something.</p>
<p id="indent">But what? It’s not like I’ve got any physical possessions. Everything I own is still in the abandoned apartment complex I’d taken residence in, so long as nobody’s looted the place.</p>
<p id="indent">Not that it matters anymore. Money’s no longer an issue. I don’t have to work for Cheapskate Chad at the scrapyard, or bargain for extra change with Shady Shane, or worry about being jumped in an alley by other homeless people.</p>
<p id="indent">Still, why do I have this looming fear that something’s missing?</p>
<p id="indent">“Alright, Luna,” S says, stepping out of his building, “let’s get some lunch, do a basic run-through of the mission, show you to the sleeping quarters, and set up some one-on-one times with your new trainer.”</p>
<p id="indent">“With all due respect, sir,” I start, joining him as he walks towards what I assume is the cafeteria, “I want to remove Slaphand from the equation right away. There’s no telling how much time Freckles has before he’s destroyed by the mob boss.”</p>
<p id="indent">He seems to consider the idea for a moment, silently leading me to our first stop of the day: lunch. “I understand. I can’t imagine what it’s like to be missing a friend like that. We could arrange a delayed training course, but it’s not something I’d recommend.”</p>
<p id="indent">“Why’s that?” We grab trays and load food up. In contrast to the dismal atmosphere on Slaphand’s island, the boss’ base is alive with positive energy. The only other place I’ve seen this many smiles is on a </p>
<p id="page-end">113</p>`
const ch11p3 = `<p id="page-start"> </p>
<p id="no-indent">billboard for a dentist’s office.</p>
<p id="indent">“To put it bluntly, you’re self-taught and sloppy. Don’t get me wrong, you’re skilled and efficient, but against someone as prominent as Slaphand, unless you can outwit him, you’re as good as dead.”</p>
<p id="indent">The short man sits at a populated table, making sure to leave an empty spot for me, and is immediately thrown into pleasant conversations with those already seated. </p>
<p id="indent">“Ladies and gentlemen, allow me to introduce you to Luna, the new assassin who has her sights set on Slaphand.” He motions to me and smiles, and the table erupts into a noisy mixture of clapping, cheering, and laughing.</p>
<p id="indent">“That’s her, boss?” one asks. “I was expecting an adult. Not just some kid.”</p>
<p id="indent">“I think you’ll find she’s more than ‘some kid,’ Dane,” S replies. “Fortunately, she has nothing to prove to you, so I’ll let you be pleasantly surprised when she has the job done within a week.”</p>
<p id="indent">I nearly choke on the mashed potatoes I’ve loaded my plate with. “You really think I can get this done in a week?”</p>
<p id="indent">“Oh, for sure. After all, there aren’t many places to hide a man like him in Carmsborough. I’ll honestly be surprised if he doesn’t accidentally reveal himself before you’ve even had the chance to do it yourself.”</p>
<p id="indent">“Okay, so what’s the plan, then? Realistically, I shouldn’t wait.”</p>
<p id="indent">“True. Unfortunately, we don’t know where his base of operations is inside of mainland Carmsborough. We have a list of some hotspot locations that Bijabers’ team works out of, but for the most part, those have all been scouted and raided for intelligence.”</p>
<p id="indent">“So, not a lot of options on that front, then.”</p>
<p id="page-end">114</p>`
const ch11p4 = `<p id="page-start"> </p>
<p id="indent">“We’re starting with basically zero information on the ‘where’ portion of the mission. The ‘how’ is another story. You’ll need to gather intel from our informants, although we don’t have very many that are reliable. From there, we may be able to gauge the ‘when’ and the ‘where,’ but also the ‘how many’ for his number of goons.”</p>
<p id="indent">“Actually, I might have someone I can use as an informant. He’ll be reluctant, though.” I think back to Shady Shane’s paranoid rant about Bijabers and his goons. He’d recognized the ‘B’ logo, so what else could he know?</p>
<p id="indent">“Reluctant?”</p>
<p id="indent">“I think he has schizophrenia. He’s a good guy, though.”</p>
<p id="indent">“Well, if you’re comfortable with the idea, he can be on the list. Otherwise, I’ll get a list of informants rounded up for you to hunt and get info from. From there, you’ll plan your entry and attack.”</p>
<p id="indent">“Sounds all good and smart to me.”</p>
<p id="indent">“Are you sure you don’t want training? Not even for a day?”</p>
<p id="indent">“Every day Freckles isn’t by my side is another day I might never see him again. I recognize it’s a smart idea, but I can’t risk it.”</p>
<p id="indent">“At least you’ve got your head in the right place. Still, I think it’s best if you wait until early tomorrow morning to head out so that there’s plenty of daylight for you to work with.”</p>
<p id="indent">“I’m fine with that, I guess. Gives me time to breathe.”</p>
<p id="indent">“Which you need, no doubt. I imagine the past few days have been pretty nonstop for you.”</p>
<p id="indent">“Something like that.”</p>
<p id="indent">We sit in silence for the rest of our lunch, allowing me to soak in as much as I can. Though he seems to be more of a laid-back person, I can </p>
<p id="page-end">115</p>`
const ch11p5 = `<p id="page-start"> </p>
<p id="no-indent">sense much more under the surface of the man. He’s got deep layers to him, and so far, the only two he’s been willing to display is outgoing, down-to-earth boss and strategy-oriented schemer. Maybe it’s just me projecting, but I feel like there’s a more sinister side to the man sitting next to me.</p>
<p id="indent">Even so, he’s giving me food, a bed, and a purpose, as well as the chance to save my cat. I think I’ve finally found that lesser evil in my life that I’ve needed.</p>
<p id="indent">Wait. Oh my God.</p>
<p id="indent">“I can’t believe I forgot about Mary!” I stand suddenly, my heartstrings tugging hard in my chest.</p>
<p id="indent">“What’s that?”</p>
<p id="indent">“All morning, I’ve felt like I’ve been forgetting something. But it was a someone, and that someone is Mary. She was an old lady on the island and the one who got me through everything. I left her to die under a crumbled part of the living quarters and told her I was going to go get help. I lied to her, and now she might be dead.”</p>
<p id="indent">“That is… a lot to take in,” S says, grimacing. “I can have one of my men still on the island check in and get her status, if you want.”</p>
<p id="indent">“That’s not enough. I want to go and see her for myself.”</p>
<p id="indent">My first test of his authority. How willing is he to let me get what I want? How important am I really to his plan? Beggars can’t be choosers, but I haven’t been a beggar for a long time, and it’s not restarting today.</p>
<p id="indent">Once again, he ponders my request for a good while, a blank expression on his face. </p>
<p id="indent">“If you head out within the hour, you can do a round trip and be back here by three in the morning,” he thinks aloud. “But you’ll need to get </p>
<p id="page-end">116</p>`
const ch11p6 = `<p id="page-start"> </p>
<p id="no-indent">some rest on the way, and leave again almost as soon as you return.”</p>
<p id="indent">“I can handle that.”</p>
<p id="indent">The boss lifts his wrist and reveals the same sort of technology that Platoon Leader Cho had. “Cho, get the <em>Lateral</em> prepared for launch again. You’ll be taking Luna back to Blood Moon Island in search of one of her friends and making a return trip shortly after that.”</p>
<p id="indent">“Roger that, boss,” Cho’s voice crackles a few seconds later.</p>
<p id="indent">S looks up and smiles at me. “Go find your friend. I hope for good news, for Slaphand’s sake.”</p>
<p id="indent">“Oh, trust me, he’s getting a beatdown either way.”</p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="indent">Within fifteen minutes, I’m standing inside the <em>Lateral</em> again, willingly heading to Slaphand’s island, appropriately titled Blood Moon Island. </p>
<p id="indent">The six-hour trip feels doubly as long as I sit in the cockpit, legs bouncing rapidly. The idea of a relaxing day away from anxiety and near-death experiences evaporated with the relaunching of the airship.</p>
<p id="indent">In contrast to earlier, Cho is no longer forcing himself to be cordial with me. The two of us sit in silence behind the pilot and copilot for the entire ride, occasionally bringing up a short topic. His demeanor change is off-putting, but not unexpected.</p>
<p id="indent">Six grueling hours of suspense later, the <em>Lateral</em> finally begins its descent to the war-torn island. The sun is barely peeking above the horizon, but I can still see the damage done. The ground is equal parts grass and tossed-up dirt, all lightly covered in a layer of snow. A long trail of bodies lines the length of the flat expanse, arranged to loop around the sides of the dormant quarries. </p>
<p id="page-end">117</p>`
const ch11p7 = `<p id="page-start"> </p>
<p id="indent-adjustment-more">Next to it are three more rows for each group of people that were on the island, finishing off the census–guards, prisoners, Nazis, and S-Platoon members. Though I can’t make out how many are in each category from here, it’s clear that there are significantly fewer S-Platoon members lined up than any other group, and an incredibly large number of prisoners.</p>
<p id="indent">That doesn’t speak well for Mary’s odds.</p>
<p id="indent">I push the thought away immediately. Mary’s alive. She has to be.</p>
<p id="indent">The ship comes to a stop, hitting the field with a soft but audible thud, and the pilot announces our arrival. </p>
<p id="indent">“Has your stomach gotten any better yet?” Alexander Cho asks, standing beside me at the hull entrance.</p>
<p id="indent">“I doubt it.” </p>
<p id="indent">“You’re not gonna like this, then.”</p>
<p id="indent">The hull opens, and the first of my senses to react to the landscape is my nose. The smell of death lingers on the island, and it’s already too much to bear. Still, I press on, plugging my nose, hunting for one of the remaining S-Platoon soldiers to fill me in on the situation.</p>
<p id="indent">“Private Donner,” Cho says to a nearby soldier, “can you give us a status report on the survivors of the attack?”</p>
<p id="indent">“It’s slow going getting all the rubble cleared,” the private replies, “but so far, we’ve found two survivors.”</p>
<p id="indent">“Who were they?” I ask, a heavy feeling of dread weighing down on me. “Were either of them Mary?”</p>
<p id="indent">“No, not that I know of. They both had yellow jumpsuits on. Said they were Lana and Renet, I think.”</p>
<p id="indent">“What?!” </p>
<p id="indent">How do those two get to survive and not literally anyone else? </p>
<p id="page-end">118</p>`
const ch11p8 = `<p id="page-start"> </p>
<p id="indent">“We’ll keep searching for a Mary if you’d like, but I recommend going to check the group of dead lined up over there.”</p>
<p id="indent">I struggle to find the motivation to move towards the bodies. How many faces will I recognize? Maybe Mary still hasn’t been dug out yet. And Arnold, too. He’s probably somewhere in a corner, hiding under a large pile of rubble. I’m sure he’d be able to lift it by himself.</p>
<p id="indent">Cho leads the way, but instead of joining me in milling through the prisoners, he approaches the six dead S-Platoon members, all given plenty of space between each other and clearly handled with more respect than anyone else here.</p>
<p id="indent">I begin the depressing walk along the line of slaves. Does it even matter what I call them anymore? Slaves, prisoners, people? They’re dead. Lives taken hostage by a cruel mob boss, then ended by a Nazi invasion. My heart hangs every time I pass a woman’s body, but beats again when I don’t recognize it.</p>
<p id="indent">I could see it coming a mile away, but eventually I reach Arnold’s body, still wearing the yellow Overseer jumpsuit. There were three bullet holes in his chest and stomach region. He died fighting, no doubt. The only other person who was semi-respectable to me on the island was shot while protecting everyone else.</p>
<p id="indent">The more I travel down the line, the more hopeful I get. </p>
<p id="indent">That is, until I’m two-thirds of the way through.</p>
<p id="indent">There, lying in front of me, is Mary. On top of what looks like a disfigured lower body, there’s a bullet hole in her forehead. </p>
<p id="indent">“No. No, Mary, please.”</p>
<p id="indent">I crumple to the ground, speechless. Mary isn’t just dead–Mary was <em>killed</em>. Someone saw the old lady trapped under a pile of concrete and </p>
<p id="page-end">119</p>`
const ch11p9 = `<p id="page-start"> </p>
<p id="no-indent">decided she wasn’t suffering enough.</p>
<p id="indent">For the first time since my mother died, I start sobbing. It’s loud, it’s ugly, it’s heart wrenching, and it’s real. Mary, who I’d barely met a few days ago, meant a lot more to me than I’m willing to mention. I let the one person who’d genuinely cared for me in a long time get killed.</p>
<p id="indent">Oh, Mary… </p>
<p id="indent">She had dreams and ambitions. She had a future planned for herself, and I was in it. We could’ve been together. This is all my fault.</p>
<p id="indent">Slaphand will pay for this. Bijabers will pay for this. The Nazis will pay for this.</p>
<p id="indent">Everyone will pay for this.</p>
<p id="indent">In the middle of my breakdown, Cho approaches me and quietly watches. </p>
<p id="indent">I feel like a kid.</p>
<p id="indent">I am a kid. I am <em>only</em> a kid. A kid who shouldn’t have been put through any of this–homelessness, war, slave labor, traumatic loss. None of it. And yet here I am, suffering from one life-changing event after another, being tormented like dirty clothes on the washboard.</p>
<p id="indent">Not anymore. I’m in control of my life now, thanks to S. </p>
<p id="indent">And I’ll see to it that those responsible get their fair share of pain.</p>
<p id="indent">I stand and wipe the tears from my face, then turn to face Cho. “I’m ready to go back to base. It’s time I got started on getting rid of this bastard once and for all.”</p>
<p id="indent">He nods solemnly, and we walk to the <em>Lateral</em>. The six-hour trip back to base proceeds in a different silence than before, and no small talk is exchanged. I don’t have it in me.</p>
<p id="indent">When we arrive, the wind is no longer brisk–it’s icy. The grass isn’t </p>
<p id="page-end">120</p>`
const ch11p10 = `<p id="page-start"> </p>
<p id="no-indent">moving rhythmically, it’s moving in a violent, disorganized fashion. The mountain range is no longer majestic–it’s imposing. The clear, open sky is a threat and a promise, and I intend to take it to heart very soon.</p>
<p id="indent">The boss is waiting outside of his building, bundled in warm winter clothes, holding a set of keys in his right hand. I notice a somber look on his face as we approach.</p>
<p id="indent">“I’ve heard the news. I’m terribly sorry, Luna. Why anyone would do such a thing is beyond me.”</p>
<p id="indent">“The sick and twisted rarely need an excuse to be so,” I reply.</p>
<p id="indent">“A wise saying, I’d say. Take whatever time you need to recuperate. I’m holding the keys to your personal airship here, the A.S. <em>Constellation</em>. It’ll be waiting for you. It’s nothing more than a rigged-out cloudship, but it’ll get the job done.”</p>
<p id="indent">I hold my hand out to receive the keys, and he drops them in my hand. There will be no waiting. We exchange a simple nod, and I make my way to the gravelly shipyard where the <em>Lateral</em> landed moments ago. There, I spot the <em>Constellation</em>, my new ship, and board the main deck.</p>
<p id="indent">Without so much as another thought, I head to the lower deck, turn the engine on, and lift off from the ground. Using a built-in compass and the map sprawled across a table behind me, I set my sights for the Commerce District with an estimated arrival time of ten o’clock.</p>
<p id="indent">I think back to the conversation Freckles and I had aboard our hijacked airship a handful of days ago, where I told him my dreams and ambitions. How I wanted to become a pilot and explore the world or a pirate that fights for justice.</p>
<p id="indent">It seems Luna the blood moon pirate will be making an appearance after all.</p>
<p id="page-end">121</p>`
const ch11p11 = ``
const ch11p12 = ``
const ch11p13 = ``
const ch11p14 = ``
const ch11p15 = ``
const ch11p16 = ``
const ch11p17 = ``
const ch11p18 = ``
const ch11 = [ch11p1, ch11p2, ch11p3, ch11p4, ch11p5, ch11p6, ch11p7, ch11p8, ch11p9, ch11p10, ch11p11, ch11p12, ch11p13, ch11p14, ch11p15, ch11p16, ch11p17, ch11p18]

const ch12p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 12</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">A good thirty minutes into the flight, I figured out how to set autopilot up and charted a course for the Commerce District docks closest to Shady Shane’s hideout. For being my second time inside a cockpit, my first being an extreme-pressure situation, I’ve gotten a grasp on it pretty quickly.</p>
<p id="indent">Now that I don’t have to stand and steer the whole time, I decide to take inventory of the things they provided me with on board. Aside from the things I need to survive, like food and water, there are other ship supplies, like emergency fuel, ammunition for a cannon hidden underneath the cockpit, and some sort of energy shield similar to the one </p>
<p id="page-end">122</p>`
const ch12p2 = `<p id="page-start"> </p>
<p id="no-indent">Slaphand’s ship had.</p>
<p id="indent">I’m still not entirely sure how that works. There’s a shield manual sitting on the dashboard, as well as a button to turn it on and off, but where did the technology even come from in the first place? It’s almost like science fiction.</p>
<p id="indent">Aside from that, I was given a few extra suits, some cash, two knives, and two pistols, as well as a more primitive version of the wrist device that Cho and the boss have. There’s a manual for that as well, but the words were blurring together when I tried to read it, so I put it away. That’ll be reading material for a more alert Luna, not three in the morning Luna.</p>
<p id="indent">From there, I hunted for the twin-sized bed that marked my bedroom and wasted no time curling up under the heavy comforter. As ready as I was for a nap, I couldn’t stop thinking about Mary and Freckles. I felt guilty sleeping in a bed knowing what had happened because I didn’t dig her out of the rubble. Eventually, exhaustion overruled guilt, and I drifted off into a restless slumber. Too many thoughts were swirling around in my head, infecting my dreams and filling them with trauma and memories.</p>
<p id="indent">I woke up an hour ago, at eleven. So much for that early morning start the boss wanted. Though the allure to stay in bed was strong, I knew I had to get moving. A suit change and a light breakfast later, and I’m standing on the deck of my ship, the sun hovering straight above me as I stare at Carmsborough’s rocky coastline.</p>
<p id="indent">That feels weird to say. <em>My ship</em>. The <em>Constellation</em> is one of the first things I’ve owned for myself in a long time, and it’s an entire frickin’ cloudship.</p>
<p id="indent">There’s a whole world in front of me to conquer, but my first order of business is to find Shady Shane and milk him for all the information on </p>
<p id="page-end">123</p>`
const ch12p3 = `<p id="page-start"> </p>
<p id="no-indent">Slaphand and Bijabers that he’s worth.</p>
<p id="indent">Knives and pistols sheathed in various pockets of my coat and pants, I hop down the ramp of my ship. My first steps back in urban Carmsborough match my expectations. A fierce wind batters my side, setting the mood for the gray winter day.</p>
<p id="indent">I don’t think I’ve ever been this bundled in my life. I’m wearing a thick white parka, a white beanie and scarf, black jeans, and the cleats from the <em>Lateral</em>. While I don’t quite fit with the rest of the Commerce District’s aristocracy, I’m certainly not at the bottom of the food chain anymore. </p>
<p id="indent">Still, people are turning their heads to look at me as I pass by. It’s a strange feeling realizing the only reason I’m being noticed is because I’m no longer poor and homeless. </p>
<p id="indent">It doesn’t take long for me to reach Shady Shane’s hiding place. He lives in a small tent city with some of the other homeless of the area, nestled in between the courtyard of four tall commercial skyscrapers, although it’s hardly by choice. The tent city is one of the few safe havens for us left in the district, and it won’t be long until the police break this one apart, too.</p>
<p id="indent">I’ve never lived in a tent city, personally. The idea of politics and infighting within the homeless community isn’t my cup of tea. I’d rather tough it on my own than try to ration a loaf of bread for six people.</p>
<p id="indent">“Is Shane around here?” I call out, swerving through a small crowd of homeless men and women. Most people I come across would flinch or recoil at being so close to them, but seeing as I was still in their ranks as of a few days ago, I’m completely unaffected. Besides, they’re just human. </p>
<p id="indent">“Who’s asking?” I hear Shane reply, stepping out of his tent. He’s not wearing any thick winter clothes, which probably means he hasn’t found </p>
<p id="page-end">124</p>`
const ch12p4 = `<p id="page-start"> </p>
<p id="no-indent">any yet this year. Or it was rationed away. At least he has something moderately warm on.</p>
<p id="indent">“It’s me, Luna,” I answer. “I was looking to maybe get some information from you.”</p>
<p id="indent">“Luna? Where’d you find these fancy new clothes on such short notice? Did that machine thing lead you to money? I was getting anxious not hearing from you, and I feared the worst. Also, where’s your cat? Are you okay?”</p>
<p id="indent">“Slow down, Shane. I hate to say it, but you were right to fear the worst. I ran into big trouble with Bijabers and Slaphand. They stole Freckles and forced me into slave labor for a few days, until the war began and I was rescued by some militia group. In summary, I’ve been to Hell and back.”</p>
<p id="indent">“Wait, what war?” He gives me a wide-eyed stare.</p>
<p id="indent">“What do you mean? Haven’t you checked any of the display televisions in any of the storefronts? There’s a war. Nazis invaded like ten countries, including Carmsborough.”</p>
<p id="indent">“Oh my God, I knew there was gonna be an invasion soon.” I can see Shane slowly falling apart, his paranoia kicking into overtime. “That would explain all of the airships passing overhead, too. How can I be sure you’re not a Nazi, Luna? Why else would they have let you escape? Are you here to kill me?”</p>
<p id="indent">“Believe me, Shane, they definitely didn’t want me to live. Like I said, there was a militia group that saved me, and I’ve been added to their ranks to assassinate Slaphand.”</p>
<p id="indent">He sits on the information for a minute. His mind is clearly racing.</p>
<p id="indent">“What militia group is it?”</p>
<p id="page-end">125</p>`
const ch12p5 = `<p id="page-start"> </p>
<p id="indent">“I’m not totally sure what they’re called, but they’re run by some guy named ‘S’ who wants to change things for the better in Carmsborough.”</p>
<p id="indent">“I’ve heard bad things about S, Luna. According to my sources, he’s not a good man.”</p>
<p id="indent">“With all due respect, Shane, I’m not sure any man in power can be a ‘good man.’ There are some that are less bad than others, but for the most part, the men with strength and authority rarely use it for good. Which is why I’m fully on the S train. He wants to help me take down a dangerous man <em>and</em> get Freckles back in the process. When I’m done, Slaphand will never hurt another soul.”</p>
<p id="indent">“I can’t trust it, Luna.”</p>
<p id="indent">“I understand that, Shane. I’m not asking you to join me on my mission. I’m only wondering if you might have information regarding where Bijabers or Slaphand are operating in Carmsborough.”</p>
<p id="indent">“Physical location? No. But stories get around, passed on from both their goons and their victims. It sounds like on top of loan companies and banks, they’re going more and more into real estate. Word is, Bijabers has heavy hands in the northwestern portion of the Housing District.”</p>
<p id="indent">“What kind of housing? Apartments or actual houses?”</p>
<p id="indent">“My guess is a bit of both. You find one of the companies he’s running, you find him. If you’re looking to draw him out, he’s sure to get mad if you do some damage to his prospects.”</p>
<p id="indent">“Is that really all you have for me to go off of?”</p>
<p id="indent">“Unlike you, Luna, I like to stay away from the bad men with bad plans. It never does me any favors to get in the way of someone with a lot more power than me.”</p>
<p id="indent">“Alright. Thanks, Shane. Stay warm.”</p>
<p id="page-end">126</p>`
const ch12p6 = `<p id="page-start"> </p>
<p id="indent">“I won’t.”</p>
<p id="indent">“Oh, and here. Take this.” I hand him a twenty from the stash I was provided. “Don’t say I never did anything for you. And don’t tell the others. The last thing you need is for this to be rationed.”</p>
<p id="indent">“Yeah, I’m bouncing, anyway. Someone stole a piece of tech I traded for yesterday and it’s the last straw for me.”</p>
<p id="indent">I step out of the tent city and use my high-tech watch to relay the information to the boss. </p>
<p id="indent">“I’ll keep my informants busy trying to get more intel,” S says, his voice crackling through a speaker on the face of the watch-like band. “They might have more intel about his schemes that will help you.”</p>
<p id="indent">“Roger that. I’ll keep my eyes and ears peeled for anything that might have to do with—”</p>
<p id="indent">Beside me, on the patchy asphalt road of the Commerce District, a dark blue box truck with the label “B Realty” drives by, heading due west towards the Housing District. The “B” has the exact same design as the one on the beeping key I found in the scrapyard.</p>
<p id="indent">“Hold that thought, boss. I might have a lead already. I’ll keep you updated.”</p>
<p id="indent">I don’t wait for his response. With the box truck gaining ground on me, I sprint off in that direction surprisingly fast, considering my extra bundling and weapons jangling around. It’s traveling on a main road, which is why it’s asphalt and not cobblestone, but that also means it’s a straight shot to the Housing District.</p>
<p id="indent">All I have to do is not lose sight of it and pray there are enough stop lights to slow it.</p>
<p id="indent">The first light turns red, but the box truck speeds right through it, </p>
<p id="page-end">127</p>`
const ch12p7 = `<p id="page-start"> </p>
<p id="no-indent">closely tailing the car in front of it. I ignore the crosswalk right of way and dart across the busy afternoon street of the district. I still have eyes on my target, but since I can’t run at twenty miles an hour, it’s getting some good distance on me.</p>
<p id="indent">Finally, another stop light turns red, and this time the truck is too far to run it. My lungs are beginning to feel sore, but now’s no time to stop. The crosswalk signs generally stay on for a minute, which means I have one minute to run roughly a third of a mile.</p>
<p id="indent">That’s possible, right?</p>
<p id="indent">The answer, unsurprisingly, is no. I barely make it a third of a <em>third</em> of a mile before the light turns green, and it’s on its way again. It’s almost hopeless… unless…</p>
<p id="indent">I run up to a taxi and tap the passenger side window. The man inside rolls it down and gives me a nasty look.</p>
<p id="indent">“Excuse me, sir, I need to get to the Housing District as fast as possible.”</p>
<p id="indent">“Why should I help you?”</p>
<p id="indent">“I’m willing to pay?”</p>
<p id="indent">“Yeah, but you’re a black kid, and I don’t do business with your kind. Scram.”</p>
<p id="indent">Oh, yeah. The <em>other</em> reason people would stare at me. Pure racism at its finest.</p>
<p id="indent">Against his wishes, I get into the back passenger seat of his taxi and strap myself in. “Take me to the Housing District.”</p>
<p id="indent">“Hell no. Get out of my taxi.”</p>
<p id="indent">I reveal one of my two pistols and point it at the man. “I’m not gonna ask again, you racist old prune. You’re lucky I’m still gonna pay you for </p>
<p id="page-end">128</p>`
const ch12p8 = `<p id="page-start"> </p>
<p id="no-indent">it.”</p>
<p id="indent">Overcome with fear, the man switches into gear. “Where at?”</p>
<p id="indent">“Just follow that blue box truck ahead of us. They’re doing something illegal, and I’m here to stop it.”</p>
<p id="indent">“<em>They're</em> doing something illegal? You’re the one who has the gun aimed at me!”</p>
<p id="indent">“Well, that’s because you’re racist. I don’t discriminate with who I classify as evil, and I don’t hesitate to shoot.”</p>
<p id="indent">It’s a lie, but it’s a lie that keeps him quiet. He doesn’t need to know that I’ve only fired a gun once, at the ground.</p>
<p id="indent">He picks up speed, swerving to avoid cars when he has the chance, and slowly but surely, we approach the B Realty box truck from behind. After a few minutes, he breaks the silence. “We’ve entered into the Housing District. How much farther do we need to follow this thing?”</p>
<p id="indent">“As far as we can go. I’ve gotta see what they’re up to.”</p>
<p id="indent">He sighs worriedly but keeps pace. Eventually, when the box truck makes a right turn onto a quieter cobblestone street, he joins them. If they’re suspicious of our taxi, they don’t show any signs. </p>
<p id="indent">Three minutes and two turns later, the B Realty truck stops in front of a newer looking apartment complex. The taxi driver’s shoulders relax, and he turns to face me. I replace the gun in its holster.</p>
<p id="indent">“Alright. Fare’s five bucks, but I’m adding another twenty for the emotional stress.”</p>
<p id="indent">“You’re lucky you’re getting five, pal. Don’t try to extort me.” I pull the five out of my coat and hand it over.</p>
<p id="indent">“It’s not extortion. You literally held a gun to my head.”</p>
<p id="indent">“Maybe if you weren’t racist, life would be easier for you, bud.”</p>
<p id="page-end">129</p>`
const ch12p9 = `<p id="page-start"> </p>
<p id="indent">I leave his car and stretch inconspicuously on the sidewalk. Two men exit the box truck, each dressed exactly like the guards on Blood Moon Island. </p>
<p id="indent">My hunch paid off. Bijabers is running B Realty, and these two unfortunate souls are my way of getting in.</p>
<p id="page-end">130</p>`
const ch12p10 = ``
const ch12p11 = ``
const ch12p12 = ``
const ch12p13 = ``
const ch12p14 = ``
const ch12p15 = ``
const ch12p16 = ``
const ch12p17 = ``
const ch12p18 = ``
const ch12 = [ch12p1, ch12p2, ch12p3, ch12p4, ch12p5, ch12p6, ch12p7, ch12p8, ch12p9, ch12p10, ch12p11, ch12p12, ch12p13, ch12p14, ch12p15, ch12p16, ch12p17, ch12p18]

const ch13p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 13</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Despite driving a moving truck, the two men never open their back storage area. Instead, they leave the vehicle running and make a beeline straight for the apartment complex. Neither are in a rush, talking and walking casually. I stay behind, waiting for them to disappear inside so they don’t notice me.</p>
<p id="indent">Now’s as good a time as any to update the boss, I suppose.</p>
<p id="indent">“Good news, sir,” I say, speaking into my watch. “I followed a box truck for a company called B Realty, and I’m almost certain they work for Bijabers. I’m gonna go interrogate the two men that left the truck.” </p>
<p id="page-end">131</p>`
const ch13p2 = `<p id="page-start"> </p>
<p id="indent">“That’s fantastic, Luna. You’re outperforming my expectations, and it hasn’t even been twenty-four hours. Or, at least, you will outperform them, as long as you actually get information.”</p>
<p id="indent">“I have my methods.”</p>
<p id="indent">Our connection ends, and I look at the entrance of the apartment complex. They’ve already gone inside.</p>
<p id="indent">I approach the door and try the handle, but it doesn’t budge. To my right, there’s a speaker device with a button. I press it and stand back, waiting for a response on the other end.</p>
<p id="indent">“Who is it?” A voice asks, deep and surly.</p>
<p id="indent">“Hey, I’m with the two that walked in a few moments ago. I was a little bit behind, but I’m here now.”</p>
<p id="indent">The voice stays silent for an uncomfortable amount of time, but eventually, the man asks, “You’re with Tim and John?”</p>
<p id="indent">“I don’t remember their names. The bossman only put me on B Realty duty today, so this is my first stop. I’m really sorry about this.”</p>
<p id="indent">“And who’s the bossman?”</p>
<p id="indent">“Slaphand. Wants me to do some field training.”</p>
<p id="indent">Another long silence passes before the door unlocks with a loud click. “Come on in, rookie. Next time, don’t be late.”</p>
<p id="indent">“Of course. Thanks, man.”</p>
<p id="indent">With as naturally as the lies came, it makes me wonder how practiced I’ve gotten at making things up to get what I need. Cho was right: we don’t even notice the ways we adapt to survive.</p>
<p id="indent">Once inside, the first thing I notice is the dramatic disparity from the outside of the building, which makes the place appear pretty and upkept. The inside, however, is in a considerably more dismal state. It shouldn’t </p>
<p id="page-end">132</p>`
const ch13p3 = `<p id="page-start"> </p>
<p id="no-indent">surprise me as much as it does, seeing as it’s run by a mob boss with no disregard for normal people, but the place needs more than a repainting. The walls and stair railings look like they’re one bad day away from crumbling.</p>
<p id="indent">My hunt for the two men continues, but it’s not a long one. Above me, on a higher floor, the scream of an old lady is followed by an expensive-sounding smashing noise. I bolt up the stairs to the third floor as quick as my legs can take me, where I find a door left ajar.</p>
<p id="indent">A second scream emanates from the open apartment, and without another thought, I jump in through the doorway, fists drawn and ready. </p>
<p id="indent">“Come on, you geriatric flumpnugget, it’s eviction day.” The two men approach her aggressively, hands poised to grab her. She gives me a brief look, and in that moment, I realize I have to make my presence clear to her assailants.</p>
<p id="indent">“Why don’t you pick on someone in your own diaper category, you brainless goons?”</p>
<p id="indent">Yeah. That’s right. I can dish the meaningless insults, too.</p>
<p id="indent">They turn, confused by the person trespassing during their hostile housekeeping.</p>
<p id="indent">“Who the hell are you?” one asks, ignoring the lady and squaring up to face me.</p>
<p id="indent">“Hey, isn’t this that Luna kid the boss was talking about?” the other asks, unsheathing a knife. “Says she destroyed the Plasmarizer.”</p>
<p id="indent">“And knocked out five of our boys on the island.”</p>
<p id="indent">“He said you wouldn’t survive the battle.”</p>
<p id="indent">“Yeah, he and the guys in your little operation do have a tendency to underestimate me,” I say, leaning against the wooden doorframe. “So, let’s </p>
<p id="page-end">133</p>`
const ch13p4 = `<p id="page-start"> </p>
<p id="no-indent">be smart. If you leave this woman alone, I won’t knock your heads together and torture information out of you.”</p>
<p id="indent">They trade a knowing stare, and the empty-handed one reveals his own knife. </p>
<p id="indent">“That’s alright, I was lying. I wasn’t gonna let either of you walk away. Oh, and for one thing, don’t call me a kid.”</p>
<p id="indent">We charge at the same time, but for now, I don’t grab any of my weapons. If I can keep them on their toes without having to use them, they might start making mistakes, and I’ll have the element of surprise when I do grab them.</p>
<p id="indent">The one to my left, who was the first to reveal his blade, is a smaller and easier target, so I focus my plan on him. I fake right towards the larger goon and dive into the smaller one’s legs, sending him crashing to the floor. He drops his knife in shocked response, which clatters to the ground below us. </p>
<p id="indent">That was easy.</p>
<p id="indent">Behind me, the other flips his knife to a better stabbing angle, but I roll forwards off of the other man, all of my weight pressing against his head. It’s not pleasant for either of us, but I don’t envy his position.</p>
<p id="indent">Utilizing the momentum of my roll, I launch to my feet and immediately spin to face the still-standing opponent. He clumsily rushes at me, forcing me to dodge to the side, and he goes gut-first into the poor woman’s table. I give her a sympathetic look. She stares at the scene in shock, hardly paying me any attention.</p>
<p id="indent">With any luck, the table’s not that expensive.</p>
<p id="indent">Both men are back on their feet and ready to fight, and this time, I’m in between them. They lunge at me, and I duck underneath at the last </p>
<p id="page-end">134</p>`
const ch13p5 = `<p id="page-start"> </p>
<p id="no-indent">second. Then, while still holding the stolen knife, I slash at the closest legs I can, sending the bigger man into a howl.</p>
<p id="indent">“You guys are helpless,” I taunt, sweeping the second man’s legs out from under him. With them both distracted, I motion for the woman to open the window facing the front of the building. She does so, and I lob the knife through, which clatters against the cement sidewalk below. </p>
<p id="indent">The bigger one clenches his fists in a fit. “You’re gonna pay for that. I’ll make sure of it.”</p>
<p id="indent">“You’ve gotta catch me first.”</p>
<p id="indent">I leave the room and run down the hallway, pivoting sharply around the corner as if I’m going to descend the stairs. The railing closing off the staircase is looking especially flimsy. </p>
<p id="indent">This plan better work.</p>
<p id="indent">I hear one of the two men stomping this way, and right as they round the corner, I stick my leg out like a cartoon character. They smash into my shin and topple into the railway, which creaks dangerously under the strain.</p>
<p id="indent">Ironic that the crummy conditions inside of their own apartment complex are their undoing. The railing gives way, sending the larger man, whose legs are already cut, plummeting to the second-floor stairway. He hits the steps with a loud thud, and his smaller friend looks over the broken railing at him.</p>
<p id="indent">He turns to me, angry, but loses all color in his face when he spots the gun in my hand.</p>
<p id="indent">“Like I said, don’t underestimate me, and don’t call me a kid.”</p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="page-end">135</p>`
const ch13p6 = `<p id="page-start"> </p>
<p id="indent">Ten minutes later, I have both of them tied in the woman’s kitchen chairs. She’s cowering in the corner of her dining room. Her frail little heart probably hasn’t seen this much action in years.</p>
<p id="indent">“I’m sorry about all this, by the way,” I say. “But these are the bad guys, as I’m sure you’re aware.”</p>
<p id="indent">“I’m very conflicted right now.”</p>
<p id="indent">“I’m sure. All I’m doing is getting a little information out of them, and then we’ll call the cops and make sure they’re dealt with properly.”</p>
<p id="indent">“Yeah, you ain’t getting anywhere with the cops, kid.” The bigger one, fairing far worse than his smaller counterpart, still has a lot of gusto to him, despite being slashed and thrown down a flight of stairs. To prove that I’m in control, I wind up my fist and forcefully place it against the side of his mouth.</p>
<p id="indent">“Alright, goony boys, I need to know where Slaphand’s base of operations here in mainland Carmsborough is. I highly recommend you cooperate. I have plenty of fun toys to use if you don’t.”</p>
<p id="indent">“We won’t tell you anything.” </p>
<p id="indent">For what it’s worth, the larger man is defiant to the end.</p>
<p id="indent">His buddy, however, is not. “Please don’t do anything to us. I got a family at home. I gotta provide for them.”</p>
<p id="indent">“Well, isn’t that awful cute. Maybe you should’ve chosen a better career path, pal. One that doesn’t involve a crime organization and evicting helpless old ladies from their homes. Give me an address. Now.”</p>
<p id="indent">“Don’t do it, Josh,” the bigger one says.</p>
<p id="indent">Josh seems to weigh his options. “You have to promise to let me go if I answer,” he says.</p>
<p id="indent">“Not a chance, Josh. You’ve done bad, and you’re gonna pay the legal </p>
<p id="page-end">136</p>`
const ch13p7 = `<p id="page-start"> </p>
<p id="no-indent">price.”</p>
<p id="indent">“Hold on a little longer, Josh!”</p>
<p id="indent">“What’s that mean, big boy?” I level one of my guns at the man’s head. Hopefully he doesn’t notice my shaking.</p>
<p id="indent">I’m not sure I could shoot someone. Even now, I was shocked I found the strength to slash at his legs. It’s not like he didn’t deserve it, and they came at me with knives beforehand, but still.</p>
<p id="indent">“It means you’re in trouble, kid. There are cameras in the hallway. As soon as you moved the fight from in here, you alerted the base. At this point, they’re almost here.”</p>
<p id="indent">I walk backwards into the hallway, not removing my eyes from the two tied-up men, and glance at the ceiling. </p>
<p id="indent">A camera is pointing directly at me.</p>
<p id="indent">Foiled by another camera.</p>
<p id="indent">I reenter the room and peer out the window. If the big man’s not bluffing, they haven’t come yet.</p>
<p id="indent">“Fine, I’ll let you go, Josh. Give me the address. Now.”</p>
<p id="indent">“Josh, don’t you dare!”</p>
<p id="indent">A bead of sweat runs down his temple. He’s seriously considering it, but he needs to seriously consider it faster.</p>
<p id="indent">“She’s on the third floor!” a voice calls from below us in the building. Sounds like the person who rang me in through the front door. I look out the window again, but there still aren’t any cars. They must be talking to some in-building guard.</p>
<p id="indent">Throwing all caution to the wind, I point my gun at Josh instead. “You have three seconds, Josh, or I’ll pull the trigger.”</p>
<p id="indent">His eyes widen, and he takes a big gulp.</p>
<p id="page-end">137</p>`
const ch13p8 = `<p id="page-start"> </p>
<p id="indent">“One.”</p>
<p id="indent">“Josh, if you tell her, I’ll pull the trigger on you myself.”</p>
<p id="indent">“Two.”</p>
<p id="indent">“Okay!” Josh yells. “1481 Magnolia Street in the Commerce District! They don’t tell us any locations, but he comes to work and visits us at our hub every now and then! It’s a big gray building with a cloudship loading dock hanging off the side!”</p>
<p id="indent">“Good decision, Josh,” I say, quickly pocketing the gun. I peek my head out of the apartment doorway and spot two guards coming down the hall, guns drawn.</p>
<p id="indent">“Right there!” one of them shouts, stating the obvious.</p>
<p id="indent">I’m not risking a gunfight against two people with an innocent bystander in the room. I need to escape somehow.</p>
<p id="indent">I peer out the still-open window. Just below the frame is a gutter, jutting off the side of the building. If I could get to it, I might be able to crawl away. It’s not a solid plan, but it’s a better alternative. At least it beats jumping three stories.</p>
<p id="indent">With careful steps, I get on top of the windowsill and slowly lower myself off the edge, clutching the gutter. It shakes and creaks under my weight, but otherwise seems to be able to hold me. Above me in the apartment, I hear the yelling and voices of the men not tied to chairs.</p>
<p id="indent">On top of that, a welcoming party below me shows up in three unmarked black vans, two people each. I shimmy my way along the gutter, hoping to loop out of sight, but there’s no way I’ll be able to escape. There has to be a safer way.</p>
<p id="indent">To my left, someone’s balcony hangs about eight feet below. It’s not very large, but I could land on without breaking a sweat. Or bones. I </p>
<p id="page-end">138</p>`
const ch13p9 = `<p id="page-start"> </p>
<p id="no-indent">grapple my way over, hanging on to the rickety gutter for dear life. I can feel the metal threatening to cut into my knuckles, but I can’t let it stop me.</p>
<p id="indent">Two gunshots fire off, and the bullets land somewhere in my vicinity. I look at the ground and see the six men have left their cars and are pointing pistols at me. From above, the two guards in the building are aiming out the window, though they won’t have as good of an angle to shoot at me so long as I keep moving. </p>
<p id="indent">Wincing and jumping with every blast of a gun, I continue my way to the balcony, and get close enough that I decide to leap towards it. When I let go of the gutter, I realize I vastly miscalculated how far away it is. My arms flail, and my right hand grabs on to the metal railing of the balcony at the last second.</p>
<p id="indent">Another volley of gunshots is unleashed, and I can feel a massive percussive force hit my left foot. Or shoe. I’m not sure which. Either way, it sends my lower body careening forward, forcing my grip on the balcony to loosen. I plummet eight feet, landing square on my back. Somewhat luckily for me, it’s mostly cushioned by a series of smaller, softer bushes, but it doesn’t stop the pain.</p>
<p id="indent">Now in the mulch and hiding behind the shrubbery, I realize how bad of a situation this is. I’m surrounded by six to eight men with guns, depending on how you define the word “surrounded.” There’s no way out of this without using my own gun.</p>
<p id="indent">“Come on, kid!” one of them calls, clearly inching closer to my hiding spot. </p>
<p id="indent">“And what if I don’t?”</p>
<p id="indent">“I won’t hesitate to shoot.”</p>
<p id="page-end">139</p>`
const ch13p10 = `<p id="page-start"> </p>
<p id="indent">“You drive a hard bargain, sir.”</p>
<p id="indent">I slowly reach for the guns in my pockets, coming to terms with my predicament, when I hear the whistle of something flying through the sky towards us.</p>
<p id="indent">“Retreat, men! It’s Orion and the Clockwork!”</p>
<p id="indent">“What?!” one of them calls out. I pop my eyes above the bush, and sure as day, the brass mass is soaring in our direction.</p>
<p id="indent">While they distract themselves by running to their own cars, I use the opportunity to bound out of the shrubbery and towards the still-idling B Realty box truck I’d followed to the complex. Thank goodness for other people’s irresponsibility.</p>
<p id="indent">I switch the truck into gear and drive away as best I can, seeing as I’ve never learned how to drive. It’s certainly a jerky experience. The unmarked cars follow suit, and behind them are Orion and the Clockwork, rapidly closing their distance between them and the cars.</p>
<p id="indent">If I have to fight Orion and the Clockwork, it’s the end of the line for me. Or, even worse, if I have to thank Orion and the Clockwork, I think I’ll end the line myself.</p>
<p id="indent">I step on the gas, giving myself a small head start on the posse of black sedans threatening to run me over. There’s a four-way stop sign dead ahead of me, but since I don’t see any cars waiting, I barrel right past it. The other cars do the same, but split off in opposite directions. One continues following me, but the other two turn left and right, probably trying to split Orion and the Clockwork’s attention.</p>
<p id="indent">Unbothered, the duo presses forward, directly behind the car currently tailing me.</p>
<p id="indent">The car takes a few pointless shots at Orion and the Clockwork, </p>
<p id="page-end">140</p>`
const ch13p11 = `<p id="page-start"> </p>
<p id="no-indent">missing every time, before returning focus on me. They shoot dents into the back of the truck, but with the thick cargo hold between me and them, they don’t stand a chance of hurting me. </p>
<p id="indent">We blow through a second stop sign, as unpopulated as the last one, when I realize the next intersection is a stoplight with a busier street. I hit the brakes a little harder than I mean to, and I feel the black car bump into me. Then, a loud metal scraping fills the air, and when I look back, the Clockwork has landed directly on top of the sedan, weighing it down so much it grinds against the ground and eventually comes to a stop. </p>
<p id="indent">Using the distraction, I prepare for the worst at this intersection, but the light turns green for me right at the perfect time. I make a hard right, sending the box truck swerving and swinging left and right. Maybe this way I can disappear into the traffic without having to worry about the other two cars or Orion and the Clockwork.</p>
<p id="indent">On either side of me, the black cars pulls up to my section of the truck, pointing pistols at the window. </p>
<p id="indent">Spoke too soon on that front.</p>
<p id="indent">I hit the gas a little harder, lightly bumping the car in front of me. They honk before realizing what’s happening. The two cars unload on the box truck, spraying bullets into the cab, shattering the glass of both doors, but miraculously missing me.</p>
<p id="indent">The whistle of the Clockwork screams through the air again and they connect with the car on my right, smashing it into the ground without hesitation. Its wheels pop under the pressure, and sparks illuminate the road.</p>
<p id="indent">My heart is pounding. This is like a horror movie where the monster picks the characters off one by one. And I could be next.</p>
<p id="page-end">141</p>`
const ch13p12 = `<p id="page-start"> </p>
<p id="indent">In yet another rash decision, I hit a hard left at a nearby street, sending random cars screeching to a stop and dodging out of the way. My stolen box truck funnels straight into a tight alleyway, scraping against the sides of the buildings and taking my mirrors clean off. I have no way of seeing if the other car is still following until I emerge from the alley. A brief glance shows they are, but it also shows Orion and the Clockwork hovering slightly above us.</p>
<p id="indent">I don’t know exactly where we are, but we’ve definitely hit the Commerce District, and that’s enough for me. I swerve sharply into this road’s flow of traffic, and at the nearest light, go into another alleyway. This one’s a tad wider than the last, allowing me space to open the door and hop out of the truck.</p>
<p id="indent">Behind me, the last sedan rushes into the alley and smashes into the back of the box truck. They both lurch forward a bit, and I duck into an offshoot alley. Two doors slam shut, and I hear the men load their pistols.</p>
<p id="indent">“We’re in so much trouble, dude. Orion and the Clockwork are onto us, and we can’t even tie up this loose end. If the boss ever sees us again, he’ll kill us.”</p>
<p id="indent">I hide behind a dumpster, shakily grabbing one of my guns. This time, I’m fully prepared to go down swinging.</p>
<p id="indent">A loud engine sound roars through the alley, and the two men yell and fire their weapons. The bullets make a metal pinging noise against what I assume is the Clockwork, who smacks them both against the sides of the buildings.</p>
<p id="indent">“I’m only going to ask once,” Orion says to the two men. “Who do you work for?”</p>
<p id="indent">“As if we’d tell a kid like you.”</p>
<p id="page-end">142</p>`
const ch13p13 = `<p id="page-start"> </p>
<p id="indent">“This kid has a lot more manpower and resources than you do. If you simply tell me, this’ll go a lot easier for you. Who are you, and who were you chasing across the city?”</p>
<p id="indent-adjustment-less">“Just some kid,” they reply. “She’s been giving the boss some trouble.”</p>
<p id="indent">“And who’s your boss?”</p>
<p id="indent">“We ain’t spilling.”</p>
<p id="indent">I manage a small glance at Orion from behind the dumpster. He looks average height and build, if not a little scrawny. His hair is brown and messy, and he’s wearing all black. His partner, the feared and respected Clockwork, is a large brass beast with powerful arms and legs and a furnace with eyes for a head.</p>
<p id="indent">It’s hard to believe the Gearmaster could create something like this and also something like Freckles. I guess you could say he’s a creative mind, if not a little abstract.</p>
<p id="indent">While Orion tries to interrogate the two goons, I slowly and quietly sneak away out the alleyway exit. Then, once I hit the sidewalk, I run in every direction I can. The last thing I want is for those two to hunt for me. Hopefully they’ll stay busy long enough to let me get a good lead on them.</p>
<p id="indent">After fifteen minutes of running and adrenaline pumping, I decide I can stop worrying about the protectorate duo of Carmsborough. They have bigger fish to fry with Slaphand’s goons, as long as they don’t get to him before I do.</p>
<p id="indent">With the sun getting lower in the sky, I begin my hunt for the building Josh the goon mentioned, wandering the streets and intersections of the Commerce District. In an unfortunate turn of events, I find it two streets </p>
<p id="page-end">143</p>`
const ch13p14 = `<p id="page-start"> </p>
<p id="no-indent">over from the tent city Shady Shane lives in. The box truck must’ve been coming from their base here.</p>
<p id="indent">I walk the sidewalks, which are now emptier than earlier, and finally spot the big gray building. Off the left side of the building is a small cloudship loading dock, currently in use. I head to the front, looking to put a name to the fake company Slaphand’s using to terrorize Carmsborough.</p>
<p id="indent">The sign next to it reads “CB Moving Limited.” I drop my jaw in shock. All the strings in my heart snap like the bow of a violin being pressed too hard. My knees turn to jelly.</p>
<p id="indent">CB Moving Limited. The same company that evicted me from my apartment when my mom died.</p>
<p id="page-end">144</p>`
const ch13p15 = ``
const ch13p16 = ``
const ch13p17 = ``
const ch13p18 = ``
const ch13 = [ch13p1, ch13p2, ch13p3, ch13p4, ch13p5, ch13p6, ch13p7, ch13p8, ch13p9, ch13p10, ch13p11, ch13p12, ch13p13, ch13p14, ch13p15, ch13p16, ch13p17, ch13p18]

const ch14p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 14</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">I remember the day I found out about Mom’s cancer.</p>
<p id="indent">My day at school had been good. More than good, actually. I was excited to share the news with her. She was going to be so proud of me for how well I did. How well we did. After all, we’d spent the night working on the project together, finishing all the little details that made it perfect.</p>
<p id="indent">The walk back to the apartment was serene. Peaceful. Birds were singing their harmonious tunes, breathing life into the cobblestone landscape of inner-city Carmsborough. People young and old were sitting on the cement steps of their houses and apartments, singing, playing, </p>
<p id="page-end">145</p>`
const ch14p2 =`<p id="page-start"> </p>
<p id="no-indent">knitting. Living.</p>
<p id="indent">A tune was stuck in my head. It was one of Giraffe’s most popular hits of the year, which the radio on our counter at home played nonstop. It became the ambience music of my trip home.</p>
<p id="indent">It was a Tuesday. I only remember that because my last class of the day was gym class, and we’d had a fun round of four-corner dodgeball that ended with the bell. I wouldn’t normally participate, but something was in the air—the spring air, which whistled through the stone alleys and along the tall buildings. Trees were in full bloom, their green hues as dark as ever. Bursting white clouds blanketed the sky, contrasting against the deep blue signature of the time of year. A cloudship here and there soared by.</p>
<p id="indent">I had a little hop to my step as I climbed the stairs of my apartment complex all the way to the fourth floor. They were tall and creaky, having been made before standardization, but I never minded. It was a healthy workout for my trip home.</p>
<p id="indent">I opened the door to our apartment and made my presence known. Though she was usually at work, Mom had some sort of appointment with her doctor that day, which meant a much-needed break was in store for her. I entered the living room and spotted her on the couch, using our coffee table as a desk to write on a piece of paper. Not paying her much attention, I moved to the kitchen to dig out an afternoon snack.</p>
<p id="indent">“You’re never gonna believe it, Mom, but we got the highest score on the project of the entire class. Mrs. Westernight was impressed. Thanks for staying up all night to work with me on it. You really didn’t have to.”</p>
<p id="indent">I snagged an apple from our fruit bowl and turned to our small pantry for dinner ideas. “Had fun in gym today, too. We played more dodgeball, </p>
<p id="page-end">146</p>`
const ch14p3 =`<p id="page-start"> </p>
<p id="no-indent">and I did as good as usual. But I tried today, and honestly, that’s asking a lot. We also read <em>Of Mice and Men</em> in English, which wasn’t as great, but next week we’re beginning our poetry unit.”</p>
<p id="indent">Mom hadn’t responded to any of my conversation, so I assumed whatever she was writing had something to do with work. It seemed like every couple of days she would bring her suitcase home and work until bedtime.</p>
<p id="indent">I grabbed a few chunky potatoes from the sack in the pantry, made sure they were bud-less, and set them on the counter to hunt for our main course of the night. </p>
<p id="indent">“Whatcha workin’ on, Mom? Your boss trying to get you to work on your day off, too?” I picked up my apple and took another bite. Finally, she looked at me, tears flowing down her cheeks. Her bottom lip quivered in the same way it always does when her heart’s been shattered.</p>
<p id="indent">I remember assuming she was thinking about Dad again. I was too young to remember him leaving us. It was in this same apartment that Mom discovered he had left us to go to the United States. Occasionally, something would trigger a thought or memory, and on especially emotional days, there was no stopping her floodgates from opening. </p>
<p id="indent">“What’s wrong, Mom?”</p>
<p id="indent">She beckoned me over with both arms, tilting her head to the floor. I sat beside her, and she wrapped her arms around me tightly. I remained motionless. Whatever it was, she would get it out of her system soon, and in half an hour we would be laughing and eating our dinner of mashed potatoes and… well, something else.</p>
<p id="indent">Maybe it was gonna be a steak day. We still had a few cheap cuts in our freezer hiding under all the TV dinners, and if I started thawing them </p>
<p id="page-end">147</p>`
const ch14p4 = `<p id="page-start"> </p>
<p id="no-indent">within the next twenty minutes, they’d be ready by the time six o’clock rolled by.</p>
<p id="indent">I remember thinking the exact words, “As long as she wraps this up, at least.”</p>
<p id="indent">When she let go of me, her tears didn’t stop. She was shaking. Something was seriously wrong. I was close to crying, too, despite having no idea what was going on. I’m not sure if it was empathy or sympathy, or even somehow understanding that the words about to come out of her mouth were going to change our lives forever.</p>
<p id="indent">“Doc says I’ve got cancer.”</p>
<p id="indent">It took four seconds for her words to process in my head. I stared at her with wide eyes. My grip on the half-eaten apple weakened, and the simple fruit fell to the carpet.</p>
<p id="indent">“What?” My voice shook.</p>
<p id="indent">“It was… uh… just a regular checkup, and… and he said, ‘Well, now don’t that look odd,’ and I said, ‘Well, now don’t what look odd, Doc?’ And so he ran a few tests, and… Oh my God, Luna girl, your mom’s got cancer.”</p>
<p id="indent">The living room around me fell apart, like a freshly completed puzzle going in for some glue that gets flipped too carelessly and slides off the cardboard, fragmenting into the same mess it started as. </p>
<p id="indent">“What?” I said again, unable to piece together anything else. “That can’t be right. The doc could be wrong, right? That can’t be right.”</p>
<p id="indent">“He’s running some more tests, and we’ll find out by Friday, but there’s no denying the lump he spotted. Said it may be metastatic, whatever that means.”</p>
<p id="indent">We didn’t have a steak-and-potatoes dinner that night. Or the next </p>
<p id="page-end">148</p>`
const ch14p5 = `<p id="page-start"> </p>
<p id="no-indent">night. Or the night after that.</p>
<p id="indent">The results came in early Friday morning. Neither of us had gone to school or work, unable to cope with the looming diagnosis and the anxiety that came with it. Why should we pretend like everything was normal? There was a good chance things would never be again.</p>
<p id="indent">When the paperboy arrived with his satchel, we were already waiting on the front steps for the delivery. The wind was a bit stronger that day, threatening to sweep us off the concrete staircase. He handed us our mail and went inside to deliver the rest to the front desk.</p>
<p id="indent">The tall stairs to the apartment were an inconvenience. We were both huffing for air at the top, our legs having carried us up the four flights a little too quickly. Then, we sat at the coffee table, nervous. </p>
<p id="indent">Metastatic Breast Cancer.</p>
<p id="indent">I suppose not all of those words need capitalized, but that’s how the doctor wrote it, and quite fittingly, I’d say. It’s imposing, it’s interrupting, and it’s terminal. At least, that’s also how the doctor wrote it, unless we tried chemotherapy. And seeing as how it had spread to her brain, it was going to be too expensive for our bare-bones insurance to cover.</p>
<p id="indent">Metastatic Breast Cancer That Spread To The Brain.</p>
<p id="indent">Treatment That Costs Ten-Thousand Dollars.</p>
<p id="indent">I called the school later that morning using our dingy home phone to tell them I would be dropping out of school to work. Mom and I weakly argued, but in the end, we both knew that if she wanted any sort of chance at treatment, we’d both have to be in a full-time job.</p>
<p id="indent">A weekend of scouring the Commerce District for anyone willing to hire a twelve-year-old illegally later, I landed at the rusty doorsteps of Cheapskate Chad’s scrapyard. My rate? A dollar a day. Well under </p>
<p id="page-end">149</p>`
const ch14p6 = `<p id="page-start"> </p>
<p id="no-indent">minimum wage, but it’s not like I could do a whole lot. I’m not supposed to be working in the first place.</p>
<p id="indent">We crunched numbers, and by the time October reared its head, we’d have enough money to get her the treatment she needed. Still, April to October was a long time, and we couldn’t afford for anything to go wrong in the meantime. We didn’t even know if we had that long to begin with.</p>
<p id="indent">April turned to May, and May turned to June. My birthday came and passed, receiving a passing comment and a hug along the way, but nothing more.</p>
<p id="indent">The days at work were not good. They were long and taxing. Still, I would walk home, dollar in my pocket, eager to spend the night with Mom. Replacing the radio on the kitchen counter was a jar of the contributions, a visual marker of our progress.</p>
<p id="indent">Walking back to the apartment was grueling. The trip was half an hour each way and involved crossing busy roads and people who wouldn’t look my way if I were royalty. The birds were fighting the oppressive heat as much as I was, and their harmonious tunes rang dull in the vast, light-blue sky. The cobblestone streets of Carmsborough seemed empty. The staircase was the last obstacle in a long day, hoping to drain me of every last breath.</p>
<p id="indent">One night, Mom surprised me with steak and potatoes, as well as a box of minute-serve rice. With the money we’d earned so far, as well as the sum already in her bank account, we were halfway to our goal. The work was relentless, so the occasion was signified with half of our steak rations, slightly freezer-burned by this point.</p>
<p id="indent">But we didn’t care. We laughed, we talked, we cried. A lot of that had been going around, but hope was on the horizon, and although our </p>
<p id="page-end">150</p>`
const ch14p7 = `<p id="page-start"> </p>
<p id="no-indent">routine was rough, it was done with purpose. I remember ending the night with a deep talk about the future. I was going to be a poet, and Mom was going to climb the ranks in her menial office job. When I left to head to bed, Mom was putting a stack of envelopes in the bill box hanging over the microwave. </p>
<p id="indent">The months blurred forward, but the temperature had stayed largely the same. The grass was yellower, and the wind was harsher. The same walk that had been a chore in June was seared into my legs. Air distorted above the cobblestone roads, baking all life that stepped through it.</p>
<p id="indent">I took heavy bounds up the staircase to our apartment, weighed down by tired feet and aching joints. Nonstop physical labor was taking its toll. A few steps later, I was at our door, ready for another quiet night at home.</p>
<p id="indent">The day’s snack was going to be the same as it had been for nearly half a year: saltines and tap water. I passed Mom on the couch, napping following a hard day at work. Her breathing was deep and slow.</p>
<p id="indent">I remember thinking I’d wait until dinner to wake her. I’d get it all prepared and ready, and as long as she hadn’t stirred in the meantime, I would welcome her with something a little nicer than a TV dinner. Maybe I’d crack into one of the green bean cans we’d bought last week.</p>
<p id="indent">I left to go to my room for a moment to switch into cleaner clothes, and considered a shower. How long had it been since I’d had one? It wasn’t the day before. I decided it was a good idea, and promptly stepped into the bathroom.</p>
<p id="indent">When I got out of the shower, I threw the dirty clothes into my hamper and made my way to the kitchen, ready to cook something. Only three or four minutes into meal prep did I notice Mom wasn’t breathing anymore. </p>
<p id="page-end">151</p>`
const ch14p8 = `<p id="page-start"> </p>
<p id="indent">Maybe if I hadn’t taken a shower, I would’ve been in the room when it happened. Maybe I could’ve stopped it. Maybe I could’ve shaken her awake. Or helped her somehow.</p>
<p id="indent">The rest of the day is mostly just a blur. A traumatic ink imprint on the pages of my life, but the secretary accidentally smudged the stamp.</p>
<p id="indent">I remember shaking her, trying to get her to wake up, but by then it was too late. There was no knowing how long she’d been gone by the time I’d noticed.</p>
<p id="indent">I remember calling the police, and the paramedics, and the long-untouched sticky note of my dad’s phone number on the fridge. Two of the three answered my call. Neither were my dad.</p>
<p id="indent">I remember riding with my mom in the back of an ambulance to the hospital. They declared her dead on the couch, but still had to bring her in for paperwork.</p>
<p id="indent">I remember being forced home later that night by the doctors. It was a fifteen-minute walk, but the road in front of me stretched on for forever. Every building I trudged by felt a mile long. The warm night was a spit in my face.</p>
<p id="indent">I remember gazing at the tall steps of the staircase. It was oppressive. </p>
<p id="indent">I remember breaking down at the front door to our apartment, afraid to open it. Would I see her in the living room? Was her imprint still in the couch, sprawled out, unmoving? Did she return as a ghost to lament or curse me?</p>
<p id="indent">None of those things happened. Instead, the first thing I did was count the money in the jar. Roughly 550 one-dollar bills were jam-packed in, with a few random bills added to the mix. Numbers were jotted haphazardly on a torn-out page of notebook paper beside it, displaying </p>
<p id="page-end">152</p>`
const ch14p9 =`<p id="page-start"> </p>
<p id="no-indent">Mom’s own total: $8763. </p>
<p id="indent">We were less than a month away.</p>
<p id="indent">And if I’d made more than a dollar a day, we might’ve made it. If I were making two a day, she would still be here. If I were making minimum wage, we would’ve been there ages ago.</p>
<p id="indent">I remember being in bed the day of the funeral and not wanting to be alive. I remember wanting to fall back asleep and to never wake up, like Mom did. We had never been all that religious, but I remember praying to God that the day would never continue. I even remember telling myself that my dad would be at the funeral, and he would take me to the United States with him. That he’d notice the three voicemails I’d sent him—one when she’d died, one when I’d been sent home by the doctors, and one when the date of the funeral had been set.</p>
<p id="indent">He never did, of course.</p>
<p id="indent">I was alone at her funeral, aside from the priest. Our exchange was awkward, and when he finished his funeral rites, he gave me a pat on the shoulder and left.</p>
<p id="indent">I made sure to get her a beautiful gravestone. It was an imposing black obsidian marker, with her name engraved in white. In full, it read, “Felicity Wells: Devoted Mother and Role Model. 1934-1972.”</p>
<p id="indent">I couldn’t bear to look at it.</p>
<p id="indent">I spent an hour crying quietly in the graveyard. Even reading her name was too much. I never got to say goodbye. Eventually, I stepped out and started my way back to the apartment. </p>
<p id="indent">Living there hadn’t been the same since. And, to be fair, why should it? The sole reason I called it home was gone. I had as much attachment to that fourth-floor blunder as I did my own absent father.</p>
<p id="page-end">153</p>`
const ch14p10 = `<p id="page-start"> </p>
<p id="indent">But it still hurt to climb the tall steps only to find I was in the middle of being evicted.</p>
<p id="indent">“What are you doing here?” I asked. The party of three stopped moving things to watch the twelve-year-old standing in the doorway.</p>
<p id="indent">“Ma’am, I hate to say it, but you’re being evicted right now. You haven’t paid rent in months. You’re lucky you’ve gotten away with it for this long, but the boss wasn’t having it anymore.”</p>
<p id="indent">“Wait, what do you mean? Mom’s been paying the rent.”</p>
<p id="indent">“We found about three months’ worth of rent in a jar on the table, which we are legally allowed to claim, but otherwise, we have to kick you out. Sorry, kid.”</p>
<p id="indent">“No, you can’t do that! She’s been paying! The statements are right here, in the bill box—”</p>
<p id="indent">I opened the box and was met with four unopened bills with the word “OVERDUE” stamped in bright red letters on the front of each. She’d been saving more money by not paying the bills. Even if I’d been making minimum wage, if she’d paid the bills, we weren’t ever going to make it.</p>
<p id="indent">“Mom would never stop paying. Why did she stop paying?”</p>
<p id="indent">“Your guess is as good as mine, kid, but the two of you need to leave. The contract’s terminated.”</p>
<p id="indent">“Wait. I can pay. I’ll pay the monthly rent. How much is it?”</p>
<p id="indent">“It’s done, kid. The apartment’s already been leased to another family. Besides, you’re not even an adult. You can’t provide an income, let alone $150 a month. Now, scram. I don’t want to force you, but I will if you make me.”</p>
<p id="indent">Tears were threatening my eyelids again, but I kept composure until I made it to the apartment lobby. I remember people walking by, not caring </p>
<p id="page-end">154</p>`
const ch14p11 = `<p id="page-start"> </p>
<p id="no-indent">about the pre-teen having a mental breakdown in the middle of their walking space. I remember the CB Moving Limited truck idling outside the complex entrance and the men that drove it.</p>
<p id="indent">My next stop was the bank. I was told I had to wait until I was eighteen to inherit my dead mother’s account, but that it would be safe and sound where I left it.</p>
<p id="indent">That, I think, was the defining moment. Or, rather, the <em>last</em> defining moment.</p>
<p id="indent">For half a year, I fought against multiple setbacks and challenges, but being told the money we worked so hard to earn was completely off-limits for six more years was the straw that broke the camel’s back.</p>
<p id="indent">That was the last day I could run <em>at</em> my problems and fight them head-on. From then on, I’ve always been Luna on the run. Working under S seemed like it was going to break my curse, but being confronted with the same people who got me into this mess to begin with sapped it all out of me.</p>
<p id="indent">I sit down in the grass in front of the gray building. A brief respite of icy rain trickles in from the ocean, washing the freezing, unforgiving landscape of Carmsborough in December. The streets are empty, and the sun has disappeared completely under the horizon. A shrouded black sky looms above.</p>
<p id="indent">My hands idly pick at the bullet lodged in my shoe. These men have wronged me more than once. Bijabers has wronged me more than once. Slaphand has wronged me more than once.</p>
<p id="indent">“Hey, boss,” I say into the wristwatch. “I realize it’s pretty much bedtime, but I’ve got eyes on one of their bases of operations. I figure tonight’s as good as any to drop in and get some work done.”</p>
<p id="page-end">155</p>`
const ch14p12 = `<p id="page-start"> </p>
<p id="indent">A short moment passes. “Good luck, Luna,” he replies. “Try not to stir things up too much.”</p>
<p id="indent">“No promises.”</p>
<p id="indent">I can’t help but feel like Mom’s watching over me right now. I promise I’ll make you proud. These bad men don’t stand a chance.</p>
<p id="page-end">156</p>`
const ch14p13 = ``
const ch14p14 = ``
const ch14p15 = ``
const ch14p16 = ``
const ch14p17 = ``
const ch14p18 = ``
const ch14 = [ch14p1, ch14p2, ch14p3, ch14p4, ch14p5, ch14p6, ch14p7, ch14p8, ch14p9, ch14p10, ch14p11, ch14p12, ch14p13, ch14p14, ch14p15, ch14p16, ch14p17, ch14p18]

const ch15p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 15</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">It’s well past midnight when I come to, sprawled across the ground. I’m pretty sure the only reason I wake when I do is because of how cold and wet the grass is. I don’t even remember falling asleep, but a glance at my watch tells me it was nearly seven hours ago. Apparently, I needed it. </p>
<p id="indent">At first, I wonder why nobody messed with the random woman spread out on the damp grass in front of a business, but nobody would mess with me when I was homeless and asleep. Nicer clothes weren’t going to change that.</p>
<p id="indent">Even this late at night, the building labeled “CB Moving Limited” is alive with activity. Another cloudship is unloading on the dock up top, </p>
<p id="page-end">157</p>`
const ch15p2 = `<p id="page-start"> </p>
<p id="no-indent">and lights are spilling from windows onto the cobblestone sidewalk outside. Whatever they’re really doing at CB Moving Limited, it has a third shift.</p>
<p id="indent">Or the third shift is the sneaky, illegal shift.</p>
<p id="indent">Wouldn’t surprise me any.</p>
<p id="indent">“Well, I suppose it’s time I scout the place and sneak in,” I say, my voice reaching no one’s ears. Why I felt the need to say it, I’ll never understand.</p>
<p id="indent">Above me, in the sky, the moon is big and beautiful. It’s just under full and waning into third quarter, or however you say it. My sole audience member for the insane break-in I’m preparing to attempt.</p>
<p id="indent">My first move is to tiptoe around the perimeter of the building. I spot a rear-entrance door that opens to an alley, but other than that, there’s a whole lot of nothing that can help me.</p>
<p id="indent">So, like a normal person, I squat at the end of the alley opposite the door and stare at it, waiting for someone to emerge. When nothing happens for thirty minutes, I decide it’s time to get moving.</p>
<p id="indent">The door creaks slightly as I open it, but nobody comes to check the noise, so I keep moving forward. I eventually slip into the building, which is a lot warmer than the chilly nighttime air, and close the door as delicately as it was opened.</p>
<p id="indent">“Now, onto hunting for the big man.”</p>
<p id="indent">I take one step on the tile flooring of the storage room I’m in, and my shoes squeak from the water they collected outside. The noise is a lot louder than the door was, and I immediately go to duck behind one of the metal shelves holding large, unmarked cardboard boxes.</p>
<p id="indent">Once again, nobody comes to investigate, and I use the time to wipe </p>
<p id="page-end">158</p>`
const ch15p3 =`<p id="page-start"> </p>
<p id="no-indent">my shoes off as best as I can with my sleeve. It’s not perfect, but a few test steps prove much quieter.</p>
<p id="indent">Can’t have a little rain getting me in trouble.</p>
<p id="indent">I go to leave the room, but a nagging feeling in my gut tells me to check a few of the boxes and their contents, so I run my knife across the tops of a few of them, slicing the tape. Three contain nothing but packing peanuts and small metal parts that look like they belong to machinery, but the fourth box contains gears and pipes, all a brassy-coppery color.</p>
<p id="indent-adjustment-less">There’s not a lot of pocket space left in my jacket, but I grab one of the larger gears and stash it away. Whether it’s because it’s shiny or because I want to find out more about the strange box of stuff is up for debate.</p>
<p id="indent">I open the next door, which leads into the main lobby of CB Moving Limited. The ceiling hangs high, meaning the second floor is a lot smaller, but seeing as the building is four stories total, there’s still plenty of ground to cover.</p>
<p id="indent">A patrol of three armed guards near the front entrance comes into view, walking along the windows and peering out of each set, almost as if they’re expecting visitors.</p>
<p id="indent">Expecting me.</p>
<p id="indent">There’s no doubt word’s reached them: Luna, the one who destroyed Slaphand’s Plasmarizer twice, escaped the island and is back to causing havoc. They know I’m heading this way. All I’ve gotta do is make it seem like I haven’t already arrived.</p>
<p id="indent">It’s almost funny realizing this whole mess is for me. I’ve scared and upset this big grown man an unreasonable amount. This “kid” has his guards on high alert.</p>
<p id="page-end">159</p>`
const ch15p4 = `<p id="page-start"> </p>
<p id="indent">Like earlier, I sit and peek through the crack in the doorway, watching the patrol make their rounds and tracing their patterns. Five minutes into scouting, however, a second group of guards arrives, retracing the first group’s path almost exactly the same way. And five minutes after that, a third batch shows up, too.</p>
<p id="indent">A total of nine guards are in the main lobby, all patrolling different areas at different times. If I step out, I’m almost definitely gonna be seen. But there are no other doors to this room, and I doubt if there’s a spare outfit stuffed into any of these boxes.</p>
<p id="indent">Now what?</p>
<p id="indent">I search for an answer, which comes from above.</p>
<p id="indent">For whatever reason, there’s a sort of vent in the wall that leads to the main room, meaning if I unscrew that and slip in, I’ll be high enough that the patrol groups won’t spot me unless they look up. And they’ll have no reason to unless I make too much noise. Then, I’ll walk across the support beams spanning the room to the stairs, and…</p>
<p id="indent">And…</p>
<p id="indent">Well, something, hopefully. The support beam is too high to make it to the stairs safely, and even if I could, there’s no way they wouldn’t notice me jump. Not to mention, if a fourth patrol group makes their rounds, I’d run right into them.</p>
<p id="indent">But, if I can find something to throw all the way to the opposite side of the room, maybe the noise will distract them all, giving me time to make the jump and hide.</p>
<p id="indent">It’s better than nothing, I suppose.</p>
<p id="indent">The three groups merge into one somewhere near the middle of the room, talking and ignoring their job. Nobody even glances this way as I </p>
<p id="page-end">160</p>`
const ch15p5 = `<p id="page-start"> </p>
<p id="no-indent">snake out of sight behind the door.</p>
<p id="indent">I climb the metal shelf directly under the vent, which is clear of boxes on top, but it’s less than four feet from the top of the shelf to the ceiling, so I’m stuck crouching. Then, with the blade of one of my knives, I slowly and carefully turn each of the four screws on the gate and gently set it beside me.</p>
<p id="indent">There’s plenty of space for me to crawl in, but it’ll be as uncomfortable as my spot on the top shelf. I check on the group of nine one last time, making sure they’re still talking and not paying attention, before stepping through the hole in the wall and onto one of the three support beams.</p>
<p id="indent">The black metal beam slopes up a bit near the center of the room, putting me at about fifteen feet above the floor. It’s fairly wide, but still a bit of a tightrope act.</p>
<p id="indent">The circus was never really my thing. I prefer watching movies in theaters. Not that I’ve seen one in years.</p>
<p id="indent">Heights, coincidentally, are <em>also</em> not my thing.</p>
<p id="indent">I get myself as close to the stairs as I safely can and peek below me. They still haven’t noticed, which is strange, considering the amount of dust I’ve displaced.</p>
<p id="indent">I fish the gear from my pocket and give it one last look. It’s solid but light, meaning I could toss without a problem.</p>
<p id="indent">“So long, good friend,” I whisper, spotting my reflection in the lustrous material. “You were good while you lasted.”</p>
<p id="indent">I reel my arm over my shoulder and throw the gear as hard as I can, watching it arc across the room all the way to the other side. It connects with the wall and emits a loud metal scraping noise. As everyone looks in </p>
<p id="page-end">161</p>`
const ch15p6 = `<p id="page-start"> </p>
<p id="no-indent">that direction, I dive off the metal beam and onto the stairs. It’s a four- or five-foot drop, but I stick the landing without hurting myself too much. </p>
<p id="indent">Hidden from view by the wall protecting the staircase, I quickly claw my way up, avoiding standing in fear of poking my head out and being spotted. I climb the rest of the stairs to the landing, revealing a balcony on the second floor. Multiple rooms line the small walkway.</p>
<p id="indent">I slide into one of the rooms, praying it’s empty, and hide away in a corner. A few minutes pass, and I hear footsteps walk by the room, but they’re not alerted to my spot. I allow myself a peek out the room’s window overlooking the balcony and spot the crowd of thirteen guards all staring at the spot where my gear had collided.</p>
<p id="indent">It’s still stuck in the wall.</p>
<p id="indent">This room, unlike the storage room on the first floor, is connected to another room by an inner door. I get back on the ground and peer through the crack underneath. The lights are off and there’s no sound or movement inside. </p>
<p id="indent">Should I move again?</p>
<p id="indent">Whether or not I should, I do. This one doesn’t have a window, meaning I have a little more freedom to move around, but it also has an inner door leading to a third room, whenever I’m ready for that. </p>
<p id="indent">I use the seclusion time as a chance to breathe, seeing as I have a lot more building to climb at this point. I’m getting good at this sneaking and infiltrating thing. Maybe I should become some sort of espionage agent. I’m sure there are places hiring.</p>
<p id="indent">I let a few more minutes pass before walking to the next door and checking it the same way I did the first. This time, the light is on, but there are no signs of life inside. This one has a window similar to the first room, </p>
<p id="page-end">162</p>`
const ch15p7 =`<p id="page-start"> </p>
<p id="no-indent">but also stairs to the third floor of the building. </p>
<p id="indent">So far, there’s been nothing of interest in any of the rooms. If I had to guess, the first and second floors are part of their “moving company” front end, and the third and fourth floors are part of their “mafia syndicate” back end.</p>
<p id="indent">I follow the staircase to the third floor, where the mood drastically changes. The walls are a different color, the floor is carpeted, and everything feels drab and secretive.</p>
<p id="indent">Called it.</p>
<p id="indent">“Yeah, the boys are completely confused as to what happened,” a voice says down the hall, accompanied by a set of footsteps. “That’s the second gear to get lodged in that wall in a week, and nobody can find the source. Probably one of the guards playing tricks.”</p>
<p id="indent">I hastily roll into one of the open rooms nearby, hoping the man doesn’t come in here.</p>
<p id="indent">“No, the cameras still aren’t functional from the outage last month. Boss believes they’ve been sabotaged, but the repairman doesn’t think so. Besides, nobody’s come to steal anything, and that Luna kid certainly didn’t plan any of this. She was still on the island when the first one got stuck.”</p>
<p id="indent">The man walks by, totally unaware of me, that Luna kid, on the other side of the wall, and descends the stairs to the second floor. I breathe a short-lived sigh of relief.</p>
<p id="indent">I can’t believe I didn’t check if there were cameras again. I’ve been screwed by them twice, and for all I know, it could’ve been three by now if it weren’t for their mysterious outage. Also, the second gear in a week in that wall? What on earth is going on around here?</p>
<p id="page-end">163</p>`
const ch15p8 = `<p id="page-start"> </p>
<p id="indent">Those are questions for later. I step back into the hallway, ready to begin my search.</p>
<p id="indent">With most of the welcome party on the first and second floors, being spotted isn’t my biggest worry, but I still take every precaution I can. Most of the rooms are offices of some sort, but two catch my interest: the conference and storage rooms.</p>
<p id="indent">The conference room has a lot of information about the island and a few of Bijabers’ dealings. There’s a bulletin board detailing some guy in France, as well as a paper at the far end of the table in the center sent from someone calling herself “Cleopatra.” It mentions shipments inside Carmsborough, but not what they’re shipping or to where.</p>
<p id="indent">If I wanted any more confirmation that this was one of Slaphand or Bijabers’ dealings, I got it all right here.</p>
<p id="indent">As for the storage room, it’s mostly cleaning supplies on the inside, but a second box of gears and pipes, like the one in the storage room, sits on a shelf collecting dust. The words “OLD PROTOTYPE PARTS” are written in sharpie on the side. A prototype for what? The Plasmarizer? A steambot?</p>
<p id="indent">Too many questions in this building. All I need is to find Slaphand’s current location. I pocket two more gears from the box and silently fold the top again.</p>
<p id="indent">Thirty minutes of searching later, I climb to the fourth floor, which, unlike the third, has guards patrolling the parallel halls. Must be the important area.</p>
<p id="indent">For the most part, it’s more of the same boring offices, but this time with the added flair of hostile men threatening to use their pistols on me. More than once I’m forced to step into an empty room to wait for one of </p>
<p id="page-end">164</p>`
const ch15p9 = `<p id="page-start"> </p>
<p id="no-indent">them to pass by, and it’s slow moving across the building.</p>
<p id="indent">Eventually, I spot a room with barred windows and two guards standing on the outside. Beyond that is a door with a stairway label. The most protected room is right beside the roof access. That’s clearly where I wanna be, but how do I get inside?</p>
<p id="indent">“All hands on deck downstairs,” their radios say, crackling to life on their hips. “One of Cleopatra’s men is coming to do the steroid exchange and we need every last guard for safekeeping.”</p>
<p id="indent">The two guards sigh and leave the hallway. Like clockwork, I hide inside another room until they’re out of sight and stand in front of the barred room. </p>
<p id="indent">That was easy.</p>
<p id="indent">I feel like the door should’ve been locked, but it swings open with no resistance. My eyes widen. Lining the walls are expensive-looking paintings and artworks and three statues standing in various spots. Various golden items sit on a bookshelf, joined by a large vase full of gold coins.</p>
<p id="indent">In the center of the room is a map on a table which reads “Slaphand’s Stakes.” Next to that is a large metal bat.</p>
<p id="indent">A small red X marks the location of his main hideout, under the name of “Hand & Boogie Retail.” There are plenty of additional markings on the map, including a skull over the recently destroyed Blood Moon Island and blue dots for each of the apartment complexes they control.</p>
<p id="indent">Hand & Boogie Retail. It’s nestled in between the Commerce and Higher districts. I’ve never had a reason to go that way, but I do now. My first trip to the Higher District will be to find and crush Slaphand.</p>
<p id="indent">On my way out, I consider the large vase of gold coins taunting me on the shelf. I go to grab a handful, but hesitate.</p>
<p id="page-end">165</p>`
const ch15p10 = `<p id="page-start"> </p>
<p id="indent">“What would you do, Freckles?” I say aloud. “I mean, I always say it’s moral to steal from the bad guys. They’re the bad guys, after all. But you wouldn’t like it in the first place. Something about stealing making me as bad as them, or whatever. It’s too bad you’re not here, I guess.”</p>
<p id="indent">My mind is made up. Sorry Freckles, you’ll have to forgive me later. </p>
<p id="indent">I grab five or six of the coins, stash them awkwardly in the same pocket as the two gears are in, and turn to leave the room, only to be met with a guard staring at me, confused, terrified, and angry.</p>
<p id="indent">“How long were you there?” I ask, as if it matters.</p>
<p id="indent">“Long enough. You’re that Luna kid, aren’t you?”</p>
<p id="indent">“I thought you were supposed to be helping Cleopatra.”</p>
<p id="indent">“Yeah, but something tripped the silent alarm for this room, and that something is you. Put your hands—”</p>
<p id="indent">Without hesitation, I reach for the metal bat leaning against the table in the center of the room and swing at the man. It connects loudly and violently with his head, knocking him to the ground, unconscious.</p>
<p id="indent">The metal sound reverberates through the hallway. If nobody else knew I was here, they do now.</p>
<p id="indent">I swipe the map on the table, which tears at the four corners where it was pinned, and stuff it in my coat before climbing the stairs to the roof. Maybe, if nobody’s there, I can steal the cloudship and get away without being chased.</p>
<p id="indent">I reach the top and am met with snow and two guards, as surprised to see me as I am them.</p>
<p id="indent">“Well, hello, fellas.”</p>
<p id="indent">I scan the roof. There’re two goons in the cloudship. I can either take all four of them on or find a different way to escape.</p>
<p id="page-end">166</p>`
const ch15p11 = `<p id="page-start"> </p>
<p id="indent">The building behind me has a roof the same height as this one. If I can jump the distance between the two, I might get a good head start.</p>
<p id="indent">They approach me, spreading out a little to have as much peripheral on me as possible. From below, the door swings open, and two more guards charge up the stairs.</p>
<p id="indent">Now or never, I suppose.</p>
<p id="indent">I lob the bat at one of the nearest guards, which smacks him comically, and make a break for the other rooftop. At this speed, I might make it.</p>
<p id="indent">Or, at least, I would’ve, if I hadn’t looked at the ground at the last second. My body fills with terrible anxiety, and my jump ends up barely two feet short of my target. I try to reach for the ledge of the building, but I’m a few inches too far away.</p>
<p id="indent">I fall five feet and miraculously land on a metal fire escape, even almost sticking the landing.</p>
<p id="indent">Almost.</p>
<p id="indent">I barrel shoulder-first into the brick wall of the building, grinding my teeth in pain. The guards peer at me from the rooftop, not wanting to attempt the same thing. </p>
<p id="indent">“You’ve only got one way down,” one says. They all disappear, probably on their way to the bottom of the fire escape. By the time I finish descending the four ladders to the alleyway, they’ll have gotten equally as far, and I’ll be toast.</p>
<p id="indent">I stare at the window right in front of me. Every fire escape has a window to escape from. There are actually <em>two</em> ways for me to avoid capture.</p>
<p id="indent">I don’t know what this building is, or anything about it, but I know </p>
<p id="page-end">167</p>`
const ch15p12 = `<p id="page-start"> </p>
<p id="no-indent">what it’s going to be used for.</p>
<p id="indent">Within seconds, one of the stolen gears is in my hands and smashing into the glass. It makes quick work of the windowpane, and I step into the building, which is completely dark on the inside except for the faint lamplights peeking in from the streets.</p>
<p id="indent">I weave through the hallways of this new building and find the roof access, climb my way up, and face the roof of CB Moving Limited. The guards all went to hunt for me downstairs, leaving the cloudship unprotected.</p>
<p id="indent">These guys are consistently stupid, and honestly, I love it.</p>
<p id="indent">I step all the way to the opposite side of this building’s roof, hoping to gain the speed and momentum to get me across. Just don’t look down, Luna. Take the jump, and don’t look down.</p>
<p id="indent">I break into a full sprint, charging across the roof as fast as I can, and leap over the ledge. I do end up looking halfway through the air and spot a few of the guards already waiting for me in the alley. It’s a long fall, but I won’t be joining them. My feet land firmly on the roof of CB Moving Limited, and I break my landing with a roll.</p>
<p id="indent">No time to relish in that accomplishment. I’ve gotta get the cloudship kicked into motion and get out of here. Luckily for me, the design is the exact same as the first ship I stole, and the key is once again still in the ignition. Hooray for consistency, I suppose.</p>
<p id="indent">The cloudship starts moving as soon as two of the guards reappear on the roof. They fire at the balloon, but their pistols aren’t going to do much in stopping me from flying away.</p>
<p id="indent">I’m free, I’m safe, I have a map of locations, and I stole another one of their dinky little cloudships. It’s hard not to feel cocky. Freckles will be </p>
<p id="page-end">168</p>`
const ch15p13 = `<p id="page-start"> </p>
<p id="no-indent">in my hands in no time.</p>
<p id="page-end">169</p>`
const ch15p14 = ``
const ch15p15 = ``
const ch15p16 = ``
const ch15p17 = ``
const ch15p18 = ``
const ch15 = [ch15p1, ch15p2, ch15p3, ch15p4, ch15p5, ch15p6, ch15p7, ch15p8, ch15p9, ch15p10, ch15p11, ch15p12, ch15p13, ch15p14, ch15p15, ch15p16, ch15p17, ch15p18]

const ch16p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 16</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Within the first fifteen minutes of my escape flight, the bullet holes in the balloon had leaked enough air to stop me from gaining any more altitude. I settled on a quiet spot in the middle of a random road to park the ship. There’s no chance they’ll be able to hunt for me from this far away.</p>
<p id="indent">Hope whoever has to get the ship off the road will have fun in the morning, because it sure won’t be me. </p>
<p id="indent">I walk the rest of the distance to the <em>Constellation</em> on foot. Today was a successful day, all things considered. I used Shady Shane as one of my informants, beat information out of two thugs trying to de-home an old lady, escaped with my life in a crazy car chase scene, found their base, and </p>
<p id="page-end">170</p>`
const ch16p2 = `<p id="page-start"> </p>
<p id="no-indent">snuck through their whole building for Slaphand’s possible location, all while finding the time for a power nap.</p>
<p id="indent">Pretty badass, if you ask me.</p>
<p id="indent">Still, it was a lot. Maybe too much. My bed’s looking as enticing as it had yesterday. Despite being nearly dawn, I curl up in bed and catch some much-needed z’s.</p>
<p id="story-break"></p>
<p id="indent">A loud knocking sound wakes me abruptly. My head is groggy and my body’s sore. Jumping and running into things as much as I did was wearing me out already. How long was I asleep? Judging by how bright it is, it had to have been more than a few hours.</p>
<p id="indent">“Open up!” someone yells. It’s a command, but the tone isn’t necessarily hostile.</p>
<p id="indent">Either way, I’m not taking any chances. If they’ve spotted me, they won’t have for long.</p>
<p id="indent">Hand on holster, I step onto the main deck and peek my head above the rim. A strong sense of déjà vu washes over me, but I ease a little when I see who it is.</p>
<p id="indent">“Can I help you, officer?” I remove my hand from the holstered weapon.</p>
<p id="indent">“Are you the owner of this ship?” the officer asks.</p>
<p id="indent">“Yes, I am. Why, did I forget something?”</p>
<p id="indent">“If you mean you forgot to pay to park here, yeah. You have to get a permit. They’re twenty wings a day, but you get an extra ten added as a fine because you don’t have a permit yet.”</p>
<p id="indent">“Oh, shoot. I got here so late, it totally slipped my mind.” </p>
<p id="indent">I don’t know why I feel the need to lie. It’s not like I’m in any serious </p>
<p id="page-end">171</p>`
const ch16p3 = `<p id="page-start"> </p>
<p id="no-indent">trouble, and there’s no getting out of paying for the parking permit. Still, I don’t want to incriminate myself in front of the man. </p>
<p id="indent">“Let me go get some cash real quick.”</p>
<p id="indent">I stash my weapons away so that he doesn’t notice how much heat I’m packing and grab five twenties and a ten, enough to pay for the entire week plus the fine.</p>
<p id="indent">“You wouldn’t happen to know the fastest way to Hand & Boogie Retail, would you?” I ask, as he punches numbers and fills in some paperwork. “I’ve got some hunting to do in that area for my sister-in-law, and I hear they’re some of the best.”</p>
<p id="indent">“They’re not bad, but they’re far from the best,” the cop says, inputting something into the parking meter my ship’s at. “Take a left off of Flup Avenue and it’s almost a direct shot, but if you want some super high-quality service, go to Mary and Macy’s. They’re super nice, and also a lesbian couple, if you’re progressive. Best darn craftwork I’ve ever seen.”</p>
<p id="indent">I internally wince at the sound of Mary’s name, even though it’s not <em>her</em> he’s talking about. “I’ll keep that in mind. Thank you.”</p>
<p id="indent">“Alright, Miss Luna Wells, don’t forget to renew your permit or get the heck out of here by Sunday night. If you have any complaints regarding our interaction today, you may call the Carmsborough Police Contact Hotline. My name has been Officer Hitch. Peace.”</p>
<p id="indent">“Police Contact Hotline?”</p>
<p id="indent">“Oh, some new initiative the president and Orion are enforcing. I have to mention it at the end of every conversation while on duty. It’s a good idea in theory, but completely annoying in practice.”</p>
<p id="indent">“Strange, but okay. Goodbye, Officer Hitch.”</p>
<p id="indent-adjustment-more">I disappear back into my ship and prepare for another day of sneaking, </p>
<p id="page-end">172</p>`
const ch16p4 = `<p id="page-start"> </p>
<p id="no-indent">and probably fighting, too. The knives and pistols go in their places, my winter coat goes on my arms, and the scarf and hat go on and around my head.</p>
<p id="indent">“Come in, Luna,” the boss’ voice says from my watch.</p>
<p id="indent">“Yeah, it’s Luna. Boy, do I have the update of a lifetime for you.”</p>
<p id="indent">“Let’s hear it, then.”</p>
<p id="indent">I spend ten minutes relaying the story in all its action-packed detail from beginning to end. He patiently waits on his end of the communicator, listening to my over-explained recollection.</p>
<p id="indent">“Sounds like a dangerous situation. Chances are, they’re on high alert. It might be best if you hold off for a bit, in case they decide to double down within the week.”</p>
<p id="indent">“What? No, I can’t stop yet. I’m almost there. I have his location. If we wait any longer, I might not be able to rescue Freckles. It might be too late.”</p>
<p id="indent">The line goes silent. I assume he’s weighing the situation and trying to decide what’s best. Unfortunately for him, I’m not taking no for an answer. If this is the last time he’s going to sponsor my little shenanigans, so be it. But I’m getting my cat back.</p>
<p id="indent">“Be careful, Luna. I still haven’t heard anything from informants, which means they’re either being investigated or are currently in hiding. The last thing I need is you walking into something a lot bigger than you’re expecting.”</p>
<p id="indent">“Oh, trust me, I’m ready this time. I’m gonna watch for the cameras, memorize guard patterns, wait for the perfect moment, distract them, use stealth when I can, and repeat the process until my knife is in Slaphand’s heart. Or throat. I’m not picky.”</p>
<p id="page-end">173</p>`
const ch16p5 = `<p id="page-start"> </p>
<p id="indent">“Is that all?”</p>
<p id="indent">“What do you mean?”</p>
<p id="indent">“Shouldn’t you have more of a cohesive plan? Do you know anything about the building you’re ready to walk into?”</p>
<p id="indent">“Well, it’s not like I can just ask for the blueprints. I’m going down as soon as we’re done talking to scout it a bit, but there isn’t much else I can do.”</p>
<p id="indent">“Alright, well, be smart, I guess.”</p>
<p id="indent">“You bet, boss. Peace.”</p>
<p id="indent">I hang up and step into the open air. My brief respite on board the <em>Constellation</em> is coming to an end again.</p>
<p id="indent">Seeing as Hand & Boogie Retail is a two-hour walk from my spot on the docks, I do something I’ve never done before: ride the bus. I pay the considerably small fare and grab a seat. Nearly forty minutes later, we stop close enough for me to walk the rest of the distance in ten minutes.</p>
<p id="indent">The building is a lot larger than I expected. Like, a <em>lot</em> larger. It’s all one floor, but expansive. From what I can tell through the windows, there are sections for pretty much any home appliance or furniture you’d need. I don’t even recognize everything on display, like something called an air fryer. </p>
<p id="indent">My stomach rumbles at a fridge in the window. When was the last time I ate? I’d snacked a little yesterday, but nothing serious. I spin in a circle, searching for somewhere to eat, and my eyes lock onto a sub sandwich restaurant with outdoor seating. It’s three in the afternoon on a cold Tuesday in December, so nobody’s sitting outside, giving me the chance to do some scouting from the front.</p>
<p id="indent">I order a foot-long sub, prompting a weird glance from the server, but </p>
<p id="page-end">174</p>`
const ch16p6 = `<p id="page-start"> </p>
<p id="no-indent">they deliver it, along with a medium lemonade.</p>
<p id="indent">Lemonade used to be one of my favorites, before I had to struggle to find clean drinking water. Lemonade meant a hot day of fun in the sun with Mom, walking around the city, or playing in a nearby park.</p>
<p id="indent">Now, lemonade means not dying of thirst two days into my mission. </p>
<p id="indent">With my meal finished and leaving me rejuvenated, an idea strikes me: if I go in and act like I’m shopping, maybe nobody will recognize me. I could gather intel, like where cameras are and what the layout is, without raising any alarm.</p>
<p id="indent">Screw it. I’m going in.</p>
<p id="indent">I bring my empty tray into the sandwich shop, thank the server, and head across the street to Hand & Boogie Retail. Obviously, I get that the “Hand” is supposed to be Slaphand, but who is the “Boogie” in Hand & Boogie? How many people work for Bijabers, and why do they all have crazy names?</p>
<p id="indent">The automatic door to Hand & Boogie opens as I approach, welcoming me with a blast of warm air. Already, I spot a camera to my right, doing my best to avoid looking at it straight-on and without seeming suspicious. </p>
<p id="indent">It’s as massive on the inside as it is on the outside. Aisles of different electronics line half the store, ranging from microwaves to space heaters. I spend some time searching the aisles with the idea that it will build my credibility.</p>
<p id="indent">What really catches my eye, though, is a series of doors along the back wall of the building. Two are the standard restrooms you’d expect in any store, but the other labeled ones are for storage, staff, and authorized personnel. Three are completely unlabeled.</p>
<p id="page-end">175</p>`
const ch16p7 = `<p id="page-start"> </p>
<p id="indent">“Anything I can help you with today?” someone asks me. I turn and am met with a store worker. They don’t quite match the usual caricature of one of Slaphand’s goons. They’re barely older than I am, and clearly only here for the paycheck.</p>
<p id="indent">“Yeah, I was hoping you could point me in the direction of your TVs. I’m looking for a new one for my sister-in-law after a minor accident yesterday involving too much wine.”</p>
<p id="indent">“Oh, of course. Down there in aisle fourteen. We have black and white and also color, if that’s what you want.”</p>
<p id="indent">“Thank you very much.”</p>
<p id="indent">I meander over to the aisle, taking my time and soaking things in. When I’m in here later, I’ll want to avoid this room as much as possible. It’s too wide open to stay hidden, and with cameras blanketing the entire area, keeping things secret is bound to fail.</p>
<p id="indent">So, I need a way in from one of the other rooms. Preferably the room with easiest access to Slaphand, as long as he’s here.</p>
<p id="indent">The front door dings as it automatically swings open for the next new arrival. In walks a massive, lumbering man, nearing seven feet tall. His frame is distorted, and his face is angry.</p>
<p id="indent">Slaphand.</p>
<p id="indent-adjustment-more">“Have Lanny meet with me in an hour,” his booming voice says to one of his higher-ups. “There’s a lot to talk about regarding the little fiasco last night. If we don’t figure out what she wanted with that map, we’ll have to increase security everywhere, and we can’t afford that right now.”</p>
<p id="indent">“Of course, sir,” the man says.</p>
<p id="indent">I duck into an aisle, pretending to be a lot more invested in a lamp than I actually am. From the corner of my eye, I see him and his </p>
<p id="page-end">176</p>`
const ch16p8 = `<p id="page-start"> </p>
<p id="no-indent">subordinate walk into one of the unmarked rooms. </p>
<p id="indent">You’ve marked your own grave, Slaphand.</p>
<p id="indent">“Finding things alright?” another worker asks, breaking me from my trance.</p>
<p id="indent">“Uh, yeah,” I reply. “Well, maybe. Could you point me in the direction of any stores where I might be able to get some rope?”</p>
<p id="indent">“Rope? Well, as strange as it is, we sell rope. How much are you thinking?”</p>
<p id="indent">“Maybe twenty feet, and it’s gotta be pretty thick. My sister-in-law’s car got stuck in a ditch and we’d like to pull it out without a tow truck. You get it.”</p>
<p id="indent">“Oh, for sure. Let’s get you some of that.”</p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="indent">Hiding in an alley with twenty feet of thick rope for two hours isn’t comfortable, but at half-past six, the last of the workers leaves the store, replaced by a batch of brutes that fit the henchman bill better.</p>
<p id="indent">I wait an extra half an hour for them to file into position, rehashing my newly constructed plan. </p>
<p id="indent">There’s no using the front door, and after leaving with my freshly purchased rope, I discovered there’s no back entrance, either, save a loading dock that is always guarded.</p>
<p id="indent">So, the rope’s for the roof. I spent a hot minute hunting for something to tie to the other end, so that when I toss it, it can theoretically latch on to something. Eventually, I located some loose rebar, gave it a few test runs, and decided it was good.</p>
<p id="indent">And, most importantly, I made sure Slaphand never left the building.</p>
<p id="page-end">177</p>`
const ch16p9 = `<p id="page-start"> </p>
<p id="indent">Eight o’clock. Anyone else funneling into the building will be few and far between. It seems Slaphand’s promise to increase security was honest. There’re a lot more guards than a furniture and appliance store should have.</p>
<p id="indent">I quietly approach the building, making sure no security cameras are looking my way. Those wretched machines have messed things up far too many times. When I’m in the clear, I toss the rope onto the roof, trying to snag it on a pipe and antenna.</p>
<p id="indent">My first attempt is unsuccessful, but on my second, the rebar catches, and I give it a hearty tug. As long as I’m careful, this thing isn’t going anywhere. I’ll be climbing this sucker easily.</p>
<p id="indent">Which is obviously the hard part. I lift myself off the ground, planting both feet on the brick and plaster wall of the store, and pull, dragging the rest of my body with.</p>
<p id="indent">It’s a long and scary process, but I manage to snake all the way up without a hitch. And, so long as I timed it right, the camera system still has another forty seconds before it loops back around to where I would’ve been.</p>
<p id="indent">Success. </p>
<p id="indent">Well, sort of. I still need in. My entire plan is banking on some sort of roof access, whether it be a vent or stairs or whatever.</p>
<p id="indent">Thankfully, my wish comes true. I spot a vent with warm air spilling out and turning into fog as it hits the cold breeze. Using the same knife trick as last night, I unscrew the vent gate and stick my hand in. The warm air is just that–warm. No risk of burning myself to death climbing in.</p>
<p id="indent">With as much caution as I used to scale the building, I slowly descend into the vent. It’s entirely aluminum, and I don’t want to make too much </p>
<p id="page-end">178</p>`
const ch16p10 = `<p id="page-start"> </p>
<p id="no-indent">noise and have a welcome party waiting for me. At that rate, the front door would’ve been easier.</p>
<p id="indent">It’s a strenuous pace, but I make it to the end. I can’t hardly see anything in the room below me, besides a storage shelf. The vent gate falls victim to my knife trick for a third time, and I quietly set it on top of the shelf. Then, I stick my legs out and use them to scoot the rest of my body through the exit.</p>
<p id="indent">Mission success.</p>
<p id="indent">I hop from the shelf with a louder thud than I would’ve liked and turn to face the rest of the room.</p>
<p id="indent">A man dressed in all black is staring at me, shocked. He’s not wearing “Slaphand goon” all black, but still all black.</p>
<p id="indent">“Did you watch me do all that and not say anything?” I ask the man, as surprised as he is.</p>
<p id="indent">“Who the hell are you?” he says, hiding something behind him.</p>
<p id="indent">“I’m Luna, the one that’s been harassing Slaphand. Who the hell are <em>you</em>?”</p>
<p id="indent">“My name’s Agent Ike. I’m the man here to take Slaphand down.”</p>
<p id="page-end">179</p>`
const ch16p11 = ``
const ch16p12 = ``
const ch16p13 = ``
const ch16p14 = ``
const ch16p15 = ``
const ch16p16 = ``
const ch16p17 = ``
const ch16p18 = ``
const ch16 = [ch16p1, ch16p2, ch16p3, ch16p4, ch16p5, ch16p6, ch16p7, ch16p8, ch16p9, ch16p10, ch16p11, ch16p12, ch16p13, ch16p14, ch16p15, ch16p16, ch16p17, ch16p18]

const ch17p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 17</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“So, you’re the Luna I keep hearing about on their transmissions.”</p>
<p id="indent">Agent Ike hoists one leg up on a box and stretches. He’s apparently not intimidated by my presence, which either means he’s underestimating me or he’s a good guy. </p>
<p id="indent">“Yeah, I’m kind of a big deal,” I reply. “I’ve got Slaphand scrambling for help. His goons are as dumb as a bag of rocks.”</p>
<p id="indent">“I don’t think you’re doing as much as you think you’re doing. It’s not just you. They’re reacting to Orion and the Clockwork as well, on top of the war and the United States government.”</p>
<p id="indent">“Well, to be fair, Orion and the Clockwork joining the hunt was my </p>
<p id="page-end">180</p>`
const ch17p2 =`<p id="page-start"> </p>
<p id="no-indent">fault. Some of Slaphand’s men were chasing me across the city, and Orion and the Clockwork smashed them into the ground one by one.”</p>
<p id="indent">“Oh, so you’re partnered with those two?”</p>
<p id="indent">“No. Far from it, actually. You’re a good guy, then?”</p>
<p id="indent">“I’d like to think so, yeah. I’ve been working to take Bijabers’ regime apart for a few years now, and tonight’s the night I finally arrest Slaphand. This raid is going to seriously cripple Bijabers’ stronghold in Carmsborough, probably forever.”</p>
<p id="indent">“Well, awesome idea, but unfortunately, I’m going after Slaphand, Mr. Agent Ike. He’s got my cat, Freckles, and I need to get him home in one piece.”</p>
<p id="indent">“No, I don’t think you understand, Luna. This particular plan has been months in the making. Their camera systems have been disabled for weeks, and I’ve been siphoning information from his men for just as long. A few nights ago, I was going through one of their shell companies, searching for this very location.”</p>
<p id="indent">“Wait, you took the cameras down? Did you throw a gear as a distraction, too?”</p>
<p id="indent">“In CB Moving Limited? Yes.”</p>
<p id="indent">“I did that too. They said it was the second one in a week.”</p>
<p id="indent">“Well, it sounds like you’re a grand strategist, kiddo, but I’ve gotta handle him on my own. He’d overpower either of us in a second, and I’m the one with a hell of a lot more training than you.”</p>
<p id="indent">“Maybe we could work together,” I offer. “You and I, fighting him two versus one. He wouldn’t stand a chance.”</p>
<p id="indent">“I can’t let that happen. This is an incredibly dangerous situation, and my boss would never allow a team-up with a minor.”</p>
<p id="page-end">181</p>`
const ch17p3 = `<p id="page-start"> </p>
<p id="indent">He turns to face the door, revealing a lockpick hidden in his hands. Good to know it was locked. I might not have been able to leave.</p>
<p id="indent">“Don’t underestimate me, Agent Ike. I—”</p>
<p id="indent">“Please, call me Ike.” He smiles at me, and even though it seems genuine, I’m upset that he interrupted me.</p>
<p id="indent">“I’ve been on my own for five years. I can handle myself. A disfigured man with a knack for illegal dealings means nothing. If you want to, maybe we can get our bosses to talk and let us work together.”</p>
<p id="indent">“Wait, you have a boss?” Ike asks. “Who do you work for?”</p>
<p id="indent">“I’m not sure I’m allowed to say,” I reply. “He’s more the anonymous type. Who do <em>you</em> work for?”</p>
<p id="indent">“I hardly see how that’s a fair question, since you won’t even tell me. Trust is important, Luna.”</p>
<p id="indent">“Don’t talk to me about trust, Agent Ike. I’ve only been able to trust one person in five years, and I let her die on Blood Moon Island not three days ago.”</p>
<p id="indent">“You were on Blood Moon Island?” He stops picking the lock to face me. “How did you escape?”</p>
<p id="indent">“Hold on. You’ve heard of Blood Moon Island?”</p>
<p id="indent">“Yes. That’s why I asked how you escaped.”</p>
<p id="indent">“Did you know what was happening on the island?”</p>
<p id="indent">“Again, yes, that’s why I asked how you escaped.”</p>
<p id="indent">“You <em>knew</em> what was happening on Blood Moon Island, and yet you never did anything to stop it?”</p>
<p id="indent">“If it were my choice, Luna, I would’ve stopped their operations years ago. However, between my boss and the fact that it would require a literal army incursion, it was never feasible.”</p>
<p id="page-end">182</p>`
const ch17p4 = `<p id="page-start"> </p>
<p id="indent">“So you waited for Nazis to be the army that did it.”</p>
<p id="indent">“The Nazis attacked Blood Moon Island? That would explain the lack of airwaves.”</p>
<p id="indent">“We’re getting off topic. I need Freckles, and you need Slaphand out of the equation. Let’s team up, and we’ll watch each other’s backs.” I offer my hand in a handshake.</p>
<p id="indent">He turns to the door. “I already said, I can’t do it, kid. Go home, get some rest, and tell your boss Agent Ike took care of Slaphand. If he’s anyone important, he’ll have heard of me.”</p>
<p id="indent">“You know I can’t do that.” I unsheathe one of my knives and lower it to my side. “Last chance, Ike.”</p>
<p id="indent">“Oh, come on,” he mutters under his breath, leaving the lockpick in the door. He spins to face me, preparing his fists, an annoyed look on his face. “I don’t want to do this, Luna.”</p>
<p id="indent">“Then get out of my way. Slaphand is mine.”</p>
<p id="indent">He sighs. “I’ve gotta say, when it comes to stubborn kids, you’re pretty high up there, but you’re no Cog.”</p>
<p id="indent">“I have no idea what that means.”</p>
<p id="indent">“It means you have one second to put that knife away before I knock you unconscious and leave you in here until I’ve finished my mission.”</p>
<p id="indent">I charge at the agent, knife in hand. He dodges to my right and sends a hook, landing his blow on my arm. It hurts, but if I went down every time I took a punch like that, I wouldn’t be alive. I drop to the ground and sweep with my feet, catching his leg and throwing him off balance. Then, I reach up with my weapon, trying to stab him anywhere I can. He catches his footing and swerves away. </p>
<p id="indent">Using his momentum, he swings his whole body. His foot whizzes </p>
<p id="page-end">183</p>`
const ch17p5 = `<p id="page-start"> </p>
<p id="no-indent">within an inch of my face, and I duck instinctively. He seizes the opportunity to steady himself and sends a flurry of swings and chops.</p>
<p id="indent">The man obviously has practice at what he’s doing, unlike all of Slaphand’s henchmen I’ve fought. My skills, of which I have almost none, are vastly outmatched.</p>
<p id="indent">I manage to dodge a few of the hits, but my arms and chest bear the brunt of the damage. He sends me stumbling a few steps, giving me time to retrieve my second knife. If I can’t beat him with brute force, I’ll psyche him out with too many weapons.</p>
<p id="indent">“Two knives is a clever trick,” he says, smiling. It’s not even intimidating. Like his first, it feels genuine. He really doesn’t want to do this. So why won’t he let me work with him?</p>
<p id="indent">This time, I let him charge at me, and dodge in a similar fashion. His fist connects with one of the metal shelves, reverberating painfully. He shakes it off dramatically, and I take the chance to dive in at him.</p>
<p id="indent">Right as I’m in range, he kicks me, landing square on my chest. All the air in my lungs is ripped away as I flounder backwards, landing spine-first into another shelf. It rocks with the force, sending a few loose metal parts clattering to the ground. </p>
<p id="indent">“I won’t lie, you’re pretty good,” I say, panting. </p>
<p id="indent">“Years of practice,” he replies. “Too many, I’d say.”</p>
<p id="indent">“I don’t suppose you have any tips for me?”</p>
<p id="indent">“Depends. Are you gonna let me get rid of the big man alone?”</p>
<p id="indent">“Let me think about it… no.”</p>
<p id="indent">“Then no.”</p>
<p id="indent">He comes zigzagging at me, probably attempting to throw me off, and swipes at me with his elbow. I duck down, his six-foot frame at a height </p>
<p id="page-end">184</p>`
const ch17p6 = `<p id="page-start"> </p>
<p id="no-indent">disadvantage, and stab at his side. It connects, and—</p>
<p id="indent"><em>Ding.</em></p>
<p id="indent">The tip of the knife lodges itself into his jacket but refuses to go further. I stand back, shocked and confused.</p>
<p id="indent">“I’ve got tricks of my own,” he says, revealing metal armor plating with a smile.</p>
<p id="indent">Guess knives aren’t gonna be any good.</p>
<p id="indent">I drop the other knife and immediately grab one of my pistols, aiming it directly at his head. We both scoot away a bit, half the room in between us again. His face drops a little.</p>
<p id="indent">“A gun is a little out of character, isn’t it, Luna?”</p>
<p id="indent">“You don’t know me,” I answer. “You don’t know whether or not I’d use this on you.”</p>
<p id="indent">“Your hand is shaking. I have a pretty good idea.”</p>
<p id="indent">Dang it. I am shaking.</p>
<p id="indent">“Wait, don’t tell me this is your first time firing a gun.”</p>
<p id="indent">“Second, actually.”</p>
<p id="indent">“That’s crazy. Have you figured out how to aim when shooting?”</p>
<p id="indent">“Not exactly, but I have enough shots to make one count.”</p>
<p id="indent">“Well, if you’re gonna shoot me, might as well make it fast.”</p>
<p id="indent">He raises his hands in surrender, but his grin has returned. What could he possibly be smirking about right now?</p>
<p id="indent">“I think I heard noises coming from this room,” someone says on the other side of the door. We both turn to look, but my eyes are a lot bigger than his.</p>
<p id="indent">The sound of keys jingling is followed by the doorknob shaking, and the door eventually opens. A large goon stands in the frame, as wide-eyed </p>
<p id="page-end">185</p>`
const ch17p7 =`<p id="page-start"> </p>
<p id="no-indent">as I am. </p>
<p id="indent">“Hey there, pal,” Ike says, waving. “As you can see, we’re in the middle of something, so if you could pretend you didn’t walk in on this, that’d be–wait Luna don’t!”</p>
<p id="indent">I switch from aiming at Ike to the goon and blindly fire, a puff of smoke emitting from the business end of the gun. The bullet blasts through his shoulder, and he topples to the ground, yelling. My entire arm goes numb with the force, and the recoil nearly tosses the weapon out of my hand. </p>
<p id="indent">Oh my God. I just shot him.</p>
<p id="indent">“Oh my God. You just shot him!” Ike says, repeating my thought. He darts to my victim, crouching down.</p>
<p id="indent">“I, uh, I wasn’t thinking. I didn’t mean to.”</p>
<p id="indent">“Kid, we’re in serious trouble now. They’ve been alerted to our location. Leave while you can. I’m gonna try and stop Slaphand from escaping.”</p>
<p id="indent">“What? No. I’m going after him.” I level the gun back at him.</p>
<p id="indent">“Put it away, Luna. Please.”</p>
<p id="indent">“Why should I?”</p>
<p id="indent">“Well, for starters…” he trails off, hunched above the wounded man, and quickly rolls away, no longer in danger of my weapon.</p>
<p id="indent">What a sneaky move.</p>
<p id="indent">I shouldn’t have shot the man. I can’t believe I did that.</p>
<p id="indent">I pocket the gun, step around him, and chase Ike, who’s sprinting along the wall towards one of the unlabeled doors. </p>
<p id="indent">Why did I fire the gun? </p>
<p id="indent">I mean, he probably deserved it. He’s a bad guy. He works for the bad </p>
<p id="page-end">186</p>`
const ch17p8 = `<p id="page-start"> </p>
<p id="no-indent">men with bad plans. </p>
<p id="indent">He’s screaming and in pain. An alarm system sounds off, drowning him out. He’s a blood red siren, writhing on the floor.</p>
<p id="indent">Ike stops outside one of the doors, desperately shaking the handle. A few men slowly surround him, ready to attack. He gives up on the door and switches to them.</p>
<p id="indent">It’s a three-on-one battle, and he’s still somehow outperforming them. Watching him with his blinding speed, it almost makes me wonder if he was going easy on me. I’ve barely met the man, but it seems in character.</p>
<p id="indent">A henchman of my own charges at me, and I bounce out of the way. He stops and swings in a full turn, like some sort of tornado. His fist misses, and while he faces away from me, I kick at his back. Forcing him into and over a couch before crashing down on a glass coffee table. </p>
<p id="indent">If he gets up, I don’t notice, because I continue towards Ike and his entourage. Two of the original three men are taken care of, but three more have joined in, and it looks like Ike might be in for it.</p>
<p id="indent">Should I help him? </p>
<p id="indent">One of the four spots me and chooses me as their target instead. The choice has been made for me.</p>
<p id="indent">He swings at the level of my head, so I duck and land a hit on his stomach before kicking off the ground and sending my right fist into his jaw from below. The knock clearly does some damage, and he crumbles to the floor, unconscious.</p>
<p id="indent">Ike’s gotten rid of one of his new friends, and the other two are a little worse for wear. For what it’s worth, he’s suffering some damage, too. Better to have them wear him down than me.</p>
<p id="indent">I’m approached by a third man from behind, who wraps his beefy arm </p>
<p id="page-end">187</p>`
const ch17p9 = `<p id="page-start"> </p>
<p id="no-indent">around my neck and lifts me into the air. I struggle against his force, pointlessly kicking and scratching.</p>
<p id="indent">The blackness of oxygen deprivation tickles the corners of my vision dangerously fast. At this rate, I’ll be done within a minute.</p>
<p id="indent">Ike notices and dips out of his current fight to come blasting at my captor. He sends a blow to the man’s head, and as he’s still reacting, swipes his legs from under him. The man lets go of me in response, crashing to the ground with a hard thud. </p>
<p id="indent">I’m mad. With the man still lying on the ground, I pound on him, smashing my fist into his head and chest. Ike pulls me off after a moment, and I whip around to go for him, too.</p>
<p id="indent">He dodges and redirects my attacks using his forearms. Then, he sweeps my feet, and I follow the beefy man’s example and am sent to the floor.</p>
<p id="indent">“Fighting me isn’t gonna get you anywhere, Luna. Go home. Please.”</p>
<p id="indent">“I’ve gotta get my cat.” My hostility quivers with my lip. This is all too much. I feel battered and bruised, and my lungs are on fire.</p>
<p id="indent">Another two minutes pass of Ike tactfully tormenting the opposition before the last of the excessive guard team is disposed of. He breathes heavily, blood smeared in a few places, and stands upright. </p>
<p id="indent">“Good teamwork, kid, for what it’s worth,” he says, dramatically wiping his lip with his thumb. “All that’s left is the big guy. If you leave now, I promise to find out what he’s done with your cat.”</p>
<p id="indent">“I’m not leaving,” I say, returning to my feet shakily. “This man has caused me too much pain. I’m gonna make sure he gets to feel the same pain he gave to me.”</p>
<p id="indent">The sound of screeching tires fills the room. We watch in horror as </p>
<p id="page-end">188</p>`
const ch17p10 = `<p id="page-start"> </p>
<p id="no-indent">some sort of armored vehicle comes barreling through the front entrance of the building and parks in the middle of the store.</p>
<p id="indent">“Oh, come on,” Ike says, raising his fists again. “I’ll take all y’all on if I have to, you kno—”</p>
<p id="indent">The unlabeled door behind him crashes off its hinges, smacking directly into him and throwing him ten feet into the air. He hits the ground, unmoving. Slaphand runs from room and makes a break for the car.</p>
<p id="indent">“No!” I yell, running after him.</p>
<p id="indent">He turns to give me an evil smile as he hops onto the side of the vehicle, and pounds twice on the side. The car instantly kicks into reverse, speeding out of the building as quickly as it appeared.</p>
<p id="indent">I follow by foot briefly, but there’s no way I’d be able to catch up. They’ve escaped. Slaphand escaped. Again.</p>
<p id="indent">I grab my two guns from their spots in my pockets. My carelessness has once again gotten the better of me. I can’t believe I let this happen.</p>
<p id="indent">I throw them both against the wall in anger.</p>
<p id="indent">I’m my own worst enemy.</p>
<p id="page-end">189</p>`
const ch17p11 = ``
const ch17p12 = ``
const ch17p13 = ``
const ch17p14 = ``
const ch17p15 = ``
const ch17p16 = ``
const ch17p17 = ``
const ch17p18 = ``
const ch17 = [ch17p1, ch17p2, ch17p3, ch17p4, ch17p5, ch17p6, ch17p7, ch17p8, ch17p9, ch17p10, ch17p11, ch17p12, ch17p13, ch17p14, ch17p15, ch17p16, ch17p17, ch17p18]

const ch18p1 =`<p id="page-start"> </p>
<p id="chapter-header">Chapter 18</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">The Dixie cup in my hand slowly fills with water from the dispenser inside of Slaphand’s office. This is my third cup since the man escaped in an armored car. Filling it is a menial task compared to what I was hoping to do tonight. </p>
<p id="indent">I down the water again, finally quenched, and press the tab to fill it one last time. Then I turn to face Agent Ike. </p>
<p id="indent">Immediately following the events of the battle, I tied him to a rotating chair with my climbing rope. It wasn’t easy lugging his unconscious body through the building while making sure he didn’t stir, but apparently, I didn’t have to worry. He didn’t move once. </p>
<p id="page-end">190</p>`
const ch18p2 = `<p id="page-start"> </p>
<p id="indent">I look at the cup dramatically and splash its contents onto the man’s face. He gasps awake, sputtering and spitting. “What happened?”</p>
<p id="indent">“I’ll tell you what happened, Mr. Agent Ike,” I say. “I lost Slaphand because of you, and therefore, I lost my cat, too. If you weren’t so busy avoiding being a grown man and working with a seventeen-year-old girl, maybe he wouldn’t have escaped.”</p>
<p id="indent">“Wait, wait, wait. You’re blaming me for him escaping? I’m not the one who fired the gun off and alerted everyone in a fifteen-mile radius to our position!”</p>
<p id="indent">He tries to squirm but ends up spinning himself in a circle. </p>
<p id="indent">“I made this pretty tight,” I say, spinning him some more. “I knew I was no match for you when you came to, and I desperately need whatever information you have, so I think we’ll cut to the chase. If you don’t tell me where Slaphand’s going next, I’m going to kill you.”</p>
<p id="indent">For the first time since our meeting, fear flashes across his face. “Let’s think this over a little, Luna. I understand you’re upset about losing your cat. It’s a hard thing to lose someone you love, and from the sounds of it, you’ve had to do that a lot.”</p>
<p id="indent">“That’d be correct.”</p>
<p id="indent">“I have people I love, too, and people that love me. I have a daughter and son, a wife, and there’s a girl out there your age hunting Nazis that I plan to adopt soon. I respect your drive and enthusiasm, Luna, and I understand you want revenge, but I don’t think you want to do the same thing they’ve done to you.”</p>
<p id="indent">He’s right, isn’t he? I really wish he wasn’t. But he’s one of the good guys, and they’ve been few and far between lately.</p>
<p id="indent">“Okay, fine. But you can’t run away or knock me out as soon as I </p>
<p id="page-end">191</p>`
const ch18p3 =`<p id="page-start"> </p>
<p id="no-indent">untie you.”</p>
<p id="indent">“Sounds fair to me. Tell you what, I’m willing to admit we both sort of fudged this, and I want to offer you a deal. If you’re still on board with it, I’ll work with you and together we can go for Slaphand.”</p>
<p id="indent">“Yeah, alright.”</p>
<p id="indent">“You’ve gotta promise me you’ll try to listen if I have something to say, though.”</p>
<p id="indent">“Don’t push your luck, Agent Ike. You’ve already got your deal. Don’t act like you’re the boss here.”</p>
<p id="indent">“Understood. And please, just Ike. If you’re gonna add the agent, at least make it ‘Secret Agent Ike.’ I worked hard for that title.”</p>
<p id="indent">“Who even are you?” I ask, cutting the rope.</p>
<p id="indent">“Secret Agent Ike, at your service. I work directly for Jimmy Carter.”</p>
<p id="indent">“And who is Jimmy Carter?”</p>
<p id="indent">“Oh, he’s the president of the United States. Yeah, I’m American, if you couldn’t tell.”</p>
<p id="indent">“I could tell.”</p>
<p id="indent">“Well, good.”</p>
<p id="indent">“Why are you here chasing after Bijabers? Aren’t there issues in America and an entire global war going on?”</p>
<p id="indent">“I am still very much involved in the war. I’m helping direct a group of kids scouting off in the Pacific Ocean who are enthusiastic about wanting to kill Hitler, and I’m at the top of the feeding order for a lot of the intelligence operations against both the Russian and Nazi armies. As for Bijabers and the crew, they originated in America, and I’m following where the wind blows.”</p>
<p id="indent">“How do you have time for all of this?”</p>
<p id="page-end">192</p>`
const ch18p4 = `<p id="page-start"> </p>
<p id="indent">“Ah, if I told you that, what would be the point of me being a ‘secret’ agent?”</p>
<p id="indent">He gives me another one of his congenial smiles. The man has a strangely laid-back personality, considering our situation. It makes me irrationally annoyed. “Alright, here’s the deal, kiddo. I want to—”</p>
<p id="indent">“Actually, first off, don’t call me ‘kiddo’ or ‘kid’ or whatever. I get that I am legally a child, but I’m tired of it. It’s a derogatory term for somebody who’s fended for herself for years.”</p>
<p id="indent">“Loud and clear. I’ll assume ‘girly’ is off the table, too.”</p>
<p id="indent">“For sure.”</p>
<p id="indent">“Okay. Here’s the deal, Luna. I want to get us moving right away, because there’s no telling how far he’s gotten or how long it is before he tries to flee the country. Now that he knows I’m in town, he’ll scurry underground lickety-split.”</p>
<p id="indent">“So what do we do?”</p>
<p id="indent">“We should begin with seeing what we can figure out while we’re still here. Search the rooms, and if you spot any addresses, we’ll do a cross-examination with a potential list I have of my own.”</p>
<p id="indent">“Sounds like a plan.”</p>
<p id="indent">Having a partner who’s willing to help is… strange. No offense to Mary or Freckles, but Ike has a sense of control and strategizing that I don’t think either of them could’ve had. Freckles is good, no doubt, but nowhere near as tactile.</p>
<p id="indent">But at least I liked Mary and Freckles. Well, I still like both of them. Even if I am directly responsible for the death of one of them and the kidnapping of the other.</p>
<p id="indent">I start the search by returning to the storage room where we’d </p>
<p id="page-end">193</p>`
const ch18p5 = `<p id="page-start"> </p>
<p id="no-indent">originally met. The man I’d shot is gone, meaning he was either carried by someone else when nobody was looking or walked away in the same manner. I might never know if I actually killed him.</p>
<p id="indent">A shiver runs down my spine. Would I have been able to live with myself if I’d killed someone? Not only that, but if it were a purely heat-of-the-moment shot out of fear?</p>
<p id="indent">And maybe he did deserve it, and maybe I was justified in doing it, but that doesn’t change the fact that a man could’ve died by my hands tonight. </p>
<p id="indent">I shake the thought from my head. I have to focus on finding where Slaphand is going.</p>
<p id="indent">Using the same strategy I’d used previously, I swipe one of my knives off the floor and cut into some boxes in the storage room. Unsurprisingly, it’s more of the same-old stuff that the other building had in stock. None of the metal parts make very much sense in a store like this, but the store’s a front for their true business, anyway.</p>
<p id="indent">Next, I sweep the bathrooms, but there’s nothing of note inside. It’s funny that the bathroom is the sole sense of normalcy.</p>
<p id="indent">Out in the main area, Ike aggressively kicks against one of the unmarked doors, attempting to break the deadbolt keeping it shut. I stand and watch, counting the blows it takes to send it swinging open.</p>
<p id="indent">Eleven.</p>
<p id="indent">The door bursts open, revealing a room much more akin to a massage parlor than a furniture and appliance store. “This is certainly new,” he says, noting the dark red wallpaper.</p>
<p id="indent">“What do you think the room is for?” I ask, stepping inside. There’s a dark mahogany desk with office supplies sitting on top, a few bookshelves, and a globe with thumbtacks in it.</p>
<p id="page-end">194</p>`
const ch18p6 = `<p id="page-start"> </p>
<p id="indent">“If I didn’t know any better, I’d say it was a study.”</p>
<p id="indent">“What if you did know better?”</p>
<p id="indent">“Then I’d say it was where he kept all of his information.” Ike moves to a book on the bookshelf, pulls it out, and opens it. He flips to the end, where a sticky note marks a page. “They’re heading to the Carmsborough National Museum.”</p>
<p id="indent">“The museum? Why do they want to go there? And also, how did you pick the book that says exactly that?”</p>
<p id="indent">“Sounds like they’ve been doing a lot of underhanded trading there. Buying and auctioning off stolen artwork and items. Says here lots of art, a bounty of gold coins found on board an old airship when it crashed, and lots of antiquities.”</p>
<p id="indent">“Never heard of that last word, but I’ve definitely seen some of the art and gold coins. So they’re in Carmsborough because they’re laundering money?”</p>
<p id="indent">He closes the book dramatically with one hand. “I guess. At least, Slaphand is. He’s always been more of a fine-dining kind of guy.”</p>
<p id="indent">“So why were they building the Plasmarizer?”</p>
<p id="indent">“The what now?”</p>
<p id="indent">“The Plasmarizer. It was a weapon on board one of their cloudships that had the power to destroy the <em>Überall</em>, whatever that is. They were mining resources for it on Blood Moon Island.”</p>
<p id="indent">“Sounds fake to me. Nothing we’ve encountered has been able to penetrate the <em>Überall</em>’s shields, save maybe a nuclear blast. That’s one big frickin’ ship, pardon my French.”</p>
<p id="indent">“Hmm. Anyway, I’m gonna go update my boss. I’ll be sure to keep your name out of it, just in case.”</p>
<p id="page-end">195</p>`
const ch18p7 =`<p id="page-start"> </p>
<p id="indent">“Woah, hold on there, Luna. We don’t have time for formalities like that. We should’ve been moving an hour ago. With situations like this, you have to improvise and be on the move and worry about the paperwork later.”</p>
<p id="indent">“Okay? So what do we do?”</p>
<p id="indent">“I’ll pull the ride up real quick. Have you ever been on a motorcycle?”</p>
<p id="indent">“A what?”</p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="indent">I’d be lying if I said I wasn’t totally enamored by the motorcycle. I’ve never seen anything like it. It’s unbelievably loud and a bit dangerous, but the rush of the wind whipping against my body as we cruise through the city makes me forget all the stress weighing me down. I feel free.</p>
<p id="indent">Luckily for me, he had a spare helmet in a little storage bag, but in order to stay on, I have to loop my arms around his chest. This man, who has done nothing but frustrate and contradict me, is currently the only thing preventing me from hitting the pavement and cracking my head open. What a cruel irony.</p>
<p id="indent">The night air is heavy as we weave across the city, unhindered by what little traffic there is. I’m not sure what time it is, but midnight’s gotta be fairly close.</p>
<p id="indent">“What are your plans for when Slaphand’s defeated?” I ask Ike. Between the breeze and the humming of the motorcycle’s engine, I’m half-yelling. </p>
<p id="indent">“After he’s out of the equation, I’m bringing the heat on Bijabers if I can. Hopefully the war doesn’t get too messy, but I’m not holding my breath.”</p>
<p id="page-end">196</p>`
const ch18p8 = `<p id="page-start"> </p>
<p id="indent">“I think I might become some sort of vigilante who helps those in need,” I say. “There’s a lot of people that don’t get help, and Orion and the Clockwork certainly aren’t doing it.”</p>
<p id="indent">“Sounds a little harsh to me. He’s been busy keeping the Nazis away from mainland Carmsborough. Their ship takedown count rivals that of entire countries during the original Steam War.”</p>
<p id="indent">“Nazis aren’t the only problem here, Ike.”</p>
<p id="indent">“That’s fair. I don’t have enough experience with Carmsborough to weigh in on this situation. We have plenty of our own problems in America.”</p>
<p id="indent">“I doubt you have Carmsborough problems, though.”</p>
<p id="indent">“Like what?”</p>
<p id="indent">“Well, racism, for starters.”</p>
<p id="indent">Ike bursts out laughing, and doesn’t stop until we park a block away from the museum. </p>
<p id="indent">“I get you’re not from America, but that’s like the first thing anyone learns. There are plenty of racist old men that don’t go away.”</p>
<p id="indent">“What about homelessness? Is that a big issue?”</p>
<p id="indent">“Oh, for sure. You name a European problem, and I guarantee it’s amplified in America.”</p>
<p id="indent">We remove our helmets in silence. I don’t want to learn any more.</p>
<p id="indent">The two of us walk to the museum and stop behind a corner.</p>
<p id="indent">“Cameras,” we both notice. </p>
<p id="indent">“I’ve learned that lesson a few too many times,” I say, recalling my previous adventures.</p>
<p id="indent">“It’s a rookie mistake, but sounds like you’re adapting pretty quickly. I think we should take the lower exit into the maintenance tunnels. They’ll </p>
<p id="page-end">197</p>`
const ch18p9 = `<p id="page-start"> </p>
<p id="no-indent">lead into the basement, which will give us the advantage we need to get inside. They won’t have had any warning by the time we’re beating them up.”</p>
<p id="indent">“Won’t they have cameras on the inside, too?”</p>
<p id="indent">“Yeah, but this is a makeshift plan for both parties. They’ll be watching the cameras, but nobody’s settled enough to be truly ready for a second attack tonight. His suit count is so low, we could honestly ignore a good chunk of them.”</p>
<p id="indent">“Lots of good news. Any bad?”</p>
<p id="indent">“Neither of us has the layout or where Slaphand is, so it might be a hot minute before we get to him.”</p>
<p id="indent">“Works for me.”</p>
<p id="indent">“Cool. I’ll pave a path to the maintenance tunnels. Follow me.”</p>
<p id="indent">Ike waits for us to be hidden from the nearest camera before sprinting across the cobblestone clearing on his tiptoes, muting the echoes against the building walls. I chase after him, doing the same, although a lot slower.</p>
<p id="indent">Two guards step out of the maintenance tunnel entrance, holding heavy-duty rifles of some sort. Ike notices the look on my face and holds out his hands, trying to reassure me. He points to himself and one of the guards, then me and the other. His idea is clear.</p>
<p id="indent">We sneak over to our respective targets, stand behind them, and, at the same time, wrap our arms around their necks. It feels weird to be on the giving end of this treatment. Almost dirty.</p>
<p id="indent">I kind of like it.</p>
<p id="indent">Neither of them have much of a chance to do anything but struggle, and within a minute, both are against the wall, unconscious.</p>
<p id="indent">We enter the tunnel system, lit scarcely by incandescent bulbs. The air </p>
<p id="page-end">198</p>`
const ch18p10 =`<p id="page-start"> </p>
<p id="no-indent">is moist and cold, which is to say uncomfortable.</p>
<p id="indent">“All we have to do is find a way to the main floor from here, and we’re golden,” Ike whispers. The two of us search the dim area, discovering doors with heavy locks on the outside. A few of them still have the keys in them.</p>
<p id="indent">“How about you check this room, and I’ll check the one down the hall,” I suggest, pointing at a room with a key still in the lock. </p>
<p id="indent">“Don’t get into trouble without me,” he says, stepping inside.</p>
<p id="indent">“No promises,” I respond.</p>
<p id="indent">As soon as he steps fully inside, I close the door shut behind him and lock it. His fists pound against the dark wood, rattling the door, but it doesn’t budge.</p>
<p id="indent">“Let me out, Luna!” he yells.</p>
<p id="indent">“Sorry, Ike. I’ll do it once I’ve rescued Freckles.”</p>
<p id="indent">I walk away from the door, tossing the key off to the side. It’s time to get rid of Slaphand. For real this time.</p>
<p id="page-end">199</p>`
const ch18p11 = ``
const ch18p12 = ``
const ch18p13 = ``
const ch18p14 = ``
const ch18p15 = ``
const ch18p16 = ``
const ch18p17 = ``
const ch18p18 = ``
const ch18 = [ch18p1, ch18p2, ch18p3, ch18p4, ch18p5, ch18p6, ch18p7, ch18p8, ch18p9, ch18p10, ch18p11, ch18p12, ch18p13, ch18p14, ch18p15, ch18p16, ch18p17, ch18p18]

const ch19p1 =`<p id="page-start"> </p>
<p id="chapter-header">Chapter 19</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Do I feel guilty leaving Ike locked in the basement of a looming museum all alone, betraying whatever bond we’d been building?</p>
<p id="indent">Yeah, a little. But I was never gonna let him be the one to take Slaphand down. Whatever Ike has against him, I’m sure it’s not as powerful as my own personal vendetta. </p>
<p id="indent">This man has been responsible for so much pain in my life. So much loss, agony, heartbreak, and hardship. Being thrown onto the street when Mom died was his fault. Suffering on Blood Moon Island was his fault. Having Freckles torn from my arms was his fault. Mary’s death is as much his fault as my own, seeing as he’s the one that put us there in the first </p>
<p id="page-end">200</p>`
const ch19p2 = `<p id="page-start"> </p>
<p id="no-indent">place.</p>
<p id="indent">And I intend to make sure he hears my complaints.</p>
<p id="indent">I haven’t decided how I’m gonna do it yet. I’d re-pocketed both knives and pistols while Ike was fetching the motorcycle, but I honestly think I’d accept drowning him in the freezing ocean, like he nearly did to me during our first encounter.</p>
<p id="indent">But I can’t get cocky. If I’ve learned anything, it’s that he’s strong and he’s slippery. He’d just as quickly crush me like a grape as he would run away.</p>
<p id="indent">Not this time. Not today.</p>
<p id="indent">A nearby clock tower chimes its bells, signaling the arrival of midnight. I’m not even sure what day that makes this anymore. The twenty-eighth? The twenty-ninth? Either way, Bijabers and the citizens of Carmsborough will remember it as the day Slaphand was defeated and the streets were safer.</p>
<p id="indent">I check a few more doors for the staircase to the main floor and find it on my third attempt. It isn’t even locked. What’s in the locked rooms that are more important than the rest of the museum? </p>
<p id="indent">No time to focus on that.</p>
<p id="indent">The stairs are a short but suspenseful climb to the granite- and marble-floored lobby of the museum. Let’s hope Ike was right and that we don’t need to worry about the cameras. I’d rather not be shot halfway across the museum because I was spotted on tape.</p>
<p id="indent">My steps echo against the wide halls, clacking satisfyingly on the rock flooring. I pass through an Ancient Rome exhibit featuring wax figures with rectangular shields and pointed metal spears. A few empty boxes line the edges of the displays, waiting to be filled.</p>
<p id="page-end">201</p>`
const ch19p3 = `<p id="page-start"> </p>
<p id="indent">Or were recently emptied. I’m not sure.</p>
<p id="indent">I move on, and sure enough, there are more boxes in this exhibit, this time in various stages of being loaded or unloaded. If I had to guess, they’re stealing as much as they can. It brings an extra eeriness to the already dismal museum in the dead of night. </p>
<p id="indent">I walk into the third exhibit, but stop immediately, adrenaline sparking at the tips of my fingers. One of Slaphand’s henchmen is staring at me, but not making any notion of attacking. </p>
<p id="indent">“Why aren’t you coming after me?” I ask, clenching and unclenching my fists.</p>
<p id="indent">“We have direct orders not to.”</p>
<p id="indent">“What?”</p>
<p id="indent">“He wants you to meet him in the Industrial Revolution exhibit.”</p>
<p id="indent">The man points in the direction I’m headed. I move that way, confused, but keep my eyes on him until he’s out of sight. That was the weirdest interaction I think I’ve ever had.</p>
<p id="indent">I come face to face with two more of his guards in the next exhibit, focused on the dinosaurs of Carmsborough, of which there were very few. They also stare, cross-armed, as I walk past. This is beginning to feel more and more like a trap. Do I care? If I knew I was taking a one-way trip to trap town, would I still keep walking?</p>
<p id="indent">At last, I arrive at the Industrial Revolution exhibit. Being one of the most impactful events in history for the country, it has its own mini museum inside of the actual museum to showcase the things that happened.</p>
<p id="indent">There’s lots of train-related memorabilia, but the most prominent thing in the room is Carmsborough’s first airship. Or, rather, parts of it, </p>
<p id="page-end">202</p>`
const ch19p4 = `<p id="page-start"> </p>
<p id="no-indent">since it burst into flames twenty minutes after its second launch. </p>
<p id="indent">Too bad we’ve never moved on from the era. Imagine the advances we could’ve made in technology. Or humanity.</p>
<p id="indent">“You know, the first cable car company to pave the way through Carmsborough was my great-great-great-grandfather’s,” Slaphand’s booming voice says from behind one of the displays, featuring a billowing train. “The Slaphand family name has always had deep ties within our country.”</p>
<p id="indent">Every muscle in my body tenses, and I stop in place. A chill runs up my spine. “Oh, that’s cute. Is it story time now?”</p>
<p id="indent">“Luna, you’ve been a surprising thorn in my side for the past week. At first, I didn’t understand it. A homeless girl somehow gets the key to our Plasmarizer, sets it off on a Commerce District boardwalk, and destroys a second Plasmarizer on Blood Moon Island. I had half a mind to kill you on the spot.”</p>
<p id="indent">“I was wondering why you hadn’t, to be honest.”</p>
<p id="indent">“There was something special about you, Luna. I could tell you had potential deep inside you waiting to be unlocked, but I couldn’t tell why or how. Given time, I might have figured it out, but our time was cut short by the war, I’m afraid.</p>
<p id="indent">“Still, the thought wouldn’t leave my mind. This Luna kid had bested five of my guards, and I knew nothing. So I went digging, and I found some old apartment records. Miss Felicity Wells and her daughter Luna were evicted five years ago for being unwilling and unable to pay their rent.”</p>
<p id="indent">“You keep my mother’s name out of your stupid, disgusting mouth. I lost my home and my childhood because of you.”</p>
<p id="page-end">203</p>`
const ch19p5 = `<p id="page-start"> </p>
<p id="indent">“Ah, yes, and then you were homeless. But that’s not the end of the story, is it, Luna? You spent five years working for a man named Chad at his scrapyard. How ironic that for five years, you were really working for <em>me</em>.”</p>
<p id="indent">“What?”</p>
<p id="indent">“That’s what I said at first, too. A cruel but funny fate. Chad’s scrapyard reports directly to Blood Moon Island, providing a lot of the raw material we need for the Plasmarizer. If we’re being honest, you were destroying what you’d been helping create for five years.”</p>
<p id="indent">“You’re lying.”</p>
<p id="indent">“I’ll admit, I was a little shocked to hear you were still alive and back to disrupting things. When you hit CB Moving, I knew you’d eventually connect the dots. Your rage against me would no doubt increase, seeing as somehow I’ve been the oppressor of your story in every way. The only time I was concerned, though, was when Agent Ike had shown up and the two of you were working as a team. But I had a hunch that your personalities would clash, and it appears I’m right again.</p>
<p id="indent">“So, I’m offering you a chance at the thing you crave most. A battle with me, the most fearsome gauntlet of Carmsborough. My men have all been ordered to ignore us, even if you come close to hurting me.”</p>
<p id="indent">“I’m tired of your monologue, I’m tired of your lies, and I’m tired of your taunting. Where’s my cat, Slaphand?” </p>
<p id="indent">“Best me in a one-on-one, and maybe I’ll tell.”</p>
<p id="indent">“Good enough for me.”</p>
<p id="indent">I rush directly at him, the fire in my eyes burning bright. Both knives end up unsheathed, jutting out from my fists like mantis hands. </p>
<p id="indent">Realistically, I know I can’t brute-force the towering man. He’s much </p>
<p id="page-end">204</p>`
const ch19p6 = `<p id="page-start"> </p>
<p id="no-indent">too strong and skilled. His build, however, is his weakness. He moves at a much slower pace than I do, meaning as long as I remain agile, he’ll have no chance to defend against short guerilla attacks.</p>
<p id="indent">I jab at him with one of my knives, nearly stabbing him in the side, but he smacks me with his lumbering arm. It doesn’t do a lot, but for a moment, he gets the upper hand and barrels towards me.</p>
<p id="indent">With a second left to spare, I lunge away, rolling behind a coal mine display, and rebound to plunge my knives into his back. He also dodges, forcing me to land a lot later than I expect to, my knees hitting the ground hard.</p>
<p id="indent">Remembering what Freckles and I did during our first encounter with the mob boss, I hurl one of my knives, nearly connecting with the same shoulder as before, but the blunt end smacks against him, doing no actual damage. </p>
<p id="indent">Now that I have a free hand, I reveal one of my guns and point it at him. He smiles menacingly and runs directly at me, ruining my chances of a clean, unshaking shot. Naturally, I move out of the way.</p>
<p id="indent">If his goal is to keep me on my toes and frazzled, it’s working. </p>
<p id="indent">These battles are getting awful repetitive. Let’s say we shake it up.</p>
<p id="indent">Rather than try the knives or pistols, I dart over to a stand showcasing different buyable merchandise, like a pop-up gift shop, and take inventory. A lot of die-cast metal trains, that’s for sure.</p>
<p id="indent">I grab three and hurl them at Slaphand, most hitting or coming close to the admittedly large target. They make hefty smacks against his body and floor.</p>
<p id="indent">He comes my way, angrier with each throw, blocking a few with his pizza-sized hands along the way. I duck away when he gets within </p>
<p id="page-end">205</p>`
const ch19p7 = `<p id="page-start"> </p>
<p id="no-indent">swinging distance, making sure I have a few extra trains to lob, and awkwardly run back to the dinosaur exhibit.</p>
<p id="indent">“You’re really pissing me off, kid,” he yells, chasing me.</p>
<p id="indent">“Oh, am I? I’m terribly sorry. It certainly wasn’t my intention.” I throw another train blindly behind me, which smacks him in the face. He joins me in the room, and we have a staredown in the exhibit on either side of a massive Tyrannosaurus display.</p>
<p id="indent">He moves to loop around to my side, but I walk the opposite way at the same pace. The two guards are still standing in the room, watching their boss slowly get more frustrated by my childish counter.</p>
<p id="indent">Childish. I hate to say it, but that’s what it is. He can’t get to me if I move at the same pace. If everyone thinks I’m a child, I might as well stoop to their expectations.</p>
<p id="indent">“What’s the matter, Slappy Boy? Scared of the big bad dinosaur in the middle of the room?”</p>
<p id="indent">“Those dinosaur bones are expensive!” he replies, infuriated by my taunting game.</p>
<p id="indent">“Oh, they are?”</p>
<p id="indent">I pull on one of the leg bones of the prehistoric monster, and the whole thing shakes. He retreats a little.</p>
<p id="indent">“Watch out, Handy, it’s gonna eat you!”</p>
<p id="indent">“Knock it off!” He jumps onto the display and breaks a tailbone off, revealing a metal rod through the inside, before launching it at me like a javelin. It travels incredibly fast, but lands way off to my left. </p>
<p id="indent">I pull harder on the dinosaur, and the top wobbles dangerously. Slaphand ducks, and I use the chance to run into an offshoot room, this one showcasing marine life. The only things I could possibly use to my </p>
<p id="page-end">206</p>`
const ch19p8 = `<p id="page-start"> </p>
<p id="no-indent">advantage here are stuffed animals. There aren’t even any fish tanks for me to smash open.</p>
<p id="indent">His heavy footsteps pound on the floor behind me as he runs into the room. Thinking hastily, I knock the cart of stuffed animals down and bound away to the lobby. They do almost nothing to slow him, and he follows me to the front entrance.</p>
<p id="indent">Outside, a group of men are walking by the windows, carrying barrels branded with a bright red band. As much as I would like to question it, there’s no time. I whip my knife back out, ready to swing again, but Slaphand attacks first, forcing the air from my lungs with a wound-up punch straight to my stomach. I’m launched off the ground and into the Ancient Rome exhibit, sliding along the floor. </p>
<p id="indent">As I stagger to my feet, he lumbers over and grabs me by my neck, lifting me into the air. His hand squeezes a little, but with nowhere near as much force as I know he has in him.</p>
<p id="indent">“I should’ve done this when I had you in my hands on the docks. I’m going to slowly drain the life from your snotty little brat body, and then I’ll watch it explode with the rest of this building.”</p>
<p id="indent">“Bad idea,” Ike yells, jumping off the floor and landing his foot on Slaphand’s face. The large man lets go of me in shock and pain and swings his gargantuan arm at the secret agent.</p>
<p id="indent">“Ike?!” Slaphand and I both say, equally surprised by his return.</p>
<p id="indent">“You’re a truly awful teammate,” he says to me, glaring. </p>
<p id="indent">“And you need to keep your nose out of my business.”</p>
<p id="indent">“I couldn’t agree more,” Slaphand says. “Guards! Get rid of these two. I want them dead!”</p>
<p id="indent">Four men immediately spring into action, making advances on the two </p>
<p id="page-end">207</p>`
const ch19p9 = `<p id="page-start"> </p>
<p id="no-indent">of us. I’ve got one and Ike has the rest, but they’re no match for either of us. Mine punches out sloppily, and I use the knife still in my hand to cut his upper arm. He winces and yelps, hesitating enough to give me a chance to kick him into the wall. Ike handles his with a little more martial arts and fist-knocking than I do, and we turn to hunt for Slaphand.</p>
<p id="indent">“He’s getting away again!” I yell. “This wouldn’t have happened if you’d have stayed out of this!”</p>
<p id="indent">“You would be dead if I’d have stayed out of this! Go find him! We’ll split up!”</p>
<p id="indent">I run into the Ancient Rome exhibit, spot my prey all the way down in industrial, and follow suit.</p>
<p id="indent">“Get back here, you fumbling lard!”</p>
<p id="indent">He turns the corner, carrying a pistol of his own, and points it at me. The blood in my cheeks flushes away. Two guards approach from behind as well, ready to do their job. </p>
<p id="indent">Ike appears in the same doorway as Slaphand and knocks the pistol out of his hands. They begin fighting, and I turn to face the guards. We trade a few blows, and I realize I need the advantage in a different way. Across the room, I spot the tailbone of the T-Rex laying on the ground.</p>
<p id="indent">I speed to it, pick it up, and use it as a club to ward off the two goons. Six or seven good hits later, they fall to the ground, bloodied and bruised.</p>
<p id="indent">The Ike versus Slaphand fight is in an equally matched stalemate, with both of them lashing quickly and violently. Part of me almost doesn’t want to interrupt, but this is still my only chance at getting Slaphand. I lob the tailbone at the large man, and it lands halfway between us. The two of them both lock eyes with me for a moment, and then run this way. Neither are happy, but at least the one probably won’t attempt to kill me.</p>
<p id="page-end">208</p>`
const ch19p10 = `<p id="page-start"> </p>
<p id="indent">All three of us are in the dinosaur exhibit, and Slaphand kicks Ike against the T-Rex. It rattles dangerously, but the metal rods holding it together seem to be doing their job well. </p>
<p id="indent">What can I do to help? I scan the area for something worthwhile. There’s nothing left to throw in here, but there are plush animals that could be used for a very minor distraction in the aquatic exhibit, toy trains in the industrial direction, and…</p>
<p id="indent">Spears. The wax models are holding spears in Ancient Rome.</p>
<p id="indent">I tug a spear free from one of the models’ hands and feel its weight in my own. If I get a good running distance, this thing could do some serious damage.</p>
<p id="indent">But if Slaphand gets ahold of it, it might be game over.</p>
<p id="indent">But my pistols won’t do any good, and I’m too afraid I’d shoot Ike if I used one of my pistols.</p>
<p id="indent">So, spear it is.</p>
<p id="indent">I peek around the corner, hoping to grab Ike’s attention, and when he notices me, I motion for him to go to the Industrial Revolution area. He nods slightly and backflips away from Slaphand’s grasp, leading him to the next spot.</p>
<p id="indent">With both of them turned away, I charge as fast as I physically can while carrying an iron-tipped wooden spear a foot longer than me. I yell, the sound a lot more intimidating than any I’ve ever made. </p>
<p id="indent">They both swivel to watch me running right at them, but for Slaphand, it’s too late. By the time he’s fully turned, the spear is lodged deep into the same shoulder Freckles had stabbed less than a week ago.</p>
<p id="indent-adjustment-more">He screams in agony. The tip of the spear is poking out the other end of his shirt, and a pool of blood is dripping from the entry and exit points. </p>
<p id="page-end">209</p>`
const ch19p11 = `<p id="page-start"> </p>
<p id="no-indent">Ike leaps off the ground and does another midair kick to his back, sending the spear further in. </p>
<p id="indent">“Light this place up!” Slaphand yells. “Now!”</p>
<p id="indent">“Yes, sir!” a voice calls from somewhere inside the building. Ike perks his head and goes to hunt for its owner.</p>
<p id="indent">I let go of the spear and retrieve one of my pistols, leveling it with his head. “You have six seconds before I blast your brain out of your noggin. Tell me where my cat is.”</p>
<p id="indent">He grinds his teeth. “He’ll be in the Agriculture District. But you’ll never get the chance to save him.”</p>
<p id="indent">A series of earth-shattering blasts fill the room, shaking and cracking the smooth rocky floor beneath us. A loud splitting noise comes from above. I look up to see the ceiling caving in on us.</p>
<p id="indent">He stands, breaks the wooden handle off the spear, and swings at my head. It connects with a loud crack, and black spots fill my vision. I lose grip on my pistol as I tumble to the ground, dazed.</p>
<p id="indent">In my foggy, fuzzy vision, I watch as he dashes away, and I scramble to my feet. We’re not playing this game again. This is my last chance at getting him.</p>
<p id="indent">I chase after him, trying to keep him in my sights while watching for falling debris and any of his men that decide to interrupt. A large chunk of the ceiling smacks down in front of me, sending me tumbling with a shockwave. </p>
<p id="indent">He makes it to the lobby. The glass entrance doors are shattered and off their hinges, allowing for a clean getaway. For the first time since being tossed into the ocean, I feel like I can’t breathe. </p>
<p id="indent">A second round of explosions go off, kicking up a wave of smoke and </p>
<p id="page-end">210</p>`
const ch19p12 = `<p id="page-start"> </p>
<p id="no-indent">dust that engulfs what little I can make out. I hear more crumbling, and the last thing I see is his figure disappear from the now defunct building.</p>
<p id="page-end">211</p>`
const ch19p13 = ``
const ch19p14 = ``
const ch19p15 = ``
const ch19p16 = ``
const ch19p17 = ``
const ch19p18 = ``
const ch19 = [ch19p1, ch19p2, ch19p3, ch19p4, ch19p5, ch19p6, ch19p7, ch19p8, ch19p9, ch19p10, ch19p11, ch19p12, ch19p13, ch19p14, ch19p15, ch19p16, ch19p17, ch19p18]

const ch20p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 20</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">I’m encased in darkness when I finally regain consciousness. I try to move, but a crushing pressure prevents the bottom half of my body from doing anything. The pain doesn’t even register until a moment later, which shoots up my spine and tingles the tips of my fingers. The space behind my eyes starts pounding, forcing me to wince.</p>
<p id="indent">My arms hesitantly reach to feel the area and are met with heavy concrete. </p>
<p id="indent">What happened?</p>
<p id="indent">I was fighting Slaphand, and… and Ike came… and then I stabbed Slaphand. </p>
<p id="page-end">212</p>`
const ch20p2 =`<p id="page-start"> </p>
<p id="indent">And the building exploded. I was caught underneath the collapsing walls and ceiling.</p>
<p id="indent">Oh my God. I’m stuck under rubble and he’s escaped. Ike is most likely crushed, too. Now, the mob boss is getting away, and I’m gonna suffocate under a mound of concrete and cobblestone.</p>
<p id="indent">“Help!” I call out, my voice weak against the sound-dulling rock. “Help, please!”</p>
<p id="indent">A solemn silence returns my calls. </p>
<p id="indent">Someone had to have heard the building being blown up and collapsing, right? Maybe the police and fire department are on their way. What would I even say to the police? It’s awful suspicious that me, Ike, and a few straggler goons got caught in the wake of a coordinated attack on the museum during closed hours. </p>
<p id="indent">“Help!” I yell again. “Ike, help me!”</p>
<p id="indent">Nothing still.</p>
<p id="indent">I don’t want to die. I still had so much to do. Beat Slaphand, rescue Freckles, and live our lives peacefully together away from this madness. Maybe we’d move to a different country. Go to America with Ike and join his group of kids fighting Nazis.</p>
<p id="indent">I can’t die. Freckles will be taken apart and used as a weapon against Orion and the Clockwork. I never had the chance to give him one last hug.</p>
<p id="indent">I’m going to die crushed under rubble from an explosive blast, just like Mary did.</p>
<p id="indent">“Help me!”</p>
<p id="indent">“Luna!” Ike yells back, somewhere outside of my entrapment. </p>
<p id="indent">“Ike! I’m stuck under a pile!”</p>
<p id="page-end">213</p>`
const ch20p3 = `<p id="page-start"> </p>
<p id="indent">“I’m coming for you! Don’t move!”</p>
<p id="indent">I hear the faint crunching of his footsteps moving closer until it’s loud enough to be next to me. They stop and scrape against the ground, as if he were spinning in a circle.</p>
<p id="indent">“In here, Ike!”</p>
<p id="indent">His feet scrape the ground again.</p>
<p id="indent">“Listen carefully, Luna. I’m gonna start with the biggest chunk and lift it off the rest. Don’t worry about helping until I tell you to, alright?”</p>
<p id="indent">“Ike, I can’t move my legs.”</p>
<p id="indent">“It’s okay. You’ll be alright, I promise. I’m going to lift.”</p>
<p id="indent">“I’m scared.”</p>
<p id="indent">“It’ll all be okay. I swear.”</p>
<p id="indent">He grunts, lifting the heavy cement chunk as much as he can. Light peeks into my enclosure from the right side, filling my vision with swirling smoke and revealing a blazing fire. </p>
<p id="indent">With one final heave, Ike sends the chunk falling off of the pile. A little bit of the weight pushing on my legs disappears.</p>
<p id="indent">I’ve wronged this man twice–well, three times, depending on how you slice the cake–and he’s still helping me. And I’ve consistently been plotting against him or leaving him for the dust.</p>
<p id="indent">The same way I did with Mary.</p>
<p id="indent">He could’ve died the same way Mary did, too, and I’m lucky he didn’t. I’m lucky he’s still giving me another chance.</p>
<p id="indent">“Okay, I’m ready to lift the one that’s directly on your torso. I may need you to push up if you can. I don’t want to crush your legs any more than they already might be. Lift when I say.”</p>
<p id="indent">He approaches from the crack where light is spilling in, squats down, </p>
<p id="page-end">214</p>`
const ch20p4 =`<p id="page-start"> </p>
<p id="no-indent">and straightens his legs, puffing out a lot of air. He looks pretty beaten, but nothing super serious. I’m willing to bet he avoided most of the dangerous debris.</p>
<p id="indent">“Alright, lift, Luna,” he says through gritted teeth. I do what I can with my position, scooting my legs underneath my stomach and pushing off with them. Together, we lift the block all the way off the pile, and it falls flat on the ground with a loud thud.</p>
<p id="indent">“Slowly, now,” he says, offering me his hands. He helps me stand straight. My lower body feels pretty scraped up, but nowhere near as bad as my lower chest. It hurts to breathe.</p>
<p id="indent">“Ike, I think my ribs are broken.” </p>
<p id="indent">“They might be sore, but I doubt if they’re broken. You’d be screaming a lot more if they were.”</p>
<p id="indent">I lightly touch the area in the most pain. It gives away way too easily. “I don’t think you’re right this time.”</p>
<p id="indent">“We need to get you to a hospital.”</p>
<p id="indent">“No, we need to go get Slaphand. How long was I unconscious?”</p>
<p id="indent">“Luna, that was an hour ago. I have no idea where he went, and there’s gonna be one hell of a public relations disaster when the news outlets discover the wreckage. If we get you to a hospital, we can keep you out of the press. They’ll never know you were involved in the museum’s destruction.”</p>
<p id="indent">“He told me something before the place fell apart,” I say, trying to piece together the thought. “He mentioned the Agriculture District. Freckles is in the Agriculture District! That’s where he’s keeping him!”</p>
<p id="indent">“Slow down, Luna. Are you sure?”</p>
<p id="indent">“Yes! We have to go get Freckles!”</p>
<p id="page-end">215</p>`
const ch20p5 = `<p id="page-start"> </p>
<p id="indent">“Even if he wasn’t lying, there are two agriculture districts, and they are a third of the land in Carmsborough. It tells us nothing.”</p>
<p id="indent">I stare off into the distance. The museum was obliterated by the blasts, turning everything into an unrecognizable ruin covered in smoke and dust. In one section, a collection of large bones is mixed in with the rubble. A few fires are still raging, but a group of firefighters are making their rounds, extinguishing what’s left. There are a few others as well, all dressed in black suits and wearing sunglasses.</p>
<p id="indent">“Boss, we got word that Slaphand’s in the southeast area of the Commerce docks, right on the border of Commerce and Higher,” one of the suits says, walking to Ike. “He’s getting into an airship with whatever’s left of his crew.”</p>
<p id="indent">“Any idea where he’s headed?” Ike asks.</p>
<p id="indent">“Not yet, sir. I’ll keep you updated.”</p>
<p id="indent">Ike looks at me. His face is tired. “Go get him, kiddo–er, Luna.”</p>
<p id="indent">“You’re not gonna join me?”</p>
<p id="indent">“Well, that depends. Are you gonna backstab me again?”</p>
<p id="indent">“I’m really sorry. I shouldn’t have, and I realize that. The fact that it took a building collapsing on me to realize that is telling, but I swear on my dead mom that I won’t do it again.”</p>
<p id="indent">He frowns slightly, but nods. “Well, we’d better get moving then. You wouldn’t happen to know where a ship is, would you?”</p>
<p id="indent">“I would, actually. You wouldn’t happen to have a motorcycle to get us there, would you?”</p>
<p id="indent">“I would, actually.”</p>
<p id="story-break"></p>
<p id="indent">The two of ride in silence to the docks, broken occasionally by me </p>
<p id="page-end">216</p>`
const ch20p6 = `<p id="page-start"> </p>
<p id="no-indent">piping in to steer him to the <em>Constellation</em>. “This is her,” I say, pointing carefully to my cloudship. Lifting my arm too high brings a lot of pain. As soon as I’m done dealing with the big meathead, I’m going straight to the hospital. I’m glad I never had any broken bones while I was homeless and unable to pay for it.</p>
<p id="indent">“I was expecting something a little bigger, if I’m being honest,” Ike says, stopping the motorcycle.</p>
<p id="indent">“Yeah, but she’s quick. You can ride up the ramp and we can take your bike with, if you’d like.”</p>
<p id="indent">He parks the motorcycle on the small deck of the ship and wheels it into one of the top-level rooms as I get the ship started. I can barely bring my arms to the wheel to get us moving.</p>
<p id="indent">“Let me handle it,” Ike says. I scoot over, and he sets us off south. The cover of the night sky still hangs above us, and I can see the moon poking out behind the occasional cloud. If I weren’t down a bone or two and in the middle of hunting for a notorious crime boss, the cruise might even be peaceful.</p>
<p id="indent">“Agent Jake to Agent Ike,” a voice says, coming from a communicator on Ike’s arm, suspiciously similar to my own.</p>
<p id="indent">“Come in, Agent Jake.”</p>
<p id="indent">“Slaphand has been spotted heading across the thin end of the Biomed District, most likely to the southern-most docks of the Upper Agriculture District. He has an entourage of cloudships accompanying his own airship. Sending coords now.”</p>
<p id="indent">“Thanks, Jake. Keep me in the loop and mobilize whatever we have in Carmsborough. If I’m right, we’re going to get more than just Slaphand.”</p>
<p id="indent">“What do you mean by that?” I ask.</p>
<p id="page-end">217</p>`
const ch20p7 = `<p id="page-start"> </p>
<p id="indent">“I have a hunch, mostly. Everywhere he’s gone, he’s had some sort of base of operations. If he’s got one in Upper Ag, it might be an intermediate stop between the Commerce District and Blood Moon Island.”</p>
<p id="indent">“Great thinking. So, there were already a bunch of secret agents in Carmsborough when you got here?”</p>
<p id="indent">“Oh yeah. We have operations in a lot of countries.”</p>
<p id="indent">“So then why didn’t you have reinforcements when you went in to take Slaphand down?”</p>
<p id="indent">“Well, as I’m sure you’re aware by now, that type of mission is very difficult with a partner. You’re doubling the uncontrolled variables in a situation. Sometimes, it’s best to fly fast and fly solo.”</p>
<p id="indent">Ike kicks the <em>Constellation</em> into high gear, and the engine revs loudly. At its highest, the speedometer reads two hundred miles per hour. “This is far above legal limits,” he says, “but why put it in the vehicle if you’re not allowed to do it?”</p>
<p id="indent">“That’s a good point.” </p>
<p id="indent">I sit next to him in the copilot chair, watching the city below us soar by in the blink of an eye. The buildings slowly transition from the tall cobblestone and brick of the Commerce district to a strange shorter, wooden, brick, and plastic in the Higher. </p>
<p id="indent">“Why do they look like that?” I ask.</p>
<p id="indent">“Those houses? Probably because that’s how they’re built in America. We have suburbs of these things. Row after row after row. Pretty bland, in my opinion.”</p>
<p id="indent">“I’d say so.”</p>
<p id="indent">Off in the distance, the outlines of five or six ships appear. Ike slows a </p>
<p id="page-end">218</p>`
const ch20p8 = `<p id="page-start"> </p>
<p id="no-indent">bit, and we steadily approach our enemy.</p>
<p id="indent">“Getting ready to engage with Slaphand and company in zone sixteen of the Housing District,” Ike says into his communicator. </p>
<p id="indent">“Wait, what do you mean, engage?” I ask.</p>
<p id="indent">“We’re gonna go board the main airship.”</p>
<p id="indent">“What?! What about all the others? They’d tear us apart before we have the chance to get close.”</p>
<p id="indent">“Oh, that’s no worry. Cloudships don’t have any sort of weaponry attached. It’s illegal.”</p>
<p id="indent">“Ike. They’re bad guys.”</p>
<p id="indent">“Right, but there’s no way to hide a cannon on a cloudship.”</p>
<p id="indent">I press one of the big buttons on the dashboard of my cloudship, revealing my front-facing cannon, pointed towards the enemies. Ike stares, mouth open.</p>
<p id="indent">“Okay, that’s illegal, first of all.”</p>
<p id="indent">“It’s not illegal if you don’t get caught.”</p>
<p id="indent">“Second of all, why on earth do you have a cannon on your ship?”</p>
<p id="indent">“Just in case something like this happens, I guess.”</p>
<p id="indent">Ike runs his hands through his messy hair. Residue from the collapsed museum floats out. “Alright, fine. We’ll pretend like I’m okay with this. But you have to make every shot count. We can’t afford to accidentally send a cannonball into any houses below.”</p>
<p id="indent">“I’m gonna be attacking?”</p>
<p id="indent">“Well, yeah. Someone’s gotta steer.”</p>
<p id="indent">“I’ve never been in an airship battle!”</p>
<p id="indent">“There’s a first time for everything. Go get down there, snarky. We have a whole entourage to destroy.”</p>
<p id="page-end">219</p>`
const ch20p9 = `<p id="page-start"> </p>
<p id="indent">I descend the stairs to the cannon’s level, careful not to jostle around too much. I’m not sure how broken ribs work, but I’d rather not displace it any more than it currently is.</p>
<p id="indent">Loading and aiming the cannon seems easy, and firing it is as simple as a button on the wall. I have no way of measuring how far we are from the ships, but a plaque on the wall says the range of accuracy is roughly a quarter of a mile.</p>
<p id="indent">I walk to a nearby speaker and flip a switch, turning on two-way communication. “Range is a quarter of a mile. Would you tell me when we’re that far away?”</p>
<p id="indent">“That’s how close we need to be? Dang, girl, you have zero reach on that thing.” Ike increases our speed a bit again, and we come uncomfortably close to the cloud of cloudships.</p>
<p id="indent">Slaphand’s airship points a few cannons of its own in our direction as we sneak in between it and one of the cloudships.</p>
<p id="indent">“They haven’t activated their shields,” Ike says. “They don’t know about your cannon, either. This first shot has to seriously count. We could do a lot of damage if you aim right.”</p>
<p id="indent">“Where am I aiming, then?”</p>
<p id="indent">“Your choice. Aim for either the cockpit or their flag. Their shield generator will be in one of those two spots, most likely.”</p>
<p id="indent">“Cockpit it is,” I say, turning the heavy cannon as softly as I can without hurting myself too much. When I’m happy with how it’s lined up, I stand back and smack the button on the wall.</p>
<p id="indent-adjustment-more">The cannonball launches with a loud <em>thump</em> and crashes into the side of Slaphand’s ship. It doesn’t quite reach the cockpit, partially because of the wind and partially because I didn’t aim high enough, but the ship rocks a </p>
<p id="page-end">220</p>`
const ch20p10 = `<p id="page-start"> </p>
<p id="no-indent">little.</p>
<p id="indent">“Not a bad first shot, but not what we wanted. Get loaded as fast as you—”</p>
<p id="indent">Their ship sends three cannonballs of their own in our direction, all coming very close to doing some serious damage. </p>
<p id="indent">“Turn the shield on!” I yell, stumbling to load another cannonball into the weapon.</p>
<p id="indent">“You have a shield, too?!” Ike yells back. Moments later, a violet hue covers the outside of the <em>Constellation</em>. “They still don’t have theirs up for whatever reason. Now or never, Luna!”</p>
<p id="indent">“I’m working on it,” I say, having loaded the cannon. I aim it a little higher and to the right, and smack the button with as much urgency as the first. The cannonball careens into the cockpit, but as it reaches the other side, they turn their shields on.</p>
<p id="indent">“I think they trapped the cannonball inside with them,” I say.</p>
<p id="indent">“Hold on tight!” Ike says, ignoring my comment. The Constellation rocks as a cloudship to our right smacks into its side. I tumble to the floor, landing on my forearms, and scream as my broken rib flares up.</p>
<p id="indent">“See if you can aim at them!” Ike yells. “They won’t be going away unless we make them!”</p>
<p id="indent">I stand slowly, the pain making it hard to do anything, and grab a third cannonball from the container. Lifting it hurts a lot more than earlier, but I still carry it all the way to the cannon and load it.</p>
<p id="indent">“They’re coming in for another smack!”</p>
<p id="indent">I grab hold of the cannon, and when the ship lurches, it keeps me steady. As soon as we’re leveled, I point to the culprit cloudship and fire the weapon.</p>
<p id="page-end">221</p>`
const ch20p11 = `<p id="page-start"> </p>
<p id="indent">The ball goes right through the center of the hull, and a second later, the ship violently explodes in a bright flash of light.</p>
<p id="indent">“Hell yes! Score one for the home team!” Ike lets out a whoop.</p>
<p id="indent">“Why did it blow up like that?”</p>
<p id="indent">“You hit the engine. I figured you did that on purpose.”</p>
<p id="indent">“Nope. Good to know all ships are like that, though.”</p>
<p id="indent">Ike carefully dodges the attacks from Slaphand’s airship as they bring more firepower, this time in the shape of machine guns. The bullets patter against our shield, but don’t go any further.</p>
<p id="indent">“Machine guns to our left, and a cloudship above us. I think they’re gonna try to board our ship.”</p>
<p id="indent">“I’m not in much of a fighting condition,” I say, waddling to our cannon with another projectile. There are seven or eight cannonballs left, but after that, our attacking strategy will be dead in the water. Well, in the air.</p>
<p id="indent">“If you can, come and steer clear of their cannonballs for a moment, and I’ll handle anyone that comes on board.”</p>
<p id="indent-adjustment-less">“Roger that.” I climb the stairs as carefully as I descended them and take control of the ship from Ike. Sure enough, four people climb onto our deck from a ladder, and Ike greets them with a cheery grin. They raise their fists and knives, and Ike pulls out a pistol. I watch in shock as he puts a round in each of their chests before they even have the chance to react. </p>
<p id="indent">He returns to the cockpit and relieves me of wheel duty. “Sorry about that. As soon as I saw the four of them drop, I decided I’m done fist-fighting for the day, and I wasn’t feeling a four-versus-one scenario.”</p>
<p id="indent">“You just killed four people.”</p>
<p id="page-end">222</p>`
const ch20p12 = `<p id="page-start"> </p>
<p id="indent">“I don’t enjoy doing it, but it has to happen sometimes. Better them than us, Luna. You should try to sabotage those machine guns. Weapons are exposed parts of the ship, because you can’t fire through a shield in either direction very well.”</p>
<p id="indent">“You mean to tell me I’ll be standing in the only vulnerable area of my ship?”</p>
<p id="indent">“That’s exactly what I mean to tell you, yes.”</p>
<p id="indent">I walk back down to my cannon and point at one of the machine guns heckling the <em>Constellation</em>. The cannonball crashes right into it, jumbling the exposed innerworkings of Slaphand’s ship.</p>
<p id="indent">“Good one,” Ike says.</p>
<p id="indent">For a moment, the shield of the airship falters, and the whole thing veers to the left a little. Wherever that cannonball went, it must have done some serious damage from the inside. Either that, or having three of them rolling around in there is a little too much for their repair crew.</p>
<p id="indent">“Another cloudship coming in for a bump,” Ike says as I’m carrying one of the heavy projectiles to the cannon. I immediately drop it, making sure my toes are out of the way, and lunge for a wall to latch onto. The collision rattles us, but still doesn’t do anything serious.</p>
<p id="indent">Like the first cloudship, I aim for the center, and the cannonball pierces it cleanly. I can see the night sky in the crater, like a porthole window. The ship doesn’t fall victim to a massive fireworks display like its predecessor. Instead, it slowly sinks below us, out of sight.</p>
<p id="indent">One more loading session later and four cannonballs are left in the storage bin. I lock on to the second machine gun, which is pitifully tapping against our shield, and daintily push the button to launch the metal ball. It once again connects with its target, and the shields flicker </p>
<p id="page-end">223</p>`
const ch20p13 = `<p id="page-start"> </p>
<p id="no-indent">intensely. Their ship loses altitude quickly, and Ike follows suit.</p>
<p id="indent">“They’re going to crash hard into this field. He might not even survive the landing.”</p>
<p id="indent">“We’re gonna go and make sure he doesn’t, though, right?”</p>
<p id="indent">“You bet we are. There’s literally no way he’s slipping away from us this time.”</p>
<p id="indent"> As expected, the mob boss’ airship smashes into the ground, falling apart and bursting into flames. The remaining cloudships also begin descending, but we have the lead. The Constellation lands softly, and together, Ike and I walk down the extending ramp and to the fast-burning remains of the ship.</p>
<p id="indent">The two of us reach what’s left of the cockpit and find a bloody mess. A few bodies litter the demolished room, but the one we’re hunting for, Slaphand’s, is still alive and leaning against the shattered dashboard.</p>
<p id="indent">“Well, well, well,” I say, walking up to the wounded man. “If it isn’t our old pal Slappy Boy.”</p>
<p id="indent">He grunts and grimaces. My right hand reaches for my remaining pistol and levels it with his head. “This is your last chance. Tell me where my cat is.”</p>
<p id="indent">“Your cat is at Candlewood Docks on the southern end of the Upper Agriculture District,” Slaphand wheezes. “He’s being loaded and taken away by Cleopatra. You’ll never get to him in time. They’re probably already escaping Carmsborough, and you don’t have the gas in your tank to make it to France.”</p>
<p id="indent">“Thank you for finally being useful. Was that all that hard?”</p>
<p id="indent">He lets out another grunt.</p>
<p id="indent">“No, really, thank you,” I say.</p>
<p id="page-end">224</p>`
const ch20p14 = `<p id="page-start"> </p>
<p id="indent">And then I pull the trigger.</p>
<p id="page-end">225</p>`
const ch20p15 = ``
const ch20p16 = ``
const ch20p17 = ``
const ch20p18 = ``
const ch20 = [ch20p1, ch20p2, ch20p3, ch20p4, ch20p5, ch20p6, ch20p7, ch20p8, ch20p9, ch20p10, ch20p11, ch20p12, ch20p13, ch20p14, ch20p15, ch20p16, ch20p17, ch20p18]

const ch21p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 21</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">We walk to the Constellation in silence, ignoring the hostile cloudships landing near us. Chances are, they’ll leave us alone and go straight for their boss.</p>
<p id="indent">Their dead boss.</p>
<p id="indent">My whole body is shaking. I can’t believe I did that. I can’t believe I shot and killed someone. And I didn’t even think twice about doing it.</p>
<p id="indent">Maybe because I’ve been planning it ever since he separated Freckles and I. Ever since he threw me into a work camp and forced me to boss other prisoners around. Ever since he locked me in a cage with Mary and let the structure topple down on top of her. Ever since he escaped justice </p>
<p id="page-end">226</p>`
const ch21p2 = `<p id="page-start"> </p>
<p id="no-indent">for the umpteenth time. </p>
<p id="indent">Ever since Ike shot those four men on the main deck.</p>
<p id="indent">If there was ever a man who deserved to be killed, it was him. But thinking someone deserves to be killed is a totally different ballpark than actually killing them, and yet, I took the dive without hesitation.</p>
<p id="indent">“Are you alright?” Ike asks, revving the ship again.</p>
<p id="indent">“What do you think?” I reply, a little too snappy.</p>
<p id="indent">He comes to sit in the pilot’s seat next to me, swiveling the chair to face my way. “I’ll tell you what I think. I think you’re thinking too hard about what you just did. You’re afraid that it’ll somehow define you, or that you’ll get used to it. And the fact that you’re even worried tells me you’ll be okay, Luna. Something like that will always stick in your head, and while it’s nothing to be afraid of, you should always have this feeling when confronted with the question.”</p>
<p id="indent">“Yeah,” is all I manage. I don’t have the heart to tell him I wasn’t afraid of any of that. That I sort of enjoyed doing it.</p>
<p id="indent">I’ve finished off one of the bad men with bad plans. He will no longer torment my life. I can be free again, unworried.</p>
<p id="indent">Well, as soon as I rescue Freckles, at least.</p>
<p id="indent">Ike gets up and punches in the coordinates for Candlewood Docks. My chest still hurts from the broken rib, but overexposure to the nonstop pain has somewhat dulled the throbbing.</p>
<p id="indent">“So, you gonna tell me who your boss is yet?” Ike asks, tidying his hair using his reflection in the cockpit windows. </p>
<p id="indent">“I don’t think I can. The last thing I want to do is get in trouble for it. If he wants to stay anonymous, then I should make sure he stays anonymous. Even to you, Ike. I’m sorry.”</p>
<p id="page-end">227</p>`
const ch21p3 = `<p id="page-start"> </p>
<p id="indent">“I’ve often found those that want to stay anonymous usually do it because they’re pulling some nefarious strings, not because they’re trying to be the good guys, Luna.”</p>
<p id="indent">“Yeah, but you haven’t met him. He rescued me off of Blood Moon Island, offered me a job and the resources I needed to do it, and from the sounds of it, he has plenty of ways to help Carmsborough. He’s even been fighting the Nazis.”</p>
<p id="indent">“Hmm.”</p>
<p id="indent">Ike sits in silence, and we stare out the window, watching the low-rolling hills of the horizon and the fields on top of them. It’s dark, but it’s peaceful. Maybe, when I finally settle down, I’ll get a cute little house on a hill. It’ll be me, and Freckles, and…</p>
<p id="indent">Well, someone, probably. I haven’t had the chance to hit the dating scene all that much, but I’ve got time. Not quite a priority when you’re looting dumpsters for your next meal and hunting an international crime syndicate’s boss.</p>
<p id="indent">“You said your cat’s name was Freckles?” Ike asks.</p>
<p id="indent">“Yeah. I found him one day at work. I was sorting one of my basins, but the truck guy who loads the basins put the wrong materials in mine, so I was knee-deep in some electronics junk, and lo and behold, there he was, in the middle of the pile.”</p>
<p id="indent">“And he survived being under all of that?”</p>
<p id="indent-adjustment-less">“Well, yeah. Though I might’ve forgotten to mention he’s a steambot.”</p>
<p id="indent">“A steambot? Like the ones the Gearmaster makes?”</p>
<p id="indent">“Does anyone else make steambots?”</p>
<p id="indent">“Okay, smarty pants. That’s incredible. What are the odds that two </p>
<p id="page-end">228</p>`
const ch21p4 = `<p id="page-start"> </p>
<p id="no-indent">kids in Carmsborough have an inseparable bond with a steambot that they stumbled upon by accident?”</p>
<p id="indent">“The Clockwork chose Orion. He didn’t exactly stumble into him or anything.”</p>
<p id="indent">“Wouldn’t you say Freckles chose you, too? The bots don’t warm up to just anybody.”</p>
<p id="indent">I think back to the day we met. Did he choose me? I rescued him from the pit. But he could’ve run away when he was freed. Or ran away when we were ambushed by those two men. Or any time since. He has his own free will. If he wanted to be gone, he would’ve been.</p>
<p id="indent">“I mean, I never thought of it that way. Maybe he really was a gift from Mom.”</p>
<p id="indent">“From your mom?”</p>
<p id="indent">“Yeah. He, uh, appeared on the one-year anniversary of her death. Cancer. Since she passed, he’s been the only one to help me without having alternate intentions. Well, until recently, that is. Before you and I ran into each other, there was Mary, and… And she, uh… I let her… she was…”</p>
<p id="indent">I stop talking. I can’t afford to cry. Not now.</p>
<p id="indent">“Hey, look at me,” he says. “We’re going to get Freckles home safe and sound, alright? I promise.”</p>
<p id="indent">“I know we are.” I can feel the high-altitude air stinging my eyes.</p>
<p id="indent">“But it won’t be without a fight. I’ve followed this scene for a long time, and Cleopatra always has an entourage accompanying her.”</p>
<p id="indent">“Oh, I’m counting on it. There’re still four more cannonballs downstairs we need to get rid of.”</p>
<p id="indent">“That’s the spirit. And by the way, if you ever decide you don’t want </p>
<p id="page-end">229</p>`
const ch21p5 = `<p id="page-start"> </p>
<p id="no-indent">to work for whoever your current boss is, we’re always hiring at S6. I also happen to be in charge of a group your age who is out scouting for Nazi ships to destroy. They’re a sweet and ambitious crowd. You’d fit right in.”</p>
<p id="indent">“I’ll keep that in mind,” I say. “In the meantime, is there something we can do for this broken rib? This is getting ridiculous.”</p>
<p id="indent">“Unless you have a back brace in storage, all I can think of is an ice pack, some pain meds, and some rest. Other than that, there’s not a whole lot that <em>can</em> be done.”</p>
<p id="indent">“Figures.”</p>
<p id="indent">I search the ship for supplies and come across a bottle of generic pain relievers, which I get into my system with some water and stashed food. Ike cracks into the pantry as well, and we share our early breakfast in the cockpit while en route to our final confrontation.</p>
<p id="indent">All things considered, the two of us are fairly alert by the time five o’clock rolls by. We’re barely under ten miles from the dock when Ike receives a message from his communicator.</p>
<p id="indent">“Agent Ike, this is Agent Jake again. Copy if you’re awake.”</p>
<p id="indent">“Yeah, copy, Jake. What’s happening?”</p>
<p id="indent">“I’ve got two bits of information for you. We’ve partnered with local law enforcement and government officials at the crash site of Slaphand’s ship. I’ve got crews performing sweeps and cleanups at the moment. The big man himself’s got a bullet in his head, and I was wondering if you had anything to do with that.”</p>
<p id="indent">“The girl was responsible for that, not me,” he says. “I know we were going to take him to the states for trial, but we can’t do anything to stop a Carmsborian vigilante. Not our jurisdiction.”</p>
<p id="indent">“I’m going to assume you weren’t exactly dissuading her from doing it, </p>
<p id="page-end">230</p>`
const ch21p6 = `<p id="page-start"> </p>
<p id="no-indent">though.”</p>
<p id="indent">“That’s classified, Agent.”</p>
<p id="indent">“Second point of information: it seems Cleopatra is in Carmsborough and running her base of operations at a place called Candlewood Docks. Whatever she’s doing there is pretty big in scope. I’m sending coordinates now.”</p>
<p id="indent">“No worries, we already figured that one out. Any idea if she’s still there?”</p>
<p id="indent">“Satellite surveillance from thirty minutes ago says yes, but no promises since.”</p>
<p id="indent">“Copy. Anything else to report?”</p>
<p id="indent">“Your wife and kids say hi, but that’s all. Purity’s a little worried.”</p>
<p id="indent">“Tell that kid she has better things to worry about than what her dad’s doing. I’ll be fine.”</p>
<p id="indent">“Will do. Good luck, sir. Agent Jake out.”</p>
<p id="indent">“Well, Luna, we might have a bit of an advantage going in, as long as Cleopatra and her crew are still loading up.”</p>
<p id="indent">“How will we recognize the ship they’re loading Freckles onto?”</p>
<p id="indent">“It’ll be whichever one’s the biggest and most decorated. Cleopatra’s a trade guru with deep pockets in a lot of foreign markets, and she loves to flaunt the wealth. Our number one goal is getting Freckles, but goal number two should be capturing her.”</p>
<p id="indent">“Not killing her.”</p>
<p id="indent">“Right.”</p>
<p id="indent">“Sounds good to me. And by the way, thank you, Ike. I don’t deserve your help, and yet you’ve been more than willing to give it.”</p>
<p id="indent">“Yeah, I realized I was being stubborn and hypocritical by not </p>
<p id="page-end">231</p>`
const ch21p7 = `<p id="page-start"> </p>
<p id="no-indent">working with you. You’ve repeatedly risked everything with one goal in mind, and it took me way too long to understand that if I wasn’t with you, I was against you. I don’t blame you for the mindset, either. If someone stole the ones I love away from me, I can’t say I wouldn’t be acting the same way.”</p>
<p id="indent">“Okay, but I could’ve been a lot nicer to you.”</p>
<p id="indent">“Eh, water under the bridge. You’re sorry, and I forgive you. I’m also sorry, and I’m sure you’ll also forgive me eventually.”</p>
<p id="indent">“I do.”</p>
<p id="indent">“Well, good.”</p>
<p id="indent">The Constellation approaches the docks below. A quick count reveals two full-sized ships and five cloudships, but, as Ike expected, one has a lot more luster to it.</p>
<p id="indent">“If he’s packed away, he’ll be on that one,” Ike reaffirms. </p>
<p id="indent">“Good. Let’s get this show on the road.”</p>
<p id="indent">We swoop in low, skating a hundred feet in the air above their grounded ships. On our first pass over, I load the cannon. When we reach the ocean, Ike loops the ship around. Two of their cloudships are taking to the sky, ready to greet us. Or ram us. We have no way of telling if they realize who we are, but they’ve been expecting Slaphand and his crew, whose ships are notably missing. </p>
<p id="indent">“Ready?” Ike asks from the speaker.</p>
<p id="indent">“I’m more than ready.”</p>
<p id="indent">“The one on the right looks like it wants a deadly bowling ball launched at it, wouldn’t you agree?”</p>
<p id="indent">“I think I would.”</p>
<p id="indent">I aim and fire at the cloudship. My shot connects with the front of the </p>
<p id="page-end">232</p>`
const ch21p8 = `<p id="page-start"> </p>
<p id="no-indent">cockpit and travels almost all the way through to the other side as the ship explodes outward. Ike turns our shields back on, giving us the enchanted hue of protection.</p>
<p id="indent">Now they certainly know who we are.</p>
<p id="indent">I rush to get a second cannonball loaded, my injury slowing me a little less with pain relievers in my system. The surviving cloudship attempts to swerve away, but I don’t give it the chance, once again landing a shot on their engine. They, too, burst into flames.</p>
<p id="indent">“You know, I’ve never actually been bowling before,” I yell, “but I imagine this is what it feels like, although a lot cooler.”</p>
<p id="indent">“It’s certainly more of an old person or nerd sport,” Ike returns.</p>
<p id="indent">The three additional cloudships launch off, and I can faintly make out figures on the ground desperately loading the two larger airships.</p>
<p id="indent">“We need to land. They’ll be in the air soon.”</p>
<p id="indent">“I couldn’t agree more,” Ike says, dropping us closer to the ground. We touch down, and I load one last cannonball into the ship as a precautionary measure, leaving one left in the container. Then, I rejoin Ike on the main level of the ship.</p>
<p id="indent">“Here’s a little makeshift plan,” he begins. “We’ll cover each other, making sure we get on board that ship, and immediately head for the cargo hold. If he’s not in the main hold, we’ll comb the rest of the place. Keep a weapon in hand at all times, and I understand you might want to hesitate to shoot, but this is officially kill or be killed.”</p>
<p id="indent">“Understood. Let’s go.”</p>
<p id="indent-adjustment-more">Ike lowers the ramp and puts a round into two of Cleopatra’s goons waiting for us below. We hug the side of the Constellation, staying as out of sight as possible while we turn to face The Crown Jewel, a gaudy cargo ship. </p>
<p id="page-end">233</p>`
const ch21p9 = `<p id="page-start"> </p>
<p id="no-indent">A little on the nose if you ask me.</p>
<p id="indent">“Run to the ramp on three,” Ike says, scouting for more of the welcome party. He counts down and we sprint off, although I move a lot slower because, once again, I have a broken rib.</p>
<p id="indent">When we arrive at the bottom of the ramp, he fires his pistol three more times, taking out a man who was ready to get the jump on us. I step onto the ramp, prepared for the worst.</p>
<p id="indent">But the worst doesn’t come.</p>
<p id="indent">The top deck is completely empty, so we descend the rickety wooden stairs, clinging to either wall. Each of us peers into the room at a different angle. I’m met with an unsuspecting guard and fire twice, one shot hitting him in the shoulder and the second completely missing. He topples to the side, and Ike finishes the job.</p>
<p id="indent">We continue on, sweeping the area for any more goons, until Ike finds a second staircase leading further into the belly of the ship. We use the same strategy to check for safety.</p>
<p id="indent">“This should be the storage level,” Ike says, after we confirm the main area is free of any baddies. “No splitting up. We’ll search together.”</p>
<p id="indent">“What? Scared I’ll ditch you again?” I ask, mostly joking.</p>
<p id="indent">“Well, now that you mention it, maybe a little,” he smiles back.</p>
<p id="indent">The lobby area of the cargo hold doesn’t have a lot in it, including a distinct lack of Freckles, so we go through each room, one of us monitoring the inside and the other watching the outside. </p>
<p id="indent">I open our sixth door, and it creaks loudly. Inside, a man is standing at a table, facing our way. On top of the table is a shadowy shape. Light pours in from behind the man, illuminating the space directly surrounding him. When he sees who we are, he reaches for a pistol, but not fast </p>
<p id="page-end">234</p>`
const ch21p10 = `<p id="page-start"> </p>
<p id="no-indent">enough. In one shot, I put a hole in his head, just like I did to Slaphand. He falls to the ground, lifeless. With him removed, the object on the table is revealed. </p>
<p id="indent">It’s a cage. </p>
<p id="indent">A cage with something in it. </p>
<p id="indent">With some<em>one</em> in it.</p>
<p id="indent">I flip a light switch on. All I can do is stare.</p>
<p id="indent">“Freckles?!”</p>
<p id="indent">“Meow.”</p>
<p id="page-end">235</p>`
const ch21p11 = ``
const ch21p12 = ``
const ch21p13 = ``
const ch21p14 = ``
const ch21p15 = ``
const ch21p16 = ``
const ch21p17 = ``
const ch21p18 = ``
const ch21 = [ch21p1, ch21p2, ch21p3, ch21p4, ch21p5, ch21p6, ch21p7, ch21p8, ch21p9, ch21p10, ch21p11, ch21p12, ch21p13, ch21p14, ch21p15, ch21p16, ch21p17, ch21p18]

const ch22p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 22</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">It takes everything in me to not crumple to the floor and ugly cry.</p>
<p id="indent">It’s him. I found him. My best friend in the whole wide world is here and unscathed. Untouched, even. Still locked in the same cage Slaphand had stuffed him in.</p>
<p id="indent">“Freckles, oh my God! I’ve missed you so much, dude! We’re gonna figure out how to free you now. Ike, it’s him!”</p>
<p id="indent">Ike glances back. “Alright. Grab him, and we’ll bounce. There’s no telling how many people are waiting for us.”</p>
<p id="indent">“Right. Umm, something to open the cage with…”</p>
<p id="indent">“Meow.”</p>
<p id="page-end">236</p>`
const ch22p2 = `<p id="page-start"> </p>
<p id="indent">“Yeah, but I don’t see a crowbar or anything.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">I look at my waist. “Well, what do we have here? At least one of us is thinking with our brain.”</p>
<p id="indent">I pull my knife from its sheathe and place the tip between the cage and its door before using my pistol to wedge the blade in. It takes a hot moment, but the knife eventually reaches a point where it doesn’t slip, so I pull on its handle with as little force as I can to prevent hurting myself. The cage opens slightly, and Freckles slips one of his paws in the gap.</p>
<p id="indent">Together, the two of us pop the cage door off, launching it close to the room’s entryway. Ike turns his head again, worried.</p>
<p id="indent">“Oh, my sweet baby!” </p>
<p id="indent">I offer him a head bump, but he moves to jump onto my shoulders. </p>
<p id="indent">“Hold on, Freckles. I’ve got a broken rib, and I’d rather not suffer any more than I have to.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“You’re telling me. You would not believe my life the past few days. I’ve been working nonstop to make sure Slaphand pays for separating us.”</p>
<p id="indent">“Luna, c’mon,” Ike says, a little nervous.</p>
<p id="indent">“Yeah, sorry. Let’s go, bud.” We do a soft headbutt and follow Ike out of the room.</p>
<p id="indent">“Hey, Ike,” Agent Jake says through the communicator again, “I’ve got bad news.”</p>
<p id="indent">“Let’s hear it, Jake.” His face grows decades older with just those four words.</p>
<p id="indent">“Nobody’s gonna be able to make it your way for the next few hours. We’re held up with everything else happening, and a round of Nazi ships </p>
<p id="page-end">237</p>`
const ch22p3 = `<p id="page-start"> </p>
<p id="no-indent">are harassing our men off the coast.”</p>
<p id="indent">“Of course they are. Okay, we’ll find some other way out of this.”</p>
<p id="indent">“We can run to the Constellation,” I suggest.</p>
<p id="indent">“She probably has her men crawling all over it. We’ve gotta think of something else. Maybe hijacking this ship? It wouldn’t take us very far since we’ll be a crew of two and a cat, but we’d be gone.”</p>
<p id="indent">“I could call my boss and see if he can save us.”</p>
<p id="indent">“Alright. But unless that happens, we’re stealing the Crowned Jewel.”</p>
<p id="indent">I power my watch on. “Hey boss, you there? I realize it’s pretty early in the morning, but this is sort of important.”</p>
<p id="indent">The three of us wait in silence for a minute, but he doesn’t answer. I shrug my shoulders but wince when my ribs flare. “Alright, time for my third airship hijacking this week.”</p>
<p id="indent">“That’s the spirit.”</p>
<p id="indent">We climb the stairs cautiously, weapons in hand. Two henchmen are waiting at the landing and get a few shots in before we do. Ike and I duck to avoid getting hit.</p>
<p id="indent">“Meow.”</p>
<p id="indent">Freckles bounds up the rest of the stairs and attacks the two men. A few gunshots ring out, and one ricochets off of something metal, but the sounds end quickly. We peek again and are met with Freckles standing on top of one of them, claiming his throne.</p>
<p id="indent">My smile returns. “Have I ever told you I love you, Freckles?” </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Come in, Luna,” the boss’ voice says, emanating from my watch. “What’s so important this early?”</p>
<p id="indent">Ike stares, wide-eyed.</p>
<p id="page-end">238</p>`
const ch22p4 = `<p id="page-start"> </p>
<p id="indent">“So, Freckles is rescued and Slaphand is dead, but we’re stranded at Candlewood Docks in the Upper Agriculture District. Do you think you could have someone come get us?”</p>
<p id="indent">“Well, lucky for you, we’re reasonably close. I’ll have my men redirect course. Stay safe.”</p>
<p id="indent">“Thanks, boss. Peace.”</p>
<p id="indent">I look at Ike, who is standing slack jawed. </p>
<p id="indent">“<em>He's</em> your boss, Luna?”</p>
<p id="indent">“Yeah. Why? Who is he?”</p>
<p id="indent">“He’s Syndra. The man who tried to kill Orion, steal the Clockwork, and take control of Carmsborough last year.”</p>
<p id="indent">“Wait, what?”</p>
<p id="indent">“You’re working for Syndra, and you didn’t even know?!”</p>
<p id="indent">“I mean, how could I have? It’s not like he introduced himself as Syndra, the big bad guy who tried to overthrow the government or something!”</p>
<p id="indent">“Jesus Christ, Luna. How’d you get yourself into this situation?”</p>
<p id="indent">Oh, God. Oh, man. Am I pawn to another bad guy with bad plans? Am I as bad as the goons doing Slaphand’s bidding?</p>
<p id="indent">“That’s a question I’d like to ask both of you,” a woman’s voice says from above us, at the top of the next flight of stairs. Ike stiffens and Freckles gets into a pouncing position.</p>
<p id="indent">“Cleopatra,” Ike says, motioning to me with his finger to be quiet. “I was wondering when we might run into you.”</p>
<p id="indent">“Please, come join me on the main deck. I’d like to offer a civil conversation to the two of you.”</p>
<p id="indent">“I’m sure you would,” he replies, creeping up the staircase. Freckles </p>
<p id="page-end">239</p>`
const ch22p5 = `<p id="page-start"> </p>
<p id="no-indent">and I follow his lead, hugging the wall along the way.</p>
<p id="indent">We reach the deck and are met by our second crime boss of the day. The three things that are immediately noticeable about her are her long, bright-blonde hair, her leopard print shirt that has a seventy percent chance of being real, and how tall she is. Certainly taller than average, and maybe an inch or two taller than Ike. Her physical posture, crossed arms and a wide stance, screams power and attention.</p>
<p id="indent">“Well, aren’t you cute?” she says.</p>
<p id="indent">“He’s off limits,” I say, moving to stand in front of Freckles.</p>
<p id="indent">“I was talking to you, dear. I assume you’re the Luna who’s been giving Slaphand hell?”</p>
<p id="indent">“Gave Slaphand hell. Past tense.”</p>
<p id="indent">“Bijabers will be upset to hear that, but it was a tad overdue. Men like him get cocky, and for as long as he was in the game, a lot of us were betting against him for you.”</p>
<p id="indent">“I’m flattered. If you’ll excuse us, we have a ship to catch.”</p>
<p id="indent">“Not so fast,” she says, raising her left arm and snapping. Ten of her troops climb the airship’s ramp, carrying all sorts of melee weapons. </p>
<p id="indent">“Why wouldn’t you bring any guns?” I yell. “You know for a fact we have some.”</p>
<p id="indent">To prove my point, Ike pulls his own out and pulls the trigger, aiming at Cleopatra with lightning speed. </p>
<p id="indent">His gun clicks. There’s no ammo.</p>
<p id="indent">“Oh, performance issues are nothing to be embarrassed of, Special Agent Ike,” she says, smiling.</p>
<p id="indent">I reveal mine and aim it at her as well, but as soon as I’ve got it leveled in front of me, a chain smacks my hand and wrenches it away. Cleopatra </p>
<p id="page-end">240</p>`
const ch22p6 = `<p id="page-start"> </p>
<p id="no-indent">smiles, wielding a claw on a long metal chain, and whips the  pistol off the side of the ship.</p>
<p id="indent">“What on earth was that?”</p>
<p id="indent">“This, dear, is my chain claw. It’s how I’m going to finish the three of you off.”</p>
<p id="indent">She swings it wide, cutting the air in front of us with a whistle. I reverse a bit, looking for another way to get to her without breaking any more bones.</p>
<p id="indent">Freckles, on the other hand, bounds after her, ready to fight. He gets about halfway to her before she swings the claw again, smacking him on his side. He rolls across the deck but gets up, his eyes glowing intensely.</p>
<p id="indent">The goons around us spring into action, five moving to Ike and five to me. </p>
<p id="indent">There’s no way I’m taking five of them on at once. At best, I’d lose a few more ribs. At worst, this whole trip was for nothing.</p>
<p id="indent">Freckles glances back and decides to join us, plowing into one of my five. Two of the four still standing decide to move to Freckles, leaving me with two.</p>
<p id="indent">A little more fair, I suppose.</p>
<p id="indent">I retrieve my knife and lunge for the closer of the two. I feel the pain in my chest burn stronger, but it’s not stopping me. The man dodges, stepping dangerously close to the edge of the ship. I reach again, slicing horizontally, and he leans away. With him off balance, I kick, sending him plummeting off the side of the ship to the ground. </p>
<p id="indent">Now that I’m the one that’s too close to the edge, I run at the other man with an angry yell. He tries to step to the side, but my knife sinks straight into his chest. The force rattles my bones. I pull it out. It’s </p>
<p id="page-end">241</p>`
const ch22p7 = `<p id="page-start"> </p>
<p id="no-indent">covered in blood.</p>
<p id="indent">He falls to his knees, clutching at the wound, but the light leaves his eyes instantly.</p>
<p id="indent">I’ve just killed two more men. And I didn’t even flinch.</p>
<p id="indent">Ike and his entourage are in front of me, duking it out. He’s put away two of the men as well, but the rest are giving him a run for his money. Time to even the odds again.</p>
<p id="indent">I push forward, catching one of them by surprise with a knife to the back. He screams, flailing his arms behind him to reach me. Ike kicks him in the face, and he flops over. I retrieve my knife, and together, we clean up the remaining two.</p>
<p id="indent">“You’ve taken killing in stride,” Ike comments.</p>
<p id="indent-adjustment-less">“A wise man once told me, ‘it’s us or them,’ and I’ve made my choice.”</p>
<p id="indent">“Fair enough.”</p>
<p id="indent">“Meow!”</p>
<p id="indent">We look to see Freckles being carried by the three men that went after him, each holding him by a paw upside down. They move to the side of the ship, hoping to toss him off the side.</p>
<p id="indent">“I don’t think so!” Despite the pain it causes, I dash full speed into one of the three men, and Ike knocks another one to the floor. Freckles, now mostly free, pushes against his captor and sends him butt-first to the grass below. We subdue the last two men and turn to face Cleopatra. </p>
<p id="indent">“I see how you’ve managed to get this far,” she smiles. “Too bad brute force isn’t going to cut it.”</p>
<p id="indent">She reveals a second chain, this one with a blade at the end, and cracks it like a whip. The tip lashes at Ike, nicking his suit and giving him a fresh </p>
<p id="page-end">242</p>`
const ch22p8 = `<p id="page-start"> </p>
<p id="no-indent">wound.</p>
<p id="indent">“What is that thing?” I ask.</p>
<p id="indent">“A chain knife,” Ike answers, wiping some of the blood.</p>
<p id="indent">“Well, that’s awful creative naming.”</p>
<p id="indent">“Listen, I don’t decide these things.”</p>
<p id="indent">She swings her long-range weapon, nearly shaving off one of my buns. There’s no easy way to get close to her. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“That’s pretty risky, Freckles. I’m not sure I’d try it if I were you.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“What’s he saying?” Ike asks, ducking under the chain knife as it whizzes by.</p>
<p id="indent">Freckles darts off towards Cleopatra, but as she goes in to swing at him, he adjusts course by a sharp ninety degrees, running slightly ahead of the deadly blade. He runs a circle around her, the knife following close behind, but she realizes what’s happening a little too late.</p>
<p id="indent">Powerless to stop it, the chain binds her upper arms tightly, providing us with a makeshift rope to keep her in check. I rush over and kick her to the floor, hooking the blade into the chain so it doesn’t unravel.</p>
<p id="indent">A swooshing noise fills the air, accompanied by the sound of scattered gunfire. A squad of S-emblazoned ships is approaching.</p>
<p id="indent">“You’re right on time,” I say into my watch, sitting on top of Cleopatra. “With Slaphand dead, I figured I might as well try to capture at least one mob boss alive tonight. We’re on the fancy ship, if you’d be so willing as to not blow us up.”</p>
<p id="indent">“Didn’t plan on it,” Syndra’s voice replies, crackling with static ever so slightly.</p>
<p id="page-end">243</p>`
const ch22p9 = `<p id="page-start"> </p>
<p id="indent">“What will you do, Ike?” I turn to face him.</p>
<p id="indent">Or, rather, where he was standing a minute ago.</p>
<p id="indent">“Ike?”</p>
<p id="indent">I step into the belly of the ship. He’s disappeared entirely.</p>
<p id="indent">“Ike!”</p>
<p id="indent">An airship lands next to the Crowned Jewel, and Syndra emerges from the top deck. Ten guards join him, all pointed and ready. “It’s good to see you again, Luna,” he yells.</p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="indent">A few of Syndra’s ships stayed to clean the area, but I joined the head honcho himself on a trip back to base. An onboard medical team strapped me down and did what they could for my rib, including forcing me to wear a brace. They told me it was “only half-cracked,” as if that were somehow a better situation.</p>
<p id="indent">After, I walked into the cockpit, Freckles by my side. When we arrive, Syndra turns to face me, smiling. “I’m glad you’ve completed the mission without falling apart too much.”</p>
<p id="indent">“When were you gonna tell me your real name, Syndra?”</p>
<p id="indent">His smile falters. </p>
<p id="indent">“As you can imagine, my name hasn’t been popular in Carmsborough ever since Orion and the Clockwork defeated me and ran their propaganda. They had me arrested and sent to jail, but some freedom fighters interested in my cause freed me.</p>
<p id="indent">“I had to restart and rebrand, in a sense. My goals are just as I told you. I want the best for our people. But Orion and the Clockwork would never let me do it again if they knew it was me, so I had to use codenames </p>
<p id="page-end">244</p>`
const ch22p10 = `<p id="page-start"> </p>
<p id="no-indent">and anonymity. Please forgive me for keeping it a secret from you.”</p>
<p id="indent">“But… but you’re a bad guy…”</p>
<p id="indent">“I believe that’s what you’ve been told, but think about what I’ve done for you, and the opportunities I’ve given. What I still plan to give. Who I’ve targeted. Slaphand was a bad guy. Bijabers is a bad guy. Orion isn’t necessarily bad, but is a complicated person who wants something different than I do. If you decide I’m a bad person, then so be it. I’ll let you walk and I won’t contact you again. But if you have any doubt, stick it out. I’ll prove my worth to you.”</p>
<p id="indent">What he says makes sense, and I almost believe him. But why wouldn’t Ike trust him if he really wasn’t a good person?</p>
<p id="indent">Either way, he’s right. He’s going for the truly bad guys. Is it so bad that I help him see it out, even if he does have a darker side?</p>
<p id="indent">I nod my head. “Whatever you say, boss.”</p>
<p id="indent">He smiles again. “I say off to the base for a bit of rest. You must be exhausted.”</p>
<p id="indent">“You could say that.”</p>
<p id="story-break">∙ ◦ ○(<span class="loadbearing">SPACE</span>        )○ ◦ ∙</p>
<p id="indent">My chest has healed exponentially in the time since the battle, so I’ve started physical therapy and some very basic training. It’s a taxing process, and I’m tired of it, but a promise is a promise, and it really does seem to be helping.</p>
<p id="indent">Halfway through today’s session, Syndra walks in, forcing everyone to drop what they’re doing and stand at attention.</p>
<p id="indent">“Calm down, everyone. I’m here for Luna. As is.”</p>
<p id="indent">“What’s up, boss?” I ask, standing. </p>
<p id="page-end">245</p>`
const ch22p11 = `<p id="page-start"> </p>
<p id="indent">“Luna, I’ve told you from the beginning that you would be free to go until I needed you again. I intend to stay true to my word. Therefore, I’ve found the old apartment you lived in and bought the complex. You’ll never have to pay rent so long as you live there.”</p>
<p id="indent">“Thank you, sir. I don’t know what to say.”</p>
<p id="indent">“You don’t have to say anything. As of right now, you are free to leave and go live whatever life you want to live. Keep your transmitter handy, and try not to be more than a day’s notice away from home base, but I will call you when I require your help.”</p>
<p id="indent">He hands me a set of keys. I look at Freckles, who has his head tilted. “We’re going home, bud.”</p>
<p id="indent">I salute at Syndra and walk off, but stop in the doorway of the practice tent. “Oh, I have one more favor. Do you know of any places that sell motorcycles?”</p>
<p id="story-break"></p>
<p id="indent">With Freckles in a cute little sidecar, I ride across the countryside, the rocky road no match for my new all-black motorcycle. The wind feels good on my face. Eventually, we reach the inner city, and even though traffic is slow, I’m as relaxed as ever.</p>
<p id="indent">Well, almost. There’s a little twang in my chest.</p>
<p id="indent">We arrive at our destination, a place I’m all too familiar with. I park the motorcycle in a small little lot, and together, we walk past the wrought-iron gate.</p>
<p id="indent">The dirt under our feet is pretty compact. The path is winding, but I have the destination memorized. It’s a five-minute walk through the graveyard. We stop in front of two markers, one beside the other.</p>
<p id="indent">On my left, a deep obsidian headstone reads my mom’s name. On the </p>
<p id="page-end">246</p>`
const ch22p12 = `<p id="page-start"> </p>
<p id="no-indent">right is Mary’s. I knew nothing but her first name and the day she died, so a good portion of the stone remains empty. At the bottom, I had the maker engrave “There when nobody else was.”</p>
<p id="indent">I sit in front of their graves. Even Freckles seems somber, despite never having met either of them. After half an hour, I decide it’s time to bounce. My hand brushes the tops of each, clearing the dust off.</p>
<p id="indent">“We’ve got things to do,” I say, turning the motorcycle on again. “I’ve felt like something’s been missing, and I think I just figured out what it is.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, it might have a little something to do with him.”</p>
<p id="indent">An hour later, we’re back on board the Constellation, with the motorcycle parked inside, and making our way to the Commerce District. I have an old friend to visit.</p>
<p id="indent">My ship hovers slightly above the crusty scrapyard, which is still busy with work. I push a button on the dashboard for a loudspeaker, catching the attention of the workers.</p>
<p id="indent">“Is Chad at work today?” I ask on the speaker. Down below, a figure walks out of his little office. It’s all the confirmation I need.</p>
<p id="indent">“Luna, is that you? By God, I thought you were dead!”</p>
<p id="indent">“Well, if it isn’t Cheapskate Chad! The man who, for years, paid me under the legal limit, all while working for a ruthless criminal.”</p>
<p id="indent">“It was nothing personal, kid.”</p>
<p id="indent">“It was <em>everything</em> personal. But that’s not why we’re here. Today, you have the honor of being the first victim of Luna Wells, the blood moon pirate. May Carmsborough be healed of people like you.” </p>
<p id="indent">My new crescent moon mask slides down over the left side of my face. </p>
<p id="page-end">247</p>`
const ch22p13 = `<p id="page-start"> </p>
<p id="indent">As I aim my cannon in his direction, I can’t help but grin.</p>
<p id="page-end">248</p>`
const ch22p14 = `<p id="page-start"> </p>
<p id="page-end">249</p>`
const ch22p15 = `<p id="page-start"> </p>
<p id="page-end">250</p>`
const ch22p16 = `<p id="page-start"> </p>
<p id="indent">“Yes, sir. I’m well aware of what it looks like.” </p>
<p id="indent">Ike was pacing the floor of his private jet, running his hands through his hair. A headset covered his ears, blocking most of the loud noises of the jet and the air surrounding it. Attached to that was a microphone.</p>
<p id="indent">“Tell me how that happens, Ike.” </p>
<p id="indent">“Well, Mr. President, I’m not entirely sure. She had no training, but still bested me.”</p>
<p id="indent">“Twice, might I mention.”</p>
<p id="indent">“Yes, sir, twice. But I’ve searched all our files. She doesn’t appear once. I’ve been trying my best to hunt down and persuade as many of these kids to our side as possible. Cog and her friends, Orion, even that kid exploring the <em>Hindenburg</em>. But none of them are as conniving and irrational as her, and she’s not going to be the last.”</p>
<p id="indent">“The last of what? What do we even do in this situation, Ike? They’re only kids.”</p>
<p id="indent">“Yeah, they’re kids. But they’re also some of our best assets, and they’ve all partnered with steambots. The Clockwork, the dove, the rabbit, and the cat. Whenever one of these steambots partners with a kid, things happen, and we need to get ahead of it.”</p>
<p id="indent">“Does this have anything to do with the war?”</p>
<p id="indent">“I think this is bigger than the war, Mr. President. Syndra picked up on it, and I think Bijabers has, too. They’ll be bursting through the doors of every steambot owner in the world soon. I just can’t comprehend why Bijabers and his entourage were moving out of Carmsborough. What do they know is going to happen that we don’t?”</p>
<p id="indent">“We’ll figure this thing out, Ike. Where’s the girl now?”</p>
<p id="indent">“Still hovering around Carmsborough. She’s calling herself the ‘blood </p>
<p id="page-end">251</p>`
const ch22p17 = `<p id="page-start"> </p>
<p id="no-indent">moon pirate.’ It won’t be long before the kids clash, so I’m keeping my eye out.”</p>
<p id="indent">“Why don’t you find and catch her?”</p>
<p id="indent">“Well, speaking from experience, sir, nobody’s been able to catch Luna on the run.”</p>
<p id="page-end">252</p>`
const ch22p18 = ``
const ch22 = [ch22p1, ch22p2, ch22p3, ch22p4, ch22p5, ch22p6, ch22p7, ch22p8, ch22p9, ch22p10, ch22p11, ch22p12, ch22p13, ch22p14, ch22p15, ch22p16, ch22p17, ch22p18]


const chapters = [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10, ch11, ch12, ch13, ch14, ch15, ch16, ch17, ch18, ch19, ch20, ch21, ch22]
function loadChapter(num) {

    chapterList = chapters[num - 1]
    document.getElementById("page1").innerHTML = chapterList[0]
    document.getElementById("page2").innerHTML = chapterList[1]
    document.getElementById("page3").innerHTML = chapterList[2]
    document.getElementById("page4").innerHTML = chapterList[3]
    document.getElementById("page5").innerHTML = chapterList[4]
    document.getElementById("page6").innerHTML = chapterList[5]
    document.getElementById("page7").innerHTML = chapterList[6]
    document.getElementById("page8").innerHTML = chapterList[7]
    document.getElementById("page9").innerHTML = chapterList[8]
    document.getElementById("page10").innerHTML = chapterList[9]
    document.getElementById("page11").innerHTML = chapterList[10]
    document.getElementById("page12").innerHTML = chapterList[11]
    document.getElementById("page13").innerHTML = chapterList[12]
    document.getElementById("page14").innerHTML = chapterList[13]
    document.getElementById("page15").innerHTML = chapterList[14]
    document.getElementById("page16").innerHTML = chapterList[15]
    document.getElementById("page17").innerHTML = chapterList[16]
    document.getElementById("page18").innerHTML = chapterList[17]
}