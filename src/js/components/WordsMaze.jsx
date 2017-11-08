import React from 'react'
import Script from 'react-load-script'

import WordsMaze from './WordsMaze/index'

const NATIVE_WIDTH = 750
const NATIVE_HEIGHT = 750

class Maze extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      words: props.words
    }

    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.handleScriptError = this.handleScriptError.bind(this)
    this.handleScriptLoad = this.handleScriptLoad.bind(this)
    this.render = this.render.bind(this)

    this._handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    this.handleResize()
    this.windowListener = window.addEventListener('resize', this._handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._handleResize)

    if (this && this.state && this.state.game) {
      this.state.game.destroy()
    } else {
      console.log('Unsuccessfully tried to destroy Words Maze', this.state)
    }
  }

  handleScriptError () {
    this.forceUpdate()
  }

  handleScriptLoad () {
    const wordsMaze = Object.create(WordsMaze)
    this.setState({
      game: wordsMaze
    })

    if (this && this.state) {
      wordsMaze.init({
        words: this.state.words
      })
    } else {
      console.log('KWords Maze state no longer exists, move on without creating game')
      // debugger
    }
  }

  handleResize () {
    const padding = '30px'
    const w = window.innerWidth - padding
    const scale = w / NATIVE_WIDTH
    const width = Math.round(scale * NATIVE_WIDTH)
    const height = Math.round(scale * NATIVE_HEIGHT)
    this.setState({ width, height })
  }

  render () {
    const width = `${this.state.width}px`
    const height = `${this.state.height}px`
    const style = { width, height }

    return (
      <div className='words-maze'>
        <Script
          onLoad={this.handleScriptLoad}
          onError={this.handleScriptError}
          url='https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.min.js'
        />
        <div id='words-maze' style={style} />
      </div>
    )
  }
}

export default Maze
