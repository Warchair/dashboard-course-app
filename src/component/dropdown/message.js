import { Menu } from "@headlessui/react"
import { dataMessage } from "../data/data"
import { AnnotationIcon } from "@heroicons/react/outline"

export function Message() {
	return (
		<Menu as='div' className='relative'>
			<Menu.Button>
				<div className='relative flex items-center gap-4 cursor-pointer'>
					<AnnotationIcon className='w-6 h-6 text-gray-500' />
					<div className='notif-orange'></div>
				</div>
			</Menu.Button>
			<Menu.Items className='origin-top-right absolute right-0 lg:w-52 w-48 flex flex-col rounded-lg bg-white border border-gray-200 dark:border-slate-900 text-sm text-gray-600 dark:text-gray-300 shadow-md dark:bg-slate-800'>
				<h6 className='font-semibold text-gray-600 dark:text-white uppercase px-4 py-2'>
					Messages
				</h6>
				{dataMessage.slice(0, 4).map((item, index) => {
					return (
						<Menu.Item>
							{({ active }) => (
								<a
									className={`px-4 py-2 border-b dark:border-b-slate-900 ${
										active && "bg-zinc-50 dark:bg-slate-700"
									}`}
									href='#'
								>
									<div className='flex gap-2'>
										<div className='w-8 h-8 flex-none rounded-full bg-blue-200'>
											<img src={item.avatar} alt='' />
										</div>
										<div>
											<h5 className='text-sm text-gray-800 dark:text-white'>
												{item.name}
											</h5>
											<h5 className='text-xs'>{item.thumbMsg}</h5>
										</div>
									</div>
								</a>
							)}
						</Menu.Item>
					)
				})}
			</Menu.Items>
		</Menu>
	)
}
