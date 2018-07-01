import { FONTSIZE, FONTSIZERANGE, DOMSCAPE, WALLHEIGHT } from './constant'

export default class Benediction {
  constructor(parent, text = "", duration = 3000, delay = 0, repeat = false) {
    this._parent = parent
    this._text = text
    this._duration = duration
    this._offset = this._getRandomOffset()
    this._playStatus = false
    this._tik = -1
    this._repeat = repeat

    setTimeout(() => {
      this._createDom()
      this._start()
    }, delay)
  }

  _createDom() {
    // 创建弹幕dom对象
    let spanObj = document.createElement('span')

    spanObj.innerHTML = this._text
    this._dom = document.createElement('p')
    this._dom.appendChild(spanObj)
    this._dom.style.transform = `translate3d(-100%, ${this._offset}px, 0)`
    this._dom.style.transition = `all ${this._duration/1000}s linear`
    this._dom.style.fontSize = `${this._getRandomFontsize()}px`

    this._parent.appendChild(this._dom)
  }

  _start() {
    setTimeout(() => {
      if (this._repeat) {
        this.run()
        setInterval(() => {
          this.run()
        }, this._duration + DOMSCAPE)
      } else {
        this.run()
      }
    }, DOMSCAPE)
  }

  _getRandomOffset() {
    // 获取不会遮挡其他弹幕的高度
    const height = WALLHEIGHT - FONTSIZE // 防止文字溢出下边缘
    return parseInt(Math.random() * height)
  }

  _getRandomFontsize() {
    return FONTSIZE + parseInt(FONTSIZERANGE * Math.random())
  }

  run() {
    // 开始播放该弹幕
    // this._offset = this._getRandomOffset()

    this._dom.style.transition = `all ${this._duration/1000}s linear`
    this._dom.style.transform = `translate3d(100%, ${this._offset}px, 0)`
    this._playStatus = true

    this._tik = setTimeout(() => {
      this.stop()
    }, this._duration)
  }

  stop() {
    // 停止播放该弹幕
    if (!this._playStatus) { return }
    clearTimeout(this._tik)

    this._offset = this._getRandomOffset()
    this._dom.style.transition = 'none'
    this._dom.style.transform = `translate3d(-100%, ${this._offset}px, 0)`

    this._playStatus = false
  }
}