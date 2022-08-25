import { Menu } from "@headlessui/react"
import { SearchIcon } from "@heroicons/react/outline"

export function Search() {
	return (
		<Menu as='div'>
			<Menu.Button>
				<div className='md:hidden block p-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 rounded-full cursor-pointer'>
					<SearchIcon className='h-6 w-6 text-gray-500' />
				</div>
			</Menu.Button>
			<Menu.Items className='absolute right-0 top-[78px] w-full md:hidden flex bg-gray-50 dark:bg-slate-700  text-sm text-gray-600 shadow-md'>
				<div className='relative'>
					<input
						type='text'
						className='font-medium text-gray-500 dark:text-gray-200 bg-gray-50 dark:bg-slate-700  pl-10 px-2 py-4 focus:outline-none md:w-64 w-full text-base'
						placeholder='Search of Type'
					/>
					<div className='absolute top-4 left-2'>
						<SearchIcon className='h-6 w-6 text-gray-500' />
					</div>
				</div>
			</Menu.Items>
		</Menu>
	)
}
