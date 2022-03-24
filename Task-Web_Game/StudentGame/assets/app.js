const debug = true
function $ (selector, ctx = document) {
    const nodes = Array.from(document.querySelectorAll(selector))
    return {
        nodes,
        on (event, handler) {
            this.nodes.map(item => {
                item.addEventListener(event, handler)
            })
        }
    }
}
function Player () {
    this.el = $('.player')
    this.score = 0
    //direction
    this.dir = 'right'
    window.addEventListener('keydown', this.onKeyDown.bind(this))
}
Player.prototype.onKeyDown = function (e) {
    switch (e.key) {
        case "ArrowLeft" : {
            if(this.dir !== 'left')
            {
                this.dir = 'left'
                this.el.nodes[0].classList.remove('right')
                this.el.nodes[0].classList.add('left')
            }
        }
        break
        case "ArrowRight" : {
            if(this.dir !== 'right')
            {
                this.dir = 'right'
                this.el.nodes[0].classList.remove('left')
                this.el.nodes[0].classList.add('right')
            }
        }
            break
        default: {
            if(debug) console.log(e.key)
        }
    }
}
function Teacher (name, offset) {
    this.name = name
    this.offset = offset
    this.marks = []
    this.y = 260
    for (let i = 0; i <= 50; i++) {
        this.y -= 250 + this.offset
        this.marks.push(new Mark(this.name,  this.y))
    }

}
function Mark (teacher, y) {
    this.el = document.createElement('div')
    this.el.classList.add('mark')
    this.el.classList.add(teacher)
    this.el.style.top = '80px'
    this.position = {

        y: y
    }

    $('.marks').nodes[0].append(this.el)
}

function Game () {
    this.player = new Player()
    this.teachers = {
        'left': new Teacher('left', 225),
        'right': new Teacher('right', 110)
    }

    setInterval(this.update.bind(this), 1)
}
Game.prototype.update = function () {
    $('.counter').nodes[0].innerText = this.player.score
    for (const teacher in this.teachers) {
        this.teachers[teacher].marks.forEach(mark => {
            mark.position.y += 1
            mark.el.style.top = mark.position.y + 'px'
            if(mark.position.y > 225 &&
                mark.position.y < 300 &&
                this.teachers[teacher].name === this.player.dir
            )
            {
                this.player.score += 1
                mark.el.remove()
                this.teachers[teacher].marks.shift()
            }
            if(mark.position.y > 450) {
                mark.el.remove()
                this.teachers[teacher].marks.shift()
            }
        })
    }
}

window.addEventListener('load', function () {
    const game = new Game()
})
