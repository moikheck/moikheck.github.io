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
            chapterValue = parseInt(document.getElementById("chapter-cover").value)
            loadChapter(parseInt(document.getElementById("chapter-cover").value))
    }
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

const chapterSelection = `<option value="1" class="dropper">Part 1: Boogieman</option>
<option value="2" class="dropper">Part 2: Dancypants</option>
<option value="3" class="dropper">Part 3: Marrow</option>
<option value="3" class="dropper">Part 4: Ace Arrow</option>`

var mobileFlip = false

const ch1p1 = `<p id="page-start"> </p>
<p id="chapter-header">Part 1: Boogieman</p>
<p id="chapter-bar">____________________</p>
<p id="no-indent">“Is the last of them on board?”</p>
<p id="indent">“Yes, sir. The conductor is awaiting your call.”</p>
<p id="indent">“Let’s get moving. We can’t afford a surprise visit from the Blood Moon Pirate.”</p>
<p id="indent">The dark interior cabin of the passenger train echoed Boogieman’s words ever so slightly. A cold fall wind blew a batch of leaves past the half-fogged window and off into the emptiness of the station.</p>
<p id="indent">Boogieman had never been in a position like this. With everyone in the organization being hunted down, he was forced into hiding on public transportation to get between his base of operations and his next target. </p>
<p id="page-end"> </p>`
const ch1p2 = `<p id="page-start"> </p>
<p id="no-indent">Today, it was the 401 Express, which charted a straight line from the Commerce District to the Housing District. It was inelegant and rickety, much like everything else as of late.</p>
<p id="indent">Immediately after Slaphand was killed, he’d thought the promotion was the best thing that had ever happened to him. Being Bijabers’ right-hand man came with a good number of benefits. It wasn’t until the third assassination that the cost of being in Bijabers’ regime became all too apparent.</p>
<p id="indent">The train chided its loud horn, signaling to all on board that it was ready to move. Boogieman let his shoulders relax a little. He wasn’t cut out for the spotlight. Not like this. His job was always behind the scenes. He got things done without the politics of being one of the main points of contact, something that his predecessor hadn’t had the pleasure of.</p>
<p id="indent">Next to him in his personal train car was a lone suitcase, in which all the tools he would need to carry out his assignment were: a knife, a gun, and a ten-foot length of barbed wire. He didn’t expect to make it past the knife. His “client” would fold long before then.</p>
<p id="indent">A rhythmic knock sounded off on the door in front of him. He carefully closed the suitcase and stashed it away under a small tarp. </p>
<p id="indent">“Who is it?”</p>
<p id="indent">“Clyde, sir. There’s a woman here to see you. Says her name is Ella. Something about a business prospect.”</p>
<p id="indent">“I didn’t think I was going to meet with her today.”</p>
<p id="indent">“It’s not on your schedule, but I figured since you have free time, I could make the offer.”</p>
<p id="indent">Why <em>is</em> she here? He must not be the only semi-shady figure taking public transportation to get places anymore. Things have changed in </p>
<p id="page-end">2</p>`
const ch1p3 = `<p id="page-start"> </p>
<p id="no-indent">Carmsborough, and not for the better.</p>
<p id="indent">“Bring her in.”</p>
<p id="indent">His bodyguard unlocked the door, revealing a woman no older than twenty in a professional suit and skirt. She carried a purse over her shoulder, big enough for a folder but not much else. Her hair was worn back with sophisticated style, and sleek black glasses rested on her nose. </p>
<p id="indent">“Sorry for dropping in without notice,” she said, extending her arm for a handshake. Her accent placed her somewhere in the American South, a place he was all too familiar with. Rich and American. That spoke well for his prospects. “I’d introduce myself, but I’m sure you already know me.”</p>
<p id="indent">“I’d venture to say the same. Ella Luwnes, my mystery client.”</p>
<p id="indent">“Client implies we’ve made a deal, I’d reckon.”</p>
<p id="indent">“I’m very confident in my ability to woo you, but I’m getting ahead of myself. Please, have a seat, Ella.”</p>
<p id="indent">Ella placed her purse on the floor of the train car and delicately sat herself opposite Boogieman. </p>
<p id="indent">“Clyde, would you grab this young woman a drink? Something off of my cart.”</p>
<p id="indent">“Of course, sir.”</p>
<p id="indent">“Oh, you don’t need to do that,” Ella said, smiling. “Though I do love me a little southern hospitality.”</p>
<p id="indent">“We wouldn’t want to negotiate sober, would we?”</p>
<p id="indent">“That’s true. Why make something already so dry and soul-sucking that way intentionally?”</p>
<p id="indent">“Tell me something about yourself, Ella. Who are you? You must be American.”</p>
<p id="page-end">3</p>`
const ch1p4 = `<p id="page-start"> </p>
<p id="indent">“Is it that obvious? I’m afraid everywhere I go, there’s no hiding how blissfully American I am, even in a rag-town like Carmsborough.”</p>
<p id="indent">“Eventually you adapt to the culture change.”</p>
<p id="indent">“I suppose so. There’s not much interesting to me that wasn’t told to that lovely man on your phone. My father, Xavier Luwnes, had big stakes in the oil industry in America, but after his untimely death last year, I was left with the fortune. I’m simply looking for… different ways to invest.”</p>
<p id="indent">“You’ve come to the right place. I’ve got contacts all over the place that would love some investment from you, especially with as much wealth as you have found. What problems are you trying to solve, Miss Luwnes?”</p>
<p id="indent">“Oh, tying up some loose ends, growing an empire, that sort of thing. All details I have in my notebook here, including some initial prices I’d like to aim for. And, of course, they’re negotiable.”</p>
<p id="indent">“Organized and succinct. You certainly know what you’re doing.”</p>
<p id="indent">“I tend to get my way nowadays, though not without fighting for it. I must admit, I am a little worried about that vigilante out there who seems to be giving you a run for your money.”</p>
<p id="indent">“Orion and the Clockwork?”</p>
<p id="indent">“No, that little girl. The Blood Moon Pirate.”</p>
<p id="indent">Boogieman’s neck tensed. If she knew of the Blood Moon Pirate, then she could easily manipulate the bargaining board in her favor. And whether or not he wanted to admit it, they desperately needed a cash inflow as big as she was offering. </p>
<p id="indent">“I’m not sure what you’ve heard regarding the Blood Moon Pirate, but I can assure you, she’s hardly a threat to our plans moving forward. Mine and my boss’ men are on the case and more than willing to deal a striking </p>
<p id="page-end">4</p>`
const ch1p5 = `<p id="page-start"> </p>
<p id="no-indent">blow to her.”</p>
<p id="indent">“I’m not so convinced, Mr. Aropold. She killed your predecessor, did she not?”</p>
<p id="indent">“What was that?”</p>
<p id="indent">“I said she killed the last man in your position, correct?”</p>
<p id="indent">“No, that name. Why did you call me that?”</p>
<p id="indent">“I’ve done my own extensive research too, Mr. Aropold. I like to understand what I’m getting into. You know, organized and succinct.”</p>
<p id="indent">“Respectable, of course,” he said, his heart pumping. His hand slowly reached for the suitcase under the tarp. “I just haven’t heard that name in years.”</p>
<p id="indent">“I suspect you haven’t since you moved from America to escape Agent Ike and S6. Don’t move a muscle more, Boogieman.”</p>
<p id="indent">Ella leveled a silenced pistol at the mob boss’ chest. He froze in place, completely caught off-guard by the otherwise unassuming woman in front of him. </p>
<p id="indent">“So, this is it? S6 has found me? You’ve come to drag me to prison? How do you intend to get me off this train, Agent?”</p>
<p id="indent">“You’ll only wish you were getting off of this train, Boogieman.”</p>
<p id="indent">She moved her pistol to the left and shot the mob boss in the arm, causing him to scream out in pain. A large blot of blood began to seep through his pressed suit.</p>
<p id="indent">Quietly, without changing her expression, she removed her glasses, placed them in her purse, and retrieved a crescent moon mask from a pocket on the inside. </p>
<p id="indent">“Recognize this?” she asked, her fake accent gone. </p>
<p id="indent">“The Blood Moon Pirate,” he said, between winced breaths. “Of </p>
<p id="page-end">5</p>`
const ch1p6 = `<p id="page-start"> </p>
<p id="no-indent">course it’s you. How did you get past security?”</p>
<p id="indent">“I had a duplicate purse stashed in a passenger compartment. I’ll be honest, you weren’t easy to track down, Boogieman. You and your men covered a lot of your steps. Inevitably, though, you stuck out like a sore thumb. It didn’t take long for me to catch up.”</p>
<p id="indent">“Why are you doing this? Slaphand is dead. You’ve killed so many more. What more do you want?”</p>
<p id="indent">“I’m not stopping until I have Bijabers’ corpse hanging from a ceiling for what he did to me. For what he did to countless families. For what you’re doing right now.”</p>
<p id="indent">She leveled the pistol with his head. He let out a short-lived plea for help before the Blood Moon Pirate took her shot.</p>
<p id="indent">Three minutes later, Clyde came back, holding two bottles of whiskey. Luna turned to face him, wearing the mask, and straightened her suit. “I don’t suppose I can get some of that still, can I?”</p>
<p id="indent">He flipped the bottles in the air and held them upside down by their necks, wielding them as unruly weapons. </p>
<p id="indent">“I’ll guess that’s a no.”</p>
<p id="indent">The man took the first swing, narrowly missing the side of her head. In response, she kicked out, connecting with his ribcage. He stuttered backwards, eyes widened in shock. Both bottles dropped from his hands, one shattering on impact with the iron floor.</p>
<p id="indent">“What did you…” he asked, clutching his chest.</p>
<p id="indent">“Like that? Spiked boots. Essentially hidden until they’ve hit their mark.”</p>
<p id="indent">Multiple spots of blood quickly formed against his white undershirt. “You’re a sadist.”</p>
<p id="page-end">6</p>`
const ch1p7 = `<p id="page-start"> </p>
<p id="indent">“Yeah, what can I say? Efficiency is key, and that’ll bleed you out in a couple minutes flat. I’ve been in enough alley fights to know what’s most useful.”</p>
<p id="indent">She straightened out her pants, replaced the mask in her purse, and exited the room with the same composure she had entered with. Before she got too far, however, she turned and went back to the man.</p>
<p id="indent">“Oh, and thank you, Clyde, for the drink. I’ll make sure it goes to good use.”</p>
<p id="indent">She retrieved the intact bottle from the floor and re-exited the room. Outside of the train car she was in sat multiple of Boogieman’s goons, in various stages of confusion. There were faint sounds of a struggle from within, but the girl seemed untouched. </p>
<p id="indent">“Howdy, gentlemen,” she said, approaching the door to the opposite side of the car. “Your boss is a generous man. The kind who would give his life to someone like me.”</p>
<p id="indent">She quickly skirted through the door before any of them could take the hint and scurried along the narrow halls of the train cars with private passenger seating. Her way out was a few cars down. The only thing that could stop her is them catching up.</p>
<p id="indent">As prompted, the door behind her slammed open. “Stop that woman!” one of the goons shouted, forcing her feet to move much faster. The last thing she needed right now was a scene.</p>
<p id="indent">A quick look back gave her all the information she needed. There were three henchmen that warranted any sort of immediate action, with the rest slowly funneling in from their car. She entered through the door of the next train car, a mostly empty open seating section of the train, and waited out of view. When the first reached to crack the door open more, she </p>
<p id="page-end">7</p>`
const ch1p8 = `<p id="page-start"> </p>
<p id="no-indent">slammed it shut on his fingers.</p>
<p id="indent">“Ow! You stupid blotska!”</p>
<p id="indent">Although she would have preferred to make a witty remark, she couldn’t chance it. Instead, she followed up the cheap attack with a swift punch to the temple, sending the man to the floor instantly. The two with him paused for a moment before continuing into the car.</p>
<p id="indent">“What’d you do to Boogieman, girl?”</p>
<p id="indent">“You know who you’re talking to, grunt? I’m the queen. The Blood Moon Pirate. Boogieman’s with the others now.”</p>
<p id="indent">The one who asked charged at her, vastly unprepared for how much practice she had at taking down men twice her size. With a tactful dodge to the right, he bulldozed right past her and left his back wide open for her to jump up on, using her forearm to wrangle him around his neck.</p>
<p id="indent">His partner, unamused, also came running, forcing her to leap off her victim’s shoulders, up and over his head, still wrapped around his neck, and between his legs, sending his forehead to the ground and landing her spiked shoes into the other man’s shins. Both cried out in pain, which was cut short with two bullets expelled from the gun previously in her purse.</p>
<p id="indent">She placed the gun back in and pulled out her crescent moon mask, placing it on her face again. The three bystanders forced to watch the battle watched in plastered fear as she rolled one of the bodies over and removed its watch. </p>
<p id="indent">When she caught them watching her, she raised her index finger to her mouth. “Tell everyone you know that the Blood Moon Pirate has defeated Boogieman, Bijabers’ latest right-hand man.” Without waiting for a response, she placed the watch in her purse and tauntingly strutted out of the train car and into the next. The rest of Boogieman’s men were no </p>
<p id="page-end">8</p>`
const ch1p9 = `<p id="page-start"> </p>
<p id="no-indent">doubt close, and wouldn’t be happy seeing their three defeated brethren.</p>
<p id="indent">The group distantly chased her through a couple more segments of the passenger train until she dipped quietly into one of the private passenger compartments roughly in the middle of the locomotive. She didn’t bother removing her mask at this point. She’d probably still need it.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Oh, about as expected,” she said, as Freckles appeared from underneath the booth seating. “I give it a sixty percent chance we don’t leave this train without a gunfight.”</p>
<p id="indent">“I want her dead!” a voice yells from somewhere outside their hiding spot. A volley of footsteps follows, spreading out across the hallway.</p>
<p id="indent">“Maybe eighty percent.”</p>
<p id="indent">“Meow.”</p>
<p id="indent">“It’s worth a shot. Worst-case scenario, I lose my head to a pole.”</p>
<p id="indent">She jumped up onto the booth and reached for a hatch in the ceiling, twisting the heavy wheel that latched it until the seal on it popped open with a <em>thunk</em>. Not a moment later, the train’s emergency alarms began, giving her less time than anticipated to enact Plan B.</p>
<p id="indent">She’d barely gotten her feet through the hatch when two men busted into the room, guns drawn. She reached out for Freckles, still in the car below, who leaped right into her waiting hands. Then, to stall for a few seconds longer, she slammed the hatch shut.</p>
<p id="indent">The cool spring air battered her every which way as she struggled to get upright. They were in the heart of the Housing District, with tall apartments lining her view on either side of the train. There was no easy way off a vehicle moving at fifty kilometers per hour, especially from the roof. Still, they had to find something soon.</p>
<p id="page-end">9</p>`
const ch1p10 = `<p id="page-start"> </p>
<p id="indent">“Meow.”</p>
<p id="indent">“Oh, true. As long as we can hold out for another minute.”</p>
<p id="indent">She reached into her purse that was swaying dangerously in the wind, found her grasp on a remote, and pressed a large purple “recall” button. When it started to flash, she dropped it back in.</p>
<p id="indent">And not a moment too soon, as the hatch swung open, accompanied by a group of men aiming to join her. She replaced her remote with the pistol, ready to go for some quick shots against an easy spot to camp, when a second hatch from another room popped out.</p>
<p id="indent">“Looks like they’re trying to surround us, Freckles,” she said.</p>
<p id="indent">“Meow.”</p>
<p id="indent">Freckles bounded for the second hatch, lying in wait for his first victim to ascend. Luna took a shot at her target, which pinged loudly and dangerously off the roof of the train.</p>
<p id="indent"><em>How many shots do I have left? Was that the sixth or seventh?</em></p>
<p id="indent">Going into this, she hadn’t figured she’d need to count, which was a poor oversight on her end. That’s a mistake she wouldn’t make a second time.</p>
<p id="indent">Behind her, Freckles pounced on the poor soul who made it through the hatch, sending him off the side of the train to the pavement below. If he survived, he wouldn’t be happy. </p>
<p id="indent">Luna took another shot at the first to exit the hatch she was watching, as the second person began to peek their head out. He took the bullet in his thigh, which sent him crumbling and toppling. There was a good chance he wasn’t going to make it past impact.</p>
<p id="indent">She either had two or three bullets left. These ones really had to count.</p>
<p id="indent"><em>Thunk.</em></p>
<p id="page-end">10</p>`
const ch1p11 = `<p id="page-start"> </p>
<p id="indent">A third hatch released, just past the first. </p>
<p id="indent">Screw counting the bullets. How many seconds left until—</p>
<p id="indent">A loud engine sound filled the air.</p>
<p id="indent"><em>Never mind. Here it comes.</em></p>
<p id="indent">Her airship, the <em>Constellation</em>, was on a direct collision course with the side of the train, no doubt about to completely derail it. Her only chance of survival was hopping onto the deck.</p>
<p id="indent">Freckles recognized the stakes, too. They both lunged for the front of her ship, Luna rolling onto the deck at the exact moment of impact. The sudden deceleration was disorienting halfway through her roll, but she was safe and sound on the familiar wood boards. </p>
<p id="indent">The airship carried the train a bit off the tracks, sending the car she was on into an apartment complex. When all was said and done, all but the engine of the train was dislodged from the rail, and was completely stopped. She reached into her bag for the remote and pressed the button again, signaling for the ship to stop.</p>
<p id="indent">An intense scene of wreckage surrounded her. Nothing she wasn’t familiar with, but it was still mostly bad news. Try as she might, she couldn’t escape the negative publicity loops and the ever-present heat of Orion and the Clockwork breathing down her neck. This certainly wasn’t going to help things.</p>
<p id="indent">“Meow.”</p>
<p id="indent">“Agreed. Let’s bounce before the fun police arrive. Can’t wait to relay this one to Syndra.”</p>
<p id="page-end">11</p>`
const ch1p12 = ``
const ch1p13 = ``
const ch1p14 = ``
const ch1p15 = ``
const ch1p16 = ``
const ch1p17 = ``
const ch1p18 = ``
const ch1 = [ch1p1, ch1p2, ch1p3, ch1p4, ch1p5, ch1p6, ch1p7, ch1p8, ch1p9, ch1p10, ch1p11, ch1p12, ch1p13, ch1p14, ch1p15, ch1p16, ch1p17, ch1p18]

