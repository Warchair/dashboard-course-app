import React from 'react'

function TableCourses(props) {
  return (
    <tr className="bg-white dark:bg-gray-800 ">
        <td scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{props.name}</td>
        <td class="px-6 py-4">{props.category}</td>
        <td class="px-6 py-4">{props.level}</td>
        <td class="px-6 py-4">{props.tools}</td>
        <td class="px-6 py-4">{props.lesson}</td>
        <td class="px-6 py-4">{props.point}</td>
      </tr>
  )
}

export default TableCourses