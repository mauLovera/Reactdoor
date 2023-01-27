import { useState } from 'react'

interface Props {
  views: React.ReactNode[]
}

/**
 * @function useMultiViewForm
 * @returns Methods for navigating through a multi-view form.
 * @params {views: ReactNode[]} An array of React Elements
 * */

export default function useMultiViewForm({ views }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  /**
   * @method next
   * @description Increment the current view index.
   **/

  function next() {
    setCurrentIndex((i) => {
      if (i >= views.length - 1) return i
      return i + 1
    })
  }

  /**
   * @method back
   * @description Decrement the current view index.
   **/

  function back() {
    setCurrentIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  /**
   * @method goTo
   * @description Go to the passed index within views array.
   **/

  function goTo(index: number) {
    setCurrentIndex((i) => {
      if (index >= views.length - 1 || index <= 0) return i
      return index
    })
  }

  /**
   * @method getProgress
   * @description Get the current percentage number
   * of completion on form.
   * @returns number
   */

  function getProgress(): number {
    return ((currentIndex + 1) / views.length) * 100
  }

  return {
    currentIndex,
    currentView: views[currentIndex],
    isStart: currentIndex === 0,
    isEnd: currentIndex === views.length - 1,
    next, 
    back,
    goTo,
    getProgress
  }
}