const ch2p1 = `<img src="pages/ch2p1.png">`
const ch2p2 = `<img src="pages/ch2p2.png">`
const ch2p3 = `<img src="pages/ch2p3.png">`
const ch2p4 = `<img src="pages/ch2p4.png">`
const ch2p5 = `<img src="pages/ch2p5.png">`
const ch2p6 = `<img src="pages/ch2p6.png">`
const ch2p7 = `<img src="pages/ch2p7.png">`
const ch2p8 = `<img src="pages/ch2p8.png">`
const ch2p9 = `<img src="pages/ch2p9.png">`
const ch2p10 = `<img src="pages/ch2p10.png">`
const ch2p11 = `<img src="pages/ch2p11.png">`
const ch2p12 = `<img src="pages/ch2p12.png">`
const ch2p13 = `<img src="pages/ch2p13.png">`
const ch2p14 = ``
const ch2p15 = ``
const ch2p16 = ``
const ch2p17 = ``
const ch2p18 = ``
const ch2 = [ch2p1, ch2p2, ch2p3, ch2p4, ch2p5, ch2p6, ch2p7, ch2p8, ch2p9, ch2p10, ch2p11, ch2p12, ch2p13, ch2p14, ch2p15, ch2p16, ch2p17, ch2p18]

const ch3p1 = `<img src="pages/ch3p1.png">`
const ch3p2 = `<img src="pages/ch3p2.png">`
const ch3p3 = `<img src="pages/ch3p3.png">`
const ch3p4 = `<img src="pages/ch3p4.png">`
const ch3p5 = `<img src="pages/ch3p5.png">`
const ch3p6 = `<img src="pages/ch3p6.png">`
const ch3p7 = `<img src="pages/ch3p7.png">`
const ch3p8 = `<img src="pages/ch3p8.png">`
const ch3p9 = `<img src="pages/ch3p9.png">`
const ch3p10 = `<img src="pages/ch3p10.png">`
const ch3p11 = `<img src="pages/ch3p11.png">`
const ch3p12 = `<img src="pages/ch3p12.png">`
const ch3p13 = `<img src="pages/ch3p13.png">`
const ch3p14 = ``
const ch3p15 = ``
const ch3p16 = ``
const ch3p17 = ``
const ch3p18 = ``
const ch3 = [ch3p1, ch3p2, ch3p3, ch3p4, ch3p5, ch3p6, ch3p7, ch3p8, ch3p9, ch3p10, ch3p11, ch3p12, ch3p13, ch3p14, ch3p15, ch3p16, ch3p17, ch3p18]

