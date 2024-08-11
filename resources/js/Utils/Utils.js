export const activeSidebar = (routeName)=>{
    return route().current() == routeName && 'bg-gray-100 dark:bg-gray-900'
}
export const activeMenu = (routeName)=>{
    return route().current() == routeName ? 'text-blue-500 font-bold' : 'text-gray-500 hover:text-gray-400'
}
