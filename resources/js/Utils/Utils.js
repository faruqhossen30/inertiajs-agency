export const activeSidebar = (routeName)=>{
    return route().current() == routeName && 'bg-gray-100 dark:bg-gray-900'
}