const ch4p1 = `<img src="pages/ch4p1.png">`
const ch4p2 = `<img src="pages/ch4p2.png">`
const ch4p3 = `<img src="pages/ch4p3.png">`
const ch4p4 = `<img src="pages/ch4p4.png">`
const ch4p5 = `<img src="pages/ch4p5.png">`
const ch4p6 = `<img src="pages/ch4p6.png">`
const ch4p7 = `<img src="pages/ch4p7.png">`
const ch4p8 = `<img src="pages/ch4p8.png">`
const ch4p9 = `<img src="pages/ch4p9.png">`
const ch4p10 = `<img src="pages/ch4p10.png">`
const ch4p11 = `<img src="pages/ch4p11.png">`
const ch4p12 = `<img src="pages/ch4p12.png">`
const ch4p13 = ``
const ch4p14 = ``
const ch4p15 = ``
const ch4p16 = ``
const ch4p17 = ``
const ch4p18 = ``
const ch4 = [ch4p1, ch4p2, ch4p3, ch4p4, ch4p5, ch4p6, ch4p7, ch4p8, ch4p9, ch4p10, ch4p11, ch4p12, ch4p13, ch4p14, ch4p15, ch4p16, ch4p17, ch4p18]

const ch5p1 = ``
const ch5p2 = ``
const ch5p3 = ``
const ch5p4 = ``
const ch5p5 = ``
const ch5p6 = ``
const ch5p7 = ``
const ch5p8 = ``
const ch5p9 = ``
const ch5p10 = ``
const ch5p11 = ``
const ch5p12 = ``
const ch5p13 = ``
const ch5p14 = ``
const ch5p15 = ``
const ch5p16 = ``
const ch5p17 = ``
const ch5p18 = ``
const ch5 = [ch5p1, ch5p2, ch5p3, ch5p4, ch5p5, ch5p6, ch5p7, ch5p8, ch5p9, ch5p10, ch5p11, ch5p12, ch5p13, ch5p14, ch5p15, ch5p16, ch5p17, ch5p18]

