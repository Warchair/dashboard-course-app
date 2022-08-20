import { Menu } from "@headlessui/react"

export function Notifications() {
	return (
		<Menu as='div' className='relative'>
			<Menu.Button>
				<div className='relative flex items-center gap-4 cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 text-gray-500'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
						/>
					</svg>
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
