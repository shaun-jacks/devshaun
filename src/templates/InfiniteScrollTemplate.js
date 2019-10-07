import React, { useState, useEffect } from "react"
import Layout from "./Layout"
import Card from "../components/Card"

const InfiniteScroll = ({ edges }) => {
  const [hasMore, setMore] = useState(edges.length > 10)
  const [currentList, addToList] = useState([...edges.slice(0, 10)])
  const [isLoading, setLoading] = useState(false)
  const loadEdges = () => {
    const currentLength = currentList.length
    const more = currentLength < edges.length
    const nextEdges = more ? edges.slice(currentLength, currentLength + 10) : []
    setMore(more)
    addToList([...currentList, ...nextEdges])
  }

  const handleScroll = () => {
    if (!hasMore || isLoading) return
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
    const windowBottom = windowHeight + window.pageYOffset

    if (windowBottom >= docHeight) {
      console.log("loading more")
      loadEdges()
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasMore, currentList])

  return (
    <div>
      {currentList.map(({ node }) => {
        return <Card key={node.id} post={node}></Card>
      })}
    </div>
  )
}
const InfiniteScrollTemplate = props => {
  return <InfiniteScroll {...props} />
}

export default InfiniteScrollTemplate
