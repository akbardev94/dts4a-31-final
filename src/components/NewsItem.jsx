import React from 'react'

function NewsItem(props) {
  const { title, description, source, author, date, url } = props;
  return (

    <div className="rounded overflow-hidden relative shadow-lg m-3 bg-gray-700">
      <div className="px-4 py-4">
        <div className="text-sm bg-red-600 px-1 text-white rounded-md font-semibold w-fit ml-auto">{source}</div>
        <div className=" mb-2">
          <div className="text-xl font-semibold text-yellow-100 line-clamp-3">{title}</div>
        </div>
        <p className="text-gray-200 text-base line-clamp-4">
          {description}
        </p>
      </div>
      <div className="w-fit ml-auto mb-12"><a className="py-2 rounded-l-md px-2 bg-yellow-400 hover:bg-yellow-500 font-semibold text-yellow-900 text-sm" href={url} target="_blank" rel="noreferrer">Read more</a></div>
      <div className="px-6 pt-4 pb-2 flex justify-between text-sm text-gray-400 absolute bottom-0 w-full">
        <div>{new Date(date).toLocaleDateString()}</div>
        <div>{author ? author : "Unknown"}</div>
      </div>
    </div>
  )
}

export default NewsItem;