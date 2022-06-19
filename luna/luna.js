var page = 0;
    
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
const allowedInnerWidth = 800;


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

const chapterSelection = `  <option value="1" class="dropper">Chapter 1</option>
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
                        <option value="18" class="dropper">Chapter 18</option>`

var mobileFlip = false

const ch1p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 1</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">It’s hard to remember a time before I had to resort to stealing. </p>
<p id="indent">Well, that’s not entirely true. I remember the begging phase, too. Begging for food, money, a bed to sleep on, and to be accepted by an orphanage. </p>
<p id="indent">That was all I could do after mom died. The landlord kicked me out of our apartment when I couldn’t afford rent. I’d go to busy streets and churches, hoping someone would be generous enough to help me out, but it never got me anywhere. So, I switched to stealing.</p>
<p id="indent">Is it moral? </p>
<p id="indent">Is forcing a kid to live on the street for their entire teenage life because their only living parent dies moral? Is going to church to listen </p>
<p id="page-end">1</p>`
const ch1p2 = `<p id="page-start"> </p>
<p id="no-indent">to a sermon about helping the poor sinner, but ignoring the starving child on the front steps moral? Is making a teenager work fifty-hour workweeks for just pennies a day moral?</p>
<p id="indent">I didn’t think so.</p>
<p id="indent">I’ve had this conversation in my head every day since I’ve started working at Cheapskate Chad’s. It’s always a lot shorter than the walk itself, which varies in length depending on where I’m living. </p>
<p id="indent">This month, it’s a crumbling apartment complex about twenty minutes away from the scrapyard. The building was probably abandoned a decade ago, but it had clearly started falling apart much earlier than that. I give it a month before the police decide to clean the place out and force me to move again.</p>
<p id="indent">“Meow,” I hear from behind me. Sounds like Freckles agrees.</p>
<p id="indent">“That’s sort of what I was thinking, too.” I scoop him up in my arms, and he climbs up my shoulder and around my neck like an uncomfortable scarf. Certainly the laziest robot cat I’ve ever seen.</p>
<p id="indent">“You ready for another fun day at Cheapskate Chad’s?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Trust me, I would if I could. Unfortunately, my ideas are all illegal, and you don’t like those kinds of ideas.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“But I’m morally justified when I steal.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“It’s not a double standard. Everything’s been stolen from me, so I might as well do it myself.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I’m not arguing with you again today. We’ve gotta get moving if we </p>
<p id="page-end">2</p>`
const ch1p3 = `<p id="page-start"> </p>
<p id="no-indent">want to get to work on time.”</p>
<p id="indent">We walk out of the defunct building, the ticking of his metal parts echoing quietly in the empty halls. A chilled wind whistles through the holes in the first-floor walls. It’s a good thing this year has been abnormally warm, because I lost my jacket in the last move. I’ll have to find one that I can “borrow” soon.</p>
<p id="indent">“Ready?” </p>
<p id="indent">Freckles tilts his mechanical head, as if acknowledging he doesn’t have much of a choice.</p>
<p id="indent">He’s a one-of-a-kind steambot, built by some super-smart engineer they call the Gearmaster. The dude’s apparently built almost a hundred creatures like the brass tabby wrapped around my neck, but they’ve lost a lot of their spark in the public eye.</p>
<p id="indent">At least, compared to the Clockwork. Some kid named Orion saved all of Carmsborough with the Clockwork by his side, and now they’re heroes. The rest of his life is handed to him, while I get to slave away at the scrapyard for pennies a day.</p>
<p id="indent">All I’m saying is, put me and Freckles in their position, and we would’ve done it, too. Maybe even better.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“What, you don’t think we could’ve done better? I’ve seen you in action, Freckles. No Syndra punk could get past you and me.”</p>
<p id="indent">The streets of Carmsborough are always quiet this early, but today feels different. Maybe today is Christmas? I don’t really have access to a calendar, but I do know it’s December. Although, I’d imagine Cheapskate Chad would’ve mentioned it yesterday. </p>
<p id="indent">Freckles and I reach the scrapyard entrance, and everyone’s lined up </p>
<p id="page-end">3</p>`
const ch1p4 = `<p id="page-start"> </p>
<p id="no-indent">for attendance. We go to the spot at the end of the line and wait for Chad to write us down. </p>
<p id="indent">“Good morning, Luna,” he says, finally reaching me for attendance.</p>
<p id="indent">“Yeah, it might be. We’ll just have to find out.”</p>
<p id="indent">“Today’s only eight hours. We’re shutting down for the next few days for Christmas, and we’ll start back up on the day after.”</p>
<p id="indent">Guess that sort of answers my question.</p>
<p id="indent">“Keep your cat out of trouble today, please,” Chad says, moving along to the person behind me.</p>
<p id="indent">“You say that every day, and yet nothing happens.”</p>
<p id="indent">“Nothing happens <em>because</em> I say it every day.”</p>
<p id="indent">“Sounds like flawed logic to me.”</p>
<p id="indent">“Meow,” Freckles interrupts.</p>
<p id="indent">“Are you gonna patronize me all day, Freckles? I know flawed logic when I see it.”</p>
<p id="indent">We head across the scrapyard and to our spot, avoiding sharp metal fragments along the way. Basins full of metal and plastic scraps as deep as I am tall are scattered throughout the scrapyard, which is contained by one dinky iron fence. The pathways between them are rarely walkable without playing hopscotch.</p>
<p id="indent">Basin thirteen is our home. We spend hours each day sorting loose material into bins and hauling it over to basins six and seven. Today was going to be no different. Metals to six, plastics to seven. Fill a bin, wheel it over, and repeat. If we meet the quota, we get a bonus. </p>
<p id="indent">Freckles and I always meet the quota. I think Foreman Chad would be against our little team-up if it wasn’t beneficial for him. He gets double the labor for the price of one, and we get an extra quarter. A dollar a day </p>
<p id="page-end">4</p>`
const ch1p5 = `<p id="page-start"> </p>
<p id="no-indent">hardly gets you anywhere, but it builds up over time. </p>
<p id="indent">And with a few more weeks, I’ll have saved up enough to get myself some respectable clothing and find a job that actually pays. After that, an apartment, and home-cooked meals, and on and on.</p>
<p id="indent">We’ve had a few setbacks. I lost twenty dollars in the jacket that was left behind, and here and there I’ve had to buy food or a new button for my overalls. Despite the setbacks, we’re less than a month away from freedom.</p>
<p id="indent">And then I’ll finally be done stealing.</p>
<p id="indent">I glance at Freckles to see if he has any more wise remarks, but he’s just staring at one of the scrap pieces in our basin. It has a flashing red light and keeps letting out a soft beeping noise. </p>
<p id="indent">Freckles grabs it out of the pile, carries it over to me in his metal mouth, and drops it in my hand. The surprisingly heavy black cube almost looks like it plugs into something on one end. </p>
<p id="indent">And maybe worth a lot.</p>
<p id="indent">“I wonder if our friend in the Commerce District might be interested in this,” I say, putting it in one of my overalls’ side pockets. “Might just boost us to where we need to be for that new set of clothes.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I know, hopeful thinking. Sometimes you’ve gotta have a little hope, Freckles. You’re such a downer all the time.”</p>
<p id="indent">“Meow.”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">By the time our shift ended, nothing else interesting had happened, so we got our dollar from the Foreman and started the trek to find the </p>
<p id="page-end">5</p>`
const ch1p6 = `<p id="page-start"> </p>
<p id="no-indent">man at the docks. Fortunately for us, the Industrial District is right next to the Commerce District, so the walk isn’t unbearably long.</p>
<p id="indent">We weave through the streets for about an hour, stopping only for the occasional car, and eventually reach the first set of docks in the district.</p>
<p id="indent">Carmsborough docks are unique, to say the least. Half of them sit at sea level, while the other half hover about thirty feet in the air, supported by dangerously skinny wooden beams. </p>
<p id="indent">A loud whistle sounds off to our right. We look over and see a cloudship in one of the upper docks about to set sail. Its balloon is massive and seems like it could pop with the slightest touch. </p>
<p id="indent">Once upon a time, I wanted to fly in a cloudship. They’re a strange Carmsborough invention that can sail both the seas and the skies, but have such a limited range that they’re hardly worth anything commercially. Most can only make it as far as London before needing a refuel. Still, to feel the breeze in your hair like that…</p>
<p id="indent">Maybe someday. For now, there’s a beeping gadget to pawn off.</p>
<p id="indent">“Is that Luna I see?” I hear from across the cobbled street. It belongs to Shady Shane, sitting on a bench, wearing an overcoat that is definitely too big. </p>
<p id="indent">“Well, if it isn’t the man of the hour,” I say, making my way over. “I’ve got something I think you’ll be interested in, Shane.”</p>
<p id="indent">“Let’s see it, then.” He smiles at me, revealing missing teeth and… dirt? Cavities? I’m not sure.</p>
<p id="indent">“Remember, no running off with what I give you.” I reveal the noisy object in my hand and offer it to him. “Freckles is a lot faster than both of us, and heavier than you’d expect.”</p>
<p id="page-end">6</p>`
const ch1p7 = `<p id="page-start"> </p>
<p id="indent">“Yes, yes, I remember.”</p>
<p id="indent">He takes the item from me and gives it a solid look for about ten seconds before his eyes go wide. The item falls out of his hand and drops to the ground as he bolts up from the bench.</p>
<p id="indent">Are you trying to get us in trouble, kid?” </p>
<p id="indent">“What? No? What is it?”</p>
<p id="indent">“That belongs to a mob boss. See that ‘B’ on the side of it? He marks all of his important mob boss stuff with that. Where’d you find this?”</p>
<p id="indent">“I found it at the scrapyard. Are you sure it belongs to a mob boss?”</p>
<p id="indent">“Oh God, what if that beeping is a tracker? What if you’ve led him straight to us?”</p>
<p id="indent">“Calm down, Shane. Who’s the mob boss?”</p>
<p id="indent">“Get away from me, Luna, and don’t come back until you’ve gotten rid of that thing.”</p>
<p id="indent">Shane glances one last time at me, Freckles, and the machine, and dramatically darts off down the street. </p>
<p id="indent">I came all the way to the Commerce District for <em>this</em>?</p>
<p id="indent">I pick the item back up and put it back in one of my pockets. There’s no way what Shane is saying is true. Probably just another one of his schizophrenic rants. He’ll be back in an hour, apologizing for the outburst.</p>
<p id="indent">That said, he’s never acted that way when I’ve brought him an item. Could it really belong to a mob boss? And, second question, could I give it back to said mob boss for a small chunk of change?</p>
<p id="indent">Both are excellent questions for when Shane comes back and apologizes to me. While I’m here, I might as well hunt for dinner or something else to scavenge.</p>
<p id="page-end">7</p>`
const ch1p8 = `<p id="page-start"> </p>
<p id="indent">With Freckles still beside me, I work my way through the buildings between the Commerce and Industrial districts, and the smell of warm bread wafts our way. It’s heaven to my nose every time. </p>
<p id="indent">I make a beeline straight for the source and find myself face-to-face with Thatch’s Bakery. It’s been about three months since I’ve had fresh bread like this, and I’ll have to keep waiting. Freckles and I loop around to the back, hoping to discover a dumpster to raid.</p>
<p id="indent">It’s not stealing if you didn’t want it anyway, I don’t think. I don’t know. I’m sure a lawyer wouldn’t agree with me, but if it’s in the dumpster, what more are you going to do with it? I lift the lid, and…</p>
<p id="indent">Jackpot.</p>
<p id="indent">A dumpster <em>filled</em> with bread. They must’ve just cleaned their inventory. If I’d planned to go to the Commerce District this morning and go scavenging, I would’ve grabbed a bag or two to take stuff in. I guess I’ll have to settle with whatever I can fit in my arms.</p>
<p id="indent">“You plannin’ on sharin’?” a voice says behind me. My hand isn’t even all the way in the dumpster yet. Freckles starts his metallic growling.</p>
<p id="indent">I turn to see who it is, but I don’t recognize the guy. Probably just some random scavenger, and I’m in one of his claims.</p>
<p id="indent">Of course the place with a dumpster full of bread is gonna have claims already staked. You’ve outdone yourself this time on the critical thinking test, Luna.</p>
<p id="indent">“Yes, sir, I certainly am planning on sharing,” I say, backing away from the dumpster. “I wasn’t sure if this was claimed or not, but I’m desperately hungry. You wouldn’t have a problem with a little girl like me getting some food here, right?”</p>
<p id="indent">“Normally I wouldn’t,” he says, walking closer to me, “but said little </p>
<p id="page-end">8</p>`
const ch1p9 = `<p id="page-start"> </p>
<p id="no-indent">girl has one blaring flaw that I simply can’t ignore.”</p>
<p id="indent">“Oh, don’t you dare say it. Let’s not be racist, now.”</p>
<p id="indent">He pulls a knife out of his sleeve and points it at me. “This little black girl is in the wrong part of the city.”</p>
<p id="indent">I was really hoping to make it a full week without getting into a fight in some back alley. Truly, I was. </p>
<p id="indent">After all, blood stains are awful hard to get out of my overalls.</p>
<p id="indent">Freckles and I charge the guy at the same time, but Freckles connects first. The man takes a metal cat to the chest and smacks against the cobblestone wall of one of the alley buildings. In retaliation, he grabs onto Freckles and tosses him away. The distraction lets me get in and kick at one of his legs.</p>
<p id="indent">He screams out in pain and swings at me with his knife. I dodge back and out of reach, lining Freckles up for the next shot. He jumps on the man’s back, sending them both stumbling towards me. My fist flies out and lands on his nose, making an unpleasant cracking sound that makes me queasy every time.</p>
<p id="indent">He yells again, holding his nose with his free hand. “You broke my nose, you stupid b—”</p>
<p id="indent">In one last motion, I sweep his legs out from under him, and he lands on his back. The knife clatters down at his side, which Freckles picks up in his mouth.</p>
<p id="indent">“Let’s move,” I say, wiping my bloody hand on my overalls and moving to the dumpster. I grab three or four loaves, hug them to my chest, and the two of us leave the alley as quick as possible.</p>
<p id="indent">I’m not even sure which way we’re technically going. That’s something I’ll have to figure out later. </p>
<p id="page-end">9</p>`
const ch1p10 = `<p id="page-start"> </p>
<p id="indent">We traverse a couple of back alleys and emerge on a different street. I slow my pace and join the crowd flowing along the sidewalks. For all they know, we didn’t do anything. We bought this bread with our hard-earned money and didn’t just fight another homeless person for it.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Look, I’m not proud of what happened either, Freckles, but he had it coming. Besides, we needed this bread.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Okay, I needed this bread. Obviously, you don’t eat, so there’s no reason you would—”</p>
<p id="indent">“Meow.”</p>
<p id="indent">Freckles stops and tugs at the pocket of my overalls where the beeping object is. </p>
<p id="indent"><em>Beep beep. Beep beep.</em></p>
<p id="indent">It’s going faster.</p>
<p id="indent">Oh my God, maybe it is a tracker. Or a bomb. Or it’s leading us to something.</p>
<p id="indent">I pull it out, and sure enough, the red dot is flashing at the same rate as the beeping. </p>
<p id="indent">“You realize we have to test this, right?”</p>
<p id="indent">Freckles looks at me with a blank stare. I’m gonna assume that means he agrees.</p>
<p id="indent">The two of us hurry back to near Thatch’s Bakery, and listen to the beeping.</p>
<p id="indent"><em>Beep. Beep.</em></p>
<p id="indent">“It <em>is</em> leading us to something!”</p>
<p id="indent">“Meow.”</p>
<p id="page-end">10</p>`
const ch1p11 = `<p id="page-start"> </p>
<p id="indent">“Of course this is a good idea, Freckles. Where’s that bravado you had last year when we went down to the old fishing dock?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Well then, let’s go. Maybe it’ll lead us to treasure. Besides, we don’t work tomorrow, so we can afford to have an overnight hunt.”</p>
<p id="indent">We head back out to the spot Freckles first noticed the beeping at and check to make sure it’s still beeping faster before starting our adventure.</p>
<p id="indent"><em>Beep beep. Beep beep.</em></p>
<p id="indent">There won’t be very many alley shortcuts on this adventure. Looks like the rest of Carmsborough gets to see me walking around, bread clung to my chest, following a beeping cube in my hand.</p>
<p id="indent">Even though all of Carmsborough was sectioned out into districts nearly a hundred years ago, the gray streets and the buildings that fit in between them are winding and pattern-less. Most buildings don’t even have alleyways, and the ones that do are usually rat infested or occupied by someone just as fortunate as me.</p>
<p id="indent">We cross the streets and walk the cracked sidewalks through the Commerce District, avoiding cars and bikers whenever possible.</p>
<p id="indent"><em>Beep beep beep. Beep beep beep.</em></p>
<p id="indent">“Closer…”</p>
<p id="indent">This is the furthest I’ve ever been inside of the Commerce District. Buildings are taller and more modern now, with large, reflective windows, lots of metal, and people wearing suits coming in and out of the fancy spinning doors.</p>
<p id="indent">I’ll bet if I robbed one of these suits, they’d be loaded with cash.</p>
<p id="indent">“Meow.”</p>
<p id="page-end">11</p>`
const ch1p12 = `<p id="page-start"> </p>
<p id="indent">“I know, I know. Doesn’t stop me from thinking about it sometimes, though.”</p>
<p id="indent">I spot a wide alley up ahead, which looks like it opens up to a second set of docks. Did we somehow already cross this entire section of the Commerce District? Either way, that alley is the perfect shortcut to end our treasure hunt sooner.</p>
<p id="indent">The sun is a lot lower in the sky now, and hides behind most of the towers we pass. The alley is lit only by the sunlight that can sneak around the two buildings that form it. We step in and see the ocean not too far away. The beeper better not be leading us into the ocean. I didn’t pack my swimsuit today. Not that I own one.</p>
<p id="indent">A man steps into the alley in front of me, wearing a suit that hardly fits his muscular structure. I stop dead in my tracks, and Freckles gets down into a defensive position.</p>
<p id="indent">“Thank you so much for bringing me back my tool,” a voice echoes from where we entered the alley. I turn to see a bald man with abnormally large hands.</p>
<p id="indent">Like, huge hands. Big enough that there’s no way all his shirts don’t have stretched-out sleeves. He could easily wrap one around my head.</p>
<p id="indent">“I’m not sure what you’re talking about,” I say, not taking my eyes off of the pancakes attached to his arms. He’s pretty tall, too–maybe almost seven feet. This poor man and his awful proportions.</p>
<p id="indent">“That device in your hand belongs to me,” he says. “I would appreciate if you gave it back without causing too much trouble.”</p>
<p id="indent">I look behind me again. The muscular man at the other end of the alley is much closer now.</p>
<p id="indent">Something tells me there’s no easy way out of this.</p>
<p id="page-end">12</p>`
const ch1p13 = ``
const ch1p14 = ``
const ch1p15 = ``
const ch1p16 = ``
const ch1p17 = ``
const ch1p18 = ``
const ch1 = [ch1p1, ch1p2, ch1p3, ch1p4, ch1p5, ch1p6, ch1p7, ch1p8, ch1p9, ch1p10, ch1p11, ch1p12, ch1p13, ch1p14, ch1p15, ch1p16, ch1p17, ch1p18]

const ch2p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 2</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“So what’s this device do, anyway?” I ask, stalling. There’s nothing in the alley to fight with, and no way out without plowing through one of them. “Does it lead you to some buried treasure or something?” </p>
<p id="indent">“You’ll never find out.” The man cracks his hand-sized knuckles.</p>
<p id="indent">“Bet you’re wrong. You know, I’ll bet when you clap, it sounds like a building collapsing.” </p>
<p id="indent">“That’s a good one. Not very original, but a good one nonetheless.” He steps closer.</p>
<p id="indent">Do I take on the big-handed guy and the muscular guy, or give them the beeper thing and pray they let me go? </p>
<p id="indent">Freckles, apparently making the choice for us, lets out a loud roar </p>
<p id="page-end">15</p>`
const ch2p2 = `<p id="page-start"> </p>
<p id="no-indent">and charges the guy behind us. I follow suit, yelling and charging. </p>
<p id="indent">The goon braces for impact and handles the attack of the heavy metallic beast pretty well, but crumbles when I collide right after. The three of us fall, all in one messy pile. The loaves of bread in my arm suffered a bit, but they’re still edible. </p>
<p id="indent">With a yell, the large-handed man rushes down the alley. Freckles and I pause for a second before I scramble to get up and we run for the docks. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I noticed we’re in trouble, Freckles. What would you have recommended back there?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“This thing might lead to a jackpot. I couldn’t just hand it to the first disproportionate enemy I crossed.”</p>
<p id="indent">My clunky boots and his heavy paws rattle against the boards of the old wooden dock with every bound, turning heads and clearing a path in front of us. I don’t dare check to see how close they’ve gotten. The last thing I want is to be tackled by a grown man on a densely populated dock.</p>
<p id="indent"><em>Beep beep beep beep. Beep beep beep beep.</em></p>
<p id="indent">Cloudships with different-colored balloons blur past us, all in different stages of docking or undocking. For a moment, I get distracted by their designs. Some are really artistic, but the rest have a simple pastel color.</p>
<p id="indent">Reality comes crashing back to me immediately, when my eyes lock onto a cart of melons being wheeled out in front of me. Freckles manages to jump out of the way of the cart to avoid it, but I swerve </p>
<p id="page-end">16</p>`
const ch2p3 = `<p id="page-start"> </p>
<p id="no-indent">way too late, crashing into its side. An army of watermelon dislodges from the display, rolling all over the place.</p>
<p id="indent">I drop all of the bread instinctively and let myself look back at the two men chasing us. They’re far enough away, but closing in quickly. With the beeper still in my hand, and going off insanely fast, I grab a loaf of bread and a small melon and zip right around the cart.</p>
<p id="indent">“Hey!” the cart owner yells out. “You’ve gotta pay for that!” </p>
<p id="indent">“Sorry, not sorry!” I yell back, rejoining Freckles. We make it a little further before a loud crash reverberates through the sea-soaked wood. I don’t even have to look back to know they charged into the cart. They’re not gaining on us all that much, but I still have no clue where the beeper is leading us—</p>
<p id="indent"><em>Beeeeeeeeeeeep.</em></p>
<p id="indent">We stop right in front of a plain, unassuming cloudship. This must be the spot the device wants us to be at. But why?</p>
<p id="indent">Freckles and I exchange a brief glance and simultaneously decide to hop on board. </p>
<p id="indent">My first time on board a cloudship, and it’s because I’m hiding from a mob boss.</p>
<p id="indent">We hurry inside, climbing down a flight of stairs where I can only assume the steering wheel is. I hope they didn’t spot which ship we went inside. Then again, they’ll probably figure it out anyway.</p>
<p id="indent">“Meow.” Freckles points his head towards a smaller room. Its lights are off, but I can faintly make out a steering wheel and a few other buttons in the faint sunlight peeking in from the windows.</p>
<p id="indent">“You’re the best, Freckles,” I whisper, despite knowing that the beeping of the device is still active and incredibly loud, and tiptoe into </p>
<p id="page-end">17</p>`
const ch2p4 = `<p id="page-start"> </p>
<p id="no-indent">the room. I feel my hand along the wall, searching for a light switch, which reveals labels, cables, and an array of unlabeled buttons. Luckily for us, someone left the keys inside of the ignition.</p>
<p id="indent"><em>Creak.</em></p>
<p id="indent">A board above us strains under the weight of a foot. If there’s any time to kick this puppy into full gear, it’s now.</p>
<p id="indent">I carefully set the bread and watermelon down on the floor and turn the key in the ignition. The controls in front of me spring to life, and somewhere on board, the hum of the engine kicks in. </p>
<p id="indent">“Alrighty, how do we get this thing moving?”</p>
<p id="indent">The sound of footsteps descends the stairs behind us. Freckles readies himself, waiting to pounce behind the doorframe. My eyes frantically scan the buttons and levers in front of me for some sort of clue. They land on a large switch that says “ENGAGE LOCK” at one end and “DISENGAGE LOCK” on the other. It’s flipped up in the engaged position.</p>
<p id="indent">“Here’s to this being the right thing to do,” I say, pulling the lever. The ship lurches, and my gut slams into the wheel. The footsteps in the other room stumble but continue in our direction.</p>
<p id="indent">The ship rises a bit and moves forward, marking our ascent away from the commerce dock. I turn and clench my fists, ready to fight the man on board. He appears in the doorway, and Freckles launches himself at the thug. </p>
<p id="indent">The man, caught entirely off guard, is forced backwards by the impact. His head connects with a metal pipe jutting out from the wall, which cracks open, spraying out what I can only hope is steam. He hits the floor, clearly unconscious.</p>
<p id="page-end">18</p>`
const ch2p5 = `<p id="page-start"> </p>
<p id="indent">I unclench my fists and stand in shock.</p>
<p id="indent">“Well, uh, good job, Freckles.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Now what do we do?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">I turn back towards the cockpit windshield. The shock on my face turns to horror.</p>
<p id="indent">We’re on track to collide with another cloudship.</p>
<p id="indent">“Ohmygod ohmygod ohmygod!”</p>
<p id="indent">I spin the steering wheel quick and hard to the right, sending the whole ship tilting and shuttering. There’s a long bar next to the steering wheel that looks like it can be moved up and down, so I give it a tug. My stomach flips as the ship sinks lower in the air, coming closer to the crashing waves below us.</p>
<p id="indent">The cloudship disappears from view above us as we limbo between it and the ocean, but just in front of us, two more ships appear. And, of course, both are directly in our path.</p>
<p id="indent">“I should’ve gone up.” I pull the bar down towards me as hard as possible. The commandeered ship groans under the strain, but does as told, and narrowly dodges them.</p>
<p id="indent">I scan the entire cockpit window, making sure that was the last of the fun obstacles in our way. The sky is a kaleidoscope of colors, unblotted by any clouds or more cloudships. It might be beautiful, if I weren’t choking on adrenaline.</p>
<p id="indent">“Meow.”</p>
<p id="indent">Freckles nudges one of the unconscious man’s arms, which flops lifelessly back to the floor. His victim, the muscular man we’d had the </p>
<p id="page-end">19</p>`
const ch2p6 = `<p id="page-start"> </p>
<p id="no-indent">pleasure of meeting earlier in the alley, clearly never stood a chance.</p>
<p id="indent">“We should tie him up in case he wakes up again.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I sure hope there’s rope. Otherwise, we’re in some serious trouble. And I have no intention of throwing him off into the ocean.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I figured you’d appreciate that.”</p>
<p id="indent">I duck under the steam still spewing out of the pipe, and the two of us go to explore the small ship, hunting for rope or something similar to tie the thug down.</p>
<p id="indent">“Can we talk about how well I handled steering this thing back there? I was a natural. Didn’t even know what that bar did.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“No, it wasn’t luck. It’s called intuition.”</p>
<p id="indent">On the top deck, we discover a storage room filled with random food, miscellaneous tools, and an incredibly thick rope long enough to stretch the entire length of the ship. I can’t even wrap my hand around its circumference. Carrying this much rope is out of the question.</p>
<p id="indent">“Well, this sucks. Any more ideas?”</p>
<p id="indent">Freckles leans forward and opens his mouth, letting the knife we took from the homeless man earlier clatter to the ground. </p>
<p id="indent">“Wait, you’ve been stashing that in there the entire time? Where was that when we were pinned down in the alley?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Oh no, sir. You don’t get to claim moral high ground when we’re facing certain doom like that. We’re going to have a serious conversation about when it’s okay to stab people after we get this </p>
<p id="page-end">20</p>`
const ch2p7 = `<p id="page-start"> </p>
<p id="no-indent">figured out.”</p>
<p id="indent">I roll a solid portion of rope off of its comically large spindle and start cutting away at it with the knife. Then, I throw one end over my shoulder and drag the rest of it behind me on the ground. Freckles bats at it all the way back down to the unconscious man on the lower level.</p>
<p id="indent">Freckles grabs the opposite end of the rope in his mouth, and together we bind the motionless man until the rope is barely sticking out from the wrapped mess. I tie the thick rope to the best of my ability, and we push the man against a wall.</p>
<p id="indent">“Fingers crossed that holds him. I’m gonna get some dinner now.”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Despite having an understandably limited stock of food, I collect some cheese, water, and a barrel full of peanuts to match the bread and watermelon I’d stolen earlier. There’s also beer, but I don’t figure driving an airship for the first time and holding a man three times my size captive drunk is a good idea.</p>
<p id="indent">I bring the food and water down with me to the cockpit, which is getting uncomfortably warm with the steam still leaking out of the broken pipe. My next goal is to find something to patch that up with, because there’s no way that pipe isn’t important.</p>
<p id="indent">It doesn’t take me long to finish half of the small watermelon, which I cut using the stolen knife, so I switch to some of the other foods in front of me.</p>
<p id="indent">“You know, this is easily my most diverse meal this month. Maybe this actually was a good idea.”</p>
<p id="indent">“Meow.”</p>
<p id="page-end">21</p>`
const ch2p8 =`<p id="page-start"> </p>
<p id="indent">“But think of all the possibilities. We could go to London, or even France, if we want. We could become sky pirates and fight for justice. Think about it: ‘Captain Luna, the blood moon pirate.’ How does that sound?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I’ve been sitting on that one for a while. I think it has a nice ring to it.”</p>
<p id="indent">Red flashing lights go off in the cockpit, partnered with a blaring siren. Freckles and I bolt upright, startled by the interruption.</p>
<p id="indent">“I’m not sure what this means,” I say, hunting for clues on the dashboard. Nothing jumps out at me. A scan of the windshield leaves me empty-handed, too.</p>
<p id="indent">I run up to the top deck of the ship and gander at the rest of the area. Behind us, five cloudships are slowly approaching, each bearing the same ‘B’ symbol as the beeper in my pocket.</p>
<p id="indent">The beeper.</p>
<p id="indent">I can’t believe I forgot about the beeper! It’s hard to notice over the sirens, but the beeping object is still violently flashing to its high-pitched tempo. It has to belong to something here.</p>
<p id="indent">I rush back down to the cockpit. Freckles is hunched down, his back arched angrily. </p>
<p id="indent">“We’ve got company following us,” I say, searching for a spot to plug the strange item in. “I think we’ll have to loop back to Carmsborough. I doubt there’s enough gas to outrun these guys, or any weapons to slow them down.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I can’t stop on a dime midair, Freckles. Besides, I don’t think </p>
<p id="page-end">22</p>`
const ch2p9 = `<p id="page-start"> </p>
<p id="no-indent">they’re going to be all that friendly with us after what we did to brawns in the corner.”</p>
<p id="indent">I turn the steering wheel left, trying to make my way back to the docks without getting rammed by the five enemies slowly charting their path to us. </p>
<p id="indent">Now what to do with the beeper?</p>
<p id="indent">Freckles and I search the ship again, looking in rooms new and old for a place to put the cube. Through the windows, we can see Carmsborough slowly reappearing along the horizon, and the ships edging slightly closer by the minute. </p>
<p id="indent">A click sounds across the ship, turning off the alarms on board. A loud noise rustles before a voice speaks. “Stop your ship and allow yourself to be boarded, kid.”</p>
<p id="indent">“How do we talk back to them?” I ask Freckles, who stares blankly at me. We hurry back to the cockpit again, and I find a button for a push-to-speak microphone.</p>
<p id="indent">“Sorry, that isn’t gonna happen. Tell me what this device does, and maybe we can talk about touching base.”</p>
<p id="indent">“You’re in way over your head, girl. The last thing you want is to make my boss more upset than he already is.”</p>
<p id="indent">“Tell your boss I want five thousand dollars for the safe return of his ship and this cube thing.”</p>
<p id="indent">“This is not a negotiation. You are in no position to give demands. We have no problem knocking you out of the sky.”</p>
<p id="indent">“Oh, please. You haven’t knocked me out of the sky yet because you need this cube. You wouldn’t dare.”</p>
<p id="indent">The line goes silent for a moment, and I turn to go back to </p>
<p id="page-end">23</p>`
const ch2p10 = `<p id="page-start"> </p>
<p id="no-indent">searching. Then, while climbing up the stairs, I hear loud wood cracking coming from every direction. Bullets pound the hull of the ship, and although neither of us are close enough to be in too much danger, the warning is clear.</p>
<p id="indent">“Last chance, kid. Stop now, or we will rain fire on you until you have no choice but to crash and burn.”</p>
<p id="indent">There’s one last room we haven’t checked yet, so I finish running up the stairs and burst into the door. A forward-facing window reveals how close to Carmsborough we really are. Barely a minute more, and we could try to dock.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I know, Freckles, but it has to be–there!”</p>
<p id="indent">Right in front of us is a strange black machine, as tall as I am, with a plug that looks like the handheld beeper would fit perfectly inside.</p>
<p id="indent">What could it do? Is it a shield? Or a gun? Or some sort of teleporter that will take me to a safe place?</p>
<p id="indent">I plug the object into the machine without hesitation, and it lights up dramatically. Some inner mechanisms begin whirring, shaking the room and creating an unpleasant sound. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“I, uh, don’t know what it’s doing either.”</p>
<p id="indent">“What have you done?” the voice on the speaker calls out again, a quiver in their voice. </p>
<p id="indent">Just outside the window, a bright, glowing light appears, coming from right below where the machine sits on board. Its color slowly gradients from white to red, and the buzzing gets louder. </p>
<p id="indent">Heat waves warp the room. The glass window slowly turns a </p>
<p id="page-end">24</p>`
const ch2p11 = `<p id="page-start"> </p>
<p id="no-indent">dangerous pink-red shade and melts away. A layer of sweat cakes my forehead, forcing Freckles and I to back up. The wood of the ship glows and smolders, and the light expands outward a bit more.</p>
<p id="indent">Oh god. What <em>have</em> I done?</p>
<p id="indent">Without warning, the bright light shoots off in a straight line down to the dock. Below us, the boardwalk erupts in flames, and a loud explosion sounds off. Embers, ash, and scraps of different materials are thrown into the air.</p>
<p id="indent">People scatter in different directions–some towards the chaos, but most away from it. The beam of light deactivates, and the machine in front of us comes to a screeching halt. Alarms go off again. There’s no doubt the cloudships following behind us are close to connecting with and boarding our ship.</p>
<p id="indent">I’m starting to think I might be in a little bit over my head.</p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="page-end">25</p>`
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
<p id="indent">Freckles and I make the descent back down to the docks in our hijacked ship. A horde of people is surrounding the damage I caused with the laser beam. The ships behind us are a stone’s toss away, but clearly letting us land instead of tearing us apart with bullets. </p>
<p id="indent">“I think I messed up, Freckles.” Fear pricks at the corners of my eyes, and my arms are permanently tensed. Adrenaline’s rushed through my body too many times today, and I can already feel myself winding down again. </p>
<p id="indent">Freckles doesn’t even spare the energy to reply. We both understand how bad of a situation this is.</p>
<p id="indent">And, unlike every other situation I’ve been in, I can’t just run </p>
<p id="page-end">24</p>`
const ch3p1mobile = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 3</p>
<p id="chapter-bar">____________________</p>
<p id="indent">Freckles and I make the descent back down to the docks in our hijacked ship. A horde of people is surrounding the damage I caused with the laser beam. The ships behind us are a stone’s toss away, but clearly letting us land instead of tearing us apart with bullets. </p>
<p id="indent">“I think I messed up, Freckles.” Fear pricks at the corners of my eyes, and my arms are permanently tensed. Adrenaline’s rushed through my body too many times today, and I can already feel myself winding down again. </p>
<p id="indent">Freckles doesn’t even spare the energy to reply. We both understand how bad of a situation this is.</p>
<p id="indent">And, unlike every other situation I’ve been in, I can’t just </p>
<p id="page-end">24</p>`
const ch3p2 = `<p id="page-start"> </p>
<p id="no-indent">away. Even if I do manage to escape the scene somehow, there’ll be cops and mobsters looking to hunt me down all throughout the streets of Carmsborough. It wouldn’t take long before I’d get caught.</p>
<p id="indent">How do you explain that to the cops? A mob boss was chasing me, so I stole one of their airships and tried out a technology I didn’t understand as a last-ditch effort to avoid death, only to find out it would vaporize an entire portion of the Commerce District?</p>
<p id="indent">For that matter, how would I explain this to the mob boss? I wanted to exploit you for money, and when that didn’t work, I took the nuclear option?</p>
<p id="indent">I’d get off easier with the cops.</p>
<p id="indent">I shakily land the ship back down, barely making it to one of the cloudship docks. There’s no way for me to tell if anyone’s waiting for us outside, but I can almost guarantee there is. I look down at Freckles. Even though he has no way to show emotion, I can tell he has the same somber weight looming over him as I do.</p>
<p id="indent">“Let’s go, bud. If it’s the mob that meets us at the dock, we have to go out swinging. If it’s the police, I want you to find yourself another best friend. Maybe next time, meet someone who isn’t getting into trouble every day.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">I offer my hands out again, and he climbs up onto my shoulders. Friends ‘til the very end. If we weren’t about to walk out into certain doom, I’d probably cry.</p>
<p id="indent">We climb up the stairs and brace ourselves for whatever’s waiting for us on the dock. By now, the enemy ships should’ve also had a chance to dock, so we’ll for sure get visitors at some point.</p>
<p id="page-end">25</p>`
const ch3p2mobile = `<p id="page-start"> </p>
<p id="no-indent">run away. Even if I do manage to escape the scene somehow, there’ll be cops and mobsters looking to hunt me down all throughout the streets of Carmsborough. It wouldn’t take long before I’d get caught.</p>
<p id="indent">How do you explain that to the cops? A mob boss was chasing me, so I stole one of their airships and tried out a technology I didn’t understand as a last-ditch effort to avoid death, only to find out it would vaporize an entire portion of the Commerce District?</p>
<p id="indent">For that matter, how would I explain this to the mob boss? I wanted to exploit you for money, and when that didn’t work, I took the nuclear option?</p>
<p id="indent">I’d get off easier with the cops.</p>
<p id="indent">I shakily land the ship back down, barely making it to one of the cloudship docks. There’s no way for me to tell if anyone’s waiting for us outside, but I can almost guarantee there is. I look down at Freckles. Even though he has no way to show emotion, I can tell he has the same somber weight looming over him as I do.</p>
<p id="indent">“Let’s go, bud. If it’s the mob that meets us at the dock, we have to go out swinging. If it’s the police, I want you to find yourself another best friend. Maybe next time, meet someone who isn’t getting into trouble every day.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">I offer my hands out again, and he climbs up onto my shoulders. Friends ‘til the very end. If we weren’t about to walk out into certain doom, I’d probably cry.</p>
<p id="indent">We climb up the stairs and brace ourselves for whatever’s waiting for us on the dock. By now, the enemy ships should’ve also had a chance to dock, so we’ll for sure get visitors at some point.</p>
<p id="page-end">25</p>`
const ch3p3 = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“I realize that. I’m not looking forward to it, either.”</p>
<p id="indent">I peer over the deck of the ship for a split second. There’s… only one person, standing in anticipation. He’s wearing a bright red business suit with fuzzy white accents, a red tie, white button-up shirt, and a Santa Hat to top it all off. His left arm is resting on a cane, which he’s moving the top of back and forth in front of him in a swinging motion.</p>
<p id="indent">“Hello?” I call out, staring down at the man.</p>
<p id="indent">“Well, I don’t have all day,” he says, his accent different. Australia, or maybe New Zealand. I don’t know the difference.</p>
<p id="indent">I cautiously step off of the ship and down to the dock, Freckles as suspicious and attentive as I am. The stranger has a smile on his face, with no sign of hostility.</p>
<p id="indent">This is confusing.</p>
<p id="indent">“Who are you?”</p>
<p id="indent">“I am your ticket out of this mess, young girl. Please, come walk with me, and we’ll talk.”</p>
<p id="indent">I have no reason to trust this guy. Actually, I have negative reasons to trust this guy, with my number one reason being the fact that none of the mob boss goons made their appearance yet, even though I can clearly see that their ships landed.</p>
<p id="indent">“Fair enough,” he says, noticing my lack of movement. “I understand that trust is a difficult thing, especially for those who have to fend for themselves for years with no honest aid. Let me tell ya, kid, you’ve made some pretty powerful enemies today, you know that?”</p>
<p id="indent">I glance back at the hijacked ship, which is still smoldering from the mess I made earlier. “I’m well aware.”</p>
<p id="page-end">26</p>`
const ch3p3mobile = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“I realize that. I’m not looking forward to it, either.”</p>
<p id="indent">I peer over the deck of the ship for a split second. There’s… only one person, standing in anticipation. He’s wearing a bright red business suit with fuzzy white accents, a red tie, white button-up shirt, and a Santa Hat to top it all off. His left arm is resting on a cane, which he’s moving the top of back and forth in front of him in a swinging motion.</p>
<p id="indent">“Hello?” I call out, staring down at the man.</p>
<p id="indent">“Well, I don’t have all day,” he says, his accent different. Australia, or maybe New Zealand. I don’t know the difference.</p>
<p id="indent">I cautiously step off of the ship and down to the dock, Freckles as suspicious and attentive as I am. The stranger has a smile on his face, with no sign of hostility.</p>
<p id="indent">This is confusing.</p>
<p id="indent">“Who are you?”</p>
<p id="indent">“I am your ticket out of this mess, young girl. Please, come walk with me, and we’ll talk.”</p>
<p id="indent">I have no reason to trust this guy. Actually, I have negative reasons to trust this guy, with my number one reason being the fact that none of the mob boss goons made their appearance yet, even though I can clearly see that their ships landed.</p>
<p id="indent">“Fair enough,” he says, noticing my lack of movement. “I understand that trust is a difficult thing, especially for those who have to fend for themselves for years with no honest aid. Let me tell ya, kid, you’ve made some pretty powerful enemies today, you know that?”</p>
<p id="indent">I glance back at the hijacked ship, which is still smoldering from the mess I made earlier. “I’m well aware.”</p>
<p id="page-end">26</p>`
const ch3p4 = `<p id="page-start"> </p>
<p id="indent">“You’ve made a mob boss very pissed today. Please, come walk with me. If you’re worried about those numbskull henchmen, they won’t do a thing with me nearby.”</p>
<p id="indent">Without waiting for me, he walks down the dock, using his cane like some old-timey rich-guy flair item. He doesn’t even seem to need to use it. I start to take slow steps behind him, increasingly curious to find out where this is going.</p>
<p id="indent">Just who is this guy, so confident we won’t be attacked? Surely, he’s not the mob boss, right? That was the big-handed man from the alleyway, not this jovial man dressed like a holly jolly entrepreneur.</p>
<p id="indent">“What’s your name, kiddo?”</p>
<p id="indent">“Luna.”</p>
<p id="indent">“And your cat’s?”</p>
<p id="indent">“Freckles.”</p>
<p id="indent">“Ah. Well, it’s a pleasure to meet you, Luna and Freckles. My name is Bijabers. I’m what you might call the owner of the ship you so haphazardly weaponized against a peaceful civilization.”</p>
<p id="indent">Oh, God. He <em>is</em> the mob boss.</p>
<p id="indent">“Look, sir. I’m incredibly sorry for what happened back there. I had no clue what that machine did, and your men were chasing me, and I was trying to—”</p>
<p id="indent">“Please, spare yourself the breath, Luna. I’d be a hypocrite if I was upset with you for attempting to make a quick buck, even if it did go south like that. I’m not upset about that at all.”</p>
<p id="indent">“You’re not upset?”</p>
<p id="indent">He turns around to face the two of us. His smile is gone.</p>
<p id="indent">“Oh, no. I’m upset. I’m fuming, actually. That technology was </p>
<p id="page-end">27</p>`
const ch3p4mobile = `<p id="page-start"> </p>
<p id="indent">“You’ve made a mob boss very pissed today. Please, come walk with me. If you’re worried about those numbskull henchmen, they won’t do a thing with me nearby.”</p>
<p id="indent">Without waiting for me, he walks down the dock, using his cane like some old-timey rich-guy flair item. He doesn’t even seem to need to use it. I start to take slow steps behind him, increasingly curious to find out where this is going.</p>
<p id="indent">Just who is this guy, so confident we won’t be attacked? Surely, he’s not the mob boss, right? That was the big-handed man from the alleyway, not this jovial man dressed like a holly jolly entrepreneur.</p>
<p id="indent">“What’s your name, kiddo?”</p>
<p id="indent">“Luna.”</p>
<p id="indent">“And your cat’s?”</p>
<p id="indent">“Freckles.”</p>
<p id="indent">“Ah. Well, it’s a pleasure to meet you, Luna and Freckles. My name is Bijabers. I’m what you might call the owner of the ship you so haphazardly weaponized against a peaceful civilization.”</p>
<p id="indent">Oh, God. He <em>is</em> the mob boss.</p>
<p id="indent">“Look, sir. I’m incredibly sorry for what happened back there. I had no clue what that machine did, and your men were chasing me, and I was trying to—”</p>
<p id="indent">“Please, spare yourself the breath, Luna. I’d be a hypocrite if I was upset with you for attempting to make a quick buck, even if it did go south like that. I’m not upset about that at all.”</p>
<p id="indent">“You’re not upset?”</p>
<p id="indent">He turns around to face the two of us. His smile is gone.</p>
<p id="indent">“Oh, no. I’m upset. I’m fuming, actually. That technology </p>
<p id="page-end">27</p>`
const ch3p5 = `<p id="page-start"> </p>
<p id="no-indent">way too expensive to be used like that. As fun as it was to see the dock get shredded, the materials that went into creating that device are incredibly rare, and I cannot let a transgression like this slide.”</p>
<p id="indent">He snaps, and his henchmen flood out from the ships and swarm the surrounding dock. The disproportionate man from the alley also appears, and stands right behind Bijabers. He looks as upset as his boss.</p>
<p id="indent">“Your sole saving grace right now, Luna, is that I am in desperate need of people to work at my mineral resources mine in the south. I need this device recreated within the next couple of weeks, and so there’s going to be a lot of overtime work for those poor workers. Luckily for you, it just so happens a free excavation overseer position opened up.”</p>
<p id="indent">“Let me guess, your idea of ‘working’ is a step above slavery?”</p>
<p id="indent">“A step above?” He lets out a twisted but genuine-sounding laugh. “Men, get the girl.”</p>
<p id="indent">The horde of bad guys closes in on the two of us, and the large-handed man stares us down intently.</p>
<p id="indent">“I want the cat, boss,” he says, smiling. “Consider it my trophy.”</p>
<p id="indent">“Alright, Slaphand, you can have the cat. Please, don’t make too much of a mess.”</p>
<p id="indent">There’s only one way we’re getting out of this.</p>
<p id="indent">I flip the knife out again, and Freckles rolls off of my shoulders, ready to attack. We both get ready to attack Slaphand, who honestly couldn’t have picked a more suitable mob name for himself. He cracks his hot-dog fingers, and charges at us.</p>
<p id="indent">I throw the knife at him as he runs, which surprisingly goes blade-first into his shoulder. He winces a little bit but doesn’t lose momentum, and Freckles pounces at him, smashing the knife further in.</p>
<p id="page-end">28</p>`
const ch3p5mobile = `<p id="page-start"> </p>
<p id="no-indent">was way too expensive to be used like that. As fun as it was to see the dock get shredded, the materials that went into creating that device are incredibly rare, and I cannot let a transgression like this slide.”</p>
<p id="indent">He snaps, and his henchmen flood out from the ships and swarm the surrounding dock. The disproportionate man from the alley also appears, and stands right behind Bijabers. He looks as upset as his boss.</p>
<p id="indent">“Your sole saving grace right now, Luna, is that I am in desperate need of people to work at my mineral resources mine in the south. I need this device recreated within the next couple of weeks, and so there’s going to be a lot of overtime work for those poor workers. Luckily for you, it just so happens a free excavation overseer position opened up.”</p>
<p id="indent">“Let me guess, your idea of ‘working’ is a step above slavery?”</p>
<p id="indent">“A step above?” He lets out a twisted but genuine-sounding laugh. “Men, get the girl.”</p>
<p id="indent">The horde of bad guys closes in on the two of us, and the large-handed man stares us down intently.</p>
<p id="indent">“I want the cat, boss,” he says, smiling. “Consider it my trophy.”</p>
<p id="indent">“Alright, Slaphand, you can have the cat. Please, don’t make too much of a mess.”</p>
<p id="indent">There’s only one way we’re getting out of this.</p>
<p id="indent">I flip the knife out again, and Freckles rolls off of my shoulders, ready to attack. We both get ready to attack Slaphand, who honestly couldn’t have picked a more suitable mob name for himself. He cracks his hot-dog fingers, and charges at us.</p>
<p id="indent">I throw the knife at him as he runs, which surprisingly goes blade-first into his shoulder. He winces a little bit but doesn’t lose momentum, and Freckles pounces at him, smashing the knife further in.</p>
<p id="page-end">28</p>`
const ch3p6 = `<p id="page-start"> </p>
<p id="indent">Now Slaphand stops, pulls the knife out of his shoulder, and kicks Freckles. He does a flip midair and lands on his paws, but before he can go in for another attack, Slaphand’s already reached me. He aggressively picks me up with both hands. </p>
<p id="indent">I squirm, but it’s no use. His massive hands keep a tight grip on my arms and stomach, and I’m at his mercy. He furrows his brow, lifts me above his uninjured shoulder, and launches me high into the air.</p>
<p id="indent">I scream as I fly off the side of the dock. The water below is awake and ready for me. Somehow, out of everything that’s happened today so far, being thrown off the dock is the scariest. I try to take a quick breath, but lose all of the stored air on impact.</p>
<p id="indent">The water is deep and dark, and I can feel its cold pressure pushing against my chest. Panic swells in my lungs, but I do my best to not breathe instinctively. At some point, the inertia of being thrown wears off, and I stop sinking as fast. All I have to do is make it back to the surface before it’s too late.</p>
<p id="indent">How deep was I thrown down? I desperately swing my arms towards the surface, but I can feel the ebbing and flowing of the water fighting against my every move. The faint lights of incandescent bulbs hover above me, but no matter how hard I move my arms and legs, I can’t seem to reach them.</p>
<p id="indent">I’m gonna drown.</p>
<p id="indent">No, please… this can’t be how I go.</p>
<p id="indent">There’s so much still to do. Find a job, get new clothes, have a life, and maybe even start a family. I can’t lose it all because of one lousy day and one big accident.</p>
<p id="indent"><em>Focus, Luna. You’ve got this.</em> You’re almost out of air, but you’ve got </p>
<p id="page-end">29</p>`
const ch3p6mobile = `<p id="page-start"> </p>
<p id="indent">Now Slaphand stops, pulls the knife out of his shoulder, and kicks Freckles. He does a flip midair and lands on his paws, but before he can go in for another attack, Slaphand’s already reached me. He aggressively picks me up with both hands. </p>
<p id="indent">I squirm, but it’s no use. His massive hands keep a tight grip on my arms and stomach, and I’m at his mercy. He furrows his brow, lifts me above his uninjured shoulder, and launches me high into the air.</p>
<p id="indent">I scream as I fly off the side of the dock. The water below is awake and ready for me. Somehow, out of everything that’s happened today so far, being thrown off the dock is the scariest. I try to take a quick breath, but lose all of the stored air on impact.</p>
<p id="indent">The water is deep and dark, and I can feel its cold pressure pushing against my chest. Panic swells in my lungs, but I do my best to not breathe instinctively. At some point, the inertia of being thrown wears off, and I stop sinking as fast. All I have to do is make it back to the surface before it’s too late.</p>
<p id="indent">How deep was I thrown down? I desperately swing my arms towards the surface, but I can feel the ebbing and flowing of the water fighting against my every move. The faint lights of incandescent bulbs hover above me, but no matter how hard I move my arms and legs, I can’t seem to reach them.</p>
<p id="indent">I’m gonna drown.</p>
<p id="indent">No, please… this can’t be how I go.</p>
<p id="indent">There’s so much still to do. Find a job, get new clothes, have a life, and maybe even start a family. I can’t lose it all because of one lousy day and one big accident.</p>
<p id="indent"><em>Focus, Luna. You’ve got this.</em> You’re almost out of air, but </p>
<p id="page-end">29</p>`
const ch3p7 = `<p id="page-start"> </p>
<p id="no-indent">this. Just swim to the top and get some air. That’s all you’ve gotta do.</p>
<p id="indent">I throw my hands up even harder, scooping at the water with as much exertion as my drained body can put out. The surface of the water is more visible, and so close. My brain is pounding from lack of oxygen, but I keep going. I have to.</p>
<p id="indent">Finally, light-headed and losing sight, my head emerges, and I take the biggest breath of air in my life. And then the second-biggest one. </p>
<p id="indent">Surrounding me from up on the docks is the crowd of henchmen, watching and waiting for me to climb back up. There’s a ladder leading up not too far away, but I can’t just walk back into this mess, right?</p>
<p id="indent">In front of me, Bijabers and Slaphand appear, the latter carrying Freckles in a large metal cage. He’s hissing from inside, but it almost sounds scared or sad.</p>
<p id="indent">It’s over.</p>
<p id="indent">“It’s over, kid,” Bijabers says, echoing my thoughts. “Might as well climb on up and join the rest of the party.”</p>
<p id="indent">“You’ll never get away with this, Bijabers. Orion and the Clockwork will stop you, and you’ll go to jail, just like Syndra did.”</p>
<p id="indent">He lets out another equally twisted laugh. I hate the sound.</p>
<p id="indent">“Sweetheart, Orion and the Clockwork have no clue we exist. Your precious little boy wonder is on the complete opposite side of town having dinner with his father and sister. You’ve lost.”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Along with some other apparent victims of Bijabers and his goons, I’m loaded up onto a normal-sized airship a little further down the docks. We are lined up and chained to a wall in what </p>
<p id="page-end">30</p>`
const ch3p7mobile = `<p id="page-start"> </p>
<p id="no-indent">you’ve got this. Just swim to the top and get some air. That’s all you’ve gotta do.</p>
<p id="indent">I throw my hands up even harder, scooping at the water with as much exertion as my drained body can put out. The surface of the water is more visible, and so close. My brain is pounding from lack of oxygen, but I keep going. I have to.</p>
<p id="indent">Finally, light-headed and losing sight, my head emerges, and I take the biggest breath of air in my life. And then the second-biggest one. </p>
<p id="indent">Surrounding me from up on the docks is the crowd of henchmen, watching and waiting for me to climb back up. There’s a ladder leading up not too far away, but I can’t just walk back into this mess, right?</p>
<p id="indent">In front of me, Bijabers and Slaphand appear, the latter carrying Freckles in a large metal cage. He’s hissing from inside, but it almost sounds scared or sad.</p>
<p id="indent">It’s over.</p>
<p id="indent">“It’s over, kid,” Bijabers says, echoing my thoughts. “Might as well climb on up and join the rest of the party.”</p>
<p id="indent">“You’ll never get away with this, Bijabers. Orion and the Clockwork will stop you, and you’ll go to jail, just like Syndra did.”</p>
<p id="indent">He lets out another equally twisted laugh. I hate the sound.</p>
<p id="indent">“Sweetheart, Orion and the Clockwork have no clue we exist. Your precious little boy wonder is on the complete opposite side of town having dinner with his father and sister. You’ve lost.”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Along with some other apparent victims of Bijabers and his goons, I’m loaded up onto a normal-sized airship a little further down the docks. We are lined up and chained to a </p>
<p id="page-end">30</p>`
const ch3p8 = `<p id="page-start"> </p>
<p id="no-indent">appears to be an old armory or living quarters. Thugs armed with guns and batons pace the room back and forth, even though there’s only four of us.</p>
<p id="indent">After I’d made the climb of shame back up to the dock, a few of them handcuffed me and pushed me away from Freckles, Slaphand, Bijabers, and the wreck of a ship that I’d steered moments ago. I strained my neck, trying to look back at my caged cat, but Slaphand had already disappeared with my best friend. </p>
<p id="indent">Now I have no way of knowing where he is or where I’m going next. All I know is that I’m exhausted. My legs are jelly and it’s hard for me to stand, but my handcuff is way too far up on the wall for me to sit down. It’s mental torture.</p>
<p id="indent">“Why’d they pick you up?” the man closest to me asks. He’s severely roughed up, with bruises and cuts all over his visible skin. </p>
<p id="indent">“I used some super-valuable technology of theirs to accidentally blow up a commerce dock. Why’d they pick you up?” </p>
<p id="indent">“The loan I took out with them was too much, and I couldn’t pay it back, so I decided to go out with a bang.” He points to his very obvious damages. “You should see the other guy.”</p>
<p id="indent">That’s so… mundane. You mean to tell me I’m going to the same slave island as a guy who couldn’t pay a loan back? I did infinitely more damage to Bijabers than this random schmuck did, and yet we’re both gonna end up getting black lung and dying in a mineshaft for whatever “precious minerals” the psychopath wants.</p>
<p id="indent">“What’d you two do?” I ask, looking at the two others chained up on the opposite wall.</p>
<p id="indent">“The same. We couldn’t pay our debt.”</p>
<p id="indent">“So I’m stuck on a slaver ship with three people, whose only </p>
<p id="page-end">31</p>`
const ch3p8mobile = `<p id="page-start"> </p>
<p id="no-indent">wall in what appears to be an old armory or living quarters. Thugs armed with guns and batons pace the room back and forth, even though there’s only four of us.</p>
<p id="indent">After I’d made the climb of shame back up to the dock, a few of them handcuffed me and pushed me away from Freckles, Slaphand, Bijabers, and the wreck of a ship that I’d steered moments ago. I strained my neck, trying to look back at my caged cat, but Slaphand had already disappeared with my best friend. </p>
<p id="indent">Now I have no way of knowing where he is or where I’m going next. All I know is that I’m exhausted. My legs are jelly and it’s hard for me to stand, but my handcuff is way too far up on the wall for me to sit down. It’s mental torture.</p>
<p id="indent">“Why’d they pick you up?” the man closest to me asks. He’s severely roughed up, with bruises and cuts all over his visible skin. </p>
<p id="indent">“I used some super-valuable technology of theirs to accidentally blow up a commerce dock. Why’d they pick you up?” </p>
<p id="indent">“The loan I took out with them was too much, and I couldn’t pay it back, so I decided to go out with a bang.” He points to his very obvious damages. “You should see the other guy.”</p>
<p id="indent">That’s so… mundane. You mean to tell me I’m going to the same slave island as a guy who couldn’t pay a loan back? I did infinitely more damage to Bijabers than this random schmuck did, and yet we’re both gonna end up getting black lung and dying in a mineshaft for whatever “precious minerals” the psychopath wants.</p>
<p id="indent">“What’d you two do?” I ask, looking at the two others chained up on the opposite wall.</p>
<p id="indent">“The same. We couldn’t pay our debt.”</p>
<p id="indent">“So I’m stuck on a slaver ship with three people, whose </p>
<p id="page-end">31</p>`
const ch3p9 = `<p id="page-start"> </p>
<p id="no-indent">crime is poor money management?”</p>
<p id="indent">“That’s most of the people he gets,” the guy next to me says. “Poor chumps just trying to make it to the next paycheck that can’t afford his rate, but take out the loan, anyway. He also snags people who oppose him before they make too much of a scene. That way, he stays undetected to police and Orion.”</p>
<p id="indent">“Do you think Orion will save us?” one of the others asks.</p>
<p id="indent">“Don’t get your hopes up,” I answer. </p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Even though I’m stuck standing against the hard wooden wall, I manage to doze off for a little bit. I stir awake when the ship comes to a stop, and the Bijabers goons drag us off the ship. The moon sits high in the sky above us as we walk to shore, attached to each other single file with one long chain. </p>
<p id="indent">“Where are we going?” I ask, hoping either one of the goons or the three prisoners will have an answer.</p>
<p id="indent">“You will be going to the sleeping hall for the night,” one goon answers. “You will find a room and get some rest before your supervisors give you your jobs. You will wake up at six o’clock sharp, just like the rest of the workers, and start your day with breakfast at the mess hall.”</p>
<p id="indent">“Sounds like a life of luxury.”</p>
<p id="indent">“Keep yapping, and I’ll make sure your life of luxury doesn’t involve a tongue.”</p>
<p id="indent">He makes a pretty convincing argument.</p>
<p id="indent">We walk for another ten minutes before finally arriving at a </p>
<p id="page-end">32</p>`
const ch3p9mobile = `<p id="page-start"> </p>
<p id="no-indent">only crime is poor money management?”</p>
<p id="indent">“That’s most of the people he gets,” the guy next to me says. “Poor chumps just trying to make it to the next paycheck that can’t afford his rate, but take out the loan, anyway. He also snags people who oppose him before they make too much of a scene. That way, he stays undetected to police and Orion.”</p>
<p id="indent">“Do you think Orion will save us?” one of the others asks.</p>
<p id="indent">“Don’t get your hopes up,” I answer. </p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Even though I’m stuck standing against the hard wooden wall, I manage to doze off for a little bit. I stir awake when the ship comes to a stop, and the Bijabers goons drag us off the ship. The moon sits high in the sky above us as we walk to shore, attached to each other single file with one long chain. </p>
<p id="indent">“Where are we going?” I ask, hoping either one of the goons or the three prisoners will have an answer.</p>
<p id="indent">“You will be going to the sleeping hall for the night,” one goon answers. “You will find a room and get some rest before your supervisors give you your jobs. You will wake up at six o’clock sharp, just like the rest of the workers, and start your day with breakfast at the mess hall.”</p>
<p id="indent">“Sounds like a life of luxury.”</p>
<p id="indent">“Keep yapping, and I’ll make sure your life of luxury doesn’t involve a tongue.”</p>
<p id="indent">He makes a pretty convincing argument.</p>
<p id="indent">We walk for another ten minutes before finally arriving at </p>
<p id="page-end">32</p>`
const ch3p10 = `<p id="page-start"> </p>
<p id="no-indent">building. A clock on the outside reveals that midnight is only twenty minutes away. </p>
<p id="indent">But how? How long was our flight? Are we on the south side of Carmsborough, near the Agriculture District?</p>
<p id="indent">“Get inside and find a room,” the man says, opening the door for us and unlocking our chains. I subconsciously rub my wrist where the cuff has rubbed it raw, and wander around the inside of the unlit building. Outlines of people sleeping litter the floor, and we have to step over someone almost every time we move our feet.</p>
<p id="indent">Eventually, the four of us branch off, and I locate a little offshoot room with enough space for me to curl up on the floor. It’s no different from what I’m used to, if not a little more cramped and stuffier.</p>
<p id="indent">I spend the rest of my waking moments thinking about Freckles and how alone he must be in his cage, but despite my worrying and the nap on board the slaver ship, I fall asleep quickly.</p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="page-end">33</p>`
const ch3p10mobile = `<p id="page-start"> </p>
<p id="no-indent">a building. A clock on the outside reveals that midnight is only twenty minutes away. </p>
<p id="indent">But how? How long was our flight? Are we on the south side of Carmsborough, near the Agriculture District?</p>
<p id="indent">“Get inside and find a room,” the man says, opening the door for us and unlocking our chains. I subconsciously rub my wrist where the cuff has rubbed it raw, and wander around the inside of the unlit building. Outlines of people sleeping litter the floor, and we have to step over someone almost every time we move our feet.</p>
<p id="indent">Eventually, the four of us branch off, and I locate a little offshoot room with enough space for me to curl up on the floor. It’s no different from what I’m used to, if not a little more cramped and stuffier.</p>
<p id="indent">I spend the rest of my waking moments thinking about Freckles and how alone he must be in his cage, but despite my worrying and the nap on board the slaver ship, I fall asleep quickly.</p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="page-end">33</p>`
const ch3p11 = ``
const ch3p11mobile = ``
const ch3p12 = ``
const ch3p12mobile = ``
const ch3p13 = ``
const ch3p13mobile = ``
const ch3p14 = ``
const ch3p14mobile = ``
const ch3p15 = ``
const ch3p15mobile = ``
const ch3p16 = ``
const ch3p16mobile = ``
const ch3p17 = ``
const ch3p17mobile = ``
const ch3p18 = ``
const ch3p18mobile = ``
const ch3 = [ch3p1, ch3p2, ch3p3, ch3p4, ch3p5, ch3p6, ch3p7, ch3p8, ch3p9, ch3p10, ch3p11, ch3p12, ch3p13, ch3p14, ch3p15, ch3p16, ch3p17, ch3p18]
const ch3mobile = [ch3p1mobile, ch3p2mobile, ch3p3mobile, ch3p4mobile, ch3p5mobile, ch3p6mobile, ch3p7mobile, ch3p8mobile, ch3p9mobile, ch3p10mobile, ch3p11mobile, ch3p12mobile, ch3p13mobile, ch3p14mobile, ch3p15mobile, ch3p16mobile, ch3p17mobile, ch3p18mobile]

const ch4p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 4</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Today is just an ordinary day for me. </p>
<p id="indent">I wake up on the cold hay floor of the rundown windmill right on the edge of the Housing and Industrial districts. The spring sun still isn’t out yet, but the calmness that hangs over the air tells me it will be soon.</p>
<p id="indent">It’s days like today that keep me going.</p>
<p id="indent">Sure, I’ve gotta work at Cheapskate Chad’s today, and the walk is far from convenient, but at least on the way I’ll get to hear the birds chirping and feel the dew on my hands as I run them through the morning grass.</p>
<p id="indent">Spring, for me, is hope. It’s the cold bottle of water you pull out of your cooler while walking the hilly countryside. It’s looking up and soaking in the sun after spending your eight-hour workday </p>
<p id="page-end">34</p>`
const ch4p1mobile = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 4</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Today is just an ordinary day for me. </p>
<p id="indent">I wake up on the cold hay floor of the rundown windmill right on the edge of the Housing and Industrial districts. The spring sun still isn’t out yet, but the calmness that hangs over the air tells me it will be soon.</p>
<p id="indent">It’s days like today that keep me going.</p>
<p id="indent">Sure, I’ve gotta work at Cheapskate Chad’s today, and the walk is far from convenient, but at least on the way I’ll get to hear the birds chirping and feel the dew on my hands as I run them through the morning grass.</p>
<p id="indent">Spring, for me, is hope. It’s the cold bottle of water you pull out of your cooler while walking the hilly countryside. It’s looking up and soaking in the sun after spending your </p>
<p id="page-end">34</p>`
const ch4p2 = `<p id="page-start"> </p>
<p id="no-indent">illuminated by harsh industrial bulbs. It’s watching the innocence of a house finch bounce around on the cobbled streets, searching for worms in between the cracks.</p>
<p id="indent">Those are pretty good descriptions. Maybe poetry is in my future.</p>
<p id="indent">I’ll need to stop working at Chad’s first, though.</p>
<p id="indent">My trip to Chad’s from the windmill is about forty-five minutes, which means the sun won’t even begin painting its spherical canvas a rumbling orange by the time I clock in. </p>
<p id="indent">The birds, like every other respectable creature, are still asleep right now. I’ll just have to listen to them while sorting my bins today. I hope today’s song is as beautiful as yesterday’s.</p>
<p id="story-break"></p>
<p id="indent">I jolt awake. Someone in front of me touched their foot to my leg. I bend back a little bit further so I’m out of range, and my heavy eyelids close back shut.</p>
<p id="story-break"></p>
<p id="indent">“Good morning, Luna,” Cheapskate Chad says, marking me as present on his timesheet. </p>
<p id="indent">“Yeah, we’ll see about that.”</p>
<p id="indent">“Oh, please. You know you love working here. Why else would you walk forty-five minutes across Carmsborough?”</p>
<p id="indent">“Probably because nobody else will hire a fifteen-year-old homeless black girl, Chad. You’re the only one with standards low enough.” </p>
<p id="indent">“Oh, please. I’m blushing. Go get to work, Luna.”</p>
<p id="indent">I start my day at basin thirteen, just like I always do. I don’t understand how Carmsborough manages to come up with all of this metal and scrap, but there hasn’t been a single day where we’ve even </p>
<p id="page-end">35</p>`
const ch4p2mobile = `<p id="page-start"> </p>
<p id="no-indent">eight-hour workday illuminated by harsh industrial bulbs. It’s watching the innocence of a house finch bounce around on the cobbled streets, searching for worms in between the cracks.</p>
<p id="indent">Those are pretty good descriptions. Maybe poetry is in my future.</p>
<p id="indent">I’ll need to stop working at Chad’s first, though.</p>
<p id="indent">My trip to Chad’s from the windmill is about forty-five minutes, which means the sun won’t even begin painting its spherical canvas a rumbling orange by the time I clock in. </p>
<p id="indent">The birds, like every other respectable creature, are still asleep right now. I’ll just have to listen to them while sorting my bins today. I hope today’s song is as beautiful as yesterday’s.</p>
<p id="story-break"></p>
<p id="indent">I jolt awake. Someone in front of me touched their foot to my leg. I bend back a little bit further so I’m out of range, and my heavy eyelids close back shut.</p>
<p id="story-break"></p>
<p id="indent">“Good morning, Luna,” Cheapskate Chad says, marking me as present on his timesheet. </p>
<p id="indent">“Yeah, we’ll see about that.”</p>
<p id="indent">“Oh, please. You know you love working here. Why else would you walk forty-five minutes across Carmsborough?”</p>
<p id="indent">“Probably because nobody else will hire a fifteen-year-old homeless black girl, Chad. You’re the only one with standards low enough.” </p>
<p id="indent">“Oh, please. I’m blushing. Go get to work, Luna.”</p>
<p id="indent">I start my day at basin thirteen, just like I always do. I don’t understand how Carmsborough manages to come up with all of this metal and scrap, but there hasn’t been a single </p>
<p id="page-end">35</p>`
const ch4p3 = `<p id="page-start"> </p>
<p id="no-indent">gotten <em>low</em> on truckloads to sort. Half of the iron dumped into the basin rusts before it even makes it into one of my sorted bins.</p>
<p id="indent">In my first hour, I wheel off four bins full of plastic or metal. The third time I go to send plastic to basin seven, I come back to find my pile even bigger. </p>
<p id="indent">“What’s the big idea?” I yell, looking at the truck driver who just dumped into my basin. Half of the material doesn’t even belong in my tin. It’s just a bunch of electronics that don’t match the plastic or metal that I have to sort through.</p>
<p id="indent">“What’s happening over here?” Cheapskate Chad asks, making his way to my basin.</p>
<p id="indent">“This numbskull just dumped electronics into my basin! I’ll be working for days to get this stuff out!”</p>
<p id="indent">“Hey, Jeremy!” Chad yells to the driver. “What the hell are you doing? You know the system!”</p>
<p id="indent">“Sorry, boss,” Jeremy yells back. “I got confused on which one to put it in.”</p>
<p id="indent">“You’re gonna be even more confused when that comes out of your paycheck, kid!” He turns to me and says, “I’ll give you double for the next couple days while you clean this out and wheel it to eleven. Try not to stab yourself on any wires. I can’t afford any more first aid kits until next week.”</p>
<p id="indent">“Yeah, alright.”</p>
<p id="indent">Apparently, I need the wrong stuff dumped into my bin more often. I’ll take a mishap like this any day if it means I can afford food for once. I wheel an unused bin over from the front of Chad’s office and start loading some of the stuff up. None of it seems very </p>
<p id="page-end">36</p>`
const ch4p3mobile = `<p id="page-start"> </p>
<p id="no-indent">day where we’ve even gotten <em>low</em> on truckloads to sort. Half of the iron dumped into the basin rusts before it even makes it into one of my sorted bins.</p>
<p id="indent">In my first hour, I wheel off four bins full of plastic or metal. The third time I go to send plastic to basin seven, I come back to find my pile even bigger. </p>
<p id="indent">“What’s the big idea?” I yell, looking at the truck driver who just dumped into my basin. Half of the material doesn’t even belong in my tin. It’s just a bunch of electronics that don’t match the plastic or metal that I have to sort through.</p>
<p id="indent">“What’s happening over here?” Cheapskate Chad asks, making his way to my basin.</p>
<p id="indent">“This numbskull just dumped electronics into my basin! I’ll be working for days to get this stuff out!”</p>
<p id="indent">“Hey, Jeremy!” Chad yells to the driver. “What the hell are you doing? You know the system!”</p>
<p id="indent">“Sorry, boss,” Jeremy yells back. “I got confused on which one to put it in.”</p>
<p id="indent">“You’re gonna be even more confused when that comes out of your paycheck, kid!” He turns to me and says, “I’ll give you double for the next couple days while you clean this out and wheel it to eleven. Try not to stab yourself on any wires. I can’t afford any more first aid kits until next week.”</p>
<p id="indent">“Yeah, alright.”</p>
<p id="indent">Apparently, I need the wrong stuff dumped into my bin more often. I’ll take a mishap like this any day if it means I can afford food for once. I wheel an unused bin over from the front of Chad’s office and start loading some of the stuff up. None of it seems very valuable, which is a </p>
<p id="page-end">36</p>`
const ch4p4 =`<p id="page-start"> </p>
<p id="no-indent">valuable, which is a bummer, considering how easy it would be to make off with some of it.</p>
<p id="story-break"></p>
<p id="indent">Someone in the cramped room yells, startling all of us awake. </p>
<p id="indent">“Shut up, Terry,” I hear. “Nobody wants your ramblings this early in the morning.”</p>
<p id="indent">“They’re coming for us. They’re coming for us. All life in London will end.”</p>
<p id="indent">“Are you on that stupid stuff again, Terry? Go to bed.”</p>
<p id="story-break"></p>
<p id="indent">An hour before the end of the day, I’ve already taken a sizable chunk out of the electronic mess that blessed me this morning. Besides four or five loose batteries that may or may not still have some juice left, the only thing that’s jumped out at me is a perfectly intact rotary phone. I don’t have any calls to make, but maybe Shady Shane knows someone who does.</p>
<p id="indent">Still, an entire phone would be hard to carry off without being noticed. That one’s probably not gonna happen.</p>
<p id="indent">I pick it up and reluctantly put it in the bin. Then, right as I go to wheel it off to basin eleven, I catch the sound of metal rustling in my pile. Am I about to witness an electronic avalanche?</p>
<p id="indent">The clattering and scraping continues, but I don’t see anything moving. I walk the perimeter of the basin, trying to locate the source, and find the spot where the rustling’s the loudest. Using the thick gloves that I use for grabbing metal, I dig into the electronics pile, hoping to discover whatever’s moving things around.</p>
<p id="indent">And then, out pops a head.</p>
<p id="indent">A robotic cat head.</p>
<p id="page-end">37</p>`
const ch4p4mobile = `<p id="page-start"> </p>
<p id="no-indent">bummer, considering how easy it would be to make off with some of it.</p>
<p id="story-break"></p>
<p id="indent">Someone in the cramped room yells, startling all of us awake. </p>
<p id="indent">“Shut up, Terry,” I hear. “Nobody wants your ramblings this early in the morning.”</p>
<p id="indent">“They’re coming for us. They’re coming for us. All life in London will end.”</p>
<p id="indent">“Are you on that stupid stuff again, Terry? Go to bed.”</p>
<p id="story-break"></p>
<p id="indent">An hour before the end of the day, I’ve already taken a sizable chunk out of the electronic mess that blessed me this morning. Besides four or five loose batteries that may or may not still have some juice left, the only thing that’s jumped out at me is a perfectly intact rotary phone. I don’t have any calls to make, but maybe Shady Shane knows someone who does.</p>
<p id="indent">Still, an entire phone would be hard to carry off without being noticed. That one’s probably not gonna happen.</p>
<p id="indent">I pick it up and reluctantly put it in the bin. Then, right as I go to wheel it off to basin eleven, I catch the sound of metal rustling in my pile. Am I about to witness an electronic avalanche?</p>
<p id="indent">The clattering and scraping continues, but I don’t see anything moving. I walk the perimeter of the basin, trying to locate the source, and find the spot where the rustling’s the loudest. Using the thick gloves that I use for grabbing metal, I dig into the electronics pile, hoping to discover whatever’s moving things around.</p>
<p id="indent">And then, out pops a head.</p>
<p id="indent">A robotic cat head.</p>
<p id="page-end">37</p>`
const ch4p5 = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Oh my God, what are you?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">I help dig it out the rest of the way, and it springs up to the top of the pile.</p>
<p id="indent">It really is a mechanical cat.</p>
<p id="indent">“What were you doing in this mess, big guy?”</p>
<p id="indent">“<em>Now</em> what’s happening, Luna?” Cheapskate Chad walks over again, somehow sounding more exhausted than the first time.</p>
<p id="indent">“I found this cat here in the electronic pile. It’s still fully functioning and everything.”</p>
<p id="indent">“Well, I’ll be darned. I wonder how a steambot ended up going for reclamation.”</p>
<p id="indent">“You think maybe he’s defective?”</p>
<p id="indent">“Meow.” The cat gives me a look.</p>
<p id="indent">“Sorry, you’re definitely not defective. Seems fine to me.”</p>
<p id="indent">“Fine enough to be resold instead of scrapped, I’d say,” Chad says, approaching the cat. The cat backs away, clearly not in favor of being sold or scrapped.</p>
<p id="indent">“Actually, you think I could keep it instead?”</p>
<p id="indent">“Are you kidding me, Luna?”</p>
<p id="indent">“I mean, no. I’d be willing to give up my new bonus, and maybe a week or two worth of pay for it. Unless, of course, you want me to call up the government and let them know you have a fifteen-year-old girl working for you under dangerous conditions for ten hours a day.”</p>
<p id="indent">Chad stews over the thought, but I’ve obviously won the discussion. </p>
<p id="indent">“Alright, fine. This week’s pay, including the bonus. But the next </p>
<p id="page-end">38</p>`
const ch4p5mobile = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Oh my God, what are you?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">I help dig it out the rest of the way, and it springs up to the top of the pile.</p>
<p id="indent">It really is a mechanical cat.</p>
<p id="indent">“What were you doing in this mess, big guy?”</p>
<p id="indent">“<em>Now</em> what’s happening, Luna?” Cheapskate Chad walks over again, somehow sounding more exhausted than the first time.</p>
<p id="indent">“I found this cat here in the electronic pile. It’s still fully functioning and everything.”</p>
<p id="indent">“Well, I’ll be darned. I wonder how a steambot ended up going for reclamation.”</p>
<p id="indent">“You think maybe he’s defective?”</p>
<p id="indent">“Meow.” The cat gives me a look.</p>
<p id="indent">“Sorry, you’re definitely not defective. Seems fine to me.”</p>
<p id="indent">“Fine enough to be resold instead of scrapped, I’d say,” Chad says, approaching the cat. The cat backs away, clearly not in favor of being sold or scrapped.</p>
<p id="indent">“Actually, you think I could keep it instead?”</p>
<p id="indent">“Are you kidding me, Luna?”</p>
<p id="indent">“I mean, no. I’d be willing to give up my new bonus, and maybe a week or two worth of pay for it. Unless, of course, you want me to call up the government and let them know you have a fifteen-year-old girl working for you under dangerous conditions for ten hours a day.”</p>
<p id="indent">Chad stews over the thought, but I’ve obviously won the discussion. </p>
<p id="indent">“Alright, fine. This week’s pay, including the bonus. But </p>
<p id="page-end">38</p>`
const ch4p6 = `<p id="page-start"> </p>
<p id="no-indent">time you find something like this, it’s getting resold without debate.”</p>
<p id="indent">“You’re the best, Chad. Here’s a rotary phone for your hard work.” I grab the phone out of the bin and toss it at him, but he just lets it fall to the ground and break. Guess he’s not a true purveyor of worth.</p>
<p id="indent">A buzzer sounds across the scrapyard, signaling the end of the workday. </p>
<p id="indent">“Come here, robot kitty-cat. It’s time to head back to your new home with me.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">It’s hesitant at first, but eventually decides to walk to me. It even rubs against my legs. </p>
<p id="indent">Too bad it’ll feel betrayed when I take it to Shady Shane in return for a massive chunk of change.</p>
<p id="indent">“Let’s go, friend. I’ve got to go hunt for dinner in the Commerce District for a moment, and then we’ll swing our way back to my windmill home to the west.”</p>
<p id="indent">We start our trip, the robotic cat trailing behind me by only a few feet the entire time. It stops for oncoming traffic when I do, and rushes ahead when I speed up to cross a road. This thing’s already completely loyal to me, even though all I did was dig it out of a pile of scraps. </p>
<p id="indent">Like the dozens of other trips I’ve made to visit Shady Shane, I stop to look at the countless cloudships lining the commerce docks beside me. The cat stops with me, as if doing the same. He’s making it really hard to hate him, that’s for sure.</p>
<p id="indent"><em>It. It's</em> making it really hard to hate <em>it</em>. I literally can’t afford to get attached right now. I have a dream to achieve, and he’s gonna make it a reality.</p>
<p id="page-end">39</p>`
const ch4p6mobile = `<p id="page-start"> </p>
<p id="no-indent">the next time you find something like this, it’s getting resold without debate.”</p>
<p id="indent">“You’re the best, Chad. Here’s a rotary phone for your hard work.” I grab the phone out of the bin and toss it at him, but he just lets it fall to the ground and break. Guess he’s not a true purveyor of worth.</p>
<p id="indent">A buzzer sounds across the scrapyard, signaling the end of the workday. </p>
<p id="indent">“Come here, robot kitty-cat. It’s time to head back to your new home with me.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">It’s hesitant at first, but eventually decides to walk to me. It even rubs against my legs. </p>
<p id="indent">Too bad it’ll feel betrayed when I take it to Shady Shane in return for a massive chunk of change.</p>
<p id="indent">“Let’s go, friend. I’ve got to go hunt for dinner in the Commerce District for a moment, and then we’ll swing our way back to my windmill home to the west.”</p>
<p id="indent">We start our trip, the robotic cat trailing behind me by only a few feet the entire time. It stops for oncoming traffic when I do, and rushes ahead when I speed up to cross a road. This thing’s already completely loyal to me, even though all I did was dig it out of a pile of scraps. </p>
<p id="indent">Like the dozens of other trips I’ve made to visit Shady Shane, I stop to look at the countless cloudships lining the commerce docks beside me. The cat stops with me, as if doing the same. He’s making it really hard to hate him, that’s for sure.</p>
<p id="indent"><em>It. It's</em> making it really hard to hate <em>it</em>. I literally can’t afford to get attached right now. I have a dream to achieve, and he’s gonna make it a reality.</p>
<p id="page-end">39</p>`
const ch4p7 = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“I wonder if my good friend Shane is in the neighborhood today. I’m sure he’d love to see you. He’s probably never met a steambot before, either.”</p>
<p id="indent">I can’t believe I’m trying to play my actions off to a cat. </p>
<p id="indent">The two of us walk to Shady Shane’s usual spot, but his bench is empty, and he’s not lingering nearby. </p>
<p id="indent">“Hey, Shane, are you around?”</p>
<p id="indent">I go to check in a nearby courtyard, which is disturbingly quiet for this time of day. Where could he be off to?</p>
<p id="indent">A low, metallic growl kicks up to my right. I look down and see the cat hunched over, as if ready to attack something in the courtyard.</p>
<p id="indent">“Hey, kid,” a voice says, appearing from the direction the cat’s facing. “Searching for someone?” </p>
<p id="indent">“Yeah,” I answer, suspicious. “You wouldn’t happen to know where Shane is, would you?”</p>
<p id="indent">“Nah, we don’t know about no Shane,” another voice says, on the opposite side of the courtyard. “But we do know about some defenseless girl and her cat standing in a courtyard.”</p>
<p id="indent">“I’m beginning to think I’m looking in the wrong place. We’re very sorry for intruding in your courtyard, sirs, and will be leaving. Thank you for your help.” I start to back up out of the courtyard, never losing focus on either of the two hostile men. The cat, on the other hand, doesn’t move an inch.</p>
<p id="indent">“I don’t think so, girl. Come here, let’s stay awhile.”</p>
<p id="indent">“Not to be rude, but you two are acting exactly like a stereotypical pervert would, so I’ll have to pass. Surely you understand.”</p>
<p id="page-end">40</p>`
const ch4p7mobile = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“I wonder if my good friend Shane is in the neighborhood today. I’m sure he’d love to see you. He’s probably never met a steambot before, either.”</p>
<p id="indent">I can’t believe I’m trying to play my actions off to a cat. </p>
<p id="indent">The two of us walk to Shady Shane’s usual spot, but his bench is empty, and he’s not lingering nearby. </p>
<p id="indent">“Hey, Shane, are you around?”</p>
<p id="indent">I go to check in a nearby courtyard, which is disturbingly quiet for this time of day. Where could he be off to?</p>
<p id="indent">A low, metallic growl kicks up to my right. I look down and see the cat hunched over, as if ready to attack something in the courtyard.</p>
<p id="indent">“Hey, kid,” a voice says, appearing from the direction the cat’s facing. “Searching for someone?” </p>
<p id="indent">“Yeah,” I answer, suspicious. “You wouldn’t happen to know where Shane is, would you?”</p>
<p id="indent">“Nah, we don’t know about no Shane,” another voice says, on the opposite side of the courtyard. “But we do know about some defenseless girl and her cat standing in a courtyard.”</p>
<p id="indent">“I’m beginning to think I’m looking in the wrong place. We’re very sorry for intruding in your courtyard, sirs, and will be leaving. Thank you for your help.” I start to back up out of the courtyard, never losing focus on either of the two hostile men. The cat, on the other hand, doesn’t move an inch.</p>
<p id="indent">“I don’t think so, girl. Come here, let’s stay awhile.”</p>
<p id="indent">“Not to be rude, but you two are acting exactly like a stereotypical pervert would, so I’ll have to pass. Surely you understand.”</p>
<p id="page-end">40</p>`
const ch4p8 = `<p id="page-start"> </p>
<p id="indent">“No. We don’t.”</p>
<p id="indent">The two men rush forward and chase me down the street. I run, my heart beating hard. </p>
<p id="indent">My feet take me all the way down to the end of the block, and I peek back to see how close they are. Back at the courtyard entrance, the cat is pouncing at and attacking the two men, smacking them up against walls and throwing them on the ground.</p>
<p id="indent">He’s… <em>defending me</em>.</p>
<p id="indent">I rush back just in time for him to throw the second man to the ground again. Neither decide to get back up this time.</p>
<p id="indent">“You are one feisty thing,” I say, crouching down to pet him. Petting a mechanical cat is the most natural unnatural thing I’ve ever done.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“You’re telling me. These guys didn’t stand a chance.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“How about we see what we can scavenge real quick for dinner, and we’ll head home. Do you eat anything?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, that was kind of a stupid question.”</p>
<p id="indent">I offer my hands out to pick him up, and he accepts. I hold him like a baby over my shoulder for a second, before he decides to climb up onto my shoulders and curl around my neck. The tick of his mechanical heart resonates through my upper body.</p>
<p id="indent">“What on earth am I going to call you?”</p>
<p id="indent">He looks at me blankly.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Well, I can’t just call you ‘cat.’ Maybe Cali? No, that’s too basic. </p>
<p id="page-end">41</p>`
const ch4p8mobile = `<p id="page-start"> </p>
<p id="indent">“No. We don’t.”</p>
<p id="indent">The two men rush forward and chase me down the street. I run, my heart beating hard. </p>
<p id="indent">My feet take me all the way down to the end of the block, and I peek back to see how close they are. Back at the courtyard entrance, the cat is pouncing at and attacking the two men, smacking them up against walls and throwing them on the ground.</p>
<p id="indent">He’s… <em>defending me</em>.</p>
<p id="indent">I rush back just in time for him to throw the second man to the ground again. Neither decide to get back up this time.</p>
<p id="indent">“You are one feisty thing,” I say, crouching down to pet him. Petting a mechanical cat is the most natural unnatural thing I’ve ever done.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“You’re telling me. These guys didn’t stand a chance.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“How about we see what we can scavenge real quick for dinner, and we’ll head home. Do you eat anything?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, that was kind of a stupid question.”</p>
<p id="indent">I offer my hands out to pick him up, and he accepts. I hold him like a baby over my shoulder for a second, before he decides to climb up onto my shoulders and curl around my neck. The tick of his mechanical heart resonates through my upper body.</p>
<p id="indent">“What on earth am I going to call you?”</p>
<p id="indent">He looks at me blankly.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Well, I can’t just call you ‘cat.’ Maybe Cali? No, that’s too </p>
<p id="page-end">41</p>`
const ch4p9 = `<p id="page-start"> </p>
<p id="no-indent">Butterscotch?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“No, you’re right. You’re clearly more aggressive than a Butterscotch, anyway. What about… Freckles?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I’m pretty good at names. Freckles it is, then.”</p>
<p id="indent">I walk back to my windmill house with Freckles draped over my shoulders. Something tells me this four-legged machine is going to be worth more to me than a chunk of change.</p>
<p id="story-break"></p>
<p id="indent">“Wake up, dear,” I hear, startling me awake for the third time tonight. An older lady is hovering over me and staring directly into my eyes. “It is six o’clock. You do not want to make the supervisor upset.”</p>
<p id="indent">“What? Yeah, I’m awake.”</p>
<p id="indent">I wipe small tears from my eyes. I miss my cat already.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">42</p>`
const ch4p9mobile = `<p id="page-start"> </p>
<p id="no-indent">basic. Butterscotch?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“No, you’re right. You’re clearly more aggressive than a Butterscotch, anyway. What about… Freckles?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I’m pretty good at names. Freckles it is, then.”</p>
<p id="indent">I walk back to my windmill house with Freckles draped over my shoulders. Something tells me this four-legged machine is going to be worth more to me than a chunk of change.</p>
<p id="story-break"></p>
<p id="indent">“Wake up, dear,” I hear, startling me awake for the third time tonight. An older lady is hovering over me and staring directly into my eyes. “It is six o’clock. You do not want to make the supervisor upset.”</p>
<p id="indent">“What? Yeah, I’m awake.”</p>
<p id="indent">I wipe small tears from my eyes. I miss my cat already.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">42</p>`
const ch4p10 = ``
const ch4p10mobile = ``
const ch4p11 = ``
const ch4p11mobile = ``
const ch4p12 = ``
const ch4p12mobile = ``
const ch4p13 = ``
const ch4p13mobile = ``
const ch4p14 = ``
const ch4p14mobile = ``
const ch4p15 = ``
const ch4p15mobile = ``
const ch4p16 = ``
const ch4p16mobile = ``
const ch4p17 = ``
const ch4p17mobile = ``
const ch4p18 = ``
const ch4p18mobile = ``
const ch4 = [ch4p1, ch4p2, ch4p3, ch4p4, ch4p5, ch4p6, ch4p7, ch4p8, ch4p9, ch4p10, ch4p11, ch4p12, ch4p13, ch4p14, ch4p15, ch4p16, ch4p17, ch4p18]
const ch4mobile = [ch4p1mobile, ch4p2mobile, ch4p3mobile, ch4p4mobile, ch4p5mobile, ch4p6mobile, ch4p7mobile, ch4p8mobile, ch4p9mobile, ch4p10mobile, ch4p11mobile, ch4p12mobile, ch4p13mobile, ch4p14mobile, ch4p15mobile, ch4p16mobile, ch4p17mobile, ch4p18mobile]

const ch5p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 5</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“It is time to get up, child. They have zero tolerance for any slacking.”</p>
<p id="indent">“I’m getting there,” I say, trying to defog my eyes. The woman in front of me looks to be about sixty. Why on earth are they keeping a sixty-year-old woman in their mining sweatshop?</p>
<p id="indent">“Come with me,” she says, extending her hand out. I take it and use it to hoist myself up. The room is alive with fifteen or so others, all rushing to wake up and get to business. “Let us get you some appropriate clothes. Your supervisor will not like what you are currently wearing.”</p>
<p id="indent">She leads me to a small closet full of dirty, light-blue jumpsuits. I assume I’m supposed to grab one of them, so I pick one out that might be the right size.</p>
<p id="page-end">43</p>`
const ch5p1mobile = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 5</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“It is time to get up, child. They have zero tolerance for any slacking.”</p>
<p id="indent">“I’m getting there,” I say, trying to defog my eyes. The woman in front of me looks to be about sixty. Why on earth are they keeping a sixty-year-old woman in their mining sweatshop?</p>
<p id="indent">“Come with me,” she says, extending her hand out. I take it and use it to hoist myself up. The room is alive with fifteen or so others, all rushing to wake up and get to business. “Let us get you some appropriate clothes. Your supervisor will not like what you are currently wearing.”</p>
<p id="indent">She leads me to a small closet full of dirty, light-blue jumpsuits. I assume I’m supposed to grab one of them, so I pick one out that might be the right size.</p>
<p id="page-end">43</p>`
const ch5p2 = `<p id="page-start"> </p>
<p id="indent">“Why are you helping me?” I ask.</p>
<p id="indent">“That attitude is exactly why,” she answers. “You are lost. I can tell you do not belong on this island.”</p>
<p id="indent">“I don’t think any of us belong here, to be fair. We’re literally prisoners right now.”</p>
<p id="indent">“You are too young to be here, mixed in with this crowd. I do not know what you did to be in this position, but I can tell it is unjust. My name is Mary. I try to help everyone, and today, you have my full attention.”</p>
<p id="indent">“Luna,” I say, “and thanks, I guess. I don’t want to sound rude, but you seem to be a little too old to be here.”</p>
<p id="indent">“I made a few mistakes in my life, and took out one too many loans. You are right, none of us should be stuck in this awful place, but we cannot change that. Our times to leave will come, and we will be free.”</p>
<p id="indent">Great. Another person shipped away for poor money management. Did anybody here actually do anything wrong, or were they all unfortunate?</p>
<p id="indent">Once again, she has me follow her to a separate room, where I stand in line with the three transplants I was shipped with last night. They’re also clad in the blue jumpsuits.</p>
<p id="indent">“I must leave you now, Luna,” Mary says, backing out of the room. “Good luck today. If you need anything later, find me. I will be cleaning one of the ships.”</p>
<p id="indent">“Not so fast, Mary,” a voice says from behind us. I recognize it immediately. The hairs on my neck stand up.</p>
<p id="indent">Mary stops walking backwards and joins the four of us in line. Looks like she doesn’t want to cross the big baddy, either.</p>
<p id="page-end">44</p>`
const ch5p2mobile = `<p id="page-start"> </p>
<p id="indent">“Why are you helping me?” I ask.</p>
<p id="indent">“That attitude is exactly why,” she answers. “You are lost. I can tell you do not belong on this island.”</p>
<p id="indent">“I don’t think any of us belong here, to be fair. We’re literally prisoners right now.”</p>
<p id="indent">“You are too young to be here, mixed in with this crowd. I do not know what you did to be in this position, but I can tell it is unjust. My name is Mary. I try to help everyone, and today, you have my full attention.”</p>
<p id="indent">“Luna,” I say, “and thanks, I guess. I don’t want to sound rude, but you seem to be a little too old to be here.”</p>
<p id="indent">“I made a few mistakes in my life, and took out one too many loans. You are right, none of us should be stuck in this awful place, but we cannot change that. Our times to leave will come, and we will be free.”</p>
<p id="indent">Great. Another person shipped away for poor money management. Did anybody here actually do anything wrong, or were they all unfortunate?</p>
<p id="indent">Once again, she has me follow her to a separate room, where I stand in line with the three transplants I was shipped with last night. They’re also clad in the blue jumpsuits.</p>
<p id="indent">“I must leave you now, Luna,” Mary says, backing out of the room. “Good luck today. If you need anything later, find me. I will be cleaning one of the ships.”</p>
<p id="indent">“Not so fast, Mary,” a voice says from behind us. I recognize it immediately. The hairs on my neck stand up.</p>
<p id="indent">Mary stops walking backwards and joins the four of us in line. Looks like she doesn’t want to cross the big baddy, either.</p>
<p id="page-end">44</p>`
const ch5p3 = `<p id="page-start"> </p>
<p id="indent">“So glad to see you again, Luna,” Slaphand says, appearing in front of us. “I hope you slept well.”</p>
<p id="indent">“What’d you do with my cat, you freak?”</p>
<p id="indent">“Don’t worry. He’s in good hands.”</p>
<p id="indent">“Monstrously large hands, maybe.”</p>
<p id="indent">“That’s no way to talk to your supervisor, now, is it?”</p>
<p id="indent">Of course. Of course he’s my supervisor. Why not? It’s not like this was already an awful situation. </p>
<p id="indent">“As you’ll remember, the position of Excavation Overseer opened up, and so that’s what you’ll be doing. I’m glad Mary took the liberty to get you dressed up, but you’ll be wearing a yellow set instead.”</p>
<p id="indent">“Oh, you poor child,” Mary whispers next to me.</p>
<p id="indent">“And what exactly does that mean?”</p>
<p id="indent">“Mostly making sure people are working, and handling any infractions. If someone’s not working, you’re in charge of putting them back to work, whatever way you seem fit.”</p>
<p id="indent">“That’s it?”</p>
<p id="indent">“That’s it.”</p>
<p id="indent">“What’s the catch?”</p>
<p id="indent">“There is no catch. You’ll be on a team with three other overseers. Feel free to tell me if any of them aren’t doing their job, either. The rest of you know where to go. Get to work.”</p>
<p id="indent">This sounds too easy. There’s no way that’s all it is.</p>
<p id="indent">“Why’d you say ‘poor child’ when he told me about my job?” I ask Mary, trailing her to a second closet, presumably filled with yellow jumpsuits.</p>
<p id="indent">“Those on the floor and in the mines do not like Overseers,” she </p>
<p id="page-end">45</p>`
const ch5p3mobile = `<p id="page-start"> </p>
<p id="indent">“So glad to see you again, Luna,” Slaphand says, appearing in front of us. “I hope you slept well.”</p>
<p id="indent">“What’d you do with my cat, you freak?”</p>
<p id="indent">“Don’t worry. He’s in good hands.”</p>
<p id="indent">“Monstrously large hands, maybe.”</p>
<p id="indent">“That’s no way to talk to your supervisor, now, is it?”</p>
<p id="indent">Of course. Of course he’s my supervisor. Why not? It’s not like this was already an awful situation. </p>
<p id="indent">“As you’ll remember, the position of Excavation Overseer opened up, and so that’s what you’ll be doing. I’m glad Mary took the liberty to get you dressed up, but you’ll be wearing a yellow set instead.”</p>
<p id="indent">“Oh, you poor child,” Mary whispers next to me.</p>
<p id="indent">“And what exactly does that mean?”</p>
<p id="indent">“Mostly making sure people are working, and handling any infractions. If someone’s not working, you’re in charge of putting them back to work, whatever way you seem fit.”</p>
<p id="indent">“That’s it?”</p>
<p id="indent">“That’s it.”</p>
<p id="indent">“What’s the catch?”</p>
<p id="indent">“There is no catch. You’ll be on a team with three other overseers. Feel free to tell me if any of them aren’t doing their job, either. The rest of you know where to go. Get to work.”</p>
<p id="indent">This sounds too easy. There’s no way that’s all it is.</p>
<p id="indent">“Why’d you say ‘poor child’ when he told me about my job?” I ask Mary, trailing her to a second closet, presumably filled with yellow jumpsuits.</p>
<p id="indent">“Those on the floor and in the mines do not like </p>
<p id="page-end">45</p>`
const ch5p4 = `<p id="page-start"> </p>
<p id="no-indent">answers, tossing me a second suit. It’s bright yellow, and, frankly, disgusting. “The one before you was killed because he was forceful in getting people to go back to work. You will need to be careful and not pick fights you cannot win.”</p>
<p id="indent">And there’s the catch. I’ll be physically assaulted if I try to do my job, and if I don’t, I’ll be ratted out by one of the other Overseers.</p>
<p id="indent">At least I won’t have to dig in dumpsters for food, I guess.</p>
<p id="indent">We walk out of the Housing building together. Although the sun is hardly peeking over the horizon, I can see the flat, expansive island that leads to the ocean in every direction. Two buildings stand directly in front of us, one labeled “Mess Hall” and the other “Administration.” You can tell which one is deemed more important by comparing the outsides of the buildings.</p>
<p id="indent">To our right, a vast area of quarries takes most of the land, and a shipyard with three standard-size airships hovers slightly off of the ground. The heavy mine machinery is already buzzing with life, and even though we’re standing quite a ways away, it still echoes loudly.</p>
<p id="indent">Everywhere my eyes stop on the landscape, I can see workers moving around. There has to be two hundred or so of them. How can Bijabers and Slaphand get away with a process this big without even being known by someone like Orion? Where’s the government in all of this nonsense?</p>
<p id="indent">“How about you follow me to the shipyard, and I will tell you a little bit more about working here?” Mary offers.</p>
<p id="indent">“I’m okay with that,” I say. “This is overwhelming.”</p>
<p id="indent">The two of us make our way to the shipyard. People in blue jumpsuits are walking in and out of the ships, loading and unloading </p>
<p id="page-end">46</p>`
const ch5p4mobile = `<p id="page-start"> </p>
<p id="no-indent">Overseers,” she answers, tossing me a second suit. It’s bright yellow, and, frankly, disgusting. “The one before you was killed because he was forceful in getting people to go back to work. You will need to be careful and not pick fights you cannot win.”</p>
<p id="indent">And there’s the catch. I’ll be physically assaulted if I try to do my job, and if I don’t, I’ll be ratted out by one of the other Overseers.</p>
<p id="indent">At least I won’t have to dig in dumpsters for food, I guess.</p>
<p id="indent">We walk out of the Housing building together. Although the sun is hardly peeking over the horizon, I can see the flat, expansive island that leads to the ocean in every direction. Two buildings stand directly in front of us, one labeled “Mess Hall” and the other “Administration.” You can tell which one is deemed more important by comparing the outsides of the buildings.</p>
<p id="indent">To our right, a vast area of quarries takes most of the land, and a shipyard with three standard-size airships hovers slightly off of the ground. The heavy mine machinery is already buzzing with life, and even though we’re standing quite a ways away, it still echoes loudly.</p>
<p id="indent">Everywhere my eyes stop on the landscape, I can see workers moving around. There has to be two hundred or so of them. How can Bijabers and Slaphand get away with a process this big without even being known by someone like Orion? Where’s the government in all of this nonsense?</p>
<p id="indent">“How about you follow me to the shipyard, and I will tell you a little bit more about working here?” Mary offers.</p>
<p id="indent">“I’m okay with that,” I say. “This is overwhelming.”</p>
<p id="indent">The two of us make our way to the shipyard. People in blue jumpsuits are walking in and out of the ships, loading </p>
<p id="page-end">46</p>`
const ch5p5 = `<p id="page-start"> </p>
<p id="no-indent">heavy-looking crates. One of them notices me and Mary walking up and drops their load for a moment.</p>
<p id="indent">“Mary, you’re working with this Overseer?”</p>
<p id="indent">“This Overseer is just a kid, Antoine. She belongs here no more than we do. I am helping her out today, because she is a lost soul.”</p>
<p id="indent">“Whatever you say, Mary. I hope you’re right on this.”</p>
<p id="indent">“Have I ever been wrong?”</p>
<p id="indent">“I feel like I shouldn’t answer that, <em>señora</em>.” Antoine picks his box back up and carries it away, shaking his head. At least Mary has some friends in this prison.</p>
<p id="indent">“Why haven’t you asked why I’m here?” I ask her, as she grabs a bucket and sponge from a nearby shed.</p>
<p id="indent">“For two reasons, Luna,” she says, filling the bucket with less-than-pristine water. “I can sense the great trouble you have endured for way too long. You hurt deeply. I am afraid that the trouble and hurt will follow you and grow into something that nobody can control.”</p>
<p id="indent">“And the second reason?”</p>
<p id="indent">“Not everything is about you, child.” She smiles up at me. It isn’t forced or unnatural. </p>
<p id="indent">“Ouch. Fair, I guess, but it didn’t need to be said.”</p>
<p id="indent">“Did it not? You are a fierce young soul. The world has wronged you many times, no doubt. But you have a passion that could get you into a lot of trouble here. Try not to be a hero. Heroes get killed.”</p>
<p id="indent">“Heroes like Orion?”</p>
<p id="indent">“I do not know Orion or his character. I have only heard the stories that get brought in with new people. All I can say is if he were really as good as people say he is, we would not be stuck on this island.”</p>
<p id="page-end">47</p>`
const ch5p5mobile = `<p id="page-start"> </p>
<p id="no-indent">and unloading heavy-looking crates. One of them notices me and Mary walking up and drops their load for a moment.</p>
<p id="indent">“Mary, you’re working with this Overseer?”</p>
<p id="indent">“This Overseer is just a kid, Antoine. She belongs here no more than we do. I am helping her out today, because she is a lost soul.”</p>
<p id="indent">“Whatever you say, Mary. I hope you’re right on this.”</p>
<p id="indent">“Have I ever been wrong?”</p>
<p id="indent">“I feel like I shouldn’t answer that, <em>señora</em>.” Antoine picks his box back up and carries it away, shaking his head. At least Mary has some friends in this prison.</p>
<p id="indent">“Why haven’t you asked why I’m here?” I ask her, as she grabs a bucket and sponge from a nearby shed.</p>
<p id="indent">“For two reasons, Luna,” she says, filling the bucket with less-than-pristine water. “I can sense the great trouble you have endured for way too long. You hurt deeply. I am afraid that the trouble and hurt will follow you and grow into something that nobody can control.”</p>
<p id="indent">“And the second reason?”</p>
<p id="indent">“Not everything is about you, child.” She smiles up at me. It isn’t forced or unnatural. </p>
<p id="indent">“Ouch. Fair, I guess, but it didn’t need to be said.”</p>
<p id="indent">“Did it not? You are a fierce young soul. The world has wronged you many times, no doubt. But you have a passion that could get you into a lot of trouble here. Try not to be a hero. Heroes get killed.”</p>
<p id="indent">“Heroes like Orion?”</p>
<p id="indent">“I do not know Orion or his character. I have only heard the stories that get brought in with new people. All I can say is if he were really as good as people say he is, we would not be stuck on this island.”</p>
<p id="page-end">47</p>`
const ch5p6 = `<p id="page-start"> </p>
<p id="indent">“Preach it, Mary.”</p>
<p id="indent">That said, I still have a little hope that he’ll pull through. Orion always stands up for the little guy. Surely he’ll find out about Bijabers soon enough to free us all.</p>
<p id="indent">Boy, what a hypocrite I am. Just yesterday I was talking with Freckles about how unhelpful Orion and the Clockwork are, and now…</p>
<p id="indent">Now, I’m Freckles-less. My heart pangs again, longing for my mechanical partner. Maybe Mary’s right. It isn’t all about me. I haven’t even thought about Freckles since waking up. </p>
<p id="indent">“Actually, I think you’re wrong, Mary.”</p>
<p id="indent">“How so?” She turns to face me, rubbing away at the side of the metal airship with her sponge. I’m not sure how she plans to get this whole thing clean with a bucket and a sponge, but that’s not my problem. She’s staying busy, after all.</p>
<p id="indent">“This <em>isn’t</em> about me. It’s about getting my best friend back. My cat was taken from me by these awful slavers, and I’ll be darned if I’m not rescuing him within the next week.”</p>
<p id="indent">“There is that dangerous ambition I was talking about,” Mary says. “You are very good at riling yourself up. It even worked on me. Please be careful, Luna. I do not want to welcome a second Overseer in the span of one week.”</p>
<p id="indent">Speaking of Overseers…</p>
<p id="indent">One of the other three walks by, clearly staring directly at the two of us. I guess that’s my sign to get started for the day. </p>
<p id="indent">“Well, Mary, I’m off to do whatever patrolling I’m supposed to do. Try not to get yourself into too much trouble.”</p>
<p id="indent">She lets out a little chuckle.</p>
<p id="page-end">48</p>`
const ch5p6mobile = `<p id="page-start"> </p>
<p id="indent">“Preach it, Mary.”</p>
<p id="indent">That said, I still have a little hope that he’ll pull through. Orion always stands up for the little guy. Surely he’ll find out about Bijabers soon enough to free us all.</p>
<p id="indent">Boy, what a hypocrite I am. Just yesterday I was talking with Freckles about how unhelpful Orion and the Clockwork are, and now…</p>
<p id="indent">Now, I’m Freckles-less. My heart pangs again, longing for my mechanical partner. Maybe Mary’s right. It isn’t all about me. I haven’t even thought about Freckles since waking up. </p>
<p id="indent">“Actually, I think you’re wrong, Mary.”</p>
<p id="indent">“How so?” She turns to face me, rubbing away at the side of the metal airship with her sponge. I’m not sure how she plans to get this whole thing clean with a bucket and a sponge, but that’s not my problem. She’s staying busy, after all.</p>
<p id="indent">“This <em>isn’t</em> about me. It’s about getting my best friend back. My cat was taken from me by these awful slavers, and I’ll be darned if I’m not rescuing him within the next week.”</p>
<p id="indent">“There is that dangerous ambition I was talking about,” Mary says. “You are very good at riling yourself up. It even worked on me. Please be careful, Luna. I do not want to welcome a second Overseer in the span of one week.”</p>
<p id="indent">Speaking of Overseers…</p>
<p id="indent">One of the other three walks by, clearly staring directly at the two of us. I guess that’s my sign to get started for the day. </p>
<p id="indent">“Well, Mary, I’m off to do whatever patrolling I’m supposed to do. Try not to get yourself into too much trouble.”</p>
<p id="indent">She lets out a little chuckle.</p>
<p id="page-end">48</p>`
const ch5p7 = `<p id="page-start"> </p>
<p id="indent">I begin with the shipyard, circling it once or twice. Walking the perimeter really puts the size of these airships in perspective. Being this close to them, it’s obvious they’re far from a normal size, and certainly aren’t vessels for transporting their kidnapped debtors. Are they preparing for some sort of battle?</p>
<p id="indent">And also, how have these not been noticed yet by someone from the outside? Something this big, let alone three things this big, has to be visible from the sky.</p>
<p id="indent">Other than the three potential warships, there’s nothing else interesting happening at the shipyard, so I move on to patrol some of the quarries. Each has about ten people working at them. Half are operating the heavy machinery, while the rest are in the quarry, digging and wheeling things back and forth.</p>
<p id="indent">The first pit I glance down goes on for what looks like a hundred feet. I’m not exactly sure what they’re mining for, but whatever it is, they haven’t mined any yet today. Multiple empty carts line the ledge down.</p>
<p id="indent">The second one goes even further down, but none of the machinery is doing anything. All ten people are down inside, chipping away at one of the quarry walls. A quick look in a barrel just off the edge shows an enormous amount of coal. What do they need all of it for?</p>
<p id="indent">“Are you the new Overseer?” a voice asks to my side. I turn to see another Overseer, a large man that stands at least a foot above me.</p>
<p id="indent">“Yeah, I am.”</p>
<p id="indent">“Good luck, kid. You’re gonna need it.”</p>
<p id="indent">He walks away, leaving me to stew in his words. I’m glad Mary found me first. I’d probably have started fights with almost everyone if she hadn’t.</p>
<p id="page-end">49</p>`
const ch5p7mobile = `<p id="page-start"> </p>
<p id="indent">I begin with the shipyard, circling it once or twice. Walking the perimeter really puts the size of these airships in perspective. Being this close to them, it’s obvious they’re far from a normal size, and certainly aren’t vessels for transporting their kidnapped debtors. Are they preparing for some sort of battle?</p>
<p id="indent">And also, how have these not been noticed yet by someone from the outside? Something this big, let alone three things this big, has to be visible from the sky.</p>
<p id="indent">Other than the three potential warships, there’s nothing else interesting happening at the shipyard, so I move on to patrol some of the quarries. Each has about ten people working at them. Half are operating the heavy machinery, while the rest are in the quarry, digging and wheeling things back and forth.</p>
<p id="indent">The first pit I glance down goes on for what looks like a hundred feet. I’m not exactly sure what they’re mining for, but whatever it is, they haven’t mined any yet today. Multiple empty carts line the ledge down.</p>
<p id="indent">The second one goes even further down, but none of the machinery is doing anything. All ten people are down inside, chipping away at one of the quarry walls. A quick look in a barrel just off the edge shows an enormous amount of coal. What do they need all of it for?</p>
<p id="indent">“Are you the new Overseer?” a voice asks to my side. I turn to see another Overseer, a large man that stands at least a foot above me.</p>
<p id="indent">“Yeah, I am.”</p>
<p id="indent">“Good luck, kid. You’re gonna need it.”</p>
<p id="indent">He walks away, leaving me to stew in his words. I’m glad Mary found me first. I’d probably have started fights with almost everyone if she hadn’t.</p>
<p id="page-end">49</p>`
const ch5p8 = `<p id="page-start"> </p>
<p id="indent">I make my way to a third quarry, where the workers are sitting idly by in the grass.</p>
<p id="indent">“What’s happening here?”</p>
<p id="indent">“Our machinery broke down. We can’t do any mining.”</p>
<p id="indent">“What are you mining for?”</p>
<p id="indent">“Coal, just like our neighbors.”</p>
<p id="indent">“Then why can’t you mine it just like your neighbors?”</p>
<p id="indent">“You want us to go down into the quarry and start smacking the rocks? Is that what you want?”</p>
<p id="indent">“I mean, I don’t see why you can’t. Looks to me that your pit’s as deep as theirs.”</p>
<p id="indent">“How about you get some mechanics on their way over and maybe we’ll talk about doing it by hand.”</p>
<p id="indent">“I’ll see what I can do. For now, at least try to seem busy, I guess.”</p>
<p id="indent">I feel like I should’ve been told about mechanics. Is it my job to find the mechanics and get them to fix stuff?</p>
<p id="indent">I search for one of the other Overseers, hoping for insight, and spot the one from the shipyard earlier. I make an embarrassing jog from across the field of quarries, and arrive out of breath.</p>
<p id="indent">“Is there something I can help you with?” she asks, crossing her arms. Apparently, “no-nonsense” is a common characteristic here.</p>
<p id="indent">“Hey, I’m Luna. The people in the third quarry told me their machinery is down, and that they wanted a mechanic. Is that our job, and where do I do that?”</p>
<p id="indent">“I don’t know where they get off forcing a kid like you into the Overseer position. I’m Lana. Let me lead you to the mechanics shop.”</p>
<p id="indent">Luna and Lana. That sure won’t get confusing.</p>
<p id="page-end">50</p>`
const ch5p8mobile = `<p id="page-start"> </p>
<p id="indent">I make my way to a third quarry, where the workers are sitting idly by in the grass.</p>
<p id="indent">“What’s happening here?”</p>
<p id="indent">“Our machinery broke down. We can’t do any mining.”</p>
<p id="indent">“What are you mining for?”</p>
<p id="indent">“Coal, just like our neighbors.”</p>
<p id="indent">“Then why can’t you mine it just like your neighbors?”</p>
<p id="indent">“You want us to go down into the quarry and start smacking the rocks? Is that what you want?”</p>
<p id="indent">“I mean, I don’t see why you can’t. Looks to me that your pit’s as deep as theirs.”</p>
<p id="indent">“How about you get some mechanics on their way over and maybe we’ll talk about doing it by hand.”</p>
<p id="indent">“I’ll see what I can do. For now, at least try to seem busy, I guess.”</p>
<p id="indent">I feel like I should’ve been told about mechanics. Is it my job to find the mechanics and get them to fix stuff?</p>
<p id="indent">I search for one of the other Overseers, hoping for insight, and spot the one from the shipyard earlier. I make an embarrassing jog from across the field of quarries, and arrive out of breath.</p>
<p id="indent">“Is there something I can help you with?” she asks, crossing her arms. Apparently, “no-nonsense” is a common characteristic here.</p>
<p id="indent">“Hey, I’m Luna. The people in the third quarry told me their machinery is down, and that they wanted a mechanic. Is that our job, and where do I do that?”</p>
<p id="indent">“I don’t know where they get off forcing a kid like you into the Overseer position. I’m Lana. Let me lead you to the mechanics shop.”</p>
<p id="indent">Luna and Lana. That sure won’t get confusing.</p>
<p id="page-end">50</p>`
const ch5p9 = `<p id="page-start"> </p>
<p id="indent">She turns and starts moving, expecting me to follow. We walk to the Administration building and enter through a large overhead door. Inside is some sort of workshop, with welding masks, tools, and a billion different pieces of scrap scattered all across the floor. A lot of this stuff could make for some useful makeshift weapons if necessary. </p>
<p id="indent">“This is the mechanic shop. Usually, you find one of them somewhere in here and let them know who needs help. They work directly for the supervisors, so we have no authority over them and vice versa. At best, they’ll get to wherever they need to be in an hour or two.”</p>
<p id="indent">A few of the mechanics, wearing gray and brown, walk out of a door and into the workshop. They look about as goonish as the people that brought me here last night. </p>
<p id="indent">“Hey, boys,” Lana says, her demeanor changing into something a little more promiscuous. “Wouldn’t you do me a favor and give quarry three some love?”</p>
<p id="indent">“Anything for you, Lana,” one of them says, forming a heart with their hands. </p>
<p id="indent">“Anyone else need some love?” another asks.</p>
<p id="indent">“Hmmm. That’ll depend on how well you do with the first one.”</p>
<p id="indent">I quietly take my leave, hoping nobody notices.</p>
<p id="indent">That was… disturbing? Disgusting? Both?</p>
<p id="indent">Both.</p>
<p id="indent">I decide to head back to Mary at the shipyard to check up on her. At least she won’t try to seduce three gross mechanics.</p>
<p id="indent">When I arrive, the third Overseer is hovering over Mary. The two are in a heated conversation about something.</p>
<p id="indent">“What’s going on?” I ask, sizing up the Overseer. He’s not as big </p>
<p id="page-end">51</p>`
const ch5p9mobile = `<p id="page-start"> </p>
<p id="indent">She turns and starts moving, expecting me to follow. We walk to the Administration building and enter through a large overhead door. Inside is some sort of workshop, with welding masks, tools, and a billion different pieces of scrap scattered all across the floor. A lot of this stuff could make for some useful makeshift weapons if necessary. </p>
<p id="indent">“This is the mechanic shop. Usually, you find one of them somewhere in here and let them know who needs help. They work directly for the supervisors, so we have no authority over them and vice versa. At best, they’ll get to wherever they need to be in an hour or two.”</p>
<p id="indent">A few of the mechanics, wearing gray and brown, walk out of a door and into the workshop. They look about as goonish as the people that brought me here last night. </p>
<p id="indent">“Hey, boys,” Lana says, her demeanor changing into something a little more promiscuous. “Wouldn’t you do me a favor and give quarry three some love?”</p>
<p id="indent">“Anything for you, Lana,” one of them says, forming a heart with their hands. </p>
<p id="indent">“Anyone else need some love?” another asks.</p>
<p id="indent">“Hmmm. That’ll depend on how well you do with the first one.”</p>
<p id="indent">I quietly take my leave, hoping nobody notices.</p>
<p id="indent">That was… disturbing? Disgusting? Both?</p>
<p id="indent">Both.</p>
<p id="indent">I decide to head back to Mary at the shipyard to check up on her. At least she won’t try to seduce three gross mechanics.</p>
<p id="indent">When I arrive, the third Overseer is hovering over Mary. The two are in a heated conversation about something.</p>
<p id="indent">“What’s going on?” I ask, sizing up the Overseer. He’s </p>
<p id="page-end">51</p>`
const ch5p10 = `<p id="page-start"> </p>
<p id="no-indent">as the one from the quarries, but he’s still pretty large.</p>
<p id="indent">“I needed a short break from all the exertion I was putting out is all,” Mary says. “I was just about to get back to work again.”</p>
<p id="indent">“You’ve been sitting here doing nothing for fifteen minutes, old lady,” the Overseer says. “That’s way longer than you should need for taking a sponge to the side of an airship.”</p>
<p id="indent">“Well, like I said, I was—”</p>
<p id="indent">“You need to back off, dude,” I say, raising my own voice. “She’s like, sixty. Of course she needs a little bit of a break every now and then. It’s not like she tones her muscles hitting the gym after work.”</p>
<p id="indent">“Please, stay out of this, Luna.”</p>
<p id="indent">“Absolutely not. You need respect just as much as he does.”</p>
<p id="indent">“Do you have a problem, kid?” the Overseer asks.</p>
<p id="indent">“As a matter of fact, I do. Maybe go hound on the ten people at quarry three for not doing anything all morning instead of an old woman taking a fifteen-minute break.”</p>
<p id="indent">He stares at me, probably deciding whether or not I’m worth it. Before he gets to say anything more, however, a long beep sounds off across the field. The hundred or so people working at the quarries drop their stuff and funnel towards the buildings.</p>
<p id="indent">“You’re lucky it’s lunchtime,” the man says, looking past me to Mary. “But you better stay busy.”</p>
<p id="indent">He gives me one last glare and makes his way to the mess hall himself.</p>
<p id="indent">“That was very selfless of you,” Mary says, standing up off the ground. “It surprised me.”</p>
<p id="indent">“Yeah, I guess that was pretty selfless,” I realize. Why does that </p>
<p id="page-end">52</p>`
const ch5p10mobile = `<p id="page-start"> </p>
<p id="no-indent">not as big as the one from the quarries, but he’s still pretty large.</p>
<p id="indent">“I needed a short break from all the exertion I was putting out is all,” Mary says. “I was just about to get back to work again.”</p>
<p id="indent">“You’ve been sitting here doing nothing for fifteen minutes, old lady,” the Overseer says. “That’s way longer than you should need for taking a sponge to the side of an airship.”</p>
<p id="indent">“Well, like I said, I was—”</p>
<p id="indent">“You need to back off, dude,” I say, raising my own voice. “She’s like, sixty. Of course she needs a little bit of a break every now and then. It’s not like she tones her muscles hitting the gym after work.”</p>
<p id="indent">“Please, stay out of this, Luna.”</p>
<p id="indent">“Absolutely not. You need respect just as much as he does.”</p>
<p id="indent">“Do you have a problem, kid?” the Overseer asks.</p>
<p id="indent">“As a matter of fact, I do. Maybe go hound on the ten people at quarry three for not doing anything all morning instead of an old woman taking a fifteen-minute break.”</p>
<p id="indent">He stares at me, probably deciding whether or not I’m worth it. Before he gets to say anything more, however, a long beep sounds off across the field. The hundred or so people working at the quarries drop their stuff and funnel towards the buildings.</p>
<p id="indent">“You’re lucky it’s lunchtime,” the man says, looking past me to Mary. “But you better stay busy.”</p>
<p id="indent">He gives me one last glare and makes his way to the mess hall himself.</p>
<p id="indent">“That was very selfless of you,” Mary says, standing up off the ground. “It surprised me.”</p>
<p id="indent">“Yeah, I guess that was pretty selfless,” I realize. Why </p>
<p id="page-end">52</p>`
const ch5p11 = `<p id="page-start"> </p>
<p id="no-indent">surprise her? Or me, for that matter?</p>
<p id="indent">“Do not do it again.”</p>
<p id="indent">“What? He was being harsh on you. I couldn’t let that happen.”</p>
<p id="indent">“Yes, you can and should. It is his and your job to do so. If you want to get you and your pet out of here, then you have to focus on yourself. The last thing you need is to make more enemies than necessary.”</p>
<p id="indent">“I appreciate it, but you’re not gonna stop me from helping you. You helped me this morning, after all.”</p>
<p id="indent">We walk together to the mess hall and get ourselves whatever slop they’re serving. It doesn’t look too appetizing, but honestly, I’m still glad that it’s a guaranteed meal. The two of us sit side by side at a long table populated with other shipyard workers. For the most part, they’re all laughing and having a good time, but seem a little weary being this close to me.</p>
<p id="indent">“Fifty-eight, by the way,” Mary says, between bites.</p>
<p id="indent">“What?”</p>
<p id="indent">“Back at the ship, you said sixty. I am actually fifty-eight. Just figured I should let you know.”</p>
<p id="indent">She smiles, and I smile back. I’m glad Mary’s one of the good ones.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">53</p>`
const ch5p11mobile = `<p id="page-start"> </p>
<p id="no-indent">does that surprise her? Or me, for that matter?</p>
<p id="indent">“Do not do it again.”</p>
<p id="indent">“What? He was being harsh on you. I couldn’t let that happen.”</p>
<p id="indent">“Yes, you can and should. It is his and your job to do so. If you want to get you and your pet out of here, then you have to focus on yourself. The last thing you need is to make more enemies than necessary.”</p>
<p id="indent">“I appreciate it, but you’re not gonna stop me from helping you. You helped me this morning, after all.”</p>
<p id="indent">We walk together to the mess hall and get ourselves whatever slop they’re serving. It doesn’t look too appetizing, but honestly, I’m still glad that it’s a guaranteed meal. The two of us sit side by side at a long table populated with other shipyard workers. For the most part, they’re all laughing and having a good time, but seem a little weary being this close to me.</p>
<p id="indent">“Fifty-eight, by the way,” Mary says, between bites.</p>
<p id="indent">“What?”</p>
<p id="indent">“Back at the ship, you said sixty. I am actually fifty-eight. Just figured I should let you know.”</p>
<p id="indent">She smiles, and I smile back. I’m glad Mary’s one of the good ones.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">53</p>`
const ch5p12 = ``
const ch5p12mobile = ``
const ch5p13 = ``
const ch5p13mobile = ``
const ch5p14 = ``
const ch5p14mobile = ``
const ch5p15 = ``
const ch5p15mobile = ``
const ch5p16 = ``
const ch5p16mobile = ``
const ch5p17 = ``
const ch5p17mobile = ``
const ch5p18 = ``
const ch5p18mobile = ``
const ch5 = [ch5p1, ch5p2, ch5p3, ch5p4, ch5p5, ch5p6, ch5p7, ch5p8, ch5p9, ch5p10, ch5p11, ch5p12, ch5p13, ch5p14, ch5p15, ch5p16, ch5p17, ch5p18]
const ch5mobile = [ch5p1mobile, ch5p2mobile, ch5p3mobile, ch5p4mobile, ch5p5mobile, ch5p6mobile, ch5p7mobile, ch5p8mobile, ch5p9mobile, ch5p10mobile, ch5p11mobile, ch5p12mobile, ch5p13mobile, ch5p14mobile, ch5p15mobile, ch5p16mobile, ch5p17mobile, ch5p18mobile]

const ch6p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 6</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Following an uneventful evening, I fall asleep with almost no hesitation. Staying asleep, however, is a different story. I’m repeatedly woken by random noises, the foot of another person kicking me, or the newly repeating memory-dream of the day I met Freckles, as if my brain is trying to make me feel guilty for losing my best friend.</p>
<p id="indent">And, of course, it’s working. I wake up at nearly six in the morning, upset and a wreck from the memory-dream that once again haunted me. A single tear rolls down my cheek, a remnant from the long night of restlessness. It’s only the beginning of day two, but the pain of his absence is becoming unbearable. </p>
<p id="indent">Knowing that people are about to kick into action shortly, I sit </p>
<p id="page-end">54</p>`
const ch6p1mobile = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 6</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Following an uneventful evening, I fall asleep with almost no hesitation. Staying asleep, however, is a different story. I’m repeatedly woken by random noises, the foot of another person kicking me, or the newly repeating memory-dream of the day I met Freckles, as if my brain is trying to make me feel guilty for losing my best friend.</p>
<p id="indent">And, of course, it’s working. I wake up at nearly six in the morning, upset and a wreck from the memory-dream that once again haunted me. A single tear rolls down my cheek, a remnant from the long night of restlessness. It’s only the beginning of day two, but the pain of his absence is becoming unbearable. </p>
<p id="indent">Knowing that people are about to kick into action shortly, </p>
<p id="page-end">54</p>`
const ch6p2 = `<p id="page-start"> </p>
<p id="no-indent">up, preventing myself from having the chance to fall asleep any longer. I glance around the room, searching for my elderly companion, and spot her rubbing the crust from her sleepy eyes. When she notices me staring, she gives a little wave.</p>
<p id="indent">We both stand up at about the same time and quietly sneak out of the room, careful to avoid the sleeping lumps strewn across the floor. A few others stir awake, but for the most part, everyone’s looking to get their last few minutes of beauty rest.</p>
<p id="indent">“I’m not gonna lie, Mary, I’m feeling awful hungry already.”</p>
<p id="indent">“One of the greatest troubles on the island,” she replies. “Breakfast will end by the time we make it to the mess hall, though. They close shop at exactly six to prepare for lunch, and we have to get right to business when the bell sounds off.”</p>
<p id="indent">“I wouldn’t say ‘no breakfast’ is the greatest trouble here. I’d probably say the whole ‘slave labor’ thing is.”</p>
<p id="indent">“Ah, well, I said ‘one of,’ did I not?”</p>
<p id="indent">“Alright, but there’s a sizeable gap between the two concepts.”</p>
<p id="indent">We switch into fresh pairs of our respective clothing types, and not a moment later, the six o’clock bell rings, signaling that work time has begun. Like the day before, I follow Mary out to the shipyard, where she heads directly to the little shed for her equipment.</p>
<p id="indent">“I recommend busying yourself a little more today than you did yesterday, Luna,” she says, ringing a sponge out into a bent-up metal bucket. “There are many things to get accustomed to here, especially for an Overseer like yourself.”</p>
<p id="indent">“Yeah, I guess I better. Any idea where to start?”</p>
<p id="indent">“If it would make you feel more comfortable, the men here at the </p>
<p id="page-end">55</p>`
const ch6p2mobile = `<p id="page-start"> </p>
<p id="no-indent">I sit up, preventing myself from having the chance to fall asleep any longer. I glance around the room, searching for my elderly companion, and spot her rubbing the crust from her sleepy eyes. When she notices me staring, she gives a little wave.</p>
<p id="indent">We both stand up at about the same time and quietly sneak out of the room, careful to avoid the sleeping lumps strewn across the floor. A few others stir awake, but for the most part, everyone’s looking to get their last few minutes of beauty rest.</p>
<p id="indent">“I’m not gonna lie, Mary, I’m feeling awful hungry already.”</p>
<p id="indent">“One of the greatest troubles on the island,” she replies. “Breakfast will end by the time we make it to the mess hall, though. They close shop at exactly six to prepare for lunch, and we have to get right to business when the bell sounds off.”</p>
<p id="indent">“I wouldn’t say ‘no breakfast’ is the greatest trouble here. I’d probably say the whole ‘slave labor’ thing is.”</p>
<p id="indent">“Ah, well, I said ‘one of,’ did I not?”</p>
<p id="indent">“Alright, but there’s a sizeable gap between the two concepts.”</p>
<p id="indent">We switch into fresh pairs of our respective clothing types, and not a moment later, the six o’clock bell rings, signaling that work time has begun. Like the day before, I follow Mary out to the shipyard, where she heads directly to the little shed for her equipment.</p>
<p id="indent">“I recommend busying yourself a little more today than you did yesterday, Luna,” she says, ringing a sponge out into a bent-up metal bucket. “There are many things to get accustomed to here, especially for an Overseer like yourself.”</p>
<p id="indent">“Yeah, I guess I better. Any idea where to start?”</p>
<p id="indent">“If it would make you feel more comfortable, the men </p>
<p id="page-end">55</p>`
const ch6p3 = `<p id="page-start"> </p>
<p id="no-indent">shipyard are more easy-going than the rest of the island.”</p>
<p id="indent">Taking her word, I begin my patrol of the dockyard. The large ships, which are still as breathtaking as they were yesterday, sit idly by as people clean them, load things onto them, and congregate on their decks, talking things out and planning their days.</p>
<p id="indent">I’m almost thankful I have this job. No worry over black lung, or breaking my back lifting things onto an airship, or standing in one spot, doing the same thing for ten hours a day.</p>
<p id="indent">“Well, if it ain’t the pipsqueak from yesterday,” I hear off to my side. I turn to see the larger-built Overseer walking my way, a humored face masking his tough-guy persona. “I didn’t think you’d survive the night surrounded by all of those ruffians.”</p>
<p id="indent">“I’d say. It was pretty rough getting to sleep.”</p>
<p id="indent">“It’s rough every night. You’ll get used to it.”</p>
<p id="indent">“Thanks for the glimmer of hope.”</p>
<p id="indent">“Yeah, no problem. Tell you what, I don’t know what you’ve done, but the other two aren’t that fond of ya. Lana’s a bit tweaked this morning, and Renet seems to be stewing, too. The name’s Arnold, by the way.”</p>
<p id="indent">“Luna,” I reply, “and that figures. I did have a stand-off with him yesterday for getting after an old lady taking a break. Don’t know what Lana’s deal is, though.”</p>
<p id="indent">“Eh, could be anything. She’s just like that, honestly. Well, good luck I suppose, and if you need my help, don’t.”</p>
<p id="indent">With that, the large man walks away, off to visit some of the far-off quarries towards the center of the island. </p>
<p id="indent">Yesterday, he hardly even looked my way, but today he was willing </p>
<p id="page-end">56</p>`
const ch6p3mobile = `<p id="page-start"> </p>
<p id="no-indent">here at the shipyard are more easy-going than the rest of the island.”</p>
<p id="indent">Taking her word, I begin my patrol of the dockyard. The large ships, which are still as breathtaking as they were yesterday, sit idly by as people clean them, load things onto them, and congregate on their decks, talking things out and planning their days.</p>
<p id="indent">I’m almost thankful I have this job. No worry over black lung, or breaking my back lifting things onto an airship, or standing in one spot, doing the same thing for ten hours a day.</p>
<p id="indent">“Well, if it ain’t the pipsqueak from yesterday,” I hear off to my side. I turn to see the larger-built Overseer walking my way, a humored face masking his tough-guy persona. “I didn’t think you’d survive the night surrounded by all of those ruffians.”</p>
<p id="indent">“I’d say. It was pretty rough getting to sleep.”</p>
<p id="indent">“It’s rough every night. You’ll get used to it.”</p>
<p id="indent">“Thanks for the glimmer of hope.”</p>
<p id="indent">“Yeah, no problem. Tell you what, I don’t know what you’ve done, but the other two aren’t that fond of ya. Lana’s a bit tweaked this morning, and Renet seems to be stewing, too. The name’s Arnold, by the way.”</p>
<p id="indent">“Luna,” I reply, “and that figures. I did have a stand-off with him yesterday for getting after an old lady taking a break. Don’t know what Lana’s deal is, though.”</p>
<p id="indent">“Eh, could be anything. She’s just like that, honestly. Well, good luck I suppose, and if you need my help, don’t.”</p>
<p id="indent">With that, the large man walks away, off to visit some of the far-off quarries towards the center of the island. </p>
<p id="indent">Yesterday, he hardly even looked my way, but today he </p>
<p id="page-end">56</p>`
const ch6p4 = `<p id="page-start"> </p>
<p id="no-indent">to hold a light conversation and give me advice? An interesting way to make an impression on someone, I guess.</p>
<p id="indent">Following in his lumbering footsteps, I finish my round at the shipyard and make my way over to the quarries, ready for another exciting day of trying to force people to work against their will for no pay. A surefire way to get everyone to hate you, and I can’t say I blame them all that much.</p>
<p id="indent">Still, I make my way back to yesterday’s problem quarry and find the group of men once again sitting idle. They watch me approach, not even attempting to act like they’re happy I exist.</p>
<p id="indent">“I see you guys still aren’t getting anything done,” I say, leaning on one of the inactive pieces of machinery.</p>
<p id="indent">“I see you haven’t gotten the mechanics to do anything,” the main man from yesterday replies, getting a little too up-close and personal for my liking.</p>
<p id="indent">“As far as I know, the mechanics were supposed to have arrived yesterday to work on the stuff, but even if they haven’t, that’s no excuse to be doing nothing. At least go join one of the other quarries.”</p>
<p id="indent">“Yeah, right. Everyone’s rock-noggin territorial over these darn quarries. Can’t have more than twelve to one quarry, anyways.”</p>
<p id="indent">“Well then, I recommend splitting up and getting a go-on.”</p>
<p id="indent">“You know, for being fresh meat and a foot shorter than me, you’re awful lippy. Why are you even an Overseer, kid? What favors did you do for the big man to get such a high rank in his abusive cycle, huh?”</p>
<p id="indent">“Yeah, who is you, anyway?” another one of them asks, walking up to join in our less-than-cordial conversation. I can feel the pressure of the situation closing in. If it came down to it, there’s no </p>
<p id="page-end">57</p>`
const ch6p4mobile = `<p id="page-start"> </p>
<p id="no-indent">was willing to hold a light conversation and give me advice? An interesting way to make an impression on someone, I guess.</p>
<p id="indent">Following in his lumbering footsteps, I finish my round at the shipyard and make my way over to the quarries, ready for another exciting day of trying to force people to work against their will for no pay. A surefire way to get everyone to hate you, and I can’t say I blame them all that much.</p>
<p id="indent">Still, I make my way back to yesterday’s problem quarry and find the group of men once again sitting idle. They watch me approach, not even attempting to act like they’re happy I exist.</p>
<p id="indent">“I see you guys still aren’t getting anything done,” I say, leaning on one of the inactive pieces of machinery.</p>
<p id="indent">“I see you haven’t gotten the mechanics to do anything,” the main man from yesterday replies, getting a little too up-close and personal for my liking.</p>
<p id="indent">“As far as I know, the mechanics were supposed to have arrived yesterday to work on the stuff, but even if they haven’t, that’s no excuse to be doing nothing. At least go join one of the other quarries.”</p>
<p id="indent">“Yeah, right. Everyone’s rock-noggin territorial over these darn quarries. Can’t have more than twelve to one quarry, anyways.”</p>
<p id="indent">“Well then, I recommend splitting up and getting a go-on.”</p>
<p id="indent">“You know, for being fresh meat and a foot shorter than me, you’re awful lippy. Why are you even an Overseer, kid? What favors did you do for the big man to get such a high rank in his abusive cycle, huh?”</p>
<p id="indent">“Yeah, who is you, anyway?” another one of them asks, walking up to join in our less-than-cordial conversation. I can feel the pressure of the situation closing in. If it came </p>
<p id="page-end">57</p>`
const ch6p5 = `<p id="page-start"> </p>
<p id="no-indent">way I’d be able to fend off ten physically fit men, much less run away.</p>
<p id="indent">“I don’t do favors for anyone. Just try to look busy, alright, y’all? The last thing we need is to have our hours extended any more than they are right now.”</p>
<p id="indent">“And whose fault do you reckon that is, might I ask?” someone says from behind me. Renet appears, arms crossed. “Word on the floor is, someone messed with one of Slaphand’s pieces of equipment and sabotaged his operation, forcing us to work overtime to rebuild the machine.”</p>
<p id="indent">I can feel adrenaline pumping into my system in real-time. My heart beats a little bit harder, and my eyes widen.</p>
<p id="indent">Am I really the reason there’s ten-hour workdays right now?</p>
<p id="indent">“I have absolutely no idea what you’re talking about,” I say, looking directly into his eyes, although I’m ninety-nine percent sure my goose is cooked. “I’m here for the same reasons as everyone else: I had to take out some stupid-large loan, only to find out I wouldn’t be able to pay it.”</p>
<p id="indent">“For some reason, that’s hard to believe,” the main quarry man says, getting even closer. If I wanted to, I could strike out and break his nose without giving him a chance to think. As tempting as it is, I’m forced to pocket the idea, as Arnold makes his glorious return.</p>
<p id="indent">“Everyone get to work, and now,” he half-shouts, surveying the growing group of quarry workers that were accumulating nearby. All eyes were on the heavyset man. There was no need to yell. “I will not hesitate to use force.”</p>
<p id="indent">Frightened or discomforted at the thought of a man as big as him committing any sort of bodily harm, the crowd dispersed, leaving the original quarry worker and the three of us standing in a </p>
<p id="page-end">58</p>`
const ch6p5mobile = `<p id="page-start"> </p>
<p id="no-indent">down to it, there’s no way I’d be able to fend off ten physically fit men, much less run away.</p>
<p id="indent">“I don’t do favors for anyone. Just try to look busy, alright, y’all? The last thing we need is to have our hours extended any more than they are right now.”</p>
<p id="indent">“And whose fault do you reckon that is, might I ask?” someone says from behind me. Renet appears, arms crossed. “Word on the floor is, someone messed with one of Slaphand’s pieces of equipment and sabotaged his operation, forcing us to work overtime to rebuild the machine.”</p>
<p id="indent">I can feel adrenaline pumping into my system in real-time. My heart beats a little bit harder, and my eyes widen.</p>
<p id="indent">Am I really the reason there’s ten-hour workdays right now?</p>
<p id="indent">“I have absolutely no idea what you’re talking about,” I say, looking directly into his eyes, although I’m ninety-nine percent sure my goose is cooked. “I’m here for the same reasons as everyone else: I had to take out some stupid-large loan, only to find out I wouldn’t be able to pay it.”</p>
<p id="indent">“For some reason, that’s hard to believe,” the main quarry man says, getting even closer. If I wanted to, I could strike out and break his nose without giving him a chance to think. As tempting as it is, I’m forced to pocket the idea, as Arnold makes his glorious return.</p>
<p id="indent">“Everyone get to work, and now,” he half-shouts, surveying the growing group of quarry workers that were accumulating nearby. All eyes were on the heavyset man. There was no need to yell. “I will not hesitate to use force.”</p>
<p id="indent">Frightened or discomforted at the thought of a man as big as him committing any sort of bodily harm, the crowd dispersed, leaving the original quarry worker and the three </p>
<p id="page-end">58</p>`
const ch6p6 = `<p id="page-start"> </p>
<p id="no-indent">permanently hostile circle.</p>
<p id="indent">“Word of advice, Luna,” Renet spits, “if you’re gonna try to boss ten adult men around, actually have some authority.”</p>
<p id="indent">“Better than misusing it against a sixty-year-old woman, bud.”</p>
<p id="indent">“Alright, that’s enough,” Arnold says, drawing our complete attention with his commanding aura. “There’s no reason to be fighting over stupid little things like this. Let the other person handle things how they want, and if you have a problem with it, talk about it in a civil manner.”</p>
<p id="indent">“How about we talk about why she’s even here in the first place, Arnold?” Renet once again crosses his arms and gives me an angry glare. “Because of her, we’re working extra hours for those damned slavers. And now she’s supposed to be on our level?”</p>
<p id="indent">“We don’t know if the rumors are true,” Arnold says, visibly unsure if he believes himself. “And even if they are, I have also heard we will be back on normal hours by week’s end.”</p>
<p id="indent">“We’d better be, or else, kid.” Renet walks away, steaming. Arnold merely sighs, then walks off in a different direction towards an unruly horde of people in a separate quarry section. I’m inevitably left alone, other than the dismissive or hateful side-eyes of those I pass. </p>
<p id="indent">I walk the length of the quarries for another fifteen minutes before deciding I need to go visit Mary again. She hasn’t moved very much since I left, but there’s a noticeable sheen to the newly waxed areas of the gargantuan ship.</p>
<p id="indent">“Have I mentioned how much I hate this job?” I ask her rhetorically, leaning against an unwaxed section of metal hull. </p>
<p id="indent">“You may have brought it up in passing,” she replies. “What </p>
<p id="page-end">59</p>`
const ch6p6mobile = `<p id="page-start"> </p>
<p id="no-indent">of us standing in a permanently hostile circle.</p>
<p id="indent">“Word of advice, Luna,” Renet spits, “if you’re gonna try to boss ten adult men around, actually have some authority.”</p>
<p id="indent">“Better than misusing it against a sixty-year-old woman, bud.”</p>
<p id="indent">“Alright, that’s enough,” Arnold says, drawing our complete attention with his commanding aura. “There’s no reason to be fighting over stupid little things like this. Let the other person handle things how they want, and if you have a problem with it, talk about it in a civil manner.”</p>
<p id="indent">“How about we talk about why she’s even here in the first place, Arnold?” Renet once again crosses his arms and gives me an angry glare. “Because of her, we’re working extra hours for those damned slavers. And now she’s supposed to be on our level?”</p>
<p id="indent">“We don’t know if the rumors are true,” Arnold says, visibly unsure if he believes himself. “And even if they are, I have also heard we will be back on normal hours by week’s end.”</p>
<p id="indent">“We’d better be, or else, kid.” Renet walks away, steaming. Arnold merely sighs, then walks off in a different direction towards an unruly horde of people in a separate quarry section. I’m inevitably left alone, other than the dismissive or hateful side-eyes of those I pass. </p>
<p id="indent">I walk the length of the quarries for another fifteen minutes before deciding I need to go visit Mary again. She hasn’t moved very much since I left, but there’s a noticeable sheen to the newly waxed areas of the gargantuan ship.</p>
<p id="indent">“Have I mentioned how much I hate this job?” I ask her rhetorically, leaning against an unwaxed section of metal hull. </p>
<p id="indent">“You may have brought it up in passing,” she replies. </p>
<p id="page-end">59</p>`
const ch6p7 = `<p id="page-start"> </p>
<p id="no-indent">reason do you have this time?”</p>
<p id="indent">“Well, not only are people upset that I’m trying to do my job, but there’s also a rumor flying around that I’m the reason we’re doing a ten-hour workday.”</p>
<p id="indent">“I must admit, it is suspicious that the day you arrived is the day that we were moved up to ten hours a day. At the same time, I cannot imagine that whatever you did would warrant this much panic from those in charge.”</p>
<p id="indent">“You think there’s panic at the top?”</p>
<p id="indent">“Oh, no doubt. The last time we had increased hours was because of a part malfunction that wiped a brand-new airship. I shudder thinking about what could have caused it this time.”</p>
<p id="indent">I guess that confirms the rumors, then. I truly am the reason people are suffering more. Not that I could’ve known about any of this. I didn’t even know what I was getting into when Freckles found the device.</p>
<p id="indent">My poor Freckles…</p>
<p id="indent">I have to find a way off of this island. My cat is stuck in a cage all because I couldn’t control myself.</p>
<p id="indent">“I just don’t think it’s fair, Mary. I hate having to boss people around like this.”</p>
<p id="indent">“What job did you work before being sent here?”</p>
<p id="indent">“I worked at a scrapyard, where I mostly kept to myself. I would be given orders, sure, but my day was mine as long as I was doing what I needed to. I never had to be the boss, and I never felt like I was under this much pressure.”</p>
<p id="indent">“I understand what you are feeling, Luna.”</p>
<p id="indent">“How can you possibly understand what it’s like to be forced to </p>
<p id="page-end">60</p>`
const ch6p7mobile =`<p id="page-start"> </p>
<p id="no-indent">“What reason do you have this time?”</p>
<p id="indent">“Well, not only are people upset that I’m trying to do my job, but there’s also a rumor flying around that I’m the reason we’re doing a ten-hour workday.”</p>
<p id="indent">“I must admit, it is suspicious that the day you arrived is the day that we were moved up to ten hours a day. At the same time, I cannot imagine that whatever you did would warrant this much panic from those in charge.”</p>
<p id="indent">“You think there’s panic at the top?”</p>
<p id="indent">“Oh, no doubt. The last time we had increased hours was because of a part malfunction that wiped a brand-new airship. I shudder thinking about what could have caused it this time.”</p>
<p id="indent">I guess that confirms the rumors, then. I truly am the reason people are suffering more. Not that I could’ve known about any of this. I didn’t even know what I was getting into when Freckles found the device.</p>
<p id="indent">My poor Freckles…</p>
<p id="indent">I have to find a way off of this island. My cat is stuck in a cage all because I couldn’t control myself.</p>
<p id="indent">“I just don’t think it’s fair, Mary. I hate having to boss people around like this.”</p>
<p id="indent">“What job did you work before being sent here?”</p>
<p id="indent">“I worked at a scrapyard, where I mostly kept to myself. I would be given orders, sure, but my day was mine as long as I was doing what I needed to. I never had to be the boss, and I never felt like I was under this much pressure.”</p>
<p id="indent">“I understand what you are feeling, Luna.”</p>
<p id="indent">“How can you possibly understand what it’s like to be </p>
<p id="page-end">60</p>`
const ch6p8 = `<p id="page-start"> </p>
<p id="no-indent">tell slaves what to do, Mary? This is like, next-level torture.”</p>
<p id="indent">“I was a preschool teacher for quite some time. While that is an awful comparison to our current situation, there are similarities in the way that sometimes, we have to be the bad guy, Luna. Like those we are trying to tell what to do, we cannot always do what we want. If the kindergarteners want cookies, but you have explicit orders not to give them cookies, who here is the bad guy?”</p>
<p id="indent">“The teacher who made the rule?”</p>
<p id="indent">“Precisely. It is something the kindergarteners do not recognize in the moment, but it is true, nonetheless.”</p>
<p id="indent">“So, what I’m hearing is, we need to take this out on the guys up top who control everything.”</p>
<p id="indent">“Not quite the parable I was after, but if it helps you realize you are not at fault, then sure.”</p>
<p id="indent">“Thanks, Mary. You’re the best.”</p>
<p id="indent">I rush off to a more secluded area of the island, invigorated by a new idea. Today, I’ll come up with a plan to scout the island. Tomorrow, I’ll find out where my best friend is. And then, I’m going to escape this hell.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">61</p>`
const ch6p8mobile = `<p id="page-start"> </p>
<p id="no-indent">forced to tell slaves what to do, Mary? This is like, next-level torture.”</p>
<p id="indent">“I was a preschool teacher for quite some time. While that is an awful comparison to our current situation, there are similarities in the way that sometimes, we have to be the bad guy, Luna. Like those we are trying to tell what to do, we cannot always do what we want. If the kindergarteners want cookies, but you have explicit orders not to give them cookies, who here is the bad guy?”</p>
<p id="indent">“The teacher who made the rule?”</p>
<p id="indent">“Precisely. It is something the kindergarteners do not recognize in the moment, but it is true, nonetheless.”</p>
<p id="indent">“So, what I’m hearing is, we need to take this out on the guys up top who control everything.”</p>
<p id="indent">“Not quite the parable I was after, but if it helps you realize you are not at fault, then sure.”</p>
<p id="indent">“Thanks, Mary. You’re the best.”</p>
<p id="indent">I rush off to a more secluded area of the island, invigorated by a new idea. Today, I’ll come up with a plan to scout the island. Tomorrow, I’ll find out where my best friend is. And then, I’m going to escape this hell.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">61</p>`
const ch6p9 = ``
const ch6p9mobile = ``
const ch6p10 = ``
const ch6p10mobile = ``
const ch6p11 = ``
const ch6p11mobile = ``
const ch6p12 = ``
const ch6p12mobile = ``
const ch6p13 = ``
const ch6p13mobile = ``
const ch6p14 = ``
const ch6p14mobile = ``
const ch6p15 = ``
const ch6p15mobile = ``
const ch6p16 = ``
const ch6p16mobile = ``
const ch6p17 = ``
const ch6p17mobile = ``
const ch6p18 = ``
const ch6p18mobile = ``
const ch6 = [ch6p1, ch6p2, ch6p3, ch6p4, ch6p5, ch6p6, ch6p7, ch6p8, ch6p9, ch6p10, ch6p11, ch6p12, ch6p13, ch6p14, ch6p15, ch6p16, ch6p17, ch6p18]
const ch6mobile = [ch6p1mobile, ch6p2mobile, ch6p3mobile, ch6p4mobile, ch6p5mobile, ch6p6mobile, ch6p7mobile, ch6p8mobile, ch6p9mobile, ch6p10mobile, ch6p11mobile, ch6p12mobile, ch6p13mobile, ch6p14mobile, ch6p15mobile, ch6p16mobile, ch6p17mobile, ch6p18mobile]

const ch7p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 7</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">I wake up to an uncomfortably loud buzzing sound reverberating through the building. My whole body feels achy and groggy from the physical exertion of the past couple of days. Surely it can’t be six o’clock already, right?</p>
<p id="indent">The sound of rustling in the room tells me otherwise. </p>
<p id="indent">There goes my naïve hope that this was all a twisted nightmare. Night three without Freckles, and I’m in the denial stage. I need to get out of here–and fast.</p>
<p id="indent">Is he even on the island with me, or did he get taken off somewhere else? I guess I should find that out first.</p>
<p id="indent">“Good to see you are up on time today, Luna,” Mary says, </p>
<p id="page-end">62</p>`
const ch7p1mobile = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 7</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">I wake up to an uncomfortably loud buzzing sound reverberating through the building. My whole body feels achy and groggy from the physical exertion of the past couple of days. Surely it can’t be six o’clock already, right?</p>
<p id="indent">The sound of rustling in the room tells me otherwise. </p>
<p id="indent">There goes my naïve hope that this was all a twisted nightmare. Night three without Freckles, and I’m in the denial stage. I need to get out of here–and fast.</p>
<p id="indent">Is he even on the island with me, or did he get taken off somewhere else? I guess I should find that out first.</p>
<p id="indent">“Good to see you are up on time today, Luna,” Mary </p>
<p id="page-end">62</p>`
const ch7p2 = `<p id="page-start"> </p>
<p id="no-indent">holding two bowls in her hands. “I managed to get us some breakfast before they ran out this morning.”</p>
<p id="indent">“You’re the best, Mary.” As unappetizing as plain oatmeal normally was, it was food, and right now, that’s all I needed.</p>
<p id="indent">Nothing interesting happened after lunch yesterday, other than a bit more patrolling and some yelling between quarries. Quarry three still never got their machinery up and running, which made me more than a little upset at the time, but I realized during dinner that I honestly don’t care. I’m not gonna be Slaphand’s pet Overseer for a literal slave operation that I am actively being forced to participate in.</p>
<p id="indent">I never saw him again yesterday, either. If I had to take an educated guess, he was hiding away in the Administration building the whole time. After dinner, I took a shower in a very gross public bathroom and went to sleep on the hard floor. At least the bathrooms were gendered off.</p>
<p id="indent">And, of course, I dreamt of Freckles. If I’d known how big of an impact that cat would have on me, I would’ve treated him so much better. Maybe I would’ve even listened to what he had to say. He was scarily good at keeping me in line and making sure we didn’t get into trouble. Something tells me I’ll need his wisdom here, too.</p>
<p id="indent">Mary and I hastily finish our oatmeal, put the bowls away, and get ready for another fun day of unpaid labor and authoritarian control over our lives. Strange that when I put it that way, it doesn’t sound fun.</p>
<p id="indent">“What’s on the agenda for you today, Mary?”</p>
<p id="indent">“A little of the same thing as always, I fear.” She lets out a sigh.</p>
<p id="indent">“Well, I understand you’re a busy girl, but I’ve got a different idea for you, if you’d like.”</p>
<p id="indent">“Oh? What are you going to offer?”</p>
<p id="page-end">63</p>`
const ch7p2mobile = `<p id="page-start"> </p>
<p id="no-indent">says, holding two bowls in her hands. “I managed to get us some breakfast before they ran out this morning.”</p>
<p id="indent">“You’re the best, Mary.” As unappetizing as plain oatmeal normally was, it was food, and right now, that’s all I needed.</p>
<p id="indent">Nothing interesting happened after lunch yesterday, other than a bit more patrolling and some yelling between quarries. Quarry three still never got their machinery up and running, which made me more than a little upset at the time, but I realized during dinner that I honestly don’t care. I’m not gonna be Slaphand’s pet Overseer for a literal slave operation that I am actively being forced to participate in.</p>
<p id="indent">I never saw him again yesterday, either. If I had to take an educated guess, he was hiding away in the Administration building the whole time. After dinner, I took a shower in a very gross public bathroom and went to sleep on the hard floor. At least the bathrooms were gendered off.</p>
<p id="indent">And, of course, I dreamt of Freckles. If I’d known how big of an impact that cat would have on me, I would’ve treated him so much better. Maybe I would’ve even listened to what he had to say. He was scarily good at keeping me in line and making sure we didn’t get into trouble. Something tells me I’ll need his wisdom here, too.</p>
<p id="indent">Mary and I hastily finish our oatmeal, put the bowls away, and get ready for another fun day of unpaid labor and authoritarian control over our lives. Strange that when I put it that way, it doesn’t sound fun.</p>
<p id="indent">“What’s on the agenda for you today, Mary?”</p>
<p id="indent">“A little of the same thing as always, I fear.” She lets out a sigh.</p>
<p id="indent">“Well, I understand you’re a busy girl, but I’ve got a different idea for you, if you’d like.”</p>
<p id="indent">“Oh? What are you going to offer?”</p>
<p id="page-end">63</p>`
const ch7p3 = `<p id="page-start"> </p>
<p id="indent">“How does helping me come up with an escape plan sound?”</p>
<p id="indent">“You still have those ideas in your mind, Luna? It is much too dangerous to be staging an escape, never mind the fact that I am an old woman who could not do it if she tried.”</p>
<p id="indent">“Fifty-eight’s not that old.” I give her the same smile she gave me the other day. “Besides, you know you wanna. All I’m doing today is gathering some info. I have to find out where Freckles is, figure out the best way off the island, and know when to do it. It’ll be easy.”</p>
<p id="indent">“Is ‘easy’ really the right word for this situation?”</p>
<p id="indent">“Oh, come on, Mary. This might be our one shot at leaving.”</p>
<p id="indent">Mary tosses her head back and forth, visually deciding whether or not my idea is worth the risks involved. Realistically, I could try to do it without her, but I want to get her out of here, too. Did I get attached too quickly?</p>
<p id="indent">“Alright, Luna. You win. But only because of your enthusiasm. Tell me a little about your plan for today.”</p>
<p id="indent">“I knew I could count on you, Mary. So, as you well know, one of the quarries has broken down machinery, and I had to grab a mechanic to repair it. Their workshop is built into the Administration building, and the hangar door stays open all day.</p>
<p id="indent">“We have easy access to the rest of the building through the shop, as well as any makeshift weapons we need, with wrenches and screwdrivers and other stuff. The two of us will sneak inside of the building, do some recon, find out if Freckles is being held there, and gather as much intel as we can before tomorrow’s escape.”</p>
<p id="indent">“You want to be gone by <em>tomorrow?”</em></p>
<p id="indent">“The sooner, the better, I’d say. We should get moving right</p>
<p id="page-end">64</p>`
const ch7p3mobile = `<p id="page-start"> </p>
<p id="indent">“How does helping me come up with an escape plan sound?”</p>
<p id="indent">“You still have those ideas in your mind, Luna? It is much too dangerous to be staging an escape, never mind the fact that I am an old woman who could not do it if she tried.”</p>
<p id="indent">“Fifty-eight’s not that old.” I give her the same smile she gave me the other day. “Besides, you know you wanna. All I’m doing today is gathering some info. I have to find out where Freckles is, figure out the best way off the island, and know when to do it. It’ll be easy.”</p>
<p id="indent">“Is ‘easy’ really the right word for this situation?”</p>
<p id="indent">“Oh, come on, Mary. This might be our one shot at leaving.”</p>
<p id="indent">Mary tosses her head back and forth, visually deciding whether or not my idea is worth the risks involved. Realistically, I could try to do it without her, but I want to get her out of here, too. Did I get attached too quickly?</p>
<p id="indent">“Alright, Luna. You win. But only because of your enthusiasm. Tell me a little about your plan for today.”</p>
<p id="indent">“I knew I could count on you, Mary. So, as you well know, one of the quarries has broken down machinery, and I had to grab a mechanic to repair it. Their workshop is built into the Administration building, and the hangar door stays open all day.</p>
<p id="indent">“We have easy access to the rest of the building through the shop, as well as any makeshift weapons we need, with wrenches and screwdrivers and other stuff. The two of us will sneak inside of the building, do some recon, find out if Freckles is being held there, and gather as much intel as we can before tomorrow’s escape.”</p>
<p id="indent">“You want to be gone by <em>tomorrow?”</em></p>
<p id="indent">“The sooner, the better, I’d say. We should get moving right away.”</p>
<p id="page-end">64</p>`
const ch7p4 = `<p id="page-start"> </p>
<p id="no-indent">away.”</p>
<p id="indent">“Am I going to regret agreeing to this?”</p>
<p id="indent">Probably.</p>
<p id="indent">“Probably not.”</p>
<p id="indent">Rather than go back to the shipyard for the day, Mary and I make our way to the workshop as inconspicuously as possible. Inside, two of the three mechanics from yesterday were standing around, messing with a few of their tools.</p>
<p id="indent">“Can we help you two?” one of them asks, spotting us in the open garage doorway.</p>
<p id="indent">“Yeah,” I start. “I just got back from a talk with boss-man. He’s not very happy right now.”</p>
<p id="indent">“Why’s that?”</p>
<p id="indent">“Well, I came to you the other day asking for repairs to quarry three’s machines, but you haven’t done anything. He says he wants them fixed by lunch, or it’s you in the blue jumpsuits.”</p>
<p id="indent">“Why don’t you mind your own business, kid?” the other asks, upset. “We didn’t do nothing to you.”</p>
<p id="indent">“I am minding my business, actually. In fact, I could’ve told him about your disgusting little affair with Lana, but I was minding my business pretty hard. If you want to keep that a secret, I suggest you get moving.”</p>
<p id="indent">The two of them sheepishly hurried to get into a four-wheeler and drove out of the shop, leaving me and Mary unattended.</p>
<p id="indent">“That was a scary amount of manipulation,” she comments. “How did you learn to do that?”</p>
<p id="indent">“I’ve had quite a bit of practice. Now’s our chance to do a little looting and sneak inside.”</p>
<p id="page-end">65</p>`
const ch7p4mobile = `<p id="page-start"> </p>
<p id="indent">“Am I going to regret agreeing to this?”</p>
<p id="indent">Probably.</p>
<p id="indent">“Probably not.”</p>
<p id="indent">Rather than go back to the shipyard for the day, Mary and I make our way to the workshop as inconspicuously as possible. Inside, two of the three mechanics from yesterday were standing around, messing with a few of their tools.</p>
<p id="indent">“Can we help you two?” one of them asks, spotting us in the open garage doorway.</p>
<p id="indent">“Yeah,” I start. “I just got back from a talk with boss-man. He’s not very happy right now.”</p>
<p id="indent">“Why’s that?”</p>
<p id="indent">“Well, I came to you the other day asking for repairs to quarry three’s machines, but you haven’t done anything. He says he wants them fixed by lunch, or it’s you in the blue jumpsuits.”</p>
<p id="indent">“Why don’t you mind your own business, kid?” the other asks, upset. “We didn’t do nothing to you.”</p>
<p id="indent">“I am minding my business, actually. In fact, I could’ve told him about your disgusting little affair with Lana, but I was minding my business pretty hard. If you want to keep that a secret, I suggest you get moving.”</p>
<p id="indent">The two of them sheepishly hurried to get into a four-wheeler and drove out of the shop, leaving me and Mary unattended.</p>
<p id="indent">“That was a scary amount of manipulation,” she comments. “How did you learn to do that?”</p>
<p id="indent">“I’ve had quite a bit of practice. Now’s our chance to do a little looting and sneak inside.”</p>
<p id="page-end">65</p>`
const ch7p5 = `<p id="page-start"> </p>
<p id="indent">I grab a heavy-looking wrench from a workbench and notice a group of three walkie-talkie chargers. Two are empty, but the third is sitting and soaking in some battery life.</p>
<p id="indent">Where’s the third mechanic today? This better not throw a wrench in my plans.</p>
<p id="indent">Even though I have no clue what the radio channels are, I snag the walkie-talkie and shove it in one of the jumpsuit’s spacey pockets. Maybe it’ll give us the edge up on when the mechanics are done.</p>
<p id="indent">“Are you grabbing anything, Mary?”</p>
<p id="indent">“I am not strong enough to carry anything like that wrench, and I do not think I could bring myself to use it as a weapon.”</p>
<p id="indent">“Alright then, we’ll get moving. Remember, steal or memorize anything we can use as intel. We can’t afford to be caught off guard.”</p>
<p id="indent">I brace myself to open the door into the rest of the Administration building, and turn the handle. The door slowly swings open, revealing a clean lounge with a coffee machine, table, fridge, and oven. If it weren’t for all the kitchen features, this could be a pristine hospital waiting room.</p>
<p id="indent">“I don’t know why I’m surprised they’re living in much better conditions than we are.”</p>
<p id="indent">“They love to flaunt it in our faces. Keeps us longing for our homes back in Carmsborough.”</p>
<p id="indent">“As if I needed more reasons to hate these guys.”</p>
<p id="indent">We sneak through the lounge, avoiding a large window taking up most of one of the walls. The doorway leads out into a long hallway, with a claustrophobic number of doors. </p>
<p id="indent">There’s no way we can safely enter all of them while searching for Freckles and Slaphand. I pick a door more towards our end of </p>
<p id="page-end">66</p>`
const ch7p5mobile = `<p id="page-start"> </p>
<p id="indent">I grab a heavy-looking wrench from a workbench and notice a group of three walkie-talkie chargers. Two are empty, but the third is sitting and soaking in some battery life.</p>
<p id="indent">Where’s the third mechanic today? This better not throw a wrench in my plans.</p>
<p id="indent">Even though I have no clue what the radio channels are, I snag the walkie-talkie and shove it in one of the jumpsuit’s spacey pockets. Maybe it’ll give us the edge up on when the mechanics are done.</p>
<p id="indent">“Are you grabbing anything, Mary?”</p>
<p id="indent">“I am not strong enough to carry anything like that wrench, and I do not think I could bring myself to use it as a weapon.”</p>
<p id="indent">“Alright then, we’ll get moving. Remember, steal or memorize anything we can use as intel. We can’t afford to be caught off guard.”</p>
<p id="indent">I brace myself to open the door into the rest of the Administration building, and turn the handle. The door slowly swings open, revealing a clean lounge with a coffee machine, table, fridge, and oven. If it weren’t for all the kitchen features, this could be a pristine hospital waiting room.</p>
<p id="indent">“I don’t know why I’m surprised they’re living in much better conditions than we are.”</p>
<p id="indent">“They love to flaunt it in our faces. Keeps us longing for our homes back in Carmsborough.”</p>
<p id="indent">“As if I needed more reasons to hate these guys.”</p>
<p id="indent">We sneak through the lounge, avoiding a large window taking up most of one of the walls. The doorway leads out into a long hallway, with a claustrophobic number of doors. </p>
<p id="indent">There’s no way we can safely enter all of them while searching for Freckles and Slaphand. I pick a door more </p>
<p id="page-end">66</p>`
const ch7p6 = `<p id="page-start"> </p>
<p id="no-indent">the hall and open it, once again preparing for the worst. Mary peeks around the corner, also tense, but relaxes a little after assessing the situation.</p>
<p id="indent">This room is also free of people, but has filing cabinets lining all four walls. The only open space is in the corners where you wouldn’t be able to open one. As tempting as it is to start looking inside, we don’t have the time to open them up willy-nilly. We don’t even know if they hold anything remotely interesting.</p>
<p id="indent">The next room is just as person-less, but has a table in the center with papers strewn across the top. I steal a peek at a couple. They all mention Orion and the Clockwork in the header of the page.</p>
<p id="indent">“This is weird. There’s like a hundred diagrams of the inside of the Clockwork, and some scarily detailed information on Orion. Do you think they’re going to attack them?”</p>
<p id="indent">“Most likely. If they discover this island, there will be no stopping them from destroying all of Slaphand’s hard work.”</p>
<p id="indent">“Wait, so Slaphand is the one in charge?”</p>
<p id="indent">“He works for another man, but he is in charge of the entire island. I do not know who his boss is.”</p>
<p id="indent">“His name is Bijabers. He’s Australian and wears some pretty exotic clothes. I met him right before he sent me here. I genuinely think he’s a psychopath.”</p>
<p id="indent">“You have to be without a soul to hold people as slaves like this. He is more than a psychopath. He is the devil.”</p>
<p id="indent">“Yeah, that fits, too. Way to be dramatic, Mary.”</p>
<p id="indent">Each diagram of the Clockwork is different. Do they not know what the inside looks like?</p>
<p id="indent">They’re not tearing Freckles apart to find out, are they?</p>
<p id="page-end">67</p>`
const ch7p6mobile = `<p id="page-start"> </p>
<p id="no-indent">towards our end of the hall and open it, once again preparing for the worst. Mary peeks around the corner, also tense, but relaxes a little after assessing the situation.</p>
<p id="indent">This room is also free of people, but has filing cabinets lining all four walls. The only open space is in the corners where you wouldn’t be able to open one. As tempting as it is to start looking inside, we don’t have the time to open them up willy-nilly. We don’t even know if they hold anything remotely interesting.</p>
<p id="indent">The next room is just as person-less, but has a table in the center with papers strewn across the top. I steal a peek at a couple. They all mention Orion and the Clockwork in the header of the page.</p>
<p id="indent">“This is weird. There’s like a hundred diagrams of the inside of the Clockwork, and some scarily detailed information on Orion. Do you think they’re going to attack them?”</p>
<p id="indent">“Most likely. If they discover this island, there will be no stopping them from destroying all of Slaphand’s hard work.”</p>
<p id="indent">“Wait, so Slaphand is the one in charge?”</p>
<p id="indent">“He works for another man, but he is in charge of the entire island. I do not know who his boss is.”</p>
<p id="indent">“His name is Bijabers. He’s Australian and wears some pretty exotic clothes. I met him right before he sent me here. I genuinely think he’s a psychopath.”</p>
<p id="indent">“You have to be without a soul to hold people as slaves like this. He is more than a psychopath. He is the devil.”</p>
<p id="indent">“Yeah, that fits, too. Way to be dramatic, Mary.”</p>
<p id="indent">Each diagram of the Clockwork is different. Do they not know what the inside looks like?</p>
<p id="indent">They’re not tearing Freckles apart to find out, are they?</p>
<p id="page-end">67</p>`
const ch7p7 = `<p id="page-start"> </p>
<p id="indent">“I think we need to hurry up and get Freckles,” I say, showing her the diagrams. She nods solemnly.</p>
<p id="indent">We work our way down a couple more rooms, all empty, until we reach one with a machine almost exactly like the one on the cloudship I hijacked. This one is missing a few parts, and some of the outer shelling, but it’s clearly the same design.</p>
<p id="indent">It seems like Bijabers is moving ahead of schedule.</p>
<p id="indent">“We have to break this,” I say, pulling out my wrench.</p>
<p id="indent">“What is it?” Justified concern is plastered onto Mary’s face.</p>
<p id="indent">“This thing has the power to blow a hole through an entire building. I don’t know what they’re going to use it for, but I doubt they have good intentions.”</p>
<p id="indent">“Maybe they are using it to destroy the <em>Überall.”</em></p>
<p id="indent">Now it’s my turn to be confused. “What’s the <em>Überall?”</em></p>
<p id="indent">“I am not sure. That is what this wall of paper says.”</p>
<p id="indent">She points to a corkboard absolutely smothered by documents. In big bold words, the phrase “PLASMARIZER: TO DESTROY THE ÜBERALL” sits directly in the middle.</p>
<p id="indent">“Maybe the <em>Überall</em> is a ship or weapon or something. Either way, the enemy of my enemy is my friend, and I don’t think we want them using this weapon.”</p>
<p id="indent">I lift the wrench in my hand above my head, ready to bring it down on the machine, when I hear a pair of footsteps behind me. </p>
<p id="indent">I turn to see two men in uniforms close the door behind them. </p>
<p id="indent">Busted.</p>
<p id="indent">“You have two seconds to put that wrench down, or we’ll break your arm and make you do it ourselves,” the one on my left says.</p>
<p id="page-end">68</p>`
const ch7p7mobile = `<p id="page-start"> </p>
<p id="indent">“I think we need to hurry up and get Freckles,” I say, showing her the diagrams. She nods solemnly.</p>
<p id="indent">We work our way down a couple more rooms, all empty, until we reach one with a machine almost exactly like the one on the cloudship I hijacked. This one is missing a few parts, and some of the outer shelling, but it’s clearly the same design.</p>
<p id="indent">It seems like Bijabers is moving ahead of schedule.</p>
<p id="indent">“We have to break this,” I say, pulling out my wrench.</p>
<p id="indent">“What is it?” Justified concern is plastered onto Mary’s face.</p>
<p id="indent">“This thing has the power to blow a hole through an entire building. I don’t know what they’re going to use it for, but I doubt they have good intentions.”</p>
<p id="indent">“Maybe they are using it to destroy the <em>Überall.”</em></p>
<p id="indent">Now it’s my turn to be confused. “What’s the <em>Überall?”</em></p>
<p id="indent">“I am not sure. That is what this wall of paper says.”</p>
<p id="indent">She points to a corkboard absolutely smothered by documents. In big bold words, the phrase “PLASMARIZER: TO DESTROY THE ÜBERALL” sits directly in the middle.</p>
<p id="indent">“Maybe the <em>Überall</em> is a ship or weapon or something. Either way, the enemy of my enemy is my friend, and I don’t think we want them using this weapon.”</p>
<p id="indent">I lift the wrench in my hand above my head, ready to bring it down on the machine, when I hear a pair of footsteps behind me. </p>
<p id="indent">I turn to see two men in uniforms close the door behind them. </p>
<p id="indent">Busted.</p>
<p id="indent">“You have two seconds to put that wrench down, or we’ll break your arm and make you do it ourselves,” the one on my left says.</p>
<p id="page-end">68</p>`
const ch7p8 = `<p id="page-start"> </p>
<p id="indent">“If you insist.”</p>
<p id="indent">I throw the wrench as hard as I can at him, which smashes into his chest with a crack. While he doubles over to recover, I run up to the second guy and plow into his stomach. Out of the corner of my eye, I watch Mary pick the wrench up to get it away from my first victim.</p>
<p id="indent">I swing around the man I barreled into and wrap my arm around his neck, pressing my back against the wall. All I need is for him to go unconscious so that I can take the first guy out just as quickly. He swings back at me with his fist, but can’t reach far enough to do any actual damage.</p>
<p id="indent">The first guy, probably sporting a cracked rib or two, stands back up and charges at the two of us. I launch my current victim at him, and the two collide loudly before toppling to the ground. I reach back to get the wrench from Mary, never letting my eyes leave their jumbled bodies on the floor, but neither get back up.</p>
<p id="indent">“Really? That’s all it took to knock two grown men out?”</p>
<p id="indent">“You did some serious damage to the first one with that throw,” Mary says, wincing from either the sound, the thought of the pain, or both. “I did not enjoy that.”</p>
<p id="indent">“I’m sure he didn’t, either. It’s okay, though. These are the bad guys.”</p>
<p id="indent">“These men are not in charge of anything.”</p>
<p id="indent">“Yeah, but they’re also making a conscious decision to work for the men who do, and to me, there’s no difference.”</p>
<p id="indent">“Would you not also work for the bad men if they threatened those you love?”</p>
<p id="indent">“No, I wouldn’t. I’d do what I’m doing right now, including destroying this machine.”</p>
<p id="page-end">69</p>`
const ch7p8mobile = `<p id="page-start"> </p>
<p id="indent">“If you insist.”</p>
<p id="indent">I throw the wrench as hard as I can at him, which smashes into his chest with a crack. While he doubles over to recover, I run up to the second guy and plow into his stomach. Out of the corner of my eye, I watch Mary pick the wrench up to get it away from my first victim.</p>
<p id="indent">I swing around the man I barreled into and wrap my arm around his neck, pressing my back against the wall. All I need is for him to go unconscious so that I can take the first guy out just as quickly. He swings back at me with his fist, but can’t reach far enough to do any actual damage.</p>
<p id="indent">The first guy, probably sporting a cracked rib or two, stands back up and charges at the two of us. I launch my current victim at him, and the two collide loudly before toppling to the ground. I reach back to get the wrench from Mary, never letting my eyes leave their jumbled bodies on the floor, but neither get back up.</p>
<p id="indent">“Really? That’s all it took to knock two grown men out?”</p>
<p id="indent">“You did some serious damage to the first one with that throw,” Mary says, wincing from either the sound, the thought of the pain, or both. “I did not enjoy that.”</p>
<p id="indent">“I’m sure he didn’t, either. It’s okay, though. These are the bad guys.”</p>
<p id="indent">“These men are not in charge of anything.”</p>
<p id="indent">“Yeah, but they’re also making a conscious decision to work for the men who do, and to me, there’s no difference.”</p>
<p id="indent">“Would you not also work for the bad men if they threatened those you love?”</p>
<p id="indent">“No, I wouldn’t. I’d do what I’m doing right now, including destroying this machine.”</p>
<p id="page-end">69</p>`
const ch7p9 = `<p id="page-start"> </p>
<p id="indent">It’s a long process, but I eventually end up mangling and wrecking the innerworkings of the laser machine. The whole time, Mary switches between watching under the door for any shadows, watching my two victims to make sure they stay down, and reading some of the information on the board. Considering this is just a practice run for our actual escape, we’re doing a pretty good job. A power duo for sure.</p>
<p id="indent">No more powerful than Freckles and I together, but still pretty powerful.</p>
<p id="indent">“That should do it. Now, let’s go find my cat.”</p>
<p id="indent">“What do we do with the guards?”</p>
<p id="indent">Oh yeah.</p>
<p id="indent">“You’re not gonna like it, but let’s steal their uniforms. That way, we’ll be less suspicious in a building full of guards. After that, I’ll go hide them in a room somewhere. Maybe the room of filing cabinets, so they’re out of sight for as long as possible.”</p>
<p id="indent">I was right–she didn’t like the idea. Either way, we both strip out of our jumpsuits and into one of the guard uniforms, being careful not to somehow wake one of them up in the process. Not that I couldn’t just as easily knock them back out, but they’re already in for an embarrassing moment when they wake back up. The goal is keeping them out of the equation, not permanently damaging them.</p>
<p id="indent">I drag them into the room of filing cabinets and hide them in the corner spaces where cabinets couldn’t fit. Unless you’re looking right at the spot, it’s difficult to tell they’re there. Then, we hide our old jumpsuits in the now torn-apart machine, and walk out of the room a little more confident than we walked in.</p>
<p id="indent">“Lead the way,” Mary says, gesturing with her hand. We continue </p>
<p id="page-end">70</p>`
const ch7p9mobile = `<p id="page-start"> </p>
<p id="indent">It’s a long process, but I eventually end up mangling and wrecking the innerworkings of the laser machine. The whole time, Mary switches between watching under the door for any shadows, watching my two victims to make sure they stay down, and reading some of the information on the board. Considering this is just a practice run for our actual escape, we’re doing a pretty good job. A power duo for sure.</p>
<p id="indent">No more powerful than Freckles and I together, but still pretty powerful.</p>
<p id="indent">“That should do it. Now, let’s go find my cat.”</p>
<p id="indent">“What do we do with the guards?”</p>
<p id="indent">Oh yeah.</p>
<p id="indent">“You’re not gonna like it, but let’s steal their uniforms. That way, we’ll be less suspicious in a building full of guards. After that, I’ll go hide them in a room somewhere. Maybe the room of filing cabinets, so they’re out of sight for as long as possible.”</p>
<p id="indent">I was right–she didn’t like the idea. Either way, we both strip out of our jumpsuits and into one of the guard uniforms, being careful not to somehow wake one of them up in the process. Not that I couldn’t just as easily knock them back out, but they’re already in for an embarrassing moment when they wake back up. The goal is keeping them out of the equation, not permanently damaging them.</p>
<p id="indent">I drag them into the room of filing cabinets and hide them in the corner spaces where cabinets couldn’t fit. Unless you’re looking right at the spot, it’s difficult to tell they’re there. Then, we hide our old jumpsuits in the now torn-apart machine, and walk out of the room a little more confident than we walked in.</p>
<p id="indent">“Lead the way,” Mary says, gesturing with her hand. We </p>
<p id="page-end">70</p>`
const ch7p10 = `<p id="page-start"> </p>
<p id="no-indent">going down the hall, peeking through each doorway. Sometimes we get confused faces, but for the most part, the room is either empty or not paying attention.</p>
<p id="indent">With four doors left, including one at the very end of the hall that seems like it could be Slaphand’s office, we move more slowly and cautiously. I’m about to open one, but stop when I hear a voice talking from the inside.</p>
<p id="indent">“Great meeting with you, P-Man. I look forward to your entire report at the end of the week. With any luck, we’ll have a little buffer time until they attack us. That way, we can turn the tide much faster.”</p>
<p id="indent">Slaphand walks out of the room, smiling at whoever else was in the room. Mary and I dive behind the doorway of the neighboring room. It takes all of my willpower to not jump around the corner and start going feral with my stolen wrench.</p>
<p id="indent">His footsteps move towards the room at the end of the hallway. I let myself peer past the corner, and watch the abnormally dimensioned man in a white suit walk to his office, carrying Freckles in a cage.</p>
<p id="indent">His ears perk up as he notices me staring at him.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I know buddy,” I whisper. “Soon.”</p>
<p id="indent">“Quiet, machine,” Slaphand says, shaking the cage a little. Freckles looks annoyed, but is otherwise completely untouched. They haven’t torn him to bits to figure out his innerworkings yet. I’ll make sure they never get the chance.</p>
<p id="indent">“Let’s get out of here,” I say, filled with new hope. “If you’re still willing to help see this all the way through to the end, we can talk more tomorrow at the beginning of the day. I’ve got little bits of a </p>
<p id="page-end">71</p>`
const ch7p10mobile = `<p id="page-start"> </p>
<p id="no-indent">continue going down the hall, peeking through each doorway. Sometimes we get confused faces, but for the most part, the room is either empty or not paying attention.</p>
<p id="indent">With four doors left, including one at the very end of the hall that seems like it could be Slaphand’s office, we move more slowly and cautiously. I’m about to open one, but stop when I hear a voice talking from the inside.</p>
<p id="indent">“Great meeting with you, P-Man. I look forward to your entire report at the end of the week. With any luck, we’ll have a little buffer time until they attack us. That way, we can turn the tide much faster.”</p>
<p id="indent">Slaphand walks out of the room, smiling at whoever else was in the room. Mary and I dive behind the doorway of the neighboring room. It takes all of my willpower to not jump around the corner and start going feral with my stolen wrench.</p>
<p id="indent">His footsteps move towards the room at the end of the hallway. I let myself peer past the corner, and watch the abnormally dimensioned man in a white suit walk to his office, carrying Freckles in a cage.</p>
<p id="indent">His ears perk up as he notices me staring at him.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I know buddy,” I whisper. “Soon.”</p>
<p id="indent">“Quiet, machine,” Slaphand says, shaking the cage a little. Freckles looks annoyed, but is otherwise completely untouched. They haven’t torn him to bits to figure out his innerworkings yet. I’ll make sure they never get the chance.</p>
<p id="indent">“Let’s get out of here,” I say, filled with new hope. “If you’re still willing to help see this all the way through to the end, we can talk more tomorrow at the beginning of the day. </p>
<p id="page-end">71</p>`
const ch7p11 = `<p id="page-start"> </p>
<p id="no-indent">plan together, but I’ll need more time to get everything totally figured out.”</p>
<p id="indent">“We will see. For now, I would much rather be working at the airships to keep them clean.”</p>
<p id="indent">“Good idea.”</p>
<p id="indent">We grab our jumpsuits, switch out clothes, and sneak our way back out of the Administration building, still carrying the wrench, walkie-talkie, and guard suits. The mechanics are nowhere in sight, meaning the excavation machinery must be kicking their butts. </p>
<p id="indent">“Where do you think we could hide this stuff for later?” I ask, gesturing to our stolen goods.</p>
<p id="indent">Mary thinks for a minute and says, “Nobody but me uses the cleaning shed at the shipyard. We could easily hide this for a few days in there, at least.”</p>
<p id="indent">“Well, we’ll only need to hide them for tonight, as long as all goes well tomorrow.”</p>
<p id="indent">The two of us make our way over to the shipyard, do our best to discretely hide our spoils, and part ways for the rest of the morning. </p>
<p id="indent">It’s only been two full days, but seeing Freckles alive and well did a lot for my aching heart. With luck, he’ll be back at my side within the next forty-eight hours.</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">For the rest of the day, Mary and I hardly look at or talk to each other, trying to be as inconspicuous as possible. Even during dinner, we barely make conversation. Her fellow shipyard workers try asking where she was for the first half of the morning, but she simply shrugs.</p>
<p id="indent">She dozes off to sleep long before I even go to curl up in my </p>
<p id="page-end">72</p>`
const ch7p11mobile = `<p id="page-start"> </p>
<p id="no-indent">I’ve got little bits of a plan together, but I’ll need more time to get everything totally figured out.”</p>
<p id="indent">“We will see. For now, I would much rather be working at the airships to keep them clean.”</p>
<p id="indent">“Good idea.”</p>
<p id="indent">We grab our jumpsuits, switch out clothes, and sneak our way back out of the Administration building, still carrying the wrench, walkie-talkie, and guard suits. The mechanics are nowhere in sight, meaning the excavation machinery must be kicking their butts. </p>
<p id="indent">“Where do you think we could hide this stuff for later?” I ask, gesturing to our stolen goods.</p>
<p id="indent">Mary thinks for a minute and says, “Nobody but me uses the cleaning shed at the shipyard. We could easily hide this for a few days in there, at least.”</p>
<p id="indent">“Well, we’ll only need to hide them for tonight, as long as all goes well tomorrow.”</p>
<p id="indent">The two of us make our way over to the shipyard, do our best to discretely hide our spoils, and part ways for the rest of the morning. </p>
<p id="indent">It’s only been two full days, but seeing Freckles alive and well did a lot for my aching heart. With luck, he’ll be back at my side within the next forty-eight hours.</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">For the rest of the day, Mary and I hardly look at or talk to each other, trying to be as inconspicuous as possible. Even during dinner, we barely make conversation. Her fellow shipyard workers try asking where she was for the first half of the morning, but she simply shrugs.</p>
<p id="indent">She dozes off to sleep long before I even go to curl up in </p>
<p id="page-end">72</p>`
const ch7p12 = `<p id="page-start"> </p>
<p id="no-indent">spot, leaving me alone to think about the day’s events. There’s a lot of information to take in, but I have to focus on what really matters: rescuing Freckles and getting us a safe way off the island.</p>
<p id="indent">My eyes wander as I think, first landing at the mirage of bodies surrounding me, all in different stages of winding down for the night, then at the pale walls, discolored from years of neglect, and finally up at the camera in the corner of the room. </p>
<p id="indent">That’s weird. I can’t believe I didn’t notice the camera. Usually, I’m pretty good at spotting details like that.</p>
<p id="indent">Freckles will be wrapped around my shoulders in less than twenty-four hours. I’m shaking with anticipation. My best friend is—</p>
<p id="indent"><em>I didn’t notice the camera.</em> </p>
<p id="indent"><em>Cameras.</em></p>
<p id="indent">If they haven’t seen the footage of the two of us sneaking through the Administration building yet, it won’t be long until they do.</p>
<p id="indent">Our timetable has moved up to tonight.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">73</p>`
const ch7p12mobile = `<p id="page-start"> </p>
<p id="no-indent">my spot, leaving me alone to think about the day’s events. There’s a lot of information to take in, but I have to focus on what really matters: rescuing Freckles and getting us a safe way off the island.</p>
<p id="indent">My eyes wander as I think, first landing at the mirage of bodies surrounding me, all in different stages of winding down for the night, then at the pale walls, discolored from years of neglect, and finally up at the camera in the corner of the room. </p>
<p id="indent">That’s weird. I can’t believe I didn’t notice the camera. Usually, I’m pretty good at spotting details like that.</p>
<p id="indent">Freckles will be wrapped around my shoulders in less than twenty-four hours. I’m shaking with anticipation. My best friend is—</p>
<p id="indent"><em>I didn’t notice the camera.</em> </p>
<p id="indent"><em>Cameras.</em></p>
<p id="indent">If they haven’t seen the footage of the two of us sneaking through the Administration building yet, it won’t be long until they do.</p>
<p id="indent">Our timetable has moved up to tonight.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">73</p>`
const ch7p13 = ``
const ch7p13mobile = ``
const ch7p14 = ``
const ch7p14mobile = ``
const ch7p15 = ``
const ch7p15mobile = ``
const ch7p16 = ``
const ch7p16mobile = ``
const ch7p17 = ``
const ch7p17mobile = ``
const ch7p18 = ``
const ch7p18mobile = ``
const ch7 = [ch7p1, ch7p2, ch7p3, ch7p4, ch7p5, ch7p6, ch7p7, ch7p8, ch7p9, ch7p10, ch7p11, ch7p12, ch7p13, ch7p14, ch7p15, ch7p16, ch7p17, ch7p18]
const ch7mobile = [ch7p1mobile, ch7p2mobile, ch7p3mobile, ch7p4mobile, ch7p5mobile, ch7p6mobile, ch7p7mobile, ch7p8mobile, ch7p9mobile, ch7p10mobile, ch7p11mobile, ch7p12mobile, ch7p13mobile, ch7p14mobile, ch7p15mobile, ch7p16mobile, ch7p17mobile, ch7p18mobile]

const ch8p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 8</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“Mary, wake up,” I whisper, lightly shaking the older woman. “I’ve got some bad news about our little escapade earlier today.”</p>
<p id="indent">“Is that you, Luna?”</p>
<p id="indent">“Come on, Mary. We messed up.”</p>
<p id="indent">My voice is shaking as much as my hands. I don’t want to think about what will happen when they find the video footage.</p>
<p id="indent">“What happened?”</p>
<p id="indent">“There are cameras, Mary. We have to move now, or we’re in serious danger.”</p>
<p id="indent">Mary dramatically gets up, her eyes as wide as mine feel. “I did not think of the cameras.”</p>
<p id="page-end">74</p>`
const ch8p1mobile = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 8</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“Mary, wake up,” I whisper, lightly shaking the older woman. “I’ve got some bad news about our little escapade earlier today.”</p>
<p id="indent">“Is that you, Luna?”</p>
<p id="indent">“Come on, Mary. We messed up.”</p>
<p id="indent">My voice is shaking as much as my hands. I don’t want to think about what will happen when they find the video footage.</p>
<p id="indent">“What happened?”</p>
<p id="indent">“There are cameras, Mary. We have to move now, or we’re in serious danger.”</p>
<p id="indent">Mary dramatically gets up, her eyes as wide as mine feel. “I did not think of the cameras.”</p>
<p id="page-end">74</p>`
const ch8p2 = `<p id="page-start"> </p>
<p id="indent">“Yeah, me neither. We’ve gotta figure out what to do and how to do it. The clock is ticking.”</p>
<p id="indent">“We must find a quieter place to talk about this. Others are still awake and might cause trouble.”</p>
<p id="indent">“So then, let’s go to the shed outside. We’ll grab our equipment and go from there.”</p>
<p id="indent">Sneaking out of the cramped lodging this late at night proves to be as much of a challenge as it sounds. Those that were still awake weren’t interested in the two of us leaving, probably because of my Overseer status, but that didn’t mean guards were going to be okay with it.</p>
<p id="indent">Eventually, though, we manage to snake our way out, and enter into the cold December night. A few clouds blot out the bright moon and threaten to break open. How funny would it be if the first snow of the season was right when we’re about to enact our plan?</p>
<p id="indent">A snowflake falls down and lands on Mary’s shoulder in front of me.</p>
<p id="indent">Apparently not very funny at all.</p>
<p id="indent">“Let’s make this quick. I don’t think we want to freeze to death out here that much.”</p>
<p id="indent">“What is the plan after we get the suits?”</p>
<p id="indent">“We’re going to grab Freckles, steal a ship, and run all the way back to Carmsborough. If we can, I’d prefer a cloudship, because that’s the only thing I’ve ever flown.”</p>
<p id="indent">I leave out the detail that I’ve never <em>learned</em> how to fly in the first place. The last thing I need is her flaking out on me now. Like it or not, either of us are screwed if we decide to stay on the island.</p>
<p id="indent">“That sounds more like a dream than a plan.”</p>
<p id="indent">“Do you have anything that could help, then?”</p>
<p id="page-end">75</p>`
const ch8p2mobile = `<p id="page-start"> </p>
<p id="indent">“Yeah, me neither. We’ve gotta figure out what to do and how to do it. The clock is ticking.”</p>
<p id="indent">“We must find a quieter place to talk about this. Others are still awake and might cause trouble.”</p>
<p id="indent">“So then, let’s go to the shed outside. We’ll grab our equipment and go from there.”</p>
<p id="indent">Sneaking out of the cramped lodging this late at night proves to be as much of a challenge as it sounds. Those that were still awake weren’t interested in the two of us leaving, probably because of my Overseer status, but that didn’t mean guards were going to be okay with it.</p>
<p id="indent">Eventually, though, we manage to snake our way out, and enter into the cold December night. A few clouds blot out the bright moon and threaten to break open. How funny would it be if the first snow of the season was right when we’re about to enact our plan?</p>
<p id="indent">A snowflake falls down and lands on Mary’s shoulder in front of me.</p>
<p id="indent">Apparently not very funny at all.</p>
<p id="indent">“Let’s make this quick. I don’t think we want to freeze to death out here that much.”</p>
<p id="indent">“What is the plan after we get the suits?”</p>
<p id="indent">“We’re going to grab Freckles, steal a ship, and run all the way back to Carmsborough. If we can, I’d prefer a cloudship, because that’s the only thing I’ve ever flown.”</p>
<p id="indent">I leave out the detail that I’ve never <em>learned</em> how to fly in the first place. The last thing I need is her flaking out on me now. Like it or not, either of us are screwed if we decide to stay on the island.</p>
<p id="indent">“That sounds more like a dream than a plan.”</p>
<p id="indent">“Do you have anything that could help, then?”</p>
<p id="page-end">75</p>`
const ch8p3 = `<p id="page-start"> </p>
<p id="indent">“Well, I know they never leave the ships unlocked. Even the cloudships. They keep the keys somewhere, but I am not sure where. Maybe in one of the last few rooms we did not check in the Administration building.”</p>
<p id="indent">“Okay, so we’ll get Freckles, grab an airship key, grab the ship, and get out of here. Piece of cake, right?”</p>
<p id="indent">“Hmm.” Mary isn’t convinced.</p>
<p id="indent">We make it to the shed and rush to equip our stolen gear. The radio and wrench jingle in the spacious pockets of my suit, both uncomfortable against my hips.</p>
<p id="indent">As a test, I decide to switch on the radio. A constant low static noise hums out of the device, signaling the empty airwaves. I turn the knob down just low enough that the static disappears, but loud enough for any conversation to be heard.</p>
<p id="indent">“Would it be better if we could disable the video system for a short time?” Mary suggests.</p>
<p id="indent">“You’re full of good ideas, Mary. Do you know where the security room would be?”</p>
<p id="indent">“No.”</p>
<p id="indent">“Fair. Let’s do this, then: take the videos down, find an airship key, rescue Freckles, and sail away to the mainland.”</p>
<p id="indent">“This plan is beginning to sound less and less like a piece of cake, Luna. I am worried for our safety.”</p>
<p id="indent">“It’s okay, Mary. We’ve got this big ol’ wrench on our side, and I think I’ve already demonstrated my willingness to use it.”</p>
<p id="indent">The two of us tiptoe our way back over to the Administration building, once again being careful to avoid the spotlights and prying </p>
<p id="page-end">76</p>`
const ch8p3mobile = `<p id="page-start"> </p>
<p id="indent">“Well, I know they never leave the ships unlocked. Even the cloudships. They keep the keys somewhere, but I am not sure where. Maybe in one of the last few rooms we did not check in the Administration building.”</p>
<p id="indent">“Okay, so we’ll get Freckles, grab an airship key, grab the ship, and get out of here. Piece of cake, right?”</p>
<p id="indent">“Hmm.” Mary isn’t convinced.</p>
<p id="indent">We make it to the shed and rush to equip our stolen gear. The radio and wrench jingle in the spacious pockets of my suit, both uncomfortable against my hips.</p>
<p id="indent">As a test, I decide to switch on the radio. A constant low static noise hums out of the device, signaling the empty airwaves. I turn the knob down just low enough that the static disappears, but loud enough for any conversation to be heard.</p>
<p id="indent">“Would it be better if we could disable the video system for a short time?” Mary suggests.</p>
<p id="indent">“You’re full of good ideas, Mary. Do you know where the security room would be?”</p>
<p id="indent">“No.”</p>
<p id="indent">“Fair. Let’s do this, then: take the videos down, find an airship key, rescue Freckles, and sail away to the mainland.”</p>
<p id="indent">“This plan is beginning to sound less and less like a piece of cake, Luna. I am worried for our safety.”</p>
<p id="indent">“It’s okay, Mary. We’ve got this big ol’ wrench on our side, and I think I’ve already demonstrated my willingness to use it.”</p>
<p id="indent">The two of us tiptoe our way back over to the Administration building, once again being careful to avoid </p>
<p id="page-end">76</p>`
const ch8p4 = `<p id="page-start"> </p>
<p id="no-indent">flashlights of guards making their rounds. I’m not sure how many are going to be out on patrol, but fighting them all is not an option. </p>
<p id="indent">“We’re getting word of two ambushed guards earlier today, as well as missing equipment from the mechanics shop,” a voice on the radio said, scaring us motionless. “Be on the lookout for anyone in a guard outfit that doesn’t belong. Security is going to be going through the tapes as soon as possible.”</p>
<p id="indent">“Roger that,” another voice crackles back. I recognize it as one of the two mechanics from earlier.</p>
<p id="indent">“Our operation time is getting smaller and smaller,” I say to Mary. Despite the snow building up slowly on the ground, a bead of nervous sweat forms on my forehead.</p>
<p id="indent">“Let us go take care of the videos, then.”</p>
<p id="indent">We reach the mechanics shop, which, unsurprisingly, has closed its doors for the night. A quick yank on each confirms they’re locked.</p>
<p id="indent">“Are there any other doors you know of that lead into the Administration building, Mary?”</p>
<p id="indent">“The Housing and Administration buildings are attached by one long hallway and set of doors over here,” she says, pointing to what looks like a makeshift connector to the two buildings. I suppose I should’ve noticed that, but I’ve had more pressing things to worry about.</p>
<p id="indent">“I guess we sneak back through the Housing building again.”</p>
<p id="indent">We walk silently back up to the door we came out of minutes ago, with a little more intent than we left with. No point in others not knowing we don’t belong.</p>
<p id="indent">“You have my hopes higher than they should be, Luna,” Mary says, stepping over some of the already asleep bodies. “For the first </p>
<p id="page-end">77</p>`
const ch8p4mobile = `<p id="page-start"> </p>
<p id="no-indent">the spotlights and prying flashlights of guards making their rounds. I’m not sure how many are going to be out on patrol, but fighting them all is not an option. </p>
<p id="indent">“We’re getting word of two ambushed guards earlier today, as well as missing equipment from the mechanics shop,” a voice on the radio said, scaring us motionless. “Be on the lookout for anyone in a guard outfit that doesn’t belong. Security is going to be going through the tapes as soon as possible.”</p>
<p id="indent">“Roger that,” another voice crackles back. I recognize it as one of the two mechanics from earlier.</p>
<p id="indent">“Our operation time is getting smaller and smaller,” I say to Mary. Despite the snow building up slowly on the ground, a bead of nervous sweat forms on my forehead.</p>
<p id="indent">“Let us go take care of the videos, then.”</p>
<p id="indent">We reach the mechanics shop, which, unsurprisingly, has closed its doors for the night. A quick yank on each confirms they’re locked.</p>
<p id="indent">“Are there any other doors you know of that lead into the Administration building, Mary?”</p>
<p id="indent">“The Housing and Administration buildings are attached by one long hallway and set of doors over here,” she says, pointing to what looks like a makeshift connector to the two buildings. I suppose I should’ve noticed that, but I’ve had more pressing things to worry about.</p>
<p id="indent">“I guess we sneak back through the Housing building again.”</p>
<p id="indent">We walk silently back up to the door we came out of minutes ago, with a little more intent than we left with. No point in others not knowing we don’t belong.</p>
<p id="indent">“You have my hopes higher than they should be, Luna,” Mary says, stepping over some of the already asleep bodies.</p>
<p id="page-end">77</p>`
const ch8p5 = `<p id="page-start"> </p>
<p id="no-indent">time in a long time, I truly believe I will see my adult children again soon.”</p>
<p id="indent">Of course she has children. The thought entirely slipped my mind. She probably had a husband too, although I can’t imagine he’s still around if she hasn’t brought him up.</p>
<p id="indent">“How many do you have?” I ask, as if they wouldn’t be old enough to be my own parents.</p>
<p id="indent">“I have two. A son and a daughter. Oh, how I miss my mornings with Elouise when we sat and broke bread with each other. I want nothing more than to go back to my old routine, but I am afraid that we will never be truly safe after we escape from this hell.”</p>
<p id="indent">“We’ll get you back to your kids, Mary, and something tells me these goons have more to worry about than the two of us. They’re preparing for something, and we’re just a couple of roadblocks.”</p>
<p id="indent">“I suppose. What about you, Luna? Do you have family waiting for you back home?”</p>
<p id="indent">In front of us is the divider that leads to the Administration building. It’s strangely unguarded, which most likely means it’s also locked.</p>
<p id="indent">“Nah, my mom died five years ago, and my dad left long before that. It’s just me and Freckles. I’m not sure what I would’ve done if I hadn’t found him at work one day. I might’ve been killed once or twice.”</p>
<p id="indent">“I am sorry to hear that. Maybe when all of this is said and done, we can find a new place together.”</p>
<p id="indent">“Yeah, maybe,” I say, not focusing on what she’s saying. I quietly try the door in front of us, praying nobody’s on the opposite side guarding it. The knob turns, and the door slowly swings open. </p>
<p id="indent">Nobody stands in the long hallway connecting the two buildings. We’re back in luck.</p>
<p id="page-end">78</p>`
const ch8p5mobile = `<p id="page-start"> </p>
<p id="no-indent">“For the first time in a long time, I truly believe I will see my adult children again soon.”</p>
<p id="indent">Of course she has children. The thought entirely slipped my mind. She probably had a husband too, although I can’t imagine he’s still around if she hasn’t brought him up.</p>
<p id="indent">“How many do you have?” I ask, as if they wouldn’t be old enough to be my own parents.</p>
<p id="indent">“I have two. A son and a daughter. Oh, how I miss my mornings with Elouise when we sat and broke bread with each other. I want nothing more than to go back to my old routine, but I am afraid that we will never be truly safe after we escape from this hell.”</p>
<p id="indent">“We’ll get you back to your kids, Mary, and something tells me these goons have more to worry about than the two of us. They’re preparing for something, and we’re just a couple of roadblocks.”</p>
<p id="indent">“I suppose. What about you, Luna? Do you have family waiting for you back home?”</p>
<p id="indent">In front of us is the divider that leads to the Administration building. It’s strangely unguarded, which most likely means it’s also locked.</p>
<p id="indent">“Nah, my mom died five years ago, and my dad left long before that. It’s just me and Freckles. I’m not sure what I would’ve done if I hadn’t found him at work one day. I might’ve been killed once or twice.”</p>
<p id="indent">“I am sorry to hear that. Maybe when all of this is said and done, we can find a new place together.”</p>
<p id="indent">“Yeah, maybe,” I say, not focusing on what she’s saying. I quietly try the door in front of us, praying nobody’s on the opposite side guarding it. The knob turns, and the door slowly swings open. </p>
<p id="indent">Nobody stands in the long hallway connecting the two buildings. We’re back in luck.</p>
<p id="page-end">78</p>`
const ch8p6 = `<p id="page-start"> </p>
<p id="indent">“Boss, we’ve got bad news about the Plasmarizer,” a voice says on the radio, startling the two of us and a couple of others that were slowly nodding off to sleep. I turn the knob down a little further and hold it up to my ear.</p>
<p id="indent">“Yeah, what is it this time?” Slaphand’s dominating voice crackles over the speaker.</p>
<p id="indent">“It seems whoever was sneaking about yesterday did some damage to it, too. I’m standing in the security room trying to get the timestamp, but it might be a few hours.”</p>
<p id="indent">A string of expletives sounds off from the black box in my hand. </p>
<p id="indent">“We can’t afford another setback like this! I’m going down to see the Plasmarizer right now!”</p>
<p id="indent">The two of us stop at the end of the hallway. He’ll be walking our way, and the last thing we need is to run directly into the one person we’re explicitly avoiding.</p>
<p id="indent">Through the door, we can hear him yelling and stomping down the hall. We’re dead meat as soon as he finds out it was me again.</p>
<p id="indent">“I think we have to change our plan again,” I whisper to Mary. “We can’t take the video system down if Slaphand’s walking around. He could enter in there at any moment.”</p>
<p id="indent">“Then we should lie low and only grab keys and your cat,” Mary suggests.</p>
<p id="indent">I once again turn the knob as slow as possible and crack the door open barely enough to peek my head through. The hall is empty. For now, at least.</p>
<p id="indent">“Alright. Let’s get moving. There weren’t many doors left for us to check, but we should still hurry with each.”</p>
<p id="page-end">79</p>`
const ch8p6mobile = `<p id="page-start"> </p>
<p id="indent">“Boss, we’ve got bad news about the Plasmarizer,” a voice says on the radio, startling the two of us and a couple of others that were slowly nodding off to sleep. I turn the knob down a little further and hold it up to my ear.</p>
<p id="indent">“Yeah, what is it this time?” Slaphand’s dominating voice crackles over the speaker.</p>
<p id="indent">“It seems whoever was sneaking about yesterday did some damage to it, too. I’m standing in the security room trying to get the timestamp, but it might be a few hours.”</p>
<p id="indent">A string of expletives sounds off from the black box in my hand. </p>
<p id="indent">“We can’t afford another setback like this! I’m going down to see the Plasmarizer right now!”</p>
<p id="indent">The two of us stop at the end of the hallway. He’ll be walking our way, and the last thing we need is to run directly into the one person we’re explicitly avoiding.</p>
<p id="indent">Through the door, we can hear him yelling and stomping down the hall. We’re dead meat as soon as he finds out it was me again.</p>
<p id="indent">“I think we have to change our plan again,” I whisper to Mary. “We can’t take the video system down if Slaphand’s walking around. He could enter in there at any moment.”</p>
<p id="indent">“Then we should lie low and only grab keys and your cat,” Mary suggests.</p>
<p id="indent">I once again turn the knob as slow as possible and crack the door open barely enough to peek my head through. The hall is empty. For now, at least.</p>
<p id="indent">“Alright. Let’s get moving. There weren’t many doors left for us to check, but we should still hurry with each.”</p>
<p id="page-end">79</p>`
const ch8p7 = `<p id="page-start"> </p>
<p id="indent">We tiptoe down the hall, tense and nervous. My eyes are fixed on one of the last few doors we didn’t check.</p>
<p id="indent">Please be the one we need.</p>
<p id="indent">Every step creaks slightly on the carpeted flooring. My senses are even more attuned than the first time we were doing recon. </p>
<p id="indent">“Wait, creaking means empty space underneath the boards.”</p>
<p id="indent">“What?” Mary asks.</p>
<p id="indent">“There’s a <em>basement</em>, Mary. We might have to search there, too.”</p>
<p id="indent">“Well, that figures.” She’s as happy as I am.</p>
<p id="indent">We finally reach the door I’ve been locked in on, and I swing it open as if I do so every day. A flight of stairs leads into a dark basement, lit scarcely by a few gas lanterns hanging on the walls.</p>
<p id="indent">“I hate being right.”</p>
<p id="indent">Just to confirm, we check the other rooms. Like the hallway, they’re surprisingly empty, and don’t have what we’re after.</p>
<p id="indent">“To the basement it is,” I say, reopening the door. We take echoing steps down to the concrete floor, and the cold of the underground room hits us immediately. Ignoring the snow, it’s as bad as it is outside.</p>
<p id="indent">The room is wide open and empty, aside from a few extra doors on the walls. I’m personally tiring of this door game. Of the rooms, only one is labeled: the security room.</p>
<p id="indent">“Jackpot.”</p>
<p id="indent">“I thought we were not going to go for it?” Mary says.</p>
<p id="indent">“This is too good of a situation to pass up,” I say, slipping the wrench out of my pocket. “You go ahead and check some of the other rooms. I’ll handle these guys.”</p>
<p id="indent">“Please do not do this, Luna. You might get us caught.”</p>
<p id="page-end">80</p>`
const ch8p7mobile = `<p id="page-start"> </p>
<p id="indent">We tiptoe down the hall, tense and nervous. My eyes are fixed on one of the last few doors we didn’t check.</p>
<p id="indent">Please be the one we need.</p>
<p id="indent">Every step creaks slightly on the carpeted flooring. My senses are even more attuned than the first time we were doing recon. </p>
<p id="indent">“Wait, creaking means empty space underneath the boards.”</p>
<p id="indent">“What?” Mary asks.</p>
<p id="indent">“There’s a <em>basement</em>, Mary. We might have to search there, too.”</p>
<p id="indent">“Well, that figures.” She’s as happy as I am.</p>
<p id="indent">We finally reach the door I’ve been locked in on, and I swing it open as if I do so every day. A flight of stairs leads into a dark basement, lit scarcely by a few gas lanterns hanging on the walls.</p>
<p id="indent">“I hate being right.”</p>
<p id="indent">Just to confirm, we check the other rooms. Like the hallway, they’re surprisingly empty, and don’t have what we’re after.</p>
<p id="indent">“To the basement it is,” I say, reopening the door. We take echoing steps down to the concrete floor, and the cold of the underground room hits us immediately. Ignoring the snow, it’s as bad as it is outside.</p>
<p id="indent">The room is wide open and empty, aside from a few extra doors on the walls. I’m personally tiring of this door game. Of the rooms, only one is labeled: the security room.</p>
<p id="indent">“Jackpot.”</p>
<p id="indent">“I thought we were not going to go for it?” Mary says.</p>
<p id="indent">“This is too good of a situation to pass up,” I say, slipping the wrench out of my pocket. “You go ahead and check some of the other rooms. I’ll handle these guys.”</p>
<p id="indent">“Please do not do this, Luna. You might get us caught.”</p>
<p id="page-end">80</p>`
const ch8p8 = `<p id="page-start"> </p>
<p id="indent">“I could also save us from being caught. I’m willing to take that risk.”</p>
<p id="indent">Mary shakes her head, but sneaks away to search elsewhere. I open the security room door, turning the knob slowly, and open it without making a creak. </p>
<p id="indent">There are three men, all rotating between seven monitors displaying different rooms and the main hallway. Judging by the timestamp in the corner of each screen, they’re trying to find the footage from yesterday.</p>
<p id="indent">I close the door behind me as quietly as I opened it, and bring the wrench over my head, ready to clock the man in the middle. My reflection faintly shows in the monitor screens, and the three turn just in time to watch me bring the wrench down.</p>
<p id="indent">With a loud bonk on his head, the man in the middle flops down onto a keyboard in front of him, mashing buttons and messing with the monitors. The other two draw their fists and swing at me. I duck, but too late for their next attack. The one to my left kicks out with his leg, crashing into my arm and sending me tumbling.</p>
<p id="indent">Honestly, this was a bad idea. Even if they hadn’t noticed me bringing the wrench down on my first target, I probably wouldn’t be able to take these two in close quarters without help. Mary was right–I let missing Freckles get in the way of rational thinking. </p>
<p id="indent">The man on my right also sends out a kick, landing square on my stomach. I fight the urge to throw up and claw my way back to a standing position. Wielding the wrench like a baseball bat, I swing out in front of me, hoping to hit either of them. They both dodge backwards, giving me a chance to lunge at the one on the right, weapon-first. It hits his shoulder, and he grunts with pain. </p>
<p id="indent">Using my momentum, I punch his side with my free arm, landing </p>
<p id="page-end">81</p>`
const ch8p8mobile = `<p id="page-start"> </p>
<p id="indent">“I could also save us from being caught. I’m willing to take that risk.”</p>
<p id="indent">Mary shakes her head, but sneaks away to search elsewhere. I open the security room door, turning the knob slowly, and open it without making a creak. </p>
<p id="indent">There are three men, all rotating between seven monitors displaying different rooms and the main hallway. Judging by the timestamp in the corner of each screen, they’re trying to find the footage from yesterday.</p>
<p id="indent">I close the door behind me as quietly as I opened it, and bring the wrench over my head, ready to clock the man in the middle. My reflection faintly shows in the monitor screens, and the three turn just in time to watch me bring the wrench down.</p>
<p id="indent">With a loud bonk on his head, the man in the middle flops down onto a keyboard in front of him, mashing buttons and messing with the monitors. The other two draw their fists and swing at me. I duck, but too late for their next attack. The one to my left kicks out with his leg, crashing into my arm and sending me tumbling.</p>
<p id="indent">Honestly, this was a bad idea. Even if they hadn’t noticed me bringing the wrench down on my first target, I probably wouldn’t be able to take these two in close quarters without help. Mary was right–I let missing Freckles get in the way of rational thinking. </p>
<p id="indent">The man on my right also sends out a kick, landing square on my stomach. I fight the urge to throw up and claw my way back to a standing position. Wielding the wrench like a baseball bat, I swing out in front of me, hoping to hit either of them. They both dodge backwards, giving me a chance to lunge at the one on the right, weapon-first. It hits his shoulder, and he grunts with pain. </p>
<p id="indent">Using my momentum, I punch his side with my free arm, </p>
<p id="page-end">81</p>`
const ch8p9 =`<p id="page-start"> </p>
<p id="no-indent">in between his hip bone and ribcage. The other man, apparently feeling left out, lunges at me and rips me off of his partner. He pins me against the wall and wraps his hands around my neck. </p>
<p id="indent">“Call the boss!” he yells to the other, taking his eyes off of me long enough for me to lift both of my legs into the air and kick out off of him. Both feet plant on his calves, and push him harshly down to the ground, butt first, head second. I also fall, back against the wall, but quickly get back up.</p>
<p id="indent">His partner pulls out a walkie-talkie and presses the button, ready to talk. Acting fast, I launch the wrench at his hand, which connects with the radio and shatters it in his hands. He winces some, but any damage to him is blocked by the broken plastic box.</p>
<p id="indent">We exchange a momentary glance, then look down at the wrench, and both dive for it. I land on top of him and wrap my arm around his neck, hoping he’ll clock out before putting the wrench to use against me.</p>
<p id="indent">The man I’d kicked down to the floor slowly sits up and watches the two of us for a second before realizing what’s happening. He decides to stand and join in on the fun, winding his leg up.</p>
<p id="indent">I try to roll while keeping my current victim in a headlock, but he’s too heavy for me. A barrage of kicks hammers my exposed side, sending stars darting across my vision. </p>
<p id="indent">This fight has to end, and soon. Every new attack hurts more and more, threatening to make me black out. After a few more seconds, the man underneath me stops moving, and his grip on the wrench loosens. I use the opportunity to roll away from the next kick. My side is screaming out in pain, but for now, I grab my makeshift weapon and stand back up as straight as possible.</p>
<p id="page-end">82</p>`
const ch8p9mobile = `<p id="page-start"> </p>
<p id="no-indent">landing in between his hip bone and ribcage. The other man, apparently feeling left out, lunges at me and rips me off of his partner. He pins me against the wall and wraps his hands around my neck. </p>
<p id="indent">“Call the boss!” he yells to the other, taking his eyes off of me long enough for me to lift both of my legs into the air and kick out off of him. Both feet plant on his calves, and push him harshly down to the ground, butt first, head second. I also fall, back against the wall, but quickly get back up.</p>
<p id="indent">His partner pulls out a walkie-talkie and presses the button, ready to talk. Acting fast, I launch the wrench at his hand, which connects with the radio and shatters it in his hands. He winces some, but any damage to him is blocked by the broken plastic box.</p>
<p id="indent">We exchange a momentary glance, then look down at the wrench, and both dive for it. I land on top of him and wrap my arm around his neck, hoping he’ll clock out before putting the wrench to use against me.</p>
<p id="indent">The man I’d kicked down to the floor slowly sits up and watches the two of us for a second before realizing what’s happening. He decides to stand and join in on the fun, winding his leg up.</p>
<p id="indent">I try to roll while keeping my current victim in a headlock, but he’s too heavy for me. A barrage of kicks hammers my exposed side, sending stars darting across my vision. </p>
<p id="indent">This fight has to end, and soon. Every new attack hurts more and more, threatening to make me black out. After a few more seconds, the man underneath me stops moving, and his grip on the wrench loosens. I use the opportunity to roll away from the next kick. My side is screaming out in pain, but for now, I grab my makeshift weapon and stand back up as straight as possible.</p>
<p id="page-end">82</p>`
const ch8p10 = `<p id="page-start"> </p>
<p id="indent">“Alright,” he says, “you wanna fight <em>mano y mano</em>? Come here, you little bi—”</p>
<p id="indent">“How are things going?” Mary asks, opening the door to the room and slamming it into the man’s face. He crumples down behind it and falls to the floor with a thud. Wide-eyed, she peeks around the edge and sees her accidental handiwork.</p>
<p id="indent">“Why’d you open the door so violently?” I ask. I lightly touch my side, wincing at the raw pain. </p>
<p id="indent">“I did not mean to. It swung open more than I intended. Anyway, I found a ring of keys, so we have our ride out.”</p>
<p id="indent">“Well, great work, Mary. And now, we don’t have to worry about anyone checking out the—”</p>
<p id="indent">“Hey!” a voice calls out from outside of the room. Panicked, we both peek out, and are met with two other guards at the bottom of the stairs back up.</p>
<p id="indent">“Wait, these are the two that knocked us out and stole our clothes!” the other says, angry.</p>
<p id="indent">“Uh oh,” Mary says. What an understatement.</p>
<p id="indent">Before we even have time to move, the guards speed back upstairs. </p>
<p id="indent">“We’ve gotta move,” I say, hysteria bubbling up in my chest. Momentarily forgetting about the searing pain in my side, I bound across the basement and hop up the stairs, blazing ahead of Mary.</p>
<p id="indent">“I’ll grab Freckles if you start making your way out of here, Mary. We can’t afford to lose any time now.”</p>
<p id="indent">I take a quick glance down the main hallway of the Administration building, and when I don’t spot any of the guards, rush directly to Slaphand’s office.</p>
<p id="page-end">83</p>`
const ch8p10mobile = `<p id="page-start"> </p>
<p id="indent">“Alright,” he says, “you wanna fight <em>mano y mano</em>? Come here, you little bi—”</p>
<p id="indent">“How are things going?” Mary asks, opening the door to the room and slamming it into the man’s face. He crumples down behind it and falls to the floor with a thud. Wide-eyed, she peeks around the edge and sees her accidental handiwork.</p>
<p id="indent">“Why’d you open the door so violently?” I ask. I lightly touch my side, wincing at the raw pain. </p>
<p id="indent">“I did not mean to. It swung open more than I intended. Anyway, I found a ring of keys, so we have our ride out.”</p>
<p id="indent">“Well, great work, Mary. And now, we don’t have to worry about anyone checking out the—”</p>
<p id="indent">“Hey!” a voice calls out from outside of the room. Panicked, we both peek out, and are met with two other guards at the bottom of the stairs back up.</p>
<p id="indent">“Wait, these are the two that knocked us out and stole our clothes!” the other says, angry.</p>
<p id="indent">“Uh oh,” Mary says. What an understatement.</p>
<p id="indent">Before we even have time to move, the guards speed back upstairs. </p>
<p id="indent">“We’ve gotta move,” I say, hysteria bubbling up in my chest. Momentarily forgetting about the searing pain in my side, I bound across the basement and hop up the stairs, blazing ahead of Mary.</p>
<p id="indent">“I’ll grab Freckles if you start making your way out of here, Mary. We can’t afford to lose any time now.”</p>
<p id="indent">I take a quick glance down the main hallway of the Administration building, and when I don’t spot any of the guards, rush directly to Slaphand’s office.</p>
<p id="page-end">83</p>`
const ch8p11 = `<p id="page-start"> </p>
<p id="indent">Right as I go to grab the handle, the door opens. In front of me stands the big man himself, his abnormally large hands balled angrily into fists. He’s already out of the room with the machine? How long was my fight in the basement?</p>
<p id="indent">I look behind me, ready to dart away, but four more guards, including yesterday’s victims, have blocked off our exit. Multiple guns are pointing our direction.</p>
<p id="indent">We slowly raise our hands, and I drop the wrench down to the floor. Mary was right. I shouldn’t have gone for the security room guards, and now my one chance of rescuing Freckles is gone.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">84</p>`
const ch8p11mobile = `<p id="page-start"> </p>
<p id="indent">Right as I go to grab the handle, the door opens. In front of me stands the big man himself, his abnormally large hands balled angrily into fists. He’s already out of the room with the machine? How long was my fight in the basement?</p>
<p id="indent">I look behind me, ready to dart away, but four more guards, including yesterday’s victims, have blocked off our exit. Multiple guns are pointing our direction.</p>
<p id="indent">We slowly raise our hands, and I drop the wrench down to the floor. Mary was right. I shouldn’t have gone for the security room guards, and now my one chance of rescuing Freckles is gone.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">84</p>`
const ch8p12 = ``
const ch8p12mobile = ``
const ch8p13 = ``
const ch8p13mobile = ``
const ch8p14 = ``
const ch8p14mobile = ``
const ch8p15 = ``
const ch8p15mobile = ``
const ch8p16 = ``
const ch8p16mobile = ``
const ch8p17 = ``
const ch8p17mobile = ``
const ch8p18 = ``
const ch8p18mobile = ``
const ch8 = [ch8p1, ch8p2, ch8p3, ch8p4, ch8p5, ch8p6, ch8p7, ch8p8, ch8p9, ch8p10, ch8p11, ch8p12, ch8p13, ch8p14, ch8p15, ch8p16, ch8p17, ch8p18]
const ch8mobile = [ch8p1mobile, ch8p2mobile, ch8p3mobile, ch8p4mobile, ch8p5mobile, ch8p6mobile, ch8p7mobile, ch8p8mobile, ch8p9mobile, ch8p10mobile, ch8p11mobile, ch8p12mobile, ch8p13mobile, ch8p14mobile, ch8p15mobile, ch8p16mobile, ch8p17mobile, ch8p18mobile]

const ch9p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 9</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“You don’t know what you’ve gotten yourself into this time, kid.”</p>
<p id="indent">I stay silent, refusing to give Slaphand any more satisfaction than he’s already gotten from the situation. We’re in his room now, but behind large metal bars that restrict us to the back corner. </p>
<p id="indent">Not that it matters at all. According to Slaphand’s taunts, as well as the empty room, Freckles hadn’t been here for a few hours. He was being loaded up on an airship to be sent somewhere else in Carmsborough. A deep rage inside me threatens to pop the blood vessels in my head. If I wasn’t focused on my large captor, my anger would probably scare me.</p>
<p id="indent">“By the way,” he continues, “I’ve seen your handiwork. On top of destroying my machine again, you’ve incapacitated five guards. </p>
<p id="page-end">86</p>`
const ch9p1mobile = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 9</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“You don’t know what you’ve gotten yourself into this time, kid.”</p>
<p id="indent">I stay silent, refusing to give Slaphand any more satisfaction than he’s already gotten from the situation. We’re in his room now, but behind large metal bars that restrict us to the back corner. </p>
<p id="indent">Not that it matters at all. According to Slaphand’s taunts, as well as the empty room, Freckles hadn’t been here for a few hours. He was being loaded up on an airship to be sent somewhere else in Carmsborough. A deep rage inside me threatens to pop the blood vessels in my head. If I wasn’t focused on my large captor, my anger would probably scare me.</p>
<p id="indent">“By the way,” he continues, “I’ve seen your handiwork. On top of destroying my machine again, you’ve </p>
<p id="page-end">86</p>`
const ch9p2 = `<p id="page-start"> </p>
<p id="no-indent">You’re talented, I’ll give you that, but now that we’ve been set back yet again, I need to make an example out of the two of you.”</p>
<p id="indent">“An example how?” Mary asks him, speaking for the first time since our capture. Like mine, her mood immediately flipped when confronted by guns, and I can’t tell if she’s upset with me specifically or just in general.</p>
<p id="indent">“In all my years doing what I do, I’ve never been more frustrated with someone than I am with you. You, a literal kid, have stepped in between us and our plans one too many times.” He moves towards his desk, hovering one of his massive fingers over a red button next to a speaker, and daintily taps it.</p>
<p id="indent">“Attention all workers, I have a midnight announcement for you: two of your own have been apprehended sneaking around in the Administration building and wreaking havoc. In doing so, they’ve destroyed the machine we’ve been collecting parts and raw materials for. This means that we are even less likely to reach our goal on time, and therefore, must add another two hours to the workday.”</p>
<p id="indent">“Another <em>two hours</em>?” Mary cries out. “We were only on ten a day for three days!”</p>
<p id="indent">“You may recall that we had gone up to ten to meet our deadline a couple days ago. That was because the machine was broken a few days ago as well. Remarkably, you can blame the same person for both incidents: Luna, the new Overseer. If you have any qualms about the situation, please speak to her about it. Thank you, and enjoy your twelve-hour shifts.”</p>
<p id="indent">Mary looks at me in shock and disbelief. “Did I hear this man correctly?”</p>
<p id="page-end">87</p>`
const ch9p2mobile = `<p id="page-start"> </p>
<p id="no-indent">incapacitated five guards. You’re talented, I’ll give you that, but now that we’ve been set back yet again, I need to make an example out of the two of you.”</p>
<p id="indent">“An example how?” Mary asks him, speaking for the first time since our capture. Like mine, her mood immediately flipped when confronted by guns, and I can’t tell if she’s upset with me specifically or just in general.</p>
<p id="indent">“In all my years doing what I do, I’ve never been more frustrated with someone than I am with you. You, a literal kid, have stepped in between us and our plans one too many times.” He moves towards his desk, hovering one of his massive fingers over a red button next to a speaker, and daintily taps it.</p>
<p id="indent">“Attention all workers, I have a midnight announcement for you: two of your own have been apprehended sneaking around in the Administration building and wreaking havoc. In doing so, they’ve destroyed the machine we’ve been collecting parts and raw materials for. This means that we are even less likely to reach our goal on time, and therefore, must add another two hours to the workday.”</p>
<p id="indent">“Another <em>two hours</em>?” Mary cries out. “We were only on ten a day for three days!”</p>
<p id="indent">“You may recall that we had gone up to ten to meet our deadline a couple days ago. That was because the machine was broken a few days ago as well. Remarkably, you can blame the same person for both incidents: Luna, the new Overseer. If you have any qualms about the situation, please speak to her about it. Thank you, and enjoy your twelve-hour shifts.”</p>
<p id="indent">Mary looks at me in shock and disbelief. “Did I hear this man correctly?”</p>
<p id="page-end">87</p>`
const ch9p3 = `<p id="page-start"> </p>
<p id="indent">“You didn’t want to know why I was here, so I didn’t tell you,” I say, sheepishly. “I suspected it was the case when Renet was talking about it, but you were so sure it wasn’t my fault that I didn’t bring it up again.”</p>
<p id="indent">She gives me a long stare before saying, “Well, I guess everything really is about you, Luna. You have proven this old woman wrong.”</p>
<p id="indent">“Look, I’m sorry, Mary. I never should’ve dragged you into this mess, and now I’ve extended your workdays twice.”</p>
<p id="indent">“I am not hurt about that, Luna. You have done what you thought was right. I am simply at a loss for what to do next.”</p>
<p id="indent">“There is no ‘next’ for you,” Slaphand says, walking back to us. “You two will be stuck in here until I decide you’re done causing damage to my people and property. Good night, trouble. Oh, and Merry Christmas.”</p>
<p id="indent">He leaves the room and turns the light off, drowning us in complete darkness. I sit down against the wall, defeated. </p>
<p id="indent">What now?</p>
<p id="indent">“Next chance I get, that man is going down.”</p>
<p id="indent">“How are you going to do that, Luna?”</p>
<p id="indent">“I’m not sure yet, but I’ve gotta do something. Going out and being an Overseer is a death sentence, but so is trying to escape. I’m surprised he even kept us alive.”</p>
<p id="indent">“He wants to torture you, most likely. You have significantly wronged him twice. He has killed his own guards for less.”</p>
<p id="indent">And what better torture than being put on a pedestal with a target painted on your head?</p>
<p id="indent">It takes a long time, but eventually, we both drift to sleep. I can’t stop thinking about his sneaky removal of Freckles, and where he </p>
<p id="page-end">88</p>`
const ch9p3mobile = `<p id="page-start"> </p>
<p id="indent">“You didn’t want to know why I was here, so I didn’t tell you,” I say, sheepishly. “I suspected it was the case when Renet was talking about it, but you were so sure it wasn’t my fault that I didn’t bring it up again.”</p>
<p id="indent">She gives me a long stare before saying, “Well, I guess everything really is about you, Luna. You have proven this old woman wrong.”</p>
<p id="indent">“Look, I’m sorry, Mary. I never should’ve dragged you into this mess, and now I’ve extended your workdays twice.”</p>
<p id="indent">“I am not hurt about that, Luna. You have done what you thought was right. I am simply at a loss for what to do next.”</p>
<p id="indent">“There is no ‘next’ for you,” Slaphand says, walking back to us. “You two will be stuck in here until I decide you’re done causing damage to my people and property. Good night, trouble. Oh, and Merry Christmas.”</p>
<p id="indent">He leaves the room and turns the light off, drowning us in complete darkness. I sit down against the wall, defeated. </p>
<p id="indent">What now?</p>
<p id="indent">“Next chance I get, that man is going down.”</p>
<p id="indent">“How are you going to do that, Luna?”</p>
<p id="indent">“I’m not sure yet, but I’ve gotta do something. Going out and being an Overseer is a death sentence, but so is trying to escape. I’m surprised he even kept us alive.”</p>
<p id="indent">“He wants to torture you, most likely. You have significantly wronged him twice. He has killed his own guards for less.”</p>
<p id="indent">And what better torture than being put on a pedestal with a target painted on your head?</p>
<p id="indent">It takes a long time, but eventually, we both drift to sleep. I can’t stop thinking about his sneaky removal of Freckles, </p>
<p id="page-end">88</p>`
const ch9p4 = `<p id="page-start"> </p>
<p id="no-indent">could be. Hopefully my little guy is okay. I need him now more than ever.</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">We wake up a few hours later to an alarm blaring. We’re still under the cover of complete blackness, and there’s no red lights to go along with the ear-splitting noise. Even what little we can see through the office window gets closed off to us, as a heavy metal blinder slowly closes over the glass, sealing us inside.</p>
<p id="indent">“What’s happening?” Mary yells, clutching her chest.</p>
<p id="indent">“I’m not sure! I think they’re being attacked!”</p>
<p id="indent">Our answer comes a minute or two later, with the sound of a loud explosion rocking the ground. </p>
<p id="indent">“Do you think it’s Orion and the Clockwork?”</p>
<p id="indent">“That is probably our best hope,” Mary answers. Another explosion sounds off, spraying dust and small chunks of ceiling down to the floor. “Although, I am not sure if Orion would use explosions to free people.”</p>
<p id="indent">“That’s a good point. Maybe the government?”</p>
<p id="indent">A third blast cracks the wall behind us, letting a little light spill in from the hallway. Armed guards run back and forth, all in various stages of panic. Whatever it is, they’re clearly worried.</p>
<p id="indent">Slaphand’s voice calls out from outside the door, yelling something unintelligible at his guards, before he barges in and flips the light on. Without so much as glancing at us, he opens a drawer, pulls out some strange-looking gun and a keyring, and leaves just as quickly as he arrived, slamming the door shut. </p>
<p id="indent">With the force behind his action, the crack in the wall shoots all the way up to and across the ceiling, arcs to our containment, and </p>
<p id="page-end">89</p>`
const ch9p4mobile = `<p id="page-start"> </p>
<p id="no-indent">and where he could be. Hopefully my little guy is okay. I need him now more than ever.</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">We wake up a few hours later to an alarm blaring. We’re still under the cover of complete blackness, and there’s no red lights to go along with the ear-splitting noise. Even what little we can see through the office window gets closed off to us, as a heavy metal blinder slowly closes over the glass, sealing us inside.</p>
<p id="indent">“What’s happening?” Mary yells, clutching her chest.</p>
<p id="indent">“I’m not sure! I think they’re being attacked!”</p>
<p id="indent">Our answer comes a minute or two later, with the sound of a loud explosion rocking the ground. </p>
<p id="indent">“Do you think it’s Orion and the Clockwork?”</p>
<p id="indent">“That is probably our best hope,” Mary answers. Another explosion sounds off, spraying dust and small chunks of ceiling down to the floor. “Although, I am not sure if Orion would use explosions to free people.”</p>
<p id="indent">“That’s a good point. Maybe the government?”</p>
<p id="indent">A third blast cracks the wall behind us, letting a little light spill in from the hallway. Armed guards run back and forth, all in various stages of panic. Whatever it is, they’re clearly worried.</p>
<p id="indent">Slaphand’s voice calls out from outside the door, yelling something unintelligible at his guards, before he barges in and flips the light on. Without so much as glancing at us, he opens a drawer, pulls out some strange-looking gun and a keyring, and leaves just as quickly as he arrived, slamming the door shut. </p>
<p id="indent">With the force behind his action, the crack in the wall shoots all the way up to and across the ceiling, arcs to our </p>
<p id="page-end">89</p>`
const ch9p5 = `<p id="page-start"> </p>
<p id="no-indent">stops at the heavy metal keeping us in.</p>
<p id="indent">“Did you see that?” Mary says, mouth open in surprise, staring at the crumbling wall.</p>
<p id="indent">“The man is strong enough to split concrete <em>on accident</em>. It’s a good thing I didn’t attack him.” I walk up to the now-weakened spot of our makeshift jail and grab onto the bars. “I’m gonna see if we can wiggle this loose and escape. The last thing we need is for the ceiling to collapse on us still in here.”</p>
<p id="indent">Mary comes over to help, and together, we throw ourselves back and forth on the metal bars, trying desperately to get them to budge. The bar frame squeaks and scratches against whatever is keeping it lodged in the concrete ceiling, but otherwise doesn’t move.</p>
<p id="indent">“No dice,” I say, giving up not too long after. As soon as we both turn away from the weakened spot, however, a fourth explosion rocks the building, cracking the ceiling even further and sending the cage falling away from us.</p>
<p id="indent">We both stare at the debris. A good portion of the room’s ceiling is now on the floor, revealing the cold and cloudy night sky. Snowflakes trickle in, already beginning to coat Slaphand’s desk. </p>
<p id="indent">“We weakened it,” Mary says, smiling.</p>
<p id="indent">“Yeah, something like that,” I smile back. “Quick, let’s get out of here. No point in waiting for the rest of the building to collapse.”</p>
<p id="indent">I search Slaphand’s desk for anything useful, but there are no more weapons or keys to be found, and something tells me going back to the basement is an incredibly awful idea. I back away from the desk, and not a moment later, yet another explosion sends the rest of the ceiling falling, absolutely crushing the wood underneath it.</p>
<p id="page-end">90</p>`
const ch9p5mobile = `<p id="page-start"> </p>
<p id="no-indent">containment, and stops at the heavy metal keeping us in.</p>
<p id="indent">“Did you see that?” Mary says, mouth open in surprise, staring at the crumbling wall.</p>
<p id="indent">“The man is strong enough to split concrete <em>on accident</em>. It’s a good thing I didn’t attack him.” I walk up to the now-weakened spot of our makeshift jail and grab onto the bars. “I’m gonna see if we can wiggle this loose and escape. The last thing we need is for the ceiling to collapse on us still in here.”</p>
<p id="indent">Mary comes over to help, and together, we throw ourselves back and forth on the metal bars, trying desperately to get them to budge. The bar frame squeaks and scratches against whatever is keeping it lodged in the concrete ceiling, but otherwise doesn’t move.</p>
<p id="indent">“No dice,” I say, giving up not too long after. As soon as we both turn away from the weakened spot, however, a fourth explosion rocks the building, cracking the ceiling even further and sending the cage falling away from us.</p>
<p id="indent">We both stare at the debris. A good portion of the room’s ceiling is now on the floor, revealing the cold and cloudy night sky. Snowflakes trickle in, already beginning to coat Slaphand’s desk. </p>
<p id="indent">“We weakened it,” Mary says, smiling.</p>
<p id="indent">“Yeah, something like that,” I smile back. “Quick, let’s get out of here. No point in waiting for the rest of the building to collapse.”</p>
<p id="indent">I search Slaphand’s desk for anything useful, but there are no more weapons or keys to be found, and something tells me going back to the basement is an incredibly awful idea. I back away from the desk, and not a moment later, yet another explosion sends the rest of the ceiling falling, absolutely crushing the wood underneath it.</p>
<p id="page-end">90</p>`
const ch9p6 = `<p id="page-start"> </p>
<p id="indent">If I weren’t severely panicking, the timing of these explosions would be almost comedic.</p>
<p id="indent">The two of us, still in guard uniforms, rush out of the room and join a flock running in and out of the building. If they realize who we are, they don’t show any signs. Whatever attack is happening right now is more important than the two of us wandering amuck.</p>
<p id="indent">“To the mechanics shop we go,” I say, hoping to snag another makeshift weapon or even a four-wheeler to escape the heat of the battle on. We enter in, only to find the center of the ceiling collapsed in. Any four-wheeler that might’ve been left in the shop is currently a pancake.</p>
<p id="indent">I grab another wrench off of a workbench and peek out the window of the overhead door. Flashes of light appear from the ends of guns across the field, illuminating the snow now coming down in full force. Off in the distance, I see a disproportionate man running to a grounded airship.</p>
<p id="indent">“He’s escaping! We have to go get him!”</p>
<p id="indent">I reach out to open the normal-sized door, but recoil back as a spray of bullets dents the metal inward. My hand freezes over the doorknob. Suddenly, opening that doesn’t seem like such a great idea.</p>
<p id="indent">“How about we try back through the Housing building?” Mary suggests.</p>
<p id="indent">“Good idea.”</p>
<p id="indent">The two of us run back into the main Administration building and hurry down the long hallway into the equally long median hallway that connects the two buildings. Then, jumping over and shoving some of the other prisoners, we make our way out to the main exit door.</p>
<p id="indent">Right at the exit, an explosion rocks our world. Loud cracking </p>
<p id="page-end">91</p>`
const ch9p6mobile = `<p id="page-start"> </p>
<p id="indent">If I weren’t severely panicking, the timing of these explosions would be almost comedic.</p>
<p id="indent">The two of us, still in guard uniforms, rush out of the room and join a flock running in and out of the building. If they realize who we are, they don’t show any signs. Whatever attack is happening right now is more important than the two of us wandering amuck.</p>
<p id="indent">“To the mechanics shop we go,” I say, hoping to snag another makeshift weapon or even a four-wheeler to escape the heat of the battle on. We enter in, only to find the center of the ceiling collapsed in. Any four-wheeler that might’ve been left in the shop is currently a pancake.</p>
<p id="indent">I grab another wrench off of a workbench and peek out the window of the overhead door. Flashes of light appear from the ends of guns across the field, illuminating the snow now coming down in full force. Off in the distance, I see a disproportionate man running to a grounded airship.</p>
<p id="indent">“He’s escaping! We have to go get him!”</p>
<p id="indent">I reach out to open the normal-sized door, but recoil back as a spray of bullets dents the metal inward. My hand freezes over the doorknob. Suddenly, opening that doesn’t seem like such a great idea.</p>
<p id="indent">“How about we try back through the Housing building?” Mary suggests.</p>
<p id="indent">“Good idea.”</p>
<p id="indent">The two of us run back into the main Administration building and hurry down the long hallway into the equally long median hallway that connects the two buildings. Then, jumping over and shoving some of the other prisoners, we make our way out to the main exit door.</p>
<p id="indent">Right at the exit, an explosion rocks our world. Loud </p>
<p id="page-end">91</p>`
const ch9p7 = `<p id="page-start"> </p>
<p id="no-indent">and a flash of fiery light consume our senses, and it takes me a moment to regain my footing.</p>
<p id="indent">I stare out onto the field. Slaphand is but a dot now, still retreating towards the airship, which has been spraying bullets up into the sky. If we wait any longer, he’s going to get away, and I <em>really</em> might never reunite with Freckles again.</p>
<p id="indent">“Luna, help me!” Mary calls out from behind me. I turn to see her under a considerable pile of concrete and rebar, no doubt from the walls and ceiling crumbling from the blast. It’s a wonder I didn’t get hit.</p>
<p id="indent">I look down at her, panicked, and back at the ever-receding figure of Slaphand. </p>
<p id="indent">Oh God, what do I do?</p>
<p id="indent">“Luna, please,” she cries, clearly suffering. “This hurts. I think I might have broken something.”</p>
<p id="indent">What would Freckles say? What would I say?</p>
<p id="indent">I can’t know what Freckles would say without having him back.</p>
<p id="indent">“Stay still, Mary, I’m gonna go find help.” I give her one last glance before running out into the open battleground. </p>
<p id="indent">I’m sorry, Mary. Freckles has to come first.</p>
<p id="indent">Part of me almost feels guilty. She’s been nothing but kind and helpful to me, and has risked so much just because I gave her hope that we could be free. And now, in the middle of a bloody, dangerous ambush, I leave her crushed underneath a heavy pile of rubble.</p>
<p id="indent">But she’ll be okay, right?</p>
<p id="indent">I convince myself not to glance back at her. I have to get to Slaphand somehow. Unfortunately, the most direct path is between the fighting. Everywhere across the island, two factions of people </p>
<p id="page-end">92</p>`
const ch9p7mobile = `<p id="page-start"> </p>
<p id="no-indent">cracking and a flash of fiery light consume our senses, and it takes me a moment to regain my footing.</p>
<p id="indent">I stare out onto the field. Slaphand is but a dot now, still retreating towards the airship, which has been spraying bullets up into the sky. If we wait any longer, he’s going to get away, and I <em>really</em> might never reunite with Freckles again.</p>
<p id="indent">“Luna, help me!” Mary calls out from behind me. I turn to see her under a considerable pile of concrete and rebar, no doubt from the walls and ceiling crumbling from the blast. It’s a wonder I didn’t get hit.</p>
<p id="indent">I look down at her, panicked, and back at the ever-receding figure of Slaphand. </p>
<p id="indent">Oh God, what do I do?</p>
<p id="indent">“Luna, please,” she cries, clearly suffering. “This hurts. I think I might have broken something.”</p>
<p id="indent">What would Freckles say? What would I say?</p>
<p id="indent">I can’t know what Freckles would say without having him back.</p>
<p id="indent">“Stay still, Mary, I’m gonna go find help.” I give her one last glance before running out into the open battleground. </p>
<p id="indent">I’m sorry, Mary. Freckles has to come first.</p>
<p id="indent">Part of me almost feels guilty. She’s been nothing but kind and helpful to me, and has risked so much just because I gave her hope that we could be free. And now, in the middle of a bloody, dangerous ambush, I leave her crushed underneath a heavy pile of rubble.</p>
<p id="indent">But she’ll be okay, right?</p>
<p id="indent">I convince myself not to glance back at her. I have to get to Slaphand somehow. Unfortunately, the most direct path is between the fighting. Everywhere across the island, two </p>
<p id="page-end">92</p>`
const ch9p8 = `<p id="page-start"> </p>
<p id="no-indent">are fighting. The guards, though vastly outnumbered, are somehow holding their own against the other group, who, from what I can tell, is sporting brown suits and a red band around their arm of some sort.</p>
<p id="indent">Up in the air is a completely different story. There are three different kinds of airships. I recognize the three large ones from the shipyard in the air, launching volleys at both of the other types of ships. A second group, in a fleet of about fifteen or twenty, has a red and white flag with a black symbol on it, and the last simply sports a white flag with a lavender “S” emblazoned in the middle. </p>
<p id="indent">All three factions are trading shots, but it seems like Slaphand’s men aren’t going to last much longer up there. Good riddance, honestly. That still leaves the problem of the other two: who are the good guys, and who are the bad guys?</p>
<p id="indent">I initially decide to hug the sides of the buildings, hoping nobody will notice the five-foot-one girl sneaking away from the battlefield, and make it all the way back to the mechanics shop without being noticed. On arrival, a guard and brown-suited man notice me, momentarily putting their differences aside to stare.</p>
<p id="indent">“Hey, boys,” I say, wearing an anxious smile. The brown-coated one raises their gun to me. Instinctively, I raise my wrench, for some reason using it as a shield against a bullet.</p>
<p id="indent">Two shots ring out. The first, from the gun of the man in brown, miraculously connects with the wrench, reflecting the bullet and forcing it deep into the ground. The other comes from the guard’s gun, dropping the brown-coated man in an instant.</p>
<p id="indent">“Thanks for that,” I say, looking at the wrench. Thank God I decided to grab it. Without thinking, I reach down for the dead man’s </p>
<p id="page-end">93</p>`
const ch9p8mobile = `<p id="page-start"> </p>
<p id="no-indent">factions of people are fighting. The guards, though vastly outnumbered, are somehow holding their own against the other group, who, from what I can tell, is sporting brown suits and a red band around their arm of some sort.</p>
<p id="indent">Up in the air is a completely different story. There are three different kinds of airships. I recognize the three large ones from the shipyard in the air, launching volleys at both of the other types of ships. A second group, in a fleet of about fifteen or twenty, has a red and white flag with a black symbol on it, and the last simply sports a white flag with a lavender “S” emblazoned in the middle. </p>
<p id="indent">All three factions are trading shots, but it seems like Slaphand’s men aren’t going to last much longer up there. Good riddance, honestly. That still leaves the problem of the other two: who are the good guys, and who are the bad guys?</p>
<p id="indent">I initially decide to hug the sides of the buildings, hoping nobody will notice the five-foot-one girl sneaking away from the battlefield, and make it all the way back to the mechanics shop without being noticed. On arrival, a guard and brown-suited man notice me, momentarily putting their differences aside to stare.</p>
<p id="indent">“Hey, boys,” I say, wearing an anxious smile. The brown-coated one raises their gun to me. Instinctively, I raise my wrench, for some reason using it as a shield against a bullet.</p>
<p id="indent">Two shots ring out. The first, from the gun of the man in brown, miraculously connects with the wrench, reflecting the bullet and forcing it deep into the ground. The other comes from the guard’s gun, dropping the brown-coated man in an instant.</p>
<p id="indent">“Thanks for that,” I say, looking at the wrench. Thank God I decided to grab it. Without thinking, I reach down for </p>
<p id="page-end">93</p>`
const ch9p9 = `<p id="page-start"> </p>
<p id="no-indent">pistol and hold it in my left hand.</p>
<p id="indent">Can I kill? I’ve never tried, but if push comes to shove, I think I could do it. Second question: can I shoot a gun?</p>
<p id="indent">I point at the ground and pull the trigger. It aims roughly where I wanted it to. Good enough for me.</p>
<p id="indent">Ahead of me, I can see Slaphand’s ship gearing up to fly away. I’m farther away from the center of attention now, but still nowhere near safe enough to run blindly across the field.</p>
<p id="indent">Above me, a bullet burrows itself in the concrete wall of the mechanics shop. </p>
<p id="indent">I’m not safe enough <em>anywhere</em> on this battlefield. It’s now or never, Luna. Let’s make it now.</p>
<p id="indent">I break into a full sprint towards the airship, doing my best to watch for stray bullets or enemies. Should I have taken the time to change into one of the yellow jumpsuits again? The yellow would be a brighter target, but it’d also mean I’m less of a target, right?</p>
<p id="indent">The brown-coated men are the good guys, right? They wouldn’t shoot one of the prisoners, right?</p>
<p id="indent">Too late for that thought. The only thing to worry about is the man ahead of me, who thinks he’s safe aboard his ship.</p>
<p id="indent">About halfway to it, an incredibly loud shrieking noise rips through the air. The battle on the ground seems to stop as everyone turns to find the source. A missile streaks from one of the S ships to one of Slaphand’s, creating an awesome bloom of fire, ashes, wood, and metal in the air.</p>
<p id="indent">Or, at least, it would be awesome, if it weren’t directly above me. </p>
<p id="indent">Debris of all sizes comes raining down, landing gracelessly in the </p>
<p id="page-end">94</p>`
const ch9p9mobile = `<p id="page-start"> </p>
<p id="no-indent">the dead man’s pistol and hold it in my left hand.</p>
<p id="indent">Can I kill? I’ve never tried, but if push comes to shove, I think I could do it. Second question: can I shoot a gun?</p>
<p id="indent">I point at the ground and pull the trigger. It aims roughly where I wanted it to. Good enough for me.</p>
<p id="indent">Ahead of me, I can see Slaphand’s ship gearing up to fly away. I’m farther away from the center of attention now, but still nowhere near safe enough to run blindly across the field.</p>
<p id="indent">Above me, a bullet burrows itself in the concrete wall of the mechanics shop. </p>
<p id="indent">I’m not safe enough <em>anywhere</em> on this battlefield. It’s now or never, Luna. Let’s make it now.</p>
<p id="indent">I break into a full sprint towards the airship, doing my best to watch for stray bullets or enemies. Should I have taken the time to change into one of the yellow jumpsuits again? The yellow would be a brighter target, but it’d also mean I’m less of a target, right?</p>
<p id="indent">The brown-coated men are the good guys, right? They wouldn’t shoot one of the prisoners, right?</p>
<p id="indent">Too late for that thought. The only thing to worry about is the man ahead of me, who thinks he’s safe aboard his ship.</p>
<p id="indent">About halfway to it, an incredibly loud shrieking noise rips through the air. The battle on the ground seems to stop as everyone turns to find the source. A missile streaks from one of the S ships to one of Slaphand’s, creating an awesome bloom of fire, ashes, wood, and metal in the air.</p>
<p id="indent">Or, at least, it would be awesome, if it weren’t directly above me. </p>
<p id="indent">Debris of all sizes comes raining down, landing </p>
<p id="page-end">94</p>`
const ch9p10 = `<p id="page-start"> </p>
<p id="no-indent">snow-covered grass. I keep my eyes looking up, hoping to dodge the serious pieces, but there’s nothing I can do about the splinters of wood and metal threatening to tear me open.</p>
<p id="indent">Slaphand’s escape ship lets out a roar and starts to slowly lift off the ground. A deep-violet shimmer highlights the entire outside of the hull, giving it an almost enchanted range of hues. Upset by the new development, a few of the ships in the air send a wave of bullets and cannon fire down to his ship. It all connects with the newly hued ship but stops short of creating any damage. </p>
<p id="indent">Is that some sort of airship shield?</p>
<p id="indent">The dizzying speed of everything happening is too much for me. I feel a piece of still-falling debris collide with my shoulder, and I tumble to the ground. Sharp pain ripples through my body, but I can still move my arm, meaning nothing’s broken or damaged too badly.</p>
<p id="indent">Finally, Slaphand’s ship lurches up and forward, hastily taking itself away from the messy battle on the field and in the air. </p>
<p id="indent">I’m too late. He’s going to get away.</p>
<p id="indent">A feeling of despair courses over me. Everything I’ve done to get my cat back was tumbling apart because of some spontaneous battle across the island. And the worst part is, Orion and the Clockwork aren’t even here to save us.</p>
<p id="indent">The more I think about it, the less it all makes sense. Who are these different groups of people, and why did they all suddenly converge on the island on Christmas day before the sun has even come up? What on earth is even here worth fighting over?</p>
<p id="indent">The Plasmarizer. The Plasmarizer is worth fighting over.</p>
<p id="indent">And with that destroyed, all of this will be for nothing, too. </p>
<p id="page-end">95</p>`
const ch9p10mobile = `<p id="page-start"> </p>
<p id="no-indent">gracelessly in the snow-covered grass. I keep my eyes looking up, hoping to dodge the serious pieces, but there’s nothing I can do about the splinters of wood and metal threatening to tear me open.</p>
<p id="indent">Slaphand’s escape ship lets out a roar and starts to slowly lift off the ground. A deep-violet shimmer highlights the entire outside of the hull, giving it an almost enchanted range of hues. Upset by the new development, a few of the ships in the air send a wave of bullets and cannon fire down to his ship. It all connects with the newly hued ship but stops short of creating any damage. </p>
<p id="indent">Is that some sort of airship shield?</p>
<p id="indent">The dizzying speed of everything happening is too much for me. I feel a piece of still-falling debris collide with my shoulder, and I tumble to the ground. Sharp pain ripples through my body, but I can still move my arm, meaning nothing’s broken or damaged too badly.</p>
<p id="indent">Finally, Slaphand’s ship lurches up and forward, hastily taking itself away from the messy battle on the field and in the air. </p>
<p id="indent">I’m too late. He’s going to get away.</p>
<p id="indent">A feeling of despair courses over me. Everything I’ve done to get my cat back was tumbling apart because of some spontaneous battle across the island. And the worst part is, Orion and the Clockwork aren’t even here to save us.</p>
<p id="indent">The more I think about it, the less it all makes sense. Who are these different groups of people, and why did they all suddenly converge on the island on Christmas day before the sun has even come up? What on earth is even here worth fighting over?</p>
<p id="indent">The Plasmarizer. The Plasmarizer is worth fighting over.</p>
<p id="indent">And with that destroyed, all of this will be for nothing, </p>
<p id="page-end">95</p>`
const ch9p11 = `<p id="page-start"> </p>
<p id="no-indent">Sounds like everyone ruined everyone else’s plans for the day.</p>
<p id="indent">With the debris from the exploded airship done falling, I get back up off the ground, wiping the dust the snow and ash off of myself. I guess I can go rescue Mary now. Hopefully she won’t be too upset with me leaving her to go get my best friend.</p>
<p id="indent">I rush back to the buildings, still not creating enough attention for anyone to shoot the girl running across the edge of the battlefield. Continued blasts have rendered a significant portion of the Administration building entirely unsafe, but a fair bit of the Housing building is still intact, including the section where I left Mary.</p>
<p id="indent">With no safe way to sneak inside, away from the fighting, I decide to hug the buildings again, until a group of three brown-suited men spot me and point their guns in my direction. There’s are much bigger than my looted pistol, though it’s not like I could take three out, anyway.</p>
<p id="indent">This is the end. I guarantee it.</p>
<p id="indent">Gunshots sound off, and I squeeze my eyes shut, bracing for my inevitable death. I hope it’s quick and painless.</p>
<p id="indent">But I don’t feel anything other than the stiff wind and snow whipping my body. I let myself open my eyes and see a man wearing all white standing where the three men once were, a magenta “S” proudly worn on his chest.</p>
<p id="indent">A mental sigh escapes me, if only for a moment. The man, not lowering his gun, starts moving closer to me.</p>
<p id="indent">“Hey, bud, maybe we can talk about this,” I say, trying to slowly reach for my pistol. “I mean, you did just save my life. I’m not even actually a guard here. I stole this outfit yesterday while sneaking around. I hate these guys.”</p>
<p id="page-end">96</p>`
const ch9p11mobile = `<p id="page-start"> </p>
<p id="no-indent">too. Sounds like everyone ruined everyone else’s plans for the day.</p>
<p id="indent">With the debris from the exploded airship done falling, I get back up off the ground, wiping the dust the snow and ash off of myself. I guess I can go rescue Mary now. Hopefully she won’t be too upset with me leaving her to go get my best friend.</p>
<p id="indent">I rush back to the buildings, still not creating enough attention for anyone to shoot the girl running across the edge of the battlefield. Continued blasts have rendered a significant portion of the Administration building entirely unsafe, but a fair bit of the Housing building is still intact, including the section where I left Mary.</p>
<p id="indent">With no safe way to sneak inside, away from the fighting, I decide to hug the buildings again, until a group of three brown-suited men spot me and point their guns in my direction. There’s are much bigger than my looted pistol, though it’s not like I could take three out, anyway.</p>
<p id="indent">This is the end. I guarantee it.</p>
<p id="indent">Gunshots sound off, and I squeeze my eyes shut, bracing for my inevitable death. I hope it’s quick and painless.</p>
<p id="indent">But I don’t feel anything other than the stiff wind and snow whipping my body. I let myself open my eyes and see a man wearing all white standing where the three men once were, a magenta “S” proudly worn on his chest.</p>
<p id="indent">A mental sigh escapes me, if only for a moment. The man, not lowering his gun, starts moving closer to me.</p>
<p id="indent">“Hey, bud, maybe we can talk about this,” I say, trying to slowly reach for my pistol. “I mean, you did just save my life. I’m not even actually a guard here. I stole this outfit yesterday while sneaking around. I hate these guys.”</p>
<p id="page-end">96</p>`
const ch9p12 = `<p id="page-start"> </p>
<p id="indent">“Are you Luna?” the man asks, getting even closer to me. For some reason, the fact that he knows my name, or is at least looking for me, makes me stop reaching for my gun.</p>
<p id="indent">“Wait, what?”</p>
<p id="indent">“Are you Luna?”</p>
<p id="indent">“How do you know my name? <em>Why</em> do you know my name?”</p>
<p id="indent">“So, you <em>are</em> Luna?” He sounds impatient.</p>
<p id="indent">“Yeah, I am. What’s going on?”</p>
<p id="indent">The man lifts his free arm to his mouth and speaks into a device on his wrist. “Sir, we found her. Requesting confirmation to escort. We may have a chance at success after all.”</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">97</p>`
const ch9p12mobile = `<p id="page-start"> </p>
<p id="indent">“Are you Luna?” the man asks, getting even closer to me. For some reason, the fact that he knows my name, or is at least looking for me, makes me stop reaching for my gun.</p>
<p id="indent">“Wait, what?”</p>
<p id="indent">“Are you Luna?”</p>
<p id="indent">“How do you know my name? <em>Why</em> do you know my name?”</p>
<p id="indent">“So, you <em>are</em> Luna?” He sounds impatient.</p>
<p id="indent">“Yeah, I am. What’s going on?”</p>
<p id="indent">The man lifts his free arm to his mouth and speaks into a device on his wrist. “Sir, we found her. Requesting confirmation to escort. We may have a chance at success after all.”</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">97</p>`
const ch9p13 = ``
const ch9p13mobile = ``
const ch9p14 = ``
const ch9p14mobile = ``
const ch9p15 = ``
const ch9p15mobile = ``
const ch9p16 = ``
const ch9p16mobile = ``
const ch9p17 = ``
const ch9p17mobile = ``
const ch9p18 = ``
const ch9p18mobile = ``
const ch9 = [ch9p1, ch9p2, ch9p3, ch9p4, ch9p5, ch9p6, ch9p7, ch9p8, ch9p9, ch9p10, ch9p11, ch9p12, ch9p13, ch9p14, ch9p15, ch9p16, ch9p17, ch9p18]
const ch9mobile = [ch9p1mobile, ch9p2mobile, ch9p3mobile, ch9p4mobile, ch9p5mobile, ch9p6mobile, ch9p7mobile, ch9p8mobile, ch9p9mobile, ch9p10mobile, ch9p11mobile, ch9p12mobile, ch9p13mobile, ch9p14mobile, ch9p15mobile, ch9p16mobile, ch9p17mobile, ch9p18mobile]

const ch10p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 10</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“I need you to do some serious explaining.”</p>
<p id="indent">“There’s no time, kid. We have to get back to the ship.”</p>
<p id="indent">“I suggest you better make time, pal.” I level my stolen pistol to his chest, holding it in both hands, choosing to ignore the fact that I am heavily outgunned at the moment. “And I’m incredibly tired of being called ‘kid.’” </p>
<p id="indent">His expression hardly changes as he lets out a sigh.</p>
<p id="indent">“I am part of the S-Platoon, a secret militia that has been preparing for the events of today for a very long time. My boss heard about you down the grapevine, specifically about your skills and talents, and wants to recruit you.”</p>
<p id="page-end">97</p>`
const ch10p2 = `<p id="page-start"> </p>
<p id="indent">“Wait, your boss wants to hire me? Who’s your boss? Who are these other guys? What exactly is happening right now?”</p>
<p id="indent">“World War III, essentially,” he replies, taking aim at a cluster of the brown-coated men. “Those are a skilled group of Hitler’s Nazis, here because they wanted the tech that was on this island. It’s also half of the reason we’re here on this island as well.”</p>
<p id="indent">“Like, the Plasmarizer?”</p>
<p id="indent">“Precisely like the Plasmarizer. We know you disposed of it the first time, but rumor was they were working on building a second one.”</p>
<p id="indent">“I disposed of that one too, actually,” I say. “Let’s just say I wasn’t comfortable with the idea of these guys having weapons that powerful.”</p>
<p id="indent">The man stares at me for a good portion of time, and I can’t tell if he’s upset or shocked. With any luck, it’s the latter.</p>
<p id="indent">“Well, I guess that means the rest of the mission here is called off, then,” he says, relaying the information with his communication device. “I guess you <em>do</em> have some gusto to you. The name’s Alexander Cho. I’m the S-Platoon’s leader and your personal chauffer to the boss.”</p>
<p id="indent">“You never did tell me who the boss is.”</p>
<p id="indent">“Not really my place to tell, but he is simply referred to as ‘S.’ It’s a sort of branding push from what I can tell, but I’m not sure who he’s trying to brand himself to, seeing as we stay secret for a reason. Now, tell me, Luna, is that enough for you? Are you ready to get away from this god-forsaken battlefield?”</p>
<p id="indent">The thought lingered in my head. In a few short days, I’ve gone from homeless girl earning pennies a day to slave for an authoritarian meathead, and now I’m being <em>offered</em> to go somewhere else with absolutely no guarantee as to how survivable it will be.</p>
<p id="page-end">98</p>`
const ch10p3 = `<p id="page-start"> </p>
<p id="indent">A few bullets land in the grass nearby, kicking up dirt onto my already disastrously messy outfit. “Yeah, I think I’m ready to go.”</p>
<p id="indent">“Solid choice, I’d say.”</p>
<p id="indent">He says a few words into his wrist device to his men and beckons me forward, clearing a way through the muddy, bloody battlefield. The battle hadn’t started that long ago, but it’s wrapping up down here on the ground. Some airships are still up in the air, but none of the Slaphand-Bijabers floating machines are going to last much longer.</p>
<p id="indent">“Will your boss be able to help me get my friend back?”</p>
<p id="indent">“Is that the cat?”</p>
<p id="indent">“Wait, how do you know about Freckles?”</p>
<p id="indent">“No doubt, that is something that you will have to talk about with S. He is very excited to add you to the team.”</p>
<p id="indent">“Well, that’s good, I guess.”</p>
<p id="indent">For being the head of the S-Platoon, whatever that is, Alexander sure doesn’t seem to know a lot about what’s going on in his boss’ brain. Realistically, I have no clue what to do with that information, but maybe that’ll come in handy later.</p>
<p id="indent">Once again, I’m plotting and planning just in case I need to escape from another set of overbearing, awful people who are attempting to exploit and kill me for their own good. The S-Platoon is the group killing the Nazis and slavers. Surely, that makes them the good guys. Or, at least, better than the bad guys.</p>
<p id="indent">I keep saying that. Maybe this time it will turn out true.</p>
<p id="indent">A ship in front of us starts to lower, offering us a way out. The bad guys on the ground, catching wind of the situation, search around for their new target. To our left, the fascist brigade locks on, and on the </p>
<p id="page-end">99</p>`
const ch10p4 = `<p id="page-start"> </p>
<p id="no-indent">right, the mob boss’ goons use the break in fighting to recuperate and try to catch an upper hand.</p>
<p id="indent">Here, in the middle, is Alexander Cho, a dozen or so S-Platoon fighters, and me, struggling to fight back a panic attack.</p>
<p id="indent">All focus directs back to the landing ship when loud mechanisms creak and whir, opening six spots along the hull about as wide as a soccer ball, three on each side of a slowly descending drawbridge-like door. Then, without warning, rockets and bullets spray outward into the two opposing crowds, blasting and hammering them to smithereens. </p>
<p id="indent">To say it’s gruesome would be putting it lightly. It’s more than I can bear to stand.</p>
<p id="indent">On cue, I feel my knees get weak, and my stomach flips. The semi-edible slob I’d had for dinner gets thrown up, and I can feel my whole body burning. The S-Platoon finishes off what’s left of the opposing parties while I stay down on the ground, getting it all out of my system.</p>
<p id="indent">This is <em>so</em> far from what I imagined tonight was going to be like.</p>
<p id="indent">“Come on, Luna, it’s time to go,” Alexander says, offering me a hand. After making sure there’s no threat of another round, I take it and hoist myself up. </p>
<p id="indent">“No shame in a weak stomach at the sight of something like that,” he says in a poor attempt to reassure me. I’m not sure why he feels obligated.</p>
<p id="indent">“I don’t think that counts as a weak stomach. I think that counts as a <em>normal</em> stomach.”</p>
<p id="indent">He laughs, which is slightly off-putting, given the scenario. “I suppose that’s fair. Let’s get onto the ship.”</p>
<p id="indent">The violent leader of the S-Platoon, trying as hard as he can to be </p>
<p id="page-end">100</p>`
const ch10p5 = `<p id="page-start"> </p>
<p id="no-indent">cordial, motions to the large airship again. I can tell his movements and courtesies are forced. Why is he going through all the trouble to make it seem like he’s being genuine? What am I getting myself into this time?</p>
<p id="indent">Brushing the suspicion away, I follow him into the hull of the mechanical beast. I can’t even comprehend how massive it is at first. The ceiling is maybe twelve feet high, which somehow still gives enough space in the ship for two or three inner levels. The walls and floors consist almost entirely of some sort of coated wood, likely meant to make it fire resistant.</p>
<p id="indent">“Welcome aboard the <em>Lateral</em>, Luna. This is one of the best ships my boss has to transport us back to base. Please make yourself at home in one of these boardrooms. Our trip won’t be too long.”</p>
<p id="indent">“Where’s the base?” I ask, eyes still taking in the marvel of technology.</p>
<p id="indent">“At an undisclosed location in Carmsborough. You’ll find out if you accept his job offer.”</p>
<p id="indent">“What happens if I don’t accept the job offer?”</p>
<p id="indent">He stops and appears to think about the question for a moment. “I’m not entirely sure. I think the boss is all-in on you accepting the offer, though. After all, you want to get your friend back, the cat.”</p>
<p id="indent">The idea of getting him back resonates with me, and I walk into the nearest boardroom in the hallway. Inside is a simple bed and dresser, with no other extra decorations or furniture items.</p>
<p id="indent">The bed, all too alluring, immediately grabs my attention, and I go to sit down.</p>
<p id="indent">I remember the last time I had the chance to lie down in a bed. It was the last night before I was kicked out of my apartment, and I was </p>
<p id="page-end">101</p>`
const ch10p6 = `<p id="page-start"> </p>
<p id="no-indent">none the wiser. In my mind, there was no wondering where I would find my next meal, no worrying about being attacked on street corners and in back alleys. </p>
<p id="indent">Exhaustion catches up with me within a few minutes of being in the room, and with the prospect of an honest-to-God bed right in front of me, there’s no twisting my arm to get some rest. I hit the bed, and almost instantly, I’m down for the count.</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">I wake up an undetermined amount of time later to the sound of knocking on the door. Like earlier this morning, my fight-or-flight response kicks in, and I bolt upright, only to ease down from the sudden burst of adrenaline.</p>
<p id="indent">I’m safe, and I just slept in a bed for the first time in years. The things we take for granted. I slowly drag myself out of bed and to the door.</p>
<p id="indent">“Who is it?” </p>
<p id="indent">“This is Leader Cho again, Luna. We’ve arrived at the base, and will be deboarding in a few minutes. I’ve had my men prepare you an outfit, which they’ve placed in the lounge down the hall. Feel free to switch out of what you’re currently wearing, mostly for your own safety.”</p>
<p id="indent">“For my own safety? Are you guys gonna shoot me?”</p>
<p id="indent">“Not if we know who it is,” he replies, walking away from the door. </p>
<p id="indent">With that, I leave the room and head down the hall in search of the lounge. It’s a large room, and impressively decorated, but there’s no time to look at all the chairs and tables or the piano in the corner. I spot the clothes on a couch, grab them, and retreat back to the boardroom. Like the others on the ship, the outfit laid out for me is a crisp, clean white. </p>
<p id="page-end">102</p>`
const ch10p7 = `<p id="page-start"> </p>
<p id="indent">After getting dressed, I make my way back to where we boarded back on the island. </p>
<p id="indent">“Ready to see the big man himself?” Alexander Cho asks, also having changed from the all-white battle suit. His current outfit is more akin to a military general’s garb, and the rest of him gives off the same aura. </p>
<p id="indent">With the battle suit gone and a light shining down on us, it’s easier to describe him better. He has to be about fifty years old, if his deep, onset wrinkles have anything to say. His beard is short and scruffy and mostly white, and his tanned hands tell years of stories, including one of marriage.</p>
<p id="indent">“Hello? Earth to Luna?”</p>
<p id="indent">“Yeah, sorry, spaced out for a second.”</p>
<p id="indent">“I get it. Observing and detailing every detail you can. No doubt a survival mechanism you’ve picked up from years of being on the move.”</p>
<p id="indent">“Never really thought of it that way.”</p>
<p id="indent">“We all discover ways to cope and stay alive. Sometimes, we don’t even notice we do it. We’re going straight to see the boss, getting some lunch, and then, depending on your answer, figuring out what the next steps are.”</p>
<p id="indent">“Wait, lunch? How long was I asleep?”</p>
<p id="indent">“It’s nearly half-past-ten now, so about six hours. I’m honestly surprised you slept through the skirmish we had a couple of hours ago with a Nazi airship.”</p>
<p id="indent">A voice on the speakers announces our landing, and the two of us stand in front of the opening hatch in the hull of the ship. </p>
<p id="indent">“You sure are hyping boss man up big time,” I say to Cho as we walked down the sloped exit. The surrounding ground is rocky, and a </p>
<p id="page-end">103</p>`
const ch10p8 = `<p id="page-start"> </p>
<p id="no-indent">short look up into the horizon provides my reasoning. In the near distance, the tall range of the Golem Mountains that runs directly through the heart of Carmsborough looms over us. Seeing as the country’s not sitting on the intersection of two tectonic plates, you could say scientists are more than baffled at their formation. </p>
<p id="indent">I just think they look neat. Who cares where they came from?</p>
<p id="indent">“Majestic, aren’t they?” Cho comments, staring off at the tallest in the range. “The tallest, Mount Dovi, is over there. She stands at barely above twenty-five thousand feet, although I’m not exactly sure how they’ve measured that. It’s not like you can take one big tape measure.” </p>
<p id="indent">“Do you think anyone’s ever tried climbing it?”</p>
<p id="indent">“Oh, for sure, but nobody’s succeeded without the use of an airship. It’s far too difficult to even reach, surrounded by all the mountains like it is. Some claim it holds some sort of treasure in its core, but we may never know. Anyway, the boss is in the short building directly in front of us. I’ll leave you to have a conversation with him.”</p>
<p id="indent">For being the base of such a strangely well-equipped militia as the S-Platoon, it’s oddly… backwards. The roads are all gravelly and uneven, the buildings seem like they would blow away with one bad windstorm, and people are wandering around almost aimlessly. It’s obvious the boss’ building has the most upkeep in the area.</p>
<p id="indent">I walk to the building, small rocks crunching under my new white sneakers received from the couch, already slightly dusty from the ground. Before I get the chance to knock, the door swings wide open, and I’m met by a man only slightly taller than me. </p>
<p id="indent">“It’s about time I meet the woman of the year!” he bellows, grabbing onto my shoulder. “Oh, the things I’ve seen and heard. Destroying </p>
<p id="page-end">104</p>`
const ch10p9 = `<p id="page-start"> </p>
<p id="no-indent">Bijabers’ Plasmarizer not once, but twice? The audacity! The guffaw!”</p>
<p id="indent">“You wouldn’t happen to be the boss by any chance, would you?” I ask the overzealous man, leading me somewhere deeper into the structure. </p>
<p id="indent">“Oh, quick to catch on, too! You would make a fantastic addition to my team, if you so choose. I am S, but you may call me ‘the boss’ if it’s easier. Then again, one is a one-syllable letter, and the other is a title, but I’m certainly not one to judge. Please, Luna, have a seat.”</p>
<p id="indent">The boss extends his arm out and motions to a seat in front of an official-looking desk. Sitting on the desk is a globe, a topographic map of Carmsborough, and three different stacks of paper. The man’s clearly busy, to say the least.</p>
<p id="indent">I take the seat, and he sits opposite me on his side of the desk. </p>
<p id="indent">“I do hope Platoon Leader Cho wasn’t too rough in trying to acquire you for our cause. The man’s not really a people-person, and his decades of military experience are usually his only character trait.”</p>
<p id="indent">“He tried his best, I think,” I say, managing an uncomfortable smile. Like Alexander Cho before, the man in front of me is overexcited. To his credit, though, he seems genuine. Despite this, there’s a forcefulness to his nature. He has a commanding voice and stature, and no doubt can be fearsome when needed.</p>
<p id="indent">“I love to hear that. Well, Luna, I know more about you than you are probably comfortable with, so I think it’s time to tell you a bit about me. I am the boss of this militia group. We are a secret organization hidden within Carmsborough, looking to ensure the safety and wellbeing of all we can. </p>
<p id="indent">“Unfortunately, there is a lot happening right now, and we have quite </p>
<p id="page-end">105</p>`
const ch10p10 = `<p id="page-start"> </p>
<p id="no-indent">a few enemies. You’ve met Bijabers and Slaphand, the two heads of an international crime syndicate bent on turning Carmsborough into their home. You’ve also had a run-in with the Nazis, it seems, which isn’t necessarily a new development, but we were shocked to find out they’ve started World War III as of this morning. Not a fun group of people, that lot.”</p>
<p id="indent">“That’s an understatement.”</p>
<p id="indent">“For sure. Now, unlike most, we are also against Orion and the Clockwork. It would be fair for you to be shocked or repulsed by that information, but please implore me in telling you why.”</p>
<p id="indent">“I think I have a good idea why,” I say. “I’ve never seen them help a single soul that genuinely needs saving. Why hadn’t they ever tried helping at whatever slave island Slaphand I was at?”</p>
<p id="indent">“There’s a strange bias that Orion and the Clockwork appear to operate off of. You see, Orion and the Clockwork tend to solely help those in power or who have money, rather than those that actually need saving. Those like you, who were homeless for years, struggling to get by on your own. Or, like you recently had the displeasure of experiencing, those that suffer at the hands of Bijabers and his crew. Are they working together? Perhaps, but that’s a theory for another day.”</p>
<p id="indent">“So, you’re essentially a political figure trying to clean things up?”</p>
<p id="indent">“In a way, I suppose, although politics is corrupt and moves too slowly for real change to help real people like you. We take direct action. This is why I’ve brought you here, Luna. You’re not afraid of direct action. It’s all you’ve known, and you’ve become exceptionally effective in getting what you need. Therefore, I would like to offer you a job.”</p>
<p id="indent">“You want me to be part of your S-Platoon?” I’m not even sure if I </p>
<p id="page-end">106</p>`
const ch10p11 = `<p id="page-start"> </p>
<p id="no-indent">could entertain the idea. Being told what to do isn’t exactly my style.</p>
<p id="indent">“Absolutely not. That group of ruffians would bore you, I fear, and it would get you no closer to your inevitable goal of getting Freckles back safe and sound.”</p>
<p id="indent">My heart skips a beat. “I’m listening.”</p>
<p id="indent">“If you were to join my team, you would have a special mission: hunting down and killing Slaphand, and retrieving your pet.”</p>
<p id="indent">“You’re lying. What’s the catch?”</p>
<p id="indent">“The only catch is that when you’ve completed the mission, you’re free to do your own thing until I call you back for another mission. It could be a week, or it could be a year. There’s no telling when I’ll require your expertise, and if you do well, you’ll be compensated well.”</p>
<p id="indent">I almost can’t believe it. A chance at revenge, a chance at <em>real</em> compensation, a chance of freedom, and, most importantly, a chance to get Freckles back. All with the agreement to occasionally come back and work for him again.</p>
<p id="indent">“I understand how hard this is to take in all at once, so if you’d like time to sit down and—”</p>
<p id="indent">“I accept.” I hold my hand out, ready to shake his. He smiles as if he expected me to reply that quickly and takes my hand. </p>
<p id="indent">It’s time I got my best friend back. </p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">107</p>`
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
<p id="no-indent">I walk out into the crisp air of the Golem Mountains, the sun hanging high in the sky. There’s a briskness to the breeze that I didn’t notice earlier, and the tall grass that stretches all the way to the base of the mountains is waving rhythmically with the wind. Though there are no birds in sight, my mind fills the void left in their absence with the sound of chirping.</p>
<p id="indent">I haven’t felt this carelessly free in a long time.</p>
<p id="indent">Sure, it won’t last long. We still have some job details to work out, as well as a possible training course that the boss man wants me to do, but for now, a weight is lifted off of my shoulders. I have a guaranteed roof over my head, readily available food that is actually edible, and a </p>
<p id="page-end">109</p>`
const ch11p2 = `<p id="page-start"> </p>
<p id="no-indent">bed to sleep in.</p>
<p id="indent">It’s strangely calming. Maybe even exciting, despite not having my best friend to share the experience with. Still, I can’t help but feel I’m forgetting something.</p>
<p id="indent">But what? It’s not like I’ve got any physical possessions. The things that I do own are still up in the abandoned apartment complex I’d taken up residence in, so long as nobody’s looted the place.</p>
<p id="indent">Not that it matters anymore. Money’s no longer an issue for me. I don’t have to work for Cheapskate Chad at the scrapyard, or bargain for extra change with Shady Shane, or worry about being jumped in an alley by other homeless people.</p>
<p id="indent">Still, why do I have this looming fear that something’s missing?</p>
<p id="indent">“Alright, Luna,” S says, stepping out of his building, “let’s get some lunch, do a basic run-through of the mission, hash out some details and information you’ll need, show you to the sleeping quarters, and set up some one-on-one times with your new trainer.”</p>
<p id="indent">“With all due respect, sir,” I start, joining in next to him as he walks towards what I assume is the cafeteria, “I want to knock Slaphand out right away. I don’t know how much time Freckles has before he’s destroyed by the mob boss.”</p>
<p id="indent">He seems to ponder the idea for a moment, silently leading me to our first stop of the day: lunch. “I understand. I can’t imagine what it’s like to be missing a friend like that. We could arrange a delayed training course, but it’s not something I’d recommend.”</p>
<p id="indent">“Why’s that?” We grab trays and load food up. In contrast to the dismal atmosphere on Slaphand’s island, the boss’ base is alive with positive energy. The only other place I’ve seen this many smiles is on a </p>
<p id="page-end">110</p>`
const ch11p3 = `<p id="page-start"> </p>
<p id="no-indent">billboard for a dentist’s office.</p>
<p id="indent">“To put it bluntly, you’re self-taught and sloppy. Don’t get me wrong, you’re skilled and efficient, but against someone as prominent as Slaphand, unless you can outwit him, you’re as good as dead.”</p>
<p id="indent">The short man sits at a populated table, making sure to leave an empty spot for me, and is immediately thrown into pleasant conversations with those already seated. </p>
<p id="indent">“Ladies and gentlemen, allow me to introduce you to Luna, the new assassin who has her sights set on Slaphand.” He motions to me and smiles, and the table erupts into a noisy mixture of clapping, cheering, and laughing.</p>
<p id="indent">“That’s her, boss?” one asks. “I was expecting, I don’t know, an adult. Not just some kid.”</p>
<p id="indent">“I think you’ll find she’s more than ‘some kid,’ Dane,” S replies. “Fortunately, she has nothing to prove to you, so I’ll let you be pleasantly surprised when she has the job done within a week.”</p>
<p id="indent">I nearly choke on the mashed potatoes I’ve loaded my plate with. “You really think I can get this done in a week?”</p>
<p id="indent">“Oh, for sure. After all, there aren’t many places to hide a man like him in Carmsborough. I’ll honestly be surprised if he doesn’t accidentally reveal himself before you’ve even had the chance to do it yourself.”</p>
<p id="indent">“Okay, so what’s the plan, then? Realistically, I shouldn’t wait it out like that.”</p>
<p id="indent">“True. Unfortunately, we don’t know where his base of operations is inside of mainland Carmsborough. We know of some hotspot locations that Bijabers’ team works out of, but for the most part, those have all been scouted and raided for intelligence.”</p>
<p id="page-end">111</p>`
const ch11p4 = `<p id="page-start"> </p>
<p id="indent">“So, not a lot of options on that front, then.”</p>
<p id="indent">“We’re starting with basically zero information on the ‘where’ portion of the mission. The ‘how’ is another story. You’ll need to gather intel from our informants, although we don’t have very many that are reliable. From there, we may be able to gauge the ‘when’ and the ‘where,’ but also the ‘how many’ for his number of goons.”</p>
<p id="indent">“Actually, I might have someone I can use as an informant, although reluctantly.” I think back to Shady Shane’s paranoid rant about Bijabers and his goons. He knew about the ‘B’ logo, so what else could he know?</p>
<p id="indent">“Reluctantly?”</p>
<p id="indent">“I think he has schizophrenia. He’s a good guy, though.”</p>
<p id="indent">“Well, if you’re comfortable with the idea, he can be on the list. Otherwise, I’ll get a list of informants rounded up for you to hunt down and get info out of. From there, you’ll plan your entry and attack.”</p>
<p id="indent">“Sounds all good and smart to me.”</p>
<p id="indent">“Are you sure you don’t want training? Not even for a day?”</p>
<p id="indent">“Every day Freckles isn’t by my side is another day I might never see him again. I know it’s a smart idea, but I can’t risk it.”</p>
<p id="indent">“At least you’ve got your head in the right place. Still, I think it’s best if you wait until early tomorrow morning to head out so that there’s plenty of daylight for you to work with.”</p>
<p id="indent">“I’m fine with that, I guess. Gives me time to breathe.”</p>
<p id="indent">“Which you need, no doubt. I imagine the past few days have been pretty nonstop for you.”</p>
<p id="indent">“Something like that.”</p>
<p id="indent">We sit in silence for the rest of our lunch, allowing me to soak in as much as I can. Though he seems to be more of a laid-back person, I can </p>
<p id="page-end">112</p>`
const ch11p5 = `<p id="page-start"> </p>
<p id="no-indent">sense much more under the surface of the man known as “S.” He’s got deep layers to him, and so far, the only two he’s been willing to display is outgoing, down-to-earth boss and strategy-oriented schemer. Maybe it’s just me projecting, but I feel like there’s a more sinister side to the man sitting next to me.</p>
<p id="indent">Even so, he’s giving me food, a bed, and a purpose, as well as the chance to save my cat. Life is all about finding the lesser evil, and I think I’ve finally done it.</p>
<p id="indent">Wait. Oh my God.</p>
<p id="indent">“I can’t believe I forgot about Mary!” I stand up suddenly, my heartstrings tugging hard in my chest.</p>
<p id="indent">“What’s that?”</p>
<p id="indent">“All morning, I’ve felt like I’ve been forgetting something. But it was a someone, and that someone is Mary. She was an old lady on the island and the one who pretty much got me through everything. I left her to die under a crumbled part of the living quarters and told her I was going to go get help. I lied to her, and now she might be dead.”</p>
<p id="indent">“That is… a lot to take in,” S says, grimacing. “I can have one of my men still on the island check in and get her status, if you want.”</p>
<p id="indent">“That’s not enough. I want to go down and see her for myself, if possible.”</p>
<p id="indent">My first test of his authority. How willing is he to let me get what I want? How important am I really to his plan?</p>
<p id="indent">Once again, he thinks about my request for a good while, a blank expression on his face. </p>
<p id="indent">“If you head out within the next hour, you can do a round trip and be back here by three in the morning,” he thinks aloud. “But you’ll need </p>
<p id="page-end">113</p>`
const ch11p6 = `<p id="page-start"> </p>
<p id="no-indent">to get some rest on the way back, and head out almost as soon as you return.”</p>
<p id="indent">“I can handle that.”</p>
<p id="indent">The boss lifts his wrist and reveals the same sort of technology that Platoon Leader Cho had. “Cho, get the <em>Lateral</em> prepared for launch again. You’ll be taking Luna back to Blood Moon Island in search of one of her friends, and making a return trip shortly after that.”</p>
<p id="indent">“Roger that, boss,” Cho’s voice cracks back a few seconds later.</p>
<p id="indent">S looks up and smiles at me. “Go find your friend. I hope for good news, for Slaphand’s sake.”</p>
<p id="indent">“Oh, trust me, he’s getting a beatdown either way.”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Within fifteen minutes, I’m back on the <em>Lateral</em>, heading back to Slaphand’s island, appropriately titled Blood Moon Island. </p>
<p id="indent">The six-hour trip feels doubly as long as I sit in the cockpit, my leg bouncing up and down rapidly. The idea of a relaxing day away from anxiety and near-death experiences evaporated with the relaunching of the airship.</p>
<p id="indent">In contrast to earlier, Cho is no longer forcing himself to be cordial with me. The two of us sit in silence behind the pilot and copilot for the entire ride, occasionally bringing up a short topic. His demeanor change is off-putting, to say the least.</p>
<p id="indent">Six grueling hours later, the <em>Lateral</em> finally begins its descent to the war-torn island. The sun is barely peeking over the horizon at this point, but I can still see the damage done. Equal parts exposed dirt and grass litter the ground, all lightly covered in a layer of snow. Four rows of </p>
<p id="page-end">114</p>`
const ch11p7 = `<p id="page-start"> </p>
<p id="no-indent">bodies line the length of the flat expanse, occasionally adjusting around the dormant quarries.</p>
<p id="indent">There’s a row for each group of people that were on the island–guards, prisoners, Nazis, and S-Platoon members. Though I can’t make out how many are in each category from up here, it’s clear that there are significantly fewer S-Platoon members lined up than any other group, and significantly more prisoners.</p>
<p id="indent">That doesn’t speak well for Mary’s odds.</p>
<p id="indent">I push the thought away immediately. Mary’s alive down there. She has to be.</p>
<p id="indent">The ship comes to a stop on the ground with a thud, and the pilot announces our arrival. </p>
<p id="indent">“Has your stomach gotten any better than earlier?” Alexander Cho asks, standing next to me at the hull entrance.</p>
<p id="indent">“I doubt it.” </p>
<p id="indent">The hull opens up, and the first of my senses to react to the landscape is my nose. The smell of death lingers over the island, and it’s already almost too much to bear. Still, I press on, hunting for one of the remaining S-Platoon soldiers to fill me in on the situation.</p>
<p id="indent">“Private Donner,” Cho says to a nearby soldier, “can you give us a status report on the survivors of the attack?”</p>
<p id="indent">“It’s slow-going getting all the rubble cleared out,” the private replies, “but so far, we’ve found two survivors.”</p>
<p id="indent">“Who were they?” I ask, a heavy feeling of dread weighing down on me. “Were either of them Mary?”</p>
<p id="indent">“No, not that I know of. They both had yellow jumpsuits on. Said they were Lana and Renet, I think.”</p>
<p id="page-end">115</p>`
const ch11p8 = `<p id="page-start"> </p>
<p id="indent">“What?!” How do those two get to survive?</p>
<p id="indent">“We’ll keep searching for a Mary if you’d like, but I recommend going to check the group of dead lined up over there.”</p>
<p id="indent">I almost can’t bring myself to move towards the bodies. How many faces am I gonna recognize? Hopefully none. Maybe Mary still hasn’t been dug out yet. And Arnold, too. He’s somewhere in a corner, hiding under a large pile of rubble, probably able to lift it by himself.</p>
<p id="indent">Cho leads the way to the rows, but instead of joining me in milling through the prisoners, he approaches the six dead S-Platoon members, all given plenty of space between each other and clearly handled with more respect than anyone else here.</p>
<p id="indent">I begin the depressing walk down the line of slaves. Does it even matter what I call them anymore? Slaves or prisoners? They’re dead. Lives taken by a cruel mob boss, then ended by a Nazi invasion. My heart hangs every time I pass a woman’s body, but beats again when I don’t recognize it.</p>
<p id="indent">I could see it coming a mile away, but eventually I reach Arnold’s body, still wearing the yellow Overseer jumpsuit. There were three bullet holes in his chest and stomach region. He no doubt went down fighting. The only other person who was semi-respectable to me on the island died protecting everyone else.</p>
<p id="indent">The more I travel down the line, the more hopeful I get. </p>
<p id="indent">Until I’m about two-thirds of the way done.</p>
<p id="indent">There, lying in front of me, is Mary. On top of what looks like a disfigured lower body, there’s a bullet hole straight through her forehead. </p>
<p id="indent">I crumple to the ground, speechless. Mary isn’t just dead–Mary was <em>killed</em>. Someone saw the old lady trapped under a pile of concrete and </p>
<p id="page-end">116</p>`
const ch11p9 = `<p id="page-start"> </p>
<p id="no-indent">decided she wasn’t suffering enough.</p>
<p id="indent">For the first time since my mother died, I start sobbing. It’s loud, it’s ugly, it’s heart wrenching, and it’s real. Mary, who I’d barely met a few days ago, meant a lot more to me than I was willing to mention. I let the one person who’d genuinely cared for me in a long time get killed.</p>
<p id="indent">Slaphand will pay for this. Bijabers will pay for this. The Nazis will pay for this.</p>
<p id="indent">Everyone will pay for this.</p>
<p id="indent">In the middle of my breakdown, Cho approaches me and quietly watches. I feel like a kid.</p>
<p id="indent">I am a kid. I am only a kid. A kid who shouldn’t have been put through any of this. No homelessness, no war, no slave labor, no traumatic loss, none of it. And yet here I am, suffering from one life-changing event after another.</p>
<p id="indent">Not anymore. I’m in control of my life now, thanks to S. </p>
<p id="indent">And I’ll see to it that those responsible get their fair dues.</p>
<p id="indent">I stand up and wipe the tears from my face, then turn to face Cho. “I’m ready to go back to base. It’s time I got started on getting rid of this bastard once and for all.”</p>
<p id="indent">He nods solemnly, and we walk back to the <em>Lateral</em>. The six-hour trip back to base proceeds in a different silence than before, and no small talk is exchanged. I don’t have it in me.</p>
<p id="indent">When we arrive back, the wind is no longer brisk–it’s icy. The grass isn’t moving rhythmically, it’s moving in a violent, disorganized fashion. The mountain range is no longer majestic, it’s imposing. The clear, open sky is a threat and a promise. One that I intend to take to heart.</p>
<p id="indent">The boss is waiting outside of his building, bundled up in warm </p>
<p id="page-end">117</p>`
const ch11p10 = `<p id="page-start"> </p>
<p id="no-indent">winter clothes, holding a set of keys in his right hand. As we approach, I can see a somber look on his face.</p>
<p id="indent">“I’ve heard the news. I’m terribly sorry, Luna. Why anyone would do such a thing is beyond me.”</p>
<p id="indent">“The sick and twisted rarely need an excuse to be so,” I reply.</p>
<p id="indent">“A wise saying, I’d say. Take whatever time you want to recuperate, but I’m holding the keys to your personal airship here, the A.S. <em>Constellation</em>. It’s nothing more than a rigged-out cloudship, but it’ll get the job done.”</p>
<p id="indent">I hold my hand out to receive the keys, and he drops them in my hand. We exchange a simple nod, and I make my way over to the gravelly shipyard where the <em>Lateral</em> landed moments ago. There, I spot the <em>Constellation</em>, my new ship, and board the main deck.</p>
<p id="indent">Without so much as another thought, I head to the lower deck, turn the engine on, and lift off from the ground. Using a built-in compass and the map sprawled across a table behind me, I set my sights for the Commerce District with an estimated arrival time of ten o’clock.</p>
<p id="indent">I think back to the conversation Freckles and I had aboard our hijacked airship a handful of days ago, where I talked about my dreams and ambitions. How I talked about becoming a pilot and exploring the world, or becoming a pirate that fights for justice.</p>
<p id="indent">It seems Luna the blood moon pirate will be making an appearance after all.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">118</p>`
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
<p id="no-indent">I take an understandably long time to fall asleep on my way to the Commerce District. Too many thoughts swirl around in my head, translating directly into my dreams, which become a catch-all for traumas and memories.</p>
<p id="indent">While fighting sleep, I look at my stock on board. Aside from the things I need to survive, like food and water, there are other ship supplies, like emergency fuel, ammunition for a cannon situated underneath the cockpit, and some sort of energy shield similar to the one Slaphand’s ship had.</p>
<p id="indent">I’m still not entirely sure how that works. There’s a shield manual sitting on the dashboard, as well as a button to turn it on and off, but </p>
<p id="page-end">119</p>`
const ch12p2 = `<p id="page-start"> </p>
<p id="no-indent">where did the technology even come from in the first place?</p>
<p id="indent">Aside from that, I was given a few extra suits, some cash, two knives, and two pistols, as well as a more primitive version of the wrist device that Cho and the boss have. There’s a manual for that as well, but the words were blurring together at three in the morning, so I set it down. That’ll be reading material for another time.</p>
<p id="indent">A good thirty minutes into the flight, I figured out how to set autopilot up and charted a course for the Commerce District docks closest to Shady Shane’s hideout. For being my second time flying, I’ve picked up on it quite quickly.</p>
<p id="indent">From there, I hunted down the twin-sized bed that marked my bedroom and wasted no time curling up under the heavy comforter. I couldn’t stop thinking about Mary and Freckles. I felt guilty sleeping in a bed knowing what had happened because I didn’t dig her out of the rubble. Eventually, exhaustion overruled guilt, and I drifted off into a restless slumber.</p>
<p id="indent">I woke up an hour ago, at eleven. So much for that early morning start the boss wanted. Though the allure to continue lying in bed was strong, I knew I had to get moving. A suit change and a light breakfast later, I’m standing on the deck of my ship, the sun hovering straight above me as I stare out at the coastline of Carmsborough.</p>
<p id="indent">That feels weird to say. <em>My ship</em>. The <em>Constellation</em> is genuinely one of the first things I’ve owned for myself in a long time, and it’s an entire frickin’ cloudship.</p>
<p id="indent">There’s a world in front of me to conquer. My first order of business is to find Shady Shane and milk him for all the information on Slaphand and Bijabers that he’s worth.</p>
<p id="page-end">120</p>`
const ch12p3 = `<p id="page-start"> </p>
<p id="indent">Knives and pistols sheathed in various pockets of my coat and pants, I hop off of my ship. My first steps back in urban Carmsborough don’t disappoint. A fierce wind batters my side, setting the mood for the gray winter day.</p>
<p id="indent">I don’t think I’ve ever been this bundled up in my life. I’m wearing a thick white parka, a white beanie and scarf, black jeans, and the cleats from the <em>Lateral</em>. While I don’t quite fit with the rest of the aristocracy of the Commerce District, I’m certainly not at the bottom of the food chain anymore. </p>
<p id="indent">I turn heads of the people I pass. It’s strange to think that I’m being noticed because I’m no longer poor and homeless. </p>
<p id="indent">It doesn’t take long to reach Shady Shane’s hiding place. He lives in a small tent city nestled in between the courtyard of four tall commercial buildings with some of the other homeless of the area, although it’s hardly by choice. This is one of the few safe havens left in the district, and it won’t be long until the police crack down on this one, too.</p>
<p id="indent">“Is Shane around here?” I call out, swerving through a small crowd of those down on their luck. Anyone else might’ve flinched or recoiled at being so close to them out of fear or disgust, but seeing as I was still in their ranks just a few days ago, I’m completely unaffected by their mannerisms.</p>
<p id="indent">“Who’s asking?” I hear Shane reply, stepping out of his tent. He’s not wearing any thick winter clothes, which probably means he hasn’t found any this year. At least he has something moderately warm on.</p>
<p id="indent">“It’s me, Luna,” I answer. “I was looking to get some information from you.”</p>
<p id="indent">“Luna? Where’d you get fancy new clothes from on such short </p>
<p id="page-end">121</p>`
const ch12p4 = `<p id="page-start"> </p>
<p id="no-indent">notice? Did that machine thing lead you to money? I was getting anxious about not hearing back from you, and I feared the worst. And where’s your cat?”</p>
<p id="indent">“Well, I hate to say it, Shane, but you were right to fear the worst. I ran into big trouble with Bijabers and Slaphand. They stole Freckles and forced me to do slave labor for a few days, before the war broke out and I was rescued by some militia group. In summary, I’ve been to Hell and back.”</p>
<p id="indent">“Wait, what war?” He gives me a wide-eyed stare.</p>
<p id="indent">“What do you mean? Haven’t you checked any of the display televisions in any of the storefronts? There’s a war. Nazis invaded like ten countries, including Carmsborough.”</p>
<p id="indent">“Oh my God, I knew there was gonna be an invasion soon.” I can see Shane slowly breaking down, his paranoia kicking into overtime. “How do I know you’re not a Nazi, Luna? Why else would they have let you live?”</p>
<p id="indent">“Calm down, Shane. They didn’t. Like I said, there was a militia group that saved me, and they’ve recruited me to assassinate Slaphand.”</p>
<p id="indent">He sits on the information for a minute. His mind is clearly racing.</p>
<p id="indent">“What militia group is it?”</p>
<p id="indent">“I’m not totally sure what they’re called, but they’re run by some guy named ‘S’ who wants to change things for the better in Carmsborough.”</p>
<p id="indent">“I’ve heard bad things about S, Luna. According to my sources, he’s not a good man.”</p>
<p id="indent">“With all due respect, Shane, I’m not sure there’s such a thing as a ‘good man.’ There are men that are less bad than others, but for the most part, the men with power rarely use it for good. Which is why I’m fully </p>
<p id="page-end">122</p>`
const ch12p5 = `<p id="page-start"> </p>
<p id="no-indent">on the S train. He wants to help me take down a dangerous man and get Freckles back in the process. When I’m done, Slaphand will never hurt another soul.”</p>
<p id="indent">“I can’t trust it, Luna.”</p>
<p id="indent">“I understand that, Shane. I’m not asking you to join me on my mission. I’m only wondering if you might know anything about where Bijabers or Slaphand are operating in Carmsborough.”</p>
<p id="indent">“Physical location? No. But stories get around, passed on from both their goons and their victims. It sounds like on top of loan companies and banks, they’re going more and more into real estate. Word is, Bijabers has heavy hands in the northwestern portion of the Housing District.”</p>
<p id="indent">“What kind of housing? Apartments or actual houses?”</p>
<p id="indent">“My guess is a little bit of both. You find one of the companies he’s running, you find him. If you’re looking to draw him out, he’s sure to get mad if you do some damage to his prospects.”</p>
<p id="indent">“Is that really all you have for me to go off of?”</p>
<p id="indent">“Unlike you, Luna, I like to stay away from the bad men with bad plans. It never does me any favors to get in the way of someone with a lot more power than me.”</p>
<p id="indent">“Alright. Thanks, Shane. Stay warm.”</p>
<p id="indent">“You know I won’t.”</p>
<p id="indent">I step out of the tent city and use my high-tech watch to relay the information back to the boss. </p>
<p id="indent">“I’ll keep my informants busy trying to get more intel,” S says, his voice crackling through a speaker on the face of the watch-like band. “They might know more about his schemes that will help you.”</p>
<p id="page-end">123</p>`
const ch12p6 = `<p id="page-start"> </p>
<p id="indent">“Roger that. I’ll keep my eyes and ears peeled for anything that might have to do with—”</p>
<p id="indent">Beside me, on the patchy asphalt roads of the Commerce District, a dark blue box truck with the label “B Realty” drives by, heading due west towards the Housing District.</p>
<p id="indent">“Hold that thought, Boss. I might have a lead already. I’ll keep you updated.”</p>
<p id="indent">I don’t wait for his response. With the box truck gaining ground on me, I sprint off in that direction, surprisingly fast considering my extra bundling and four weapons jangling around. It’s traveling on a main road, which is why it’s asphalt and not cobblestone, but that also means it’s pretty much a straight shot to the Housing District.</p>
<p id="indent">All I have to do is not lose sight of it, and pray there are enough stop lights to slow it down.</p>
<p id="indent">The first light turns red, but the box truck runs right through it, closely tailing the car in front of it. I’m given the crosswalk right of way and dart across the busy afternoon street of the district. I still have eyes on my target, but since I can’t run at twenty miles an hour, it’s getting some good distance on me.</p>
<p id="indent">Finally, another stop light turns red, and this time it’s too far back to run it. My lungs are beginning to feel sore, but now’s no time to stop. I know the crosswalk signs stay on for nearly a minute, which means I have one minute to run roughly a third of a mile.</p>
<p id="indent">That’s possible, right?</p>
<p id="indent">The answer, unsurprisingly, is no. I barely make it a third of a third of a mile before the light turns back to green, and it’s on its way again. It’s almost hopeless… unless…</p>
<p id="page-end">124</p>`
const ch12p7 = `<p id="page-start"> </p>
<p id="indent">I run up to a taxi and tap the passenger side window. The man inside rolls it down and gives me a nasty look.</p>
<p id="indent">“Excuse me, sir, I need to get down to the Housing District as fast as possible.”</p>
<p id="indent">“Why should I help you?”</p>
<p id="indent">“I’m willing to pay?”</p>
<p id="indent">“Yeah, but you’re a black kid, too, and one of ‘em trumps the other.”</p>
<p id="indent">Oh, yeah. The <em>other</em> reason people would stare at me. Pure racism at its finest.</p>
<p id="indent">Against his wishes, I get into the back passenger seat of his taxi and strap myself in. “Take me to the Housing District.”</p>
<p id="indent">“Hell no. Get out of my taxi.”</p>
<p id="indent">I whip one of the two pistols out and point it at the man. “I’m not gonna ask again, you racist old prune. You’re lucky I’m still gonna pay you for it.”</p>
<p id="indent">Overcome with fear, the man switches into gear. “Where at?”</p>
<p id="indent">“Just follow that blue box truck ahead of us up there. They’re doing something illegal, and I’m here to stop it.”</p>
<p id="indent">“<em>They're</em> doing something illegal? You’re the one who has the gun aimed at me!”</p>
<p id="indent">“Well, that’s because you’re racist. I don’t discriminate with who I classify as evil, and I don’t hesitate to shoot.”</p>
<p id="indent">It’s a lie, but it’s a lie that keeps him quiet. He doesn’t need to know that I’ve only fired a gun once, at the ground.</p>
<p id="indent">He picks up speed, swerving to avoid cars when he has the chance, and slowly but surely, we approach the B Realty box truck from behind. After a few minutes, the driver says, “We’ve entered into the Housing </p>
<p id="page-end">125</p>`
const ch12p8 = `<p id="page-start"> </p>
<p id="no-indent">District. How much farther do we need to follow this thing?”</p>
<p id="indent">“As far as we can go. I’ve gotta see what they’re up to.”</p>
<p id="indent">He lets out a worried sigh, but keeps his pace. Eventually, when the box truck makes a right turn up ahead onto a quieter cobblestone street, he joins them. If the box truck is suspicious of our taxi following just behind, it doesn’t show any signs. </p>
<p id="indent">Three minutes and two turns later, the B Realty truck stops in front of a newer looking apartment complex. The taxi driver’s shoulders relax, and he turns to face me. I put the gun back in its holster.</p>
<p id="indent">“Alright. Fare’s twenty bucks, but I’m adding another twenty for the emotional stress.”</p>
<p id="indent">“You’re lucky you’re getting twenty, pal. Don’t try to extort me.” I pull a twenty out of my coat and hand it over.</p>
<p id="indent">“It’s not extortion. You literally held a gun to my head.”</p>
<p id="indent">“Maybe if you weren’t racist, life would be easier for you, bud.”</p>
<p id="indent">I step out of his car and stretch inconspicuously on the sidewalk. Out of the box truck comes two men, each dressed exactly like the guards on Blood Moon Island. </p>
<p id="indent">My hunch paid off. Bijabers is running B Realty, and these two unfortunate souls are my way of getting in.</p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="story-break"></p>
<p id="page-end">126</p>`
const ch12p9 = ``
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
<p id="no-indent">Despite driving a moving truck, the two men never open their back storage area, and instead leave it running and make a beeline straight for the apartment complex. I stay back, waiting for them to disappear inside so that they don’t think I’m following them.</p>
<p id="indent">Now’s as good a time as any to update the boss, I suppose.</p>
<p id="indent">“Good news, sir,” I say, speaking into my watch. “I followed a box truck for a company called B Realty, and I’m almost certain they work for Bijabers. I’m gonna handle and interrogate the two men that came out of it to see what they know.”</p>
<p id="indent">“That’s fantastic, Luna. It hasn’t even been twenty-four hours, and you’re outperforming my expectations. At least, you will, as long as you </p>
<p id="page-end">127</p>`
const ch13p2 = `<p id="page-start"> </p>
<p id="no-indent">actually get information out of them. Chop, chop.”</p>
<p id="indent">Our connection ends, and I look back up at the entrance of the apartment complex. They’ve already gone inside.</p>
<p id="indent">I approach the door and try the handle, but it doesn’t budge. To my right, there’s a speaker device with a button. I press it and stand back, waiting for a response on the other end.</p>
<p id="indent">“Who is it?” A voice asks, deep and surly.</p>
<p id="indent">“Hey, I’m with the two that just walked in. I was a little bit behind, but I’m here now.”</p>
<p id="indent">The voice stays silent for an uncomfortable amount of time, but eventually, the man says back, “You’re with Tim and John?”</p>
<p id="indent">“I don’t remember their names. The boss man only put me on B Realty duty today. I’m really sorry about this.”</p>
<p id="indent">“And who’s the boss man?”</p>
<p id="indent">“Slaphand. Wants me to do some field training.”</p>
<p id="indent">Another long silence passes before the door unlocks with a loud click. “Come on in, rookie. Next time, don’t be late.”</p>
<p id="indent">“Of course. Thanks, man.”</p>
<p id="indent">With as naturally as the lies came out, it makes me wonder how practiced I’ve gotten at making things up to get what I need. Cho was right: we don’t even notice the ways we adapt to survive.</p>
<p id="indent">Once inside, the first thing I notice is the dramatic difference from the outside of the building. While the outside makes it appear pretty and upkept, the inside is in a considerably more dismal state. I don’t know why it surprises me as much as it does, seeing as it’s run by either Slaphand or Bijabers, but the place needs more than a repainting. The walls and stair railings look like they’re one bad day away from </p>
<p id="page-end">128</p>`
const ch13p3 = `<p id="page-start"> </p>
<p id="no-indent">crumbling.</p>
<p id="indent">My hunt for the two men continues, but it’s not a long one. Above me, on a higher floor, the scream of an old lady is followed by an expensive-sounding smashing noise. I bolt up the stairs as quick as my little legs can take me to the third floor, where I find a door left ajar.</p>
<p id="indent">A second scream calls out from the open apartment, and without another thought, I jump in through the doorway, fists up and ready. </p>
<p id="indent">“Come on, you geriatric flumpnugget, it’s eviction day.” The two men approach her aggressively, hands outstretched to grab her. She gives me a brief look, and in that moment, I make my presence known to her assailants.</p>
<p id="indent">“Why don’t you pick on someone in your own diaper category, you brainless goons?”</p>
<p id="indent">Yeah. That’s right. I’ll dish out the meaningless insults just as much as they will.</p>
<p id="indent">They turn to face me, confused by the woman trespassing during their housekeeping.</p>
<p id="indent">“Who the hell are you?” one asks, squaring up to face me instead of going after the lady.</p>
<p id="indent">“Hey, isn’t this that Luna kid the boss was talking about?” the other asks, pulling out a knife. “Says she destroyed the Plasmarizer twice.”</p>
<p id="indent">“And knocked out five of our boys back on the island.”</p>
<p id="indent">“The guys in your little operation do have a tendency to underestimate me,” I say, leaning against the wooden doorframe. “So, let’s be smart about this. If you leave this woman alone, I won’t knock your heads together and string precious information out of you.”</p>
<p id="indent">They trade a knowing stare, and the empty-handed one pulls out his </p>
<p id="page-end">129</p>`
const ch13p4 = `<p id="page-start"> </p>
<p id="no-indent">own knife. </p>
<p id="indent">“That’s alright, I was lying anyway. I wasn’t gonna let either of you walk out of here. Oh, and for one thing, don’t call me a kid.”</p>
<p id="indent">We charge at the same time, but for now, I don’t pull out either of my own knives. If I can keep them on their toes without using them, they might start making mistakes, and I’ll have the element of surprise when I do grab them.</p>
<p id="indent">The one to my left, who was the first to pull his blade out, is a smaller and easier target, so I focus my plan on him. I fake right towards the larger goon and dive down into the smaller one’s legs, sending him crashing to the floor. He drops his knife in shocked response, which clatters to the ground next to me. </p>
<p id="indent">That was easy.</p>
<p id="indent">Behind me, the other flips his knife to a better backstabbing position, but I roll forwards off of the other man, all of my weight pressing against his head. It’s not pleasant for either of us, but I don’t envy his position.</p>
<p id="indent">Utilizing the momentum of my roll, I launch back up on my feet and immediately spin to face the still-standing opponent. He clumsily rushes at me, but I dodge out of the way, and he goes gut-first into the woman’s table. I give her a sympathetic look, but she stares at the scene in shock, hardly paying me any attention.</p>
<p id="indent">Both men are back up and ready to fight, and this time, I’m in between them. They barrel towards me, and I duck underneath at the last second. Then, while still holding the stolen knife, I slash at the closest legs I can, sending the bigger man into a howl.</p>
<p id="indent">“You guys are hopeless,” I taunt, sweeping the second man’s legs out from under him using my own. With them both distracted, I motion </p>
<p id="page-end">130</p>`
const ch13p5 = `<p id="page-start"> </p>
<p id="no-indent">for the woman to open the window facing out to the front of the building. She does so, and I lob the knife out, which clatters against the cement sidewalk below. </p>
<p id="indent">The bigger one clenches his fists in a fit. “You’re gonna pay for that.”</p>
<p id="indent">“You’ve gotta catch me, first.”</p>
<p id="indent">I run out of the room and down the hallway, pivoting around the corner as if I’m about to go down the stairs. The flimsy railing surrounding the stairs is especially flimsy right now.</p>
<p id="indent">I hope this plan works.</p>
<p id="indent">I hear one of the two men stomping down the hall, and right as they get ready to round the corner, I stick my leg out like a cartoon character. They smash into my shin and topple over the railway, which creaks dangerously under the strain.</p>
<p id="indent">The crummy conditions inside of their own apartment are their undoing. The railing gives way, sending the larger man, whose legs are already cut, plummeting down to the second-floor stairway. He hits the steps with a loud thud, and his smaller friend looks down the broken railing at him.</p>
<p id="indent">He turns to me, angry, but loses all color in his face when he spots the gun in my hand.</p>
<p id="indent">“Like I said, don’t underestimate me, and don’t call me a kid.”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Ten minutes later, I have both of them tied up to the woman’s kitchen chairs. She’s cowering in a back corner of her dining room. Her frail little heart probably hasn’t seen this much action in years.</p>
<p id="indent">“I’m sorry about all this, by the way,” I say. “But these are the bad </p>
<p id="page-end">131</p>`
const ch13p6 = `<p id="page-start"> </p>
<p id="no-indent">guys, as I’m sure you’re aware. I hope you don’t mind me doing this.”</p>
<p id="indent">“I’m very conflicted right now.”</p>
<p id="indent">“I’m sure. All I’m doing is getting a little information out of them, and then we’ll call the cops and make sure they’re dealt with properly.”</p>
<p id="indent">“Yeah, you ain’t getting anywhere with the cops, kid.” The bigger one, fairing far worse than his smaller counterpart, still has a lot of gusto to him, despite being slashed and thrown down a flight of stairs. To prove a point, I wind up my fist and connect with the side of his mouth.</p>
<p id="indent">“Alright, goony boys, I need to know where Slaphand’s base of operations here in mainland Carmsborough is. I highly recommend you cooperate. I have plenty of fun toys to use if you don’t.”</p>
<p id="indent">“We won’t tell you anything.” </p>
<p id="indent">For what it’s worth, the larger man is defiant to the end.</p>
<p id="indent">His buddy, however, is not. “Please don’t do anything to us. I got a family back home. I gotta provide for them.”</p>
<p id="indent">“Well, isn’t that awful cute. Maybe you should’ve chosen a better career path, pal. One that doesn’t involve a crime organization and evicting helpless old ladies from their homes. Give me an address. Now.”</p>
<p id="indent">“Don’t do it, Josh,” the bigger one says.</p>
<p id="indent">Josh, the smaller one, seems to weigh his options. “You have to promise to let me go if I answer,” he says.</p>
<p id="indent">“Not a chance, Josh. You’ve done bad, and you’re gonna pay the legal price.”</p>
<p id="indent">“Hold out a little longer, Josh!”</p>
<p id="indent">“What’s that mean, big boy?” I level one of my guns at the man’s head. Hopefully he doesn’t notice my shaking.</p>
<p id="indent">I’m not sure I could shoot someone. Even now, I was shocked I </p>
<p id="page-end">132</p>`
const ch13p7 = `<p id="page-start"> </p>
<p id="no-indent">found the strength to slash at his legs. It’s not like he didn’t deserve it, and they came at me with knives beforehand, but still.</p>
<p id="indent">“It means you’re in trouble, kid. There are cameras in the hallway. As soon as you took the fight out there, you alerted the base. At this point, they’re almost here.”</p>
<p id="indent">I walk backwards out to the hallway, not removing my eyes from the two tied-up men, and glance at the ceiling. </p>
<p id="indent">A camera is pointing directly at me.</p>
<p id="indent">Foiled by another damn camera.</p>
<p id="indent">I reenter the room and peer out the window. If the big man’s not bluffing, they haven’t shown up yet.</p>
<p id="indent">“Fine, I’ll let you go, Josh. Give me the address. Now.”</p>
<p id="indent">“Josh, don’t you dare!”</p>
<p id="indent">A bead of sweat runs down his temple. He’s seriously considering it, but he needs to seriously consider it faster.</p>
<p id="indent">“She’s up on the third floor!” a voice calls out from down below us in the building. Sounds like the person who rang me in through the front door. I look out the window again, but there still aren’t any cars. They must be talking to some in-building guard.</p>
<p id="indent">Throwing all caution to the wind, I point my gun at Josh instead. “You have three seconds, Josh, or I’ll pull the trigger.”</p>
<p id="indent">His eyes widen, and he takes a big gulp.</p>
<p id="indent">“One.”</p>
<p id="indent">“Josh, if you tell her, I’ll pull the trigger on you myself.”</p>
<p id="indent">“Two.”</p>
<p id="indent">“Okay!” Josh yells. “1481 Magnolia Street down in the Commerce District! I don’t know his main location, but I know he comes to work </p>
<p id="page-end">133</p>`
const ch13p8 = `<p id="page-start"> </p>
<p id="no-indent">and visit us at our hub every now and then! It’s a big gray building with a cloudship loading dock hanging off the side!”</p>
<p id="indent">“Good decision, Josh,” I say, quickly pocketing the gun. I peek my head out of the apartment doorway and spot two guards coming down the hall, guns drawn.</p>
<p id="indent">“Right there!” one of them shouts, stating the obvious.</p>
<p id="indent">I’m not risking a gunfight against two people with an innocent bystander in the room. I need to escape somehow.</p>
<p id="indent">I peer out the still-open window. Just below the frame is a gutter, jutting out the side of the building enough to maybe hang off of. It’s not a solid plan, but it’s still a plan. At least it beats jumping three stories.</p>
<p id="indent">With careful steps, I get up on top of the windowsill and slowly lower myself off the edge, grabbing tightly onto the gutter. It shakes and creaks under my weight, but otherwise seems strong enough to hold me up. Above me in the apartment, I hear the yelling and voices of the men chasing me down.</p>
<p id="indent">On top of that, a welcoming party below me shows up in three unmarked black vans, two people each. I shimmy my way along the gutter, hoping to loop out of sight of the men, but there’s no way I’ll be fast enough to escape. There has to be a safer way to get to ground level.</p>
<p id="indent">To my left, someone’s balcony hangs about eight feet below me. It’s not very large, but it’s enough to land on without breaking a sweat. Or bones. I grapple my way over, hanging on for dear life to the rickety gutter. I can feel the metal threatening to cut into my knuckles, but I can’t let it stop me.</p>
<p id="indent">Two gunshots fire off, and the bullets land somewhere in my vicinity. I look back at the ground and see the six men out of their cars and </p>
<p id="page-end">134</p>`
const ch13p9 = `<p id="page-start"> </p>
<p id="no-indent">pointing pistols up at me. From above, the two guards are aiming out the window, though they won’t have as good of an angle to shoot at me so long as I keep moving. </p>
<p id="indent">Ducking and jumping with every blast of a gun, I continue my way over to the balcony, and get close enough that I decide to jump off towards it. I let go of the gutter and realize I vastly miscalculated how far away it is. My arms flail out, and my right hand grabs on to the metal railing of the balcony at the last second.</p>
<p id="indent">Another volley of gunshots is unleashed, and I can feel a massive percussive force hit my left foot. Or shoe. I’m not sure which. Either way, it sends my lower body careening forward, forcing my grip on the balcony to loosen. I plummet eight feet to the ground, landing square on my back. Somewhat luckily for me, it’s mostly cushioned by a series of smaller, softer bushes, but it doesn’t stop the pain.</p>
<p id="indent">Now on the ground and hiding behind the shrubbery, I realize how bad of a situation this is. I have no way out, and I’m surrounded by six to eight men with guns, depending on how you define the word “surrounded.” There’s no way out of this without using my own gun.</p>
<p id="indent">“Come out, kid!” one of them calls, clearly inching closer to my hiding spot. </p>
<p id="indent">“And what if I don’t?”</p>
<p id="indent">“I won’t hesitate to shoot.”</p>
<p id="indent">“You drive a hard bargain, sir.”</p>
<p id="indent">I slowly reach for the guns in my pockets, coming to terms with my predicament, when I hear the whistle of something flying through the sky towards us.</p>
<p id="indent">“Fall back, men! It’s Orion and the Clockwork!”</p>
<p id="page-end">135</p>`
const ch13p10 = `<p id="page-start"> </p>
<p id="indent">“What?!” one of them calls out. I pop my eyes out over the bush, and sure enough, the brass mass is soaring in our direction.</p>
<p id="indent">While they distract themselves by running to their own cars, I use the moment to bound out of the shrubbery and towards the still-idling B Realty box truck I’d followed to the complex. Thank goodness for other people’s irresponsibility.</p>
<p id="indent">I switch the truck into gear and drive away as best I can, seeing as I’ve never learned how to drive. It’s a jerky situation, to say the least. The unmarked cars follow suit, and behind them is Orion and the Clockwork, rapidly closing their distance from the cars.</p>
<p id="indent">If I have to fight Orion and the Clockwork, it’s the end of the line for me. Or, even worse, if I have to thank Orion and the Clockwork, I’ll end the line myself.</p>
<p id="indent">I step on the gas, giving myself a small head start on the posse of black sedans threatening to run me over. There’s a four-way stop sign dead ahead of me, but since I don’t see any cars waiting, I barrel right past it. The other cars do the same, but split off in opposite directions. One continues following me, but the other two turn left and right, probably trying to split Orion and the Clockwork’s attention.</p>
<p id="indent">Unbothered, the duo keeps pressing forward, directly behind the car currently tailing me.</p>
<p id="indent">The car takes a few hopeless shots back at Orion and the Clockwork, missing every time, before focusing back on me. They shoot dents into the back of the truck, but with the thick cargo hold attached to the back end, they don’t stand a chance of hurting me. </p>
<p id="indent">We blow through a second stop sign, as unpopulated as the last one, and quickly realize that the next intersection is a stop light with a busier </p>
<p id="page-end">136</p>`
const ch13p11 = `<p id="page-start"> </p>
<p id="no-indent">street. I hit the brakes a little harder than I mean to, and I feel the black car bump into me. Then, a loud metal scraping fills the air, and when I look back, the Clockwork has landed directly on top of the sedan, weighing it down so much it grinds against the ground and eventually comes to a stop. </p>
<p id="indent">Using the distraction, I prepare for the worst at this intersection, but the light turns green for me right at the perfect time. I make a hard right, sending the box truck swerving and swinging left and right. Maybe this way I can disappear into the traffic without having to worry about the other two cars or Orion and the Clockwork.</p>
<p id="indent">On either side of me, one of the two black cars pulls up to my section of the truck, pointing pistols at the window. </p>
<p id="indent">Spoke too soon on that front.</p>
<p id="indent">I hit the gas a little harder, lightly bumping the car in front of me. They honk before realizing what’s happening. The two cars unload on the box truck, spraying bullets into the cab, shattering the glass of both doors, but miraculously missing me.</p>
<p id="indent">The whistle of the Clockwork screams through the air again and they connect with the car on my right, smashing it into the ground without hesitation. </p>
<p id="indent">My heart is pounding. This is like a horror movie, where the monster picks them off one by one. And I could be next.</p>
<p id="indent">In yet another rash decision, I hit a hard left at the next street I find, sending random cars screeching to a stop and dodging out of the way. My stolen box truck funnels straight into a tight alleyway, scraping against the sides of the buildings and taking my mirrors clean off. I have no way of looking back to see if the other car is still following until I </p>
<p id="page-end">137</p>`
const ch13p12 = `<p id="page-start"> </p>
<p id="no-indent">emerge from the alley. A short glance shows they are, but it also shows Orion and the Clockwork hovering slightly above us.</p>
<p id="indent">I don’t know exactly where we are, but I know we’ve hit the Commerce District, and that’s enough for me. I swerve sharply into this road’s flow of traffic, and at the nearest light, go back down into another alleyway. This one’s a little wider than the last, with barely enough space for me to open my door and hop out of the truck.</p>
<p id="indent">Behind me, the last sedan rushes into the alley and smashes into the back of the box truck. They both lurch forward a bit, and I duck out of the way into an offshoot alley. Two doors slam shut, and I hear the men load their pistols.</p>
<p id="indent">“We’re in so much trouble, dude. Orion and the Clockwork are onto us, and we can’t even tie up this loose end. If the boss ever sees us again, he’ll kill us.”</p>
<p id="indent">I hide back behind a dumpster, shakily grabbing one of my guns. This time, I’m fully prepared to go down swinging.</p>
<p id="indent">A loud engine sound roars down the alley, and the two men start yelling and firing their weapons. The bullets make a metal pinging noise against what I assume is the Clockwork, who smacks them both against the sides of the buildings.</p>
<p id="indent">“I’m only going to ask once,” Orion says to the two men. “Who do you work for?”</p>
<p id="indent">“As if we’d tell a kid like you.”</p>
<p id="indent">“This kid has a lot more manpower and resources than you do. If you simply tell me, this’ll go a lot easier for you. Who are you, and who were you chasing across the city?”</p>
<p id="indent">“Just some kid,” they reply. “She’s been giving the boss some </p>
<p id="page-end">138</p>`
const ch13p13 = `<p id="page-start"> </p>
<p id="no-indent">trouble.”</p>
<p id="indent">“And who’s your boss?”</p>
<p id="indent">“We ain’t spilling.”</p>
<p id="indent">I get a small glance at Orion from behind the dumpster. He looks about average height and build, if not a little scrawny. His hair is brown and messy, and he’s wearing all black. His partner, the feared and respected Clockwork, is a large brass beast with powerful arms and legs and a furnace with eyes for a head.</p>
<p id="indent">It’s hard to believe the Gearmaster could create something like this and also something like Freckles. Truly a creative mind, at least.</p>
<p id="indent">While Orion tries to interrogate the two goons, I slowly and quietly sneak away out the alleyway exit. Then, once I hit the sidewalk, I run in every direction I can. The last thing I want is those two hunting me down. Hopefully they’ll stay busy long enough for me to get a good lead on them.</p>
<p id="indent">After fifteen minutes of running and adrenaline pumping, I decide I’m safe enough to stop worrying about the protectorate duo of Carmsborough. They have bigger fish to fry with Slaphand’s goons, as long as they don’t get to him before I do.</p>
<p id="indent">With the sun getting lower in the sky, I begin my hunt for the building Josh the goon was talking about, wandering the streets and intersections of the Commerce District. In an unfortunate turn of events, I find it two streets over from where the tent city Shady Shane lives in. The box truck must’ve been coming from their base here.</p>
<p id="indent">I walk down the sidewalks, which are now emptier than earlier, and finally spot the big gray building the goon was talking about. Off the left side of the building is a small cloudship loading dock, currently in use. I </p>
<p id="page-end">139</p>`
const ch13p14 = `<p id="page-start"> </p>
<p id="no-indent">head up to the front, hoping to put a name to the fake company Slaphand’s using to terrorize Carmsborough.</p>
<p id="indent">The sign out front reads “CB Moving Limited.” I drop my jaw in shock. All the strings in my heart snap like the bow of a violin being pressed too hard. My knees turn to jelly.</p>
<p id="indent">CB Moving Limited. The same company that evicted me out of my apartment when my mom died.</p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="page-end">140</p>`
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
<p id="indent">The walk back to the apartment was serene. Peaceful. Birds were singing their harmonious tunes, breathing life into the cobblestone landscape of inner-city Carmsborough. People young and old were sitting on the cement steps of their houses and apartments, singing, playing, knitting. Living.</p>
<p id="page-end">141</p>`
const ch14p2 =`<p id="page-start"> </p>
<p id="indent">A tune was stuck in my head. It was one of Giraffe’s most popular hits of the year, which the radio on our counter at home played nonstop. It became the background music of my trip home.</p>
<p id="indent">It was a Wednesday. I only remember that because my last class of the day was gym class, and we’d had a fun round of four-corner dodgeball that ended with the bell. I wouldn’t normally participate, but something was in the air. The spring air, which whistled through the stone alleys and along the tall buildings. Trees were in full bloom, their green hues as dark as ever. Bursting white clouds blanketed the sky, contrasting against the deep blue signature of the time of year. A cloudship here and there soared by.</p>
<p id="indent">I had a little hop to my step as I climbed the stairs of my apartment complex all the way to the fourth floor. They were tall and creaky, having been made before standardization, but I never minded. It was a healthy workout for my trip home.</p>
<p id="indent">I opened the door to our apartment and made my presence known. Though she was usually at work, Mom had some sort of appointment with her doctor that day, which meant a much-needed break was in store for her. I entered the living room and spotted her on the couch, using our coffee table as a desk to write on a piece of paper. Not paying her much attention, I moved to the kitchen to dig out an afternoon snack.</p>
<p id="indent">“You’re never gonna believe it, Mom, but we got the highest score on the project out of the entire class. Mrs. Westernight was impressed. Thanks for staying up all night to work with me on it. You really didn’t have to.”</p>
<p id="indent">I snagged an apple from our fruit bowl and turned to our small pantry for dinner ideas. “Had fun in gym today, too. We played more </p>
<p id="page-end">142</p>`
const ch14p3 =`<p id="page-start"> </p>
<p id="indent">dodgeball, and I did as good as usual. But I tried today, and honestly, that’s asking a lot. We also read <em>Of Mice and Men</em> in English, which wasn’t as great, but next week we’re beginning our poetry unit.”</p>
<p id="indent">Mom hadn’t responded to any of my conversation, so I assumed whatever she was writing had something to do with work. It seemed like every couple of days she would bring her suitcase home and work until bedtime.</p>
<p id="indent">I grabbed a few chunky potatoes from the sack in the pantry, made sure they were bud-less, and set them down on the counter to hunt for our main course of the night. </p>
<p id="indent">“Whatcha workin’ on, Mom? Your boss trying to get you to work on your day off, too?” I picked up my apple and took another chunk out of it. Finally, she looked up at me, tears flowing down her cheeks. Her bottom lip quivered in the same way it always does when her heart’s been shattered.</p>
<p id="indent">I remember assuming she was thinking about Dad again. I was too young to remember him leaving us. It was in this same apartment that Mom found out he had left us to go to the United States. Occasionally, something would trigger a thought or memory, and on especially emotional days, there was no stopping her floodgates from opening. </p>
<p id="indent">“What’s wrong, Mom?”</p>
<p id="indent">She beckoned me over with both arms, tilting her head down to the floor. I sat next to her, and she wrapped her arms around me tightly. I remained motionless. Whatever it was, she would get it out of her system soon, and in half an hour we would be laughing and having our dinner of mashed potatoes and… well, something else.</p>
<p id="indent">Maybe it was gonna be a steak day. We still had a few cheap cuts in </p>
<p id="page-end">143</p>`
const ch14p4 = `<p id="page-start"> </p>
<p id="no-indent">our freezer, hiding under all the TV dinners, and if I thawed it out within the next twenty minutes, they’d be ready enough by the time six o’clock rolled by.</p>
<p id="indent">I remember thinking the exact words, “As long as she wraps this up, at least.”</p>
<p id="indent">When she let go of me, her tears didn’t stop. She was shaking. Something was seriously wrong. I was close to crying, too, despite having no idea what was going on. I’m not sure if it was empathy or sympathy, or even somehow understanding that the next words out of her mouth were going to change our lives forever.</p>
<p id="indent">“Doc says I’ve got cancer.”</p>
<p id="indent">It took four seconds for her words to process in my head. I stared at her with wide eyes. My grip on the half-eaten apple weakened, and the simple fruit fell to the carpet.</p>
<p id="indent">“What?” My voice shook.</p>
<p id="indent">“It was… uh… just a regular checkup, and… and he said, ‘Well, now don’t that look odd,’ and I said, ‘Well, now don’t what look odd, Doc?’ And so he ran a few tests, and… Oh my God, Luna girl, your mom’s got cancer.”</p>
<p id="indent">The living room around me fell apart, like a freshly completed puzzle going in for some glue that gets flipped too carelessly and slides off the cardboard, fragmenting into the same mess it started out as. </p>
<p id="indent">“What?” I said again, unable to piece together anything else. “That can’t be right. The doc could be wrong, right? That can’t be right.”</p>
<p id="indent">“He’s running some more tests, and we’ll find out sure enough by Friday, but there’s no denying the lump he spotted. Said it may be metastatic, whatever that means.”</p>
<p id="page-end">144</p>`
const ch14p5 = `<p id="page-start"> </p>
<p id="indent">We didn’t have a steak-and-potatoes dinner that night. Or the next night. Or the night after that.</p>
<p id="indent">The results came in early Friday morning. Neither of us had gone to school or work, unable to cope with the looming diagnosis and the anxiety that came with it. Why should we pretend like everything was normal? There was a good chance things would never be again.</p>
<p id="indent">When the paperboy arrived with his satchel, we were already waiting on the front steps for the delivery. The wind was a little bit stronger that day, threatening to sweep us off the concrete staircase. He handed us our mail and went inside to deliver the rest to the front desk.</p>
<p id="indent">The tall stairs up to the apartment were an inconvenience. We were both huffing for air at the top, our legs having carried us up the four flights a little too quickly. Then, we sat at the coffee table, nervous. </p>
<p id="indent">Metastatic Breast Cancer.</p>
<p id="indent">I suppose not all of those words need capitalized, but that’s how the doctor wrote it, and quite fittingly, I’d say. It’s imposing, it’s interrupting, and it’s terminal. At least, that’s also how the doctor wrote it, unless we tried chemotherapy. And seeing as how it had spread to her brain, it was going to be too expensive for our bare-bones insurance to cover.</p>
<p id="indent">Metastatic Breast Cancer That Spread To The Brain.</p>
<p id="indent">Treatment That Costs Ten-Thousand Dollars.</p>
<p id="indent">I called the school later that morning using our dingy home phone to tell them I would be dropping out of school to work. Mom and I weakly argued, but in the end, we both knew that if she wanted any sort of chance at treatment, we’d both have to be in a full-time job.</p>
<p id="indent">A weekend of scouring the Commerce District for anyone willing to hire a twelve-year-old illegally later, I landed at the rusty doorsteps of </p>
<p id="page-end">145</p>`
const ch14p6 = `<p id="page-start"> </p>
<p id="no-indent">Cheapskate Chad’s scrapyard. My rate? A dollar a day. Well under minimum wage, but it’s not like I could do a lot about it. I’m not supposed to be working in the first place.</p>
<p id="indent">We crunched numbers, and by the time October reared its head, we’d have enough money to get her the treatment she needed. Still, April to October was a long time, and we couldn’t afford for anything to go wrong in the meantime. We didn’t even know if we had that long to begin with.</p>
<p id="indent">April turned to May, and May turned to June. My birthday came and passed, receiving an acknowledgement along the way, but nothing more.</p>
<p id="indent">The days at work were not good; they were long and taxing. Still, I would walk home, dollar in my pocket, eager to spend the night with Mom. Replacing the radio on the kitchen counter was a jar showing my contributions, a visual marker of our progress.</p>
<p id="indent">Walking back to the apartment was grueling. It took me a full hour to go back and forth, crossing busy roads and people who wouldn’t look my way if I were royalty. The birds were fighting the oppressive heat as much as I was, and their harmonious tunes rang dull in the vast, light-blue sky. The cobblestone streets of Carmsborough seemed empty. The staircase was no different. The last obstacle in a long day, hoping to drain me of every last breath.</p>
<p id="indent">One night, Mom surprised me with steak and potatoes, as well as a box of minute-serve rice. With the money we’d earned so far, as well as the sum already in her bank account, we were halfway to our goal. The work was relentless, so the occasion was signified with half of our steak rations, slightly freezer-burned by this point.</p>
<p id="indent">But we didn’t care. We laughed, we talked, we cried. A lot of that </p>
<p id="page-end">146</p>`
const ch14p7 = `<p id="page-start"> </p>
<p id="no-indent">had been going around, but hope was on the horizon, and although our routine was rough, it was done with purpose. I remember ending the night with a deep talk about the future. I was going to be a poet, and Mom was going to climb the ranks in her menial office job. When I left to head to bed, Mom was putting a stack of envelopes in the bill box hanging over the microwave. </p>
<p id="indent">The months blurred forward, but the temperature had stayed largely the same. The grass was yellower, and the wind was harsher. The same walk that had been a chore in June was seared into my legs. Air distorted above the cobblestone roads, baking all life that stepped through it.</p>
<p id="indent">I took heavy bounds up the staircase to our apartment, weighed down by tired feet and aching joints. Nonstop physical labor was taking its toll. A few steps later, I was at our door, ready for another quiet night at home.</p>
<p id="indent">The day’s snack was going to be the same as it had been for nearly half a year: saltines and tap water. I passed Mom on the couch, laying down for a nap following a hard day of work. Her breathing was deep and slow.</p>
<p id="indent">I remember thinking I’d wait until dinner to wake her up. I’d get it all prepared and ready, and as long as she hadn’t woken up in the meantime, I would welcome her with something a little nicer than a TV dinner. Maybe I’d crack into one of the cans of green beans we’d bought last week.</p>
<p id="indent">I left to go to my room for a moment to switch into cleaner clothes, and considered a shower. How long had it been since I’d had one? It wasn’t the day before. I decided it was a good idea, and promptly stepped into the bathroom.</p>
<p id="page-end">147</p>`
const ch14p8 = `<p id="page-start"> </p>
<p id="indent">When I got out of the shower, I threw the dirty clothes into my hamper and made my way out to the kitchen, ready to cook something up. Only three or four minutes into meal prep did I notice Mom wasn’t breathing anymore. </p>
<p id="indent">Maybe if I hadn’t taken a shower, I would’ve been in the room when it happened. Maybe I could’ve stopped it. Maybe I could’ve shaken her awake. Or helped her somehow.</p>
<p id="indent">The rest of the day is mostly just a blur. A traumatic ink imprint on the pages of my life, but the secretary accidentally smudged the stamp.</p>
<p id="indent">I remember shaking her, trying to get her to wake up, but by then it was too late. There was no knowing how long she’d been gone by the time I’d noticed.</p>
<p id="indent">I remember calling the police, and the paramedics, and the long-untouched sticky note of my dad’s phone number on the fridge. Two of the three answered my call. Neither were my dad.</p>
<p id="indent">I remember riding with my mom in the back of an ambulance to the hospital. They declared her dead on the couch, but still had to bring her in for paperwork.</p>
<p id="indent">I remember being forced home later that night by the doctors. It was a fifteen-minute walk, but the road in front of me stretched on for forever. Every building I trudged by felt a mile long. The warm night was a spit in my face.</p>
<p id="indent">I remember gazing up at the tall steps of the staircase. It was oppressive. </p>
<p id="indent">I remember breaking down at the front door to our apartment, afraid to open it back up. Would I see her in the living room? Was her imprint still in the couch, sprawled out, unmoving? Did she come back as a ghost </p>
<p id="page-end">148</p>`
const ch14p9 = `<p id="page-start"> </p>
<p id="no-indent">to lament or curse me?</p>
<p id="indent">None of those things happened. Instead, the first thing I did was count the money in the jar. Roughly 550 one-dollar bills were jam-packed in, with a few random bills added to the mix. Numbers were jotted down on a torn-out page of notebook paper next to it, displaying Mom’s own total: $8763. </p>
<p id="indent">We were less than a month away.</p>
<p id="indent">And if I’d made more than a dollar a day, we might’ve made it. If I were making two a day, she would still be here. If I were making minimum wage, we would’ve been there ages ago.</p>
<p id="indent">I remember waking up the day of the funeral and not wanting to be alive. I remember wanting to fall back asleep and never wake up, like Mom did. We had never been all that religious, but I remember praying to God that the day would never continue. I even remember hoping that my dad would show up at the funeral and take me to the United States with him. That he’d notice the three voicemails I’d sent him—one when she’d died, one when I’d been sent home by the doctors, and one when the date of the funeral had been set.</p>
<p id="indent">He never did, of course.</p>
<p id="indent">I was alone at her funeral, aside from the priest. The fact that nobody had shown up to mourn her loss was telling in some way, I suppose. Our exchange was awkward, and when he finished his funeral rites, he gave me a pat on the shoulder and left.</p>
<p id="indent">I made sure to get her a beautiful gravestone. It was an imposing black obsidian marker, with her name engraved in white. In full, it read, “Felicity Wells: Devoted Mother and Role Model. 1934-1972.”</p>
<p id="indent">I couldn’t bear to look at it.</p>
<p id="page-end">149</p>`
const ch14p10 = `<p id="page-start"> </p>
<p id="indent">I spent an hour crying quietly in the graveyard. Even reading her name was too much. Eventually, I stepped out and started my way back to the apartment. </p>
<p id="indent">Living there hadn’t been the same since. And, to be fair, why should it? The sole reason I called it home was gone. I had as much attachment to that fourth-floor blunder as I did my own absent father.</p>
<p id="indent">But it still hurt to climb all the way up the tall steps only to find out I was in the middle of being evicted.</p>
<p id="indent">“What are you doing here?” I asked. The party of three stopped moving things to watch the twelve-year-old standing in the doorway.</p>
<p id="indent">“Ma’am, I hate to say it, but you’re being evicted right now. You haven’t paid rent in months. You’re luck you’ve gotten away with it for this long, but the boss wasn’t having it anymore.”</p>
<p id="indent">“Wait, what do you mean? Mom’s been paying the rent.”</p>
<p id="indent">“We found about three months’ worth of rent in a jar on the table, which we are legally allowed to claim, but otherwise, we have to kick you out. Sorry, kid.”</p>
<p id="indent">“No, you can’t do that! She’s been paying! The statements are right here, in the bill box—”</p>
<p id="indent">I opened the box and was met with four unopened bills with the word “OVERDUE” stamped in bright red letters on the front of each. She’d been saving more money by not paying the bills. Even if I’d been making minimum wage, if she’d paid the bills, we weren’t ever going to make it.</p>
<p id="indent">“Mom would never stop paying. Why did she stop paying?”</p>
<p id="indent">“Your guess is as good as mine, kid, but the two of you need to leave. The contract’s terminated.”</p>
<p id="page-end">150</p>`
const ch14p11 = `<p id="page-start"> </p>
<p id="indent">“Wait. I can pay. I’ll pay the monthly rent. How much is it?”</p>
<p id="indent">“It’s done, kid. The apartment’s already been leased out to another family. Besides, you’re not even an adult. You can’t provide an income, let alone $150 a month. Now, scram. I don’t want to force you out, but I will.”</p>
<p id="indent">Tears were threatening my eyelids again, but I kept composure until I made it down to the apartment lobby. I remember people walking by, not caring about the pre-teen having a mental breakdown in the middle of their walking space. I remember the CB Moving Limited truck idling outside the complex entrance and the men that drove it.</p>
<p id="indent">My next stop was the bank. I was told I had to wait until I was eighteen to inherit my dead mother’s account, but that it would be safe and sound where I left it.</p>
<p id="indent">That, I think, was the defining moment. Or, rather, the last defining moment.</p>
<p id="indent">For half a year, one consequence was immediately followed by the next, but being told the money we worked so hard to earn was completely off-limits for six more years was the straw that broke the camel’s back.</p>
<p id="indent">That was the last day I could run at my problems and fight them head-on. From then on, I’ve always been Luna on the run. Working under S seemed like it was going to break my curse, but being confronted with the same people who got me into this mess to begin with sapped it all out of me.</p>
<p id="indent">I sit down in the grass in front of the gray building. A brief respite of icy rain trickles in from the ocean, washing the freezing, unforgiving landscape of Carmsborough in December. The streets are empty, and </p>
<p id="page-end">151</p>`
const ch14p12 = `<p id="page-start"> </p>
<p id="no-indent">the sun has disappeared completely under the horizon. A shrouded black sky looms above.</p>
<p id="indent">My hands idly pick at the bullet lodged in my shoe. These men have wronged me more than once. Bijabers has wronged me more than once. Slaphand has wronged me more than once.</p>
<p id="indent">“Hey, boss,” I say into the wristwatch. “I know it’s pretty much bedtime, but I’ve got eyes on one of their bases of operations. I figure tonight’s as good as any to drop in and get some work done.”</p>
<p id="indent">A short moment passes. “Good luck, Luna,” he replies. “Try not to stir things up too much.”</p>
<p id="indent">“No promises.”</p>
<p id="indent">I can’t help but feel like Mom’s watching over me right now. I promise I’ll make you proud. These bad men don’t stand a chance.</p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="page-end">152</p>`
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
<p id="no-indent">It’s well past midnight when I wake up on the ground, and I’m pretty sure it’s only because of how cold and wet it is. I don’t even remember falling asleep, but a glance at my watch tells me it was about seven hours ago. Apparently, I needed it.</p>
<p id="indent">At first, I wonder why nobody messed with the random woman sprawled out on the damp grass in front of a business, but nobody would mess with me when I was homeless and asleep. Nicer clothes wasn’t going to change that.</p>
<p id="indent">Even this late at night, the building labeled “CB Moving Limited” is alive with activity. Another cloudship is unloading on the dock up top, and lights are spilling out from windows onto the cobblestone sidewalk </p>
<p id="page-end">153</p>`
const ch15p2 = `<p id="page-start"> </p>
<p id="no-indent">outside. Whatever they’re really doing at CB Moving Limited, it has a third shift.</p>
<p id="indent">Or the third shift is the sneaky, illegal shift.</p>
<p id="indent">Wouldn’t surprise me any.</p>
<p id="indent">“Well, I suppose it’s about time I scout the place and sneak in,” I say, my voice reaching no one’s ears. Why I felt the need to say it out loud, I’ll never know.</p>
<p id="indent">Above me, in the sky, the moon is big and beautiful. She’s just past full moon and waning into third quarter, or however you say it. My sole audience member for the insane break-in I’m about to attempt.</p>
<p id="indent">My first move is to tiptoe around the perimeter of the building. I spot a back door that opens up to an alley, but other than that, there’s a whole lot of nothing that can help me.</p>
<p id="indent">So, like a normal person, I squat out on the end of the alley opposite the back door and stare at it, waiting for someone to emerge. When nothing happens for thirty minutes, I decide it’s time to get moving.</p>
<p id="indent">The door creaks slightly as I open it, but nobody comes to check out the noise, so I keep moving forward. I eventually slip into the building, which is a lot warmer than the chilly outside air, and close the door as delicately as it was opened.</p>
<p id="indent">“Now, onto hunting for the big man.”</p>
<p id="indent">I take one step on the tile flooring of the storage room I’m in, and my shoes squeak from the water I picked up outside. The noise is a lot louder than the door was, and I immediately go to duck behind one of the metal shelves holding large, unmarked cardboard boxes.</p>
<p id="indent">Once again, nobody comes to investigate, and I use the time to wipe my shoes off as best as I can with my sleeve. It’s not perfect, but a few </p>
<p id="page-end">154</p>`
const ch15p3 =`<p id="page-start"> </p>
<p id="no-indent">test steps prove much quieter.</p>
<p id="indent">Can’t have a little rain messing this up and getting me in trouble.</p>
<p id="indent">I go to leave the room, but a nagging feeling in my gut tells me to check out a few of the boxes and their contents, so I run my knife across the tops of a few of them. Three contain nothing but packing peanuts and small metal parts that look like they belong to machinery, but the fourth box contains gears and pipes, all a brassy-coppery color.</p>
<p id="indent">There’s not a lot of pocket space left in my jacket, but I grab one of the larger gears out of the box and stash it away. Whether it’s because it’s shiny or that I want to find out more about the strange box of stuff is up for debate.</p>
<p id="indent">With that out of the way, I open the next door, which leads out into the main lobby of CB Moving Limited. The ceiling hangs high, meaning the second floor is a lot smaller, but seeing as the building is four stories total, there’s still plenty of ground to cover.</p>
<p id="indent">A patrol of three armed guards near the front entrance comes into view, walking along the windows and peering out of each set, almost as if they’re expecting visitors.</p>
<p id="indent">Expecting me.</p>
<p id="indent">There’s no doubt word’s gotten out: Luna, the one who destroyed Slaphand’s Plasmarizer twice, escaped the island and is back to causing havoc. They know I’m heading this way. All I’ve gotta do is make it seem like I haven’t already arrived.</p>
<p id="indent">It’s almost funny realizing this whole mess is for me. I’ve scared and upset this big grown man an unreasonable amount. This “kid” has his guards on high alert.</p>
<p id="indent">Like earlier, I sit and peek through the crack in the doorway, </p>
<p id="page-end">155</p>`
const ch15p4 = `<p id="page-start"> </p>
<p id="no-indent">watching the patrol make their rounds, figuring out their patterns. About five minutes into scouting, however, a second group of guards arrives, retracing the first group’s path almost exactly the same way. And five minutes after that, a third batch shows up, too.</p>
<p id="indent">A total of nine guards are out in the main lobby, all patrolling different areas at different times. If I step out, I’m almost definitely gonna be seen. But there are no other doors out of this room, and I doubt if there’s a spare outfit stuffed into any of these boxes.</p>
<p id="indent">“Now what?”</p>
<p id="indent">I search for an answer, which comes from above.</p>
<p id="indent">For whatever reason, there’s a sort of vent in the wall that leads out to the main room, meaning if I unscrew that and fit through, I’ll be high enough that the patrol groups won’t spot me unless they look up. And they’ll have no reason to unless I make too much noise. Then, I’ll walk across the support beams spanning the room over to the stairs, and…</p>
<p id="indent">And…</p>
<p id="indent">Well, something, hopefully. The support beam is too high up to make it down to the stairs safely, and even if I could, there’s no way they wouldn’t notice me jump. Not to mention, if a fourth patrol group starts making their rounds, I’d run right into them.</p>
<p id="indent">But, if I can find something to throw all the way to the opposite side of the room, maybe the noise will distract them all long enough to make the jump and get out of sight.</p>
<p id="indent">It’s better than nothing, I suppose.</p>
<p id="indent">The three groups merge into one somewhere near the middle of the room, talking and ignoring their job. None of them even glance this way as I snake out of sight behind the door.</p>
<p id="page-end">156</p>`
const ch15p5 = `<p id="page-start"> </p>
<p id="indent">I climb the metal shelf directly under the vent, which is fortunately clear of any boxes on top, but it’s about four feet from the top of the shelf to the ceiling, so I’m stuck crouching. Then, with one of my knives, I slowly and carefully turn each of the four screws on the gate and gently set it down on top of the shelf.</p>
<p id="indent">There’s enough space for me to crawl in for sure, though with as much comfort as I have on top of the shelf. I check on the group of nine one last time, making sure they’re still talking and not paying attention, before stepping through the hole in the wall and onto one of the three support beams.</p>
<p id="indent">The black metal beam slopes up a bit in the center of the room, putting me at about fifteen feet above the floor. It’s wide enough for solid footing, but still a bit of a tightrope act.</p>
<p id="indent">The circus was never really my thing. I prefer watching movies in theaters. Not that I’ve seen one in years.</p>
<p id="indent">Heights, coincidentally, are <em>also</em> not my thing.</p>
<p id="indent">I get myself as close to the stairs as I safely can and peek down below me. They still haven’t noticed, which is strange, considering the amount of dust I’ve kicked up.</p>
<p id="indent">I fish the gear out of my pocket and give it one last look. It’s solid, but light enough to toss without a problem.</p>
<p id="indent">“So long, good friend,” I whisper, spotting my reflection in the lustrous material. “You were good while you lasted.”</p>
<p id="indent">I reel my arm back over my shoulder and throw the gear as hard as I can, watching it arc across the room all the way to the other side. It connects with the wall with a loud metal banging and scraping noise, and as everyone looks for what caused it, I dive off the metal beam and onto </p>
<p id="page-end">157</p>`
const ch15p6 = `<p id="page-start"> </p>
<p id="no-indent">the stairs. It’s a four- or five-foot drop, but I stick the landing without hurting myself too much. </p>
<p id="indent">Hidden from view by the wall protecting the staircase, I quickly claw my way up, not standing, in fear of poking my head out and being spotted. I climb all the way up the rest of the stairs this way, leading to a balcony on the second floor. </p>
<p id="indent">Fully exposed on the balcony, I slide into one of the rooms, praying it’s empty, and hide away in a corner. A few minutes pass, and I hear footsteps walk by the room, but they’re not alerted to my spot. I allow myself a peek out the room’s window overlooking the balcony, and spot a crowd of thirteen guards all staring up at the spot where my gear had collided.</p>
<p id="indent">It was still stuck in the wall.</p>
<p id="indent">Unlike the storage room, this one was connected to another by a door on the inside, and so I get down on the floor and peer through the crack underneath. The lights are off and there’s no sound or movement inside, so I quietly slip into the next room. This one doesn’t have a window, meaning there’s a little more freedom to move. It also has a door leading to a third room, whenever I’m ready for that.</p>
<p id="indent">I take the seclusion time as a chance to breathe, seeing as I have a lot more building climbing to do at this point. I’m getting good at this sneaking and infiltrating thing. Maybe I should become some sort of espionage agent. I’m sure there are places hiring.</p>
<p id="indent">I let a few more minutes pass before walking to the next door and checking it the same way I did the first. This time, the light is on, but there are no signs of life inside. This one has a window similar to the first room, but also stairs to the third floor of the building. </p>
<p id="page-end">158</p>`
const ch15p7 =`<p id="page-start"> </p>
<p id="indent">So far, nothing of interest has been in any of the rooms. If I had to guess, the first and second floors are part of their “moving company” front end, and the third and fourth floors are part of their “mafia syndicate” back end.</p>
<p id="indent">I follow the staircase up to the third floor, where the mood drastically changes. The walls are a different color, the floor is carpeted, and everything feels drab and secretive.</p>
<p id="indent">Called it.</p>
<p id="indent">“Yeah, the boys are completely confused as to what happened,” a voice says down the hall, accompanied by a set of footsteps. “That’s the second gear to get lodged in that wall in a week, and nobody can out the source. Probably one of the guards playing tricks.”</p>
<p id="indent">I hastily roll into one of the open rooms nearby, hoping the man doesn’t come in here.</p>
<p id="indent">“No, the cameras still aren’t back up from the outage last month. Boss believes they’ve been sabotaged, but the repairman doesn’t think so. Besides, nobody’s come to steal anything, and that Luna kid certainly didn’t plan any of this.”</p>
<p id="indent">The man walks by, totally unaware of me, that Luna kid, on the other side of the wall, and goes down the stairs to the second floor. I breathe a short-lived sigh of relief.</p>
<p id="indent">I can’t believe I didn’t check if there were cameras again. I’ve been screwed over by them twice, and for all I know, it could’ve been three by now if it weren’t for their mysterious outage. Also, the second gear in a week in that wall? What on earth is going on around here?</p>
<p id="indent">Those are questions for later. I step back out into the hallway, ready to begin my search.</p>
<p id="page-end">159</p>`
const ch15p8 = `<p id="page-start"> </p>
<p id="indent">With most of the welcome party on the first and second floors, there’s not much to worry about in the way of being spotted, but I still take every precaution I can. Most of the rooms are offices of some sort, but two catch my interest: the conference and storage rooms.</p>
<p id="indent">The conference room has a lot of information about the island and a few of Bijabers’ dealings. There’s a bulletin board talking about some guy in France, as well as a paper at the far end of the table in the center sent from someone calling herself “Cleopatra.” It mentions shipments inside Carmsborough, but not what they’re shipping or to where.</p>
<p id="indent">If I wanted anymore confirmation that this was one of Slaphand or Bijabers’ dealings, I got it all right here.</p>
<p id="indent">As for the storage room, it’s mostly cleaning supplies on the inside, but a second box of gears and pipes, like the one in the storage room, sits on a shelf collecting dust. The words “OLD PROTOTYPE PARTS” are written in sharpie on the side. A prototype for what? The Plasmarizer? A steambot?</p>
<p id="indent">Too many questions in this building. All I need is to find Slaphand’s current location. I pocket two more gears from the box and silently fold the top back up.</p>
<p id="indent">Thirty minutes of searching later, I climb up to the fourth floor, which, unlike the third, has guards patrolling. Must be the important one.</p>
<p id="indent">For the most part, it’s more of the same boring offices, but this time with the added flair of hostile men threatening to use their pistols on me. More than once I’m forced to step into an empty room to wait for one of them to pass by, and it’s slow moving through the building.</p>
<p id="indent">Eventually, I spot a room with barred windows and two guards standing on the outside. Beyond that is a door with a stairway label next </p>
<p id="page-end">160</p>`
const ch15p9 = `<p id="page-start"> </p>
<p id="no-indent">to it. The most protected room is right next to the roof access.</p>
<p id="indent">That’s clearly the room I wanna be in, but how do I get inside?</p>
<p id="indent">“All hands on deck downstairs,” one of their radios says, crackling to life on their hip. “One of Cleopatra’s men is coming to do the steroid exchange and we need every last guard down here.”</p>
<p id="indent">The two guards sigh and head down the hallway. Like clockwork, I hide inside another room until they’re out of sight, and walk down to the barred room. </p>
<p id="indent">That was easy.</p>
<p id="indent">I feel like the door should’ve been locked, but it swings open without any resistance. My eyes widen at the sight of what’s on the inside. Lining the walls are expensive-looking paintings and artworks, three statues standing in various spots, and on a bookshelf sit various golden items and a large vase full of gold coins.</p>
<p id="indent">And, in the center of the room, is a map on a table, which reads, “Slaphand’s Stakes.” Next to that is a large metal bat.</p>
<p id="indent">A small red X marks the location of his main hideout, under the name of “Hand & Boogie Retail.” There are plenty of additional markings on the map, including a skull over the recently destroyed Blood Moon Island and blue dots for each of the apartment complexes they control.</p>
<p id="indent">Hand & Boogie Retail. It’s nestled in-between the Commerce and Higher districts. I’ve never had a reason to go that way, but I do now. My first trip to the Higher District will be to find and crush Slaphand.</p>
<p id="indent">On my way out, I consider the large vase of gold coins taunting me on the shelf. I reach out to grab a handful, but hesitate.</p>
<p id="indent">“What would you do, Freckles?” I say aloud. “I mean, I always say </p>
<p id="page-end">161</p>`
const ch15p10 = `<p id="page-start"> </p>
<p id="no-indent">it’s moral to steal from the bad guys. They’re the bad guys, after all. But you wouldn’t like it in the first place. Something about stealing making me as bad as them, or whatever. It’s a good thing you’re not here, I guess.”</p>
<p id="indent">My mind is made up. Sorry Freckles, you’ll have to forgive me later. I grab five or six of the coins and stash them awkwardly in the same pocket as the two gears are in, and turn to leave the room, only to be met with a guard staring at me, confused, terrified, and angry.</p>
<p id="indent">“How long were you there?” I ask, as if it matters.</p>
<p id="indent">“Long enough. You’re that Luna kid, aren’t you?”</p>
<p id="indent">“I thought you were supposed to be down helping Cleopatra.”</p>
<p id="indent">“Yeah, but something tripped the silent alarm for this room, and that something is you. Put your hands up—”</p>
<p id="indent">Without hesitation, I reach for the metal bat leaning against the table in the center of the room and swing out at the man. It connects loudly and violently with his head, knocking him to the ground, unconscious.</p>
<p id="indent">The metal sound reverberates through the hallway. If nobody else knew I was up here, they do now.</p>
<p id="indent">I swipe the map on the table, which tears at the four corners where it was pinned down, and head up the stairs to the roof. Maybe, if nobody’s up here, I can steal the cloudship and get away without being chased.</p>
<p id="indent">I climb to the top and am met with snow and two guards, as surprised to see me as I am them.</p>
<p id="indent">“Well, hello, fellas.”</p>
<p id="indent">I scan the roof. There’re two goons in the cloudship. I can either take all four of them on or find a different way to escape.</p>
<p id="page-end">162</p>`
const ch15p11 = `<p id="page-start"> </p>
<p id="indent">The building behind me has the same level of roof. If I can jump the distance between the two, I might get a head start and escape.</p>
<p id="indent">They approach me, spreading out a little to have as much peripheral on me as possible. From below, the door swings open, and two more guards charge up the stairs.</p>
<p id="indent">Now or never, I suppose.</p>
<p id="indent">I lob the bat at one of the nearest guards, which smacks him comically, and make a break for the other rooftop. At this speed, I might make it.</p>
<p id="indent">Or, at least, I would’ve, if I hadn’t looked down at the last second. Looking down gives me an incredible anxiety, and my jump ends up barely two feet short of my target. I try to reach out for the ledge of the building, but I’m a few inches too far away.</p>
<p id="indent">I fall five feet and land on a metal fire escape, and even almost stick the landing.</p>
<p id="indent">Almost.</p>
<p id="indent">I barrel shoulder-first into the brick wall of the building, grinding my teeth with the pain. Up on the rooftop, the guards peer down at me, not wanting to attempt the same thing.</p>
<p id="indent">“You’re only coming down one way,” one of them says, and they all disappear, probably going to head down to underneath the fire escape. By the time I finish climbing down the four ladders to the alleyway, they’ll have gotten equally as far, and I’ll be toast.</p>
<p id="indent">I stare at the window right in front of me. Every fire escape has a window to escape from.</p>
<p id="indent">I don’t know what this building is, or anything about it, but I do know one way to get down without fighting a horde of Slaphand’s goons.</p>
<p id="page-end">163</p>`
const ch15p12 = `<p id="page-start"> </p>
<p id="indent">Within seconds, one of the stolen gears is back in my hands and crashing down upon the glass. It makes quick work of the windowpane, and I step into the building, which is completely dark on the inside except for the faint light pouring in from the streets.</p>
<p id="indent">I weave through the hallways of this new building and find the roof access, climb my way back up, and face back to the roof of CB Moving Limited. The guards all went to hunt for me downstairs, leaving the cloudship unprotected.</p>
<p id="indent">These guys are consistently stupid, and honestly, I love it.</p>
<p id="indent">I step all the way back to the opposite side of this building’s roof, hoping to gain enough speed and momentum to get me across. Just don’t look down, Luna. Take the jump, don’t look down.</p>
<p id="indent">I break into a full sprint, charging across the roof as fast as I can, and leap over the ledge. I do end up looking down halfway through the air and spot a few of the guards already waiting for me in the alley. It’s a long way down, but I won’t be joining them. My feet land firmly onto the roof of CB Moving Limited, and I break my landing with a roll.</p>
<p id="indent">No time to relish in that accomplishment. I’ve gotta get the cloudship kicked into motion and get out of here. Luckily for me, the design is the exact same as the first ship I stole, and the key is once again still in the ignition. Hooray for consistency, I suppose.</p>
<p id="indent">The cloudship starts up and begins moving as soon as two of the guards reappear on the roof. They fire at the balloon, but their pistols aren’t going to do much in stopping me from flying away.</p>
<p id="indent">I’m free, I’m safe, I know Slaphand’s location, and I stole another one of their dinky little cloudships. It’s hard to not feel cocky. I’ll be back with Freckles in no time.</p>
<p id="page-end">164</p>`
const ch15p13 = ``
const ch15p14 = ``
const ch15p15 = ``
const ch15p16 = ``
const ch15p17 = ``
const ch15p18 = ``
const ch15 = [ch15p1, ch15p2, ch15p3, ch15p4, ch15p5, ch15p6, ch15p7, ch15p8, ch15p9, ch15p10, ch15p11, ch15p12, ch15p13, ch15p14, ch15p15, ch15p16, ch15p17, ch15p18]

const ch16p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 16</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">Within the first fifteen minutes of my escape flight, the bullet holes in the balloon had leaked enough gas out to stop me from gaining any more altitude. I settled on a quiet spot in the middle of a random road to park the ship. There’s no chance they’ll be able to hunt me down from this far away.</p>
<p id="indent">Hope whoever has to get the ship out of the road will have fun in the morning, because it sure won’t be me. </p>
<p id="indent">I walk the rest of the distance to the <em>Constellation</em> on foot. Today was a pretty successful day, all things considered. I used Shady Shane as one of my informants, beat information out of two thugs trying to de-home an old lady, escaped with my life in a crazy car chase scene, </p>
<p id="page-end">169</p>`
const ch16p2 = `<p id="page-start"> </p>
<p id="no-indent">found their base, and snuck through their whole building for the next possible location, all while finding the time for a power nap.</p>
<p id="indent">Pretty badass, if you ask me.</p>
<p id="indent">Still, it was a lot. Maybe too much. My bed’s looking as enticing as it had yesterday. Despite being nearly dawn, I curl up in bed and catch some much-needed z’s.</p>
<p id="story-break"></p>
<p id="indent">A loud knocking sound wakes me up abruptly. My head is groggy and my body’s sore. Jumping and running into things as much as I did was wearing me out already. How long was I asleep? Judging by how bright it is outside, it had to have been more than a few hours.</p>
<p id="indent">“Open up!” someone yells. It’s a command, but the tone isn’t necessarily hostile.</p>
<p id="indent">Either way, I’m not taking any chances. If they’ve spotted me, they won’t have for long.</p>
<p id="indent">Hand on holster, I step onto the main deck and peek my head out above the rim. A strong sense of déjà vu washes over me, but I ease up a little when I see who it is.</p>
<p id="indent">“Can I help you, officer?” I remove my hand from the holstered weapon.</p>
<p id="indent">“Are you the owner of this ship?” the officer asks.</p>
<p id="indent">“Yes, I am. Why, did I forget something?”</p>
<p id="indent">“If you mean you forgot to pay to park here, yeah. You have to get a permit. They’re twenty wings a day, but you get an extra ten added as a fine because you don’t have a permit yet.”</p>
<p id="indent">“Oh, shoot. I got here so late, it totally slipped my mind.” </p>
<p id="indent">I don’t know why I feel the need to lie. It’s not like I’m in any </p>
<p id="page-end">170</p>`
const ch16p3 = `<p id="page-start"> </p>
<p id="no-indent">serious trouble, and there’s no getting out of paying for the parking permit. Still, I don’t want to incriminate myself in any way in front of the man. </p>
<p id="indent">“Let me go get some cash real quick.”</p>
<p id="indent">I stash my weapons away so that he doesn’t notice how much heat I’m packing, and grab out five twenties and a ten, enough to pay for the entire week plus the fine.</p>
<p id="indent">“You wouldn’t happen to know the fastest way to Hand & Boogie Retail, would you?” I ask, as he punches numbers and fills out some paperwork. “I’ve got some hunting to do in that area for my sister-in-law, and I hear they’re some of the best.”</p>
<p id="indent">“They’re not bad, but they’re far from the best,” the cop says, inputting something into the parking meter my ship’s at. “Take a left off of Flup Avenue and it’s almost a direct shot, but if you want some super high-quality service, go down to Mary and Macy’s. They’re super nice, and also a lesbian couple, if you’re progressive. Best darn craftwork I’ve ever seen.”</p>
<p id="indent">I internally wince at the sound of Mary’s name, even though I know it’s not <em>her</em>. </p>
<p id="indent">“I’ll keep that in mind. Thank you.”</p>
<p id="indent">“Alright, Miss Luna Wells, don’t forget to renew your permit or get the heck out of here by Sunday night. If you have any complaints regarding our interaction today, you may call the Carmsborough Police Contact Hotline. My name has been Officer Hitch. Peace out.”</p>
<p id="indent">“Police Contact Hotline?”</p>
<p id="indent">“Oh, some new initiative the president and Orion are setting up. I have to mention it at the end of every conversation while on duty. It’s a </p>
<p id="page-end">171</p>`
const ch16p4 = `<p id="page-start"> </p>
<p id="no-indent">good idea in theory, but completely annoying in practice.”</p>
<p id="indent">“Strange, but okay. Peace out, Officer Hitch.”</p>
<p id="indent">I disappear back into my ship and prepare for another day of sneaking, and probably fighting, too. The knives and pistols go back in their places, my winter coat goes over my arms, and the scarf and hat go on and around my head.</p>
<p id="indent">“Come in, Luna,” the boss’ voice says from my watch.</p>
<p id="indent">“Yeah, it’s Luna. Boy, do I have the update of a lifetime for you.”</p>
<p id="indent">“Let’s hear it, then.”</p>
<p id="indent">I spend the next ten minutes relaying the story in all its action-packed detail from beginning to end. He patiently waits on his end of the communicator, listening to my over-explained recollection.</p>
<p id="indent">“Sounds like a dangerous situation. Chances are, they’re on high alert. It might be best if you hold off for a bit, in case they decide to double down within the next week.”</p>
<p id="indent">“What? No, I can’t stop yet. I’m almost there. I have his location. If we wait any longer, I might not be able to rescue Freckles. It might be too late.”</p>
<p id="indent">The line goes silent. I assume he’s weighing the situation and trying to decide what’s best. Unfortunately for him, I’m not taking no for an answer. If this is the last time he’s going to sponsor my little shenanigans, so be it. But I’m getting my cat back.</p>
<p id="indent">“Be careful, Luna. I still haven’t heard anything from informants, which means they’re either being cracked down on or currently in hiding. The last thing I need is you walking into something a lot bigger than you’re expecting.”</p>
<p id="indent">“Oh, trust me, I’m ready this time. I’m gonna watch for the </p>
<p id="page-end">172</p>`
const ch16p5 = `<p id="page-start"> </p>
<p id="no-indent">cameras, memorize guard patterns, wait for the perfect moment, distract them, use stealth when I can, and repeat the process until my knife is in Slaphand’s heart. Or back. I’m not picky.”</p>
<p id="indent">“Is that all?”</p>
<p id="indent">“What do you mean?”</p>
<p id="indent">“Shouldn’t you have more of a cohesive plan? Do you know anything about the building you’re ready to walk into?”</p>
<p id="indent">“Well, it’s not like I can just ask for the blueprints. I’m going down as soon as we’re done talking to scout it out a bit, but there isn’t much else I <em>can</em> do.”</p>
<p id="indent">“Alright, well, be smart, I guess.”</p>
<p id="indent">“You bet, boss. Peace out.”</p>
<p id="indent">I hang up and step back out into the open air. My brief respite on board the <em>Constellation</em> is coming to an end again.</p>
<p id="indent">Seeing as Hand & Boogie Retail is a two-hour walk from my spot on the docks, I do something I’ve never done before: ride the bus. I pay the considerably small fare and grab a seat. Nearly forty minutes later, we stop close enough for me to walk the rest of the distance in ten minutes.</p>
<p id="indent">The building is a lot larger than I expected. Like, a <em>lot</em> larger. It’s all one floor, but expansive. From what I can make out through the windows, there are sections for pretty much any home appliance or furniture you’d need. I don’t even recognize everything on display, like something called an air fryer. </p>
<p id="indent">My stomach rumbles at a fridge in the window. When was the last time I ate? I’d snacked a little yesterday, but nothing serious. I spin myself in a circle, searching for somewhere to eat, and my eyes lock </p>
<p id="page-end">173</p>`
const ch16p6 = `<p id="page-start"> </p>
<p id="no-indent">onto a sub sandwich restaurant with outdoor seating. It’s three in the afternoon on a cold Tuesday in December so nobody’s sitting outside, giving me the chance to do some scouting from out front.</p>
<p id="indent">I order a foot-long sub, prompting a weird glance from the server, but they deliver it, along with a medium lemonade.</p>
<p id="indent">Lemonade used to be one of my favorites, before I had to struggle to find clean drinking water. Lemonade meant a hot day of fun in the sun with Mom, walking around the city, or playing in a nearby park.</p>
<p id="indent">Now, lemonade means not dying of thirst two days into my mission. </p>
<p id="indent">With my meal finished and leaving me rejuvenated, an idea strikes me: if I go in and act like I’m shopping, maybe nobody will recognize me. I could gather intel, like knowing where cameras are and what the layout is, without raising any alarm.</p>
<p id="indent">Screw it. I’m going in.</p>
<p id="indent">I bring my empty tray back into the sandwich shop, thank the server, and head across the street to Hand & Boogie Retail. Obviously, I get that the “Hand” is supposed to be Slaphand, but who is the “Boogie” in Hand & Boogie? How many people work for Bijabers, and why do they all have crazy names?</p>
<p id="indent">The automatic door to Hand & Boogie opens as I approach, welcoming me with a blast of warm air. Already, I spot a camera to my right, doing my best to avoid looking at it straight-on and without seeming suspicious. </p>
<p id="indent">It’s as massive on the inside as it is on the outside. Aisles of different electronics line half the store, ranging from microwaves to space heaters. I spend some time searching back and forth in the aisles, </p>
<p id="page-end">174</p>`
const ch16p7 = `<p id="page-start"> </p>
<p id="no-indent">hopefully building up my credibility.</p>
<p id="indent">What really catches my eye, though, is a series of doors along the back wall of the building. Two are the standard restrooms you’d expect in any store, but the other labeled ones are for storage, staff, and authorized personnel. Three are completely unlabeled.</p>
<p id="indent">“Anything I can help you with today?” someone asks me. I turn and am met with a store worker. They don’t quite match the usual caricature of one of Slaphand’s goons. They’re barely older than I am, and clearly only here for the paycheck.</p>
<p id="indent">“Yeah, I was hoping you could point me in the direction of your TVs. I’m looking for a new one for my sister-in-law after a minor accident yesterday involving too much wine.”</p>
<p id="indent">“Oh, of course. Down there in aisle fourteen. We have black and white and also color, if that’s what you want.”</p>
<p id="indent">“Thank you very much.”</p>
<p id="indent">I meander over to the aisle, taking my time and soaking things in. When I’m in here later, I’ll want to avoid this room as much as possible. It’s too wide open to stay hidden, and with cameras blanketing the entire area, keeping things secret is bound to fail.</p>
<p id="indent">So, I need a way in from one of the other rooms. Preferably the room with easiest access to Slaphand, as long as he’s here.</p>
<p id="indent">The front door dings as it automatically swings open for the next new arrival. In walks a massive, lumbering man, nearing seven feet tall. His frame is distorted, and his face is angry.</p>
<p id="indent">Slaphand.</p>
<p id="indent">“Have Lanny meet with me in an hour,” his booming voice says to one of his higher-ups. “There’s a lot to talk about regarding the little </p>
<p id="page-end">175</p>`
const ch16p8 = `<p id="page-start"> </p>
<p id="no-indent">fiasco last night. If we don’t figure out what she wanted with that map, we’ll have to increase security everywhere, and we can’t afford that right now.”</p>
<p id="indent">“Of course, sir,” the man says.</p>
<p id="indent">I duck into one of the aisles, pretending to care a lot more about a lamp than I actually do. From the corner of my eye, I see him and his subordinate walk into one of the unmarked rooms. </p>
<p id="indent">You’ve marked your own grave, Slaphand.</p>
<p id="indent">“Finding things alright?” another worker asks, scaring me out of my trance.</p>
<p id="indent">“Uh, yeah,” I reply. “Well, maybe. Do you know of any stores where I might be able to get ahold of some rope?”</p>
<p id="indent">“Rope? Well, as strange as it is, we sell rope. How much are you thinking?”</p>
<p id="indent">“Maybe twenty feet, and it’s gotta be pretty thick. My sister-in-law’s car got stuck in a ditch and we’d like to pull it out without a tow truck. You get it.”</p>
<p id="indent">“Oh, for sure. Let’s get you some of that.”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Hiding in an alley with twenty feet of thick rope for two hours isn’t comfortable, but at half-past six, the last of the workers leaves the store, replaced by a batch of brutes that fit the henchman bill better.</p>
<p id="indent">I wait an extra half an hour for them to file into position, rehashing my newly constructed plan. </p>
<p id="indent">There’s no using the front door, and after leaving with my freshly purchased rope, I discovered there’s no back entrance, either, save a </p>
<p id="page-end">176</p>`
const ch16p9 = `<p id="page-start"> </p>
<p id="no-indent">loading dock that is always guarded.</p>
<p id="indent">So, the rope’s for the roof. I spent a hot minute hunting for something to tie to the other end, so that when I toss it, it can theoretically latch on to something. Eventually, I located some loose rebar, gave it a few test runs, and decided it was good enough.</p>
<p id="indent">And, most importantly, I made sure Slaphand never left the building.</p>
<p id="indent">Eight o’clock. Anyone else funneling into the building will be few and far between. It seems Slaphand’s promise to increase security was honest. There’re a lot more guards than a furniture and appliance store should have.</p>
<p id="indent">I quietly approach the building, making sure no outward-facing security cameras are looking my way. Those wretched machines have messed things up far too many times. When I’m in the clear, I toss the rope up onto the roof, hoping to snag it on a pipe and antenna.</p>
<p id="indent">My first attempt is unsuccessful, but on my second, the rebar catches, and I give it a hearty tug. As long as I’m careful, this thing isn’t going anywhere. I’ll be climbing this sucker easily.</p>
<p id="indent">Which is obviously the hard part. I lift myself off the ground, planting both feet on the brick and plaster wall of the store, and pull up, dragging the rest of my body with.</p>
<p id="indent">It’s a long and scary process, but I manage to snake all the way up without a hitch. And, so long as I timed it right, the camera system still has another forty seconds before it loops back around to where I would’ve been.</p>
<p id="indent">Success. </p>
<p id="indent">Well, sort of. I still need in. My entire plan is banking on some sort </p>
<p id="page-end">177</p>`
const ch16p10 = `<p id="page-start"> </p>
<p id="no-indent">of roof access, whether it be a vent or stairs or whatever.</p>
<p id="indent">My wish comes true. I spot a vent with warm air spilling out and turning into fog as it hits the cold outside breeze. Using the same knife trick as last night, I unscrew the vent gate and stick my hand in. The warm air is just that–warm. No risk of burning myself to death climbing in.</p>
<p id="indent">With as much caution as I used to scale the building, I slowly descend into the vent. It’s entirely aluminum, and I don’t want to fall through or make too much noise and have a welcome party waiting for me. At that rate, the front door would’ve been easier.</p>
<p id="indent">It’s a strenuous pace, but I make it to the end. I can’t hardly see anything in the room below me, besides a storage shelf. The vent gate falls victim to my knife trick for a third time, and I quietly set it on top of the shelf. Then, I stick my legs out and use them to scoot the rest of my body out the exit.</p>
<p id="indent">Mission success.</p>
<p id="indent">I hop down from the shelf with a louder thud than I would’ve liked and turn to face the rest of the room.</p>
<p id="indent">A man dressed in all black is staring at me, shocked. He’s not wearing “Slaphand goon” all black, but still all black.</p>
<p id="indent">“Did you watch me do all that and not say anything?” I ask the man, as surprised as he is.</p>
<p id="indent">“Who the hell are you?” he says, hiding something behind his back.</p>
<p id="indent">“I’m Luna. You know, the one that’s been harassing Slaphand. Who the hell are <em>you</em>?”</p>
<p id="indent">“My name’s Agent Ike. I’m the man here to take Slaphand down.”</p>
<p id="page-end">178</p>`
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
<p id="indent">Agent Ike puts one leg up on a box and stretches. He’s apparently not intimidated by my presence, which either means he’s underestimating me or he’s a good guy. </p>
<p id="indent">“Yeah, I’m kind of a big deal,” I reply. “I’ve got Slaphand scrambling for help. His goons are as dumb as a bag of rocks.”</p>
<p id="indent">“I don’t think you’re doing as much as you think you’re doing. It’s not just you. They’re reacting to Orion and the Clockwork as well, on top of the war and the United States government.”</p>
<p id="indent">“Well, to be fair, Orion and the Clockwork joining the hunt was my </p>
<p id="page-end">179</p>`
const ch17p2 =`<p id="page-start"> </p>
<p id="no-indent">Orion and the Clockwork smashed them into the ground one by one.”</p>
<p id="indent">“Oh, so you’re partnered with those two?”</p>
<p id="indent">“No. Far from it, actually. You’re a good guy, then?”</p>
<p id="indent">“I’d like to think so, yeah. I’ve been working to take Bijabers down for a few years now, and tonight’s the night I finally arrest Slaphand. This raid is going to seriously cripple Bijabers’ stronghold in Carmsborough, probably forever.”</p>
<p id="indent">“Well, awesome idea, but unfortunately, I’m going after Slaphand, Mr. Agent Ike. He’s got my cat, Freckles, and I need to get him back in one piece.”</p>
<p id="indent">“No, I don’t think you understand, Luna. This particular plan has been months in the making. Their camera systems have been down for weeks, and I’ve been siphoning information out of his men for just as long. A few nights ago, I was going through one of their shell companies, searching for this very location.”</p>
<p id="indent">“Wait, you took the cameras down? Did you throw a gear as a distraction, too?”</p>
<p id="indent">“In CB Moving Limited? Yes.”</p>
<p id="indent">“I did that too. They said it was the second one in a week.”</p>
<p id="indent">“Well, it sounds like you’re a grand strategist, kiddo, but I’ve gotta handle him on my own. He’d overpower either of us in a second, and I’m the one with a hell of a lot more training than you.”</p>
<p id="indent">“Maybe we could work together,” I offer. “You know, fight him two versus one. He wouldn’t stand a chance.”</p>
<p id="indent">“I can’t let that happen. This is an incredibly dangerous situation, and my boss would never allow a team-up with a minor.”</p>
<p id="indent">He turns to face the door, revealing a lockpick hidden in his hands. </p>
<p id="page-end">180</p>`
const ch17p3 = `<p id="page-start"> </p>
<p id="no-indent">Good to know it was locked. I might not have gotten out.</p>
<p id="indent">“Don’t underestimate me, Agent Ike. I—”</p>
<p id="indent">“Please, call me Ike.” He smiles at me, and even though it seems genuine, I’m upset that he interrupted me.</p>
<p id="indent">“I’ve been on my own for five years. I can handle myself. A disfigured man with a knack for illegal dealings means nothing. If you want to, maybe we can get our bosses to talk and let us work together.”</p>
<p id="indent">“Wait, you have a boss?” Ike asks. “Who do you work for?”</p>
<p id="indent">“I’m not sure I’m allowed to say,” I reply. “He’s more the anonymous type. Who do <em>you</em> work for?”</p>
<p id="indent">“I hardly see how that’s a fair question, since you won’t even tell me. Trust is important, Luna.”</p>
<p id="indent">“Don’t talk to me about trust, Agent Ike. I’ve only been able to trust one person in five years, and I let her die on Blood Moon Island not three days ago.”</p>
<p id="indent">“You were on Blood Moon Island?” He stops picking the lock to face me. “How did you escape?”</p>
<p id="indent">“Hold on. You know of Blood Moon Island?”</p>
<p id="indent">“Yes. That’s why I asked how you escaped.”</p>
<p id="indent">“You <em>knew</em> what was happening on Blood Moon Island, and yet you never did anything to stop it?”</p>
<p id="indent">“If it were up to me, Luna, I would’ve stopped their operations years ago. However, between my boss and the fact that it would require a literal army incursion, it was never feasible.”</p>
<p id="indent">“So you waited for Nazis to be the army that did it.”</p>
<p id="indent">“The Nazis attacked Blood Moon Island? That would explain the lack of airwaves coming out of the area.”</p>
<p id="page-end">181</p>`
const ch17p4 = `<p id="page-start"> </p>
<p id="indent">“We’re getting off topic. I need my Freckles back, and you need Slaphand out of the equation. Let’s team up, and we’ll watch each other’s backs.” I offer my hand in a handshake.</p>
<p id="indent">He turns back to the door. “I already said, I can’t do it, kid. Go home and get some rest, and tell your boss Agent Ike took care of Slaphand. If he’s anyone important, he’ll have heard of me.”</p>
<p id="indent">“You know I can’t do that.”</p>
<p id="indent">I unsheathe one of my knives and lower it down to my side. “Last chance, Ike.”</p>
<p id="indent">“Oh, come on,” he mutters under his breath, leaving the lockpick in the door. He spins to face me, bringing his fists up, an annoyed look on his face.</p>
<p id="indent">“I don’t want to do this, Luna.”</p>
<p id="indent">“Then get out of my way. Slaphand is mine.”</p>
<p id="indent">He sighs. “I’ve gotta say, when it comes to stubborn kids, you’re pretty high up there, but you’re no Cog.”</p>
<p id="indent">“I have no idea what that means.”</p>
<p id="indent">“It means you have one second to put that knife down before I knock you unconscious and leave you in here until I’ve finished my mission.”</p>
<p id="indent">I charge at the agent, knife in hand. He dodges to my right and sends out a hook, landing his blow on my arm. It hurts, but if I went down every time I took a punch like that, I wouldn’t be alive. I drop to the ground and sweep with my feet, catching his leg and throwing him off balance. Then, I reach up with my weapon, trying to stab him anywhere I can. He catches his footing and moves out of the way. </p>
<p id="indent">Using his momentum, he swings his whole body and kicks out. His </p>
<p id="page-end">182</p>`
const ch17p5 = `<p id="page-start"> </p>
<p id="no-indent">foot whizzes an inch in front of my face, and I duck back instinctively. He seizes the opportunity to steady himself and sends out a flurry of swings and chops.</p>
<p id="indent">The man obviously knows what he’s doing, unlike all of Slaphand’s henchmen I’ve fought. My skills, of which I have almost none, are vastly outmatched.</p>
<p id="indent">I manage to dodge a few of the hits, but my arms and chest bear the brunt of the damage. He sends me stumbling a few steps, giving me enough time to retrieve my second knife. If I can’t beat him with brute force, I’ll psyche him out with too many weapons.</p>
<p id="indent">“Two knives is a clever trick,” he says, smiling. It’s not even intimidating. Like his first, it feels genuine. He really doesn’t want to do this. So why won’t he let me work with him?</p>
<p id="indent">This time, I let him charge at me, and dodge out of the way in a similar fashion. His fist connects with one of the metal shelves, reverberating painfully. He shakes it off dramatically, and I take the chance to dive back in at him.</p>
<p id="indent">Right as I’m in range, he kicks out with his foot, landing square on my chest. All the air in my lungs is knocked out as I flounder backwards, landing back-first into another shelf. It rocks with the force, sending a few loose metal parts clattering to the ground. </p>
<p id="indent">“I won’t lie, you’re pretty good,” I say, panting. </p>
<p id="indent">“Years of practice,” he replies. “Too many, I’d say.”</p>
<p id="indent">“I don’t suppose you have any tips for me?”</p>
<p id="indent">“Depends. Are you gonna let me go out there and get rid of the big man alone?”</p>
<p id="indent">“Let me think about it… no.”</p>
<p id="page-end">183</p>`
const ch17p6 = `<p id="page-start"> </p>
<p id="indent">“Then no.”</p>
<p id="indent">He comes zigzagging at me, probably attempting to throw me off, and swipes at me with his elbow. I duck down, his six-foot frame at a height disadvantage, and stab at his side. It connects, and—</p>
<p id="indent"><em>Ding</em>.</p>
<p id="indent">The tip of the knife lodges itself into his jacket but refuses to go further. I stand back, shocked and confused.</p>
<p id="indent">“I’ve got tricks of my own,” he says, revealing metal armor plating with a smile.</p>
<p id="indent">Guess knives are out of the equation.</p>
<p id="indent">I drop the other knife and immediately whip out one of my pistols, aiming it directly at his head. We both back up a bit, half the room in between us again. His face drops a little.</p>
<p id="indent">“A gun is a little out of character, isn’t it, Luna?”</p>
<p id="indent">“You don’t know me,” I answer. “You don’t know whether or not I’d use this on you.”</p>
<p id="indent">“Your hand is shaking. I have a pretty good idea.”</p>
<p id="indent">Dang it. I am shaking.</p>
<p id="indent">“Wait, don’t tell me this is your first time firing a gun.”</p>
<p id="indent">“Second, actually.”</p>
<p id="indent">“That’s crazy. Have you figured out how to aim when shooting?”</p>
<p id="indent">“Not exactly, but I have enough shots to make one of them count.”</p>
<p id="indent">“Fair enough, I suppose. Well, if you’re gonna shoot me, might as well make it fast.”</p>
<p id="indent">He raises his hands in surrender, but his grin is back. What could he possibly be smirking about right now?</p>
<p id="page-end">184</p>`
const ch17p7 =`<p id="page-start"> </p>
<p id="indent">“I think I heard noises coming from this room,” someone says on the other side of the door. We both turn to look, but my eyes are a lot bigger than his.</p>
<p id="indent">The sound of keys jingling is followed by the doorknob shaking, and the door eventually opens. A large goon stands in the frame, as wide-eyed as I am. </p>
<p id="indent">“Hey there, pal,” Ike says, waving. “As you can see, we’re in the middle of something, so if you could pretend you didn’t walk in on this, that’d be–wait Luna don’t!”</p>
<p id="indent">I switch from aiming at Ike to the goon and blindly fire, a puff of smoke emitting from the business end of the gun. The bullet blasts through his shoulder, and he topples to the ground, yelling. My entire arm goes numb with the force, and the recoil nearly tosses the gun out of my hand. </p>
<p id="indent">Oh my God. I just shot him.</p>
<p id="indent">“Oh my God. You just shot him!” Ike says, repeating my thought. He darts over to my victim, crouching down.</p>
<p id="indent">“I, uh, I wasn’t thinking. I didn’t mean to.”</p>
<p id="indent">“Kid, we’re in serious trouble now. They know we’re here. Get out while you can. I’m gonna try and stop Slaphand from escaping.”</p>
<p id="indent">“What? No. I’m going after him.” I level the gun back at him.</p>
<p id="indent">“Put it down, Luna. Please.”</p>
<p id="indent">“Why should I?”</p>
<p id="indent">“Well, for starters…” he trails off, hunched above the wounded man, and quickly rolls over him, out of view of my prying eyes.</p>
<p id="indent">What a sneaky move.</p>
<p id="indent">I shouldn’t have shot the man. I can’t believe I did that.</p>
<p id="page-end">185</p>`
const ch17p8 = `<p id="page-start"> </p>
<p id="indent">I pocket the gun, step around him, and chase Ike, who’s sprinting along the wall down to one of the unlabeled doors. </p>
<p id="indent">Why did I fire the gun? </p>
<p id="indent">I mean, he probably deserved it. He’s a bad guy. He works for the bad men with bad plans. </p>
<p id="indent">He’s screaming and in pain. An alarm system sounds off, drowning him out. He’s a blood red siren, writhing on the floor.</p>
<p id="indent">Ike stops outside one of the doors, desperately shaking the handle. A few men slowly surround him, ready to attack. He gives up on the door and switches to them.</p>
<p id="indent">It’s a three-on-one battle, and he’s still somehow outperforming them. Watching him with his blinding speed, it almost makes me wonder if he was going easy on me. I barely know the man, but it seems in character.</p>
<p id="indent">A henchman of my own charges at me, and I bounce out of the way. He stops and swings in a full turn, like some sort of tornado. His fist misses, and while he faces away from me, I kick at his back. He stumbles forward into and over a couch, crashing down on a glass coffee table. </p>
<p id="indent">If he gets up, I don’t notice, because I continue towards Ike and his entourage. Two of the original three men are down, but three more have joined in, and it looks like Ike might be in for it.</p>
<p id="indent">Should I help him? </p>
<p id="indent">One of the four spots me and chooses me as their target instead. The choice has been made for me.</p>
<p id="indent">He swings out at the level of my head, so I duck and land a hit on his stomach before kicking off the ground and sending my right fist </p>
<p id="page-end">186</p>`
const ch17p9 = `<p id="page-start"> </p>
<p id="no-indent">into his jaw from below. The knock clearly does some damage, and he crumbles to the floor, unconscious.</p>
<p id="indent">Ike’s taken one of his new friends down, and the other two are a little worse for wear. For what it’s worth, he’s suffering some damage, too. Better to have them wear him down than me.</p>
<p id="indent">I’m approached by a third man from behind, who wraps his beefy arm around my neck and lifts me into the air. I struggle against his force, pointlessly kicking and scratching.</p>
<p id="indent">The blackness of oxygen deprivation tickles the corners of my vision dangerously fast. At this rate, I’ll be out within a minute.</p>
<p id="indent">Ike notices and dips out of his current fight to come blasting at my captor. He sends a blow to the man’s head, and as he’s still reacting, swipes his legs out from under him. The man lets go of me in response, crashing to the ground with a hard thud. </p>
<p id="indent">I’m mad. With the man still lying on the ground, I pound on him, smashing my fist into his head and chest. Ike pulls me off after a moment, and I whip around to go for him, too.</p>
<p id="indent">He dodges back, redirecting my swings using his forearms. Then, he sweeps my feet out from under me, and I follow the beefy man down to the floor.</p>
<p id="indent">“Fighting me isn’t gonna get you anywhere, Luna. Go home. Please.”</p>
<p id="indent">“I’ve gotta get my cat.” My hostility quivers with my lip. This is all too much. I feel battered and bruised, and my lungs are on fire.</p>
<p id="indent">Another two minutes pass of Ike tactfully tormenting the opposition before the last of the excessive guard team is disposed of. He breathes heavily, blood smeared in a few places, and stands upright. </p>
<p id="page-end">187</p>`
const ch17p10 = `<p id="page-start"> </p>
<p id="no-indent">“Good teamwork, kid, for what it’s worth,” he says, dramatically wiping his lip with his thumb. “All that’s left is the big guy. If you leave now, I promise to find out what he’s done with your cat.”</p>
<p id="indent">“I’m not leaving,” I say, standing back up shakily. “This man has caused me too much pain. I’m gonna make sure he gets to feel the same thing he did to me.”</p>
<p id="indent">The sound of screeching tires fills the room. We watch in horror as some sort of armored vehicle comes barreling through the front entrance of the building and parks in the middle of the store.</p>
<p id="indent">“Oh, come on,” Ike says, raising his fists again. “I’ll take all y’all on if I have to, you kno—”</p>
<p id="indent">The unlabeled door behind him crashes off its hinges, smacking directly into him and throwing him ten feet into the air. He hits the ground, unmoving. Slaphand runs out of the room and makes a break for the car.</p>
<p id="indent">“No!” I yell, running after him.</p>
<p id="indent">He turns to give me an evil smile as he hops onto the side of the vehicle, and pounds twice on the side. The car instantly kicks into reverse, speeding out of the building as quickly as it appeared.</p>
<p id="indent">I follow by foot briefly, but there’s no way I’d be able to catch up. They’ve escaped. Slaphand escaped. Again.</p>
<p id="indent">I pull the two guns out of my pockets. My carelessness has once again gotten the better of me. I can’t believe I let this happen.</p>
<p id="indent">I throw them both against the wall in anger.</p>
<p id="indent">I’m my own worst enemy.</p>
<p id="indent"></p>
<p id="indent"></p>
<p id="page-end">188</p>`
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
<p id="indent">Immediately following the events of the battle, I tied him to a rotating chair with my climbing rope. It wasn’t easy lugging his unconscious body through the building while making sure he didn’t wake back up, but apparently, I didn’t have to worry. He never stirred. </p>
<p id="indent">I look down at the cup and splash its contents onto the man’s face. </p>
<p id="page-end">189</p>`
const ch18p2 = `<p id="page-start"> </p>
<p id="no-indent">He gasps awake, sputtering and spitting. “What happened?”</p>
<p id="indent">“I’ll tell you what happened, Mr. Agent Ike,” I say. “I lost Slaphand because of you, and therefore, I lost my cat, too. If you weren’t so busy avoiding being a grown man and teaming up with a seventeen-year-old girl, maybe he wouldn’t have escaped.”</p>
<p id="indent">“Wait, wait, wait. You’re blaming me for him escaping? I’m not the one who fired the gun off and alerted everyone in a fifteen-mile radius to our position!”</p>
<p id="indent">He tries to squirm out of the rope, but ends up spinning himself in a circle. </p>
<p id="indent">“I made this pretty tight,” I say, spinning him some more. “I knew I was no match for you when you woke up, and I desperately need whatever information you have, so I think we’ll cut to the chase. If you don’t tell me where Slaphand’s going next, I’m going to kill you.”</p>
<p id="indent">For the first time since our meeting, fear flashes across his face. “Let’s think this over a little, Luna. I understand you’re upset about losing your cat. It’s a hard thing to lose someone you love, and from the sounds of it, you’ve had to do that a lot.”</p>
<p id="indent">“That’d be correct.”</p>
<p id="indent">“I have people I love, too, and people that love me. I have a daughter and son, a wife, and there’s a girl out there your age hunting Nazis that I plan to adopt soon. I respect your drive and enthusiasm, Luna, and I know you want revenge, but I don’t think you want to do the same thing they’ve done to you.”</p>
<p id="indent">He’s right, isn’t he? I really wish he wasn’t. But he’s one of the good guys, and they’ve been few and far between lately.</p>
<p id="indent">“Okay, fine. But you can’t run away or knock me out as soon as I </p>
<p id="page-end">190</p>`
const ch18p3 =`<p id="page-start"> </p>
<p id="no-indent">untie you.”</p>
<p id="indent">“Sounds fair to me. Tell you what, I’m willing to admit we both sort of screwed this mess up, and I want to offer you a deal. If you’re still on board with it, I’ll work with you and together we can go for Slaphand.”</p>
<p id="indent">“Yeah, alright.”</p>
<p id="indent">“You’ve gotta promise me you’ll try to listen if I have something to say, though.”</p>
<p id="indent">“Don’t push your luck, Agent Ike. You’ve already got your deal. Don’t act like you’re the boss here.”</p>
<p id="indent">“Understood. And please, just Ike. If you’re gonna add the agent, at least make it ‘Secret Agent Ike.’ I worked hard for that title.”</p>
<p id="indent">“Who even are you?” I ask, cutting the rope.</p>
<p id="indent">“Secret Agent Ike, at your service. I work directly for President Jimmy Carter.”</p>
<p id="indent">“And who is Jimmy Carter?”</p>
<p id="indent">“Oh, he’s the president of the United States. Yeah, I’m American, if you couldn’t tell.”</p>
<p id="indent">“I could tell.”</p>
<p id="indent">“Well, good.”</p>
<p id="indent">“Why are you here chasing after Bijabers? Aren’t there issues in America and an entire global war going on?”</p>
<p id="indent">“I’m not gonna lie, I am still very much involved in the war. I’m helping direct a group of kids scouting off in the Pacific Ocean who are enthusiastic about wanting to kill Hitler, and I’m at the top of the feeding order for a lot of the intelligence operations against both the Russian and Nazi armies. As for Bijabers and the crew, they originated </p>
<p id="page-end">191</p>`
const ch18p4 = `<p id="page-start"> </p>
<p id="no-indent">in America, and I’m following where the wind blows.”</p>
<p id="indent">“How do you have time for all of this?”</p>
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
<p id="indent">But at least I liked Mary and Freckles. Well, I still like both of them. Even if I am directly responsible for the death of one of them and the </p>
<p id="page-end">192</p>`
const ch18p5 = `<p id="page-start"> </p>
<p id="no-indent">kidnapping of the other.</p>
<p id="indent">I start the search by walking back to the storage room where we’d originally met. The man I’d shot is gone, meaning he was either carried out when nobody was looking or walked away in the same manner. I might never know if I actually killed him.</p>
<p id="indent">A shiver runs down my spine. Would I have been able to live with myself if I’d killed someone? Not only that, but if it were a purely heat-of-the-moment shot out of fear?</p>
<p id="indent">And maybe he did deserve it, and maybe I was justified in doing it, but that doesn’t change the fact that a man could’ve died by my hands tonight. </p>
<p id="indent">I shake the thought out of my head. I have to focus on finding where Slaphand is going next.</p>
<p id="indent">Using the same strategy I’d used previously, I swipe one of my knives off the floor and cut into some boxes in the storage room. Unsurprisingly, it’s more of the same-old stuff that the other building had in stock. None of the metal parts make very much sense in a store like this, but I know the store’s a front for their true business, anyway.</p>
<p id="indent">Next, I sweep the bathrooms, but nothing of note jumps out at me. It’s funny that the bathroom is the sole sense of normalcy.</p>
<p id="indent">Out in the main area, Ike aggressively kicks against one of the unmarked doors, hoping to break the deadbolt keeping it shut. I stand to watch, counting the blows it takes to send it swinging open.</p>
<p id="indent">Eleven.</p>
<p id="indent">The door bursts open, revealing a room much more akin to a massage parlor than a furniture and appliance store. “This is certainly new,” he says, noting the dark red wallpaper.</p>
<p id="page-end">193</p>`
const ch18p6 = `<p id="page-start"> </p>
<p id="indent">“What do you think the room is for?” I ask, stepping inside. There’s a dark mahogany desk with office supplies sitting on top, a few bookshelves, and a globe with thumbtacks sticking out of it.</p>
<p id="indent">“If I didn’t know any better, I’d say it was a study.”</p>
<p id="indent">“What if you did know better?”</p>
<p id="indent">“Then I’d say it was where he kept all of his information.” Ike moves to one of the books on the bookshelf, pulls it out, and opens it. He flips to the end, where a sticky note marks a page. “They’re heading to the Carmsborough National Museum.”</p>
<p id="indent">“The museum? Why do they want to go there? And also, how did you pick the book that says exactly that?”</p>
<p id="indent">“Sounds like they’ve been doing a lot of underhanded trading there. Buying and auctioning off stolen artwork and items. Says here lots of art, a bounty of gold coins found on board an old airship when it crashed, and lots of antiquities.”</p>
<p id="indent">“I don’t know what that last word means, but I’ve definitely seen some of the art and gold coins. So they’re in Carmsborough because they’re laundering money?”</p>
<p id="indent">He closes the book dramatically with one hand. “I guess. At least, Slaphand is. He’s always been more of a fine-dining kind of guy.”</p>
<p id="indent">“So why were they building the Plasmarizer?”</p>
<p id="indent">“The what now?”</p>
<p id="indent">“The Plasmarizer. It was a weapon on board one of their cloudships that had the power to knock out the <em>Überall</em>, whatever that is. They were mining resources for it on Blood Moon Island.”</p>
<p id="indent">“Sounds fake to me. Nothing we’ve encountered has been able to penetrate the <em>Überall’s</em> shields, save maybe a nuclear blast. That’s one </p>
<p id="page-end">194</p>`
const ch18p7 =`<p id="page-start"> </p>
<p id="no-indent">big frickin’ ship, pardon my French.”</p>
<p id="indent">“Hmm. Anyway, I’m gonna go update my boss. I’ll be sure to keep your name out of it, just in case.”</p>
<p id="indent">“Woah, hold on there, Luna. We don’t have time for formalities like that. We should’ve been moving an hour ago. With situations like this, you have to improvise and be on the move and worry about the paperwork later.”</p>
<p id="indent">“Okay? So what do we do?”</p>
<p id="indent">“I’ll pull the ride up real quick. Have you ever ridden on a motorcycle?”</p>
<p id="indent">“A what?”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">I’d be lying if I said I wasn’t totally enamored by the motorcycle. I’ve never seen anything like it. It’s louder than I’ll get out, but the rush of the wind whipping against my body as we cruise through the city makes me forget all the stress weighing me down. It’s freeing, if not a bit dangerous.</p>
<p id="indent">Luckily for me, he had a spare helmet in a little storage bag, but in order to stay on, I have to loop my arms around his chest. This man that has done nothing but frustrate and contradict me is currently the only thing preventing me from hitting the pavement and cracking my head open.</p>
<p id="indent">The night air is heavy as we weave across the city, unhindered by what little traffic there is. I’m not sure what time it is, but midnight’s gotta be fairly close.</p>
<p id="indent">“What are your plans for when Slaphand’s defeated?” I ask Ike. </p>
<p id="page-end">195</p>`
const ch18p8 = `<p id="page-start"> </p>
<p id="no-indent">Between the breeze and the humming of the motorcycle’s engine, I’m half-yelling. </p>
<p id="indent">“After he’s out of the equation, I’m bringing the heat down on Bijabers if I can. Hopefully the war doesn’t get too messy, but I’m not holding my breath.”</p>
<p id="indent">“I think I might become some sort of vigilante who helps those in need,” I say. “There’s a lot of people that don’t get help, and Orion and the Clockwork certainly aren’t doing it.”</p>
<p id="indent">“Sounds a little harsh to me. He’s been busy keeping the Nazis out of mainland Carmsborough. Their ship count these past few days rivals that of entire countries during the original Steam War.”</p>
<p id="indent">“Nazis aren’t the only problem out there, Ike.”</p>
<p id="indent">“That’s fair. I don’t know Carmsborough enough to weigh in on this situation. We have enough of our own problems in America.”</p>
<p id="indent">“I doubt you have Carmsborough problems, though.”</p>
<p id="indent">“Like what?”</p>
<p id="indent">“Well, racism, for starters.”</p>
<p id="indent">Ike bursts out laughing, and doesn’t stop until we park a block away from the museum. </p>
<p id="indent">“I get you’re not from America, but that’s like the first thing anyone knows. There are plenty of racist old men that don’t go away.”</p>
<p id="indent">“What about homelessness? Is that a big issue?”</p>
<p id="indent">“Oh, for sure. You name a European problem, and I guarantee it’s amplified in America.”</p>
<p id="indent">We remove our helmets in silence. I don’t want to learn any more.</p>
<p id="indent">The two of us walk to the museum, and stop behind a corner together.</p>
<p id="page-end">196</p>`
const ch18p9 = `<p id="page-start"> </p>
<p id="indent">“Cameras,” we both point out. </p>
<p id="indent">“I’ve learned that lesson a few too many times,” I say, recalling my previous adventures.</p>
<p id="indent">“It’s a rookie mistake, but sounds like you’re adapting pretty quickly. I think we should take the lower exit into the maintenance tunnels. They’ll lead into the basement, which will give us the advantage we need to get inside. They won’t have had enough warning by the time we’re beating down on them.”</p>
<p id="indent">“Won’t they have cameras on the inside, too?”</p>
<p id="indent">“Yeah, but this is a makeshift plan for both parties. They’ll be watching the cameras, but nobody’s settled down enough to be truly ready for a second attack tonight. His suit count is low enough that we could honestly ignore a good chunk of them.”</p>
<p id="indent">“Lots of good news. Any bad?”</p>
<p id="indent">“Neither of us knows the layout or where Slaphand is, so it might be a hot minute before we get to him.”</p>
<p id="indent">“Good enough for me.”</p>
<p id="indent">“Cool. I’ll pave a path to the maintenance tunnels. Follow me.”</p>
<p id="indent">Ike waits for us to be out of sight of the nearest camera before sprinting across the cobblestone clearing on his tiptoes, muting the echoes against the building walls. I chase after him, doing the same, although a lot slower.</p>
<p id="indent">Two guards step out of the maintenance tunnel entrance, holding heavy-duty rifles of some sort. Ike notices the look on my face and holds out his hands, trying to reassure me. He points to himself and one of the guards, then me and the other. His idea is clear.</p>
<p id="indent">We sneak over to our respective targets, stand behind them, and, at </p>
<p id="page-end">197</p>`
const ch18p10 =`<p id="page-start"> </p>
<p id="no-indent">the same time, wrap our arms around their necks. It feels weird to be on the giving end of this treatment. Almost dirty.</p>
<p id="indent">I kind of like it.</p>
<p id="indent">Neither of them have much of a chance to do anything but struggle, and within a minute, both are up against the wall, unconscious.</p>
<p id="indent">We enter into the tunnel system, lit scarcely by incandescent bulbs. The air is moist and cold, which is to say uncomfortable.</p>
<p id="indent">“All we have to do is find a way up to the main floor from here, and we’re golden,” Ike whispers. The two of us search the dim area, discovering doors with heavy locks on the outside. A few of them still have the keys in them.</p>
<p id="indent">“How about you check this room, and I’ll check the one down the hall,” I suggest, pointing at a room with a key still in the lock. </p>
<p id="indent">“Don’t get into trouble without me,” he says, stepping inside.</p>
<p id="indent">“No promises,” I respond.</p>
<p id="indent">As soon as he steps fully inside, I close the door shut behind him and lock it. His fists pound against the dark wood, rattling the door, but it doesn’t budge.</p>
<p id="indent">“Let me out, Luna!” he calls out.</p>
<p id="indent">“Sorry, Ike. I’ll let you out once I’ve rescued Freckles.”</p>
<p id="indent">I walk away from the door, tossing the key off to the side. It’s time to get rid of Slaphand. For real this time.</p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="page-end">198</p>`
const ch18p11 = ``
const ch18p12 = ``
const ch18p13 = ``
const ch18p14 = ``
const ch18p15 = ``
const ch18p16 = ``
const ch18p17 = ``
const ch18p18 = ``
const ch18 = [ch18p1, ch18p2, ch18p3, ch18p4, ch18p5, ch18p6, ch18p7, ch18p8, ch18p9, ch18p10, ch18p11, ch18p12, ch18p13, ch18p14, ch18p15, ch18p16, ch18p17, ch18p18]

const ch19p1 = `1`
const ch19p2 = `2`
const ch19p3 = `3`
const ch19p4 = `4`
const ch19p5 = `5`
const ch19p6 = `6`
const ch19p7 = `7`
const ch19p8 = `8`
const ch19p9 = `9`
const ch19p10 = `10`
const ch19p11 = `11`
const ch19p12 = `12`
const ch19p13 = `13`
const ch19p14 = `14`
const ch19p15 = `15`
const ch19p16 = `16`
const ch19p17 = `17`
const ch19p18 = `18`
const ch19 = [ch19p1, ch19p2, ch19p3, ch19p4, ch19p5, ch19p6, ch19p7, ch19p8, ch19p9, ch19p10, ch19p11, ch19p12, ch19p13, ch19p14, ch19p15, ch19p16, ch19p17, ch19p18]

const ch20p1 = `1`
const ch20p2 = `2`
const ch20p3 = `3`
const ch20p4 = `4`
const ch20p5 = `5`
const ch20p6 = `6`
const ch20p7 = `7`
const ch20p8 = `8`
const ch20p9 = `9`
const ch20p10 = `10`
const ch20p11 = `11`
const ch20p12 = `12`
const ch20p13 = `13`
const ch20p14 = `14`
const ch20p15 = `15`
const ch20p16 = `16`
const ch20p17 = `17`
const ch20p18 = `18`
const ch20 = [ch20p1, ch20p2, ch20p3, ch20p4, ch20p5, ch20p6, ch20p7, ch20p8, ch20p9, ch20p10, ch20p11, ch20p12, ch20p13, ch20p14, ch20p15, ch20p16, ch20p17, ch20p18]

const ch21p1 = `1`
const ch21p2 = `2`
const ch21p3 = `3`
const ch21p4 = `4`
const ch21p5 = `5`
const ch21p6 = `6`
const ch21p7 = `7`
const ch21p8 = `8`
const ch21p9 = `9`
const ch21p10 = `10`
const ch21p11 = `11`
const ch21p12 = `12`
const ch21p13 = `13`
const ch21p14 = `14`
const ch21p15 = `15`
const ch21p16 = `16`
const ch21p17 = `17`
const ch21p18 = `18`
const ch21 = [ch21p1, ch21p2, ch21p3, ch21p4, ch21p5, ch21p6, ch21p7, ch21p8, ch21p9, ch21p10, ch21p11, ch21p12, ch21p13, ch21p14, ch21p15, ch21p16, ch21p17, ch21p18]

const ch22p1 = `1`
const ch22p2 = `2`
const ch22p3 = `3`
const ch22p4 = `4`
const ch22p5 = `5`
const ch22p6 = `6`
const ch22p7 = `7`
const ch22p8 = `8`
const ch22p9 = `9`
const ch22p10 = `10`
const ch22p11 = `11`
const ch22p12 = `12`
const ch22p13 = `13`
const ch22p14 = `14`
const ch22p15 = `15`
const ch22p16 = `16`
const ch22p17 = `17`
const ch22p18 = `18`
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