const ch6p1 = ``
const ch6p2 = ``
const ch6p3 = ``
const ch6p4 = ``
const ch6p5 = ``
const ch6p6 = ``
const ch6p7 = ``
const ch6p8 = ``
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

const ch7p1 = ``
const ch7p2 = ``
const ch7p3 = ``
const ch7p4 = ``
const ch7p5 = ``
const ch7p6 = ``
const ch7p7 = ``
const ch7p8 = ``
const ch7p9 = ``
const ch7p10 = ``
const ch7p11 = ``
const ch7p12 = ``
const ch7p13 = ``
const ch7p14 = ``
const ch7p15 = ``
const ch7p16 = ``
const ch7p17 = ``
const ch7p18 = ``
const ch7 = [ch7p1, ch7p2, ch7p3, ch7p4, ch7p5, ch7p6, ch7p7, ch7p8, ch7p9, ch7p10, ch7p11, ch7p12, ch7p13, ch7p14, ch7p15, ch7p16, ch7p17, ch7p18]

const ch8p1 = ``
const ch8p2 = ``
const ch8p3 = ``
const ch8p4 = ``
const ch8p5 = ``
const ch8p6 = ``
const ch8p7 = ``
const ch8p8 = ``
const ch8p9 = ``
const ch8p10 = ``
const ch8p11 = ``
const ch8p12 = ``
const ch8p13 = ``
const ch8p14 = ``
const ch8p15 = ``
const ch8p16 = ``
const ch8p17 = ``
const ch8p18 = ``
const ch8 = [ch8p1, ch8p2, ch8p3, ch8p4, ch8p5, ch8p6, ch8p7, ch8p8, ch8p9, ch8p10, ch8p11, ch8p12, ch8p13, ch8p14, ch8p15, ch8p16, ch8p17, ch8p18]

