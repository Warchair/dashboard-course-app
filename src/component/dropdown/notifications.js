import { Menu } from "@headlessui/react"
import { BellIcon } from "@heroicons/react/outline"

export function Notifications() {
	return (
		<Menu as='div' className='relative'>
			<Menu.Button>
				<div className='relative flex items-center gap-4 cursor-pointer'>
					<BellIcon className='h-6 w-6 text-gray-500' />
					<div className='notif-orange'></div>
				</div>
			</Menu.Button>
			<Menu.Items className='origin-top-right absolute right-0 w-72 flex flex-col rounded-lg bg-white border text-sm text-gray-600 shadow-md'>
				<h6 className='font-semibold text-gray-600 uppercase px-4 py-2'>
					Notifications
				</h6>
				<Menu.Item>
					{({ active }) => (
						<a
							className={`px-4 py-2 border-b ${active && "bg-zinc-50"}`}
							href='#'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							tempora porro doloremque magnam dignissimos cupiditate nesciunt?
							Nesciunt laboriosam error tempora
							<p className='font-semibold text-xs py-1'>23 hour ago</p>
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a
							className={`px-4 py-2 border-b ${active && "bg-zinc-50"}`}
							href='#'
						>
							amet consectetur adipisicing elit. Dolores tempora porro
							doloremque magnam dignissimos cupiditate nesciunt? Nesciunt
							laboriosam error tempora
							<p className='font-semibold text-xs py-1'>June 23</p>
						</a>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	)
}
