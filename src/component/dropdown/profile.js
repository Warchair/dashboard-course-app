import person from "../../assets/avatar/Avatar.png"
import { Menu } from "@headlessui/react"

export function Profile() {
	return (
		<Menu as='div' className='relative'>
			<Menu.Button>
				<div className='cursor-pointer'>
					<img src={person} alt='' className='h-10 w-10' />
				</div>
			</Menu.Button>
			<Menu.Items className='origin-top-right absolute right-0 w-40 flex flex-col rounded-lg bg-white dark:bg-slate-800 dark:border-slate-900 border text-sm text-gray-600 dark:text-gray-300 shadow-md'>
				<h6 className='font-semibold text-gray-600 dark:text-white uppercase px-4 py-2'>
					Profile
				</h6>
				<Menu.Item>
					{({ active }) => (
						<a
							className={`px-4 py-2 ${
								active && "bg-zinc-50 dark:bg-slate-700"
							}`}
							href='#'
						>
							Your Profile
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a
							className={`px-4 py-2 border-b dark:border-b-slate-900 ${
								active && "bg-zinc-50 dark:bg-slate-700"
							}`}
							href='#'
						>
							Settings
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a
							className={`px-4 py-2 border-b dark:border-b-slate-900 ${
								active && "bg-zinc-50 dark:bg-slate-700"
							}`}
							href='#'
						>
							Sign out
						</a>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	)
}