const ch9p1 = ``
const ch9p2 = ``
const ch9p3 = ``
const ch9p4 = ``
const ch9p5 = ``
const ch9p6 = ``
const ch9p7 = ``
const ch9p8 = ``
const ch9p9 = ``
const ch9p10 = ``
const ch9p11 = ``
const ch9p12 = ``
const ch9p13 = ``
const ch9p14 = ``
const ch9p15 = ``
const ch9p16 = ``
const ch9p17 = ``
const ch9p18 = ``
const ch9 = [ch9p1, ch9p2, ch9p3, ch9p4, ch9p5, ch9p6, ch9p7, ch9p8, ch9p9, ch9p10, ch9p11, ch9p12, ch9p13, ch9p14, ch9p15, ch9p16, ch9p17, ch9p18]

const ch10p1 = ``
const ch10p2 = ``
const ch10p3 = ``
const ch10p4 = ``
const ch10p5 = ``
const ch10p6 = ``
const ch10p7 = ``
const ch10p8 = ``
const ch10p9 = ``
const ch10p10 = ``
const ch10p11 = ``
const ch10p12 = ``
const ch10p13 = ``
const ch10p14 = ``
const ch10p15 = ``
const ch10p16 = ``
const ch10p17 = ``
const ch10p18 = ``
const ch10 = [ch10p1, ch10p2, ch10p3, ch10p4, ch10p5, ch10p6, ch10p7, ch10p8, ch10p9, ch10p10, ch10p11, ch10p12, ch10p13, ch10p14, ch10p15, ch10p16, ch10p17, ch10p18]


const chapters = [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10]
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