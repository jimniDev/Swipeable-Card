const frame = document.querySelector('.frame')

const imgs = ['./img/nongdamgom1.jpeg', './img/nongdamgom2.jpeg', './img/nongdamgom3.jpeg', './img/nongdamgom4.png','./img/nongdamgom5.jpeg']
let imgCount = 0
for (let i = 0; i<5; i++){
    appendCard()
}

let cur = frame.querySelector('.card:last-child') //최상단 카드
let startX = 0, startY = 0, moveX = 0, moveY = 0
addEventListener(cur)


function appendCard() {
    const firstCard = frame.children[0]
    const newCard = document.createElement('div')
    newCard.className = 'card'
    newCard.style.backgroundImage = `url(${imgs[imgCount++ % imgs.length]})`
    if (firstCard) frame.insertBefore(newCard, firstCard) //첫번째 카드가 있으면 앞에 새카드
    else frame.appendChild(newCard) // 없으면 
}

function addEventListener(card) {
    card.addEventListener('pointerdown', onPointerDown)
}

function setTransform(x, y, deg, duration){
    cur.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`
    if (duration) cur.style.transition = `transform ${duration}ms`

}        

function onPointerDown(e) {
    startX = e.clientX
    startY = e.clientY
    // pointerdown 있을때만 나머지 이벤트 추가
    cur.addEventListener('pointermove', onPointerMove) 
    cur.addEventListener('pointerup', onPointerUp)
    cur.addEventListener('pointerleave', onPointerUp) // 화면밖으로 벗어나도 PointerUp과 같은처리
}

function onPointerMove(e) {
    moveX = e.clientX - startX
    moveY = e.clientY - startY
    setTransform(moveX, moveY, moveX / innerWidth * 50)
}

function onPointerUp() {
    cur.removeEventListener('pointermove', onPointerMove)
    cur.removeEventListener('pointerup', onPointerUp)
    cur.removeEventListener('pointerleave', onPointerUp)
    if (Math.abs(moveX) > frame.clientWidth / 2) {
        /*
        성공
        1. 이벤트 다 지우고
        2. 날아가는 transition
        3. 새카드 넣기
        4. 기존 카드 지우기
        */ 
        cur.removeEventListener('pointerdown', onPointerDown)
        swipeComplete()
    } else {
        /* 
        실패
        1. pointerDown 빼고 나머지 이벤트 지우기
        2. 원위치
        */ 
        swipeCancel()
    }
}

function swipeComplete() {
    // // Fly away 500ms
    const flyX = (Math.abs(moveX) / moveX) * innerWidth * 1.3
    const flyY = (moveY / moveX) * flyX
    setTransform(flyX, flyY, flyX / innerWidth * 50, innerWidth)

    // // Replace Card 
    const prev = cur
    const next = cur.previousElementSibling
    cur = next
    addEventListener(next)
    appendCard()
    setTimeout(() => frame.removeChild(prev), innerWidth)
}
function swipeCancel() {
    setTransform(0, 0, 0, 100)
    setTimeout(() => cur.style.transition = '', 100) // transition initialize
}