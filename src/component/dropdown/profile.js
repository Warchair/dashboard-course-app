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
			<Menu.Items className='origin-top-right absolute right-0 w-40 flex flex-col rounded-lg bg-white border text-sm text-gray-600 shadow-md'>
				<h6 className='font-semibold text-gray-600 uppercase px-4 py-2'>
					Profile
				</h6>
				<Menu.Item>
					{({ active }) => (
						<a className={`px-4 py-2 ${active && "bg-zinc-50"}`} href='#'>
							Your Profile
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a
							className={`px-4 py-2 border-b ${active && "bg-zinc-50"}`}
							href='#'
						>
							Settings
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a
							className={`px-4 py-2 border-b ${active && "bg-zinc-50"}`}
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
