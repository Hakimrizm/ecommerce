import { useState } from "react"

export default function Category() {
  const tabs = [
    {
      name_tab: "All"
    },
    {
      name_tab: "Women"
    },
    {
      name_tab: "Kids"
    },
    {
      name_tab: "Men"
    }
  ]

  const [isActive, setIsActive] = useState('All')

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
      <ul className="flex flex-wrap -mb-px">
        {
          tabs.map((tab, i) => (
            <li className="mr-2" key={i}>
              <button
                type="button"
                className={`inline-block p-4 tab ${ isActive == tab.name_tab ? 'tab-active' : '' }`}
                onClick={() => setIsActive(tab.name_tab)}
              >{ tab.name_tab }</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}