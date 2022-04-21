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
const allowedInnerWidth = 1330;


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
        loadChapter(1, true)
    }
    else {
        loadChapter(1, false)
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
        loadChapter(parseInt(document.getElementById("chapter-mobile").value), true)
    }
    else {
        if (parseInt(document.getElementById("chapter-back").value) == chapterValue) {
            chapterValue = parseInt(document.getElementById("chapter-cover").value)
            loadChapter(parseInt(document.getElementById("chapter-cover").value), false)
        }
        else {
            chapterValue = parseInt(document.getElementById("chapter-back").value)
            loadChapter(parseInt(document.getElementById("chapter-back").value), false)
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
                            <option value="5" class="dropper">Chapter 5</option>`

var mobileFlip = false


const ch1p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 1</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">It’s hard to remember a time before I had to resort to stealing. </p>
<p id="indent">Well, that’s not entirely true. I remember the begging phase, too. Begging for food, money, a bed to sleep on, and to be accepted by an orphanage. </p>
<p id="indent">That was all I could do after mom died. The landlord kicked me out of our apartment when I couldn’t afford rent. I’d go to busy streets and churches, hoping someone would be generous enough to help me out, but it never got me anywhere. So, I switched to stealing.</p>
<p id="indent">Is it moral? </p>
<p id="indent">Is forcing a kid to live on the street for their entire teenage life because their only living parent dies moral? Is going to church to</p>
<p id="page-end">1</p>`
const ch1p1mobile = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 1</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">It’s hard to remember a time before I had to resort to stealing. </p>
<p id="indent">Well, that’s not entirely true. I remember the begging phase, too. Begging for food, money, a bed to sleep on, and to be accepted by an orphanage. </p>
<p id="indent">That was all I could do after mom died. The landlord kicked me out of our apartment when I couldn’t afford rent. I’d go to busy streets and churches, hoping someone would be generous enough to help me out, but it never got me anywhere. So, I switched to stealing.</p>
<p id="indent">Is it moral? </p>
<p id="indent">Is forcing a kid to live on the street for their entire teenage life because their only living parent dies moral? Is </p>
<p id="page-end">1</p>`
const ch1p2 = `<p id="page-start"> </p>
<p id="no-indent">listen to a sermon about helping the poor sinner, but ignoring the starving child on the front steps moral? Is making a teenager work fifty-hour workweeks for just pennies a day moral?</p>
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
<p id="indent">“I’m not arguing with you again today. We’ve gotta get moving if</p>
<p id="page-end">2</p>`
const ch1p2mobile = `<p id="page-start"> </p>
<p id="no-indent">going to church to listen to a sermon about helping the poor sinner, but ignoring the starving child on the front steps moral? Is making a teenager work fifty-hour workweeks for just pennies a day moral?</p>
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
<p id="indent">“I’m not arguing with you again today. We’ve gotta get </p>
<p id="page-end">2</p>`
const ch1p3 = `<p id="page-start"> </p>
<p id="no-indent">we want to get to work on time.”</p>
<p id="indent">We walk out of the defunct building, the ticking of his metal parts echoing quietly in the empty halls. A chilled wind whistles through the holes in the first-floor walls. It’s a good thing this year has been abnormally warm, because I lost my jacket in the last move. I’ll have to find one that I can “borrow” soon.</p>
<p id="indent">“Ready?” </p>
<p id="indent">Freckles tilts his mechanical head, as if acknowledging he doesn’t have much of a choice.</p>
<p id="indent">He’s a one-of-a-kind steambot, built by some super-smart engineer they call the Gearmaster. The dude’s apparently built almost a hundred creatures like the brass tabby wrapped around my neck, but they’ve lost a lot of their spark in the public eye.</p>
<p id="indent">At least, compared to the Clockwork. Some kid named Orion saved all of Carmsborough with the Clockwork by his side, and now they’re heroes. The rest of his life is handed to him, while I get to slave away at the scrapyard for pennies a day.</p>
<p id="indent">All I’m saying is, put me and Freckles in their position, and we would’ve done it, too. Maybe even better.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“What, you don’t think we could’ve done better? I’ve seen you in action, Freckles. No Syndra punk could get past you and me.”</p>
<p id="indent">The streets of Carmsborough are always quiet this early, but today feels different. Maybe today is Christmas? I don’t really have access to a calendar, but I do know it’s December. Although, I’d imagine Cheapskate Chad would’ve mentioned it yesterday. </p>
<p id="indent">Freckles and I reach the scrapyard entrance, and everyone’s lined</p>
<p id="page-end">3</p>`
const ch1p3mobile = `<p id="page-start"> </p>
<p id="no-indent">moving if we want to get to work on time.”</p>
<p id="indent">We walk out of the defunct building, the ticking of his metal parts echoing quietly in the empty halls. A chilled wind whistles through the holes in the first-floor walls. It’s a good thing this year has been abnormally warm, because I lost my jacket in the last move. I’ll have to find one that I can “borrow” soon.</p>
<p id="indent">“Ready?” </p>
<p id="indent">Freckles tilts his mechanical head, as if acknowledging he doesn’t have much of a choice.</p>
<p id="indent">He’s a one-of-a-kind steambot, built by some super-smart engineer they call the Gearmaster. The dude’s apparently built almost a hundred creatures like the brass tabby wrapped around my neck, but they’ve lost a lot of their spark in the public eye.</p>
<p id="indent">At least, compared to the Clockwork. Some kid named Orion saved all of Carmsborough with the Clockwork by his side, and now they’re heroes. The rest of his life is handed to him, while I get to slave away at the scrapyard for pennies a day.</p>
<p id="indent">All I’m saying is, put me and Freckles in their position, and we would’ve done it, too. Maybe even better.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“What, you don’t think we could’ve done better? I’ve seen you in action, Freckles. No Syndra punk could get past you and me.”</p>
<p id="indent">The streets of Carmsborough are always quiet this early, but today feels different. Maybe today is Christmas? I don’t really have access to a calendar, but I do know it’s December. Although, I’d imagine Cheapskate Chad would’ve mentioned it yesterday. </p>
<p id="indent">Freckles and I reach the scrapyard entrance, and </p>
<p id="page-end">3</p>`
const ch1p4 = `<p id="page-start"> </p>
<p id="no-indent">up for attendance. We go to the spot at the end of the line and wait for Chad to write us down. </p>
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
<p id="indent">Freckles and I always meet the quota. I think Foreman Chad would be against our little team-up if it wasn’t beneficial for him. He gets double the labor for the price of one, and we get an extra </p>
<p id="page-end">4</p>`
const ch1p4mobile = `<p id="page-start"> </p>
<p id="no-indent">everyone’s lined up for attendance. We go to the spot at the end of the line and wait for Chad to write us down. </p>
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
<p id="indent">Freckles and I always meet the quota. I think Foreman Chad would be against our little team-up if it wasn’t beneficial for him. He gets double the labor for the price of</p>
<p id="page-end">4</p>`
const ch1p5 = `<p id="page-start"> </p>
<p id="no-indent">quarter. A dollar a day hardly gets you anywhere, but it builds up over time. </p>
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
<p id="indent">By the time our shift ended, nothing else interesting had happened, so we got our dollar from the Foreman and started the </p>
<p id="page-end">5</p>`
const ch1p5mobile = `<p id="page-start"> </p>
<p id="no-indent">one, and we get an extra quarter. A dollar a day hardly gets you anywhere, but it builds up over time. </p>
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
<p id="indent">By the time our shift ended, nothing else interesting had happened, so we got our dollar from the Foreman and </p>
<p id="page-end">5</p>`
const ch1p6 = `<p id="page-start"> </p>
<p id="no-indent">trek to find the man at the docks. Fortunately for us, the Industrial District is right next to the Commerce District, so the walk isn’t unbearably long.</p>
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
const ch1p6mobile = `<p id="page-start"> </p>
<p id="no-indent">started the trek to find the man at the docks. Fortunately for us, the Industrial District is right next to the Commerce District, so the walk isn’t unbearably long.</p>
<p id="indent">We weave through the streets for about an hour, stopping only for the occasional car, and eventually reach the first set of docks in the district.</p>
<p id="indent">Carmsborough docks are unique, to say the least. Half of them sit at sea level, while the other half hover about thirty feet in the air, supported by dangerously skinny wooden beams. </p>
<p id="indent">A loud whistle sounds off to our right. We look over and see a cloudship in one of the upper docks about to set sail. Its balloon is massive and seems like it could pop with the slightest touch. </p>
<p id="indent">Once upon a time, I wanted to fly in a cloudship. They’re a strange Carmsborough invention that can sail both the seas and the skies, but have such a limited range that they’re hardly worth anything commercially. Most can only make it as far as London before needing a refuel. Still, to feel the breeze in your hair like that…</p>
<p id="indent">Maybe someday. For now, there’s a beeping gadget to pawn off.</p>
<p id="indent">“Is that Luna I see?” I hear from across the cobbled street. It belongs to Shady Shane, sitting on a bench, wearing an overcoat that is definitely too big. </p>
<p id="indent">“Well, if it isn’t the man of the hour,” I say, making my way over. “I’ve got something I think you’ll be interested in, Shane.”</p>
<p id="indent">“Let’s see it, then.” He smiles at me, revealing missing teeth and… dirt? Cavities? I’m not sure.</p>
<p id="indent">“Remember, no running off with what I give you.” I reveal the noisy object in my hand and offer it to him. “Freckles is a lot faster than both of us, and heavier than </p>
<p id="page-end">6</p>`
const ch1p7 = `<p id="page-start"> </p>
<p id="indent">“Yes, yes, I remember.”</p>
<p id="indent">He takes the item from me and gives it a solid look for about ten seconds before his eyes go wide. The item falls out of his hand and drops to the ground as he bolts up from the bench.</p>
<p id="indent">“Are you trying to get us in trouble, kid?” </p>
<p id="indent">“What? No? What is it?”</p>
<p id="indent">“That belongs to a mob boss. See that ‘B’ on the side of it? He marks all of his important mob boss stuff with that. Where’d you find this?”</p>
<p id="indent">“I found it at the scrapyard. Are you sure it belongs to a mob boss?”</p>
<p id="indent">“Oh God, what if that beeping is a tracker? What if you’ve led him straight to us?”</p>
<p id="indent">“Calm down, Shane. Who’s the mob boss?”</p>
<p id="indent">“Get away from me, Luna, and don’t come back until you’ve gotten rid of that thing.”</p>
<p id="indent">Shane glances one last time at me, Freckles, and the machine, and dramatically darts off down the street. </p>
<p id="indent">I came all the way to the Commerce District for <em>this?</em></p>
<p id="indent">I pick the item back up and put it back in one of my pockets. There’s no way what Shane is saying is true. Probably just another one of his schizophrenic rants. He’ll be back in an hour, apologizing for the outburst.</p>
<p id="indent">That said, he’s never acted that way when I’ve brought him an item. Could it really belong to a mob boss? And, second question, could I give it back to said mob boss for a small chunk of change?</p>
<p id="indent">Both are excellent questions for when Shane comes back and apologizes to me. While I’m here, I might as well hunt for dinner or something else to scavenge.</p>
<p id="page-end">7</p>`
const ch1p7mobile = `<p id="page-start"> </p>
<p id="no-indent">you’d expect.”</p>
<p id="indent">“Yes, yes, I remember.”</p>
<p id="indent">He takes the item from me and gives it a solid look for about ten seconds before his eyes go wide. The item falls out of his hand and drops to the ground as he bolts up from the bench.</p>
<p id="indent">“Are you trying to get us in trouble, kid?” </p>
<p id="indent">“What? No? What is it?”</p>
<p id="indent">“That belongs to a mob boss. See that ‘B’ on the side of it? He marks all of his important mob boss stuff with that. Where’d you find this?”</p>
<p id="indent">“I found it at the scrapyard. Are you sure it belongs to a mob boss?”</p>
<p id="indent">“Oh God, what if that beeping is a tracker? What if you’ve led him straight to us?”</p>
<p id="indent">“Calm down, Shane. Who’s the mob boss?”</p>
<p id="indent">“Get away from me, Luna, and don’t come back until you’ve gotten rid of that thing.”</p>
<p id="indent">Shane glances one last time at me, Freckles, and the machine, and dramatically darts off down the street. </p>
<p id="indent">I came all the way to the Commerce District for <em>this?</em></p>
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
<p id="indent">“Normally I wouldn’t,” he says, walking closer to me, “but said </p>
<p id="page-end">8</p>`
const ch1p8mobile = `<p id="page-start"> </p>
<p id="indent">With Freckles still beside me, I work my way through the buildings between the Commerce and Industrial districts, and the smell of warm bread wafts our way. It’s heaven to my nose every time. </p>
<p id="indent">I make a beeline straight for the source and find myself face-to-face with Thatch’s Bakery. It’s been about three months since I’ve had fresh bread like this, and I’ll have to keep waiting. Freckles and I loop around to the back, hoping to discover a dumpster to raid.</p>
<p id="indent">It’s not stealing if you didn’t want it anyway, I don’t think. I don’t know. I’m sure a lawyer wouldn’t agree with me, but if it’s in the dumpster, what more are you going to do with it? I lift the lid, and…</p>
<p id="indent">Jackpot.</p>
<p id="indent">A dumpster <em>filled</em> with bread. They must’ve just cleaned their inventory. If I’d planned to go to the Commerce District this morning and go scavenging, I would’ve grabbed a bag or two to take stuff in. I guess I’ll have to settle with whatever I can fit in my arms.</p>
<p id="indent">“You plannin’ on sharin’?” a voice says behind me. My hand isn’t even all the way in the dumpster yet. Freckles starts his metallic growling.</p>
<p id="indent">I turn to see who it is, but I don’t recognize the guy. Probably just some random scavenger, and I’m in one of his claims.</p>
<p id="indent">Of course the place with a dumpster full of bread is gonna have claims already staked. You’ve outdone yourself this time on the critical thinking test, Luna.</p>
<p id="indent">“Yes, sir, I certainly am planning on sharing,” I say, backing away from the dumpster. “I wasn’t sure if this was claimed or not, but I’m desperately hungry. You wouldn’t have a problem with a little girl like me getting some food here, right?”</p>
<p id="indent">“Normally I wouldn’t,” he says, walking closer to me, </p>
<p id="page-end">8</p>`
const ch1p9 = `<p id="page-start"> </p>
<p id="no-indent">little girl has one blaring flaw that I simply can’t ignore.”</p>
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
const ch1p9mobile = `<p id="page-start"> </p>
<p id="no-indent">“but said little girl has one blaring flaw that I simply can’t ignore.”</p>
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
<p id="indent">We weave through a couple of back alleys and emerge on a different street. I slow my pace and join the crowd flowing through the sidewalks. For all they know, we didn’t do anything. We bought this bread with our hard-earned money and didn’t just fight another homeless person for it.</p>
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
const ch1p10mobile = `<p id="page-start"> </p>
<p id="indent">We weave through a couple of back alleys and emerge on a different street. I slow my pace and join the crowd flowing through the sidewalks. For all they know, we didn’t do anything. We bought this bread with our hard-earned money and didn’t just fight another homeless person for it.</p>
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
<p id="indent">There won’t be very many shortcuts through alleys on this adventure. Looks like the rest of Carmsborough gets to see me walking around, bread clung to my chest, following a beeping cube in my hand.</p>
<p id="indent">Even though all of Carmsborough was sectioned out into districts nearly a hundred years ago, the gray streets and the buildings that fit in between them are winding and pattern-less. Most buildings don’t even have alleyways, and the ones that do are usually rat infested or occupied by someone just as fortunate as me.</p>
<p id="indent">We cross the streets and walk the cracked sidewalks through the Commerce District, avoiding cars and bikers whenever possible.</p>
<p id="indent"><em>Beep beep beep. Beep beep beep.</em></p>
<p id="indent">“Closer…”</p>
<p id="indent">This is the furthest I’ve ever been inside of the Commerce District. Buildings are taller and more modern now, with large, reflective windows, lots of metal, and people wearing suits coming in and out of the fancy spinning doors.</p>
<p id="indent">I’ll bet if I robbed one of these suits, they’d be loaded with cash.</p>
<p id="indent">“Meow.”</p>
<p id="page-end">11</p>`
const ch1p11mobile = `<p id="page-start"> </p>
<p id="indent">“Of course this is a good idea, Freckles. Where’s that bravado you had last year when we went down to the old fishing dock?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Well then, let’s go. Maybe it’ll lead us to treasure. Besides, we don’t work tomorrow, so we can afford to have an overnight hunt.”</p>
<p id="indent">We head back out to the spot Freckles first noticed the beeping at and check to make sure it’s still beeping faster before starting our adventure.</p>
<p id="indent"><em>Beep beep. Beep beep.</em></p>
<p id="indent">There won’t be very many shortcuts through alleys on this adventure. Looks like the rest of Carmsborough gets to see me walking around, bread clung to my chest, following a beeping cube in my hand.</p>
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
const ch1p12mobile = `<p id="page-start"> </p>
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
const ch1p13mobile = ``
const ch1p14 = ``
const ch1p14mobile = ``
const ch1p15 = ``
const ch1p15mobile = ``
const ch1p16 = ``
const ch1p16mobile = ``
const ch1p17 = ``
const ch1p17mobile = ``
const ch1p18 = ``
const ch1p18mobile = ``
const ch1 = [ch1p1, ch1p2, ch1p3, ch1p4, ch1p5, ch1p6, ch1p7, ch1p8, ch1p9, ch1p10, ch1p11, ch1p12, ch1p13, ch1p14, ch1p15, ch1p16, ch1p17, ch1p18]
const ch1mobile = [ch1p1mobile, ch1p2mobile, ch1p3mobile, ch1p4mobile, ch1p5mobile, ch1p6mobile, ch1p7mobile, ch1p8mobile, ch1p9mobile, ch1p10mobile, ch1p11mobile, ch1p12mobile, ch1p13mobile, ch1p14mobile, ch1p15mobile, ch1p16mobile, ch1p17mobile, ch1p18mobile]

const ch2p1 = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 2</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“Tell me, when you clap, does it sound like a building collapsing?” I ask, trying to quickly think of a way to get out of this mess. Nothing in the alley to fight with, and no way out without plowing through one of them.</p>
<p id="indent">“That’s a good one,” the man says. “Not very original, but a good one nonetheless.” He steps closer to me.</p>
<p id="indent">Do I take on the big-handed guy, the muscular guy, or give them the beeper thing and pray that they let me go? </p>
<p id="indent">Freckles, apparently making the choice for us, lets out a loud roar and charges for the goon behind us, who braces for impact. I follow suit, yelling and charging. </p>
<p id="indent">The goon takes the impact of the heavy metallic beast pretty </p>
<p id="page-end">13</p>`
const ch2p1mobile = `<p id="page-start"> </p>
<p id="chapter-header">Chapter 2</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“Tell me, when you clap, does it sound like a building collapsing?” I ask, trying to quickly think of a way to get out of this mess. Nothing in the alley to fight with, and no way out without plowing through one of them.</p>
<p id="indent">“That’s a good one,” the man says. “Not very original, but a good one nonetheless.” He steps closer to me.</p>
<p id="indent">Do I take on the big-handed guy, the muscular guy, or give them the beeper thing and pray that they let me go? </p>
<p id="indent">Freckles, apparently making the choice for us, lets out a loud roar and charges for the goon behind us, who braces for impact. I follow suit, yelling and charging. </p>
<p id="indent">The goon takes the impact of the heavy metallic beast </p>
<p id="page-end">13</p>`
const ch2p2 = `<p id="page-start"> </p>
<p id="no-indent">well, but crumbles when I collide right after. The three of us fall over, one on top of the other. I scramble to get back up before anything else happens. The bread in my arm suffered a bit, but it’s still edible. </p>
<p id="indent">Behind us, the large-handed man rushes down the alley. Freckles and I pause for a second and run for the docks. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I know we’re in trouble now, Freckles. What would you have recommended back there?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“This thing might lead to a jackpot. I couldn’t just give up at the first disproportionate man I crossed.”</p>
<p id="indent">My clunky boots and his heavy paws make satisfying sounds with every step on the old wooden dock as we run, turning heads and clearing out a path in front of us. I don’t dare check to see how close they are. The last thing I want is to be tackled by a grown man on a densely populated dock.</p>
<p id="indent"><em>Beep beep beep beep. Beep beep beep beep.</em></p>
<p id="indent">Cloudships with different-colored balloons blur past us, all in different stages of docking or undocking. For a moment, I get distracted by the colors and designs on each. Some are really artistic, while others have a simple pastel color.</p>
<p id="indent">Reality comes crashing back to me immediately. My eyes lock onto the dock, and I spot a cart of melons wheeling out in front of me way too late. Freckles manages to jump over the cart to avoid it, but I crash into its side, stopping me dead in my tracks and dislodging an army of watermelon.</p>
<p id="indent">I drop all of the bread instinctively, and let myself look back at </p>
<p id="page-end">14</p>`
const ch2p2mobile = `<p id="page-start"> </p>
<p id="no-indent">pretty well, but crumbles when I collide right after. The three of us fall over, one on top of the other. I scramble to get back up before anything else happens. The bread in my arm suffered a bit, but it’s still edible. </p>
<p id="indent">Behind us, the large-handed man rushes down the alley. Freckles and I pause for a second and run for the docks. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I know we’re in trouble now, Freckles. What would you have recommended back there?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“This thing might lead to a jackpot. I couldn’t just give up at the first disproportionate man I crossed.”</p>
<p id="indent">My clunky boots and his heavy paws make satisfying sounds with every step on the old wooden dock as we run, turning heads and clearing out a path in front of us. I don’t dare check to see how close they are. The last thing I want is to be tackled by a grown man on a densely populated dock.</p>
<p id="indent"><em>Beep beep beep beep. Beep beep beep beep.</em></p>
<p id="indent">Cloudships with different-colored balloons blur past us, all in different stages of docking or undocking. For a moment, I get distracted by the colors and designs on each. Some are really artistic, while others have a simple pastel color.</p>
<p id="indent">Reality comes crashing back to me immediately. My eyes lock onto the dock, and I spot a cart of melons wheeling out in front of me way too late. Freckles manages to jump over the cart to avoid it, but I crash into its side, stopping me dead in my tracks and dislodging an army of watermelon.</p>
<p id="indent">I drop all of the bread instinctively, and let myself look </p>
<p id="page-end">14</p>`
const ch2p3 = `<p id="page-start"> </p>
<p id="no-indent">two men chasing us. They’re far enough away from me, but closing in quickly. With the beeper still in my hand, and going off insanely fast, I grab a loaf of bread and a small melon and zip right around the cart.</p>
<p id="indent">“Hey! You have to pay for that!” the cart owner yells after me.</p>
<p id="indent">“Sorry, not sorry!” I yell back, rejoining Freckles. We make it a little further before hearing a loud crash. Without looking back, I know they just charged through the cart. They’re gaining on us, but I still have no clue where the beeper is leading us—</p>
<p id="indent"><em>Beeeeeeeeeeeep.</em></p>
<p id="indent">We stop right in front of a plain, unassuming cloudship. This must be the spot the device wants us to be at. But why?</p>
<p id="indent">Freckles and I exchange a brief glance and simultaneously decide to hop on board. </p>
<p id="indent">My first time on board a cloudship, and it’s hiding from a mob boss.</p>
<p id="indent">We rush to the inside of the deck, where I can only assume the steering wheel is, hoping they didn’t see which ship we went inside of.</p>
<p id="indent">“Meow.” Freckles points his head towards a smaller room. Its lights are off, but I can faintly make out a steering wheel and a few other buttons through the faint sunlight peeking in through the windows.</p>
<p id="indent">“You’re the best, Freckles,” I whisper, despite knowing that the beeping of the device is still active and incredibly loud, and tiptoe my way over to the room. There’s a light switch on the inside that I flip, revealing labels, cables, and a wide array of unlabeled buttons. Luckily for us, someone left the keys inside of the ignition.</p>
<p id="indent"><em>Creak.</em></p>
<p id="indent">A board above us strains under the weight of a foot. If there’s</p>
<p id="page-end">15</p>`
const ch2p3mobile = `<p id="page-start"> </p>
<p id="no-indent">back at the the two men chasing us. They’re far enough away from me, but closing in quickly. With the beeper still in my hand, and going off insanely fast, I grab a loaf of bread and a small melon and zip right around the cart.</p>
<p id="indent">“Hey! You have to pay for that!” the cart owner yells after me.</p>
<p id="indent">“Sorry, not sorry!” I yell back, rejoining Freckles. We make it a little further before hearing a loud crash. Without looking back, I know they just charged through the cart. They’re gaining on us, but I still have no clue where the beeper is leading us—</p>
<p id="indent"><em>Beeeeeeeeeeeep.</em></p>
<p id="indent">We stop right in front of a plain, unassuming cloudship. This must be the spot the device wants us to be at. But why?</p>
<p id="indent">Freckles and I exchange a brief glance and simultaneously decide to hop on board. </p>
<p id="indent">My first time on board a cloudship, and it’s hiding from a mob boss.</p>
<p id="indent">We rush to the inside of the deck, where I can only assume the steering wheel is, hoping they didn’t see which ship we went inside of.</p>
<p id="indent">“Meow.” Freckles points his head towards a smaller room. Its lights are off, but I can faintly make out a steering wheel and a few other buttons through the faint sunlight peeking in through the windows.</p>
<p id="indent">“You’re the best, Freckles,” I whisper, despite knowing that the beeping of the device is still active and incredibly loud, and tiptoe my way over to the room. There’s a light switch on the inside that I flip, revealing labels, cables, and a wide array of unlabeled buttons. Luckily for us, someone left the keys inside of the ignition.</p>
<p id="indent"><em>Creak.</em></p>
<p id="indent">A board above us strains under the weight of a foot. If </p>
<p id="page-end">15</p>`
const ch2p4 = `<p id="page-start"> </p>
<p id="no-indent">any time to kick this puppy into full gear, it’s now.</p>
<p id="indent">I carefully set the bread and watermelon down on the floor and turn the key in the ignition. The controls in front of me spring to life, and somewhere on board, the hum of the engine kicks in. </p>
<p id="indent">“Now, how do we get this thing moving?”</p>
<p id="indent">The sound of footsteps descends the stairs in the room over. Freckles readies himself, waiting to pounce behind the doorframe. My eyes frantically scan the buttons and levers in front of me, hoping to discover some sort of clue. They land on a large switch that says “ENGAGE LOCK” at one end and “DISENGAGE LOCK” on the other. It’s flipped up to the engaged option.</p>
<p id="indent">“Here’s hoping this is the right thing to do,” I say, pulling the lever down. The ship lurches, and my gut slams into the steering wheel. I hear the footsteps in the other room stumble a bit, but continue rushing in our direction.</p>
<p id="indent">The ship rises a bit and moves forward, marking our ascent away from the commerce dock. I turn and clench my fists, ready to fight the man on board. He appears in the doorway, and Freckles launches himself at the thug. </p>
<p id="indent">The man, caught entirely off guard, is forced backwards by the impact, and his head connects with a metal pipe jutting out from the wall. The pipe cracks open, spraying out what I can only hope is steam. He hits the floor, clearly unconscious.</p>
<p id="indent">I unclench my fists and stand in shock.</p>
<p id="indent">“Well, uh, good job, Freckles.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Now what do we do?”</p>
<p id="indent">“Meow.”</p>
<p id="page-end">16</p>`
const ch2p4mobile = `<p id="page-start"> </p>
<p id="no-indent">there’s any time to kick this puppy into full gear, it’s now.</p>
<p id="indent">I carefully set the bread and watermelon down on the floor and turn the key in the ignition. The controls in front of me spring to life, and somewhere on board, the hum of the engine kicks in. </p>
<p id="indent">“Now, how do we get this thing moving?”</p>
<p id="indent">The sound of footsteps descends the stairs in the room over. Freckles readies himself, waiting to pounce behind the doorframe. My eyes frantically scan the buttons and levers in front of me, hoping to discover some sort of clue. They land on a large switch that says “ENGAGE LOCK” at one end and “DISENGAGE LOCK” on the other. It’s flipped up to the engaged option.</p>
<p id="indent">“Here’s hoping this is the right thing to do,” I say, pulling the lever down. The ship lurches, and my gut slams into the steering wheel. I hear the footsteps in the other room stumble a bit, but continue rushing in our direction.</p>
<p id="indent">The ship rises a bit and moves forward, marking our ascent away from the commerce dock. I turn and clench my fists, ready to fight the man on board. He appears in the doorway, and Freckles launches himself at the thug. </p>
<p id="indent">The man, caught entirely off guard, is forced backwards by the impact, and his head connects with a metal pipe jutting out from the wall. The pipe cracks open, spraying out what I can only hope is steam. He hits the floor, clearly unconscious.</p>
<p id="indent">I unclench my fists and stand in shock.</p>
<p id="indent">“Well, uh, good job, Freckles.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Now what do we do?”</p>
<p id="indent">“Meow.”</p>
<p id="page-end">16</p>`
const ch2p5 = `<p id="page-start"> </p>
<p id="indent">I turn back around to face the cockpit windshield. The shock on my face turns to horror.</p>
<p id="indent">We’re about to collide with another cloudship.</p>
<p id="indent">“Ohmygod ohmygod ohmygod!”</p>
<p id="indent">I spin the steering wheel quick and hard to the right, and the whole ship shutters and tilts. There’s a long bar next to the steering wheel that looks like it can be moved up and down, so I give it a try. My stomach flips as the ship sinks lower in the air, coming closer to the crashing water below us.</p>
<p id="indent">The cloudship disappears from view above us as we limbo between it and the ocean, but just in front of us, two more ships appear. And, of course, both are directly in our path.</p>
<p id="indent">“I should’ve gone up.” I pull the bar down towards me as hard as possible. My commandeered ship groans under the strain, but does as told, and narrowly dodges the other two.</p>
<p id="indent">I scan the entire cockpit window, making sure that was the last of the fun obstacles in our way. The sky is a kaleidoscope of colors, but unblotted by any clouds or more cloudships. If I weren’t choking on adrenaline right now, it might be beautiful.</p>
<p id="indent">“Meow.”</p>
<p id="indent">Freckles nudges one of the unconscious man’s arms, which flops lifelessly back to the floor. His victim, the large muscular man we’d had the pleasure of meeting earlier in the alley, clearly never stood a chance.</p>
<p id="indent">“We should tie him up in case he wakes up again.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I sure hope there’s rope, otherwise we’re in some serious trouble. And I have no intention of throwing him off into the ocean.”</p>
<p id="page-end">17</p>`
const ch2p5mobile = `<p id="page-start"> </p>
<p id="indent">I turn back around to face the cockpit windshield. The shock on my face turns to horror.</p>
<p id="indent">We’re about to collide with another cloudship.</p>
<p id="indent">“Ohmygod ohmygod ohmygod!”</p>
<p id="indent">I spin the steering wheel quick and hard to the right, and the whole ship shutters and tilts. There’s a long bar next to the steering wheel that looks like it can be moved up and down, so I give it a try. My stomach flips as the ship sinks lower in the air, coming closer to the crashing water below us.</p>
<p id="indent">The cloudship disappears from view above us as we limbo between it and the ocean, but just in front of us, two more ships appear. And, of course, both are directly in our path.</p>
<p id="indent">“I should’ve gone up.” I pull the bar down towards me as hard as possible. My commandeered ship groans under the strain, but does as told, and narrowly dodges the other two.</p>
<p id="indent">I scan the entire cockpit window, making sure that was the last of the fun obstacles in our way. The sky is a kaleidoscope of colors, but unblotted by any clouds or more cloudships. If I weren’t choking on adrenaline right now, it might be beautiful.</p>
<p id="indent">“Meow.”</p>
<p id="indent">Freckles nudges one of the unconscious man’s arms, which flops lifelessly back to the floor. His victim, the large muscular man we’d had the pleasure of meeting earlier in the alley, clearly never stood a chance.</p>
<p id="indent">“We should tie him up in case he wakes up again.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I sure hope there’s rope, otherwise we’re in some serious trouble. And I have no intention of throwing him off into the ocean.”</p>
<p id="page-end">17</p>`
const ch2p6 = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I figured you’d appreciate that.”</p>
<p id="indent">I duck under the steam still spewing out of the pipe, and the two of us go to explore the admittedly small ship, hunting for rope or something close enough to it to tie the thug down.</p>
<p id="indent">“Can we talk about how well I handled steering this thing back there? I was a natural. Didn’t even know what that bar did.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“No, it wasn’t luck. It’s called intuition.”</p>
<p id="indent">On the top deck, we find a storage room filled with random food, miscellaneous tools, and enough rope to stretch the entire length of the ship. It’s incredibly thick. I can’t even wrap my whole hand around its circumference. Carrying this much rope is out of the question.</p>
<p id="indent">“Now what?”</p>
<p id="indent">Freckles leans forward and opens his mouth, letting the knife we took from the homeless man earlier clatter to the ground. </p>
<p id="indent">“Wait, you’ve been stashing that in there the entire time? Where was that when we were pinned down in the alley?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Oh no, you don’t get to take moral high ground when we’re facing certain doom like that. We’re going to have a serious conversation about when it’s okay to stab people after we get this figured out.”</p>
<p id="indent">I roll a solid portion of rope off of its comically large spindle and start cutting away at it with the knife. Then, I throw one end over my shoulder and drag the rest of it behind me on the ground. Freckles bats at the other end the entire way back down to the unconscious man on the lower level.</p>
<p id="page-end">18</p>`
const ch2p6mobile = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Yeah, I figured you’d appreciate that.”</p>
<p id="indent">I duck under the steam still spewing out of the pipe, and the two of us go to explore the admittedly small ship, hunting for rope or something close enough to it to tie the thug down.</p>
<p id="indent">“Can we talk about how well I handled steering this thing back there? I was a natural. Didn’t even know what that bar did.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“No, it wasn’t luck. It’s called intuition.”</p>
<p id="indent">On the top deck, we find a storage room filled with random food, miscellaneous tools, and enough rope to stretch the entire length of the ship. It’s incredibly thick. I can’t even wrap my whole hand around its circumference. Carrying this much rope is out of the question.</p>
<p id="indent">“Now what?”</p>
<p id="indent">Freckles leans forward and opens his mouth, letting the knife we took from the homeless man earlier clatter to the ground. </p>
<p id="indent">“Wait, you’ve been stashing that in there the entire time? Where was that when we were pinned down in the alley?”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Oh no, you don’t get to take moral high ground when we’re facing certain doom like that. We’re going to have a serious conversation about when it’s okay to stab people after we get this figured out.”</p>
<p id="indent">I roll a solid portion of rope off of its comically large spindle and start cutting away at it with the knife. Then, I throw one end over my shoulder and drag the rest of it behind me on the ground. Freckles bats at the other end the entire way back down to the unconscious man on the lower level.</p>
<p id="page-end">18</p>`
const ch2p7 = `<p id="page-start"> </p>
<p id="indent">Freckles grabs the opposite end of the rope in his mouth, and together we loop around the motionless man until the rope is barely sticking out from the wrapped mess. I tie the thick rope to the best of my ability, and we push the man against a wall.</p>
<p id="indent">“Hopefully that holds him. I’m gonna get some dinner now.”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Despite having an understandably limited stock of food, I found cheese, water, and a barrel full of peanuts to match the bread and watermelon I’d stolen earlier. There was also beer, but I didn’t figure driving an airship for the first time and holding a man three times my size captive while drunk was a good idea.</p>
<p id="indent">I brought the food and water down with me to the cockpit, which is getting uncomfortably warm with the steam still leaking out of that pipe. My next goal is to find something to patch that up with, because there’s no way that pipe isn’t important.</p>
<p id="indent">It doesn’t take me long to finish half the small watermelon, which I cut up using the stolen knife, so I switch to some of the other foods in front of me.</p>
<p id="indent">“You know, this is easily my most diverse meal this month. Maybe this really was a good idea.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“But think of all the possibilities now. We could go to London, or even France if we want. We could become sky pirates and fight for justice. Think about it: ‘Captain Luna, the blood moon pirate.’ How does that sound?”</p>
<p id="indent">“Meow.”</p>
<p id="page-end">19</p>`
const ch2p7mobile = `<p id="page-start"> </p>
<p id="indent">Freckles grabs the opposite end of the rope in his mouth, and together we loop around the motionless man until the rope is barely sticking out from the wrapped mess. I tie the thick rope to the best of my ability, and we push the man against a wall.</p>
<p id="indent">“Hopefully that holds him. I’m gonna get some dinner now.”</p>
<p id="story-break">∙ ◦ ○(        )○ ◦ ∙</p>
<p id="indent">Despite having an understandably limited stock of food, I found cheese, water, and a barrel full of peanuts to match the bread and watermelon I’d stolen earlier. There was also beer, but I didn’t figure driving an airship for the first time and holding a man three times my size captive while drunk was a good idea.</p>
<p id="indent">I brought the food and water down with me to the cockpit, which is getting uncomfortably warm with the steam still leaking out of that pipe. My next goal is to find something to patch that up with, because there’s no way that pipe isn’t important.</p>
<p id="indent">It doesn’t take me long to finish half the small watermelon, which I cut up using the stolen knife, so I switch to some of the other foods in front of me.</p>
<p id="indent">“You know, this is easily my most diverse meal this month. Maybe this really was a good idea.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“But think of all the possibilities now. We could go to London, or even France if we want. We could become sky pirates and fight for justice. Think about it: ‘Captain Luna, the blood moon pirate.’ How does that sound?”</p>
<p id="indent">“Meow.”</p>
<p id="page-end">19</p>`
const ch2p8 = `<p id="page-start"> </p>
<p id="indent">“Yeah, I’ve been sitting on that one for a while. I think it has a nice ring to it.”</p>
<p id="indent">Red flashing lights start going off in the cockpit, and a blaring siren kicks in. Freckles and I both bolt upright, startled by the sudden interruption.</p>
<p id="indent">“I’m not sure what this means,” I say, hunting for clues on the dashboard. Nothing jumps out at me. A scan of the windshield leaves me empty-handed, too.</p>
<p id="indent">I run up to the top deck of the ship and look out at the rest of the area surrounding me. Behind us, five cloudships are slowly approaching, each bearing the same ‘B’ symbol as the beeper in my pocket.</p>
<p id="indent">The beeper.</p>
<p id="indent">I can’t believe I forgot about the beeper! It’s hard to notice over the sirens, but the beeping object is still violently flashing and keeping its high-pitched tempo. It has to belong to something around here.</p>
<p id="indent">I rush back down to the cockpit. Freckles is hunched over, his back arched angrily. </p>
<p id="indent">“We’ve got company following behind us,” I say, searching for a spot to plug the strange item in. “I think we’ll have to loop back to Carmsborough, because I doubt there’s enough gas to outrun these guys, or any weapons to slow them down.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I can’t just stop midair, Freckles. Besides, I don’t think they’re going to be all that friendly with us after what we did to brawns over in the corner.”</p>
<p id="indent">I turn the steering wheel left, trying to make my way back to the docks without getting rammed by the five enemies slowly charting </p>
<p id="page-end">20</p>`
const ch2p8mobile = `<p id="page-start"> </p>
<p id="indent">“Yeah, I’ve been sitting on that one for a while. I think it has a nice ring to it.”</p>
<p id="indent">Red flashing lights start going off in the cockpit, and a blaring siren kicks in. Freckles and I both bolt upright, startled by the sudden interruption.</p>
<p id="indent">“I’m not sure what this means,” I say, hunting for clues on the dashboard. Nothing jumps out at me. A scan of the windshield leaves me empty-handed, too.</p>
<p id="indent">I run up to the top deck of the ship and look out at the rest of the area surrounding me. Behind us, five cloudships are slowly approaching, each bearing the same ‘B’ symbol as the beeper in my pocket.</p>
<p id="indent">The beeper.</p>
<p id="indent">I can’t believe I forgot about the beeper! It’s hard to notice over the sirens, but the beeping object is still violently flashing and keeping its high-pitched tempo. It has to belong to something around here.</p>
<p id="indent">I rush back down to the cockpit. Freckles is hunched over, his back arched angrily. </p>
<p id="indent">“We’ve got company following behind us,” I say, searching for a spot to plug the strange item in. “I think we’ll have to loop back to Carmsborough, because I doubt there’s enough gas to outrun these guys, or any weapons to slow them down.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I can’t just stop midair, Freckles. Besides, I don’t think they’re going to be all that friendly with us after what we did to brawns over in the corner.”</p>
<p id="indent">I turn the steering wheel left, trying to make my way back to the docks without getting rammed by the five enemies </p>
<p id="page-end">20</p>`
const ch2p9 = `<p id="page-start"> </p>
<p id="no-indent">their path over to us. </p>
<p id="indent">Now what to do with the beeper?</p>
<p id="indent">Freckles and I search the ship again, looking in rooms new and old for a place to put the cube. Through the windows, we can see Carmsborough slowly reappearing along the horizon, and the ships edging slightly closer by the minute. </p>
<p id="indent">A click sounds over the ship, turning off the alarms on board. A loud noise rustles before a voice speaks. “Stop your ship and allow yourself to be boarded, kid.”</p>
<p id="indent">“How do we talk back to them?” I ask Freckles, who stares blankly at me. We rush back down to the cockpit again, and I find a button for a push-to-speak microphone.</p>
<p id="indent">“Sorry, that isn’t gonna happen. Maybe tell me what this device does, and then we can have a conversation about touching base.”</p>
<p id="indent">“You’re in way over your head, girl. The last thing you want is to make my boss more upset than he already is.”</p>
<p id="indent">“Tell your boss I want five thousand dollars for the safe return of his ship and this cube thing.”</p>
<p id="indent">“This is not a negotiation. You are in no position to give demands. We have no problem knocking you out of the sky.”</p>
<p id="indent">“Oh, please. You haven’t knocked me out of the sky yet because you need this cube. You wouldn’t dare.”</p>
<p id="indent">The line on the other end goes silent for a moment, and I turn around to go back to searching. Then, while climbing up the stairs, I hear loud wood cracking coming from every direction. Bullets fly through the hull of the ship, and although neither of us are close enough to be in too much danger, it sends a pretty clear warning.</p>
<p id="page-end">21</p>`
const ch2p9mobile = `<p id="page-start"> </p>
<p id="no-indent">slowly charting their path over to us. </p>
<p id="indent">Now what to do with the beeper?</p>
<p id="indent">Freckles and I search the ship again, looking in rooms new and old for a place to put the cube. Through the windows, we can see Carmsborough slowly reappearing along the horizon, and the ships edging slightly closer by the minute. </p>
<p id="indent">A click sounds over the ship, turning off the alarms on board. A loud noise rustles before a voice speaks. “Stop your ship and allow yourself to be boarded, kid.”</p>
<p id="indent">“How do we talk back to them?” I ask Freckles, who stares blankly at me. We rush back down to the cockpit again, and I find a button for a push-to-speak microphone.</p>
<p id="indent">“Sorry, that isn’t gonna happen. Maybe tell me what this device does, and then we can have a conversation about touching base.”</p>
<p id="indent">“You’re in way over your head, girl. The last thing you want is to make my boss more upset than he already is.”</p>
<p id="indent">“Tell your boss I want five thousand dollars for the safe return of his ship and this cube thing.”</p>
<p id="indent">“This is not a negotiation. You are in no position to give demands. We have no problem knocking you out of the sky.”</p>
<p id="indent">“Oh, please. You haven’t knocked me out of the sky yet because you need this cube. You wouldn’t dare.”</p>
<p id="indent">The line on the other end goes silent for a moment, and I turn around to go back to searching. Then, while climbing up the stairs, I hear loud wood cracking coming from every direction. Bullets fly through the hull of the ship, and although neither of us are close enough to be in too much danger, it sends a pretty clear warning.</p>
<p id="page-end">21</p>`
const ch2p10 = `<p id="page-start"> </p>
<p id="indent">“Last chance, kid. Stop now, or we will keep opening fire until you have no choice but to crash and burn.”</p>
<p id="indent">There’s one last room we haven’t checked yet, so I finish running up the stairs and burst through the door. A forward-facing window reveals how close to Carmsborough we really are. Just a minute more, and we could try to dock.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I know, Freckles, but it has to be–there!”</p>
<p id="indent">Right in front of us is a strange black machine, about as tall as I am, with a plug that looks like the handheld beeper would fit perfectly inside.</p>
<p id="indent">What could it do? Is it a shield? Or a gun? Or some sort of teleporter that will take me to a safe place?</p>
<p id="indent">With zero hesitation, I plug the object into the machine, which lights up dramatically. Some inner mechanisms begin whirring, shaking the room and creating an unpleasant sound. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“I, uh, don’t know what it’s doing either.”</p>
<p id="indent">“What have you done?” the voice calls out over the speakers again, a quiver in their voice. </p>
<p id="indent">Just outside the window, a bright, glowing light appears, coming from right below where the machine sits on board. Its color slowly gradients from white to red, and the buzzing gets louder. </p>
<p id="indent">Heat waves warp the room, and I can see the glass window slowly turning a dangerous pink-red shade and start melting away. A layer of sweat cakes my forehead, forcing me and Freckles to back up. The wood of the ship glows and smolders, and the bright light expands outward a bit more.</p>
<p id="page-end">22</p>`
const ch2p10mobile = `<p id="page-start"> </p>
<p id="indent">“Last chance, kid. Stop now, or we will keep opening fire until you have no choice but to crash and burn.”</p>
<p id="indent">There’s one last room we haven’t checked yet, so I finish running up the stairs and burst through the door. A forward-facing window reveals how close to Carmsborough we really are. Just a minute more, and we could try to dock.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“I know, Freckles, but it has to be–there!”</p>
<p id="indent">Right in front of us is a strange black machine, about as tall as I am, with a plug that looks like the handheld beeper would fit perfectly inside.</p>
<p id="indent">What could it do? Is it a shield? Or a gun? Or some sort of teleporter that will take me to a safe place?</p>
<p id="indent">With zero hesitation, I plug the object into the machine, which lights up dramatically. Some inner mechanisms begin whirring, shaking the room and creating an unpleasant sound. </p>
<p id="indent">“Meow.”</p>
<p id="indent">“I, uh, don’t know what it’s doing either.”</p>
<p id="indent">“What have you done?” the voice calls out over the speakers again, a quiver in their voice. </p>
<p id="indent">Just outside the window, a bright, glowing light appears, coming from right below where the machine sits on board. Its color slowly gradients from white to red, and the buzzing gets louder. </p>
<p id="indent">Heat waves warp the room, and I can see the glass window slowly turning a dangerous pink-red shade and start melting away. A layer of sweat cakes my forehead, forcing me and Freckles to back up. The wood of the ship glows and smolders, and the bright light expands outward a bit more.</p>
<p id="page-end">22</p>`
const ch2p11 = `<p id="page-start"> </p>
<p id="indent">Oh god. What <em>have</em> I done?</p>
<p id="indent">Without warning, the bright light shoots off in a straight line down to the dock. Below us, the dock erupts in flames, and a loud explosion sounds off. Embers, ash, and scraps of different materials are thrown into the air.</p>
<p id="indent">People scatter in different directions–some towards the chaos, but most away from it. The beam of light turns off, and the machine in front of us comes to a screeching halt. Alarms go off again, and there’s no doubt the cloudships following behind us are close to connecting with and boarding our ship.</p>
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
<p id="indent"></p>
<p id="indent"></p>
<p id="indent"></p>
<p id="page-end">23</p>`
const ch2p11mobile = `<p id="page-start"> </p>
<p id="indent">Oh god. What <em>have</em> I done?</p>
<p id="indent">Without warning, the bright light shoots off in a straight line down to the dock. Below us, the dock erupts in flames, and a loud explosion sounds off. Embers, ash, and scraps of different materials are thrown into the air.</p>
<p id="indent">People scatter in different directions–some towards the chaos, but most away from it. The beam of light turns off, and the machine in front of us comes to a screeching halt. Alarms go off again, and there’s no doubt the cloudships following behind us are close to connecting with and boarding our ship.</p>
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
<p id="page-end">23</p>`
const ch2p12 = ``
const ch2p12mobile = ``
const ch2p13 = ``
const ch2p13mobile = ``
const ch2p14 = ``
const ch2p14mobile = ``
const ch2p15 = ``
const ch2p15mobile = ``
const ch2p16 = ``
const ch2p16mobile = ``
const ch2p17 = ``
const ch2p17mobile = ``
const ch2p18 = ``
const ch2p18mobile = ``
const ch2 = [ch2p1, ch2p2, ch2p3, ch2p4, ch2p5, ch2p6, ch2p7, ch2p8, ch2p9, ch2p10, ch2p11, ch2p12, ch2p13, ch2p14, ch2p15, ch2p16, ch2p17, ch2p18]
const ch2mobile = [ch2p1mobile, ch2p2mobile, ch2p3mobile, ch2p4mobile, ch2p5mobile, ch2p6mobile, ch2p7mobile, ch2p8mobile, ch2p9mobile, ch2p10mobile, ch2p11mobile, ch2p12mobile, ch2p13mobile, ch2p14mobile, ch2p15mobile, ch2p16mobile, ch2p17mobile, ch2p18mobile]

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

const ch6p1 = `1`
const ch6p1mobile = `1mobile`
const ch6p2 = `2`
const ch6p2mobile = `2mobile`
const ch6p3 = `3`
const ch6p3mobile = `3mobile`
const ch6p4 = `4`
const ch6p4mobile = `4mobile`
const ch6p5 = `5`
const ch6p5mobile = `5mobile`
const ch6p6 = `6`
const ch6p6mobile = `6mobile`
const ch6p7 = `7`
const ch6p7mobile = `7mobile`
const ch6p8 = `8`
const ch6p8mobile = `8mobile`
const ch6p9 = `9`
const ch6p9mobile = `9mobile`
const ch6p10 = `10`
const ch6p10mobile = `10mobile`
const ch6p11 = `11`
const ch6p11mobile = `11mobile`
const ch6p12 = `12`
const ch6p12mobile = `12mobile`
const ch6p13 = `13`
const ch6p13mobile = `13mobile`
const ch6p14 = `14`
const ch6p14mobile = `14mobile`
const ch6p15 = `15`
const ch6p15mobile = `15mobile`
const ch6p16 = `16`
const ch6p16mobile = `16mobile`
const ch6p17 = `17`
const ch6p17mobile = `17mobile`
const ch6p18 = `18`
const ch6p18mobile = `18mobile`
const ch6 = [ch6p1, ch6p2, ch6p3, ch6p4, ch6p5, ch6p6, ch6p7, ch6p8, ch6p9, ch6p10, ch6p11, ch6p12, ch6p13, ch6p14, ch6p15, ch6p16, ch6p17, ch6p18]
const ch6mobile = [ch6p1mobile, ch6p2mobile, ch6p3mobile, ch6p4mobile, ch6p5mobile, ch6p6mobile, ch6p7mobile, ch6p8mobile, ch6p9mobile, ch6p10mobile, ch6p11mobile, ch6p12mobile, ch6p13mobile, ch6p14mobile, ch6p15mobile, ch6p16mobile, ch6p17mobile, ch6p18mobile]

const ch7p1 = `1`
const ch7p1mobile = `1mobile`
const ch7p2 = `2`
const ch7p2mobile = `2mobile`
const ch7p3 = `3`
const ch7p3mobile = `3mobile`
const ch7p4 = `4`
const ch7p4mobile = `4mobile`
const ch7p5 = `5`
const ch7p5mobile = `5mobile`
const ch7p6 = `6`
const ch7p6mobile = `6mobile`
const ch7p7 = `7`
const ch7p7mobile = `7mobile`
const ch7p8 = `8`
const ch7p8mobile = `8mobile`
const ch7p9 = `9`
const ch7p9mobile = `9mobile`
const ch7p10 = `10`
const ch7p10mobile = `10mobile`
const ch7p11 = `11`
const ch7p11mobile = `11mobile`
const ch7p12 = `12`
const ch7p12mobile = `12mobile`
const ch7p13 = `13`
const ch7p13mobile = `13mobile`
const ch7p14 = `14`
const ch7p14mobile = `14mobile`
const ch7p15 = `15`
const ch7p15mobile = `15mobile`
const ch7p16 = `16`
const ch7p16mobile = `16mobile`
const ch7p17 = `17`
const ch7p17mobile = `17mobile`
const ch7p18 = `18`
const ch7p18mobile = `18mobile`
const ch7 = [ch7p1, ch7p2, ch7p3, ch7p4, ch7p5, ch7p6, ch7p7, ch7p8, ch7p9, ch7p10, ch7p11, ch7p12, ch7p13, ch7p14, ch7p15, ch7p16, ch7p17, ch7p18]
const ch7mobile = [ch7p1mobile, ch7p2mobile, ch7p3mobile, ch7p4mobile, ch7p5mobile, ch7p6mobile, ch7p7mobile, ch7p8mobile, ch7p9mobile, ch7p10mobile, ch7p11mobile, ch7p12mobile, ch7p13mobile, ch7p14mobile, ch7p15mobile, ch7p16mobile, ch7p17mobile, ch7p18mobile]

const ch8p1 = `1`
const ch8p1mobile = `1mobile`
const ch8p2 = `2`
const ch8p2mobile = `2mobile`
const ch8p3 = `3`
const ch8p3mobile = `3mobile`
const ch8p4 = `4`
const ch8p4mobile = `4mobile`
const ch8p5 = `5`
const ch8p5mobile = `5mobile`
const ch8p6 = `6`
const ch8p6mobile = `6mobile`
const ch8p7 = `7`
const ch8p7mobile = `7mobile`
const ch8p8 = `8`
const ch8p8mobile = `8mobile`
const ch8p9 = `9`
const ch8p9mobile = `9mobile`
const ch8p10 = `10`
const ch8p10mobile = `10mobile`
const ch8p11 = `11`
const ch8p11mobile = `11mobile`
const ch8p12 = `12`
const ch8p12mobile = `12mobile`
const ch8p13 = `13`
const ch8p13mobile = `13mobile`
const ch8p14 = `14`
const ch8p14mobile = `14mobile`
const ch8p15 = `15`
const ch8p15mobile = `15mobile`
const ch8p16 = `16`
const ch8p16mobile = `16mobile`
const ch8p17 = `17`
const ch8p17mobile = `17mobile`
const ch8p18 = `18`
const ch8p18mobile = `18mobile`
const ch8 = [ch8p1, ch8p2, ch8p3, ch8p4, ch8p5, ch8p6, ch8p7, ch8p8, ch8p9, ch8p10, ch8p11, ch8p12, ch8p13, ch8p14, ch8p15, ch8p16, ch8p17, ch8p18]
const ch8mobile = [ch8p1mobile, ch8p2mobile, ch8p3mobile, ch8p4mobile, ch8p5mobile, ch8p6mobile, ch8p7mobile, ch8p8mobile, ch8p9mobile, ch8p10mobile, ch8p11mobile, ch8p12mobile, ch8p13mobile, ch8p14mobile, ch8p15mobile, ch8p16mobile, ch8p17mobile, ch8p18mobile]

const ch9p1 = `1`
const ch9p1mobile = `1mobile`
const ch9p2 = `2`
const ch9p2mobile = `2mobile`
const ch9p3 = `3`
const ch9p3mobile = `3mobile`
const ch9p4 = `4`
const ch9p4mobile = `4mobile`
const ch9p5 = `5`
const ch9p5mobile = `5mobile`
const ch9p6 = `6`
const ch9p6mobile = `6mobile`
const ch9p7 = `7`
const ch9p7mobile = `7mobile`
const ch9p8 = `8`
const ch9p8mobile = `8mobile`
const ch9p9 = `9`
const ch9p9mobile = `9mobile`
const ch9p10 = `10`
const ch9p10mobile = `10mobile`
const ch9p11 = `11`
const ch9p11mobile = `11mobile`
const ch9p12 = `12`
const ch9p12mobile = `12mobile`
const ch9p13 = `13`
const ch9p13mobile = `13mobile`
const ch9p14 = `14`
const ch9p14mobile = `14mobile`
const ch9p15 = `15`
const ch9p15mobile = `15mobile`
const ch9p16 = `16`
const ch9p16mobile = `16mobile`
const ch9p17 = `17`
const ch9p17mobile = `17mobile`
const ch9p18 = `18`
const ch9p18mobile = `18mobile`
const ch9 = [ch9p1, ch9p2, ch9p3, ch9p4, ch9p5, ch9p6, ch9p7, ch9p8, ch9p9, ch9p10, ch9p11, ch9p12, ch9p13, ch9p14, ch9p15, ch9p16, ch9p17, ch9p18]
const ch9mobile = [ch9p1mobile, ch9p2mobile, ch9p3mobile, ch9p4mobile, ch9p5mobile, ch9p6mobile, ch9p7mobile, ch9p8mobile, ch9p9mobile, ch9p10mobile, ch9p11mobile, ch9p12mobile, ch9p13mobile, ch9p14mobile, ch9p15mobile, ch9p16mobile, ch9p17mobile, ch9p18mobile]

const ch10p1 = `1`
const ch10p1mobile = `1mobile`
const ch10p2 = `2`
const ch10p2mobile = `2mobile`
const ch10p3 = `3`
const ch10p3mobile = `3mobile`
const ch10p4 = `4`
const ch10p4mobile = `4mobile`
const ch10p5 = `5`
const ch10p5mobile = `5mobile`
const ch10p6 = `6`
const ch10p6mobile = `6mobile`
const ch10p7 = `7`
const ch10p7mobile = `7mobile`
const ch10p8 = `8`
const ch10p8mobile = `8mobile`
const ch10p9 = `9`
const ch10p9mobile = `9mobile`
const ch10p10 = `10`
const ch10p10mobile = `10mobile`
const ch10p11 = `11`
const ch10p11mobile = `11mobile`
const ch10p12 = `12`
const ch10p12mobile = `12mobile`
const ch10p13 = `13`
const ch10p13mobile = `13mobile`
const ch10p14 = `14`
const ch10p14mobile = `14mobile`
const ch10p15 = `15`
const ch10p15mobile = `15mobile`
const ch10p16 = `16`
const ch10p16mobile = `16mobile`
const ch10p17 = `17`
const ch10p17mobile = `17mobile`
const ch10p18 = `18`
const ch10p18mobile = `18mobile`
const ch10 = [ch10p1, ch10p2, ch10p3, ch10p4, ch10p5, ch10p6, ch10p7, ch10p8, ch10p9, ch10p10, ch10p11, ch10p12, ch10p13, ch10p14, ch10p15, ch10p16, ch10p17, ch10p18]
const ch10mobile = [ch10p1mobile, ch10p2mobile, ch10p3mobile, ch10p4mobile, ch10p5mobile, ch10p6mobile, ch10p7mobile, ch10p8mobile, ch10p9mobile, ch10p10mobile, ch10p11mobile, ch10p12mobile, ch10p13mobile, ch10p14mobile, ch10p15mobile, ch10p16mobile, ch10p17mobile, ch10p18mobile]

const ch11p1 = `1`
const ch11p1mobile = `1mobile`
const ch11p2 = `2`
const ch11p2mobile = `2mobile`
const ch11p3 = `3`
const ch11p3mobile = `3mobile`
const ch11p4 = `4`
const ch11p4mobile = `4mobile`
const ch11p5 = `5`
const ch11p5mobile = `5mobile`
const ch11p6 = `6`
const ch11p6mobile = `6mobile`
const ch11p7 = `7`
const ch11p7mobile = `7mobile`
const ch11p8 = `8`
const ch11p8mobile = `8mobile`
const ch11p9 = `9`
const ch11p9mobile = `9mobile`
const ch11p10 = `10`
const ch11p10mobile = `10mobile`
const ch11p11 = `11`
const ch11p11mobile = `11mobile`
const ch11p12 = `12`
const ch11p12mobile = `12mobile`
const ch11p13 = `13`
const ch11p13mobile = `13mobile`
const ch11p14 = `14`
const ch11p14mobile = `14mobile`
const ch11p15 = `15`
const ch11p15mobile = `15mobile`
const ch11p16 = `16`
const ch11p16mobile = `16mobile`
const ch11p17 = `17`
const ch11p17mobile = `17mobile`
const ch11p18 = `18`
const ch11p18mobile = `18mobile`
const ch11 = [ch11p1, ch11p2, ch11p3, ch11p4, ch11p5, ch11p6, ch11p7, ch11p8, ch11p9, ch11p10, ch11p11, ch11p12, ch11p13, ch11p14, ch11p15, ch11p16, ch11p17, ch11p18]
const ch11mobile = [ch11p1mobile, ch11p2mobile, ch11p3mobile, ch11p4mobile, ch11p5mobile, ch11p6mobile, ch11p7mobile, ch11p8mobile, ch11p9mobile, ch11p10mobile, ch11p11mobile, ch11p12mobile, ch11p13mobile, ch11p14mobile, ch11p15mobile, ch11p16mobile, ch11p17mobile, ch11p18mobile]

const ch12p1 = `1`
const ch12p1mobile = `1mobile`
const ch12p2 = `2`
const ch12p2mobile = `2mobile`
const ch12p3 = `3`
const ch12p3mobile = `3mobile`
const ch12p4 = `4`
const ch12p4mobile = `4mobile`
const ch12p5 = `5`
const ch12p5mobile = `5mobile`
const ch12p6 = `6`
const ch12p6mobile = `6mobile`
const ch12p7 = `7`
const ch12p7mobile = `7mobile`
const ch12p8 = `8`
const ch12p8mobile = `8mobile`
const ch12p9 = `9`
const ch12p9mobile = `9mobile`
const ch12p10 = `10`
const ch12p10mobile = `10mobile`
const ch12p11 = `11`
const ch12p11mobile = `11mobile`
const ch12p12 = `12`
const ch12p12mobile = `12mobile`
const ch12p13 = `13`
const ch12p13mobile = `13mobile`
const ch12p14 = `14`
const ch12p14mobile = `14mobile`
const ch12p15 = `15`
const ch12p15mobile = `15mobile`
const ch12p16 = `16`
const ch12p16mobile = `16mobile`
const ch12p17 = `17`
const ch12p17mobile = `17mobile`
const ch12p18 = `18`
const ch12p18mobile = `18mobile`
const ch12 = [ch12p1, ch12p2, ch12p3, ch12p4, ch12p5, ch12p6, ch12p7, ch12p8, ch12p9, ch12p10, ch12p11, ch12p12, ch12p13, ch12p14, ch12p15, ch12p16, ch12p17, ch12p18]
const ch12mobile = [ch12p1mobile, ch12p2mobile, ch12p3mobile, ch12p4mobile, ch12p5mobile, ch12p6mobile, ch12p7mobile, ch12p8mobile, ch12p9mobile, ch12p10mobile, ch12p11mobile, ch12p12mobile, ch12p13mobile, ch12p14mobile, ch12p15mobile, ch12p16mobile, ch12p17mobile, ch12p18mobile]

const ch13p1 = `1`
const ch13p1mobile = `1mobile`
const ch13p2 = `2`
const ch13p2mobile = `2mobile`
const ch13p3 = `3`
const ch13p3mobile = `3mobile`
const ch13p4 = `4`
const ch13p4mobile = `4mobile`
const ch13p5 = `5`
const ch13p5mobile = `5mobile`
const ch13p6 = `6`
const ch13p6mobile = `6mobile`
const ch13p7 = `7`
const ch13p7mobile = `7mobile`
const ch13p8 = `8`
const ch13p8mobile = `8mobile`
const ch13p9 = `9`
const ch13p9mobile = `9mobile`
const ch13p10 = `10`
const ch13p10mobile = `10mobile`
const ch13p11 = `11`
const ch13p11mobile = `11mobile`
const ch13p12 = `12`
const ch13p12mobile = `12mobile`
const ch13p13 = `13`
const ch13p13mobile = `13mobile`
const ch13p14 = `14`
const ch13p14mobile = `14mobile`
const ch13p15 = `15`
const ch13p15mobile = `15mobile`
const ch13p16 = `16`
const ch13p16mobile = `16mobile`
const ch13p17 = `17`
const ch13p17mobile = `17mobile`
const ch13p18 = `18`
const ch13p18mobile = `18mobile`
const ch13 = [ch13p1, ch13p2, ch13p3, ch13p4, ch13p5, ch13p6, ch13p7, ch13p8, ch13p9, ch13p10, ch13p11, ch13p12, ch13p13, ch13p14, ch13p15, ch13p16, ch13p17, ch13p18]
const ch13mobile = [ch13p1mobile, ch13p2mobile, ch13p3mobile, ch13p4mobile, ch13p5mobile, ch13p6mobile, ch13p7mobile, ch13p8mobile, ch13p9mobile, ch13p10mobile, ch13p11mobile, ch13p12mobile, ch13p13mobile, ch13p14mobile, ch13p15mobile, ch13p16mobile, ch13p17mobile, ch13p18mobile]

const ch14p1 = `1`
const ch14p1mobile = `1mobile`
const ch14p2 = `2`
const ch14p2mobile = `2mobile`
const ch14p3 = `3`
const ch14p3mobile = `3mobile`
const ch14p4 = `4`
const ch14p4mobile = `4mobile`
const ch14p5 = `5`
const ch14p5mobile = `5mobile`
const ch14p6 = `6`
const ch14p6mobile = `6mobile`
const ch14p7 = `7`
const ch14p7mobile = `7mobile`
const ch14p8 = `8`
const ch14p8mobile = `8mobile`
const ch14p9 = `9`
const ch14p9mobile = `9mobile`
const ch14p10 = `10`
const ch14p10mobile = `10mobile`
const ch14p11 = `11`
const ch14p11mobile = `11mobile`
const ch14p12 = `12`
const ch14p12mobile = `12mobile`
const ch14p13 = `13`
const ch14p13mobile = `13mobile`
const ch14p14 = `14`
const ch14p14mobile = `14mobile`
const ch14p15 = `15`
const ch14p15mobile = `15mobile`
const ch14p16 = `16`
const ch14p16mobile = `16mobile`
const ch14p17 = `17`
const ch14p17mobile = `17mobile`
const ch14p18 = `18`
const ch14p18mobile = `18mobile`
const ch14 = [ch14p1, ch14p2, ch14p3, ch14p4, ch14p5, ch14p6, ch14p7, ch14p8, ch14p9, ch14p10, ch14p11, ch14p12, ch14p13, ch14p14, ch14p15, ch14p16, ch14p17, ch14p18]
const ch14mobile = [ch14p1mobile, ch14p2mobile, ch14p3mobile, ch14p4mobile, ch14p5mobile, ch14p6mobile, ch14p7mobile, ch14p8mobile, ch14p9mobile, ch14p10mobile, ch14p11mobile, ch14p12mobile, ch14p13mobile, ch14p14mobile, ch14p15mobile, ch14p16mobile, ch14p17mobile, ch14p18mobile]

const ch15p1 = `1`
const ch15p1mobile = `1mobile`
const ch15p2 = `2`
const ch15p2mobile = `2mobile`
const ch15p3 = `3`
const ch15p3mobile = `3mobile`
const ch15p4 = `4`
const ch15p4mobile = `4mobile`
const ch15p5 = `5`
const ch15p5mobile = `5mobile`
const ch15p6 = `6`
const ch15p6mobile = `6mobile`
const ch15p7 = `7`
const ch15p7mobile = `7mobile`
const ch15p8 = `8`
const ch15p8mobile = `8mobile`
const ch15p9 = `9`
const ch15p9mobile = `9mobile`
const ch15p10 = `10`
const ch15p10mobile = `10mobile`
const ch15p11 = `11`
const ch15p11mobile = `11mobile`
const ch15p12 = `12`
const ch15p12mobile = `12mobile`
const ch15p13 = `13`
const ch15p13mobile = `13mobile`
const ch15p14 = `14`
const ch15p14mobile = `14mobile`
const ch15p15 = `15`
const ch15p15mobile = `15mobile`
const ch15p16 = `16`
const ch15p16mobile = `16mobile`
const ch15p17 = `17`
const ch15p17mobile = `17mobile`
const ch15p18 = `18`
const ch15p18mobile = `18mobile`
const ch15 = [ch15p1, ch15p2, ch15p3, ch15p4, ch15p5, ch15p6, ch15p7, ch15p8, ch15p9, ch15p10, ch15p11, ch15p12, ch15p13, ch15p14, ch15p15, ch15p16, ch15p17, ch15p18]
const ch15mobile = [ch15p1mobile, ch15p2mobile, ch15p3mobile, ch15p4mobile, ch15p5mobile, ch15p6mobile, ch15p7mobile, ch15p8mobile, ch15p9mobile, ch15p10mobile, ch15p11mobile, ch15p12mobile, ch15p13mobile, ch15p14mobile, ch15p15mobile, ch15p16mobile, ch15p17mobile, ch15p18mobile]

const ch16p1 = `1`
const ch16p1mobile = `1mobile`
const ch16p2 = `2`
const ch16p2mobile = `2mobile`
const ch16p3 = `3`
const ch16p3mobile = `3mobile`
const ch16p4 = `4`
const ch16p4mobile = `4mobile`
const ch16p5 = `5`
const ch16p5mobile = `5mobile`
const ch16p6 = `6`
const ch16p6mobile = `6mobile`
const ch16p7 = `7`
const ch16p7mobile = `7mobile`
const ch16p8 = `8`
const ch16p8mobile = `8mobile`
const ch16p9 = `9`
const ch16p9mobile = `9mobile`
const ch16p10 = `10`
const ch16p10mobile = `10mobile`
const ch16p11 = `11`
const ch16p11mobile = `11mobile`
const ch16p12 = `12`
const ch16p12mobile = `12mobile`
const ch16p13 = `13`
const ch16p13mobile = `13mobile`
const ch16p14 = `14`
const ch16p14mobile = `14mobile`
const ch16p15 = `15`
const ch16p15mobile = `15mobile`
const ch16p16 = `16`
const ch16p16mobile = `16mobile`
const ch16p17 = `17`
const ch16p17mobile = `17mobile`
const ch16p18 = `18`
const ch16p18mobile = `18mobile`
const ch16 = [ch16p1, ch16p2, ch16p3, ch16p4, ch16p5, ch16p6, ch16p7, ch16p8, ch16p9, ch16p10, ch16p11, ch16p12, ch16p13, ch16p14, ch16p15, ch16p16, ch16p17, ch16p18]
const ch16mobile = [ch16p1mobile, ch16p2mobile, ch16p3mobile, ch16p4mobile, ch16p5mobile, ch16p6mobile, ch16p7mobile, ch16p8mobile, ch16p9mobile, ch16p10mobile, ch16p11mobile, ch16p12mobile, ch16p13mobile, ch16p14mobile, ch16p15mobile, ch16p16mobile, ch16p17mobile, ch16p18mobile]

const ch17p1 = `1`
const ch17p1mobile = `1mobile`
const ch17p2 = `2`
const ch17p2mobile = `2mobile`
const ch17p3 = `3`
const ch17p3mobile = `3mobile`
const ch17p4 = `4`
const ch17p4mobile = `4mobile`
const ch17p5 = `5`
const ch17p5mobile = `5mobile`
const ch17p6 = `6`
const ch17p6mobile = `6mobile`
const ch17p7 = `7`
const ch17p7mobile = `7mobile`
const ch17p8 = `8`
const ch17p8mobile = `8mobile`
const ch17p9 = `9`
const ch17p9mobile = `9mobile`
const ch17p10 = `10`
const ch17p10mobile = `10mobile`
const ch17p11 = `11`
const ch17p11mobile = `11mobile`
const ch17p12 = `12`
const ch17p12mobile = `12mobile`
const ch17p13 = `13`
const ch17p13mobile = `13mobile`
const ch17p14 = `14`
const ch17p14mobile = `14mobile`
const ch17p15 = `15`
const ch17p15mobile = `15mobile`
const ch17p16 = `16`
const ch17p16mobile = `16mobile`
const ch17p17 = `17`
const ch17p17mobile = `17mobile`
const ch17p18 = `18`
const ch17p18mobile = `18mobile`
const ch17 = [ch17p1, ch17p2, ch17p3, ch17p4, ch17p5, ch17p6, ch17p7, ch17p8, ch17p9, ch17p10, ch17p11, ch17p12, ch17p13, ch17p14, ch17p15, ch17p16, ch17p17, ch17p18]
const ch17mobile = [ch17p1mobile, ch17p2mobile, ch17p3mobile, ch17p4mobile, ch17p5mobile, ch17p6mobile, ch17p7mobile, ch17p8mobile, ch17p9mobile, ch17p10mobile, ch17p11mobile, ch17p12mobile, ch17p13mobile, ch17p14mobile, ch17p15mobile, ch17p16mobile, ch17p17mobile, ch17p18mobile]

const ch18p1 = `1`
const ch18p1mobile = `1mobile`
const ch18p2 = `2`
const ch18p2mobile = `2mobile`
const ch18p3 = `3`
const ch18p3mobile = `3mobile`
const ch18p4 = `4`
const ch18p4mobile = `4mobile`
const ch18p5 = `5`
const ch18p5mobile = `5mobile`
const ch18p6 = `6`
const ch18p6mobile = `6mobile`
const ch18p7 = `7`
const ch18p7mobile = `7mobile`
const ch18p8 = `8`
const ch18p8mobile = `8mobile`
const ch18p9 = `9`
const ch18p9mobile = `9mobile`
const ch18p10 = `10`
const ch18p10mobile = `10mobile`
const ch18p11 = `11`
const ch18p11mobile = `11mobile`
const ch18p12 = `12`
const ch18p12mobile = `12mobile`
const ch18p13 = `13`
const ch18p13mobile = `13mobile`
const ch18p14 = `14`
const ch18p14mobile = `14mobile`
const ch18p15 = `15`
const ch18p15mobile = `15mobile`
const ch18p16 = `16`
const ch18p16mobile = `16mobile`
const ch18p17 = `17`
const ch18p17mobile = `17mobile`
const ch18p18 = `18`
const ch18p18mobile = `18mobile`
const ch18 = [ch18p1, ch18p2, ch18p3, ch18p4, ch18p5, ch18p6, ch18p7, ch18p8, ch18p9, ch18p10, ch18p11, ch18p12, ch18p13, ch18p14, ch18p15, ch18p16, ch18p17, ch18p18]
const ch18mobile = [ch18p1mobile, ch18p2mobile, ch18p3mobile, ch18p4mobile, ch18p5mobile, ch18p6mobile, ch18p7mobile, ch18p8mobile, ch18p9mobile, ch18p10mobile, ch18p11mobile, ch18p12mobile, ch18p13mobile, ch18p14mobile, ch18p15mobile, ch18p16mobile, ch18p17mobile, ch18p18mobile]

const ch19p1 = `1`
const ch19p1mobile = `1mobile`
const ch19p2 = `2`
const ch19p2mobile = `2mobile`
const ch19p3 = `3`
const ch19p3mobile = `3mobile`
const ch19p4 = `4`
const ch19p4mobile = `4mobile`
const ch19p5 = `5`
const ch19p5mobile = `5mobile`
const ch19p6 = `6`
const ch19p6mobile = `6mobile`
const ch19p7 = `7`
const ch19p7mobile = `7mobile`
const ch19p8 = `8`
const ch19p8mobile = `8mobile`
const ch19p9 = `9`
const ch19p9mobile = `9mobile`
const ch19p10 = `10`
const ch19p10mobile = `10mobile`
const ch19p11 = `11`
const ch19p11mobile = `11mobile`
const ch19p12 = `12`
const ch19p12mobile = `12mobile`
const ch19p13 = `13`
const ch19p13mobile = `13mobile`
const ch19p14 = `14`
const ch19p14mobile = `14mobile`
const ch19p15 = `15`
const ch19p15mobile = `15mobile`
const ch19p16 = `16`
const ch19p16mobile = `16mobile`
const ch19p17 = `17`
const ch19p17mobile = `17mobile`
const ch19p18 = `18`
const ch19p18mobile = `18mobile`
const ch19 = [ch19p1, ch19p2, ch19p3, ch19p4, ch19p5, ch19p6, ch19p7, ch19p8, ch19p9, ch19p10, ch19p11, ch19p12, ch19p13, ch19p14, ch19p15, ch19p16, ch19p17, ch19p18]
const ch19mobile = [ch19p1mobile, ch19p2mobile, ch19p3mobile, ch19p4mobile, ch19p5mobile, ch19p6mobile, ch19p7mobile, ch19p8mobile, ch19p9mobile, ch19p10mobile, ch19p11mobile, ch19p12mobile, ch19p13mobile, ch19p14mobile, ch19p15mobile, ch19p16mobile, ch19p17mobile, ch19p18mobile]

const ch20p1 = `1`
const ch20p1mobile = `1mobile`
const ch20p2 = `2`
const ch20p2mobile = `2mobile`
const ch20p3 = `3`
const ch20p3mobile = `3mobile`
const ch20p4 = `4`
const ch20p4mobile = `4mobile`
const ch20p5 = `5`
const ch20p5mobile = `5mobile`
const ch20p6 = `6`
const ch20p6mobile = `6mobile`
const ch20p7 = `7`
const ch20p7mobile = `7mobile`
const ch20p8 = `8`
const ch20p8mobile = `8mobile`
const ch20p9 = `9`
const ch20p9mobile = `9mobile`
const ch20p10 = `10`
const ch20p10mobile = `10mobile`
const ch20p11 = `11`
const ch20p11mobile = `11mobile`
const ch20p12 = `12`
const ch20p12mobile = `12mobile`
const ch20p13 = `13`
const ch20p13mobile = `13mobile`
const ch20p14 = `14`
const ch20p14mobile = `14mobile`
const ch20p15 = `15`
const ch20p15mobile = `15mobile`
const ch20p16 = `16`
const ch20p16mobile = `16mobile`
const ch20p17 = `17`
const ch20p17mobile = `17mobile`
const ch20p18 = `18`
const ch20p18mobile = `18mobile`
const ch20 = [ch20p1, ch20p2, ch20p3, ch20p4, ch20p5, ch20p6, ch20p7, ch20p8, ch20p9, ch20p10, ch20p11, ch20p12, ch20p13, ch20p14, ch20p15, ch20p16, ch20p17, ch20p18]
const ch20mobile = [ch20p1mobile, ch20p2mobile, ch20p3mobile, ch20p4mobile, ch20p5mobile, ch20p6mobile, ch20p7mobile, ch20p8mobile, ch20p9mobile, ch20p10mobile, ch20p11mobile, ch20p12mobile, ch20p13mobile, ch20p14mobile, ch20p15mobile, ch20p16mobile, ch20p17mobile, ch20p18mobile]

function loadChapter(num, isMobile) {

    var toCopy = []
    switch (num) {
        case 1:
            if (isMobile)
                toCopy = ch1mobile
            else
                toCopy = ch1
            break
        case 2:
            if (isMobile)
                toCopy = ch2mobile
            else
                toCopy = ch2
            break
        case 3:
            if (isMobile)
                toCopy = ch3mobile
            else
                toCopy = ch3
            break
        case 4:
            if (isMobile)
                toCopy = ch4mobile
            else
                toCopy = ch4
            break
        case 5:
            if (isMobile)
                toCopy = ch5mobile
            else
                toCopy = ch5
            break
        case 6:
            if (isMobile)
                toCopy = ch6mobile
            else
                toCopy = ch6
            break
        case 7:
            if (isMobile)
                toCopy = ch7mobile
            else
                toCopy = ch7
            break
        case 8:
            if (isMobile)
                toCopy = ch8mobile
            else
                toCopy = ch8
            break
        case 9:
            if (isMobile)
                toCopy = ch9mobile
            else
                toCopy = ch9
            break
        case 10:
            if (isMobile)
                toCopy = ch10mobile
            else
                toCopy = ch10
            break
        case 11:
            if (isMobile)
                toCopy = ch11mobile
            else
                toCopy = ch11
            break
        case 12:
            if (isMobile)
                toCopy = ch12mobile
            else
                toCopy = ch12
            break
        case 13:
            if (isMobile)
                toCopy = ch13mobile
            else
                toCopy = ch13
            break
        case 14:
            if (isMobile)
                toCopy = ch14mobile
            else
                toCopy = ch14
            break
        case 15:
            if (isMobile)
                toCopy = ch15mobile
            else
                toCopy = ch15
            break
        case 16:
            if (isMobile)
                toCopy = ch16mobile
            else
                toCopy = ch16
            break
        case 17:
            if (isMobile)
                toCopy = ch17mobile
            else
                toCopy = ch17
            break
        case 18:
            if (isMobile)
                toCopy = ch18mobile
            else
                toCopy = ch18
            break
        case 19:
            if (isMobile)
                toCopy = ch19mobile
            else
                toCopy = ch19
            break
        case 20:
            if (isMobile)
                toCopy = ch20mobile
            else
                toCopy = ch20
            break
        default:
            if (isMobile)
                toCopy = ch1mobile
            else
                toCopy = ch1
            break

    }
    chapterList = toCopy
    document.getElementById("page1").innerHTML = toCopy[0]
    document.getElementById("page2").innerHTML = toCopy[1]
    document.getElementById("page3").innerHTML = toCopy[2]
    document.getElementById("page4").innerHTML = toCopy[3]
    document.getElementById("page5").innerHTML = toCopy[4]
    document.getElementById("page6").innerHTML = toCopy[5]
    document.getElementById("page7").innerHTML = toCopy[6]
    document.getElementById("page8").innerHTML = toCopy[7]
    document.getElementById("page9").innerHTML = toCopy[8]
    document.getElementById("page10").innerHTML = toCopy[9]
    document.getElementById("page11").innerHTML = toCopy[10]
    document.getElementById("page12").innerHTML = toCopy[11]
    document.getElementById("page13").innerHTML = toCopy[12]
    document.getElementById("page14").innerHTML = toCopy[13]
    document.getElementById("page15").innerHTML = toCopy[14]
    document.getElementById("page16").innerHTML = toCopy[15]
    document.getElementById("page17").innerHTML = toCopy[16]
    document.getElementById("page18").innerHTML = toCopy[17]
}